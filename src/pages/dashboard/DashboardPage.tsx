import {
    Bot,
    ListTodo,
    MessageSquare,
    Users,
    Activity,
    ArrowRight,
    CheckCircle2,
    Clock,
    AlertCircle,
    TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@geenius-ui/react-css";
import "./DashboardPage.css";

// Demo data for the initial dashboard view
const stats = [
    { label: "Active Agents", value: "0", icon: <Bot size={20} />, color: "#7c5cfc" },
    { label: "Tasks in Progress", value: "0", icon: <Clock size={20} />, color: "#00d4ff" },
    { label: "Completed Tasks", value: "0", icon: <CheckCircle2 size={20} />, color: "#34d399" },
    { label: "Active Sessions", value: "0", icon: <MessageSquare size={20} />, color: "#f59e0b" },
];

const quickActions = [
    {
        icon: <Bot size={24} />,
        title: "Create an Agent",
        description: "Build from a template or start from scratch",
        to: "/dashboard/agents",
        color: "#7c5cfc",
    },
    {
        icon: <Users size={24} />,
        title: "Build a Team",
        description: "Assemble an orchestrator + specialists",
        to: "/dashboard/teams",
        color: "#00d4ff",
    },
    {
        icon: <ListTodo size={24} />,
        title: "Create a Task",
        description: "Define work and assign to agents",
        to: "/dashboard/tasks",
        color: "#34d399",
    },
    {
        icon: <MessageSquare size={24} />,
        title: "Start a Chat",
        description: "Launch a session with any agent",
        to: "/dashboard/chat",
        color: "#f59e0b",
    },
];

const recentActivity = [
    { icon: <Activity size={16} />, text: "Welcome to Mission Control!", time: "Just now", type: "info" },
    { icon: <AlertCircle size={16} />, text: "Connect your OpenClaw instance to get started", time: "Setup required", type: "warning" },
    { icon: <TrendingUp size={16} />, text: "Browse the template gallery to add your first agent", time: "Tip", type: "info" },
];

export default function DashboardPage() {
    return (
        <div className="dashboard-overview">
            <div className="dashboard-header-bar">
                <div>
                    <h1>Mission Overview</h1>
                    <p>Your command center at a glance</p>
                </div>
            </div>

            {/* Stats */}
            <div className="stats-grid">
                {stats.map((s) => (
                    <Card key={s.label} className="stat-card" padding="md">
                        <div className="stat-icon" style={{ background: `${s.color}20`, color: s.color, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 16 }}>
                            {s.icon}
                        </div>
                        <div className="stat-value" style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--font-mono)', marginBottom: 4 }}>{s.value}</div>
                        <div className="stat-label" style={{ color: 'var(--color-text-secondary)', fontSize: 13, fontWeight: 500 }}>{s.label}</div>
                    </Card>
                ))}
            </div>

            {/* Quick Actions */}
            <section className="dashboard-section" style={{ marginTop: 'var(--space-8)' }}>
                <h2 style={{ marginBottom: 'var(--space-4)', fontSize: 18, fontWeight: 600 }}>Quick Actions</h2>
                <div className="quick-actions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
                    {quickActions.map((action) => (
                        <Link
                            key={action.title}
                            to={action.to}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <Card className="quick-action-card" padding="md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', transition: 'transform 0.2s ease', cursor: 'pointer' }}>
                                <div
                                    className="quick-action-icon"
                                    style={{ background: `${action.color}15`, color: action.color, width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                                >
                                    {action.icon}
                                </div>
                                <div className="quick-action-content" style={{ flex: 1 }}>
                                    <h3 style={{ margin: '0 0 4px 0', fontSize: 16 }}>{action.title}</h3>
                                    <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-tertiary)' }}>{action.description}</p>
                                </div>
                                <ArrowRight size={16} className="quick-action-arrow" style={{ color: 'var(--color-text-tertiary)' }} />
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Recent Activity */}
            <section className="dashboard-section" style={{ marginTop: 'var(--space-8)' }}>
                <h2 style={{ marginBottom: 'var(--space-4)', fontSize: 18, fontWeight: 600 }}>Activity</h2>
                <Card className="activity-list" padding="none">
                    {recentActivity.map((item, i) => (
                        <div key={i} className={`activity-item ${item.type}`} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)', borderBottom: i < recentActivity.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                            <div className="activity-icon" style={{ color: item.type === 'warning' ? 'var(--color-warning)' : item.type === 'info' ? 'var(--color-info)' : 'var(--color-text-secondary)' }}>{item.icon}</div>
                            <span className="activity-text" style={{ flex: 1, fontSize: 14 }}>{item.text}</span>
                            <span className="activity-time" style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{item.time}</span>
                        </div>
                    ))}
                </Card>
            </section>
        </div>
    );
}
