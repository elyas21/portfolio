const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-black-100">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <p className="text-secondary text-lg mb-2">Hello, I'm</p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            Elyas Abate
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
        </div>
        
        <p className="text-2xl md:text-3xl text-white mb-4">
          AI/ML Engineer & Researcher
        </p>
        <p className="text-lg text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Building intelligent systems with Computer Vision and NLP. MSc student in AI at Addis Ababa University.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <a href="#about" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition font-semibold">
            About Me
          </a>
          <a href="#projects" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition font-semibold">
            View Projects
          </a>
          <a href="mailto:elyasabate21@gmail.com" className="px-8 py-3 bg-tertiary text-white rounded-lg hover:bg-opacity-80 transition font-semibold">
            Contact
          </a>
        </div>

        <div className="flex gap-6 justify-center text-secondary flex-wrap">
          <a href="https://github.com/elyas21" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="https://www.linkedin.com/in/elyasabate21" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="tel:+251962659105" className="hover:text-white transition">
            +251 96 265 9105
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
