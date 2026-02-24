import { Link, useLocation } from "react-router-dom";
import {
    Rocket,
    Menu,
    X,
} from "lucide-react";
import { useState } from "react";
import "./Header.css";

const marketingLinks = [
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/docs", label: "Docs" },
    { to: "/about", label: "About" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const isDashboard = location.pathname.startsWith("/dashboard");

    if (isDashboard) return null;

    return (
        <header className="site-header">
            <div className="header-inner">
                <Link to="/" className="header-logo">
                    <Rocket size={24} />
                    <span className="header-logo-text">
                        Mission<span className="gradient-text">Control</span>
                    </span>
                </Link>

                <nav className={`header-nav ${mobileOpen ? "open" : ""}`}>
                    {marketingLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`header-link ${location.pathname === link.to ? "active" : ""
                                }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="header-actions">
                    <Link to="/dashboard" className="btn btn-primary btn-sm">
                        Launch App
                    </Link>
                    <button
                        className="btn btn-icon btn-ghost mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
