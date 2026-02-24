import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { SearchBar, CodePill, Tag, Stat, PageCard, Divider, SectionHeader, Footer } from "../components/UI";
import FAQ from "../components/FAQ";
import PAGES from "../data/pages";

export default function Landing() {
  const { T } = useTheme();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = PAGES.filter((p) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s) || p.keywords.includes(s);
  });

  return (
    <div>
      {/* Hero */}
      <div style={{ marginBottom: 48 }}>
        <div style={{
          fontFamily: mono, fontSize: 10, fontWeight: 700, color: T.textMuted,
          textTransform: "uppercase", letterSpacing: "2px", marginBottom: 16,
        }}>
          <span style={{ color: T.green }}>//</span> Enterprise AI Operations Research
        </div>
        <h1 style={{
          fontFamily: mono, fontSize: 32, fontWeight: 700, color: T.text,
          letterSpacing: "-0.5px", lineHeight: 1.25, marginBottom: 16,
        }}>
          Intelligent Operations<br />
          <span style={{ color: T.cyan }}>and Agentic Architecture</span>
        </h1>
        <p style={{
          fontFamily: sans, fontSize: 15, color: T.textSec, lineHeight: 1.7,
          maxWidth: 560, marginBottom: 24,
        }}>
          How Visa, Goldman Sachs, and Fortune 500 financial institutions structure
          ML operations at enterprise scale. The 7-layer reference architecture,
          inference economics, multi-agent protocols, and hands-on labs.
        </p>
        <CodePill>git clone https://github.com/QbitLoop/intel-ops.git</CodePill>
        <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" }}>
          {["MLOps", "Agentic AI", "Financial Services", "NVIDIA Stack", "Fraud Detection", "MCP"].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
        <Stat value="65%" label="of financial firms actively using AI" color={T.cyan} />
        <Stat value="47%" label="hybrid architecture (2x in one year)" color={T.amber} />
        <Stat value="$40B" label="fraud prevented annually by Visa AI" color={T.green} />
        <Stat value="40%" label="enterprise apps using agents by EOY" color={T.purple} />
      </div>

      <Divider />

      {/* Thesis */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader color={T.amber}>What this is</SectionHeader>
        <p style={{ fontFamily: sans, fontSize: 14, color: T.textSec, lineHeight: 1.75, maxWidth: 640 }}>
          The experimentation phase is over. By 2026, enterprise AI has transitioned from isolated
          pilot projects to autonomous, governed, production-scale intelligent operations.
          Traditional MLOps — linear training pipelines, static experiment tracking, batch inference —
          is insufficient for managing agentic systems that orchestrate multi-step inference,
          manage dynamic memory states, and require continuous behavioral governance.
        </p>
        <p style={{ fontFamily: sans, fontSize: 14, color: T.textSec, lineHeight: 1.75, maxWidth: 640, marginTop: 12 }}>
          This site maps the full landscape: reference architectures, real-world implementations
          at Visa and Goldman Sachs, inference economics, regulatory frameworks, and a hands-on
          fraud detection lab using NVIDIA's blueprint on Brev GPU infrastructure.
        </p>
      </div>

      <Divider />

      {/* Directory with Search */}
      <div>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 20, flexWrap: "wrap", gap: 12,
        }}>
          <SectionHeader color={T.cyan}>What's inside</SectionHeader>
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 0", fontFamily: sans, fontSize: 13, color: T.textMuted }}>
            No pages match "{search}"
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {filtered.map((p) => (
            <PageCard key={p.id} icon={p.icon} title={p.title} tag={p.tag}
              color={T[p.color]} description={p.description}
              onClick={() => navigate(p.path)} />
          ))}
        </div>
        <style>{`@media(max-width:740px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </div>

      <Divider />

      {/* Sources */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader color={T.green}>Sources</SectionHeader>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { source: "NVIDIA State of AI in Financial Services 2026", type: "Survey", detail: "800+ professionals, 6th annual" },
            { source: "Enterprise Intelligent Operations & Agentic Architecture 2026", type: "Research", detail: "61 cited sources, 18 pages" },
            { source: "Visa, Goldman Sachs, JPMorgan public disclosures", type: "Intel", detail: "Engineering blogs, job postings, earnings calls" },
            { source: "NVIDIA AI Blueprints, Brev GPU Platform", type: "Lab", detail: "Fraud Detection Blueprint, synthetic data" },
          ].map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
              background: T.surface, border: `1px solid ${T.borderMuted}`, borderRadius: 8,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: mono, fontSize: 12, color: T.text, fontWeight: 500 }}>{s.source}</div>
                <div style={{ fontFamily: sans, fontSize: 11, color: T.textMuted }}>{s.detail}</div>
              </div>
              <Tag>{s.type}</Tag>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* FAQ */}
      <SectionHeader color={T.purple}>Frequently Asked Questions</SectionHeader>
      <FAQ />

      <Footer />
    </div>
  );
}
