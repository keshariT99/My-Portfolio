//import React from 'react';
import { motion } from "framer-motion"
import { FeatureCard } from './FeatureCard';
import { features } from '../data/features';

export function FeatureGrid() {

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 }, // Start from the left with reduced opacity
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7 }, // Adjust the duration as needed
        },
      }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
      
      {features.map((feature) => (
        <motion.div
        key={feature.title} // Add a unique key for each feature
        className="bg-[#0F2433] p-6 rounded-lg transition-all duration-300"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(127, 217, 232, 0.5)" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <FeatureCard feature={feature} />
      </motion.div>
      ))}
      
    </div>
  );
}