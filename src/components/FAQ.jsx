import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import Icon from "./Icon";

const ITEMS = [
  { q: "What is Intelligent Operations?", a: "The convergence of traditional MLOps, AIOps, and Business Intelligence into a unified discipline. It manages agentic AI systems that autonomously act on business goals \u2014 not just respond to prompts \u2014 requiring multi-step inference orchestration, dynamic memory management, and continuous behavioral governance." },
  { q: "Who is this site for?", a: "Enterprise architects, GSI solution teams, NVIDIA partner developers, and AI engineering leaders who need to understand how production-scale ML operations work at companies like Visa and Goldman Sachs \u2014 and where NVIDIA's stack fits at each layer." },
  { q: "What's the difference between the 6-layer and 7-layer model?", a: "The original 6-layer enterprise MLOps model (Governance, Platform, Data, Training, Serving, Monitoring) has been upgraded to 7 layers for 2026 to reflect the shift to agentic architectures. The new model adds a dedicated Knowledge Layer (agentic RAG, semantic search) and an Orchestration Layer (multi-agent chaining, context management, execution control)." },
  { q: "Can I actually run the fraud detection lab?", a: "Yes. The Lab page provides a full walkthrough: sign up for Brev (brev.nvidia.com), spin up a GPU instance (~$3/session), clone the NVIDIA Financial Fraud Detection Blueprint, and run GNN + XGBoost training on synthetic transaction data. You need an NVIDIA NGC API key and about 30 minutes." },
  { q: "What are MCP, ACP, and A2A?", a: "Three complementary protocols standardizing how AI agents communicate. MCP (Model Context Protocol, by Anthropic) connects agents to tools and data. ACP (Agent Communication Protocol) coordinates agents within an organization. A2A (Agent-to-Agent, by Google) connects agents across organizations. Together they replace custom point-to-point integrations." },
  { q: "How current is this content?", a: "Primary sources are the NVIDIA State of AI in Financial Services 2026 report (800+ professionals surveyed, January 2026) and a comprehensive 2026 Intelligent Operations research report citing 61 sources. Company-specific data is drawn from public disclosures, engineering blogs, and job postings through February 2026." },
];

export default function FAQ() {
  const { T } = useTheme();
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {ITEMS.map((item, i) => (
        <div key={i} style={{
          background: T.faqBg, border: `1px solid ${T.faqBorder}`, borderRadius: 8,
          overflow: "hidden",
        }}>
          <div onClick={() => setOpen(open === i ? null : i)} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 16px", cursor: "pointer",
            background: open === i ? T.faqHover : "transparent",
            transition: "background 0.15s",
          }}>
            <span style={{ fontFamily: sans, fontSize: 13.5, fontWeight: 500, color: T.text }}>{item.q}</span>
            <Icon name={open === i ? "expand_less" : "expand_more"} size={18} color={T.textMuted} />
          </div>
          {open === i && (
            <div style={{ padding: "0 16px 14px", borderTop: `1px solid ${T.borderMuted}`, paddingTop: 12 }}>
              <p style={{ fontFamily: sans, fontSize: 12.5, color: T.textSec, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
