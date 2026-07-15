import { technologies } from "../constants";

const Skills = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-black-100">
      <div className="mb-12 text-center">
        <h2 className="text-white text-5xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-secondary text-lg">Tools I use to build and research</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-tertiary p-8 rounded-2xl">
          <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💻</span>
            Full Stack Development
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {technologies.fullstack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                <span className="text-secondary text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-tertiary p-8 rounded-2xl">
          <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🤖</span>
            AI/ML & Research
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {technologies.ml.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
                <span className="text-secondary text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-tertiary p-6 rounded-xl text-center">
          <div className="text-4xl mb-2">🎓</div>
          <h4 className="text-white font-bold mb-2">Education</h4>
          <p className="text-secondary text-sm">MSc in AI — Addis Ababa University</p>
          <p className="text-secondary text-sm">BSc Software Eng. — Magna Cum Laude</p>
          <p className="text-secondary text-sm">BA Management — Rada College</p>
        </div>

        <div className="bg-tertiary p-6 rounded-xl text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h4 className="text-white font-bold mb-2">Highlights</h4>
          <p className="text-secondary text-sm">Credit Risk & Fraud Detection @ CBE</p>
          <p className="text-secondary text-sm">RAG Bots & LLMOps in Production</p>
          <p className="text-secondary text-sm">40% Query Perf. Gain @ HTU LMS</p>
        </div>

        <div className="bg-tertiary p-6 rounded-xl text-center">
          <div className="text-4xl mb-2">💼</div>
          <h4 className="text-white font-bold mb-2">Experience</h4>
          <p className="text-secondary text-sm">5+ Years Full Stack</p>
          <p className="text-secondary text-sm">3+ Years Production ML/MLOps</p>
          <p className="text-secondary text-sm">Founder — 3 SaaS Products</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
