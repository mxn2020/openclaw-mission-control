import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("teams")
            .withIndex("by_user", (q) => q.eq("userId", args.userId))
            .collect();
    },
});

export const get = query({
    args: { id: v.id("teams") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});

export const getWithAgents = query({
    args: { id: v.id("teams") },
    handler: async (ctx, args) => {
        const team = await ctx.db.get(args.id);
        if (!team) return null;
        const orchestrator = await ctx.db.get(team.orchestratorId);
        const agents = await Promise.all(
            team.agentIds.map((id) => ctx.db.get(id))
        );
        return { ...team, orchestrator, agents: agents.filter(Boolean) };
    },
});

export const create = mutation({
    args: {
        userId: v.string(),
        name: v.string(),
        description: v.string(),
        orchestratorId: v.id("agents"),
        agentIds: v.array(v.id("agents")),
        icon: v.string(),
        color: v.string(),
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert("teams", {
            ...args,
            createdAt: new Date().toISOString(),
        });
        return id;
    },
});

export const update = mutation({
    args: {
        id: v.id("teams"),
        name: v.optional(v.string()),
        description: v.optional(v.string()),
        orchestratorId: v.optional(v.id("agents")),
        agentIds: v.optional(v.array(v.id("agents"))),
        icon: v.optional(v.string()),
        color: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const { id, ...updates } = args;
        const patch: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(updates)) {
            if (value !== undefined) patch[key] = value;
        }
        await ctx.db.patch(id, patch);
    },
});

export const remove = mutation({
    args: { id: v.id("teams") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    },
});
