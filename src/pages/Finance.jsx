import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Tag, Footer } from "../components/UI";
import Icon from "../components/Icon";

export default function Finance() {
  const { T } = useTheme();

  return (
    <div>
      <SectionHeader color={T.amber}>Vertical Deep Dive</SectionHeader>
      <PageTitle subtitle="ISO 20022 & GenAI">Finance Vertical</PageTitle>
      <Body>
        Financial services presents the premier case study of Intelligent Operations integrating with deeply
        entrenched legacy systems. The most pressing challenge: the global migration from legacy SWIFT MT
        messages to the new, highly structured ISO 20022 (MX) standard.
      </Body>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "24px 0 32px" }}>
        <Stat value="Nov 2025" label="MT\u2192MX coexistence ended for CBPR+" color={T.red} />
        <Stat value="Nov 2026" label="free-text postal addresses eliminated" color={T.amber} />
        <Stat value="430K+" label="keyword variations for 'student' payments alone" color={T.purple} />
        <Stat value="45%" label="faster underwriting with agentic AI" color={T.green} />
      </div>

      <Divider />

      {/* ISO 20022 */}
      <SectionHeader color={T.amber}>The ISO 20022 Migration</SectionHeader>
      <Body>
        ISO 20022 relies on highly structured, enriched XML data elements — enabling enhanced straight-through
        processing, improved analytics, and superior fraud identification. But compliance requires translating
        decades of legacy free-text unstructured data into rigid new formats.
      </Body>

      {/* MT→MX Pipeline Flow */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, margin: "20px 0 24px", background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: "18px 16px" }}>
        {[
          { icon: "description", label: "Legacy MT", sub: "SWIFT free-text", color: T.red },
          { arrow: true, color: T.amber },
          { icon: "auto_fix_high", label: "AI Translation", sub: "LLM + middleware", color: T.amber },
          { arrow: true, color: T.green },
          { icon: "verified", label: "ISO 20022 MX", sub: "Structured XML", color: T.green },
        ].map((item, i) => item.arrow ? (
          <div key={i} style={{ display: "flex", alignItems: "center", paddingBottom: 22 }}>
            <Icon name="arrow_forward" size={15} color={item.color} />
          </div>
        ) : (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: `${item.color}15`, border: `1px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={item.icon} size={20} color={item.color} />
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, color: item.color, textAlign: "center" }}>{item.label}</div>
            <div style={{ fontFamily: sans, fontSize: 10, color: T.textMuted, textAlign: "center", lineHeight: 1.3 }}>{item.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
        <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <Icon name="swap_horiz" size={16} color={T.amber} /> MT \u2192 MX Translation Challenges
        </div>
        {[
          { challenge: "Data Truncation", desc: "Extensive ISO 20022 fields can't fit into older, constrained MT databases. Field mapping is lossy.", color: T.red },
          { challenge: "Unstructured Remittance", desc: "Legacy free-text fields contain 430,000+ keyword variations. 'Student' payments alone span 'university', 'tuition', 'college', 'studies' and more.", color: T.amber },
          { challenge: "Address Format", desc: "By November 2026, unstructured free-text postal addresses must be eliminated from specific pacs.008 messages or face rejection.", color: T.purple },
          { challenge: "Core System Risk", desc: "Full system rebuilds are prohibitively expensive and risky. Incremental modernization with AI-augmented translation layers is the dominant strategy.", color: T.cyan },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 0", borderBottom: i < 3 ? `1px solid ${T.borderMuted}` : "none" }}>
            <Icon name="warning" size={14} color={item.color} style={{ marginTop: 2 }} />
            <div>
              <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: item.color }}>{item.challenge}</div>
              <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec, lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* GenAI Solution */}
      <SectionHeader color={T.green}>GenAI-Powered Solutions</SectionHeader>
      <Body>
        Proprietary LLMs integrated via MCP now autonomously parse massive volumes of unstructured remittance
        fields, extracting precise intent and purpose codes with near-perfect accuracy. This agentic pipeline
        transforms raw transaction data into "active organizational memory."
      </Body>

      {/* Agentic Pipeline Flow */}
      <div style={{ display: "flex", alignItems: "center", gap: 4, margin: "16px 0 20px", background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: "16px 12px" }}>
        {[
          { icon: "text_snippet", label: "Raw Remittance", sub: "Free-text input", color: T.amber },
          { arrow: true, color: T.green },
          { icon: "psychology", label: "LLM Parser", sub: "430K+ variations", color: T.green },
          { arrow: true, color: T.cyan },
          { icon: "label", label: "Purpose Codes", sub: "ISO 20022 intent", color: T.cyan },
          { arrow: true, color: T.purple },
          { icon: "database", label: "Active Memory", sub: "Org knowledge", color: T.purple },
        ].map((item, i) => item.arrow ? (
          <div key={i} style={{ display: "flex", alignItems: "center", paddingBottom: 22 }}>
            <Icon name="arrow_forward" size={13} color={item.color} />
          </div>
        ) : (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <div style={{ width: 38, height: 38, borderRadius: 8, background: `${item.color}15`, border: `1px solid ${item.color}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={item.icon} size={17} color={item.color} />
            </div>
            <div style={{ fontFamily: mono, fontSize: 10, fontWeight: 700, color: item.color, textAlign: "center", lineHeight: 1.2 }}>{item.label}</div>
            <div style={{ fontFamily: sans, fontSize: 9.5, color: T.textMuted, textAlign: "center", lineHeight: 1.3 }}>{item.sub}</div>
          </div>
        ))}
      </div>

      {[
        { title: "Purpose Code Extraction", desc: "LLMs parse free-text remittance fields to extract intent — mapping 430K+ keyword variations into structured ISO 20022 purpose codes. Near-perfect accuracy replaces manual classification.", icon: "auto_fix_high", color: T.green },
        { title: "Middleware Translation", desc: "Solutions like Trace Financial's Transformer provide out-of-the-box MT-to-MX conversion with no-code UI for business teams. Dynamic truncation reporting without custom engineering.", icon: "translate", color: T.cyan },
        { title: "Customer Intelligence", desc: "Structured ISO 20022 data enables hyper-personalization — offering targeted financial products based on newly visible behavioral trends that were invisible in unstructured MT data.", icon: "person_search", color: T.purple },
        { title: "Agentic Audit & Origination", desc: "Financial agents autonomously scan documents, validate risk scores, and generate compliance-ready reports. Underwriting cycles cut 45%, audit prep times down 50%.", icon: "task_alt", color: T.amber },
      ].map((item, i) => (
        <div key={i} style={{
          background: `${item.color}04`, border: `1px solid ${item.color}18`, borderLeft: `3px solid ${item.color}`,
          borderRadius: 8, padding: "14px 18px", marginBottom: 10,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <Icon name={item.icon} size={16} color={item.color} />
            <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: item.color }}>{item.title}</span>
          </div>
          <div style={{ fontFamily: sans, fontSize: 12, color: T.textSec, lineHeight: 1.6 }}>{item.desc}</div>
        </div>
      ))}

      <Callout color={T.amber}>
        <strong style={{ color: T.amber }}>NVIDIA connection:</strong> The ISO 20022 pipeline is a perfect use case for the full NVIDIA stack:
        RAPIDS for high-volume data processing of transaction records, NeMo for fine-tuning domain-specific LLMs on
        financial language, NIM for serving the extraction models at scale, and Morpheus for monitoring pipeline integrity.
        This is the kind of vertical solution that GSI teams should be building.
      </Callout>

      <Footer />
    </div>
  );
}
