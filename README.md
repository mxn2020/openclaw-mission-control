# Mission Control

> Open-source AI agent orchestration dashboard.

[![CI](https://github.com/mxn2020/mission-control/actions/workflows/ci.yml/badge.svg)](https://github.com/mxn2020/mission-control/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Build teams of AI agents, orchestrate complex tasks, and monitor everything from a single dashboard.

## ✨ Features

- **🤖 Agent Teams** — Build from templates (orchestrators, coders, researchers, writers) or create custom agents
- **📋 Task Orchestration** — Kanban, list, and timeline views for managing work across your agent team
- **💬 Agent Chat** — Launch chat sessions with any agent, review outputs, iterate on results
- **🔌 Bring Your Own Keys** — Connect your OpenClaw instance + LLM API keys (OpenAI, Anthropic, etc.)
- **⚡ Real-time Sync** — Powered by Convex — instant updates across all clients
- **🌐 Open Source** — MIT licensed, self-host for free

## 🚀 Quick Start

```bash
git clone https://github.com/mxn2020/mission-control.git
cd mission-control
npm install
npx convex dev        # starts Convex backend
npm run dev            # starts Vite dev server
```

Open [http://localhost:5173](http://localhost:5173)

## 💰 Pricing

| | Self-Hosted | Pro Managed |
|---|---|---|
| **Price** | Free forever | $9/month |
| **Features** | All features | All features |
| **Hosting** | Your infra | We handle it |
| **Support** | Community | Priority |

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: Convex (real-time database + functions)
- **Styling**: Vanilla CSS (dark-mode design system)
- **Routing**: React Router v7
- **Icons**: Lucide React

## 📁 Project Structure

```
mission-control/
├── convex/              # Convex backend
│   ├── schema.ts        # Database schema
│   ├── agents.ts        # Agent CRUD + templates
│   ├── tasks.ts         # Task management
│   ├── sessions.ts      # Chat sessions
│   ├── messages.ts      # Chat messages
│   ├── teams.ts         # Team management
│   ├── connections.ts   # BYOI config
│   └── seed.ts          # Template seeds
├── src/
│   ├── components/      # Shared UI components
│   ├── pages/           # Marketing + dashboard pages
│   ├── index.css        # Design system
│   ├── App.tsx          # Router
│   └── main.tsx         # Entry point
├── .github/workflows/   # CI/CD
└── LICENSE              # MIT
```

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT © [Mehdi Nabhani](https://github.com/mxn2020)

---

**[⭐ Star on GitHub](https://github.com/mxn2020/mission-control)** · **[☕ Buy Me a Coffee](https://buymeacoffee.com/mxn2020)**
