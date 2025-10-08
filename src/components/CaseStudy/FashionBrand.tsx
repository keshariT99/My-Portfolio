import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUp, Smartphone, Users, ShoppingBag, TrendingUp, Check, Star, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FashionBrand = () => {
  const navigate = useNavigate();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Portfolio</span>
            </button>
            <div className="text-white font-bold text-xl">VIVEE Fashion</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text text-sm font-semibold mb-4 tracking-wider uppercase"
            >
              Fashion App Showcase
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              VIVEE <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                Fashion
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
            >
              A modern, intuitive fashion app designed for style-conscious women. 
              Discover trending outfits, personalized recommendations, and seamless shopping experience.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                View Demo
              </button>
              
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/landing.png"
                alt="VIVEE Fashion App Interface"
                className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700 "
                
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "18-35", label: "Target Age Group" },
              { icon: Smartphone, value: "Mobile", label: "First Design" },
              { icon: ShoppingBag, value: "Fashion", label: "E-commerce" },
              { icon: TrendingUp, value: "Modern", label: "UI/UX Design" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Project Overview</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Creating a seamless fashion experience that bridges the gap between style inspiration and effortless shopping.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                <img
                  src="/mobile.png"
                  alt="Fashion App Features"
                  className="relative z-10 w-full rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-3xl font-bold text-white mb-4">About the Project</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  VIVEE Fashion is a comprehensive mobile application designed specifically for fashion-conscious women aged 18-35. 
                  The project focuses on creating an intuitive, trendy, and personalized shopping experience that addresses common 
                  pain points in online fashion retail.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Key Features</h4>
                {[
                  "Personalized style recommendations",
                  "Advanced filtering and search",
                  "Seamless checkout process",
                  "Social shopping features",
                  "AR try-on experience"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Problems */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-3xl border border-red-500/20"
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                Challenges
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-red-300 mb-3">User Challenges</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Difficulty finding specific styles quickly</li>
                    <li>• Poor mobile shopping experience</li>
                    <li>• Lack of personalized recommendations</li>
                    <li>• Complicated checkout processes</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-red-300 mb-3">Business Challenges</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• High bounce rates and low conversion</li>
                    <li>• Weak online brand presence</li>
                    <li>• Low customer retention rates</li>
                    <li>• Limited customer insights</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/20 to-cyan-900/20 p-8 rounded-3xl border border-cyan-500/20"
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                Solutions
              </h3>
              
              <div className="space-y-4">
                {[
                  "Modern, visually appealing interface with rich product imagery",
                  "Intuitive navigation with smart filtering system",
                  "AI-powered recommendations and seasonal collections",
                  "Optimized mobile-first responsive design",
                  "One-click checkout with multiple payment options",
                  "Interactive wishlist and social sharing features",
                  "Quick product preview and AR try-on capabilities"
                ].map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Goals */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Research & Discovery</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Understanding user behavior and market needs to create a data-driven design solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User Research",
                description: "Understanding how women aged 18-35 shop for fashion online and their key frustrations.",
                icon: Users
              },
              {
                title: "Competitor Analysis",
                description: "Analyzing existing fashion platforms to identify feature gaps and opportunities.",
                icon: TrendingUp
              },
              {
                title: "Market Insights",
                description: "Researching design elements that increase trust and conversion in fashion e-commerce.",
                icon: Star
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <goal.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{goal.title}</h3>
                <p className="text-gray-300 leading-relaxed">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Image Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-3xl blur-3xl"></div>
            <img
              src="/fashion2.png"
              alt="VIVEE Fashion Final Design"
              className="relative z-10 w-full max-w-2xl mx-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default FashionBrand;