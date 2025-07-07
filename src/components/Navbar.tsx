//import React from 'react';
import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const location = useLocation();
  

useEffect(() => {
  const sections = document.querySelectorAll("section");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4, // better detection
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));

  // ✅ Fix: When returning to home page, recheck which section is in view
  if (location.pathname === "/") {
    const handleInitialHighlight = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(section.id);
        }
      });
    };

    setTimeout(() => {
      handleInitialHighlight();
    }, 200); // Give time for layout/rendering
  }

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, [location.pathname]);
  

  return (
    <nav className="fixed w-full bg-[#0a0a0a]/80 backdrop-blur-sm z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to='/' className="flex items-center gap-2">
          <User className="w-8 h-8 text-[#00E7FF]" />
          <span className="text-xl font-bold">Portfolio</span >
        </Link>

        <div className="hidden md:flex items-center gap-8">
          
          <a href='#about' className={`hover:text-[#00E7FF] transition-colors ${
              activeSection === "about"
                ? "border-b-2 border-[#00E7FF]"
                : "border-b-2 border-transparent"
            }`}
          >
            About Me
          </a>
  
          
          <a
            href="#skills"
            className={`hover:text-[#00E7FF] transition-colors ${
              activeSection === "skills"
                ? "border-b-2 border-[#00E7FF]"
                : "border-b-2 border-transparent"
            }`}
          >
            Skills
          </a>
          <a
            href="#services"
            className={`hover:text-[#00E7FF] transition-colors ${
              activeSection === "services"
                ? "border-b-2 border-[#00E7FF]"
                : "border-b-2 border-transparent"
            }`}
          >
            Services
          </a>
          <a
            href="#projects"
            className={`hover:text-[#00E7FF] transition-colors ${
              activeSection === "projects"
                ? "border-b-2 border-[#00E7FF]"
                : "border-b-2 border-transparent"
            }`}
          >
            Projects
          </a>
          <a
            href="#courses"
            className={`hover:text-[#00E7FF] transition-colors ${
              activeSection === "courses"
                ? "border-b-2 border-[#00E7FF]"
                : "border-b-2 border-transparent"
            }`}
          >
            Courses
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/keshari-thennakoon-b2b91a1a5"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/keshariT99"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <SiGithub className="w-5 h-5" />
            </a>
          </div>
          <a href='#contact'>
            <button className="bg-[#00E7FF] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#4ADEDC] transition-colors">
              Hire me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
