import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Tag, Footer } from "../components/UI";
import Icon from "../components/Icon";

export default function Inference() {
  const { T } = useTheme();

  return (
    <div>
      <SectionHeader color={T.red}>OPEX Crisis</SectionHeader>
      <PageTitle subtitle="and the OPEX Crisis">Inference Economics</PageTitle>
      <Body>
        While public discourse focuses on massive CAPEX for training foundation models, the actual economic
        reality for enterprises is dictated almost entirely by OPEX — the ongoing costs of inference. As organizations
        deploy always-on agentic workflows 24/7, inference consumes approximately two-thirds of all AI compute globally.
      </Body>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "24px 0 32px" }}>
        <Stat value="~67%" label="of all AI compute goes to inference" color={T.red} />
        <Stat value="50x" label="cost escalation from sandbox to production" color={T.amber} />
        <Stat value="30%" label="cost reduction with specialized models + Agentic RAG" color={T.green} />
        <Stat value="2-4x" label="speedup from TensorRT optimization" color={T.cyan} />
      </div>

      <Divider />

      {/* The Problem */}
      <SectionHeader color={T.red}>The Unprecedented Scale</SectionHeader>
      <Body>
        The continuous barrage of API calls, agent-to-agent polling, and high-volume token processing places immense
        strain on cloud infrastructure. A tool costing $200/month in sandbox swells to $10,000+ in production.
        At enterprise scale, monthly compute bills escalate into the tens of millions — a board-level financial concern.
      </Body>

      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
        <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: T.text, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <Icon name="trending_up" size={16} color={T.red} /> Cost Escalation Path
        </div>
        {[
          { stage: "Sandbox / POC", cost: "$200/mo", desc: "Single user, limited queries, development testing", color: T.green },
          { stage: "Pilot (100 users)", cost: "$2-5K/mo", desc: "Department deployment, moderate query volume", color: T.amber },
          { stage: "Production (agents)", cost: "$10K+/mo", desc: "Recursive tool calls, agent-to-agent polling, 24/7 uptime", color: T.red },
          { stage: "Enterprise scale", cost: "$10M+/mo", desc: "Thousands of agents, millions of daily inference calls across business units", color: T.red },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 16, alignItems: "center", padding: "10px 0", borderBottom: i < 3 ? `1px solid ${T.borderMuted}` : "none" }}>
            <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 800, color: item.color, minWidth: 90, textAlign: "right" }}>{item.cost}</div>
            <div style={{ width: 3, height: 32, background: item.color, borderRadius: 2, flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: T.text }}>{item.stage}</div>
              <div style={{ fontFamily: sans, fontSize: 11, color: T.textMuted }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* Strategic Mitigation */}
      <SectionHeader color={T.green}>Cost Mitigation Strategies</SectionHeader>

      {[
        { title: "Smaller Proprietary Models", icon: "compress", color: T.green,
          detail: "Shift from massive general-purpose LLMs to vertically-tuned, domain-specific models. General-purpose models hit a functional ceiling in specialized environments — over-parameterized for the task, lacking sector-specific precision. Smaller models achieve higher task-level accuracy at a fraction of the compute.",
          stat: "Fortune 500 fintech: 30% inference cost reduction with specialized models + Agentic RAG" },
        { title: "Specialized Inference Platforms", icon: "dns", color: T.cyan,
          detail: "Migrate from generalized cloud compute to platforms with auto-scaling, minimized cold starts, and LLM-specific optimizations (KV cache management, speculative decoding). DeepSeek, Cerebras, SiliconFlow, and Lambda Labs challenge traditional hyperscalers in pure-inference.",
          stat: "Auto-scaling eliminates costly over-provisioning; KV cache reduces compute per token" },
        { title: "Hardware Optimization", icon: "memory", color: T.purple,
          detail: "TensorRT compiles models to INT8/FP16 for 2-4x speedup with no accuracy loss. NVIDIA Dynamo disaggregates prefill and decode phases for 30x LLM throughput. NIM containers wrap any model in optimized inference APIs.",
          stat: "Dynamo: 30x throughput for LLM inference via disaggregated prefill/decode" },
        { title: "Dynamic Workload Routing", icon: "alt_route", color: T.amber,
          detail: "Route workloads across providers based on real-time cost-benefit analysis. Different models and platforms for different tasks — latency-critical vs. batch, simple classification vs. complex reasoning.",
          stat: "Hybrid on-prem/cloud: training in cloud, predictable inference on-prem DGX" },
      ].map((item, i) => (
        <div key={i} style={{
          background: `${item.color}04`, border: `1px solid ${item.color}18`, borderLeft: `3px solid ${item.color}`,
          borderRadius: 8, padding: "16px 18px", marginBottom: 12,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Icon name={item.icon} size={16} color={item.color} />
            <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 600, color: item.color }}>{item.title}</span>
          </div>
          <div style={{ fontFamily: sans, fontSize: 12.5, color: T.textSec, lineHeight: 1.7, marginBottom: 8 }}>{item.detail}</div>
          {item.stat && (
            <div style={{
              fontFamily: mono, fontSize: 10, fontWeight: 700, color: item.color,
              background: `${item.color}10`, border: `1px solid ${item.color}25`,
              padding: "3px 8px", borderRadius: 4, display: "inline-flex", alignItems: "center", gap: 4,
            }}><Icon name="bar_chart" size={12} color={item.color} /> {item.stat}</div>
          )}
        </div>
      ))}

      <Callout color={T.cyan}>
        <strong style={{ color: T.cyan }}>Where NVIDIA wins:</strong> Layers 5 and 7 of the architecture are entirely about inference optimization.
        Dynamo-Triton, TensorRT, and NIM microservices directly solve the OPEX crisis. When inference consumes 2/3 of compute
        and costs escalate 50x from sandbox to production, optimization tooling isn't a nice-to-have — it's the #1 purchasing decision.
      </Callout>

      <Footer />
    </div>
  );
}
