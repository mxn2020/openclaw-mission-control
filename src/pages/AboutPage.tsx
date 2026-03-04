import { Github, Heart, Rocket, Coffee } from "lucide-react";
import { Button, Card } from "@geenius-ui/react-css";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-hero">
                <h1 className="animate-fade-in-up">
                    About <span className="gradient-text">Mission Control</span>
                </h1>
                <p className="animate-fade-in-up delay-1">
                    Open-source AI agent orchestration for everyone.
                </p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2><Rocket size={22} /> The Vision</h2>
                    <p>
                        Mission Control was born from a simple idea: <strong>AI agents
                            are more powerful when they work together</strong>. Instead of
                        chatting with one AI at a time, what if you could build a team
                        of specialized agents, give them a goal, and watch them
                        collaborate?
                    </p>
                    <p>
                        That's what Mission Control does. It's a dashboard for creating,
                        orchestrating, and monitoring teams of AI agents. One orchestrator
                        breaks goals into tasks, delegates to specialists, tracks
                        progress, and delivers results — all in real-time.
                    </p>
                </section>

                <section className="about-section">
                    <h2><Heart size={22} /> Open Source Philosophy</h2>
                    <p>
                        Mission Control is fully open source under the{" "}
                        <strong>MIT License</strong>. We believe the best developer
                        tools are community-driven. You can:
                    </p>
                    <ul>
                        <li>Self-host for free on your own infrastructure</li>
                        <li>Fork and customize for your specific needs</li>
                        <li>Contribute features, templates, and improvements</li>
                        <li>Use in commercial and personal projects</li>
                    </ul>
                    <p>
                        For those who prefer a managed experience, we offer a hosted
                        version at <strong>$9/month</strong> — supporting ongoing
                        development and keeping the project sustainable.
                    </p>
                </section>

                <section className="about-section">
                    <h2>🛠️ Built With</h2>
                    <div className="tech-grid">
                        <Card className="tech-item" padding="md">
                            <strong>React + Vite</strong>
                            <span>Fast, modern frontend</span>
                        </Card>
                        <Card className="tech-item" padding="md">
                            <strong>Convex</strong>
                            <span>Real-time backend & database</span>
                        </Card>
                        <Card className="tech-item" padding="md">
                            <strong>TypeScript</strong>
                            <span>End-to-end type safety</span>
                        </Card>
                        <Card className="tech-item" padding="md">
                            <strong>OpenClaw</strong>
                            <span>AI agent infrastructure</span>
                        </Card>
                    </div>
                </section>

                <section className="about-section about-links">
                    <a
                        href="https://github.com/mxn2020/mission-control"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="lg" icon={<Github size={18} />}>Star on GitHub</Button>
                    </a>
                    <a
                        href="https://buymeacoffee.com/mxn2020"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="lg" icon={<Coffee size={18} />}>Buy Me a Coffee</Button>
                    </a>
                </section>
            </div>
        </div>
    );
}
