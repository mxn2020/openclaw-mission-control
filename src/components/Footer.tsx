import { Link } from "react-router-dom";
import { Rocket, Github, Coffee } from "lucide-react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <Rocket size={20} />
                            <span>MissionControl</span>
                        </Link>
                        <p className="footer-tagline">
                            Open-source AI agent orchestration for everyone.
                        </p>
                        <div className="footer-socials">
                            <a
                                href="https://github.com/mxn2020/mission-control"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://buymeacoffee.com/mxn2020"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Buy Me a Coffee"
                            >
                                <Coffee size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Product</h4>
                        <Link to="/features">Features</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/docs">Documentation</Link>
                    </div>

                    <div className="footer-col">
                        <h4>Resources</h4>
                        <a href="https://github.com/mxn2020/mission-control" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <Link to="/about">About</Link>
                        <a href="https://github.com/mxn2020/mission-control/issues" target="_blank" rel="noopener noreferrer">
                            Report a Bug
                        </a>
                    </div>

                    <div className="footer-col">
                        <h4>Legal</h4>
                        <Link to="/about">Privacy</Link>
                        <Link to="/about">Terms</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Mehdi Nabhani. Open source under MIT License.</p>
                </div>
            </div>
        </footer>
    );
}
