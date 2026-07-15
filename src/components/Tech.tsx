const skillGroups = [
  {
    label: "Languages & Frameworks",
    skills: [
      "Python · TypeScript · JavaScript",
      "Node.js · Express · ASP.NET Core · C#",
      "React · Next.js · Angular",
      "SQL · PostgreSQL · MongoDB",
      "Docker · Linux",
    ],
  },
  {
    label: "AI / ML & MLOps",
    skills: [
      "End-to-End MLOps · LLMOps · Feature Stores",
      "Predictive Modeling · XGBoost · LightGBM",
      "NLP · Conversational Agents · RAG",
      "Computer Vision · Vision Transformers · CNNs",
      "Anomaly & Fraud Detection · Distributed Training",
      "Hyperparameter Optimization · Drift Monitoring",
    ],
  },
  {
    label: "Systems & Architecture",
    skills: [
      "Enterprise System Architecture",
      "Real-Time Data Sync · WebSockets",
      "RBAC-ABAC · Secure Payment Integrations",
      "Advanced Database Optimization",
      "Windows Services · RESTful APIs",
    ],
  },
];

const Tech = () => (
  <section
    className="py-24"
    style={{ background: "var(--color-surface-2)" }}
  >
    <div className="max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>Skills</h2>
        <p className="text-base" style={{ color: "var(--color-ink-2)" }}>
          Technologies and disciplines I work with in production
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5 pb-3"
              style={{ color: "var(--color-accent)", borderBottom: "1px solid var(--color-border)" }}
            >
              {group.label}
            </h3>
            <ul className="space-y-3">
              {group.skills.map((s) => (
                <li key={s} className="text-sm leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tech;
