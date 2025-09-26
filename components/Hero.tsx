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
      
      <section className="bg-gray-50 pt-24 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Navigating the{' '}
              <span className="block">digital landscape</span>
              <span className="block">for success</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Book a consultation
            </button>
          </div>

          {/* Right Content - Image with decorative elements */}
          <div className="relative flex justify-center items-center min-h-[600px]">
            {/* Main megaphone image */}
            <div className="relative z-10">
              <Image 
                src="/mic.png" 
                alt="Megaphone illustration" 
                width={600} 
                height={600} 
                className="object-contain"
              />
            </div>
            
            {/* Decorative elements - only using provided images */}
            
            {/* Share icon */}
            <div className="absolute top-10 right-12 z-20 float-1">
              <Image 
                src="/mic_extras/share.png" 
                alt="Share" 
                width={100} 
                height={100} 
              />
            </div>
            
            {/* Heart icon */}
            <div className="absolute top-0 right-35 z-20 float-2">
              <Image 
                src="/mic_extras/heart.png" 
                alt="Heart" 
                width={100} 
                height={100} 
              />
            </div>
            
            {/* Play button */}
            <div className="absolute top-40 right-8 z-20 float-3">
              <Image 
                src="/mic_extras/play.png" 
                alt="Play" 
                width={90} 
                height={90} 
              />
            </div>
            
            {/* Location pin */}
            <div className="absolute top-65 right-10 z-20 float-4">
              <Image 
                src="/mic_extras/location.png" 
                alt="Location" 
                width={90} 
                height={90} 
              />
            </div>
            
            {/* Large black star */}
            <div className="absolute top-90 left-10 z-20 rotate-star-slow">
              <Image 
                src="/mic_extras/bigstar.png" 
                alt="Big Star" 
                width={90} 
                height={90} 
              />
            </div>
            
            {/* Small black star */}
            <div className="absolute bottom-24 left-72 z-20 rotate-star-fast">
              <Image 
                src="/mic_extras/smallstar.png" 
                alt="Small Star" 
                width={24} 
                height={24} 
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
