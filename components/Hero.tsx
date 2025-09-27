"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <style jsx>{`
        @keyframes float1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          15% { transform: translate(3px, -2px) rotate(1deg); }
          35% { transform: translate(-2px, 4px) rotate(-0.5deg); }
          55% { transform: translate(4px, 1px) rotate(1.5deg); }
          75% { transform: translate(-3px, -3px) rotate(-1deg); }
          90% { transform: translate(2px, 3px) rotate(0.5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes float2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-4px, 2px) rotate(-1deg); }
          40% { transform: translate(2px, -4px) rotate(1deg); }
          60% { transform: translate(4px, 3px) rotate(-0.5deg); }
          80% { transform: translate(-4px, -1px) rotate(1.5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes float3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          10% { transform: translate(2px, 3px) rotate(0.5deg); }
          30% { transform: translate(-4px, -2px) rotate(-1deg); }
          50% { transform: translate(3px, -3px) rotate(1deg); }
          70% { transform: translate(-4px, 4px) rotate(-0.5deg); }
          85% { transform: translate(3px, 2px) rotate(1.5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes float4 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-2px, -3px) rotate(-1deg); }
          45% { transform: translate(4px, 2px) rotate(1deg); }
          65% { transform: translate(-3px, 4px) rotate(-0.5deg); }
          85% { transform: translate(1px, -4px) rotate(1.5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes rotateStar {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .float-1 { animation: float1 8s ease-in-out infinite; }
        .float-2 { animation: float2 7s ease-in-out infinite 1s; }
        .float-3 { animation: float3 9s ease-in-out infinite 2s; }
        .float-4 { animation: float4 6s ease-in-out infinite 0.5s; }
        .rotate-star-slow { animation: rotateStar 3s linear infinite; }
        .rotate-star-fast { animation: rotateStar 3s linear infinite; }
      `}</style>
      
      <section className="bg-gray-50 pt-26 sm:pt-24 md:pt-28 pb-4 sm:pb-8 md:pb-10 px-4 sm:px-8 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Navigating the{' '}
              <span className="block">digital landscape</span>
              <span className="block">for success</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-md md:max-w-lg mx-auto lg:mx-0">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            
            <button className="bg-gray-900 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base md:text-lg">
              Book a consultation
            </button>
          </div>

          {/* Right Content - Image with decorative elements */}
          <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] mt-8 md:mt-10 lg:mt-0">
            {/* Main megaphone image */}
            <div className="relative z-10">
              <Image 
                src="/mic.png" 
                alt="Megaphone illustration" 
                width={600} 
                height={600} 
                className="object-contain w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
              />
            </div>
            
            {/* Decorative elements - responsive positioning */}
            
            {/* Share icon */}
            <div className="absolute top-18 right-12 sm:top-8 sm:right-8 md:top-20 md:right-56 lg:top-10 lg:right-12 z-20 float-1">
              <Image 
                src="/mic_extras/share.png" 
                alt="Share" 
                width={100} 
                height={100} 
                className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px]"
              />
            </div>
            
            {/* Heart icon */}
            <div className="absolute top-10 right-24 sm:top-2 sm:right-28 md:top-0 md:right-72 lg:right-35 z-20 float-2">
              <Image 
                src="/mic_extras/heart.png" 
                alt="Heart" 
                width={100} 
                height={100} 
                className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px]"
              />
            </div>
            
            {/* Play button */}
            <div className="absolute top-32 right-12 sm:top-40 sm:right-6 md:top-44 md:right-46 lg:right-8 lg:top-40 z-20 float-3">
              <Image 
                src="/mic_extras/play.png" 
                alt="Play" 
                width={90} 
                height={90} 
                className="w-[35px] h-[35px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px]"
              />
            </div>
            
            {/* Location pin */}
            <div className="absolute top-48 right-10 sm:top-60 sm:right-6 md:top-64 md:right-50 lg:top-65 lg:right-10 z-20 float-4">
              <Image 
                src="/mic_extras/location.png" 
                alt="Location" 
                width={90} 
                height={90} 
                className="w-[35px] h-[35px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px]"
              />
            </div>
            
            {/* Large black star - hide on mobile, show on larger screens */}
            <div className="absolute top-54 left-4 sm:top-90 sm:left-6 md:top-72 md:left-50 lg:left-10 lg:top-90 z-20 rotate-star-slow">
              <Image 
                src="/mic_extras/bigstar.png" 
                alt="Big Star" 
                width={90} 
                height={90} 
                className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px]"
              />
            </div>
            
            {/* Small black star */}
            <div className="absolute bottom-20 left-40 sm:bottom-20 sm:left-56 md:bottom-28 md:left-90 lg:bottom-24 lg:left-72 z-20 rotate-star-fast">
              <Image 
                src="/mic_extras/smallstar.png" 
                alt="Small Star" 
                width={24} 
                height={24} 
                className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px]"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;