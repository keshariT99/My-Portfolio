import { motion } from "framer-motion"

const SkillCategory = ({ title, skills }: { title: string; skills: Array<{ name: string; level: string }> }) => (
  <div className=" p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-4 text-[#00E7FF]">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#00E7FF] rounded-full"></div>
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-gray-400">({skill.level})</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = {
    frontend: [
      { name: 'HTML/CSS', level: 'Experienced' },
      { name: 'JavaScript', level: 'Experienced' },
      { name: 'React', level: 'Experienced' },
      { name: 'TypeScript', level: 'Basic' },
    ],

    backend: [
      { name: 'Node.js', level: 'Experienced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Experienced' },
      { name: 'Java', level: 'Intermediate' },
    ],

    app: [
     /* { name: 'React Native', level: 'Intermediate' },*/
      { name: 'Android (Java)', level: 'Intermediate' },
    ],

    database: [
      {name: 'SQL', level: 'Experienced'},
      {name: 'MongoDB', level: 'Experienced'},
    ],
    
    uiux: [
      {name: 'Figma', level: 'Experienced'},
      
    ],

    api: [
      {name: 'RESTful APIs', level: 'Experienced'},
      {name: 'Postman', level: 'Experienced'},
    ],

  };

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
    <section id="skills" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className='text-center'>
          <motion.h2 className=" text-6xl font-bold  bg-gradient-to-r from-blue-400 via-cyan-300 to-gray-300 inline-block text-transparent bg-clip-text mb-16"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}>My Skills
          </motion.h2>
        </div>  
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto "
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}>
            <div className="bg-blue-400/10 rounded-lg p-6 w-80 hover:bg-black hover:border hover:border-cyan-800  hover:shadow-lg ">
              <SkillCategory title="Frontend Development" skills={skillCategories.frontend} />
            </div>
            <div className="bg-blue-400/10  rounded-lg p-6 w-80 hover:bg-black hover:border hover:border-cyan-800  hover:shadow-lg hover-bg-black ">
              <SkillCategory title="Backend Development" skills={skillCategories.backend} />
            </div>
            <div className="bg-blue-400/10  rounded-lg p-6 w-80 hover:bg-black hover:border hover:border-cyan-800  hover:shadow-lg ">
              <SkillCategory title="UI/UX " skills={skillCategories.uiux} />
            </div>
            <div className="bg-blue-400/10  rounded-lg p-6 w-80 hover:bg-black hover:border hover:border-cyan-800  hover:shadow-lg ">
              <SkillCategory title="App Development " skills={skillCategories.app} />
            </div>
            <div className="bg-blue-400/10  rounded-lg p-6 w-80 hover:bg-black hover:border hover:border-cyan-800  hover:shadow-lg ">
              <SkillCategory title="Database Development" skills={skillCategories.database} />
            </div>
            <div className="bg-blue-400/10  rounded-lg p-6 w-80 hover:bg-black hover:border hover:border-cyan-800  hover:shadow-lg ">
              <SkillCategory title="API Development" skills={skillCategories.api} />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;