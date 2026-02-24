import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Tag, Footer } from "../components/UI";
import Icon from "../components/Icon";

export default function Agents() {
  const { T } = useTheme();

  return (
    <div>
      <SectionHeader color={T.purple}>Protocols & Frameworks</SectionHeader>
      <PageTitle subtitle="MCP, ACP, and A2A">Multi-Agent Protocols</PageTitle>
      <Body>
        The defining shift of 2026: AI systems that autonomously act, not just respond. Agentic architectures
        require standardized communication protocols — and three complementary standards have ended the era
        of fragmented, bespoke API integrations.
      </Body>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "24px 0 32px" }}>
        <Stat value="30%" label="dev overhead reduction with MCP" color={T.cyan} />
        <Stat value="50-75%" label="faster task completion via MCP workflows" color={T.green} />
        <Stat value="55%" label="discovery time reduction (McKinsey Brix)" color={T.amber} />
        <Stat value="15K+" label="AI projects delivered by QuantumBlack via MCP" color={T.purple} />
      </div>

      <Divider />

      {/* Protocol Comparison */}
      <SectionHeader color={T.cyan}>The Three Protocols</SectionHeader>

      {/* Protocol Flow Overview */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 28 }}>
        {[
          { label: "MCP", sub: "Agent ↔ Tools", creator: "Anthropic", color: T.cyan,
            left: { icon: "smart_toy", label: "Agent" },
            right: { icon: "build", label: "Tools & Data" },
            arrow: "link", bidirectional: true },
          { label: "ACP", sub: "Agent ↔ Agent", creator: "Intra-Org", color: T.green,
            left: { icon: "smart_toy", label: "Agent A" },
            right: { icon: "smart_toy", label: "Agent B" },
            arrow: "forum", bidirectional: true },
          { label: "A2A", sub: "Cross-Org", creator: "Google", color: T.amber,
            left: { icon: "domain", label: "Org A Agent" },
            right: { icon: "domain", label: "Org B Agent" },
            arrow: "swap_calls", bidirectional: true },
        ].map((p, i) => (
          <div key={i} style={{ background: T.surface, border: `1px solid ${p.color}30`, borderRadius: 8, padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 800, color: p.color }}>{p.label}</span>
              <span style={{ fontFamily: mono, fontSize: 9, color: T.textMuted }}>{p.creator}</span>
            </div>
            {/* Flow diagram */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${p.color}12`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={p.left.icon} size={16} color={p.color} />
                </div>
                <span style={{ fontFamily: mono, fontSize: 9, color: T.textMuted, textAlign: "center" }}>{p.left.label}</span>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", gap: 2 }}>
                  <div style={{ flex: 1, height: 1, background: `${p.color}50` }} />
                  <Icon name={p.arrow} size={12} color={p.color} />
                  <div style={{ flex: 1, height: 1, background: `${p.color}50` }} />
                </div>
                <span style={{ fontFamily: mono, fontSize: 8, color: p.color, letterSpacing: "0.3px" }}>{p.sub}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${p.color}12`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={p.right.icon} size={16} color={p.color} />
                </div>
                <span style={{ fontFamily: mono, fontSize: 9, color: T.textMuted, textAlign: "center" }}>{p.right.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {[
        { name: "Model Context Protocol (MCP)", creator: "Anthropic", color: T.cyan, icon: "link",
          how: "JSON-RPC 2.0", scope: "Agent \u2194 Tools & Data",
          detail: "Standardizes how AI agents connect to business tools and data sources through a universal interface. Operates via sandboxed environments requiring explicit context declarations — an agent must state intent before accessing resources, mapping perfectly to IAM roles. The undisputed enterprise interoperability standard by 2026.",
          stat: "Full productization in 2026 \u2014 major AI providers aligned around MCP as core integration interface" },
        { name: "Agent Communication Protocol (ACP)", creator: "Industry Consortium", color: T.green, icon: "forum",
          how: "REST-based", scope: "Agent \u2194 Agent (intra-org)",
          detail: "Framework for multiple AI agents within the same organization to coordinate tasks, collaborate, and model semantic intents for multi-step workflows. Think: your research agent passing findings to your compliance agent, which triggers your reporting agent.",
          stat: "Enables role-based delegation mimicking human organizational structures" },
        { name: "Agent-to-Agent Protocol (A2A)", creator: "Google", color: T.amber, icon: "swap_calls",
          how: "JSON-over-HTTP + SSE/webhooks", scope: "Agent \u2194 Agent (cross-org)",
          detail: "Securely connects AI agents across different organizations. Supports defined task lifecycles via Server-Sent Events or webhooks. Enables automated cross-company supply chain integrations, partner workflows, and federated AI operations.",
          stat: "Structured task lifecycle management for inter-organizational agent networks" },
      ].map((p, i) => (
        <div key={i} style={{
          background: `${p.color}04`, border: `1px solid ${p.color}18`, borderLeft: `3px solid ${p.color}`,
          borderRadius: 8, padding: "16px 18px", marginBottom: 12,
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Icon name={p.icon} size={16} color={p.color} />
              <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, color: p.color }}>{p.name}</span>
            </div>
            <Tag color={p.color}>{p.creator}</Tag>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 8 }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: T.textMuted }}><strong style={{ color: T.textSec }}>Wire:</strong> {p.how}</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: T.textMuted }}><strong style={{ color: T.textSec }}>Scope:</strong> {p.scope}</div>
          </div>
          <div style={{ fontFamily: sans, fontSize: 12.5, color: T.textSec, lineHeight: 1.7, marginBottom: 8 }}>{p.detail}</div>
          <div style={{
            fontFamily: mono, fontSize: 10, fontWeight: 600, color: p.color,
            background: `${p.color}10`, padding: "3px 8px", borderRadius: 4, display: "inline-block",
          }}>{p.stat}</div>
        </div>
      ))}

      <Divider />

      {/* Orchestration Frameworks */}
      <SectionHeader color={T.purple}>Orchestration Frameworks</SectionHeader>
      <Body>
        With protocols providing the connective tissue, orchestration frameworks manage agent lifecycles,
        states, and memory structures.
      </Body>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
        {[
          { name: "LangGraph", paradigm: "Graph-Based", state: "Stateful", use: "Complex cyclic workflows with node-level control", color: T.cyan },
          { name: "CrewAI", paradigm: "Role-Based", state: "Stateful", use: "Structured role delegation mimicking human org structures", color: T.green },
          { name: "n8n", paradigm: "Visual Workflow", state: "Stateful (Memory nodes)", use: "Mix deterministic API workflows with stochastic AI nodes", color: T.amber },
          { name: "AutoGen", paradigm: "Adaptive", state: "Stateless", use: "Research, rapid prototyping, flexible multi-agent conversation", color: T.purple },
        ].map((fw, i) => (
          <div key={i} style={{
            background: T.surface, border: `1px solid ${T.border}`, borderTop: `3px solid ${fw.color}`,
            borderRadius: 8, padding: 16,
          }}>
            <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, color: fw.color, marginBottom: 6 }}>{fw.name}</div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <Tag color={fw.color}>{fw.paradigm}</Tag>
              <Tag>{fw.state}</Tag>
            </div>
            <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec, lineHeight: 1.6 }}>{fw.use}</div>
          </div>
        ))}
      </div>

      <Callout color={T.purple}>
        <strong style={{ color: T.purple }}>State management:</strong> For latency-sensitive deployments, Redis provides multi-tier memory
        architecture — ephemeral session states at massive scale without the overhead of traditional persistence databases.
        Millisecond response times dictate the viability of the entire autonomous system.
      </Callout>

      <Footer />
    </div>
  );
}
