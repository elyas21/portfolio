const GitHub = () => (
  <section id="github" className="py-20">
    <div
      className="max-w-5xl mx-auto px-6 py-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-8"
      style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
    >
      <div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
          Open Source &amp; Research
        </h2>
        <p className="text-sm leading-relaxed max-w-md" style={{ color: "var(--color-ink-2)" }}>
          Computer Vision, NLP, reinforcement learning, and distributed systems experiments —
          70+ repositories spanning research prototypes to production utilities.
        </p>
      </div>
      <a
        href="https://github.com/elyas21"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 px-7 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 accent-gradient whitespace-nowrap"
      >
        View GitHub →
      </a>
    </div>
  </section>
);

export default GitHub;
