'use client';

import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

// --- Color Palette ---
const COLOR_ACCENT_GREEN = '#B9FF66';
const COLOR_BLACK = '#000000';
const COLOR_HERO_BOX = '#E2E2E2';
const COLOR_PAGE_BG = '#F9FAFB';

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

export const Hero_Aboutus: React.FC = () => {
  const imageUrl = "/Aboutus_hero.png";

  // Force scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div 
      className="w-full min-h-screen flex flex-col"
      style={{ backgroundColor: COLOR_PAGE_BG }}
    >
      {/* Top spacing div to replace padding and maintain visual spacing */}
      <div className="h-4 sm:h-12 flex-shrink-0" />
      
      {/* Hero Box Container - Centered vertically in remaining space */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-16 pb-24 sm:pb-16">
        <motion.section
          className="w-[98%] md:w-[95%] lg:w-[90%] xl:w-[88%] min-h-[85vh] sm:h-[75vh] md:h-[80vh] flex items-center justify-center p-4 sm:p-6 md:p-12 rounded-2xl relative"
          style={{ backgroundColor: COLOR_HERO_BOX }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Inner Content Card */}
          <div className="bg-[#E2E2E2] w-full h-full flex items-center justify-center rounded-xl relative">
            
            {/* Content Container */}
            <motion.div
              className="container mx-auto px-4 md:px-12 py-8 sm:py-8 md:py-16 w-full flex items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-24 xl:gap-36 w-full">

                {/* Left Section - Image */}
                <motion.div
                  className="w-full lg:w-1/2 flex justify-center relative z-10 flex-shrink-0"
                  initial={{ x: -80, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                >
                  <motion.img
                    className="object-contain w-full h-auto max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
                    src={imageUrl}
                    alt="A vibrant illustration representing success and collaboration"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Right Section - Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 md:mb-6"
                    variants={itemVariants}
                    style={{ color: COLOR_BLACK }}
                  >
                    Innovate. Elevate. Succeed.
                  </motion.h1>
                  <motion.p
                    className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                    variants={itemVariants}
                  >
                    Unlock your potential with cutting-edge solutions. We empower visionary brands to craft stunning digital experiences that drive growth and inspire.
                  </motion.p>
                  <motion.div variants={itemVariants}>
                    <motion.button
                      className="relative overflow-hidden group text-black font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-xl transition-all duration-300 ease-in-out border-2 border-transparent"
                      style={{ backgroundColor: COLOR_ACCENT_GREEN }}
                      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(185,255,102,0.4)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 text-sm sm:text-base">Start Your Journey</span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Hero_Aboutus;