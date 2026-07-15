const works = [
  {
    company: "Commercial Bank of Ethiopia",
    period: "Jan 2026 – Present",
    title: "Enterprise AI & MLOps Platform",
    summary: "Production ML infrastructure serving Ethiopia's largest bank — credit risk scoring, real-time fraud detection, and automated KYC document processing at scale.",
    outcomes: [
      "XGBoost/LightGBM credit risk models with SHAP explainability for compliant loan approvals",
      "Real-time fraud detection via distributed anomaly detection & Agentic workflows",
      "RAG customer support bots + Vision-Language Models for financial document automation",
      "LLMOps infrastructure with feature stores and continuous drift monitoring",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "RAG", "LLMOps", "MLOps", "VLM"],
    accent: "#6366f1",
  },
  {
    company: "Holy Trinity University",
    period: "Dec 2023 – Nov 2025",
    title: "University LMS & AI Learning Platform",
    summary: "End-to-end learning management system with embedded ML — serving thousands of students with personalized predictions, multimodal NLP assistance, and real-time live sessions.",
    outcomes: [
      "Multimodal NLP chat system (text + audio) for context-aware, per-lesson learning assistance",
      "Distributed ML training pipeline for personalized student performance predictions",
      "PostgreSQL schema optimization delivering 40% query performance improvement",
      "Fault-tolerant live sessions via WebSockets, RBAC-ABAC, Zoom, MUX & MPGS",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "NLP", "WebSockets"],
    accent: "#8b5cf6",
  },
  {
    company: "Million Technologies (M-TECHS)",
    period: "Jun 2021 – Present",
    title: "SaaS Product Suite — UniFlow, Afrifidel, Grar",
    summary: "Three enterprise SaaS products built from zero: a Student Information System, a language-learning platform, and a books platform — each with ML-powered intelligence.",
    outcomes: [
      "UniFlow SIS: role-based workflows, predictive analytics, automated student evaluations",
      "Afrifidel LearnLang: intelligent language learning with adaptive recommendations",
      "Grar Books: content platform with ML-powered discovery and personalization",
      "Secure payment integrations and scalable Next.js + Tailwind frontends across all products",
    ],
    stack: ["Next.js", "Tailwind", "Node.js", "PostgreSQL", "ML", "Payments"],
    accent: "#f59e0b",
  },
  {
    company: "Xoka IT Solution",
    period: "Dec 2021 – Sep 2023",
    title: "Government ERP & Federal Data Systems",
    summary: "Enterprise-grade ERP and data management platforms for Ethiopian federal agencies — handling large-scale data entry, geospatial tracking, and real-time synchronization.",
    outcomes: [
      "Angular frontends for government ERP with typed reactive forms and advanced state management",
      "Geospatial mineral resource tracking UI with Leaflet and real-time external sync",
      "50+ MS SQL Server stored procedures cutting critical operation latency from 3s → 500ms",
      "RESTful APIs and Windows services powering federal data management platforms",
    ],
    stack: ["Angular", "Node.js", "ASP.NET", "MS SQL Server", "Leaflet"],
    accent: "#10b981",
  },
];

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>
          Work
        </h2>
        <p className="text-base" style={{ color: "var(--color-ink-2)" }}>
          Selected projects from 5+ years of production engineering
        </p>
      </div>

      <div className="space-y-6">
        {works.map((w) => (
          <div
            key={w.title}
            className="rounded-2xl overflow-hidden"
            style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
          >
            <div className="h-0.5" style={{ background: w.accent }} />
            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: w.accent }}>
                  {w.company}
                </span>
                <span className="text-xs" style={{ color: "var(--color-ink-3)" }}>{w.period}</span>
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>{w.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-ink-2)" }}>{w.summary}</p>

              <ul className="space-y-2 mb-6">
                {w.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: w.accent }} />
                    {o}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {w.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: "var(--color-surface-3)", color: "var(--color-ink-2)", border: "1px solid var(--color-border)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
