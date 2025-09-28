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
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Get the last timeline item
      const timelineItems = timelineElement.querySelectorAll('.timeline-item');
      const lastItem = timelineItems[timelineItems.length - 1];
      
      if (!lastItem) return;
      
      const lastItemRect = lastItem.getBoundingClientRect();
      const timelineTop = rect.top;
      
      // Calculate progress based on the last item's position
      // Line should be fully green when the last item reaches the middle of the screen
      const targetPosition = windowHeight * 0.5; // Middle of screen
      const totalDistance = timelineTop - targetPosition + lastItemRect.top - timelineTop;
      const currentDistance = timelineTop - targetPosition;
      
      const progress = Math.max(0, Math.min(1, -currentDistance / totalDistance));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-lime-500 font-bold text-xl mb-3">Our Journey</h2>
        <p className="text-gray-700 mb-10">
          An illustrated timeline of our major milestones, innovation, and industry leadership over the years.
        </p>
        <div className="relative" ref={timelineRef}>
          {/* Central timeline line - gray background */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Central timeline line - green progress overlay */}
          <div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-lime-500 transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>
          
          {timelineData.map((item, i) => {
            const isLeft = i % 2 === 1; // Odd indexes (1, 3, 5...) go left
            
            return (
              <div key={i} className="relative flex items-center mb-16 last:mb-0 timeline-item">
                {/* Mobile layout - always show card below year */}
                <div className="md:hidden w-full">
                  <div className="flex flex-col items-center mb-4">
                    <span className="bg-lime-500 rounded-full h-6 w-6 flex items-center justify-center mb-2 border-4 border-white relative z-10"></span>
                    <span className="text-2xl font-bold text-gray-800">{item.year}</span>
                  </div>
                  <div className="bg-gray-900 text-white rounded-xl shadow-lg px-7 py-6">
                    <div className="flex items-center mb-2">
                      <span className="inline-block w-4 h-4 bg-lime-500 rounded mr-2 flex-shrink-0"></span>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
                      {item.points.map((point, j) => <li key={j}>{point}</li>)}
                    </ul>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex w-full items-center">
                  {/* Left side content */}
                  <div className="w-2/5 pr-8">
                    {isLeft && (
                      <div className="bg-gray-900 text-white rounded-xl shadow-lg px-7 py-6">
                        <div className="flex items-center mb-2">
                          <span className="inline-block w-4 h-4 bg-lime-500 rounded mr-2 flex-shrink-0"></span>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
                          {item.points.map((point, j) => <li key={j}>{point}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Center timeline dot and year */}
                  <div className="w-1/5 flex flex-col items-center relative z-10">
                    <span className="bg-lime-500 rounded-full h-6 w-6 flex items-center justify-center mb-2 border-4 border-white"></span>
                    <span className="text-2xl font-bold text-gray-800">{item.year}</span>
                  </div>

                  {/* Right side content */}
                  <div className="w-2/5 pl-8">
                    {!isLeft && (
                      <div className="bg-gray-900 text-white rounded-xl shadow-lg px-7 py-6">
                        <div className="flex items-center mb-2">
                          <span className="inline-block w-4 h-4 bg-lime-500 rounded mr-2 flex-shrink-0"></span>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
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
    </section>
  );
};

export default Timeline;