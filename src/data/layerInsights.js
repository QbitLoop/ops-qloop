// ─── INSIGHT DATA PER LAYER (4 slides each) ───
const LAYER_INSIGHTS = {
  L1: [
    { title: "Customer Pain", text: "CTOs need a single pane of glass for model governance \u2014 compliance scoring, risk profiles, drift alerts \u2014 but most banks have fragmented dashboards built by individual teams.", stat: "73% of leaders say AI is crucial to future success" },
    { title: "Listen for", text: "\"We don't have visibility into how many models are in production.\" \"Our compliance team can't audit our AI.\" \"We got flagged by regulators for model risk.\" Any mention of SR 11-7 (OCC model risk guidance)." },
    { title: "They're running", text: "Custom-built governance dashboards, spreadsheet-based model inventories, manual compliance reviews. Some use IBM OpenPages or SAS Model Risk. NVIDIA AI Enterprise + Base Command Manager provides centralized model catalog and lifecycle management." },
    { title: "Business impact", text: "Goldman achieved 12% cost reduction in data management by centralizing on GS AI Platform. Visa's Observatory catches drift before regulators do \u2014 preventing multi-million dollar fines.", stat: "40% cite data governance as #1 challenge" },
  ],
  L2: [
    { title: "Customer Pain", text: "Platform fragmentation \u2014 data scientists using 5 different tools, no standard deployment path, 3-6 month timelines to get a model from notebook to production. The 47% hybrid architecture shift means they need platforms that span on-prem AND cloud.", stat: "47% now use hybrid architecture \u2014 up from 26% in 2024" },
    { title: "Listen for", text: "\"Our data scientists can't deploy their own models.\" \"We have different ML stacks in every business unit.\" \"It takes months to go from experiment to production.\" \"We need to run the same pipeline on-prem and in cloud.\"" },
    { title: "They're running", text: "Databricks, SageMaker, or Vertex AI in the cloud \u2014 but often with separate on-prem Kubernetes clusters. NVIDIA AI Enterprise unifies both. Base Command Manager provides single control plane across DGX on-prem + cloud GPU instances." },
    { title: "Business impact", text: "Goldman's centralized platform cut model deployment from months to weeks. Visa's rebuilt platform supports 100+ AI products across the company. Banks that consolidate see 30-50% reduction in AI infrastructure spend.", stat: "41% say optimizing AI workflows is top spending priority" },
  ],
  L3: [
    { title: "Customer Pain", text: "Feature computation at scale is a CPU bottleneck. When you're processing hundreds of millions of transactions daily, Spark jobs take hours. Real-time features need sub-second latency that CPU clusters can't deliver.", stat: "68% say data analytics is their #1 AI workload" },
    { title: "Listen for", text: "\"Our Spark jobs take too long.\" \"We can't compute features fast enough for real-time scoring.\" \"Our data engineers spend more time waiting than building.\" Any mention of Spark, ETL bottlenecks, or feature store latency." },
    { title: "They're running", text: "Apache Spark on CPU clusters, Pandas for prototyping, custom Flink jobs. RAPIDS is a zero-code-change Spark plugin that GPU-accelerates existing jobs 10-100x. cuDF replaces Pandas. cuGraph adds GPU-accelerated graph analytics." },
    { title: "Business impact", text: "RAPIDS Accelerator for Spark: no code changes required. Feature computation that took 4 hours on CPU drops to 12 minutes on GPU. At Visa's scale, that's the difference between batch and real-time feature freshness.", stat: "35% use data processing/ETL as a top AI focus area" },
  ],
  L4: [
    { title: "Customer Pain", text: "Training complex models (GNNs for fraud networks, deep learning ensembles) takes days on CPU. Banks with 84% open-source preference want to fine-tune foundation models on proprietary transaction data \u2014 that requires serious GPU compute.", stat: "84% say open-source software is important to their AI strategy" },
    { title: "Listen for", text: "\"We want to fine-tune our own models.\" \"Training takes too long \u2014 we can only retrain monthly.\" \"We need graph neural networks but can't get the compute.\" Any mention of model training timelines or open-source customization." },
    { title: "They're running", text: "Cloud GPU instances (expensive at scale), Databricks clusters, some on-prem A100s. DGX systems provide dedicated training infrastructure. NeMo for LLM fine-tuning. Fraud Detection Blueprint ships a complete GNN + XGBoost pipeline with synthetic data." },
    { title: "Business impact", text: "NVIDIA Fraud Blueprint: 40% better detection accuracy, 93% reduction in false positives. DGX training that took 3 days on cloud runs in 8 hours on-prem. Banks fine-tuning open models create differentiated capabilities.", stat: "61% using/assessing generative AI" },
  ],
  L5: [
    { title: "Customer Pain", text: "Inference is the recurring cost that never stops. Every transaction scored, every AI assistant query, every risk calculation. 37% say model performance is #1 inference concern. Sub-millisecond latency at millions of RPS.", stat: "37% say model performance is #1 inference factor" },
    { title: "Listen for", text: "\"Our inference costs are growing faster than our revenue.\" \"We can't meet our latency SLAs.\" \"We're serving 10 models but need to serve 50.\" \"How do we optimize LLM serving costs?\"" },
    { title: "They're running", text: "Custom FastAPI endpoints, vLLM for LLMs, TensorFlow Serving for legacy. Dynamo-Triton replaces all \u2014 multi-framework, multi-model serving. TensorRT optimizes FP32\u2192INT8 (2-4x faster). NIM wraps any model in a containerized API." },
    { title: "Business impact", text: "TensorRT: 2-4x inference speedup, no accuracy loss. NVIDIA Dynamo: 30x throughput for LLM inference via disaggregated prefill/decode. Visa scores 639M transactions daily \u2014 2x speedup saves millions in compute.", stat: "42% using/assessing agentic AI" },
  ],
  L6: [
    { title: "Customer Pain", text: "Models degrade silently. Fraud patterns shift, customer behavior changes. Without continuous monitoring, a 95% accurate model drifts to 80% \u2014 nobody knows until losses spike.", stat: "34% cite performance/reliability as top AI agent challenge" },
    { title: "Listen for", text: "\"We don't know when our models degrade.\" \"We found out from a business report, not monitoring.\" \"Our retraining is manual and ad-hoc.\" Any mention of model drift, stale models, or reactive retraining." },
    { title: "They're running", text: "Custom Grafana dashboards, Evidently AI for drift, manual quarterly audits. Morpheus (NVIDIA cybersecurity framework) is underexplored for financial monitoring. DCGM monitors GPU cluster health. Gap: automated retraining triggers." },
    { title: "Business impact", text: "Visa's AI Observatory catches drift daily \u2014 not quarterly. Automated PSI monitoring triggers alerts before performance impacts customers. 60%+ reduction in losses from stale models.", stat: "25% cite regulatory/ethical concerns \u2014 monitoring solves this" },
  ],
};

export default LAYER_INSIGHTS;
