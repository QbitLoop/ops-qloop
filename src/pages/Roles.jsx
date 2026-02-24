import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Tag, Footer } from "../components/UI";
import Icon from "../components/Icon";

export default function Roles() {
  const { T } = useTheme();

  return (
    <div>
      <SectionHeader color={T.ice}>Workforce & Workflow</SectionHeader>
      <PageTitle subtitle="& the Model-to-Production Pipeline">Org Structure & Roles</PageTitle>
      <Body>
        35% of financial institutions cite "lack of AI experts" as their #2 challenge. Here's the full roster of
        roles that run enterprise MLOps, plus the new workforce dynamics created by agentic AI.
      </Body>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "24px 0 32px" }}>
        <Stat value="35%" label="cite talent shortage as top challenge" color={T.red} />
        <Stat value="28mo" label="average ROI timeline for AI transformation" color={T.amber} />
        <Stat value="3-5" label="senior professionals + agents = 50-person output" color={T.green} />
        <Stat value="New" label="Agent Onboarding Specialist role emerges" color={T.purple} />
      </div>

      <Divider />

      {/* Roles Grid */}
      <SectionHeader color={T.cyan}>Enterprise MLOps Roles</SectionHeader>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          { title: "ML Platform Engineer", layer: "LAYER 2", count: "~20-50 per firm", color: T.amber, tasks: "Build and maintain the internal ML platform. Model registry, feature store, serving infrastructure, GPU cluster management.", tools: "Kubernetes, Docker, Terraform, Triton, MLflow, Kafka, Redis" },
          { title: "Data Engineer", layer: "LAYER 3", count: "~100-500 per firm", color: T.cyan, tasks: "Build data pipelines that feed models. Streaming ETL, data quality validation, feature computation. At Visa, this team processes 639M daily transactions.", tools: "Spark, Flink, Kafka, RAPIDS, Delta Lake, dbt, Airflow" },
          { title: "Data Scientist", layer: "LAYER 4", count: "~50-200 per firm", color: T.green, tasks: "Build and validate models within the governed platform. Run experiments, test hypotheses. Models go through validation gates.", tools: "PyTorch, XGBoost, scikit-learn, Jupyter (governed), Optuna" },
          { title: "ML / MLOps Engineer", layer: "LAYER 5", count: "~30-100 per firm", color: T.purple, tasks: "Bridge data science and production. Deploy with proper versioning, A/B testing, canary rollouts, and rollback capability.", tools: "Dynamo-Triton, TensorRT, FastAPI, KServe, GitHub Actions" },
          { title: "Model Risk / AI Governance", layer: "LAYER 1+6", count: "~20-50 per firm", color: T.red, tasks: "Validate models independently from builders. Required by regulators (OCC SR 11-7). Can REJECT models for production.", tools: "SHAP, Evidently AI, custom audit frameworks, regulatory reporting" },
          { title: "Agent Onboarding Specialist", layer: "NEW 2026", count: "Emerging role", color: T.ice, tasks: "Translates corporate culture, unwritten workflow rules, and domain judgment calls into agent contextual memory. Ensures agents align with organizational objectives without causing bottlenecks or brand damage.", tools: "MCP configuration, NeMo Guardrails, domain expertise transfer" },
        ].map((role, i) => (
          <div key={i} style={{
            background: T.surface, border: `1px solid ${T.border}`, borderTop: `3px solid ${role.color}`,
            borderRadius: 10, padding: 16,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
              <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, color: role.color }}>{role.title}</span>
              <Tag color={role.color}>{role.layer}</Tag>
            </div>
            <div style={{ fontFamily: mono, fontSize: 10, color: T.textMuted, marginBottom: 8 }}>{role.count}</div>
            <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec, lineHeight: 1.6, marginBottom: 8 }}>{role.tasks}</div>
            <div style={{
              fontFamily: mono, fontSize: 10, color: T.textMuted, borderTop: `1px solid ${T.border}`,
              paddingTop: 6, display: "flex", alignItems: "center", gap: 4,
            }}>
              <Icon name="build" size={12} color={T.textMuted} /> {role.tools}
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* Model to Production */}
      <SectionHeader color={T.green}>Model \u2192 Production Pipeline</SectionHeader>
      <Body>The actual workflow when a data scientist at Visa builds a new fraud detection model:</Body>

      {[
        { step: "1", title: "Business Request", desc: "Risk team identifies new fraud pattern (e.g., synthetic identity). Requests ML solution.", who: "Business + AI Governance", color: T.red },
        { step: "2", title: "Data Engineering", desc: "Build pipeline to extract relevant features. Compute velocity metrics, cross-reference with consortium data.", who: "Data Engineers", color: T.cyan },
        { step: "3", title: "Feature Store Registration", desc: "New features registered with metadata, lineage, ownership, and freshness SLAs. Available for all future models.", who: "Data Engineers + Platform", color: T.amber },
        { step: "4", title: "Model Development", desc: "Pull features from Feature Store. Train XGBoost + deep learning ensemble. Log experiments to MLflow.", who: "Data Scientists", color: T.green },
        { step: "5", title: "Validation Gate", desc: "Independent Model Risk team reviews: fairness, explainability (SHAP), adversarial robustness, compliance. Can REJECT.", who: "Model Risk Management", color: T.red },
        { step: "6", title: "Shadow Deployment", desc: "Model scores real transactions but decisions NOT acted upon. Compared to champion for 2-4 weeks.", who: "ML Engineers", color: T.purple },
        { step: "7", title: "Canary \u2192 Full Rollout", desc: "5% \u2192 25% \u2192 50% \u2192 100%. Automated rollback triggers if precision drops below threshold.", who: "ML Engineers + Platform", color: T.purple },
        { step: "8", title: "Continuous Monitoring", desc: "Model enters Observatory. Feature drift, prediction drift tracked daily. Alerts fire if PSI > 0.2.", who: "MLOps + AI Governance", color: T.ice },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", background: `${item.color}15`,
            border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: mono, fontSize: 12, fontWeight: 800, color: item.color, flexShrink: 0,
          }}>{item.step}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: mono, fontSize: 12.5, fontWeight: 700, color: T.text }}>{item.title}</div>
            <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec, lineHeight: 1.5 }}>{item.desc}</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: item.color, marginTop: 2, display: "flex", alignItems: "center", gap: 2 }}>
              <Icon name="arrow_forward" size={10} color={item.color} /> {item.who}
            </div>
          </div>
        </div>
      ))}

      <Divider />

      {/* Ultra-Lean */}
      <Callout color={T.purple}>
        <strong style={{ color: T.purple }}>The "Ultra-Lean" Enterprise (2026):</strong> Small teams of 3-5 senior professionals
        with AI agent networks now achieve output that previously required dozens of personnel. The enterprise mandate
        has shifted from hiring Data Scientists to hiring AI Engineers and MLOps professionals who integrate, deploy,
        orchestrate, and maintain models within live production systems. Average ROI timeline: 28 months for full
        AI transformation to outweigh upfront costs.
      </Callout>

      <Footer />
    </div>
  );
}
