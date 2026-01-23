import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
        {
          from_name: form.name,
          to_name: "Elyas Abate",
          from_email: form.email,
          to_email: "elyasabate21@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-white text-5xl font-bold mb-4">Let's Connect</h2>
        <p className="text-secondary text-lg">Open to collaborations, research opportunities, and interesting projects</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-black-100 p-8 rounded-2xl">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 py-3 px-8 rounded-xl text-white font-bold hover:opacity-90 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-black-100 p-6 rounded-2xl">
            <h3 className="text-white text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-secondary text-sm mb-1">Email</p>
                <a href="mailto:elyasabate21@gmail.com" className="text-white hover:text-blue-500 transition">
                  elyasabate21@gmail.com
                </a>
              </div>
              <div>
                <p className="text-secondary text-sm mb-1">Phone</p>
                <a href="tel:+251962659105" className="text-white hover:text-blue-500 transition">
                  +251 96 265 9105
                </a>
              </div>
              <div>
                <p className="text-secondary text-sm mb-1">Location</p>
                <p className="text-white">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          <div className="bg-black-100 p-6 rounded-2xl">
            <h3 className="text-white text-xl font-bold mb-4">Connect Online</h3>
            <div className="space-y-3">
              <a href="https://github.com/elyas21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-blue-500 transition">
                <span>→</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/elyasabate21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-blue-500 transition">
                <span>→</span> LinkedIn
              </a>
              <a href="https://elyas-abate.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-blue-500 transition">
                <span>→</span> Portfolio Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center border-t border-tertiary pt-8">
        <p className="text-secondary">© 2025 Elyas Abate • Full Stack Engineer → AI/ML Researcher</p>
      </footer>
    </section>
  );
};

export default Contact;
