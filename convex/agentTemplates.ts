import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("agentTemplates").collect();
    },
});

export const listByCategory = query({
    args: {
        category: v.union(
            v.literal("orchestrator"),
            v.literal("specialist"),
            v.literal("utility")
        ),
    },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("agentTemplates")
            .withIndex("by_category", (q) => q.eq("category", args.category))
            .collect();
    },
});

export const get = query({
    args: { id: v.id("agentTemplates") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});
