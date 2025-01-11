import { motion } from 'framer-motion';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = [
    {
      title: "Introduction to UI/UX Design",
      description:
        "I have successfully completed the 'Certificate in Introduction to UI/UX Design' course on the 'Alison' online course platform.",
      image: "ux.JPG",
    },
    {
      title: "Software Testing",
      description:
        "I have successfully completed the 'Diploma in Software Testing' course on the 'Alison' online course platform.",
      image: "testing.png",
    },
    {
      title: "Introduction to API Testing",
      description:
        "I have successfully completed the 'Certificate in Introduction to API Testing' course on the 'Great Learning' online course platform.",
      image: "api.png",
    },
    {
      title: "Basic of Machine Learning",
      description:
        "I have successfully completed the 'Certificate in Basic of Machine Learning' course on the 'Great Learning' online course platform.",
      image: "ml.png",
    },
    
  ];

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 }, // Start from the left with reduced opacity
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 }, // Adjust the duration as needed
    },
  };

  return (
    <section id="courses" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-gray-300 inline-block text-transparent bg-clip-text mb-16"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            Courses
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
