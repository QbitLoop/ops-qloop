import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Tag, Footer } from "../components/UI";
import Icon from "../components/Icon";

export default function Governance() {
  const { T } = useTheme();

  return (
    <div>
      <SectionHeader color={T.green}>Compliance Framework</SectionHeader>
      <PageTitle subtitle="and the EU AI Act">Governance & Security</PageTitle>
      <Body>
        In 2026, governance has formally transitioned from aspirational best practice to a hard, non-negotiable
        operational requirement. The EU AI Act achieves full enforcement for high-risk systems in August 2026.
        Penalties reach up to 7% of global annual turnover.
      </Body>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "24px 0 32px" }}>
        <Stat value="\u20ac35M" label="or 7% of global turnover \u2014 max penalty" color={T.red} />
        <Stat value="40%" label="cite security as #1 obstacle to scaling agents" color={T.amber} />
        <Stat value="Aug 2026" label="EU AI Act high-risk enforcement date" color={T.green} />
        <Stat value="6 months" label="minimum log retention (Article 96)" color={T.purple} />
      </div>

      <Divider />

      {/* 7-Step Framework */}
      <SectionHeader color={T.green}>7-Step Compliance Framework</SectionHeader>
      <Body>
        To achieve CE marking authorization and operate legally within the EU market, enterprises must implement
        this rigorous, continuous compliance framework:
      </Body>

      {[
        { step: "1", title: "Risk Assessment & Inventory", desc: "Comprehensive AI inventory audits. Robust risk management systems identifying potential harms and documenting mitigation effectiveness.", icon: "inventory_2", color: T.red },
        { step: "2", title: "Data Governance & Bias Mitigation", desc: "Examine datasets for historical biases. Ensure quality, relevance, and representativeness of input data to minimize discriminatory outcomes. GDPR-level rigor.", icon: "dataset", color: T.amber },
        { step: "3", title: "Technical Documentation & Traceability", desc: "Exhaustive automated records of data sources and processing. Article 96 mandates timestamped, machine-readable logs kept for minimum 6 months.", icon: "description", color: T.cyan },
        { step: "4", title: "Human Oversight", desc: "Assign competent, trained individuals for effective human oversight. System must operate within instructions with immediate human intervention capability.", icon: "supervised_user_circle", color: T.green },
        { step: "5", title: "Conformity Assessments", desc: "Independent notified bodies conduct technical evaluations and third-party audits prior to any market deployment.", icon: "fact_check", color: T.purple },
        { step: "6", title: "Continuous Monitoring", desc: "Post-deployment surveillance ensuring ongoing compliance. Model drift detection, performance monitoring, and regular re-assessment of risk classification.", icon: "monitoring", color: T.cyan },
        { step: "7", title: "Incident Reconstruction", desc: "Detailed decision-making provenance enabling full reconstruction of any AI system behavior. Traditional software logging is insufficient.", icon: "manage_search", color: T.red },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%", background: `${item.color}15`,
            border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: mono, fontSize: 13, fontWeight: 800, color: item.color, flexShrink: 0,
          }}>{item.step}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: mono, fontSize: 12.5, fontWeight: 600, color: T.text, display: "flex", alignItems: "center", gap: 6 }}>
              <Icon name={item.icon} size={14} color={item.color} /> {item.title}
            </div>
            <div style={{ fontFamily: sans, fontSize: 12, color: T.textSec, lineHeight: 1.6, marginTop: 2 }}>{item.desc}</div>
          </div>
        </div>
      ))}

      <Divider />

      {/* Agent Security */}
      <SectionHeader color={T.red}>Agent Control Systems</SectionHeader>
      <Body>
        40% of organizations cite security and compliance as the primary obstacle to scaling agentic AI.
        Autonomous agents embedded in business processes introduce novel attack vectors: prompt injection,
        automated tool poisoning, and lack of runtime isolation.
      </Body>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16, marginBottom: 24 }}>
        {[
          { threat: "Prompt Injection", desc: "Malicious inputs manipulate agent behavior through crafted prompts", mitigation: "NeMo Guardrails, input sanitization", color: T.red },
          { threat: "Tool Poisoning", desc: "Compromised tool APIs return malicious data to influence agent decisions", mitigation: "Zero Trust, MCP sandboxing, intent declarations", color: T.amber },
          { threat: "Distillation Attacks", desc: "Foreign actors extract capabilities from proprietary models to train unprotected variants", mitigation: "Model watermarking, access controls, audit logging", color: T.purple },
          { threat: "Privilege Escalation", desc: "Agent exceeds authorization level of the human user it represents", mitigation: "Agent-specific IAM, least privilege enforcement", color: T.cyan },
        ].map((item, i) => (
          <div key={i} style={{
            background: T.surface, border: `1px solid ${T.border}`, borderTop: `3px solid ${item.color}`,
            borderRadius: 8, padding: 16,
          }}>
            <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: item.color, marginBottom: 4 }}>{item.threat}</div>
            <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec, lineHeight: 1.5, marginBottom: 6 }}>{item.desc}</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: T.green, display: "flex", alignItems: "center", gap: 4 }}>
              <Icon name="shield" size={12} color={T.green} /> {item.mitigation}
            </div>
          </div>
        ))}
      </div>

      <Callout color={T.green}>
        <strong style={{ color: T.green }}>Zero Trust for agents:</strong> An autonomous agent can never exceed the specific authorization
        level of the human user or role it represents. Agent-specific identity and access management, runtime isolation,
        and explicit intent declarations via MCP are the minimum requirements for production deployment.
      </Callout>

      <Footer />
    </div>
  );
}
