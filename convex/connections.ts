import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("connections")
            .withIndex("by_user", (q) => q.eq("userId", args.userId))
            .first();
    },
});

export const upsert = mutation({
    args: {
        userId: v.string(),
        openclawUrl: v.optional(v.string()),
        openclawToken: v.optional(v.string()),
        openaiKey: v.optional(v.string()),
        anthropicKey: v.optional(v.string()),
        googleKey: v.optional(v.string()),
        customProviderName: v.optional(v.string()),
        customProviderKey: v.optional(v.string()),
        customProviderBaseUrl: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const { userId, ...updates } = args;
        const existing = await ctx.db
            .query("connections")
            .withIndex("by_user", (q) => q.eq("userId", userId))
            .first();

        const patch: Record<string, unknown> = {
            updatedAt: new Date().toISOString(),
        };
        for (const [key, value] of Object.entries(updates)) {
            if (value !== undefined) patch[key] = value;
        }

        if (existing) {
            await ctx.db.patch(existing._id, patch);
            return existing._id;
        } else {
            const id = await ctx.db.insert("connections", {
                userId,
                updatedAt: new Date().toISOString(),
                ...updates,
            });
            return id;
        }
    },
});
