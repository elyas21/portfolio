const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">About Me</h2>
      </div>

      <div className="space-y-4 text-secondary text-lg leading-relaxed">
        <p>
          I started building enterprise systems—ERP platforms, learning management systems, and web applications 
          serving thousands of users. Working with Angular, React, and Node.js taught me how to architect production-ready software.
        </p>
        
        <p>
          Everything changed with my first computer vision project. Watching models learn from data felt different—more 
          exploratory, more research-driven. I realized I wanted to make systems intelligent, not just functional.
        </p>
        
        <p>
          Now pursuing my MSc in AI at Addis Ababa University, I work with TensorFlow, PyTorch, and OpenCV 
          to build models for Computer Vision and NLP. My engineering background helps me bridge research and production.
        </p>

        <p className="text-white font-semibold">
          Passionate about applying AI to healthcare, education, and automation.
        </p>
      </div>
    </section>
  );
};

export default About;
