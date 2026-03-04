import { useState } from "react";
import { Plus, Search, Filter, Sparkles } from "lucide-react";
import { Button, Input, Card, Badge } from "@geenius-ui/react-css";
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
                <Button variant="primary" icon={<Plus size={16} />}>
                    New Agent
                </Button>
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
                <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
                    <Search size={16} style={{ position: "absolute", left: 12, color: "var(--color-text-tertiary)" }} />
                    <Input
                        type="text"
                        placeholder="Search agents..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ paddingLeft: 34, width: 260 }}
                    />
                </div>
                <div className="filter-group">
                    <Filter size={14} />
                    {["all", "orchestrator", "specialist", "utility"].map((f) => (
                        <Button
                            key={f}
                            variant={filter === f ? "primary" : "ghost"}
                            size="sm"
                            onClick={() => setFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </Button>
                    ))}
                </div>
            </div>

            {tab === "my_agents" ? (
                <Card className="agents-empty" padding="xl">
                    <div className="agents-empty-icon" style={{ fontSize: 48, textAlign: 'center', marginBottom: 16 }}>🤖</div>
                    <h3 style={{ textAlign: 'center', marginBottom: 8 }}>No agents yet</h3>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: 24 }}>Create your first agent from a template or start from scratch.</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="primary" onClick={() => setTab("templates")}>
                            Browse Templates
                        </Button>
                    </div>
                </Card>
            ) : (
                <div className="agents-grid">
                    {filteredTemplates.map((t) => (
                        <Card key={t.name} className="agent-card" padding="md">
                            <div className="agent-card-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                                <div
                                    className="agent-card-icon"
                                    style={{ background: `${t.color}18`, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, fontSize: 20 }}
                                >
                                    <span>{t.icon}</span>
                                </div>
                                <span
                                    style={{ background: `${t.color}18`, color: t.color, padding: '4px 8px', borderRadius: 12, fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}
                                >
                                    {t.category}
                                </span>
                            </div>
                            <h3 style={{ margin: '0 0 4px 0', fontSize: 16 }}>{t.name}</h3>
                            <p className="agent-card-role" style={{ color: 'var(--color-text-secondary)', fontSize: 13, marginBottom: 12 }}>{t.role}</p>
                            <p className="agent-card-desc" style={{ fontSize: 13, color: 'var(--color-text-tertiary)', marginBottom: 20, flex: 1 }}>{t.description}</p>
                            <Button variant="outline" size="sm" icon={<Plus size={14} />} style={{ width: '100%', justifyContent: 'center' }}>
                                Add to My Agents
                            </Button>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
