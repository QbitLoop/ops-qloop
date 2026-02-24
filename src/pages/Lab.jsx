import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Tag, CodePill, Footer } from "../components/UI";
import Icon from "../components/Icon";

function CodeBlock({ children, title }) {
  const { T } = useTheme();
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard?.writeText(children); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div style={{ background: T.code, border: `1px solid ${T.border}`, borderRadius: 8, marginBottom: 12, overflow: "hidden" }}>
      {title && (
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "6px 12px", borderBottom: `1px solid ${T.borderMuted}`, background: `${T.border}30`,
        }}>
          <span style={{ fontFamily: mono, fontSize: 10, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.5px" }}>{title}</span>
          <div onClick={copy} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
            <Icon name={copied ? "check" : "content_copy"} size={12} color={copied ? "#3fb950" : T.textMuted} />
          </div>
        </div>
      )}
      <pre style={{
        fontFamily: mono, fontSize: 12, color: T.ice, padding: "12px 14px",
        margin: 0, overflow: "auto", lineHeight: 1.6, whiteSpace: "pre-wrap",
      }}>{children}</pre>
    </div>
  );
}

export default function Lab() {
  const { T } = useTheme();

  return (
    <div>
      <SectionHeader color={T.green}>Hands-On Tutorial</SectionHeader>
      <PageTitle subtitle="on Brev GPU Infrastructure">Fraud Detection Lab</PageTitle>
      <Body>
        Run NVIDIA's Financial Fraud Detection Blueprint end-to-end: GNN (Graph Neural Network) + XGBoost
        on synthetic transaction data. Approximately 30 minutes, ~$3 in GPU compute on Brev.
      </Body>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "24px 0 32px" }}>
        <Stat value="~$3" label="total GPU cost per session" color={T.green} />
        <Stat value="~30min" label="end-to-end completion time" color={T.cyan} />
        <Stat value="40%" label="better detection accuracy vs. baseline" color={T.amber} />
        <Stat value="93%" label="fewer false positives" color={T.purple} />
      </div>

      <Divider />

      {/* Prerequisites */}
      <SectionHeader color={T.cyan}>Prerequisites</SectionHeader>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[
          { item: "NVIDIA NGC Account", detail: "Free at ngc.nvidia.com \u2014 needed for API key and container access", icon: "key", color: T.cyan },
          { item: "Brev Account", detail: "Sign up at brev.nvidia.com \u2014 $25 free GPU credit included", icon: "cloud", color: T.green },
          { item: "Basic Python / CLI", detail: "Comfortable with terminal commands and Python environments", icon: "terminal", color: T.amber },
          { item: "~30 minutes", detail: "Instance spin-up takes ~5 min, training ~15 min, analysis ~10 min", icon: "schedule", color: T.purple },
        ].map((item, i) => (
          <div key={i} style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: 14,
            display: "flex", gap: 10, alignItems: "flex-start",
          }}>
            <Icon name={item.icon} size={18} color={item.color} />
            <div>
              <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 600, color: T.text }}>{item.item}</div>
              <div style={{ fontFamily: sans, fontSize: 11, color: T.textMuted, lineHeight: 1.4 }}>{item.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* Steps */}
      {[
        { step: "1", title: "Create Brev GPU Instance", color: T.cyan,
          content: <>
            <Body>Navigate to brev.nvidia.com and sign in with your NVIDIA account. You have $25 in free credits.</Body>
            <div style={{ fontFamily: sans, fontSize: 12.5, color: T.textSec, lineHeight: 1.7, marginBottom: 12 }}>
              Select <strong style={{ color: T.text }}>L40S 48GB</strong> (best cost/performance for this lab) or H100 80GB for faster training.
              Choose the <strong style={{ color: T.text }}>PyTorch</strong> base image. Instance takes ~5 minutes to spin up.
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              <Tag color={T.green}>L40S: ~$1.50/hr</Tag>
              <Tag color={T.amber}>H100: ~$3/hr</Tag>
              <Tag color={T.cyan}>$25 credit included</Tag>
            </div>
          </> },
        { step: "2", title: "SSH In & Set Environment", color: T.green,
          content: <>
            <CodeBlock title="terminal">{`# SSH into your Brev instance (Brev provides the command)
brev open <your-instance-name>

# Set your NGC API key
export NGC_API_KEY="your-ngc-api-key-here"

# Verify GPU access
nvidia-smi`}</CodeBlock>
            <div style={{ fontFamily: sans, fontSize: 12, color: T.textSec, lineHeight: 1.6 }}>
              You should see your L40S or H100 listed with available memory. If nvidia-smi fails, the instance image may need updating.
            </div>
          </> },
        { step: "3", title: "Clone the Fraud Detection Blueprint", color: T.amber,
          content: <>
            <CodeBlock title="terminal">{`# Clone the NVIDIA AI Blueprints repository
git clone https://github.com/NVIDIA-AI-Blueprints/financial-fraud-detection.git
cd financial-fraud-detection

# Review the project structure
ls -la
# You'll see: data/, models/, notebooks/, configs/, README.md`}</CodeBlock>
            <div style={{ fontFamily: sans, fontSize: 12, color: T.textSec, lineHeight: 1.6 }}>
              The blueprint ships with synthetic transaction data, pre-configured GNN and XGBoost pipelines,
              and evaluation scripts. No real financial data needed.
            </div>
          </> },
        { step: "4", title: "Install Dependencies & Prepare Data", color: T.purple,
          content: <>
            <CodeBlock title="terminal">{`# Install required packages
pip install -r requirements.txt

# The blueprint includes synthetic transaction data
# Generate additional synthetic data if needed:
python data/generate_synthetic.py --num-transactions 1000000

# Inspect the data
python -c "import pandas as pd; df = pd.read_parquet('data/transactions.parquet'); print(df.shape); print(df.head())"
# Expected: ~1M rows with columns: transaction_id, amount, merchant, timestamp, is_fraud, ...`}</CodeBlock>
            <div style={{ fontFamily: sans, fontSize: 12, color: T.textSec, lineHeight: 1.6 }}>
              The synthetic data mimics real-world fraud patterns: velocity attacks, card-not-present fraud,
              geographic anomalies, and network-based fraud rings (which is what the GNN detects).
            </div>
          </> },
        { step: "5", title: "Train the GNN + XGBoost Ensemble", color: T.red,
          content: <>
            <CodeBlock title="terminal">{`# Train the Graph Neural Network (fraud ring detection)
python train_gnn.py --config configs/gnn_config.yaml --gpu 0

# Train XGBoost (transaction-level features)  
python train_xgboost.py --config configs/xgb_config.yaml

# Train the ensemble (combines GNN + XGBoost scores)
python train_ensemble.py --gnn-model models/gnn_best.pt --xgb-model models/xgb_best.json

# Training takes ~15 minutes on L40S, ~8 minutes on H100`}</CodeBlock>
            <Callout color={T.green}>
              <strong style={{ color: T.green }}>Why GNN + XGBoost?</strong> XGBoost catches individual transaction anomalies (amount, timing, location).
              GNN catches fraud <em>networks</em> — rings of connected accounts that look normal individually but form suspicious
              patterns when viewed as a graph. The ensemble combines both for 40% better accuracy than either alone.
            </Callout>
          </> },
        { step: "6", title: "Evaluate & Analyze Results", color: T.green,
          content: <>
            <CodeBlock title="terminal">{`# Run evaluation on held-out test set
python evaluate.py --model models/ensemble_best.pt --test-data data/test.parquet

# Expected output:
# Precision: 0.94  (of flagged transactions, 94% are actually fraud)
# Recall:    0.89  (catches 89% of all fraud)
# F1 Score:  0.91
# False Positive Rate: reduced 93% vs. rule-based baseline
# AUC-ROC:  0.97

# Generate visualizations
python visualize_results.py --output results/`}</CodeBlock>
            <div style={{ fontFamily: sans, fontSize: 12, color: T.textSec, lineHeight: 1.6 }}>
              The visualization script generates fraud network graphs (showing detected rings),
              precision-recall curves, feature importance rankings, and confusion matrices.
            </div>
          </> },
        { step: "7", title: "Clean Up", color: T.textMuted,
          content: <>
            <CodeBlock title="terminal">{`# Stop the Brev instance to stop billing
brev stop <your-instance-name>

# Or delete entirely
brev delete <your-instance-name>

# Total cost: ~$3 for a 2-hour session on L40S`}</CodeBlock>
          </> },
      ].map((item, i) => (
        <div key={i} style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%", background: `${item.color}15`,
              border: `2px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: mono, fontSize: 13, fontWeight: 800, color: item.color, flexShrink: 0,
            }}>{item.step}</div>
            <span style={{ fontFamily: mono, fontSize: 15, fontWeight: 700, color: T.text }}>{item.title}</span>
          </div>
          {item.content}
        </div>
      ))}

      <Divider />

      <Callout color={T.cyan}>
        <strong style={{ color: T.cyan }}>What you just built:</strong> A complete fraud detection pipeline using the same architecture
        described in the NVIDIA State of AI in Financial Services report. GNN for network-level fraud ring detection +
        XGBoost for transaction-level anomalies, running on GPU infrastructure. This is the blueprint referenced in
        Layer 4 of the 7-layer architecture — the exact same approach Visa uses at 639M transactions/day scale.
      </Callout>

      <Footer />
    </div>
  );
}
