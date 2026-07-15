const steps = [
  {
    num: "01",
    title: "Full Stack Developer",
    company: "Xoka IT Solution",
    date: "Dec 2021 – Sep 2023",
    body: "Built enterprise Angular frontends for government ERP systems and geospatial mineral tracking UIs. Designed MS SQL Server architectures with 50+ stored procedures, cutting critical operation latency from 3s to 500ms.",
    tags: ["Angular", "Node.js", "ASP.NET", "MS SQL Server", "Leaflet"],
    accentColor: "#6366f1",
  },
  {
    num: "02",
    title: "Senior Full Stack & ML Engineer",
    company: "Holy Trinity University",
    date: "Dec 2023 – Nov 2025",
    body: "Led end-to-end ML lifecycle for a personalized learning-aid system. Deployed a multimodal NLP chat system (text + audio). Architected Node.js LMS backends with PostgreSQL optimization delivering 40% query performance improvement.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "NLP", "WebSockets"],
    accentColor: "#8b5cf6",
  },
  {
    num: "03",
    title: "Founder & Lead Engineer",
    company: "Million Technologies (M-TECHS)",
    date: "Jun 2021 – Present",
    body: "Directed end-to-end product development for three enterprise SaaS products: UniFlow SIS, Afrifidel LearnLang, and Grar Books — with ML-powered predictive analytics, automated evaluations, and intelligent recommendations.",
    tags: ["Next.js", "Tailwind", "Node.js", "ML", "SaaS"],
    accentColor: "#f59e0b",
  },
  {
    num: "04",
    title: "Machine Learning Engineer",
    company: "Commercial Bank of Ethiopia",
    date: "Jan 2026 – Present",
    body: "XGBoost/LightGBM credit risk models with SHAP explainability, Vision Transformer KYC pipelines, real-time fraud detection with Agentic workflows, and LLMOps infrastructure with RAG bots and Vision-Language Models.",
    tags: ["XGBoost", "LightGBM", "RAG", "LLMOps", "MLOps", "VLM", "Python"],
    accentColor: "#10b981",
  },
];

const Journey = () => (
  <section
    id="journey"
    className="py-24"
    style={{ background: "var(--color-surface-2)" }}
  >
    <div className="max-w-5xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>
          Experience
        </h2>
        <p className="text-base" style={{ color: "var(--color-ink-2)" }}>
          5+ years from enterprise systems to production AI
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="rounded-2xl p-8"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderLeft: `3px solid ${step.accentColor}`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest mr-3" style={{ color: step.accentColor }}>
                  {step.num}
                </span>
                <span className="text-lg font-bold" style={{ color: "var(--color-ink)" }}>
                  {step.title}
                </span>
                <span className="text-sm ml-2" style={{ color: "var(--color-ink-2)" }}>
                  · {step.company}
                </span>
              </div>
              <span className="text-xs font-medium flex-shrink-0" style={{ color: "var(--color-ink-3)" }}>
                {step.date}
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-ink-2)" }}>
              {step.body}
            </p>

            <div className="flex flex-wrap gap-2">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: "var(--color-surface-3)", color: "var(--color-ink-2)", border: "1px solid var(--color-border)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Journey;
