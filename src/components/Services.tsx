//import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Paintbrush } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      description: "From responsive websites to complex web applications, I deliver robust solutions using cutting edge technologies. My full stack expertise ensures end to end development that meets your business needs while providing optimal performance and scalability."
    },

    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "I develop cross platform mobile applications that provide seamless user experiences across different devices. Leveraging versatile development frameworks, I craft seamless, high-performance applications that deliver an exceptional user experience on Android platforms."
    },
    
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "I create intuitive and visually appealing user interfaces that enhance user experience. By combining aesthetics with functionality, I ensure your digital products not only look great but also provide seamless interaction for your users."
    }
    
  ];

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 }, // Start from the left with reduced opacity
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }, // Adjust the duration as needed
    },
  }

  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className='text-center'>
          <motion.h2 className="text-6xl font-bold  bg-gradient-to-r from-blue-400 via-cyan-300 to-gray-300 inline-block text-transparent bg-clip-text mb-6"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}>
            Services</motion.h2>
        </div>

        <motion.p className="text-center text-2xl text-cyan-100 mb-16 max-w-2xl mx-auto"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}>
          I turn your ideas and desires into a unique project that inspires you and engages your customers.
        </motion.p>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}>

          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;