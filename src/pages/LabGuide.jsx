import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Tag, Footer } from "../components/UI";
import Icon from "../components/Icon";

// ── Inline code ──────────────────────────────────────────────────────────────
function IC({ children }) {
  const { T } = useTheme();
  return (
    <code style={{
      fontFamily: mono, fontSize: 12, background: `${T.border}50`,
      border: `1px solid ${T.borderMuted}`, borderRadius: 4,
      padding: "1px 6px", color: T.ice,
    }}>{children}</code>
  );
}

// ── Copy-able code block ──────────────────────────────────────────────────────
function CodeBlock({ children, title }) {
  const { T } = useTheme();
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard?.writeText(children); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div style={{ background: T.code, border: `1px solid ${T.border}`, borderRadius: 8, marginBottom: 12, overflow: "hidden" }}>
      {title && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 12px", borderBottom: `1px solid ${T.borderMuted}`, background: `${T.border}30` }}>
          <span style={{ fontFamily: mono, fontSize: 10, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.5px" }}>{title}</span>
          <div onClick={copy} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            <Icon name={copied ? "check" : "content_copy"} size={12} color={copied ? "#3fb950" : T.textMuted} />
          </div>
        </div>
      )}
      <pre style={{ fontFamily: mono, fontSize: 12, color: T.ice, padding: "12px 14px", margin: 0, overflow: "auto", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{children}</pre>
    </div>
  );
}

// ── Section anchor wrapper ────────────────────────────────────────────────────
function Section({ id, children }) {
  return <div id={id} style={{ scrollMarginTop: 80 }}>{children}</div>;
}

// ── TOC link ─────────────────────────────────────────────────────────────────
function TocLink({ href, label, active, color }) {
  const { T } = useTheme();
  return (
    <a href={href} style={{
      fontFamily: mono, fontSize: 10, textDecoration: "none",
      color: active ? (color || T.cyan) : T.textMuted,
      borderBottom: active ? `2px solid ${color || T.cyan}` : "2px solid transparent",
      paddingBottom: 4, whiteSpace: "nowrap", transition: "color 0.15s",
    }}>{label}</a>
  );
}

// ── Concept card (Learner track) ──────────────────────────────────────────────
function ConceptCard({ icon, title, color, children }) {
  const { T } = useTheme();
  return (
    <div style={{ background: `${color}05`, border: `1px solid ${color}20`, borderLeft: `3px solid ${color}`, borderRadius: 8, padding: "14px 16px", marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <Icon name={icon} size={16} color={color} />
        <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, color }}>{title}</span>
      </div>
      <div style={{ fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

// ── FAQ item ─────────────────────────────────────────────────────────────────
function FAQ({ q, children, color }) {
  const { T } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: `1px solid ${T.border}`, borderRadius: 8, marginBottom: 8, overflow: "hidden" }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, padding: "14px 16px", cursor: "pointer", background: open ? `${color || T.cyan}06` : T.surface }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <Icon name="help_outline" size={15} color={color || T.cyan} style={{ marginTop: 1, flexShrink: 0 }} />
          <span style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: T.text, lineHeight: 1.4 }}>{q}</span>
        </div>
        <Icon name={open ? "expand_less" : "expand_more"} size={18} color={T.textMuted} style={{ flexShrink: 0 }} />
      </div>
      {open && (
        <div style={{ padding: "0 16px 14px 41px", fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 1.7 }}>
          {children}
        </div>
      )}
    </div>
  );
}

const TOC = [
  { href: "#problem",      label: "The Problem",     color: "#f85149" },
  { href: "#why-gnn",      label: "Why GNN?",        color: "#58a6ff" },
  { href: "#architecture", label: "Architecture",    color: "#d29922" },
  { href: "#walkthrough",  label: "Walkthrough",     color: "#3fb950" },
  { href: "#production",   label: "→ Production",    color: "#bc8cff" },
  { href: "#faq",          label: "Customer FAQ",    color: "#58a6ff" },
  { href: "#resources",    label: "Resources",       color: "#79c0ff" },
];

export default function LabGuide() {
  const { T } = useTheme();
  const [track, setTrack] = useState("learner");

  return (
    <div>
      {/* Back link */}
      <div style={{ marginBottom: 24 }}>
        <Link to="/lab" style={{ fontFamily: mono, fontSize: 11, color: T.textMuted, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
          <Icon name="arrow_back" size={13} color={T.textMuted} /> Back to Lab Overview
        </Link>
      </div>

      <SectionHeader color={T.green}>Deep Dive Guide</SectionHeader>
      <PageTitle subtitle="NVIDIA Financial Fraud Detection Blueprint">Fraud Detection — Builder & Learner Guide</PageTitle>
      <Body>
        A practitioner guide for engineers, architects, and solutions teams. Covers the business problem,
        architecture rationale, step-by-step walkthrough, production path, and the customer questions
        you will actually be asked at NGC and enterprise engagements.
      </Body>

      {/* Track toggle */}
      <div style={{ display: "flex", gap: 8, margin: "20px 0 28px", alignItems: "center" }}>
        <span style={{ fontFamily: mono, fontSize: 11, color: T.textMuted }}>Track:</span>
        {[
          { id: "learner", label: "Learner", icon: "school", color: T.cyan, desc: "Concepts & intuition" },
          { id: "builder", label: "Builder", icon: "code", color: T.green, desc: "Commands & code" },
        ].map(t => (
          <button key={t.id} onClick={() => setTrack(t.id)} style={{
            display: "flex", alignItems: "center", gap: 6, padding: "7px 14px",
            background: track === t.id ? `${t.color}12` : T.surface,
            border: `1.5px solid ${track === t.id ? t.color : T.border}`,
            borderRadius: 8, cursor: "pointer",
            fontFamily: mono, fontSize: 12, fontWeight: 600,
            color: track === t.id ? t.color : T.textMuted, transition: "all 0.15s",
          }}>
            <Icon name={t.icon} size={14} color={track === t.id ? t.color : T.textMuted} />
            {t.label}
            <span style={{ fontFamily: sans, fontSize: 10, color: T.textMuted, fontWeight: 400 }}>{t.desc}</span>
          </button>
        ))}
      </div>

      {/* Sticky TOC bar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        background: T.bg, borderBottom: `1px solid ${T.borderMuted}`,
        padding: "10px 0 0", marginBottom: 32,
        display: "flex", gap: 20, overflowX: "auto",
      }}>
        {TOC.map(t => <TocLink key={t.href} href={t.href} label={t.label} color={t.color} />)}
      </div>

      {/* ── Section 1: The Problem ── */}
      <Section id="problem">
        <SectionHeader color={T.red}>The Problem</SectionHeader>
        <Body>
          Credit card fraud is projected to cause <strong style={{ color: T.amber }}>$403 billion in losses over the next decade</strong>.
          Traditional fraud detection — rules-based systems and statistical models — was built for a simpler world.
          Fraudsters have adapted.
        </Body>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "20px 0 24px" }}>
          {[
            { label: "Rules-Based Systems", icon: "rule", color: T.red, items: ["Catch known patterns only", "Miss novel fraud tactics", "High false positive rate", "Expensive manual tuning", "No network awareness"] },
            { label: "GNN + XGBoost (This Blueprint)", icon: "hub", color: T.green, items: ["Detects novel fraud rings via graphs", "Transaction + network signals combined", "Shapley values for explainability", "Self-improving with new data", "Auto-configures Dynamo-Triton"] },
          ].map((col, i) => (
            <div key={i} style={{ background: T.surface, border: `1px solid ${i === 0 ? T.red + "30" : T.green + "30"}`, borderRadius: 8, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <Icon name={col.icon} size={16} color={col.color} />
                <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: col.color }}>{col.label}</span>
              </div>
              {col.items.map((item, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <Icon name={i === 0 ? "close" : "check_circle"} size={13} color={i === 0 ? T.red : T.green} />
                  <span style={{ fontFamily: sans, fontSize: 12, color: T.textSec }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Callout color={T.amber}>
          <strong style={{ color: T.amber }}>Key insight for customer conversations:</strong> This isn't replacing your rules engine — it's adding a layer that sees what rules can't. Fraud rings look completely normal at the individual transaction level. Only graph analysis reveals the network.
        </Callout>
      </Section>

      <Divider />

      {/* ── Section 2: Why GNN + XGBoost ── */}
      <Section id="why-gnn">
        <SectionHeader color={T.cyan}>Why GNN + XGBoost?</SectionHeader>
        <Body>Two models, two different lenses on the same fraud problem. Neither is sufficient alone.</Body>

        {track === "learner" ? (
          <div>
            <ConceptCard icon="account_tree" title="XGBoost — The Transaction Detective" color={T.amber}>
              XGBoost looks at each transaction in isolation and asks: does this transaction look suspicious?
              It evaluates features like amount, merchant category, time of day, spending velocity, and geographic distance from home.
              Think of it as a detective examining one person's behavior — excellent at catching outliers,
              but blind to coordinated group activity.
            </ConceptCard>

            <ConceptCard icon="hub" title="Graph Neural Network — The Network Investigator" color={T.cyan}>
              A GNN builds a graph where nodes are accounts, merchants, and devices — and edges are transactions.
              It then learns patterns in the <em>structure</em> of that graph. A fraud ring of 50 accounts
              each making normal-looking transactions will have a very distinctive graph signature.
              No individual transaction looks wrong; the network pattern is what exposes them.
            </ConceptCard>

            <ConceptCard icon="merge" title="The Ensemble — Better Together" color={T.green}>
              The training container combines both scores. XGBoost contributes transaction-level signals;
              the GNN contributes network-level signals. The ensemble weight is configurable
              (default: 40% GNN, 60% XGBoost) and results in approximately
              40% better detection accuracy than either model alone.
            </ConceptCard>

            <ConceptCard icon="bar_chart" title="Shapley Values — Explaining Every Decision" color={T.purple}>
              Every fraud score is accompanied by Shapley values — a game-theoretic method that assigns
              a contribution score to each feature. A regulator asks: "Why was transaction TXN-00042 flagged?"
              Shapley values answer: "graph_centrality +0.31, velocity_1hr +0.28, geo_distance +0.19."
              This directly satisfies SR 11-7, EU AI Act Article 13, and GDPR Article 22.
            </ConceptCard>
          </div>
        ) : (
          <div>
            <div style={{ fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 1.7, marginBottom: 16 }}>
              Both models are trained inside the <IC>financial-fraud-training</IC> container.
              XGBoost handles tabular transaction features; the GNN processes the transaction graph.
              The container auto-selects the fastest available processing framework and outputs
              a NIM artifact folder consumed directly by Dynamo-Triton.
            </div>
            <CodeBlock title="config — ensemble weights (configs/training_config.yaml)">{`# Adjust ensemble balance for your fraud profile
gnn_layers: 3
xgboost_estimators: 500

# Ensemble weighting (must sum to 1.0)
ensemble_weight_gnn: 0.4    # graph/network fraud rings
ensemble_weight_xgb: 0.6    # transaction-level anomalies

# Shapley output
shapley_enabled: true
shapley_top_features: 10`}</CodeBlock>
            <Callout color={T.amber}>
              If your fraud profile is heavily card-not-present (individual transactions), increase XGBoost weight.
              If you see organized fraud rings (synthetic identity, bust-out fraud), increase GNN weight.
            </Callout>
          </div>
        )}
      </Section>

      <Divider />

      {/* ── Section 3: Architecture ── */}
      <Section id="architecture">
        <SectionHeader color={T.amber}>Architecture</SectionHeader>
        <Body>
          Three phases that map directly to a production payment processing pipeline.
          Fully containerized, fully local — no NVIDIA hosted services required.
        </Body>

        {[
          { num: "01", phase: "Data Preparation", color: T.cyan, icon: "storage",
            tech: "NVIDIA RAPIDS (cuDF, cuGraph)",
            input: "Financial payment data (raw transactions)",
            output: "prepared_train.parquet + prepared_inference.parquet",
            why: track === "learner"
              ? "RAPIDS replaces pandas and scikit-learn with GPU-accelerated equivalents. Operations that take minutes on CPU (feature engineering, graph construction, data joins) complete in seconds. This phase outputs two datasets — one for training, one for inference — matching the split in the official architecture diagram."
              : "cuDF for dataframe operations, cuGraph for graph construction. RAPIDS is a drop-in GPU replacement for pandas/sklearn. The container handles graph edge construction automatically from transaction data.",
          },
          { num: "02", phase: "Model Building", color: T.amber, icon: "model_training",
            tech: "Financial Fraud Training Container",
            input: "prepared_train.parquet + configuration options",
            output: "Trained model artifacts + auto-generated Dynamo-Triton config",
            why: track === "learner"
              ? "The training container abstracts away all GNN and XGBoost complexity. You provide configuration options (layer counts, hyperparameters, ensemble weights) and it handles training, validation, and — critically — auto-generates all the Dynamo-Triton configuration files needed for Phase 3. No manual server config."
              : "Container pulled from nvcr.io. Run via the Jupyter notebook. Auto-generates the NIM folder with model artifacts and triton_config.pbtxt. Configuration via configs/training_config.yaml.",
          },
          { num: "03", phase: "Inference", color: T.green, icon: "sync_alt",
            tech: "NVIDIA Dynamo-Triton",
            input: "prepared_inference.parquet + trained model artifacts",
            output: "fraud_score [0–1] + Shapley values per transaction",
            why: track === "learner"
              ? "Dynamo-Triton (formerly Triton Inference Server) is NVIDIA's production inference engine. It disaggregates the prefill and decode phases for up to 30x LLM throughput, handles concurrent inference requests, and produces two outputs per transaction: a fraud probability score and Shapley feature attributions."
              : "Dynamo-Triton starts automatically using the generated config. Exposes a gRPC/HTTP API. In production, this is where your payment processing pipeline makes real-time calls. Ports 8002 (HTTP), 8005 (metrics), 8006 (gRPC) are the exposed inference endpoints.",
          },
        ].map((phase, i) => (
          <div key={i} style={{ background: T.surface, border: `1px solid ${phase.color}25`, borderLeft: `3px solid ${phase.color}`, borderRadius: 8, padding: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ fontFamily: mono, fontSize: 11, color: `${phase.color}60`, minWidth: 20 }}>{phase.num}</span>
              <Icon name={phase.icon} size={16} color={phase.color} />
              <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, color: phase.color }}>{phase.phase}</span>
              <Tag color={phase.color}>{phase.tech}</Tag>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
              <div style={{ background: `${T.border}30`, borderRadius: 6, padding: "8px 10px" }}>
                <div style={{ fontFamily: mono, fontSize: 9, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 3 }}>Input</div>
                <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec }}>{phase.input}</div>
              </div>
              <div style={{ background: `${phase.color}08`, borderRadius: 6, padding: "8px 10px" }}>
                <div style={{ fontFamily: mono, fontSize: 9, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 3 }}>Output</div>
                <div style={{ fontFamily: sans, fontSize: 11.5, color: T.textSec }}>{phase.output}</div>
              </div>
            </div>
            <div style={{ fontFamily: sans, fontSize: 12.5, color: T.textSec, lineHeight: 1.7 }}>{phase.why}</div>
          </div>
        ))}
      </Section>

      <Divider />

      {/* ── Section 4: Walkthrough ── */}
      <Section id="walkthrough">
        <SectionHeader color={T.green}>
          {track === "learner" ? "Walkthrough — Learner Track" : "Walkthrough — Builder Track"}
        </SectionHeader>

        {track === "learner" ? (
          <div>
            <Body>What actually happens at each step — without the terminal commands.</Body>
            {[
              { step: "1", title: "Spin up a GPU Instance", icon: "cloud", color: T.cyan,
                content: "You need a cloud GPU with at least 32 GB VRAM. CRUSOE (creator's choice, $1.74/hr) or Brev ($25 free credit) both work. The L40S 48 GB is ideal — enough memory for the GNN graph construction, priced for experimentation." },
              { step: "2", title: "Get an NVIDIA API Key", icon: "key", color: T.amber,
                content: "This key authenticates your Docker pulls from nvcr.io — NVIDIA's container registry. Without it, you can't pull the financial-fraud-training container or Dynamo-Triton. Takes 2 minutes at build.nvidia.com." },
              { step: "3", title: "Clone and Configure", icon: "download", color: T.green,
                content: "The repo contains the Jupyter notebooks, configuration files, and synthetic dataset. Configuration options let you tune GNN depth, XGBoost estimators, and ensemble weights before training." },
              { step: "4", title: "RAPIDS Prepares the Data", icon: "storage", color: T.cyan,
                content: "The first notebook runs RAPIDS to build features from raw transactions. It creates a transaction graph (accounts as nodes, transactions as edges) and computes velocity features, geographic signals, and temporal patterns — all on GPU in seconds." },
              { step: "5", title: "Training Container Builds the Models", icon: "model_training", color: T.amber,
                content: "The second notebook pulls the training container from nvcr.io and runs it with your config. It trains the GNN and XGBoost models, evaluates them on the test set, combines them into an ensemble, and auto-generates the Dynamo-Triton configuration. No manual server setup." },
              { step: "6", title: "Dynamo-Triton Serves Inference", icon: "sync_alt", color: T.green,
                content: "The third notebook starts Dynamo-Triton using the auto-generated config. You send transaction data through it and receive fraud scores (0–1 probability) plus Shapley values explaining each score. This is what a production payment processor would call in real-time." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: `${item.color}12`, border: `2px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={item.icon} size={16} color={item.color} />
                  </div>
                  {i < 5 && <div style={{ width: 1, flex: 1, background: T.borderMuted, margin: "4px 0" }} />}
                </div>
                <div style={{ flex: 1, paddingTop: 4, paddingBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontFamily: mono, fontSize: 9, color: T.textMuted }}>STEP {item.step}</span>
                    <span style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, color: T.text }}>{item.title}</span>
                  </div>
                  <div style={{ fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 1.7 }}>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <Body>Full command sequence. Run in order after SSH-ing into your GPU instance.</Body>

            {[
              { title: "1 — Environment Setup", color: T.cyan, code:
`# Set your NVIDIA API key
export NVIDIA_API_KEY=your_key_here

# Persist across sessions
echo "export NVIDIA_API_KEY=your_key_here" >> ~/.bashrc

# Authenticate Docker with NGC
echo "$NVIDIA_API_KEY" | docker login nvcr.io -u '$oauthtoken' --password-stdin
# → Login Succeeded` },
              { title: "2 — Clone & Setup Conda Environment", color: T.green, code:
`git clone https://github.com/NVIDIA-AI-Blueprints/financial-fraud-detection.git
cd financial-fraud-detection

# Create conda environment (requires Miniforge/Mamba)
mamba env create -f conda/notebook_env.yaml
conda activate notebook_env` },
              { title: "3 — Launch Jupyter", color: T.amber, code:
`# Option A: Basic notebook
jupyter notebook

# Option B: Open directly to the blueprint notebook
cd notebook
jupyter notebook financial-fraud-usage.ipynb

# Option C: JupyterLab (recommended for cloud instances)
jupyter-lab --ip=* --no-browser
# → Open the URL shown in terminal output` },
              { title: "4 — Run the Notebook (financial-fraud-usage.ipynb)", color: T.purple, code:
`# Inside Jupyter, run all cells in order:
# Cell group 1: Data Preparation (RAPIDS)
#   - Loads synthetic transaction data
#   - Builds transaction graph
#   - Computes features (velocity, geo, temporal)
#   - Outputs: prepared_train.parquet, prepared_inference.parquet

# Cell group 2: Model Building (Training Container)
#   - Pulls nvcr.io/nvidia/financial-fraud-detection-training:latest
#   - Trains GNN + XGBoost with your config
#   - Outputs: models/ + auto-generated triton_config

# Cell group 3: Inference (Dynamo-Triton)
#   - Starts Dynamo-Triton on ports 8002/8005/8006
#   - Scores prepared_inference.parquet
#   - Outputs: fraud_score + shapley_values per transaction` },
              { title: "5 — Verify Output", color: T.green, code:
`# Expected output per transaction:
# {
#   "transaction_id": "TXN_00042",
#   "fraud_score": 0.94,
#   "shapley_values": {
#     "graph_centrality":    0.31,
#     "velocity_1hr":        0.28,
#     "geographic_distance": 0.19,
#     "merchant_category":   0.11,
#     "amount_zscore":       0.05
#   }
# }

# Evaluation metrics (on test set):
# Accuracy, Precision, Recall, F1, AUC-ROC
# + Confusion matrix visualization` },
              { title: "6 — Clean Up", color: T.textMuted, code:
`# Stop Dynamo-Triton (notebook cell or Ctrl+C)

# Stop Brev instance to end billing
brev stop <your-instance-name>

# Total cost: ~$3 for 2-hour session on L40S` },
            ].map((block, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: block.color, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                  <Icon name="terminal" size={14} color={block.color} /> {block.title}
                </div>
                <CodeBlock>{block.code}</CodeBlock>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Divider />

      {/* ── Section 5: Going to Production ── */}
      <Section id="production">
        <SectionHeader color={T.purple}>Going to Production</SectionHeader>
        <Body>
          The lab runs on synthetic data with a single GPU. Production means real transaction data,
          sub-100ms latency SLAs, regulatory audit trails, and multi-GPU scale.
          Here's what changes.
        </Body>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
          {[
            { title: "Data", icon: "database", color: T.cyan, lab: "Synthetic CSV/Parquet files", prod: "Live data lake — Delta Lake, Snowflake, Kafka stream. RAPIDS reads from S3, HDFS, Databricks, standard lakehouses." },
            { title: "Scale", icon: "dns", color: T.amber, lab: "1× A100/H100 (single GPU)", prod: "DGX cluster or multi-GPU Kubernetes. Dynamo-Triton scales horizontally. Target: sub-50ms p99 latency." },
            { title: "Monitoring", icon: "monitor_heart", color: T.green, lab: "One-time notebook evaluation", prod: "Continuous feature drift (PSI > 0.2 triggers alert), prediction drift, precision/recall decay. MLflow + Evidently AI." },
            { title: "Compliance", icon: "shield", color: T.red, lab: "Shapley output to console", prod: "Shapley values logged per decision to immutable audit trail. Satisfies SR 11-7, EU AI Act Article 13, GDPR Article 22." },
            { title: "Integration", icon: "account_tree", color: T.purple, lab: "Standalone notebook pipeline", prod: "Dynamo-Triton gRPC/HTTP API called by payment processor in real-time. Ports 8002 (HTTP), 8006 (gRPC)." },
            { title: "Retraining", icon: "refresh", color: T.ice, lab: "One-time training run", prod: "Scheduled retraining pipeline as fraud patterns evolve. Shadow deployment → canary rollout → champion swap." },
          ].map((item, i) => (
            <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <Icon name={item.icon} size={15} color={item.color} />
                <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: item.color }}>{item.title}</span>
              </div>
              <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                <div style={{ flex: 1, background: `${T.border}30`, borderRadius: 5, padding: "6px 8px" }}>
                  <div style={{ fontFamily: mono, fontSize: 9, color: T.textMuted, marginBottom: 3, textTransform: "uppercase" }}>Lab</div>
                  <div style={{ fontFamily: sans, fontSize: 11, color: T.textSec }}>{item.lab}</div>
                </div>
                <div style={{ flex: 1, background: `${item.color}08`, borderRadius: 5, padding: "6px 8px" }}>
                  <div style={{ fontFamily: mono, fontSize: 9, color: item.color, marginBottom: 3, textTransform: "uppercase" }}>Production</div>
                  <div style={{ fontFamily: sans, fontSize: 11, color: T.textSec }}>{item.prod}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ── Section 6: Customer FAQ ── */}
      <Section id="faq">
        <SectionHeader color={T.cyan}>Customer FAQ</SectionHeader>
        <Body>
          The questions you will actually be asked at NGC, partner briefings, and enterprise engagements.
          Answers calibrated for a solutions architect conversation.
        </Body>

        <div style={{ marginTop: 16 }}>
          {[
            { q: "How long does it take to deploy in production?", color: T.cyan,
              a: <>Lab environment: ~30 minutes. Pilot with your own data: 2–4 weeks (data pipeline setup + validation). Full production with compliance sign-off: 2–3 months. The blueprint gives you the reference architecture — your timeline is driven by data integration and change management, not the ML itself.</> },
            { q: "What hardware do we need?", color: T.amber,
              a: <>Minimum: 1× A6000, A100, or H100 with 32 GB VRAM. In production, a DGX H100 system handles thousands of transactions/second. For cloud: CRUSOE or AWS P4d instances. The GNN graph construction is the memory-intensive step — 32 GB is the floor, not the recommendation.</> },
            { q: "Can we use our own transaction data?", color: T.green,
              a: <>Yes. The pipeline is data-agnostic. Replace the synthetic Parquet files with your data source. RAPIDS reads from S3, HDFS, Delta Lake, Snowflake, and standard lakehouses. The notebook handles graph construction automatically from your transaction records — no schema changes required to the pipeline.</> },
            { q: "How do we explain fraud decisions to regulators?", color: T.purple,
              a: <>Dynamo-Triton outputs Shapley values for every scored transaction. Shapley is a game-theoretic attribution method — it tells you exactly which features (and by how much) drove each fraud score. This directly satisfies OCC SR 11-7 model explainability requirements, EU AI Act Article 13 transparency obligations, and GDPR Article 22 automated decision rights. Every decision is auditable.</> },
            { q: "How does this compare to our existing rules-based system?", color: T.red,
              a: <>Complementary, not a replacement. Your rules engine catches known fraud patterns instantly and cheaply — keep it. This blueprint adds a second layer that catches what rules can't: novel fraud rings, synthetic identity networks, and evolving tactics. The typical outcome is a 30–40% improvement in total fraud detection rate with reduced false positives. Run both in parallel initially.</> },
            { q: "Is this production-ready or just a demo?", color: T.amber,
              a: <>It's a production-proven reference architecture packaged as a blueprint. Visa runs a conceptually identical GNN + gradient boosting ensemble at 639M transactions/day. Goldman Sachs built their own version as part of the GS AI Platform. The blueprint gives you the reference implementation — you customize it to your data and compliance requirements. The training container and Dynamo-Triton are both production NVIDIA software.</> },
            { q: "What does it cost to run in production vs. the lab?", color: T.green,
              a: <>Lab: ~$3 for 2 hours on CRUSOE L40S. Pilot (one department): ~$2–5K/month. Production (real-time scoring): depends on transaction volume and hardware strategy. On-premises DGX has predictable cost; cloud inference scales with volume. The inference economics page on this site covers the cost escalation curve and mitigation strategies (TensorRT, Dynamo disaggregation, specialized models).</> },
            { q: "Does it work with our existing data warehouse?", color: T.cyan,
              a: <>RAPIDS (cuDF) reads Parquet, CSV, ORC, Avro, Delta Lake, and connects to S3/HDFS. If you use Snowflake, Databricks, or BigQuery, you export to Parquet for the training pipeline. In production streaming, you can connect Kafka directly to the feature engineering step. The blueprint is intentionally data-layer agnostic.</> },
            { q: "What's the model accuracy?", color: T.purple,
              a: <>On synthetic data the blueprint ships with: high precision/recall numbers are reported in the notebook output with a full confusion matrix and AUC-ROC curve. On real data, accuracy depends heavily on data quality, class imbalance, and fraud rate. The GNN + XGBoost ensemble consistently outperforms single-model approaches by ~40% in controlled comparisons. Shapley values let you audit and explain every prediction — critical for model risk validation.</> },
          ].map((item, i) => (
            <FAQ key={i} q={item.q} color={item.color}>{item.a}</FAQ>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ── Section 7: Resources ── */}
      <Section id="resources">
        <SectionHeader color={T.ice}>Resources</SectionHeader>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
          {[
            { title: "GitHub Repository", desc: "NVIDIA-AI-Blueprints/financial-fraud-detection", icon: "code", color: T.cyan, url: "https://github.com/NVIDIA-AI-Blueprints/financial-fraud-detection" },
            { title: "NVIDIA Build Portal", desc: "build.nvidia.com/nvidia/financial-fraud-detection", icon: "open_in_new", color: T.green, url: "https://build.nvidia.com/nvidia/financial-fraud-detection" },
            { title: "CRUSOE Cloud (Creator's Choice)", desc: "L40S 48 GB · $1.74/hr · Pre-configured container", icon: "cloud", color: T.amber, url: "https://brev.nvidia.com" },
            { title: "NVIDIA NGC API Key", desc: "build.nvidia.com → account → Generate Personal Key", icon: "key", color: T.purple, url: "https://build.nvidia.com" },
          ].map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: 14, display: "flex", gap: 10, alignItems: "flex-start", transition: "border-color 0.15s" }}>
                <Icon name={r.icon} size={18} color={r.color} />
                <div>
                  <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: r.color, marginBottom: 3 }}>{r.title}</div>
                  <div style={{ fontFamily: sans, fontSize: 11, color: T.textMuted }}>{r.desc}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <Callout color={T.green}>
          <strong style={{ color: T.green }}>Built for NGC 2026.</strong> This guide covers the official NVIDIA Financial Fraud Detection Blueprint
          end-to-end — architecture rationale, hands-on walkthrough, production path, and the customer questions that come up in
          every enterprise financial services engagement. Source:{" "}
          <a href="https://github.com/NVIDIA-AI-Blueprints/financial-fraud-detection" target="_blank" rel="noreferrer" style={{ color: T.green }}>
            NVIDIA-AI-Blueprints/financial-fraud-detection
          </a>
        </Callout>
      </Section>

      <Footer />
    </div>
  );
}
