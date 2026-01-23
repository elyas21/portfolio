import { projects } from "../constants";
import { github } from "../assets";

const ProjectCard = ({ name, description, tags, image, source_code_link }: any) => (
  <div className='bg-tertiary p-5 rounded-2xl w-full hover:scale-105 transition-transform'>
    <div className='relative w-full h-[230px]'>
      <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
      <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
          <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
        </div>
      </div>
    </div>

    <div className='mt-5'>
      <h3 className='text-white font-bold text-2xl'>{name}</h3>
      <p className='mt-2 text-secondary text-sm'>{description}</p>
    </div>

    <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag: any) => (
        <p key={tag.name} className={`text-sm ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  </div>
);

const Works = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-secondary text-sm uppercase tracking-wider">My work</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Projects</h2>
      </div>

      <p className='text-secondary text-lg max-w-3xl leading-relaxed mb-12'>
        Following projects showcase my skills and experience through real-world examples. 
        Each project includes a brief description and links to code repositories and live demos. 
        They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
