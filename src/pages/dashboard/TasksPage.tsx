import { useState } from "react";
import { Plus, Filter, LayoutGrid, List, Clock as ClockIcon } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";
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
    critical: "var(--color-danger)",
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
                <Button variant="primary" icon={<Plus size={16} />}>
                    New Task
                </Button>
            </div>

            {/* View Toggle */}
            <div className="tasks-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <div className="view-toggle" style={{ display: 'flex', background: 'var(--color-bg-secondary)', padding: 4, borderRadius: 'var(--radius-md)' }}>
                    <Button
                        variant={view === "kanban" ? "primary" : "ghost"}
                        size="sm"
                        icon={<LayoutGrid size={14} />}
                        onClick={() => setView("kanban")}
                    >
                        Kanban
                    </Button>
                    <Button
                        variant={view === "list" ? "primary" : "ghost"}
                        size="sm"
                        icon={<List size={14} />}
                        onClick={() => setView("list")}
                    >
                        List
                    </Button>
                    <Button
                        variant={view === "timeline" ? "primary" : "ghost"}
                        size="sm"
                        icon={<ClockIcon size={14} />}
                        onClick={() => setView("timeline")}
                    >
                        Timeline
                    </Button>
                </div>
                <Button variant="outline" size="sm" icon={<Filter size={14} />}>
                    Filters
                </Button>
            </div>

            {/* Kanban View */}
            {view === "kanban" && (
                <div className="kanban-board" style={{ display: 'flex', gap: 'var(--space-4)', overflowX: 'auto', paddingBottom: 'var(--space-4)' }}>
                    {columns.map((col) => {
                        const tasks = demoTasks.filter((t) => t.status === col.key);
                        return (
                            <div key={col.key} className="kanban-column" style={{ width: 300, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
                                <div className="kanban-column-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                                    <span className="kanban-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: col.color }} />
                                    <h3 style={{ margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>{col.label}</h3>
                                    <span className="kanban-count" style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 700, background: 'var(--color-bg-secondary)', padding: '2px 8px', borderRadius: 12 }}>{tasks.length}</span>
                                </div>
                                <div className="kanban-cards" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                    {tasks.map((task) => (
                                        <Card key={task.id} className="task-card" padding="md" style={{ cursor: 'pointer' }}>
                                            <div className="task-card-priority" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                                                <span
                                                    className="priority-dot"
                                                    style={{ width: 6, height: 6, borderRadius: '50%', background: priorityColors[task.priority] }}
                                                />
                                                <span className="priority-label" style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}>{task.priority}</span>
                                            </div>
                                            <h4 style={{ margin: '0 0 12px 0', fontSize: 14, fontWeight: 500 }}>{task.title}</h4>
                                            {task.agent && (
                                                <div className="task-card-agent" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--color-text-secondary)', background: 'var(--color-bg-secondary)', padding: '4px 8px', borderRadius: 12, width: 'fit-content' }}>
                                                    <span>{task.agentIcon}</span>
                                                    <span>{task.agent}</span>
                                                </div>
                                            )}
                                        </Card>
                                    ))}
                                    <Button variant="ghost" size="sm" icon={<Plus size={14} />} style={{ justifyContent: 'center', width: '100%', color: 'var(--color-text-tertiary)' }}>
                                        Add task
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* List View */}
            {view === "list" && (
                <Card className="tasks-list" padding="none">
                    <div className="tasks-list-header" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) 150px 150px 200px', padding: 'var(--space-3) var(--space-5)', borderBottom: '1px solid var(--color-border)', fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)', background: 'var(--color-bg-secondary)' }}>
                        <span className="tl-title">Title</span>
                        <span className="tl-status">Status</span>
                        <span className="tl-priority">Priority</span>
                        <span className="tl-agent">Agent</span>
                    </div>
                    {demoTasks.map((task, i) => (
                        <div key={task.id} className="tasks-list-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) 150px 150px 200px', padding: 'var(--space-4) var(--space-5)', borderBottom: i < demoTasks.length - 1 ? '1px solid var(--color-border)' : 'none', fontSize: 14, alignItems: 'center' }}>
                            <span className="tl-title" style={{ fontWeight: 500 }}>{task.title}</span>
                            <span className="tl-status">
                                <Badge variant="secondary" style={{ textTransform: 'capitalize' }}>{task.status.replace("_", " ")}</Badge>
                            </span>
                            <span className="tl-priority" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--color-text-secondary)', textTransform: 'capitalize' }}>
                                <span
                                    className="priority-dot"
                                    style={{ width: 8, height: 8, borderRadius: '50%', background: priorityColors[task.priority] }}
                                />
                                {task.priority}
                            </span>
                            <span className="tl-agent" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
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
                </Card>
            )}

            {/* Timeline View */}
            {view === "timeline" && (
                <Card className="timeline-view" padding="xl">
                    <div className="timeline-placeholder" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 400 }}>
                        <ClockIcon size={40} style={{ color: 'var(--color-text-tertiary)', marginBottom: 16 }} />
                        <h3 style={{ marginBottom: 8 }}>Timeline View</h3>
                        <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center', maxWidth: 400 }}>Gantt-style timeline coming soon. Tasks will be displayed along a time axis with dependencies.</p>
                    </div>
                </Card>
            )}
        </div>
    );
}
