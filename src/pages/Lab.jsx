import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { mono, sans } from "../tokens";
import { Stat, Callout, Divider, SectionHeader, PageTitle, Body, Tag, Footer } from "../components/UI";
import Icon from "../components/Icon";
import diagramImg from "../assets/diagram.jpg";

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

function H3({ children, color }) {
  const { T } = useTheme();
  return (
    <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, color: color || T.text, marginBottom: 8, marginTop: 20 }}>
      {children}
    </div>
  );
}

function InfoRow({ icon, label, value, color }) {
  const { T } = useTheme();
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: `1px solid ${T.borderMuted}` }}>
      <Icon name={icon} size={16} color={color || T.textMuted} style={{ marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: mono, fontSize: 11, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>
        <div style={{ fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 1.5, marginTop: 2 }}>{value}</div>
      </div>
    </div>
  );
}

export default function Lab() {
  const { T } = useTheme();

  return (
    <div>
      <SectionHeader color={T.green}>Hands-On Tutorial</SectionHeader>
      <PageTitle subtitle="NVIDIA AI Blueprint · Official Workflow">Fraud Detection Lab</PageTitle>

      {/* Full Guide CTA */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: `${T.green}08`, border: `1px solid ${T.green}30`,
        borderRadius: 10, padding: "18px 20px", margin: "20px 0 28px",
      }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: 13, fontWeight: 700, color: T.green, marginBottom: 4 }}>
            Builder & Learner Deep Dive
          </div>
          <div style={{ fontFamily: sans, fontSize: 12, color: T.textSec }}>
            Architecture rationale, concept explainers, full command walkthrough, production path, and customer FAQ for NGC engagements.
          </div>
        </div>
        <Link to="/lab/guide" style={{
          display: "flex", alignItems: "center", gap: 6,
          background: T.green, color: "#000", textDecoration: "none",
          fontFamily: mono, fontSize: 12, fontWeight: 700,
          padding: "9px 16px", borderRadius: 7, flexShrink: 0,
        }}>
          Full Guide <Icon name="arrow_forward" size={14} color="#000" />
        </Link>
      </div>

      {/* Overview */}
      <Body>
        Financial losses from worldwide credit card transaction fraud are projected to reach more than{" "}
        <strong style={{ color: T.amber }}>$403 billion over the next decade</strong>. Traditional fraud detection
        methods — rules-based systems and statistical models — are reactive and increasingly ineffective against
        sophisticated, evolving fraud tactics.
      </Body>
      <div style={{ marginTop: 12 }}>
        <Body>
          This NVIDIA AI Blueprint provides a reference implementation for detecting and preventing sophisticated
          fraudulent activities with high accuracy and reduced false positives. It uses the{" "}
          <strong style={{ color: T.text }}>Financial Fraud Training container</strong> (GNN + XGBoost) for model
          building and <strong style={{ color: T.text }}>NVIDIA Dynamo-Triton</strong> for inference — returning
          fraud scores with Shapley values for explainability. The training container also auto-generates all
          Dynamo-Triton configuration files, eliminating manual server setup.
        </Body>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "24px 0 32px" }}>
        <Stat value="$403B" label="projected fraud losses next decade" color={T.amber} />
        <Stat value="GNN" label="graph neural network for fraud rings" color={T.cyan} />
        <Stat value="Shapley" label="per-transaction explainability output" color={T.green} />
        <Stat value="$1.74/hr" label="L40S on CRUSOE (creator's choice)" color={T.purple} />
      </div>

      <Callout color={T.textMuted}>
        <strong style={{ color: T.text }}>Fully local.</strong> This blueprint does not use any NVIDIA hosted services.
        Everything runs in a locally-hosted Docker environment on your GPU instance.
      </Callout>

      <Divider />

      {/* Official Architecture Diagram */}
      <SectionHeader color={T.amber}>Architectural Diagram</SectionHeader>
      <Body>
        Three steps mapping to typical payment processing stages: <strong style={{ color: T.cyan }}>Data Preparation</strong> →{" "}
        <strong style={{ color: T.amber }}>Model Building</strong> →{" "}
        <strong style={{ color: T.green }}>Inference</strong>. Synthetic data simulates production event data
        from a database or data lake. The training container outputs a NIM artifact folder that Dynamo-Triton
        consumes directly.
      </Body>
      <div style={{
        borderRadius: 10, overflow: "hidden", border: `1px solid ${T.border}`,
        margin: "16px 0 32px", background: "#000",
      }}>
        <img
          src={diagramImg}
          alt="NVIDIA Financial Fraud Detection — 3-phase architecture: Data Preparation (RAPIDS), Model Building (Training Container), Inference (Dynamo-Triton)"
          style={{ width: "100%", display: "block" }}
        />
      </div>

      <Divider />

      {/* Software Components */}
      <SectionHeader color={T.cyan}>Software Components</SectionHeader>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[
          {
            name: "financial-fraud-training container",
            detail: "Containerized model building pipeline. Runs GNN + XGBoost training and auto-generates Dynamo-Triton config files.",
            icon: "deployed_code", color: T.amber,
          },
          {
            name: "NVIDIA Dynamo-Triton",
            detail: "Formerly Triton Inference Server. Serves the trained ensemble model and returns fraud scores with Shapley values per transaction.",
            icon: "sync_alt", color: T.green,
          },
        ].map((c, i) => (
          <div key={i} style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: 16,
            display: "flex", gap: 12, alignItems: "flex-start",
          }}>
            <Icon name={c.icon} size={20} color={c.color} />
            <div>
              <div style={{ fontFamily: mono, fontSize: 12, fontWeight: 700, color: T.text, marginBottom: 4 }}>{c.name}</div>
              <div style={{ fontFamily: sans, fontSize: 12, color: T.textMuted, lineHeight: 1.5 }}>{c.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <H3>Software Requirements</H3>
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: "0 16px", marginBottom: 24 }}>
        <InfoRow icon="desktop_windows" label="Operating System" value="Ubuntu 20.04 or newer" color={T.cyan} />
        <InfoRow icon="settings" label="NVIDIA Driver" value="Version 535 or newer" color={T.green} />
        <InfoRow icon="developer_board" label="NVIDIA CUDA" value="Version 12.4 or newer" color={T.amber} />
        <InfoRow icon="inventory_2" label="NVIDIA Container Toolkit" value="Version 1.15.0 or newer" color={T.purple} />
        <InfoRow icon="package_2" label="Docker" value="Version 26 or newer" color={T.cyan} />
        <InfoRow icon="terminal" label="Execution Environment" value="Everything runs via Jupyter Notebook or JupyterLab" color={T.green} />
      </div>

      <Divider />

      {/* Target Audience */}
      <SectionHeader color={T.purple}>Target Audience</SectionHeader>
      <Body>This blueprint targets users who:</Body>
      <ul style={{ fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 2, paddingLeft: 20, marginBottom: 24 }}>
        <li>Understand the financial fraud detection space</li>
        <li>Know how to deploy container-based microservices</li>
        <li>Can run a Jupyter notebook workflow</li>
      </ul>
      <Callout color={T.purple}>
        Using real data in a production environment would not alter the workflow — the blueprint uses
        synthetic data that mimics production transaction patterns. Swap the data source and the pipeline runs identically.
      </Callout>

      <Divider />

      {/* Hardware Requirements */}
      <SectionHeader color={T.cyan}>Hardware Requirements</SectionHeader>
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: "0 16px", marginBottom: 16 }}>
        <InfoRow icon="memory" label="GPU" value="1× A6000, A100, or H100 — minimum 32 GB VRAM" color={T.amber} />
        <InfoRow icon="computer" label="CPU" value="x86_64 architecture" color={T.cyan} />
        <InfoRow icon="storage" label="Storage" value="10 GB" color={T.green} />
        <InfoRow icon="sd_card" label="System Memory" value="16 GB RAM" color={T.purple} />
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
        <Tag color={T.amber}>A6000 48GB</Tag>
        <Tag color={T.cyan}>A100 40/80GB</Tag>
        <Tag color={T.green}>H100 80GB</Tag>
        <Tag color={T.purple}>min 32 GB VRAM</Tag>
        <Tag color={T.textMuted}>CRUSOE $1.74/hr (creator's choice)</Tag>
      </div>

      <Divider />

      {/* Getting Started */}
      <SectionHeader color={T.green}>Getting Started</SectionHeader>

      <H3 color={T.cyan}>Installation System Requirements</H3>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        <Tag color={T.cyan}>git</Tag>
        <Tag color={T.amber}>Jupyter Notebook or JupyterLab</Tag>
        <Tag color={T.green}>Conda / Mamba (Miniforge recommended)</Tag>
      </div>
      <Body>Additional Python packages are installed via the Conda environment step — no manual pip installs needed.</Body>

      {/* Step 1: API Key */}
      {[
        {
          step: "1", title: "Obtain NVIDIA API Key", color: T.cyan,
          content: <>
            <Body>Two methods to generate an API key:</Body>
            <ul style={{ fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 2, paddingLeft: 20, marginBottom: 12 }}>
              <li>Sign in to the <strong style={{ color: T.text }}>NVIDIA Build portal</strong> — build.nvidia.com</li>
              <li>Sign in to the <strong style={{ color: T.text }}>NVIDIA NGC portal</strong> — ngc.nvidia.com</li>
            </ul>
            <div style={{ fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 1.7, marginBottom: 12 }}>
              After signing in: select your organization (must have NVIDIA AI Enterprise enabled) →
              click your account (top right) → <strong style={{ color: T.text }}>Setup</strong> →
              <strong style={{ color: T.text }}> Generate Personal Key</strong> or
              <strong style={{ color: T.text }}> Generate API Key</strong>.
            </div>
            <Callout color={T.amber}>
              <strong style={{ color: T.amber }}>IMPORTANT:</strong> This key is used as the{" "}
              <IC>NVIDIA_API_KEY</IC> environment variable throughout the workflow.
            </Callout>
          </>,
        },
        {
          step: "2", title: "Clone the Repository", color: T.green,
          content: <>
            <CodeBlock title="terminal">{`git clone https://github.com/NVIDIA-AI-Blueprints/financial-fraud-detection.git
cd financial-fraud-detection`}</CodeBlock>
          </>,
        },
        {
          step: "3", title: "Set API Key Environment Variable", color: T.amber,
          content: <>
            <CodeBlock title="terminal">{`# Set for current session
export NVIDIA_API_KEY=your_key`}</CodeBlock>
            <CodeBlock title="terminal — persist across sessions">{`# Add to .bashrc to persist beyond a single instance
echo "export NVIDIA_API_KEY=your_key" >> ~/.bashrc`}</CodeBlock>
          </>,
        },
        {
          step: "4", title: "Set Up Conda Environment (Mamba)", color: T.purple,
          content: <>
            <Body>
              The workflow uses Conda/Mamba to create an environment with all required packages.
              Get a minimal install via <strong style={{ color: T.text }}>Miniforge</strong> if needed.
            </Body>
            <CodeBlock title="terminal — create environment">{`# Run from inside the financial-fraud-detection folder
mamba env create -f conda/notebook_env.yaml`}</CodeBlock>
            <CodeBlock title="terminal — activate environment">{`conda activate notebook_env`}</CodeBlock>
          </>,
        },
        {
          step: "5", title: "Authenticate Docker with NGC", color: T.red,
          content: <>
            <div style={{ fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 1.7, marginBottom: 12 }}>
              Pull the training and inference containers from the NVIDIA container registry (nvcr.io).
              Uses the same <IC>NVIDIA_API_KEY</IC> from Step 3.
            </div>
            <CodeBlock title="terminal">{`echo "$NVIDIA_API_KEY" | docker login nvcr.io -u '$oauthtoken' --password-stdin`}</CodeBlock>
            <div style={{ fontFamily: sans, fontSize: 12, color: T.textSec, lineHeight: 1.6 }}>
              You should see <strong style={{ color: T.green }}>Login Succeeded</strong>. If it fails, verify your API key
              and that your organization has NVIDIA AI Enterprise (NVAIE) enabled.
            </div>
          </>,
        },
        {
          step: "6", title: "Start Jupyter and Run the Workflow", color: T.green,
          content: <>
            <Body>
              No CLI option is available without converting the notebook to a Python file.
              Three ways to start Jupyter:
            </Body>

            <H3 color={T.cyan}>Option 1 — Basic Jupyter Notebook</H3>
            <CodeBlock title="terminal">{`jupyter notebook`}</CodeBlock>

            <H3 color={T.cyan}>Option 2 — Open Directly to the Blueprint Notebook</H3>
            <CodeBlock title="terminal">{`cd notebook
jupyter notebook financial-fraud-usage.ipynb`}</CodeBlock>

            <H3 color={T.cyan}>Option 3 — JupyterLab</H3>
            <CodeBlock title="terminal">{`jupyter-lab

# or expose to network (for cloud instances):
jupyter-lab --ip=* --no-browser`}</CodeBlock>

            <div style={{ fontFamily: sans, fontSize: 13, color: T.textSec, lineHeight: 1.7, marginBottom: 12 }}>
              Jupyter will output a URL — typically <IC>http://localhost:8888/</IC>.
              Open it in a browser and run through <IC>financial-fraud-usage.ipynb</IC>.
            </div>

            <Callout color={T.green}>
              <strong style={{ color: T.green }}>What the notebook does:</strong> Runs all three phases end-to-end —
              RAPIDS data prep → GNN + XGBoost training container → Dynamo-Triton inference.
              Outputs: model accuracy, confusion matrix, fraud scores, and Shapley values per transaction.
            </Callout>
          </>,
        },
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

      {/* Customizing */}
      <SectionHeader color={T.amber}>Customizing the Workflow</SectionHeader>
      <Body>
        The Financial Fraud Training container exposes configuration options to tune GNN architecture,
        XGBoost hyperparameters, and ensemble weighting. Refer to the official NVIDIA documentation for
        the full list of customization parameters.
      </Body>

      <Divider />

      {/* Closing callout */}
      <Callout color={T.cyan}>
        <strong style={{ color: T.cyan }}>What you just built:</strong> The complete official NVIDIA Financial Fraud Detection
        Blueprint — RAPIDS data prep, containerized GNN + XGBoost training, and Dynamo-Triton inference
        with per-transaction Shapley explainability. This is the same architecture referenced in Layer 4
        of the 7-layer stack and the approach Visa runs at 639M transactions/day scale.
        Source:{" "}
        <a href="https://github.com/NVIDIA-AI-Blueprints/financial-fraud-detection" target="_blank" rel="noreferrer"
          style={{ color: T.cyan }}>github.com/NVIDIA-AI-Blueprints/financial-fraud-detection</a>
        {" · "}
        <a href="https://build.nvidia.com/nvidia/financial-fraud-detection" target="_blank" rel="noreferrer"
          style={{ color: T.cyan }}>build.nvidia.com</a>
      </Callout>

      <Footer />
    </div>
  );
}
