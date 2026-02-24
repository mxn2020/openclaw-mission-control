import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listByAgent = query({
    args: { agentId: v.id("agents") },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("sessions")
            .withIndex("by_agent", (q) => q.eq("agentId", args.agentId))
            .collect();
    },
});

export const listByUser = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("sessions")
            .withIndex("by_user", (q) => q.eq("userId", args.userId))
            .collect();
    },
});

export const get = query({
    args: { id: v.id("sessions") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});

export const create = mutation({
    args: {
        userId: v.string(),
        agentId: v.id("agents"),
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert("sessions", {
            ...args,
            status: "active",
            createdAt: new Date().toISOString(),
        });
        return id;
    },
});

export const archive = mutation({
    args: { id: v.id("sessions") },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, { status: "archived" });
    },
});
