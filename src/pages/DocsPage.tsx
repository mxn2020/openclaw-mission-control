import { Terminal, Key, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./DocsPage.css";

export default function DocsPage() {
    return (
        <div className="docs-page">
            <div className="docs-hero">
                <h1 className="animate-fade-in-up">
                    <span className="gradient-text">Documentation</span>
                </h1>
                <p className="animate-fade-in-up delay-1">
                    Get Mission Control up and running in minutes.
                </p>
            </div>

            <div className="docs-content">
                <aside className="docs-sidebar glass-card">
                    <nav>
                        <h4>Getting Started</h4>
                        <a href="#prerequisites" className="active">Prerequisites</a>
                        <a href="#installation">Installation</a>
                        <a href="#configuration">Configuration</a>
                        <a href="#first-team">First Agent Team</a>
                        <h4>Concepts</h4>
                        <a href="#agents">Agents & Templates</a>
                        <a href="#orchestration">Orchestration</a>
                        <a href="#tasks">Tasks & Workflows</a>
                        <h4>Self-Hosting</h4>
                        <a href="#self-host">Deploy Your Own</a>
                    </nav>
                </aside>

                <main className="docs-main">
                    <section id="prerequisites" className="docs-section">
                        <h2><Key size={22} /> Prerequisites</h2>
                        <p>Before you start, make sure you have:</p>
                        <ul>
                            <li>An <strong>OpenClaw instance</strong> — self-hosted or via the Alibaba Cloud Marketplace image</li>
                            <li>At least one <strong>LLM API key</strong> — OpenAI, Anthropic, Google AI, or any OpenAI-compatible provider</li>
                            <li><strong>Node.js 18+</strong> installed (for self-hosting)</li>
                        </ul>
                    </section>

                    <section id="installation" className="docs-section">
                        <h2><Terminal size={22} /> Installation</h2>
                        <p>Clone the repository and install dependencies:</p>
                        <div className="code-block">
                            <pre><code>{`git clone https://github.com/mxn2020/mission-control.git
cd mission-control
npm install`}</code></pre>
                        </div>
                        <p>Set up Convex:</p>
                        <div className="code-block">
                            <pre><code>{`npx convex dev`}</code></pre>
                        </div>
                        <p>Start the dev server:</p>
                        <div className="code-block">
                            <pre><code>{`npm run dev`}</code></pre>
                        </div>
                    </section>

                    <section id="configuration" className="docs-section">
                        <h2><Rocket size={22} /> Configuration</h2>
                        <p>
                            After launching the app, go to <strong>Connections</strong> in the
                            dashboard sidebar and enter:
                        </p>
                        <ol>
                            <li>
                                <strong>OpenClaw Instance URL</strong> — e.g.{" "}
                                <code>http://localhost:8004</code> or your remote server URL
                            </li>
                            <li>
                                <strong>OpenClaw Token</strong> — the gateway authentication
                                token from your instance
                            </li>
                            <li>
                                <strong>LLM API Key</strong> — at least one provider key (OpenAI,
                                Anthropic, etc.)
                            </li>
                        </ol>
                    </section>

                    <section id="first-team" className="docs-section">
                        <h2>🚀 Creating Your First Agent Team</h2>
                        <ol>
                            <li>Go to <strong>Agents</strong> → browse the template gallery</li>
                            <li>Add an orchestrator (e.g. Mission Commander)</li>
                            <li>Add 2–3 specialist agents (e.g. Code Architect, Research Analyst)</li>
                            <li>Go to <strong>Teams</strong> → create a team, assign your orchestrator and agents</li>
                            <li>Open the orchestrator's <strong>Chat</strong> and give it a goal!</li>
                        </ol>
                    </section>

                    <section id="self-host" className="docs-section">
                        <h2>🏠 Self-Hosting</h2>
                        <p>
                            Mission Control is fully open source under the MIT license. You
                            can deploy it on:
                        </p>
                        <ul>
                            <li><strong>Vercel</strong> — connect your GitHub repo and deploy</li>
                            <li><strong>Netlify</strong> — import the repo, set build command to <code>npm run build</code></li>
                            <li><strong>Any static host</strong> — build with <code>npm run build</code> and serve the <code>dist/</code> folder</li>
                        </ul>
                        <p>
                            You'll need a{" "}
                            <a href="https://convex.dev" target="_blank" rel="noopener noreferrer">
                                Convex
                            </a>{" "}
                            deployment for the backend (free tier available).
                        </p>
                    </section>

                    <div className="docs-cta">
                        <Link to="/dashboard" className="btn btn-primary btn-lg">
                            Launch Dashboard <ArrowRight size={18} />
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
