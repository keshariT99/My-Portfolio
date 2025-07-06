// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses';
import CaseStudy from './components/CaseStudy';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Stats />
                <About />
                <Skills />
                <Services />
                <Projects />
                <Courses />
                <Contact />
              </>
            }
          />
          <Route path="/casestudy/traveling-website" element={<CaseStudy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
