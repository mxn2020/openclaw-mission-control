import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // ── Authentication ──────────────────────────────────────
    users: defineTable({
        name: v.string(),
        email: v.string(),
        avatarUrl: v.optional(v.string()),
        plan: v.union(v.literal("free"), v.literal("pro")),
        onboarded: v.boolean(),
        createdAt: v.string(),
    }).index("by_email", ["email"]),

    // ── Connections (BYOI) ──────────────────────────────────
    connections: defineTable({
        userId: v.string(),
        // OpenClaw instance
        openclawUrl: v.optional(v.string()),
        openclawToken: v.optional(v.string()),
        // LLM API keys
        openaiKey: v.optional(v.string()),
        anthropicKey: v.optional(v.string()),
        googleKey: v.optional(v.string()),
        customProviderName: v.optional(v.string()),
        customProviderKey: v.optional(v.string()),
        customProviderBaseUrl: v.optional(v.string()),
        updatedAt: v.string(),
    }).index("by_user", ["userId"]),

    // ── Agent Templates ─────────────────────────────────────
    agentTemplates: defineTable({
        name: v.string(),
        role: v.string(),
        description: v.string(),
        icon: v.string(),
        color: v.string(),
        category: v.union(
            v.literal("orchestrator"),
            v.literal("specialist"),
            v.literal("utility")
        ),
        systemPrompt: v.string(),
        defaultModel: v.string(),
        tags: v.array(v.string()),
        isBuiltIn: v.boolean(),
    }).index("by_category", ["category"]),

    // ── Agents ──────────────────────────────────────────────
    agents: defineTable({
        userId: v.string(),
        templateId: v.optional(v.id("agentTemplates")),
        name: v.string(),
        role: v.string(),
        description: v.string(),
        icon: v.string(),
        color: v.string(),
        systemPrompt: v.string(),
        model: v.string(),
        status: v.union(
            v.literal("active"),
            v.literal("idle"),
            v.literal("busy"),
            v.literal("offline")
        ),
        isOrchestrator: v.boolean(),
        config: v.optional(v.string()), // JSON string for extra config
        createdAt: v.string(),
    })
        .index("by_user", ["userId"])
        .index("by_user_orchestrator", ["userId", "isOrchestrator"]),

    // ── Teams ───────────────────────────────────────────────
    teams: defineTable({
        userId: v.string(),
        name: v.string(),
        description: v.string(),
        orchestratorId: v.id("agents"),
        agentIds: v.array(v.id("agents")),
        icon: v.string(),
        color: v.string(),
        createdAt: v.string(),
    }).index("by_user", ["userId"]),

    // ── Tasks ───────────────────────────────────────────────
    tasks: defineTable({
        userId: v.string(),
        teamId: v.optional(v.id("teams")),
        assignedAgentId: v.optional(v.id("agents")),
        parentTaskId: v.optional(v.id("tasks")),
        title: v.string(),
        description: v.string(),
        status: v.union(
            v.literal("backlog"),
            v.literal("todo"),
            v.literal("in_progress"),
            v.literal("review"),
            v.literal("done"),
            v.literal("cancelled")
        ),
        priority: v.union(
            v.literal("low"),
            v.literal("medium"),
            v.literal("high"),
            v.literal("critical")
        ),
        result: v.optional(v.string()),
        startedAt: v.optional(v.string()),
        completedAt: v.optional(v.string()),
        createdAt: v.string(),
    })
        .index("by_user", ["userId"])
        .index("by_user_status", ["userId", "status"])
        .index("by_agent", ["assignedAgentId"])
        .index("by_team", ["teamId"])
        .index("by_parent", ["parentTaskId"]),

    // ── Sessions ────────────────────────────────────────────
    sessions: defineTable({
        userId: v.string(),
        agentId: v.id("agents"),
        title: v.string(),
        status: v.union(v.literal("active"), v.literal("archived")),
        createdAt: v.string(),
        lastMessageAt: v.optional(v.string()),
    })
        .index("by_user", ["userId"])
        .index("by_agent", ["agentId"]),

    // ── Messages ────────────────────────────────────────────
    messages: defineTable({
        sessionId: v.id("sessions"),
        role: v.union(
            v.literal("user"),
            v.literal("assistant"),
            v.literal("system")
        ),
        content: v.string(),
        agentId: v.optional(v.id("agents")),
        taskId: v.optional(v.id("tasks")),
        createdAt: v.string(),
    }).index("by_session", ["sessionId"]),
});
