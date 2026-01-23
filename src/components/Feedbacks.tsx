import { testimonials } from "../constants";

const FeedbackCard = ({ testimonial, name, designation, company, image }: any) => (
  <div className='bg-black-200 p-10 rounded-3xl w-full'>
    <p className='text-white font-black text-5xl'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-lg'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-base'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-sm'>
            {designation} at {company}
          </p>
        </div>
        <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover' />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <section className="bg-black-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-tertiary rounded-2xl p-8 md:p-16">
          <div className="mb-12">
            <p className="text-secondary text-sm uppercase tracking-wider">What others say</p>
            <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Testimonials</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
            {testimonials.map((testimonial, index) => (
              <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
