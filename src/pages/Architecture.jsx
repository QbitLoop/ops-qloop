import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Footer } from "../components/UI";
import { FlowArrow } from "../components/UI";
import InsightCarousel from "../components/InsightCarousel";
import LAYER_INSIGHTS from "../data/layerInsights";
import Icon from "../components/Icon";

const LAYERS = [
  { num: "01", key: "L1", name: "Data Layer", sub: "Active Intelligence & Organizational Memory", color: "cyan", icon: "database",
    detail: "The foundation has evolved from passive storage to \"active organizational memory.\" Every dataset carries embedded semantic context, precise data lineage, and strict access guardrails. The modern data lakehouse functions as a living memory system — contextualizing disparate information, enforcing security dynamically, auditing automated decisions, and preserving deep traceability. Without governed semantic memory, AI agents cannot reliably recall past interactions or self-correct.",
    tools: "Delta Lake, Iceberg, Apache Kafka, Great Expectations, dbt" },
  { num: "02", key: null, name: "Knowledge Layer", sub: "Semantic Search & Agentic RAG", color: "ice", icon: "psychology",
    detail: "New in 2026. Provides domain-specific context through semantic search and Agentic Retrieval-Augmented Generation (RAG). Unlike static lookups, this layer enables dynamic reasoning for knowledge retrieval — agents query enterprise knowledge bases, interpret context, and synthesize answers. This is the layer that makes agents actually useful: without it, LLMs hallucinate on enterprise-specific questions.",
    tools: "NeMo Retriever, LlamaIndex, Pinecone, Weaviate, Milvus, pgvector", isNew: true },
  { num: "03", key: null, name: "Model Layer", sub: "Foundation + Vertically-Tuned Proprietary Models", color: "green", icon: "model_training",
    detail: "Houses pre-trained foundation models alongside vertically-tuned proprietary models. The shift toward smaller, domain-specific models is accelerating — general-purpose LLMs hit a functional ceiling in specialized environments, lacking the precision for sector-specific accuracy and compliance while being vastly over-parameterized. A Fortune 500 fintech reduced inference costs 30% using specialized models with Agentic RAG.",
    tools: "NeMo Framework, Hugging Face, PyTorch, NIM Microservices, NVIDIA AI Blueprints" },
  { num: "04", key: "L3", name: "Framework Layer", sub: "AI/ML Libraries, Cloud-Native & Edge", color: "amber", icon: "build",
    detail: "The AI/ML libraries and tools for building, testing, and deploying models. Transitioning toward cloud-native and edge capabilities. At enterprise scale, this means GPU-accelerated data processing (RAPIDS), distributed training frameworks, and edge inference for latency-sensitive applications like real-time fraud scoring.",
    tools: "RAPIDS, cuDF, cuML, cuGraph, Spark RAPIDS Accelerator, PyTorch, XGBoost" },
  { num: "05", key: null, name: "Orchestration Layer", sub: "Agent Chaining, Context Management, Execution Control", color: "purple", icon: "hub",
    detail: "New in 2026. Manages model selection, context management, execution control, and chaining of multiple models and logic components for complex agentic workflows. This is where MCP, ACP, and A2A protocols converge. Orchestration frameworks like LangGraph (graph-based, stateful) and CrewAI (role-based) handle the actual agent lifecycles, states, and memory structures.",
    tools: "LangGraph, CrewAI, n8n, Redis (state management), NeMo Agent Toolkit", isNew: true },
  { num: "06", key: "L6", name: "Governance Layer", sub: "ModelOps, Compliance, Access Control, Retraining", color: "red", icon: "shield",
    detail: "Governance has transitioned from aspirational policy to hard operational requirement. Features hyper-precise access frameworks enforcing least privilege — defining exactly what data an AI agent may access and what actions it can execute. Includes centralized AI agent registries, workflow versioning, and continuous observability. EU AI Act enforcement in August 2026 makes this existential: penalties reach 7% of global turnover.",
    tools: "NeMo Guardrails, NVIDIA DCGM, Evidently AI, WhyLabs, Morpheus" },
  { num: "07", key: "L5", name: "Application Layer", sub: "Business Tools, Dashboards, Conversational UI", color: "ice", icon: "apps",
    detail: "The delivery mechanism — embedding AI into business tools, dashboards, conversational interfaces, and workflow automation. At Goldman, this is the GS AI Assistant serving 46K employees. At Visa, it's 100+ AI products including Advanced Authorization scoring 639M daily transactions. The application layer is where inference economics hit hardest: always-on agents generate continuous compute costs.",
    tools: "Dynamo-Triton, TensorRT, NIM, FastAPI, custom enterprise interfaces" },
];

export default function Architecture() {
  const { T } = useTheme();

  return (
    <div>
      <SectionHeader color={T.cyan}>Reference Architecture</SectionHeader>
      <PageTitle subtitle="Intelligent Operations Stack">The 7-Layer Enterprise</PageTitle>
      <Body>
        The 2026 reference architecture abandons fragmented, siloed deployments in favor of a
        multi-layered stack designed for hybrid, cloud-native operations. Seven distinct, highly
        integrated layers — from Active Intelligence at the foundation to Application delivery at the top.
      </Body>

      {/* Mini Visual Stack Overview */}
      <div style={{ margin: "28px 0 8px", border: `1px solid ${T.border}`, borderRadius: 10, overflow: "hidden" }}>
        {LAYERS.map((layer, i) => (
          <div key={i}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 14px",
              background: i % 2 === 0 ? T.surface : T.bg,
              borderLeft: `3px solid ${T[layer.color]}`,
            }}>
              <span style={{ fontFamily: mono, fontSize: 10, fontWeight: 700, color: `${T[layer.color]}70`, minWidth: 22 }}>{layer.num}</span>
              <Icon name={layer.icon} size={15} color={T[layer.color]} />
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: T[layer.color] }}>{layer.name}</span>
                {layer.isNew && <span style={{ fontFamily: mono, fontSize: 9, color: T.green, background: `${T.green}15`, border: `1px solid ${T.green}30`, padding: "1px 5px", borderRadius: 3, letterSpacing: "0.4px" }}>NEW 2026</span>}
                <span style={{ fontFamily: sans, fontSize: 11, color: T.textMuted }}>{layer.sub}</span>
              </div>
              <Icon name="chevron_right" size={14} color={`${T[layer.color]}50`} />
            </div>
            {i < LAYERS.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", padding: "0 18px", height: 16, background: T.bg }}>
                <div style={{ width: 1, height: "100%", background: T.borderMuted, marginLeft: 22 + 10 + 15 / 2 }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key Stats */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "32px 0" }}>
        <Stat value="$3.5B" label="Visa spent rebuilding its AI data platform" color={T.cyan} />
        <Stat value="46K+" label="Goldman employees on GS AI Platform" color={T.amber} />
        <Stat value="639M" label="Visa transactions scored per day" color={T.green} />
        <Stat value="100+" label="AI-powered products at Visa" color={T.purple} />
      </div>

      <Divider />
      <SectionHeader color={T.cyan}>The 7 Layers</SectionHeader>
      <Body>
        Every major financial institution's ML operation follows this pattern. The 2026 model adds
        Knowledge (Layer 02) and Orchestration (Layer 05) to reflect the shift from static model serving
        to autonomous, multi-step agentic workflows. Use the chevron arrows on each layer to cycle through GSI insight types.
      </Body>

      {/* Layer Cards */}
      {LAYERS.map((layer, i) => (
        <div key={i}>
          <div style={{
            background: `${T[layer.color]}04`, border: `1px solid ${T[layer.color]}18`,
            borderLeft: `3px solid ${T[layer.color]}`, borderRadius: 8,
            padding: "16px 18px", marginBottom: 6,
          }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ fontFamily: mono, fontSize: 20, fontWeight: 800, color: `${T[layer.color]}50`, minWidth: 32 }}>{layer.num}</span>
              <Icon name={layer.icon} size={18} color={T[layer.color]} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, color: T[layer.color] }}>{layer.name}</span>
                  {layer.isNew && (
                    <span style={{
                      fontFamily: mono, fontSize: 9, fontWeight: 700, color: T.green,
                      background: `${T.green}15`, border: `1px solid ${T.green}30`,
                      padding: "1px 6px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.5px",
                    }}>New 2026</span>
                  )}
                </div>
                <div style={{ fontFamily: sans, fontSize: 11, color: T.textMuted }}>{layer.sub}</div>
              </div>
            </div>
            {/* Detail */}
            <div style={{ fontFamily: sans, fontSize: 12.5, color: T.textSec, lineHeight: 1.7, marginBottom: 8 }}>
              {layer.detail}
            </div>
            {/* Tools */}
            <div style={{
              fontFamily: mono, fontSize: 10, color: T.textMuted,
              display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap",
            }}>
              <Icon name="build" size={12} color={T.textMuted} />
              {layer.tools}
            </div>
            {/* Insight Carousel (if layer has carousel data) */}
            {layer.key && LAYER_INSIGHTS[layer.key] && (
              <InsightCarousel insights={LAYER_INSIGHTS[layer.key]} />
            )}
          </div>
          {i < LAYERS.length - 1 && <FlowArrow />}
        </div>
      ))}

      <Callout color={T.cyan}>
        <strong style={{ color: T.cyan }}>Key insight:</strong> The framework is the same whether you're Visa scoring credit card transactions,
        Goldman pricing derivatives, or a telco routing emergency calls. The data domains change. The 7-layer pattern doesn't.
        That's why NVIDIA's GSI team can sell the same infrastructure stack across all of them.
      </Callout>

      <Divider />

      {/* Unified Control Plane Section */}
      <SectionHeader color={T.amber}>Unified Control Plane & Hybrid Compute</SectionHeader>
      <Body>
        The historical binary choice between public cloud and on-premises is no longer viable. Enterprises have
        adopted a workload-driven hybrid approach: a unified control plane permits agents to execute wherever they
        operate most efficiently based on policy, cost, and governance — not where data physically resides.
      </Body>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "16px 0 32px" }}>
        {[
          { label: "Training", where: "Public Cloud", why: "Elastic burst compute", icon: "cloud", color: T.cyan },
          { label: "Inference", where: "On-Premises", why: "Predictable, secure, low-latency", icon: "dns", color: T.green },
          { label: "Edge", where: "Edge Devices", why: "Real-time, latency-sensitive", icon: "router", color: T.amber },
        ].map((item, i) => (
          <div key={i} style={{
            flex: 1, minWidth: 180, background: T.surface, border: `1px solid ${T.border}`,
            borderTop: `3px solid ${item.color}`, borderRadius: 8, padding: 16, textAlign: "center",
          }}>
            <Icon name={item.icon} size={20} color={item.color} />
            <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: item.color, marginTop: 8 }}>{item.label}</div>
            <div style={{ fontFamily: sans, fontSize: 12, color: T.text, fontWeight: 500, marginTop: 4 }}>{item.where}</div>
            <div style={{ fontFamily: sans, fontSize: 11, color: T.textMuted, marginTop: 2 }}>{item.why}</div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
