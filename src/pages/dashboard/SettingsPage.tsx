import { User, CreditCard, Bell, Shield } from "lucide-react";
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

            <div className="settings-grid">
                <section className="settings-section glass-card">
                    <div className="settings-section-header">
                        <User size={20} />
                        <h2>Profile</h2>
                    </div>
                    <div className="connection-fields">
                        <div className="field-group">
                            <label>Display Name</label>
                            <input type="text" className="input" placeholder="Your name" />
                        </div>
                        <div className="field-group">
                            <label>Email</label>
                            <input type="email" className="input" placeholder="you@example.com" />
                        </div>
                    </div>
                </section>

                <section className="settings-section glass-card">
                    <div className="settings-section-header">
                        <CreditCard size={20} />
                        <h2>Plan</h2>
                    </div>
                    <div className="plan-info">
                        <div className="plan-current">
                            <span className="badge badge-info">Free Plan</span>
                            <p>Self-hosted, unlimited features</p>
                        </div>
                        <button className="btn btn-secondary btn-sm">
                            Upgrade to Pro — $9/mo
                        </button>
                    </div>
                </section>

                <section className="settings-section glass-card">
                    <div className="settings-section-header">
                        <Bell size={20} />
                        <h2>Notifications</h2>
                    </div>
                    <div className="settings-toggle-list">
                        <label className="settings-toggle">
                            <span>Task completion alerts</span>
                            <input type="checkbox" defaultChecked />
                        </label>
                        <label className="settings-toggle">
                            <span>Agent error alerts</span>
                            <input type="checkbox" defaultChecked />
                        </label>
                        <label className="settings-toggle">
                            <span>Weekly digest email</span>
                            <input type="checkbox" />
                        </label>
                    </div>
                </section>

                <section className="settings-section glass-card">
                    <div className="settings-section-header">
                        <Shield size={20} />
                        <h2>Security</h2>
                    </div>
                    <button className="btn btn-secondary btn-sm">Change Password</button>
                    <button className="btn btn-ghost btn-sm" style={{ color: "var(--color-error)", marginTop: "var(--space-3)" }}>
                        Delete Account
                    </button>
                </section>
            </div>
        </div>
    );
}
