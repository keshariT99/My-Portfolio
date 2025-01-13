//import React from 'react';
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-xl mb-2">Hello, I'm <span className="text-[#00FFFF]">Keshari Thennakoon</span></h2>
          <h1 className="text-5xl font-bold mb-4">
            A <span className="text-[#00E7FF]">Fullstack</span><br />
            <span className="text-[#00E7FF]">
          <Typewriter
            options={{
              strings: ['Web Developer', 'UI/UX Designer'],
              autoStart: true,
              loop: true,
              delay: 75, // Controls the typing speed
              deleteSpeed: 50, // Controls the deleting speed
            }}
          />
        </span>
          </h1>
          <p className="text-gray-400 mb-8">
          I am a recent graduate in Information Technology from SLIIT, equipped with strong technical, analytical, and interpersonal skills. 
                I am eager to leverage my academic background and practical experience in a Software Design & Development. My passion for coding and problem-solving drives me to 
                contribute to impactful software projects, engage with clients, and refine my software development skills in a dynamic team environment!
          </p>
          <div className="flex gap-4">
            <button className="bg-[#00E7FF] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#4ADEDC] transition-colors">
              Learn more
            </button>
            <button className="border border-[#00E7FF] text-[#00E7FF] px-8 py-3 rounded-lg font-medium hover:bg-[#39FF14]/10 transition-colors">
              Get started
            </button>
          </div>
        </div>
        
        <div className="hidden md:block">
          {/* profile image here */}
          <div className="w-85 h-85 aspect-square rounded-full ">
          <img 
            src="/me1.png" 
            alt="profile photo" 
            className="object-cover rounded-full w-full h-full animate-moving-up-down" 
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;