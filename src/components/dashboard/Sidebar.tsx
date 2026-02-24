import { NavLink, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Bot,
    ListTodo,
    MessageSquare,
    Users,
    Plug,
    Settings,
    Rocket,
    ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import "./Sidebar.css";

const navItems = [
    { to: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Overview", end: true },
    { to: "/dashboard/agents", icon: <Bot size={20} />, label: "Agents" },
    { to: "/dashboard/tasks", icon: <ListTodo size={20} />, label: "Tasks" },
    { to: "/dashboard/chat", icon: <MessageSquare size={20} />, label: "Chat" },
    { to: "/dashboard/teams", icon: <Users size={20} />, label: "Teams" },
    { to: "/dashboard/connections", icon: <Plug size={20} />, label: "Connections" },
    { to: "/dashboard/settings", icon: <Settings size={20} />, label: "Settings" },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    return (
        <aside className={`dashboard-sidebar ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar-header">
                <NavLink to="/" className="sidebar-logo">
                    <Rocket size={22} />
                    {!collapsed && <span>Mission<span className="gradient-text">Control</span></span>}
                </NavLink>
                <button
                    className="btn btn-icon btn-ghost sidebar-toggle"
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label="Toggle sidebar"
                >
                    <ChevronLeft size={18} style={{ transform: collapsed ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? "active" : ""}`
                        }
                        title={collapsed ? item.label : undefined}
                    >
                        {item.icon}
                        {!collapsed && <span>{item.label}</span>}
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                {!collapsed && (
                    <div className="sidebar-plan badge badge-info">Free Plan</div>
                )}
            </div>
        </aside>
    );
}
