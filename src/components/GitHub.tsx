import { useState } from "react";
import { mlProjects, algorithmProjects, webProjects } from "../constants";

const GitHubCard = ({ name, description, tags, link }: any) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className='bg-tertiary p-5 rounded-xl hover:scale-105 transition-transform block'
  >
    <h3 className='text-white font-bold text-lg mb-2'>{name}</h3>
    <p className='text-secondary text-sm mb-3 leading-relaxed'>{description}</p>
    <div className='flex flex-wrap gap-2'>
      {tags.map((tag: string) => (
        <span key={tag} className='px-2 py-1 bg-black-100 text-secondary rounded text-xs'>
          {tag}
        </span>
      ))}
    </div>
  </a>
);

const GitHub = () => {
  const [activeTab, setActiveTab] = useState<'ai' | 'algorithm' | 'web'>('ai');

  return (
    <section id="github" className="bg-black-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-white text-5xl font-bold mb-4">GitHub Projects</h2>
          <p className="text-secondary text-lg mb-2">Open source contributions and research</p>
          <a 
            href="https://github.com/elyas21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            @elyas21 • 72 repositories
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === 'ai'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-tertiary text-secondary hover:text-white'
            }`}
          >
            AI/ML ({mlProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('algorithm')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === 'algorithm'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-tertiary text-secondary hover:text-white'
            }`}
          >
            Algorithms ({algorithmProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === 'web'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-tertiary text-secondary hover:text-white'
            }`}
          >
            Web ({webProjects.length})
          </button>
        </div>

        {activeTab === 'ai' && (
          <div>
            <div className="mb-6">
              <h3 className="text-white text-2xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-secondary">Computer Vision, NLP, and Deep Learning research projects</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {mlProjects.map((project, index) => (
                <GitHubCard key={`ai-${index}`} {...project} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'algorithm' && (
          <div>
            <div className="mb-6">
              <h3 className="text-white text-2xl font-bold mb-2">Algorithms & Data Structures</h3>
              <p className="text-secondary">Search algorithms, RL, path planning, and distributed computing</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {algorithmProjects.map((project, index) => (
                <GitHubCard key={`algo-${index}`} {...project} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'web' && (
          <div>
            <div className="mb-6">
              <h3 className="text-white text-2xl font-bold mb-2">Web Development</h3>
              <p className="text-secondary">Full-stack applications, frameworks, and tools</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {webProjects.map((project, index) => (
                <GitHubCard key={`web-${index}`} {...project} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <a 
            href="https://github.com/elyas21?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition font-semibold"
          >
            View All Repositories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
