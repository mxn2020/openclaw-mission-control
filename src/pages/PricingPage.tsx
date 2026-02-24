import { Check, X, ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "./PricingPage.css";

const plans = [
    {
        name: "Self-Hosted",
        price: "Free",
        period: "forever",
        description: "Full source code. Host it yourself.",
        cta: "Get Started",
        ctaLink: "/docs",
        ctaStyle: "btn btn-secondary btn-lg",
        highlight: false,
        features: [
            { text: "Unlimited agents & teams", included: true },
            { text: "All template agents", included: true },
            { text: "Task orchestration & views", included: true },
            { text: "Agent chat sessions", included: true },
            { text: "Real-time sync (Convex)", included: true },
            { text: "Full source code (MIT)", included: true },
            { text: "Community support", included: true },
            { text: "Bring your own OpenClaw instance", included: true },
            { text: "Bring your own API keys", included: true },
            { text: "Managed dashboard hosting", included: false },
            { text: "Managed OpenClaw instance", included: false },
            { text: "Included AI usage", included: false },
            { text: "Priority support", included: false },
        ],
    },
    {
        name: "Pro",
        price: "$9",
        period: "/month",
        description: "Managed dashboard. You bring your instance & keys.",
        cta: "Start Free Trial",
        ctaLink: "/dashboard",
        ctaStyle: "btn btn-primary btn-lg",
        highlight: true,
        features: [
            { text: "Unlimited agents & teams", included: true },
            { text: "All template agents", included: true },
            { text: "Task orchestration & views", included: true },
            { text: "Agent chat sessions", included: true },
            { text: "Real-time sync (Convex)", included: true },
            { text: "Full source code (MIT)", included: true },
            { text: "Community support", included: true },
            { text: "Bring your own OpenClaw instance", included: true },
            { text: "Bring your own API keys", included: true },
            { text: "Managed dashboard hosting", included: true },
            { text: "Managed OpenClaw instance", included: false },
            { text: "Included AI usage", included: false },
            { text: "Priority support", included: false },
        ],
    },
];

export default function PricingPage() {
    return (
        <div className="pricing-page">
            <div className="pricing-hero">
                <h1 className="animate-fade-in-up">
                    Simple, <span className="gradient-text">transparent</span> pricing
                </h1>
                <p className="animate-fade-in-up delay-1">
                    Open source and free to self-host. Or let us run Mission Control for
                    you at $9/month.
                </p>
            </div>

            <div className="pricing-byoi-note">
                <p>
                    <strong>Bring Your Own Instance &amp; Keys</strong> — All plans require your own
                    OpenClaw instance and LLM API keys (OpenAI, Anthropic, etc.). Mission Control
                    is the dashboard — it connects to your existing infrastructure.
                </p>
            </div>

            <div className="pricing-cards">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`pricing-card glass-card ${plan.highlight ? "highlighted" : ""}`}
                    >
                        {plan.highlight && (
                            <div className="pricing-badge">Most Popular</div>
                        )}
                        <div className="pricing-card-header">
                            <h3>{plan.name}</h3>
                            <div className="pricing-price">
                                <span className="pricing-amount">{plan.price}</span>
                                <span className="pricing-period">{plan.period}</span>
                            </div>
                            <p className="pricing-desc">{plan.description}</p>
                        </div>
                        <ul className="pricing-features">
                            {plan.features.map((f) => (
                                <li key={f.text} className={f.included ? "" : "excluded"}>
                                    {f.included ? (
                                        <Check size={16} className="check-icon" />
                                    ) : (
                                        <X size={16} className="x-icon" />
                                    )}
                                    {f.text}
                                </li>
                            ))}
                        </ul>
                        <Link to={plan.ctaLink} className={plan.ctaStyle}>
                            {plan.cta} <ArrowRight size={16} />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Custom Tier */}
            <div className="custom-tier">
                <div className="custom-tier-card glass-card">
                    <div className="custom-tier-content">
                        <h3>Custom Setup</h3>
                        <p>
                            Need a tailored solution? Custom server configurations,
                            dedicated infrastructure, SLA guarantees, or white-label
                            deployment — let's talk.
                        </p>
                        <a href="mailto:hello@the-mehdi.com" className="btn btn-secondary btn-lg">
                            <Mail size={16} /> Contact Us
                        </a>
                    </div>
                </div>
            </div>

            <div className="pricing-faq">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h4>What do I need to get started?</h4>
                        <p>
                            An OpenClaw instance (self-hosted or cloud) and at least one LLM
                            API key (OpenAI, Anthropic, Google AI, or any OpenAI-compatible
                            provider). Mission Control connects to these — it doesn't host them.
                        </p>
                    </div>
                    <div className="faq-item">
                        <h4>What exactly does Mission Control host?</h4>
                        <p>
                            Mission Control is the agent orchestration dashboard — the web app you
                            use to create agents, manage tasks, and chat with your team. It connects
                            to your OpenClaw instance remotely. Your OpenClaw instance stays on your
                            infrastructure.
                        </p>
                    </div>
                    <div className="faq-item">
                        <h4>Can I switch from self-hosted to Pro?</h4>
                        <p>
                            Yes! Your data is stored in Convex. Migrating is seamless — just
                            connect your existing Convex deployment to the managed version.
                        </p>
                    </div>
                    <div className="faq-item">
                        <h4>Is there a free trial for Pro?</h4>
                        <p>
                            Yes — 14 days free, no credit card required. Full access to all
                            managed features.
                        </p>
                    </div>
                    <div className="faq-item">
                        <h4>What LLM providers are supported?</h4>
                        <p>
                            OpenAI, Anthropic, Google AI, and any OpenAI-compatible API via
                            custom provider configuration.
                        </p>
                    </div>
                    <div className="faq-item">
                        <h4>Is this the same as hosting OpenClaw?</h4>
                        <p>
                            No. Mission Control is a separate dashboard that connects to your
                            OpenClaw instance. You set up and manage your OpenClaw instance
                            independently — Mission Control orchestrates your agents through it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
