import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./PricingPage.css";

const plans = [
    {
        name: "Self-Hosted",
        price: "Free",
        period: "forever",
        description: "Full access. Your infrastructure.",
        cta: "Get Started",
        ctaLink: "/docs",
        ctaStyle: "btn btn-secondary btn-lg",
        highlight: false,
        features: [
            { text: "Unlimited agents & teams", included: true },
            { text: "All template agents", included: true },
            { text: "Task orchestration", included: true },
            { text: "Agent chat sessions", included: true },
            { text: "Real-time sync (Convex)", included: true },
            { text: "Full source code (MIT)", included: true },
            { text: "Community support", included: true },
            { text: "Managed hosting", included: false },
            { text: "Automatic updates", included: false },
            { text: "Priority support", included: false },
        ],
    },
    {
        name: "Pro Managed",
        price: "$9",
        period: "/month",
        description: "We handle everything. You focus on building.",
        cta: "Start Free Trial",
        ctaLink: "/dashboard",
        ctaStyle: "btn btn-primary btn-lg",
        highlight: true,
        features: [
            { text: "Unlimited agents & teams", included: true },
            { text: "All template agents", included: true },
            { text: "Task orchestration", included: true },
            { text: "Agent chat sessions", included: true },
            { text: "Real-time sync (Convex)", included: true },
            { text: "Full source code (MIT)", included: true },
            { text: "Community support", included: true },
            { text: "Managed hosting", included: true },
            { text: "Automatic updates", included: true },
            { text: "Priority support", included: true },
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
                    Open source and free forever. Or let us manage it for the price of a
                    couple coffees.
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

            <div className="pricing-faq">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h4>What do I need to get started?</h4>
                        <p>
                            An OpenClaw instance (self-hosted or cloud) and at least one LLM
                            API key (OpenAI, Anthropic, or any OpenAI-compatible provider).
                        </p>
                    </div>
                    <div className="faq-item">
                        <h4>Can I switch from self-hosted to managed?</h4>
                        <p>
                            Yes! Your data is stored in Convex. Just connect your existing
                            Convex deployment to our managed instance, or export and import.
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
                </div>
            </div>
        </div>
    );
}
