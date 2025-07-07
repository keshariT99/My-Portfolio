// App.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
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
import FashionBrand from './components/CaseStudy/FashionBrand';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
       {location.pathname !== "/casestudy/fashion-web" && <Navbar />}

      <ScrollToTop />
      
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
          <Route path="/casestudy/fashion-web" element={<FashionBrand />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
