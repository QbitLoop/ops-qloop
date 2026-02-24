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
      <SectionHeader color={T.green}>Model → Production Pipeline</SectionHeader>
      <Body>The actual workflow when a data scientist at Visa builds a new fraud detection model:</Body>

      {/* Phase flow overview */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
        {[
          { phase: "Discover", steps: "1–2", icon: "search", color: T.cyan },
          { phase: "Build", steps: "3–4", icon: "construction", color: T.amber },
          { phase: "Validate", steps: "5", icon: "verified", color: T.red },
          { phase: "Deploy", steps: "6–7", icon: "rocket_launch", color: T.purple },
          { phase: "Monitor", steps: "8", icon: "monitor_heart", color: T.green },
        ].map((p, i, arr) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "8px 14px", background: `${p.color}10`, border: `1px solid ${p.color}30`, borderRadius: 8, minWidth: 80 }}>
              <Icon name={p.icon} size={18} color={p.color} />
              <span style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, color: p.color }}>{p.phase}</span>
              <span style={{ fontFamily: mono, fontSize: 9, color: T.textMuted }}>Step {p.steps}</span>
            </div>
            {i < arr.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
                <div style={{ width: 16, height: 1, background: T.borderMuted }} />
                <Icon name="arrow_forward" size={12} color={T.borderMuted} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detailed steps grouped by phase */}
      {[
        { phaseLabel: "Discover", phaseColor: T.cyan, phaseIcon: "search", steps: [
          { step: "1", title: "Business Request", desc: "Risk team identifies new fraud pattern (e.g., synthetic identity). Requests ML solution.", who: "Business + AI Governance", color: T.red, icon: "campaign" },
          { step: "2", title: "Data Engineering", desc: "Build pipeline to extract relevant features. Compute velocity metrics, cross-reference with consortium data.", who: "Data Engineers", color: T.cyan, icon: "account_tree" },
        ]},
        { phaseLabel: "Build", phaseColor: T.amber, phaseIcon: "construction", steps: [
          { step: "3", title: "Feature Store Registration", desc: "New features registered with metadata, lineage, ownership, and freshness SLAs. Available for all future models.", who: "Data Engineers + Platform", color: T.amber, icon: "dataset" },
          { step: "4", title: "Model Development", desc: "Pull features from Feature Store. Train XGBoost + deep learning ensemble. Log experiments to MLflow.", who: "Data Scientists", color: T.green, icon: "model_training" },
        ]},
        { phaseLabel: "Validate", phaseColor: T.red, phaseIcon: "verified", steps: [
          { step: "5", title: "Validation Gate", desc: "Independent Model Risk team reviews: fairness, explainability (SHAP), adversarial robustness, compliance. Can REJECT.", who: "Model Risk Management", color: T.red, icon: "shield" },
        ]},
        { phaseLabel: "Deploy", phaseColor: T.purple, phaseIcon: "rocket_launch", steps: [
          { step: "6", title: "Shadow Deployment", desc: "Model scores real transactions but decisions NOT acted upon. Compared to champion for 2-4 weeks.", who: "ML Engineers", color: T.purple, icon: "visibility" },
          { step: "7", title: "Canary → Full Rollout", desc: "5% → 25% → 50% → 100%. Automated rollback triggers if precision drops below threshold.", who: "ML Engineers + Platform", color: T.purple, icon: "rocket_launch" },
        ]},
        { phaseLabel: "Monitor", phaseColor: T.green, phaseIcon: "monitor_heart", steps: [
          { step: "8", title: "Continuous Monitoring", desc: "Model enters Observatory. Feature drift, prediction drift tracked daily. Alerts fire if PSI > 0.2.", who: "MLOps + AI Governance", color: T.green, icon: "monitor_heart" },
        ]},
      ].map((phase, pi, phases) => (
        <div key={pi}>
          {/* Phase label */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 2, height: 14, background: phase.phaseColor, borderRadius: 2 }} />
            <Icon name={phase.phaseIcon} size={13} color={phase.phaseColor} />
            <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 700, color: phase.phaseColor, textTransform: "uppercase", letterSpacing: "0.8px" }}>{phase.phaseLabel}</span>
          </div>
          {/* Steps in this phase */}
          <div style={{ borderLeft: `2px solid ${phase.phaseColor}30`, marginLeft: 9, paddingLeft: 16, marginBottom: 4 }}>
            {phase.steps.map((item, si) => (
              <div key={si} style={{ display: "flex", gap: 12, marginBottom: si < phase.steps.length - 1 ? 12 : 0, position: "relative" }}>
                {/* Step connector dot */}
                <div style={{
                  position: "absolute", left: -21, top: 6,
                  width: 8, height: 8, borderRadius: "50%",
                  background: item.color, border: `2px solid ${T.bg}`,
                }} />
                <div style={{
                  width: 26, height: 26, borderRadius: "50%", background: `${item.color}12`,
                  border: `1.5px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon name={item.icon} size={13} color={item.color} />
                </div>
                <div style={{ flex: 1, paddingTop: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontFamily: mono, fontSize: 9, color: T.textMuted }}>STEP {item.step}</span>
                    <span style={{ fontFamily: mono, fontSize: 12.5, fontWeight: 700, color: T.text }}>{item.title}</span>
                  </div>
                  <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec, lineHeight: 1.5 }}>{item.desc}</div>
                  <div style={{ fontFamily: mono, fontSize: 10, color: item.color, marginTop: 3, display: "flex", alignItems: "center", gap: 3 }}>
                    <Icon name="person" size={10} color={item.color} /> {item.who}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Arrow to next phase */}
          {pi < phases.length - 1 && (
            <div style={{ display: "flex", alignItems: "center", gap: 6, margin: "6px 0 10px 9px" }}>
              <Icon name="arrow_downward" size={14} color={T.borderMuted} />
            </div>
          )}
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
