import { technologies } from "../constants";

const Tech = () => {
  const allTechs = [...technologies.fullstack, ...technologies.ml];
  
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-bold">Technologies</h2>
      </div>
      
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6'>
        {allTechs.map((technology) => (
          <div key={technology.name} className='w-full h-24 flex items-center justify-center'>
            <img src={technology.icon} alt={technology.name} className='w-16 h-16 object-contain' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
