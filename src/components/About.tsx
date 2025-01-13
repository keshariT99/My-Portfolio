//import React from 'react';
//import { Users, BarChart2, Monitor, Shield } from 'lucide-react';
import { motion } from "framer-motion"
import { FeatureGrid } from "./FeatureGrid";

const About = () => {

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  }

 /* const fadeInLeft = {
    hidden: { opacity: 0, x: -50 }, // Start from the left with reduced opacity
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }, // Adjust the duration as needed
    },
  }*/
  
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2 className="text-6xl font-bold  bg-gradient-to-r from-blue-400 via-cyan-300 to-gray-300 inline-block text-transparent bg-clip-text mb-6 "
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} >
            About Me</motion.h2>
        </div>

        <motion.div className="text-center max-w-3xl mx-auto mb-16 "
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} >
          <p className="text-gray-400 transitionX(0) duration-300">
          I am a passionate and dedicated web developer with a Bachelor of Science (Honours) in Information Technology from the Sri Lanka Institute of Information Technology (SLIIT), specializing in IT. With a strong foundation in modern web technologies and a keen eye for detail, I create engaging, user-friendly websites and applications tailored to meet client needs.
          <br /><br />
          In addition to web development, I have a deep interest in UI/UX design, focusing on crafting intuitive, aesthetically pleasing interfaces that enhance user experiences. My design process involves user research, wireframing, prototyping, and usability testing. Proficient in design tool such as Figma, I transform concepts into seamless and engaging user journeys.
          <br /><br />
          I specialize in front-end development, combining technical expertise with a focus on creating visually appealing and highly functional user interfaces. Proficient in tools and technologies such as HTML, CSS, JavaScript, and React. Beyond coding, I have a solid understanding of testing frameworks like Selenium, and Postman.
          <br /><br />
          During my internship period, I developed a strong foundation in front-end development by learning HTML, CSS, and Bootstrap to create responsive web designs. I further expanded my skills by working with React.js, using its features like routes, hooks (useState, useEffect), and event handling to build dynamic and interactive web applications. I have hands-on experience integrating APIs, managing state, and implementing designs from Figma into functional UIs. 
          
          </p>
       </motion.div>
       
         {/*<section className='py-16 px-4 bg-green-400/10 '>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="bg-[#0f2f0f] p-6 rounded-lg transition-all duration-300 "
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 255, 0, 0.5)" }}
              viewport={{ once: false, amount: 0.2 }}>
              <Users className="w-8 h-8 text-neonGreen mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unparalleled Technical Expertise</h3>
              <p className="text-gray-400">Mastery across multiple programming languages and frameworks</p>
            </motion.div>

            <motion.div className="bg-[#0f2f0f] p-6 rounded-lg transition-all duration-300"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 255, 0, 0.5)" }}
            viewport={{ once: false, amount: 0.2 }}>
              <BarChart2 className="w-8 h-8 text-neonGreen mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Driven Solutions</h3>
              <p className="text-gray-400">Making informed decisions based on analytics and metrics</p>
            </motion.div>

            <motion.div className="bg-[#0f2f0f] p-6 rounded-lg transition-all duration-300"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 255, 0, 0.5)" }}
            viewport={{ once: false, amount: 0.2 }}>
              <Monitor className="w-8 h-8 text-neonGreen mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dynamic Development Approach</h3>
              <p className="text-gray-400">Adapting to new technologies and methodologies</p>
            </motion.div>

            <motion.div className="bg-[#0f2f0f] p-6 rounded-lg transition-all duration-300"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 255, 0, 0.5)" }}
            viewport={{ once: false, amount: 0.2 }}>
              <Shield className="w-8 h-8 text-neonGreen mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Focus</h3>
              <p className="text-gray-400">Ensuring robust security in all solutions</p>
            </motion.div>
          </div>
        </section>*/}
      </div>
      <FeatureGrid />
    </section>
  );
};

export default About;