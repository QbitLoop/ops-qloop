import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Tag, Footer } from "../components/UI";
import Icon from "../components/Icon";

export default function VisaGoldman() {
  const { T } = useTheme();

  return (
    <div>
      <SectionHeader color={T.amber}>Deep Dive</SectionHeader>
      <PageTitle subtitle="A Decade in the Making">Visa & Goldman Sachs</PageTitle>
      <Body>
        Two different approaches to the same problem: how do you build AI at enterprise scale
        in one of the most regulated industries on earth? Visa spent $3.5B over 10 years rebuilding
        from scratch. Goldman centralized everything onto one platform.
      </Body>

      <Divider />

      {/* ─── VISA ─── */}
      <SectionHeader color={T.gold}>Visa's AI Machine</SectionHeader>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
        <Stat value="$3.5B" label="invested rebuilding data platform" color={T.amber} />
        <Stat value="639M" label="transactions scored per day" color={T.green} />
        <Stat value="2,500+" label="engineers on AI" color={T.cyan} />
        <Stat value="$40B" label="fraud prevented annually" color={T.purple} />
      </div>

      {/* Timeline */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
        <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <Icon name="calendar_today" size={16} color={T.amber} /> The 10-Year Build
        </div>
        {[
          { year: "~2013", event: "Rajat Taneja joins from EA. Sees shift to deep learning/neural nets. Starts platform rewrite.", color: T.textMuted },
          { year: "~2015-18", event: "$3.5B invested to rebuild data platform from scratch \u2014 ML workbenches, model training layers, tokenization.", color: T.amber },
          { year: "2018-19", event: "Embraces transformer architecture early. Starts GenAI exploration before the ChatGPT moment.", color: T.purple },
          { year: "Nov 2022", event: "ChatGPT launches. Visa already has foundation ready \u2014 leans in immediately.", color: T.cyan },
          { year: "Feb 2023", event: "Every Visa employee gets access to internal ChatGPT instance. Early Microsoft Copilot adopter.", color: T.green },
          { year: "2024-25", event: "100+ AI-powered products in production. 2,500+ engineers on AI. $40B in fraud prevented annually.", color: T.green },
          { year: "Apr 2025", event: "Launches Visa Intelligent Commerce \u2014 opens payment network to AI agents (Anthropic, OpenAI, etc.).", color: T.cyan },
        ].map((item, i, arr) => (
          <div key={i}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ minWidth: 64, fontFamily: mono, fontSize: 10, fontWeight: 700, color: item.color, background: `${item.color}12`, borderRadius: 4, padding: "2px 5px", textAlign: "center", flexShrink: 0, marginTop: 2 }}>{item.year}</div>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, marginTop: 3, border: `2px solid ${item.color}50`, flexShrink: 0 }} />
              <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec, lineHeight: 1.5, paddingBottom: i < arr.length - 1 ? 8 : 0 }}>{item.event}</div>
            </div>
            {i < arr.length - 1 && (
              <div style={{ height: 8, display: "flex" }}>
                <div style={{ minWidth: 64 + 12 }} />
                <div style={{ width: 10, display: "flex", justifyContent: "center" }}>
                  <div style={{ width: 2, height: "100%", background: T.borderMuted }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AI Observatory */}
      <div style={{ background: T.surface, border: `1px solid ${T.amber}30`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
        <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <Icon name="monitoring" size={16} color={T.amber} /> The AI Observatory \u2014 Taneja's Morning Dashboard
        </div>
        <div style={{ fontFamily: sans, fontSize: 12.5, color: T.textSec, lineHeight: 1.6, marginBottom: 12 }}>
          Visa's President of Technology opens this every morning. It's the Layer 6 monitoring system made executive-visible:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { label: "Model Catalog", desc: "Every model in production \u2014 click any model, see full details", icon: "assignment" },
            { label: "Compliance Profile", desc: "Risk scoring, privacy law compliance (letter AND spirit)", icon: "balance" },
            { label: "Security Profile", desc: "Access controls, data boundaries, encryption status", icon: "lock" },
            { label: "Drift Monitoring", desc: "Real-time parameter drift with automated alerting", icon: "bar_chart" },
          ].map((item, i) => (
            <div key={i} style={{ background: `${T.amber}06`, border: `1px solid ${T.amber}15`, borderRadius: 8, padding: 12 }}>
              <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, color: T.amber, marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
                <Icon name={item.icon} size={14} color={T.amber} fill={1} /> {item.label}
              </div>
              <div style={{ fontFamily: sans, fontSize: 11, color: T.textMuted, lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Products */}
      <SectionHeader color={T.cyan}>AI Products That Matter</SectionHeader>
      {[
        { name: "Visa Advanced Authorization (VAA)", desc: "Real-time fraud scoring on EVERY transaction. Neural network-based since 1993. Analyzes 500+ attributes. Prevented $27B in fraud in 2022.", color: T.cyan, badge: "FLAGSHIP" },
        { name: "Smarter STIP", desc: "When an issuer's system goes down, Visa's AI mirrors their approval decisions with 95% accuracy. Real-time deep learning model.", color: T.green, badge: "RESILIENCE" },
        { name: "Account Attack Intelligence", desc: "Identifies enumeration attacks BEFORE a merchant is compromised. Generative AI-powered.", color: T.purple, badge: "PROACTIVE" },
        { name: "Visa Intelligent Commerce", desc: "Opens Visa's payment rails to AI agents. Partners: Anthropic, OpenAI, Microsoft, Stripe. Agents can find AND buy.", color: T.amber, badge: "AGENTIC" },
      ].map((item, i) => (
        <div key={i} style={{
          background: `${item.color}04`, border: `1px solid ${item.color}20`, borderLeft: `3px solid ${item.color}`,
          borderRadius: 8, padding: "14px 18px", marginBottom: 10,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.5px" }}>{item.name}</span>
            <Tag color={item.color}>{item.badge}</Tag>
          </div>
          <div style={{ fontFamily: sans, fontSize: 12, color: T.textSec, lineHeight: 1.6 }}>{item.desc}</div>
        </div>
      ))}

      <Callout color={T.cyan}>
        <strong style={{ color: T.cyan }}>Multi-Model Strategy:</strong> Visa works with OpenAI, Anthropic Claude, Google, IBM, Meta, and Mistral AI.
        Taneja avoids vendor lock-in, matching the best LLM to each use case — coding, risk models, agentic workflows.
        He evaluates on transparency, fairness controls, fine-tuning flexibility, and hallucination rates.
      </Callout>

      <Divider />

      {/* ─── GOLDMAN ─── */}
      <SectionHeader color={T.cyan}>Goldman Sachs \u2014 The GS AI Platform</SectionHeader>
      <Body>
        Goldman took a centralized, firewalled approach. One platform to rule them all. Every AI activity in the firm
        goes through GS AI Platform — no shadow AI, no rogue deployments.
      </Body>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
        <Stat value="50%+" label="of 46K employees actively using GS AI" color={T.cyan} />
        <Stat value="20%" label="productivity lift for developers" color={T.green} />
        <Stat value="15%" label="reduction in post-release bugs" color={T.purple} />
        <Stat value="12%" label="cost reduction in data management" color={T.amber} />
      </div>

      {/* Architecture */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
        <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <Icon name="architecture" size={16} color={T.cyan} /> GS AI Platform Architecture
        </div>
        {[
          { label: "User Interface", desc: "Chat interface + developer tools (GitHub Copilot) + role-specific copilots", color: T.cyan, icon: "dashboard" },
          { label: "Internal Gateway", desc: "Adds proprietary context via RAG. Pulls from Legend, research archives, codebases", color: T.amber, icon: "hub" },
          { label: "Multi-Model Router", desc: "Routes to best model: GPT-4o for general, Gemini for analysis, Llama for specific tasks, Claude for reasoning", color: T.green, icon: "account_tree" },
          { label: "Governance Layer", desc: "Data access controls, compliance logging, audit trails", color: T.red, icon: "shield" },
          { label: "Fine-Tuning Pipeline", desc: "Open-source + internal models trained on GS codebases, research, market data", color: T.purple, icon: "model_training" },
        ].map((item, i, arr) => (
          <div key={i}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 5, alignSelf: "stretch", minHeight: 44, background: item.color, borderRadius: 2, flexShrink: 0 }} />
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${item.color}12`, border: `1px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={item.icon} size={16} color={item.color} />
              </div>
              <div>
                <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: item.color }}>{item.label}</div>
                <div style={{ fontFamily: sans, fontSize: 11, color: T.textMuted, lineHeight: 1.4 }}>{item.desc}</div>
              </div>
            </div>
            {i < arr.length - 1 && (
              <div style={{ height: 8, paddingLeft: 29, display: "flex", alignItems: "center" }}>
                <Icon name="arrow_downward" size={10} color={T.textMuted} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Leadership */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
        {[
          { name: "Daniel Marcu", role: "Global Head of AI Engineering & Science", detail: "Ex-Amazon AGI. 30+ years. Oversees all AI platforms and products.", color: T.cyan },
          { name: "Rahul Sharma", role: "Head of GS AI Platform Engineering", detail: "Owns the platform \u2014 infrastructure, serving, multi-model orchestration.", color: T.amber },
          { name: "Bing Xiang", role: "Head of AI Research", detail: "Leads research into new model architectures and fine-tuning approaches.", color: T.green },
        ].map((p, i) => (
          <div key={i} style={{
            background: T.surface, border: `1px solid ${T.border}`, borderTop: `3px solid ${p.color}`,
            borderRadius: 10, padding: 16,
          }}>
            <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, color: p.color }}>{p.name}</div>
            <div style={{ fontFamily: sans, fontSize: 10, color: T.textMuted, marginBottom: 8 }}>{p.role}</div>
            <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec, lineHeight: 1.6 }}>{p.detail}</div>
          </div>
        ))}
      </div>

      <Callout color={T.amber}>
        <strong style={{ color: T.amber }}>The "AI Champions" model:</strong> Goldman has designated AI champions in each business group —
        employees tasked with finding the highest-value AI use cases for their line of business.
        Goldman's COO of Core Engineering calls them the "connective tissue" between the platform team and the business units.
      </Callout>

      <Footer />
    </div>
  );
}
