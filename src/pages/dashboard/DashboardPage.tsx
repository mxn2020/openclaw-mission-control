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
                    <div key={s.label} className="stat-card glass-card">
                        <div className="stat-icon" style={{ background: `${s.color}20`, color: s.color }}>
                            {s.icon}
                        </div>
                        <div className="stat-value">{s.value}</div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <section className="dashboard-section">
                <h2>Quick Actions</h2>
                <div className="quick-actions-grid">
                    {quickActions.map((action) => (
                        <Link
                            key={action.title}
                            to={action.to}
                            className="quick-action-card glass-card"
                        >
                            <div
                                className="quick-action-icon"
                                style={{ background: `${action.color}15`, color: action.color }}
                            >
                                {action.icon}
                            </div>
                            <div className="quick-action-content">
                                <h3>{action.title}</h3>
                                <p>{action.description}</p>
                            </div>
                            <ArrowRight size={16} className="quick-action-arrow" />
                        </Link>
                    ))}
                </div>
            </section>

            {/* Recent Activity */}
            <section className="dashboard-section">
                <h2>Activity</h2>
                <div className="activity-list glass-card">
                    {recentActivity.map((item, i) => (
                        <div key={i} className={`activity-item ${item.type}`}>
                            <div className="activity-icon">{item.icon}</div>
                            <span className="activity-text">{item.text}</span>
                            <span className="activity-time">{item.time}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
