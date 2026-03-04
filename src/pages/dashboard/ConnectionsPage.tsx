import { useState } from "react";
import { Plug, Key, Server, Save, CheckCircle } from "lucide-react";
import { Button, Input, Card } from "@geenius-ui/react-css";
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
            <Card className="connection-section" padding="lg" style={{ marginBottom: 'var(--space-6)' }}>
                <div className="connection-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                    <Server size={20} style={{ color: 'var(--color-text-secondary)' }} />
                    <h2 style={{ margin: 0 }}>OpenClaw Instance</h2>
                </div>
                <p className="connection-desc" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                    Connect your OpenClaw instance to enable agent execution. You need the
                    instance URL and authentication token.
                </p>
                <div className="connection-fields" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <div className="field-group">
                        <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 13 }}>Instance URL</label>
                        <Input
                            type="url"
                            placeholder="http://localhost:8004 or https://your-server.com:17000"
                        />
                    </div>
                    <div className="field-group">
                        <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 13 }}>Authentication Token</label>
                        <Input
                            type="password"
                            placeholder="Your OpenClaw gateway token"
                        />
                    </div>
                </div>
            </Card>

            {/* LLM Keys */}
            <Card className="connection-section" padding="lg" style={{ marginBottom: 'var(--space-6)' }}>
                <div className="connection-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                    <Key size={20} style={{ color: 'var(--color-text-secondary)' }} />
                    <h2 style={{ margin: 0 }}>LLM API Keys</h2>
                </div>
                <p className="connection-desc" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                    Provide at least one API key. Your agents will use these to communicate
                    with large language models.
                </p>
                <div className="connection-fields" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <div className="field-group">
                        <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 13 }}>OpenAI API Key</label>
                        <Input
                            type="password"
                            placeholder="sk-..."
                        />
                    </div>
                    <div className="field-group">
                        <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 13 }}>Anthropic API Key</label>
                        <Input
                            type="password"
                            placeholder="sk-ant-..."
                        />
                    </div>
                    <div className="field-group">
                        <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 13 }}>Google AI API Key</label>
                        <Input
                            type="password"
                            placeholder="AIza..."
                        />
                    </div>
                </div>

                <details className="custom-provider" style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 500, userSelect: 'none' }}>Custom OpenAI-Compatible Provider</summary>
                    <div className="connection-fields" style={{ marginTop: "var(--space-4)", display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        <div className="field-group">
                            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 13 }}>Provider Name</label>
                            <Input
                                type="text"
                                placeholder="e.g. Together AI, Groq, Fireworks..."
                            />
                        </div>
                        <div className="field-group">
                            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 13 }}>Base URL</label>
                            <Input
                                type="url"
                                placeholder="https://api.together.xyz/v1"
                            />
                        </div>
                        <div className="field-group">
                            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 13 }}>API Key</label>
                            <Input
                                type="password"
                                placeholder="Your API key"
                            />
                        </div>
                    </div>
                </details>
            </Card>

            <div className="connection-actions" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-6)' }}>
                <Button variant="primary" size="lg" onClick={handleSave} style={{ width: 200, justifyContent: 'center' }}>
                    {saved ? (
                        <>
                            <CheckCircle size={16} style={{ marginRight: 8 }} /> Saved!
                        </>
                    ) : (
                        <>
                            <Save size={16} style={{ marginRight: 8 }} /> Save Connections
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
