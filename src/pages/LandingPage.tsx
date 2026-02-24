import {
    Rocket,
    Zap,
    Users,
    BarChart3,
    MessageSquare,
    Shield,
    ArrowRight,
    Sparkles,
    GitBranch,
    Bot,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const features = [
    {
        icon: <Bot size={24} />,
        title: "Agent Teams",
        description:
            "Build custom AI agent teams from templates. Orchestrators, specialists, and utility agents — all configurable.",
    },
    {
        icon: <GitBranch size={24} />,
        title: "Task Orchestration",
        description:
            "Break complex goals into tasks, delegate to agents, track progress in real-time with kanban, list, and timeline views.",
    },
    {
        icon: <MessageSquare size={24} />,
        title: "Agent Chat",
        description:
            "Launch sessions with any agent. Chat directly, review outputs, iterate on results — all in one interface.",
    },
    {
        icon: <Shield size={24} />,
        title: "Bring Your Own Keys",
        description:
            "Connect your OpenClaw instance and API keys. Your data stays yours. No lock-in, no hidden costs.",
    },
    {
        icon: <Zap size={24} />,
        title: "Real-time Sync",
        description:
            "Powered by Convex — all changes sync instantly across devices. See tasks update as agents complete them.",
    },
    {
        icon: <BarChart3 size={24} />,
        title: "Mission Dashboard",
        description:
            "Birds-eye view of your entire operation. Agent health, task stats, active sessions — everything at a glance.",
    },
];

const steps = [
    {
        num: "1",
        title: "Connect Your Instance",
        description: "Plug in your OpenClaw token and LLM API keys.",
    },
    {
        num: "2",
        title: "Build Your Team",
        description: "Pick from templates or create custom agents.",
    },
    {
        num: "3",
        title: "Launch Missions",
        description: "Set goals — your orchestrator handles the rest.",
    },
];

export default function LandingPage() {
    return (
        <div className="landing">
            {/* ── Hero ── */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-orb hero-orb-1" />
                    <div className="hero-orb hero-orb-2" />
                    <div className="hero-orb hero-orb-3" />
                </div>
                <div className="hero-content">
                    <div className="hero-badge animate-fade-in">
                        <Sparkles size={14} />
                        <span>Open Source · Agent Orchestration</span>
                    </div>
                    <h1 className="hero-title animate-fade-in-up delay-1">
                        Your AI Agents.
                        <br />
                        <span className="gradient-text">One Mission Control.</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up delay-2">
                        Build teams of AI agents, orchestrate complex tasks, and monitor
                        everything from a single dashboard. Open source with a managed
                        option at $9/mo.
                    </p>
                    <div className="hero-actions animate-fade-in-up delay-3">
                        <Link to="/dashboard" className="btn btn-primary btn-lg">
                            Launch Dashboard
                            <ArrowRight size={18} />
                        </Link>
                        <a
                            href="https://github.com/mxn2020/mission-control"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-lg"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Features ── */}
            <section className="section features-section" id="features">
                <div className="section-inner">
                    <div className="section-header">
                        <h2>
                            Everything you need to{" "}
                            <span className="gradient-text">command your agents</span>
                        </h2>
                        <p>
                            From team building to task tracking — a complete control center
                            for AI-powered workflows.
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((f, i) => (
                            <div
                                key={f.title}
                                className="feature-card glass-card animate-fade-in-up"
                                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                            >
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="section how-section">
                <div className="section-inner">
                    <div className="section-header">
                        <h2>
                            Get started in{" "}
                            <span className="gradient-text-warm">three steps</span>
                        </h2>
                    </div>
                    <div className="steps-grid">
                        {steps.map((s) => (
                            <div key={s.num} className="step-card">
                                <div className="step-num">{s.num}</div>
                                <h3>{s.title}</h3>
                                <p>{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Pricing Teaser ── */}
            <section className="section pricing-teaser-section">
                <div className="section-inner">
                    <div className="pricing-teaser glass-card">
                        <div className="pricing-teaser-content">
                            <h2>
                                Free to self-host.{" "}
                                <span className="gradient-text">$9/mo managed.</span>
                            </h2>
                            <p>
                                Full access to every feature. Self-host for free with your own
                                infrastructure, or let us handle everything for $9/month.
                            </p>
                            <div className="pricing-teaser-actions">
                                <Link to="/pricing" className="btn btn-primary">
                                    View Pricing <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="section cta-section">
                <div className="section-inner">
                    <div className="cta-content">
                        <Users size={40} className="cta-icon" />
                        <h2>Ready to command your AI team?</h2>
                        <p>
                            Join the open-source community and start orchestrating your agents
                            today.
                        </p>
                        <Link to="/dashboard" className="btn btn-primary btn-lg">
                            Get Started Free <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
