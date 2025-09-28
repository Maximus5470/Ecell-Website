"use client";

import React, { useState, useEffect, useRef } from "react";

const timelineData = [
  {
    year: "2019",
    title: "The Beginning",
    points: [
      "Founded and launched initial idea",
      "First version released",
      "Secured seed funding",
      "Initial team formed"
    ]
  },
  {
    year: "2021",
    title: "Industry Recognition",
    points: [
      "Won major industry award",
      "Expanded partnerships",
      "Featured in tech media",
      "Scaling up"
    ]
  },
  {
    year: "2023",
    title: "Innovation and Growth",
    points: [
      "New product launches",
      "Entered new markets",
      "Doubled in size",
      "Global expansion"
    ]
  },
  {
    year: "2024",
    title: "Leading the Future",
    points: [
      "Setting new industry standards",
      "Advanced R&D and innovation",
      "Expanding global presence",
      "Pioneering accessibility solutions"
    ]
  }
];

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const screenCenter = window.innerHeight / 2;
      
      // Calculate green line height: distance from timeline top to screen center
      const greenLineHeight = Math.max(0, 
        rect.top + rect.height <= screenCenter 
          ? rect.height 
          : Math.max(0, screenCenter - rect.top)
      );
      
      setScrollProgress(greenLineHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gray-50 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-12 p-2 sm:p-4 relative">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4 sm:mb-6 lg:mb-0">
              <span className="bg-[#B9FF66] px-1 py-0.5 rounded">Our Journey</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
              An illustrated timeline of our major milestones, innovation, and industry leadership over the years.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
        <div className="relative" ref={timelineRef}>
          {/* Central timeline line - gray background - visible on all screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Central timeline line - green progress overlay - visible on all screens */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#B9FF66] transition-all duration-200 ease-out top-0"
            style={{ 
              height: `${scrollProgress}px`,
              transformOrigin: 'top'
            }}
          ></div>
          
          {timelineData.map((item, i) => {
            const isLeft = i % 2 === 1; // Odd indexes (1, 3, 5...) go left
            
            return (
              <div key={i} className="relative flex items-center mb-20 last:mb-0 timeline-item">
                {/* Mobile layout - always show card below year */}
                <div className="md:hidden w-full">
                  <div className="flex flex-col items-center mb-6">
                    <span className="bg-[#B9FF66] rounded-full h-8 w-8 flex items-center justify-center mb-3 border-4 border-white relative z-10 shadow-lg"></span>
                    <span className="text-3xl font-bold text-gray-800">{item.year}</span>
                  </div>
                  <div className="bg-gray-900 text-white rounded-2xl shadow-lg px-10 py-10 min-h-[200px] w-full">
                    <div className="flex items-center mb-5">
                      <span className="inline-block w-6 h-6 bg-[#B9FF66] rounded mr-4 flex-shrink-0"></span>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-200 text-lg space-y-3 leading-relaxed">
                      {item.points.map((point, j) => <li key={j}>{point}</li>)}
                    </ul>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex w-full items-center">
                  {/* Left side content */}
                  <div className="w-1/2 pr-4">
                    {isLeft && (
                      <div className="bg-gray-900 text-white rounded-2xl shadow-lg px-10 py-10 min-h-[200px] w-full">
                        <div className="flex items-center mb-5">
                          <span className="inline-block w-6 h-6 bg-[#B9FF66] rounded mr-4 flex-shrink-0"></span>
                          <h3 className="text-2xl font-semibold">{item.title}</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-200 text-lg space-y-3 leading-relaxed">
                          {item.points.map((point, j) => <li key={j}>{point}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Center timeline dot and year */}
                  <div className="w-32 flex flex-col items-center relative z-10 flex-shrink-0">
                    <span className="bg-[#B9FF66] rounded-full h-8 w-8 flex items-center justify-center mb-3 border-4 border-white shadow-lg"></span>
                    <span className="text-3xl font-bold text-gray-800">{item.year}</span>
                  </div>

                  {/* Right side content */}
                  <div className="w-1/2 pl-4">
                    {!isLeft && (
                      <div className="bg-gray-900 text-white rounded-2xl shadow-lg px-10 py-10 min-h-[200px] w-full">
                        <div className="flex items-center mb-5">
                          <span className="inline-block w-6 h-6 bg-[#B9FF66] rounded mr-4 flex-shrink-0"></span>
                          <h3 className="text-2xl font-semibold">{item.title}</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-200 text-lg space-y-3 leading-relaxed">
                          {item.points.map((point, j) => <li key={j}>{point}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;