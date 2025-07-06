import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "Traveling Website",
      description: "Embark on unforgettable journeys with our cutting-edge Travel Platform. Seamlessly blending convenience with adventure, our site offers more than just bookings-it crafts exceptional experiences. Every feature is designed to inspire your wanderlust and simplify your travels. Whether it's flights, accommodations, or unique activities, we ensure that each journey is smooth and memorable. Welcome to the future of travel exploration.",
      image: "travelweb.jpg",
      category: "Web",
      stack: ["React", "Tailwind CSS", "Javascript"],
      link: ["https://github.com/keshariT99/TravelWeb"],
      demo: ["https://travel-bug-web.vercel.app"],
      
    },
    {
      title: "Solar Boat E-commerce website",
      description: "Set sail into a sustainable future with our Solar Boat E-Commerce Platform. Harnessing the power of the sun, we offer a range of eco-friendly, solar-powered boats designed for adventure, relaxation, and efficiency. Our platform combines cutting-edge technology with the elegance of sustainable boating, providing everything from electric motors to solar panels, accessories, and more. Navigate toward a greener tomorrow with our solar-powered solutions.",
      image: "solar.jpg",
      category: "Web",
      stack: ["HTML", "CSS", "Javascript"],
      link: ["https://github.com/keshariT99/SolarBoat_webApplication"],
      demo: ["https://solar-boat-web-application.vercel.app/"]
    },
    {
      title: "Animated Loging Form",
      description: "Experience a seamless and engaging entry with our Animated Login Form. Designed with modern aesthetics and smooth transitions, this form enhances user interaction while maintaining simplicity and functionality. The animations bring a dynamic touch, creating a more enjoyable user experience while ensuring security and efficiency. Say goodbye to static forms and step into a new era of login with style and ease.",
      image: "login.png",
      category: "Web",
      stack: ["HTML", "CSS"],
      link: ["https://github.com/keshariT99/Animated_loginForm"],
      demo: ["https://animated-login-form-weld.vercel.app"]
    },
    {
      title: "Pizza Delivery Application",
      description: "Indulge in the ultimate pizza experience with our Pizza Delivery Application. Fast, easy, and delicious-order your favorite pizzas from a wide variety of options, all from the comfort of your home. With an attractive user experience, our app makes ordering as fun as enjoying your pizza. It brings the pizzeria to your doorstep with real-time order tracking, personalized recommendations, and seamless payment options.",
      image: "pizzadelivery.jpg",
      category: "UI/UX",
      stack: ["Figma"],
      link: ["https://www.figma.com/design/hdgEVNIw2QLSeTdCDtMKdL/mobileApp?node-id=0-1&t=efiDRrO1lSAixBro-1"],
      demo: ["https://drive.google.com/file/d/1FXiKO40fiQZ38796EB3K_8msJLDCOMVm/view?usp=sharing"]
    },
    {
      title: "Home Construction Application",
      description: "A Home Construction Application is an all-in-one platform designed to simplify the homebuilding process for homeowners, contractors, and project managers. It offers a user-friendly interface for managing key elements of construction projects, making it easier to track progress, budgets, and tasks.",
      image: "construction.jpg",
      category: "UI/UX",
      stack: ["Figma"],
      link: ["https://www.figma.com/design/y9BBvLy0jXkp9BJpgz4Sai/MobileApp?node-id=0-1&t=cyMD8DvPfZq2005m-1"],
      demo: ["https://drive.google.com/file/d/1PvI3ATiSFCZOmkYGHkgshq19IlM5478V/view?usp=sharing"]
    },
    {
      title: "Clothing Brand Application",
      description: "a modern and stylish online shopping platform designed for women aged 18–35. It offers a seamless browsing and buying experience with features like a welcoming homepage, curated product categories, new arrivals carousel, detailed product pages, and an easy-to-use shopping cart. With soft colors, elegant typography, and mobile-friendly design, this makes fashion shopping effortless and enjoyable.",
      image: "clothingweb.JPG",
      category: "UI/UX",
      stack: ["Figma"],
      link: ["https://www.figma.com/design/fX4CMNdvyDCpdlu2FKY0cn/Fashion-Brand?node-id=0-1&t=MM3scR7seZWEMXBh-1"],
      demo: ["https://www.figma.com/proto/fX4CMNdvyDCpdlu2FKY0cn/Fashion-Brand?node-id=0-1&t=MM3scR7seZWEMXBh-1 "],
      caseStudy: "/casestudy/traveling-website"
    },
  
    {
      title: "Job Search platform Application",
      description: "A Job Search Platform Application is designed to help users easily find and apply for jobs. It features a clean and responsive home page and search results page, available in both light and dark modes. The interface allows users to browse job listings, filter results, and view key job details to support a smooth job-hunting experience.",
      image: "jobSearch.JPG",
      category: "UI/UX",
      stack: ["Figma"],
      link: ["https://www.figma.com/design/QNct5YNl53BKCqf1jShus7/Mobile-app?node-id=0-1&t=cQe7VfrOH4LVWLGP-1"],
      demo: [""]
    },

    {
      title: "Healthcare Booking Application",
      description: "A Healthcare Booking Application is a user-friendly platform that streamlines the process of finding and booking medical appointments. It includes essential features like a welcome screen, login, home dashboard, doctor search and filter, detailed doctor profiles, and easy appointment booking — making healthcare access more convenient for patients.",
      image: "booking.jpg",
      category: "UI/UX",
      stack: ["Figma"],
      link: ["https://www.figma.com/design/QNct5YNl53BKCqf1jShus7/Mobile-app?node-id=66-170&t=cQe7VfrOH4LVWLGP-1"],
      demo: [""]
    },
  ];

  const filters = ['All', 'Web', 'UI/UX', 'Case Study'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);


    const fadeInLeft = {
      hidden: { opacity: 0, x: -50 }, // Start from the left with reduced opacity
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7 }, // Adjust the duration as needed
      },
    }

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
      <div className='text-center'>
          <motion.h2 className=" text-6xl font-bold  bg-gradient-to-r from-blue-400 via-cyan-300 to-gray-300 inline-block text-transparent bg-clip-text mb-16"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}>Projects
          </motion.h2>
        </div>  
        
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeFilter === filter
                  ? 'bg-[#4ADFFF] text-black'
                  : 'bg-[#0f0f0f] text-gray-400 hover:bg-[#1a1a1a]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;