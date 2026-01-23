const Journey = () => {
  return (
    <section id="journey" className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-16 text-center">
        <h2 className="text-white text-5xl font-bold mb-4">My Journey</h2>
        <p className="text-secondary text-lg">From building enterprise systems to researching AI</p>
      </div>

      <div className="space-y-12">
        <div className="bg-black-100 p-8 rounded-2xl border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
            <div>
              <h3 className="text-white text-2xl font-bold">Full Stack Engineer</h3>
              <p className="text-secondary">2022 - 2023</p>
            </div>
          </div>
          <p className="text-white-100 leading-relaxed mb-4">
            Started my career building enterprise-grade ERP systems and learning management platforms. 
            Worked with Angular, React, Node.js, and SQL Server to deliver scalable solutions for government agencies and universities.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">Angular</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">PostgreSQL</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">SQL Server</span>
          </div>
        </div>

        <div className="bg-black-100 p-8 rounded-2xl border-l-4 border-purple-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
            <div>
              <h3 className="text-white text-2xl font-bold">The Transition</h3>
              <p className="text-secondary">2023</p>
            </div>
          </div>
          <p className="text-white-100 leading-relaxed mb-4">
            Discovered my passion for AI/ML while building a real-time face mask detection system. 
            The intersection of software engineering and machine learning fascinated me. 
            Decided to pursue MSc in Artificial Intelligence at Addis Ababa University to deepen my expertise.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">Computer Vision</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">TensorFlow</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">OpenCV</span>
          </div>
        </div>

        <div className="bg-black-100 p-8 rounded-2xl border-l-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
            <div>
              <h3 className="text-white text-2xl font-bold">AI/ML Engineer & Researcher</h3>
              <p className="text-secondary">2023 - Present</p>
            </div>
          </div>
          <p className="text-white-100 leading-relaxed mb-4">
            Now combining full-stack expertise with AI/ML research. 
            Developing intelligent systems using TensorFlow, PyTorch, and modern NLP techniques. 
            Freelancing on AI projects while pursuing advanced research in Computer Vision and Natural Language Processing.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">TensorFlow</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">PyTorch</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">NLP</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">Computer Vision</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm">GCP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
