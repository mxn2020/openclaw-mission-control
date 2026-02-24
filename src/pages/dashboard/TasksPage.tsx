import { useState } from "react";
import { Plus, Filter, LayoutGrid, List, Clock } from "lucide-react";
import "./TasksPage.css";

type ViewMode = "kanban" | "list" | "timeline";
type TaskStatus = "backlog" | "todo" | "in_progress" | "review" | "done";

interface Task {
    id: string;
    title: string;
    status: TaskStatus;
    priority: "low" | "medium" | "high" | "critical";
    agent?: string;
    agentIcon?: string;
}

// Demo tasks for visual layout
const demoTasks: Task[] = [
    { id: "1", title: "Research competitor landscape", status: "done", priority: "high", agent: "Research Analyst", agentIcon: "🔍" },
    { id: "2", title: "Draft landing page copy", status: "review", priority: "medium", agent: "Content Writer", agentIcon: "✍️" },
    { id: "3", title: "Implement auth flow", status: "in_progress", priority: "critical", agent: "Code Architect", agentIcon: "💻" },
    { id: "4", title: "Design API schema", status: "in_progress", priority: "high", agent: "Code Architect", agentIcon: "💻" },
    { id: "5", title: "Write unit tests", status: "todo", priority: "medium", agent: "QA Inspector", agentIcon: "🔬" },
    { id: "6", title: "Analyze user feedback data", status: "todo", priority: "low", agent: "Data Scientist", agentIcon: "📊" },
    { id: "7", title: "Translate docs to German", status: "backlog", priority: "low", agent: "Translator", agentIcon: "🌐" },
    { id: "8", title: "Create blog post series", status: "backlog", priority: "medium" },
];

const columns: { key: TaskStatus; label: string; color: string }[] = [
    { key: "backlog", label: "Backlog", color: "var(--color-text-tertiary)" },
    { key: "todo", label: "To Do", color: "var(--color-info)" },
    { key: "in_progress", label: "In Progress", color: "var(--color-warning)" },
    { key: "review", label: "Review", color: "var(--color-accent-primary)" },
    { key: "done", label: "Done", color: "var(--color-success)" },
];

const priorityColors: Record<string, string> = {
    low: "var(--color-text-tertiary)",
    medium: "var(--color-info)",
    high: "var(--color-warning)",
    critical: "var(--color-error)",
};

export default function TasksPage() {
    const [view, setView] = useState<ViewMode>("kanban");

    return (
        <div className="tasks-page">
            <div className="dashboard-header-bar">
                <div>
                    <h1>Tasks</h1>
                    <p>View and manage all work across your agent team</p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={16} /> New Task
                </button>
            </div>

            {/* View Toggle */}
            <div className="tasks-toolbar">
                <div className="view-toggle">
                    <button
                        className={`btn btn-sm ${view === "kanban" ? "btn-primary" : "btn-ghost"}`}
                        onClick={() => setView("kanban")}
                    >
                        <LayoutGrid size={14} /> Kanban
                    </button>
                    <button
                        className={`btn btn-sm ${view === "list" ? "btn-primary" : "btn-ghost"}`}
                        onClick={() => setView("list")}
                    >
                        <List size={14} /> List
                    </button>
                    <button
                        className={`btn btn-sm ${view === "timeline" ? "btn-primary" : "btn-ghost"}`}
                        onClick={() => setView("timeline")}
                    >
                        <Clock size={14} /> Timeline
                    </button>
                </div>
                <button className="btn btn-ghost btn-sm">
                    <Filter size={14} /> Filters
                </button>
            </div>

            {/* Kanban View */}
            {view === "kanban" && (
                <div className="kanban-board">
                    {columns.map((col) => {
                        const tasks = demoTasks.filter((t) => t.status === col.key);
                        return (
                            <div key={col.key} className="kanban-column">
                                <div className="kanban-column-header">
                                    <span className="kanban-dot" style={{ background: col.color }} />
                                    <h3>{col.label}</h3>
                                    <span className="kanban-count">{tasks.length}</span>
                                </div>
                                <div className="kanban-cards">
                                    {tasks.map((task) => (
                                        <div key={task.id} className="task-card glass-card">
                                            <div className="task-card-priority">
                                                <span
                                                    className="priority-dot"
                                                    style={{ background: priorityColors[task.priority] }}
                                                />
                                                <span className="priority-label">{task.priority}</span>
                                            </div>
                                            <h4>{task.title}</h4>
                                            {task.agent && (
                                                <div className="task-card-agent">
                                                    <span>{task.agentIcon}</span>
                                                    <span>{task.agent}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <button className="kanban-add btn btn-ghost btn-sm">
                                        <Plus size={14} /> Add task
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* List View */}
            {view === "list" && (
                <div className="tasks-list glass-card">
                    <div className="tasks-list-header">
                        <span className="tl-title">Title</span>
                        <span className="tl-status">Status</span>
                        <span className="tl-priority">Priority</span>
                        <span className="tl-agent">Agent</span>
                    </div>
                    {demoTasks.map((task) => (
                        <div key={task.id} className="tasks-list-row">
                            <span className="tl-title">{task.title}</span>
                            <span className="tl-status">
                                <span className="badge badge-neutral">{task.status.replace("_", " ")}</span>
                            </span>
                            <span className="tl-priority">
                                <span
                                    className="priority-dot"
                                    style={{ background: priorityColors[task.priority] }}
                                />
                                {task.priority}
                            </span>
                            <span className="tl-agent">
                                {task.agent ? (
                                    <>
                                        {task.agentIcon} {task.agent}
                                    </>
                                ) : (
                                    <span style={{ color: "var(--color-text-tertiary)" }}>Unassigned</span>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Timeline View */}
            {view === "timeline" && (
                <div className="timeline-view glass-card">
                    <div className="timeline-placeholder">
                        <Clock size={40} />
                        <h3>Timeline View</h3>
                        <p>Gantt-style timeline coming soon. Tasks will be displayed along a time axis with dependencies.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
