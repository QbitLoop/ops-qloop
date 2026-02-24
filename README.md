# ops.qbitloop.com — Intelligent Operations & Agentic Architecture

Enterprise MLOps research site covering the 2026 paradigm shift in AI operations.

## Pages

| Route | Content |
|-------|---------|
| `/` | Landing — narrative arc, directory, FAQ |
| `/architecture` | 7-Layer Reference Architecture with GSI insight carousels |
| `/visa-goldman` | Visa & Goldman Sachs deep dives |
| `/inference` | Inference Economics & OPEX Crisis |
| `/agents` | Multi-Agent Protocols (MCP / ACP / A2A) |
| `/governance` | EU AI Act & Compliance Framework |
| `/finance` | Finance Vertical: ISO 20022 + GenAI |
| `/lab` | Fraud Detection Lab (Brev GPU hands-on) |
| `/roles` | Org Structure & Roles |

## Stack

- **React** + **Vite** (SPA, BrowserRouter)
- **JetBrains Mono** + **IBM Plex Sans** typography
- **Google Material Symbols** icons
- Dark/light theme toggle
- Mobile-responsive with hamburger nav
- Vercel deployment with SPA rewrites

## Development

```bash
npm install
npm run dev
```

## Deploy

Push to `main` — Vercel auto-deploys.

## Custom Domain

In Vercel dashboard: Settings → Domains → add `ops.qbitloop.com`.
In GoDaddy: add CNAME `ops` → `cname.vercel-dns.com`.
