import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const listBySession = query({
    args: { sessionId: v.id("sessions") },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("messages")
            .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
            .collect();
    },
});

export const send = mutation({
    args: {
        sessionId: v.id("sessions"),
        role: v.union(
            v.literal("user"),
            v.literal("assistant"),
            v.literal("system")
        ),
        content: v.string(),
        agentId: v.optional(v.id("agents")),
        taskId: v.optional(v.id("tasks")),
    },
    handler: async (ctx, args) => {
        const now = new Date().toISOString();
        const id = await ctx.db.insert("messages", {
            ...args,
            createdAt: now,
        });
        // Update session lastMessageAt
        await ctx.db.patch(args.sessionId, { lastMessageAt: now });
        return id;
    },
});
