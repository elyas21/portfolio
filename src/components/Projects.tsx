import { useState } from "react";
import { fullStackProjects, mlProjects } from "../constants";

const ProjectCard = ({ name, description, tags, link, image }: any) => (
  <div className='bg-tertiary p-5 rounded-xl hover:scale-105 transition-transform flex flex-col min-h-[300px]'>
    <h3 className='text-white font-bold text-lg mb-3'>{name}</h3>
    <p className='text-secondary text-sm mb-4 leading-relaxed flex-grow'>{description}</p>
    <div className='flex flex-wrap gap-2 mb-3'>
      {tags.slice(0, 3).map((tag: string) => (
        <span key={tag} className='px-2 py-1 bg-black-100 text-secondary rounded text-xs'>
          {tag}
        </span>
      ))}
    </div>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className='inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition text-sm font-semibold text-center'
    >
      View Project →
    </a>
  </div>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'fullstack' | 'ml'>('ml');

  return (
    <section id="projects" className="py-20 bg-black-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-secondary text-lg">From enterprise systems to AI research</p>
        </div>

        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setActiveTab('ml')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'ml'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-tertiary text-secondary hover:text-white'
            }`}
          >
            AI/ML
          </button>
          <button
            onClick={() => setActiveTab('fullstack')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'fullstack'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-tertiary text-secondary hover:text-white'
            }`}
          >
            Full Stack
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {activeTab === 'ml' && mlProjects.map((project, index) => (
            <ProjectCard key={`ml-${index}`} {...project} />
          ))}
          {activeTab === 'fullstack' && fullStackProjects.map((project, index) => (
            <ProjectCard key={`fs-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
