import { User, CreditCard, Bell, Shield } from "lucide-react";
import { Button, Input, Card, Badge } from "@geenius-ui/react-css";
import "./SettingsPage.css";

export default function SettingsPage() {
    return (
        <div className="settings-page">
            <div className="dashboard-header-bar">
                <div>
                    <h1>Settings</h1>
                    <p>Manage your account and preferences</p>
                </div>
            </div>

            <div className="settings-grid" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <Card className="settings-section" padding="lg">
                    <div className="settings-section-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                        <User size={20} style={{ color: 'var(--color-text-secondary)' }} />
                        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Profile</h2>
                    </div>
                    <div className="connection-fields" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 400 }}>
                        <div className="field-group">
                            <label style={{ display: 'block', marginBottom: 8, fontSize: 13, fontWeight: 500 }}>Display Name</label>
                            <Input type="text" placeholder="Your name" />
                        </div>
                        <div className="field-group">
                            <label style={{ display: 'block', marginBottom: 8, fontSize: 13, fontWeight: 500 }}>Email</label>
                            <Input type="email" placeholder="you@example.com" />
                        </div>
                    </div>
                </Card>

                <Card className="settings-section" padding="lg">
                    <div className="settings-section-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                        <CreditCard size={20} style={{ color: 'var(--color-text-secondary)' }} />
                        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Plan</h2>
                    </div>
                    <div className="plan-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-4)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                        <div className="plan-current">
                            <Badge variant="info" style={{ marginBottom: 4 }}>Free Plan</Badge>
                            <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)' }}>Self-hosted, unlimited features</p>
                        </div>
                        <Button variant="outline" size="sm">
                            Upgrade to Pro — $9/mo
                        </Button>
                    </div>
                </Card>

                <Card className="settings-section" padding="lg">
                    <div className="settings-section-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                        <Bell size={20} style={{ color: 'var(--color-text-secondary)' }} />
                        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Notifications</h2>
                    </div>
                    <div className="settings-toggle-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 400 }}>
                        <label className="settings-toggle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border)', cursor: 'pointer' }}>
                            <span style={{ fontSize: 14 }}>Task completion alerts</span>
                            <input type="checkbox" defaultChecked />
                        </label>
                        <label className="settings-toggle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-border)', cursor: 'pointer' }}>
                            <span style={{ fontSize: 14 }}>Agent error alerts</span>
                            <input type="checkbox" defaultChecked />
                        </label>
                        <label className="settings-toggle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', cursor: 'pointer' }}>
                            <span style={{ fontSize: 14 }}>Weekly digest email</span>
                            <input type="checkbox" />
                        </label>
                    </div>
                </Card>

                <Card className="settings-section" padding="lg">
                    <div className="settings-section-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                        <Shield size={20} style={{ color: 'var(--color-text-secondary)' }} />
                        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Security</h2>
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                        <Button variant="outline" size="sm">Change Password</Button>
                        <Button variant="ghost" size="sm" style={{ color: "var(--color-danger)" }}>
                            Delete Account
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
