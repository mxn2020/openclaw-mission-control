import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("agents")
            .withIndex("by_user", (q) => q.eq("userId", args.userId))
            .collect();
    },
});

export const get = query({
    args: { id: v.id("agents") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});

export const getOrchestrator = query({
    args: { userId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query("agents")
            .withIndex("by_user_orchestrator", (q) =>
                q.eq("userId", args.userId).eq("isOrchestrator", true)
            )
            .first();
    },
});

export const create = mutation({
    args: {
        userId: v.string(),
        templateId: v.optional(v.id("agentTemplates")),
        name: v.string(),
        role: v.string(),
        description: v.string(),
        icon: v.string(),
        color: v.string(),
        systemPrompt: v.string(),
        model: v.string(),
        isOrchestrator: v.boolean(),
        config: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const id = await ctx.db.insert("agents", {
            ...args,
            status: "idle",
            createdAt: new Date().toISOString(),
        });
        return id;
    },
});

export const update = mutation({
    args: {
        id: v.id("agents"),
        name: v.optional(v.string()),
        role: v.optional(v.string()),
        description: v.optional(v.string()),
        icon: v.optional(v.string()),
        color: v.optional(v.string()),
        systemPrompt: v.optional(v.string()),
        model: v.optional(v.string()),
        status: v.optional(
            v.union(
                v.literal("active"),
                v.literal("idle"),
                v.literal("busy"),
                v.literal("offline")
            )
        ),
        config: v.optional(v.string()),
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
    args: { id: v.id("agents") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
    },
});

export const createFromTemplate = mutation({
    args: {
        userId: v.string(),
        templateId: v.id("agentTemplates"),
        nameOverride: v.optional(v.string()),
        modelOverride: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const template = await ctx.db.get(args.templateId);
        if (!template) throw new Error("Template not found");

        const id = await ctx.db.insert("agents", {
            userId: args.userId,
            templateId: args.templateId,
            name: args.nameOverride ?? template.name,
            role: template.role,
            description: template.description,
            icon: template.icon,
            color: template.color,
            systemPrompt: template.systemPrompt,
            model: args.modelOverride ?? template.defaultModel,
            status: "idle",
            isOrchestrator: template.category === "orchestrator",
            createdAt: new Date().toISOString(),
        });
        return id;
    },
});
