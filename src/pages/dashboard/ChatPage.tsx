import { useState } from "react";
import { Send, Plus, MessageSquare, Bot } from "lucide-react";
import { Button, Input, Card, Badge } from "@geenius-ui/react-css";
import "./ChatPage.css";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: string;
}

const demoAgents = [
    { name: "Mission Commander", icon: "🧠", color: "#7c5cfc", lastMessage: "Awaiting instructions..." },
    { name: "Code Architect", icon: "💻", color: "#34d399", lastMessage: "Ready to code." },
    { name: "Research Analyst", icon: "🔍", color: "#60a5fa", lastMessage: "Waiting for a research query." },
];

const demoMessages: Message[] = [
    { id: "1", role: "assistant", content: "Hello! I'm the Mission Commander 🧠. I can help you orchestrate your agent team, break down complex goals into tasks, and track progress. What would you like to accomplish today?", timestamp: "Just now" },
];

export default function ChatPage() {
    const [selectedAgent, setSelectedAgent] = useState(0);
    const [input, setInput] = useState("");
    const [messages] = useState<Message[]>(demoMessages);

    return (
        <div className="chat-page">
            {/* Agent sidebar */}
            <Card className="chat-agents" padding="none">
                <div className="chat-agents-header" style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>Sessions</h3>
                    <Button variant="ghost" size="sm" icon={<Plus size={16} />} title="New session" />
                </div>
                <div className="chat-agent-list" style={{ overflowY: 'auto' }}>
                    {demoAgents.map((agent, i) => (
                        <button
                            key={agent.name}
                            className={`chat-agent-item ${i === selectedAgent ? "active" : ""}`}
                            onClick={() => setSelectedAgent(i)}
                        >
                            <div
                                className="chat-agent-icon"
                                style={{ background: `${agent.color}18` }}
                            >
                                {agent.icon}
                            </div>
                            <div className="chat-agent-info">
                                <span className="chat-agent-name">{agent.name}</span>
                                <span className="chat-agent-preview">{agent.lastMessage}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </Card>

            {/* Chat area */}
            <div className="chat-main" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-bg-primary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                <div className="chat-header" style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)' }}>
                    <div className="chat-header-agent" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <span className="chat-header-icon" style={{ fontSize: 24 }}>{demoAgents[selectedAgent].icon}</span>
                        <div>
                            <h3 style={{ margin: '0 0 4px 0' }}>{demoAgents[selectedAgent].name}</h3>
                            <Badge variant="success">Online</Badge>
                        </div>
                    </div>
                </div>

                <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {messages.map((msg) => (
                        <div key={msg.id} className={`chat-message ${msg.role}`}>
                            {msg.role === "assistant" && (
                                <div className="chat-msg-avatar">
                                    <Bot size={16} />
                                </div>
                            )}
                            <div className="chat-msg-bubble">
                                <p style={{ margin: 0 }}>{msg.content}</p>
                                <span className="chat-msg-time">{msg.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="chat-input-area" style={{ padding: 'var(--space-4)', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)' }}>
                    <div className="chat-input-wrapper" style={{ display: 'flex', gap: 'var(--space-2)' }}>
                        <Input
                            type="text"
                            placeholder={`Message ${demoAgents[selectedAgent].name}...`}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && input.trim()) {
                                    setInput("");
                                }
                            }}
                            style={{ flex: 1 }}
                        />
                        <Button variant="primary" icon={<Send size={16} />} disabled={!input.trim()} onClick={() => setInput("")} />
                    </div>
                </div>
            </div>
        </div>
    );
}
