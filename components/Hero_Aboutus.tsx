
'use client'; 

import React from 'react';
import { motion, Variants } from 'framer-motion'; 

// --- Color Palette ---
const COLOR_ACCENT_GREEN = '#B9FF66'; 
const COLOR_BLACK = '#000000'; 
const COLOR_HERO_BOX = '#E2E2E2'; // The inner container color
const COLOR_PAGE_BG = '#F9FAFB'; 
const COLOR_WHITE = '#FFFFFF'; 

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

// ACTION: Changed from 'const' and 'export default' to 'export const' to fix the runtime error.
export const Hero_Aboutus: React.FC = () => {
  // Placeholder URL for the illustration image, matching the background color for blending
  const imageUrl = "/Aboutus_hero.png";

  return (
    // Outer div for page background
    <div className={`w-full min-h-screen flex flex-col items-center justify-center font-sans p-4 sm:p-6`} style={{ backgroundColor: COLOR_PAGE_BG }}>

        {/* Hero Box Container: THE GREY BOX - Now responsive in height and padding */}
        <motion.section 
            // HEIGHT CHANGE: h-auto min-h-[70vh] for small screens, fixed h-[85vh] for desktop
            className={`w-[98%] md:w-[95%] lg:w-[90%] xl:w-[88%] h-auto min-h-[70vh] lg:h-[85vh] flex items-center justify-center p-6 md:p-12 rounded-2xl overflow-hidden relative`} 
            style={{ backgroundColor: COLOR_HERO_BOX }} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
          
          {/* Inner Content Card (Grey background) */}
          <div 
            className="bg-[#E2E2E2] w-full h-full flex items-center justify-center rounded-xl overflow-hidden relative"
          > 
            
            {/* Content Container - Adjusted padding for mobile */}
            <motion.div 
                className="container mx-auto px-4 md:px-12 py-10 md:py-20 w-full" 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            > 
              {/* LAYOUT GAP CHANGE: Reduced gap for mobile (gap-12) */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-36"> 
                
                {/* Left Section - Image & Animation: This is the primary column wrapper */}
                <motion.div
                  className="w-full lg:w-1/2 flex justify-center relative z-10" 
                  initial={{ x: -80, opacity: 0, scale: 0.8 }} 
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                >
                  {/* Image element now acts as the animated, sized container (motion.img) */}
                  <motion.img 
                    // ACTION: Adjusted sizing for uniform stretching across breakpoints, made slightly larger for large screens
                    className="object-contain w-full h-auto relative 
                               max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-3xl" // Increased to xl:max-w-3xl for larger screens
                    src={imageUrl} 
                    alt="A vibrant illustration representing success and collaboration" 
                    
                    // Floating animation applied directly here
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
                    // Text size adjusted slightly on smallest mobile screens
                    className={`text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 md:mb-6`} 
                    variants={itemVariants} 
                    style={{ color: COLOR_BLACK }}
                  >
                    Innovate. Elevate. Succeed.
                  </motion.h1>
                  <motion.p
                    // Text size adjusted slightly and margin reduced on mobile
                    className="text-base sm:text-lg text-gray-700 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0" 
                    variants={itemVariants} 
                  >
                    Unlock your potential with cutting-edge solutions. We empower visionary brands to craft stunning digital experiences that drive growth and inspire.
                  </motion.p>
                  <motion.div
                    variants={itemVariants} 
                  >
                    <motion.button 
                      // Button padding reduced slightly for mobile
                      className={`relative overflow-hidden group text-black font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-xl transition-all duration-300 ease-in-out border-2 border-transparent`} 
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
  );
};

export default Hero_Aboutus;
