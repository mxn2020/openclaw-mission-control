import {
    Bot, GitBranch, MessageSquare, Shield, Zap, BarChart3,
    Users, Layout, Clock, Puzzle, Workflow, Database,
} from "lucide-react";
import "./FeaturesPage.css";

const featureGroups = [
    {
        title: "Agent Management",
        features: [
            {
                icon: <Bot size={22} />,
                title: "Template Gallery",
                description: "Start with pre-built agent templates — orchestrators, coders, researchers, writers, QA — or create your own from scratch.",
            },
            {
                icon: <Users size={22} />,
                title: "Team Builder",
                description: "Assemble teams with an orchestrator at the helm. Pick specialists, assign roles, and configure each agent's model and prompts.",
            },
            {
                icon: <Puzzle size={22} />,
                title: "Custom Agents",
                description: "Full control over agent configuration: system prompts, model selection, behavior tuning. Save as personal templates for reuse.",
            },
        ],
    },
    {
        title: "Task Orchestration",
        features: [
            {
                icon: <GitBranch size={22} />,
                title: "Multi-View Tasks",
                description: "Manage tasks across kanban boards, sortable lists, and timeline views. Filter by agent, priority, or status.",
            },
            {
                icon: <Workflow size={22} />,
                title: "Auto-Delegation",
                description: "The orchestrator agent automatically breaks goals into subtasks, assigns them to the right specialist, and tracks completion.",
            },
            {
                icon: <Clock size={22} />,
                title: "Progress Tracking",
                description: "Real-time status updates as agents work. See what's in progress, what's blocked, and what's done — instantly.",
            },
        ],
    },
    {
        title: "Communication & Monitoring",
        features: [
            {
                icon: <MessageSquare size={22} />,
                title: "Agent Chat",
                description: "Chat with any agent in your team. Launch sessions, review conversation history, iterate on outputs in a familiar interface.",
            },
            {
                icon: <BarChart3 size={22} />,
                title: "Mission Dashboard",
                description: "Bird's-eye view: active tasks, agent health, recent activity, and quick stats. Everything you need at a glance.",
            },
            {
                icon: <Layout size={22} />,
                title: "Session Management",
                description: "Track all chat sessions across agents. Archive old conversations, resume active ones, search through history.",
            },
        ],
    },
    {
        title: "Infrastructure & Security",
        features: [
            {
                icon: <Shield size={22} />,
                title: "Bring Your Own Keys",
                description: "Use your own OpenClaw instance and LLM API keys. No vendor lock-in. Your data, your infrastructure.",
            },
            {
                icon: <Zap size={22} />,
                title: "Real-time Sync",
                description: "Powered by Convex — instant updates across all clients. No polling, no stale data. Changes propagate in milliseconds.",
            },
            {
                icon: <Database size={22} />,
                title: "Open Source",
                description: "Fully open-source under MIT license. Self-host for free, contribute improvements, fork for your needs.",
            },
        ],
    },
];

export default function FeaturesPage() {
    return (
        <div className="features-page">
            <div className="features-hero">
                <h1 className="animate-fade-in-up">
                    Built for <span className="gradient-text">serious orchestration</span>
                </h1>
                <p className="animate-fade-in-up delay-1">
                    Every feature you need to build, manage, and scale AI agent teams —
                    from a single dashboard.
                </p>
            </div>

            {featureGroups.map((group) => (
                <section key={group.title} className="feature-group">
                    <div className="feature-group-inner">
                        <h2>{group.title}</h2>
                        <div className="feature-group-grid">
                            {group.features.map((f) => (
                                <div key={f.title} className="feat-card glass-card">
                                    <div className="feat-card-icon">{f.icon}</div>
                                    <h3>{f.title}</h3>
                                    <p>{f.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
