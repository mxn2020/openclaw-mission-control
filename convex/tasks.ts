import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("tasks")
            .withIndex("by_user", (q) => q.eq("userId", args.userId))
            .collect();
    },
});

export const listByStatus = query({
    args: {
        userId: v.string(),
        status: v.union(
            v.literal("backlog"),
            v.literal("todo"),
            v.literal("in_progress"),
            v.literal("review"),
            v.literal("done"),
            v.literal("cancelled")
        ),
    },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("tasks")
            .withIndex("by_user_status", (q) =>
                q.eq("userId", args.userId).eq("status", args.status)
            )
            .collect();
    },
});

export const listByAgent = query({
    args: { agentId: v.id("agents") },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("tasks")
            .withIndex("by_agent", (q) => q.eq("assignedAgentId", args.agentId))
            .collect();
    },
});

export const listSubtasks = query({
    args: { parentId: v.id("tasks") },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("tasks")
            .withIndex("by_parent", (q) => q.eq("parentTaskId", args.parentId))
            .collect();
    },
});

export const get = query({
    args: { id: v.id("tasks") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});

export const create = mutation({
    args: {
        userId: v.string(),
        teamId: v.optional(v.id("teams")),
        assignedAgentId: v.optional(v.id("agents")),
        parentTaskId: v.optional(v.id("tasks")),
        title: v.string(),
        description: v.string(),
        priority: v.union(
            v.literal("low"),
            v.literal("medium"),
            v.literal("high"),
            v.literal("critical")
        ),
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert("tasks", {
            ...args,
            status: "backlog",
            createdAt: new Date().toISOString(),
        });
        return id;
    },
});

export const updateStatus = mutation({
    args: {
        id: v.id("tasks"),
        status: v.union(
            v.literal("backlog"),
            v.literal("todo"),
            v.literal("in_progress"),
            v.literal("review"),
            v.literal("done"),
            v.literal("cancelled")
        ),
    },
    handler: async (ctx, args) => {
        const patch: Record<string, unknown> = { status: args.status };
        if (args.status === "in_progress") {
            patch.startedAt = new Date().toISOString();
        }
        if (args.status === "done" || args.status === "cancelled") {
            patch.completedAt = new Date().toISOString();
        }
        await ctx.db.patch(args.id, patch);
    },
});

export const assign = mutation({
    args: {
        id: v.id("tasks"),
        agentId: v.id("agents"),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, { assignedAgentId: args.agentId });
    },
});

export const update = mutation({
    args: {
        id: v.id("tasks"),
        title: v.optional(v.string()),
        description: v.optional(v.string()),
        priority: v.optional(
            v.union(
                v.literal("low"),
                v.literal("medium"),
                v.literal("high"),
                v.literal("critical")
            )
        ),
        result: v.optional(v.string()),
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
    args: { id: v.id("tasks") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    },
});
