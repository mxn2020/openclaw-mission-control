import { useState } from "react";
import { Plug, Key, Server, Save, CheckCircle } from "lucide-react";
import "./ConnectionsPage.css";

export default function ConnectionsPage() {
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="connections-page">
            <div className="dashboard-header-bar">
                <div>
                    <h1>Connections</h1>
                    <p>Configure your OpenClaw instance and LLM API keys</p>
                </div>
            </div>

            {/* OpenClaw */}
            <section className="connection-section glass-card">
                <div className="connection-header">
                    <Server size={20} />
                    <h2>OpenClaw Instance</h2>
                </div>
                <p className="connection-desc">
                    Connect your OpenClaw instance to enable agent execution. You need the
                    instance URL and authentication token.
                </p>
                <div className="connection-fields">
                    <div className="field-group">
                        <label>Instance URL</label>
                        <input
                            type="url"
                            className="input"
                            placeholder="http://localhost:8004 or https://your-server.com:17000"
                        />
                    </div>
                    <div className="field-group">
                        <label>Authentication Token</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Your OpenClaw gateway token"
                        />
                    </div>
                </div>
            </section>

            {/* LLM Keys */}
            <section className="connection-section glass-card">
                <div className="connection-header">
                    <Key size={20} />
                    <h2>LLM API Keys</h2>
                </div>
                <p className="connection-desc">
                    Provide at least one API key. Your agents will use these to communicate
                    with large language models.
                </p>
                <div className="connection-fields">
                    <div className="field-group">
                        <label>OpenAI API Key</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="sk-..."
                        />
                    </div>
                    <div className="field-group">
                        <label>Anthropic API Key</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="sk-ant-..."
                        />
                    </div>
                    <div className="field-group">
                        <label>Google AI API Key</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="AIza..."
                        />
                    </div>
                </div>

                <details className="custom-provider">
                    <summary>Custom OpenAI-Compatible Provider</summary>
                    <div className="connection-fields" style={{ marginTop: "var(--space-4)" }}>
                        <div className="field-group">
                            <label>Provider Name</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="e.g. Together AI, Groq, Fireworks..."
                            />
                        </div>
                        <div className="field-group">
                            <label>Base URL</label>
                            <input
                                type="url"
                                className="input"
                                placeholder="https://api.together.xyz/v1"
                            />
                        </div>
                        <div className="field-group">
                            <label>API Key</label>
                            <input
                                type="password"
                                className="input"
                                placeholder="Your API key"
                            />
                        </div>
                    </div>
                </details>
            </section>

            <div className="connection-actions">
                <button className="btn btn-primary btn-lg" onClick={handleSave}>
                    {saved ? (
                        <>
                            <CheckCircle size={16} /> Saved!
                        </>
                    ) : (
                        <>
                            <Save size={16} /> Save Connections
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
