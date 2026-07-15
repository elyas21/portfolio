const About = () => (
  <section id="about" className="max-w-5xl mx-auto px-6 py-24">
    <h2 className="text-4xl md:text-5xl font-bold mb-10" style={{ color: "var(--color-ink)" }}>
      About Me
    </h2>
    <div className="space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
      <p>
        Over 5 years I've built production systems at scale — from government ERP platforms and university LMS backends
        handling thousands of concurrent users, to real-time fraud detection pipelines processing high-throughput
        transaction streams at the Commercial Bank of Ethiopia.
      </p>
      <p>
        My edge is the full stack: I architect the Node.js/PostgreSQL backend, own the React/Next.js frontend,
        and ship the ML model — XGBoost credit risk scoring, RAG customer support bots, Vision Transformer KYC pipelines —
        all the way to production with proper MLOps, feature stores, and drift monitoring.
      </p>
      <p>
        As founder of Million Technologies (M-TECHS) I've taken three SaaS products from zero to live:
        UniFlow SIS, Afrifidel LearnLang, and Grar Books — each combining complex role-based workflows
        with intelligent ML-powered recommendations and analytics.
      </p>
      <p className="font-semibold" style={{ color: "var(--color-ink)" }}>
        Currently pursuing MSc in AI at Addis Ababa University while leading ML engineering at CBE.
        Magna cum laude BSc in Software Engineering from Wollo University.
      </p>
    </div>
  </section>
);

export default About;
