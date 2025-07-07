import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react'; // or use any other icon
import { useNavigate } from 'react-router-dom';



const CaseStudy = () => {

  const navigate = useNavigate();


  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">

      <div className="absolute top-20 left-6 z-50">
  <button
    onClick={() => navigate('/')}
    className="flex items-center gap-2 text-[#75b9f1] hover:text-white transition-colors"
  >
    <ArrowLeft className="w-5 h-5" />
    <span className="text-sm font-medium">Home</span>
  </button>
</div>
      
      {/* Background title */}
       <section className="relative w-full h-screen overflow-hidden flex items-center mt-10">
      <h1 className="absolute text-[120px] font-extrabold text-[#75b9f1] opacity-4 left-10 top-10 z-0 select-none px-40 transition-opacity duration-700 ease-out opacity-0 animate-fade-in">
        VIVEE FASHION
      </h1>

      {/* Content container */}
      <motion.div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-60"
      variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}>
        {/* Left text */}
        <div className="text-[#75b9f1] max-w-md">
          <h2 className="text-2xl md:text-3xl  font-semibold mb-60">
            Every Outfit Is A Step Toward Your Best Self
          </h2>
        </div>

        {/* desktop mockups */}
        <div className="flex mt-10 md:mt-0">
          <img
            src="/MacBook.png"
            alt="Mockup 1"
            className="w-[450px] md:w-[600px] mt-20 transform rotate-[-5deg]"
          />
          
        </div>
      </motion.div>
    </section>
      
     {/* About & Problems */}
<section className="relative w-full py-0 px-6 md:px-20 overflow-hidden">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto transition-opacity duration-700 ease-out opacity-0 animate-fade-in">
    
    {/* Left: Image - Moved Up */}
    <div className="flex justify-center md:justify-start w-full md:w-1/2 -mt-10 md:-mt-20">
      <img
        src="/fashion1.png"
        alt="Mockup"
        className="w-[300px] md:w-[5600px] transform rotate-[10deg]"
      />
    </div>

    {/* Right: Text Content */}
    <div className="text-white w-full md:w-1/2 flex flex-col gap-12">
      
      {/* About Project */}
      <div className='relative py-10'>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Project</h1>
        <p className="text-lg leading-relaxed">
          This project is a modern UI design for a women's clothing website targeting fashion-conscious women aged 18–35. The goal was to create a seamless, trendy, and user-friendly online shopping experience. The design focused on key areas like product discovery, smooth navigation, fast checkout, and personalized shopping experiences.
        </p>
      </div>

      {/* Problems */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Problems</h1>
        
        <h2 className="text-2xl font-semibold mt-4 mb-2">User-Side Problems:</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Difficulty finding specific styles or trending items quickly.</li>
          <li>Poor mobile experience in current fashion sites.</li>
          <li>Confusing filters and lack of personalization.</li>
          <li>Frustration with slow checkout or lack of payment options.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Business-Side Problems:</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>High bounce rate and low conversion rate.</li>
          <li>Weak brand identity online.</li>
          <li>Customers not returning after one-time purchases.</li>
          <li>Lack of customer insight to improve marketing.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      
    

  <section className="w-full py-20 px-6 md:px-20  relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">

    {/* Left: Solutions Text */}
    <div className="text-white w-full md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Solutions</h1>
      <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
        <li>Visually modern UI with rich product visuals.</li>
        <li>Simplified navigation and smart filters.</li>
        <li>Included seasonal picks, reviews, and AI recommendations.</li>
        <li>Responsive mobile layout with quick checkout.</li>
        <li>Interactive wishlist, style gallery, and quick views.</li>
      </ul>
    </div>

    {/* Right: Image */}
    <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
      {/* Decorative blur circle */}
      <div className="absolute w-[280px] h-[280px] bg-[#57c7ff] rounded-full blur-3xl opacity-50 -bottom-10 -right-10 z-0" />
      <img
        src="/fashion2.png"
        alt="Mockup"
        className="w-[280px] md:w-[450px] transform rotate-[10deg] relative z-10"
      />
    </div>

  </div>
</section>



<section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6 md:px-20 py-20 ">

  {/* Text content */}
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="bg-[#1a1a1a] border-l-4 border-blue-500 rounded-xl p-8 md:p-12 max-w-3xl text-white shadow-lg"
>
  <h1 className="text-5xl font-bold mb-6">Research Goals</h1>
  <ul className="list-disc pl-6 space-y-4 text-base md:text-lg leading-relaxed">
    <li>Understand how women aged 18–35 shop for clothes online.</li>
    <li>Identify key frustrations and expectations from fashion websites.</li>
    <li>Analyze competitor websites and user reviews to identify feature gaps.</li>
    <li>Find what design elements increase trust and conversion in fashion eCommerce.</li>
  </ul>
</motion.div>

</section>

  </div>
    
  );
};

export default CaseStudy;
