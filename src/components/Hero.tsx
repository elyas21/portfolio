const Hero = () => (
  <section
    className="relative w-full min-h-screen flex items-center justify-center pt-20"
    style={{ background: "linear-gradient(160deg, var(--color-surface) 0%, var(--color-surface-2) 100%)" }}
  >
    <div className="max-w-5xl mx-auto px-6 py-24 text-center">
      <p className="text-sm font-medium mb-3 uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
        Hello, I'm
      </p>
      <h1 className="text-6xl md:text-8xl font-bold mb-5 tracking-tight" style={{ color: "var(--color-ink)" }}>
        Elyas Abate
      </h1>
      <div className="h-px w-24 mx-auto mb-6 accent-gradient" />

      <p className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--color-ink)" }}>
        Senior Full Stack &amp; MLOps Engineer
      </p>
      <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
        5+ years bridging scalable enterprise architecture and production AI — designing high-concurrency platforms
        and deploying end-to-end ML models for finance and EduTech.
      </p>

      <div className="flex gap-2 justify-center flex-wrap mb-10">
        {["Finance AI", "LLMOps / MLOps", "Full Stack", "NLP & CV"].map((badge) => (
          <span
            key={badge}
            className="px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: "var(--color-surface-3)", color: "var(--color-accent)", border: "1px solid var(--color-border)" }}
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="flex gap-3 justify-center flex-wrap mb-10">
        <a
          href="#about"
          className="px-7 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 accent-gradient"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="px-7 py-3 rounded-lg text-sm font-semibold transition-colors"
          style={{ border: "1px solid var(--color-accent)", color: "var(--color-accent)", background: "transparent" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-accent)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-accent)"; }}
        >
          View Work
        </a>
        <a
          href="mailto:elyasabate21@gmail.com"
          className="px-7 py-3 rounded-lg text-sm font-semibold transition-colors"
          style={{ background: "var(--color-surface-3)", color: "var(--color-ink-2)" }}
        >
          Contact
        </a>
      </div>

      <div className="flex gap-5 justify-center flex-wrap text-sm" style={{ color: "var(--color-ink-3)" }}>
        {[
          { label: "GitHub", href: "https://github.com/elyas21" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/elyasabate21" },
          { label: "+251 962 659 105", href: "tel:+251962659105" },
          { label: "elyas-abate.com", href: "https://elyas-abate.com" },
        ].map((item, i, arr) => (
          <span key={item.label} className="flex items-center gap-5">
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="transition-colors hover:underline"
              style={{ color: "var(--color-ink-3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-3)")}
            >
              {item.label}
            </a>
            {i < arr.length - 1 && <span style={{ color: "var(--color-border)" }}>·</span>}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
