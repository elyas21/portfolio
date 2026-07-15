import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const inputStyle = {
  background: "var(--color-surface-3)",
  color: "var(--color-ink)",
  border: "1px solid var(--color-border)",
  borderRadius: "0.5rem",
  padding: "0.875rem 1.25rem",
  outline: "none",
  width: "100%",
  fontSize: "0.875rem",
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, to_name: "Elyas Abate", from_email: form.email, to_email: "elyasabate21@gmail.com", message: form.message },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you! I will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: "var(--color-ink)" }}>
            Let's Connect
          </h2>
          <p className="text-base" style={{ color: "var(--color-ink-2)" }}>
            Open to collaborations, research opportunities, and interesting projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="rounded-2xl p-8" style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} required />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Email</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" style={inputStyle} required />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Message</span>
                <textarea rows={6} name="message" value={form.message} onChange={handleChange} placeholder="Your message" style={inputStyle} required />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="py-3 px-8 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90 accent-gradient disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div className="rounded-2xl p-6" style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}>
              <h3 className="text-base font-semibold mb-4" style={{ color: "var(--color-ink)" }}>Contact</h3>
              <div className="space-y-3">
                {[
                  { label: "Email", value: "elyasabate21@gmail.com", href: "mailto:elyasabate21@gmail.com" },
                  { label: "Phone", value: "+251 962 659 105", href: "tel:+251962659105" },
                  { label: "Location", value: "Addis Ababa, Ethiopia", href: null },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs mb-0.5" style={{ color: "var(--color-ink-3)" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm transition-colors" style={{ color: "var(--color-ink)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink)")}
                      >{item.value}</a>
                    ) : (
                      <p className="text-sm" style={{ color: "var(--color-ink)" }}>{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}>
              <h3 className="text-base font-semibold mb-4" style={{ color: "var(--color-ink)" }}>Online</h3>
              <div className="space-y-3">
                {[
                  { label: "GitHub", href: "https://github.com/elyas21" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/elyasabate21" },
                  { label: "elyas-abate.com", href: "https://elyas-abate.com" },
                ].map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: "var(--color-ink-2)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-ink-2)")}
                  >
                    <span style={{ color: "var(--color-accent)" }}>→</span> {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer
          className="mt-20 pt-8 text-center text-sm"
          style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-ink-3)" }}
        >
          © 2026 Elyas Abate · Senior Full Stack &amp; MLOps Engineer
        </footer>
      </div>
    </section>
  );
};

export default Contact;
