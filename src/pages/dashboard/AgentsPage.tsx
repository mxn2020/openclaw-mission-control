import { useState } from "react";
import { Plus, Search, Filter, Sparkles } from "lucide-react";
import "./AgentsPage.css";

// Template data (mirrors seed.ts)
const templates = [
    { name: "Mission Commander", role: "Orchestrator", icon: "🧠", color: "#7c5cfc", category: "orchestrator", description: "Central orchestrator that breaks down goals into tasks and delegates to specialists." },
    { name: "Flow Director", role: "Orchestrator", icon: "🎬", color: "#00d4ff", category: "orchestrator", description: "Pipeline orchestrator for sequential multi-step workflows." },
    { name: "Code Architect", role: "Developer", icon: "💻", color: "#34d399", category: "specialist", description: "Expert software engineer for coding, reviewing, and debugging." },
    { name: "Research Analyst", role: "Researcher", icon: "🔍", color: "#60a5fa", category: "specialist", description: "Deep researcher that gathers, synthesizes, and presents information." },
    { name: "Content Writer", role: "Writer", icon: "✍️", color: "#f59e0b", category: "specialist", description: "Creative writer for blogs, docs, marketing copy, and social media." },
    { name: "QA Inspector", role: "Tester", icon: "🔬", color: "#f87171", category: "specialist", description: "Quality assurance specialist that reviews and validates work." },
    { name: "Data Scientist", role: "Analyst", icon: "📊", color: "#a78bfa", category: "specialist", description: "Data analysis, visualization, and ML model building." },
    { name: "Summarizer", role: "Utility", icon: "📋", color: "#9ca3af", category: "utility", description: "Condenses long texts into clear, actionable summaries." },
    { name: "Translator", role: "Utility", icon: "🌐", color: "#2dd4bf", category: "utility", description: "Multi-language translation preserving tone and nuance." },
];

type TabType = "my_agents" | "templates";

export default function AgentsPage() {
    const [tab, setTab] = useState<TabType>("templates");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<string>("all");

    const filteredTemplates = templates.filter((t) => {
        const matchesSearch =
            t.name.toLowerCase().includes(search.toLowerCase()) ||
            t.description.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "all" || t.category === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="agents-page">
            <div className="dashboard-header-bar">
                <div>
                    <h1>Agents</h1>
                    <p>Build your team from templates or create custom agents</p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={16} /> New Agent
                </button>
            </div>

            {/* Tabs */}
            <div className="agents-tabs">
                <button
                    className={`tab ${tab === "my_agents" ? "active" : ""}`}
                    onClick={() => setTab("my_agents")}
                >
                    My Agents
                </button>
                <button
                    className={`tab ${tab === "templates" ? "active" : ""}`}
                    onClick={() => setTab("templates")}
                >
                    <Sparkles size={14} /> Template Gallery
                </button>
            </div>

            {/* Toolbar */}
            <div className="agents-toolbar">
                <div className="search-input">
                    <Search size={16} />
                    <input
                        type="text"
                        placeholder="Search agents..."
                        className="input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="filter-group">
                    <Filter size={14} />
                    {["all", "orchestrator", "specialist", "utility"].map((f) => (
                        <button
                            key={f}
                            className={`btn btn-sm ${filter === f ? "btn-primary" : "btn-ghost"}`}
                            onClick={() => setFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {tab === "my_agents" ? (
                <div className="agents-empty glass-card">
                    <div className="agents-empty-icon">🤖</div>
                    <h3>No agents yet</h3>
                    <p>Create your first agent from a template or start from scratch.</p>
                    <button className="btn btn-primary" onClick={() => setTab("templates")}>
                        Browse Templates
                    </button>
                </div>
            ) : (
                <div className="agents-grid">
                    {filteredTemplates.map((t) => (
                        <div key={t.name} className="agent-card glass-card">
                            <div className="agent-card-header">
                                <div
                                    className="agent-card-icon"
                                    style={{ background: `${t.color}18` }}
                                >
                                    <span>{t.icon}</span>
                                </div>
                                <span
                                    className="badge"
                                    style={{ background: `${t.color}18`, color: t.color }}
                                >
                                    {t.category}
                                </span>
                            </div>
                            <h3>{t.name}</h3>
                            <p className="agent-card-role">{t.role}</p>
                            <p className="agent-card-desc">{t.description}</p>
                            <button className="btn btn-secondary btn-sm agent-card-cta">
                                <Plus size={14} /> Add to My Agents
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
