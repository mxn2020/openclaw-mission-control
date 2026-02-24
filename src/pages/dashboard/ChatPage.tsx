import { useState } from "react";
import { Send, Plus, MessageSquare, Bot } from "lucide-react";
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
            <aside className="chat-agents glass-card">
                <div className="chat-agents-header">
                    <h3>Sessions</h3>
                    <button className="btn btn-icon btn-ghost" title="New session">
                        <Plus size={16} />
                    </button>
                </div>
                <div className="chat-agent-list">
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
            </aside>

            {/* Chat area */}
            <div className="chat-main">
                <div className="chat-header">
                    <div className="chat-header-agent">
                        <span className="chat-header-icon">{demoAgents[selectedAgent].icon}</span>
                        <div>
                            <h3>{demoAgents[selectedAgent].name}</h3>
                            <span className="badge badge-success">Online</span>
                        </div>
                    </div>
                </div>

                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`chat-message ${msg.role}`}>
                            {msg.role === "assistant" && (
                                <div className="chat-msg-avatar">
                                    <Bot size={16} />
                                </div>
                            )}
                            <div className="chat-msg-bubble">
                                <p>{msg.content}</p>
                                <span className="chat-msg-time">{msg.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="chat-input-area">
                    <div className="chat-input-wrapper">
                        <input
                            type="text"
                            className="input chat-input"
                            placeholder={`Message ${demoAgents[selectedAgent].name}...`}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && input.trim()) {
                                    setInput("");
                                }
                            }}
                        />
                        <button className="btn btn-primary btn-icon chat-send" disabled={!input.trim()}>
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
