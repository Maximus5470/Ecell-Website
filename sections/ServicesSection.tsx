'use client'
// components/Section.tsx
import React, { useState, useRef } from 'react';
import ServiceCard from '../components/ServiceCard';

interface ServiceData {
  title: string;
  description: string;
  icon: string;
}

const servicesData: ServiceData[] = [
  {
    title: 'Search engine optimization',
    description: 'Improve your visibility on search engines and attract more organic traffic.',
    icon: '/Illustration1.png',
  },
  {
    title: 'Pay-per-click advertising',
    description: 'Drive immediate traffic and leads with targeted advertising campaigns.',
    icon: '/Illustration2.png',
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage with your audience and build brand awareness across social platforms.',
    icon: '/Illustration3.png',
  },
  {
    title: 'Email Marketing',
    description: 'Nurture leads and build customer loyalty with effective email campaigns.',
    icon: '/Illustration4.png',
  },
  {
    title: 'Content Creation',
    description: 'Develop compelling content that resonates with your audience and drives engagement.',
    icon: '/Illustration5.png',
  },
  {
    title: 'Analytics and Tracking',
    description: 'Gain insights into your marketing performance and optimize your strategies.',
    icon: '/Illustration6.png',
  },
];

export default function ServicesSection(): React.JSX.Element {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [originalScrollPosition, setOriginalScrollPosition] = useState<number>(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const smoothScrollTo = (targetPosition: number, duration: number = 600) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    
    if (Math.abs(distance) < 30) return; // Don't scroll if already close
    
    let start: number | null = null;
    
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // Smooth easing function
      const easeInOutCubic = percentage < 0.5
        ? 4 * percentage * percentage * percentage
        : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
      
      window.scrollTo({
        top: startPosition + distance * easeInOutCubic,
        behavior: 'auto'
      });
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
    
    window.requestAnimationFrame(step);
  };

  const handleToggleExpand = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Check if we're on mobile (less than lg breakpoint)
    const isMobile = window.innerWidth < 1024;
    
    if (expandedIndex === index) {
      // Collapsing
      setExpandedIndex(null);
      
      if (!isMobile) {
        // Only scroll on desktop - scroll back to original position after a brief delay
        setTimeout(() => {
          smoothScrollTo(originalScrollPosition, 700);
        }, 100);
      }
      
      setTimeout(() => setIsAnimating(false), 800);
    } else {
      if (!isMobile) {
        // Store original scroll position before expanding (desktop only)
        setOriginalScrollPosition(window.pageYOffset);
      }
      
      // Expanding
      setExpandedIndex(index);
      
      if (!isMobile) {
        // Only scroll on desktop - scroll to the fixed row position based on card index
        setTimeout(() => {
          const rowIndex = Math.floor(index / 2); // 0, 1, or 2 for our 3 rows
          const rowElement = rowRefs.current[rowIndex];
          
          if (rowElement) {
            const rowTop = rowElement.getBoundingClientRect().top + window.pageYOffset;
            const targetPosition = Math.max(0, rowTop);
            smoothScrollTo(targetPosition, 800);
          }
        }, 500); // Wait for expansion animation to start
      }
      
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slideIn 500ms ease-out 200ms forwards;
          opacity: 0;
          transform: translateY(12px);
        }
      `}</style>
      
      <section
        id="services"
        className={`w-full py-8 sm:py-16 px-2 sm:px-4 md:px-6 lg:px-8 bg-gray-50 ${
          expandedIndex !== null ? 'pb-16 sm:pb-32 pt-8 sm:pt-16' : 'pb-8 sm:pb-16'
        } transition-all duration-500`}
      >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-6 sm:mb-12 ${expandedIndex !== null ? 'mt-2 sm:mt-4' : ''} p-2 sm:p-4 relative`}>
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4 sm:mb-6 lg:mb-0">
              <span className="bg-[#B9FF66] px-1 py-0.5 rounded">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
          </div>
        </div>

        {/* Services Grid - Clean Implementation */}
        <div className="space-y-6">
          {/* Process cards in pairs for desktop, individually for mobile */}
          {Array.from({ length: Math.ceil(servicesData.length / 2) }, (_, rowIndex) => {
            const leftIndex = rowIndex * 2;
            const rightIndex = rowIndex * 2 + 1;
            const leftCard = servicesData[leftIndex];
            const rightCard = servicesData[rightIndex];
            
            const isLeftExpanded = expandedIndex === leftIndex;
            const isRightExpanded = rightCard && expandedIndex === rightIndex;
            const hasExpansion = isLeftExpanded || isRightExpanded;
            
            return (
              <div 
                key={rowIndex} 
                className="w-full"
                ref={(el) => {
                  rowRefs.current[rowIndex] = el;
                }}
              >
                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  {/* Main row */}
                  <div className="flex gap-8 mb-4">
                    {/* Left card */}
                    <div 
                      className={`transition-all duration-800 ease-out ${
                        isLeftExpanded ? 'w-full' : 'w-1/2'
                      } ${isRightExpanded ? 'hidden' : ''}`}
                      onMouseEnter={() => !hasExpansion && setHoveredIndex(leftIndex)}
                      onMouseLeave={() => !hasExpansion && setHoveredIndex(null)}
                    >
                      <div className={`transition-all duration-300 ease-out ${
                        !hasExpansion && hoveredIndex === leftIndex
                          ? 'scale-105 -translate-y-2'
                          : !hasExpansion && hoveredIndex !== null && hoveredIndex !== leftIndex
                          ? 'scale-98 translate-y-2 opacity-90'
                          : 'scale-100 translate-y-0'
                      }`}>
                        <ServiceCard
                          title={leftCard.title}
                          description={leftCard.description}
                          icon={leftCard.icon}
                          isExpanded={isLeftExpanded}
                          onToggleExpand={() => handleToggleExpand(leftIndex)}
                          cardPosition="left"
                        />
                      </div>
                    </div>
                    
                    {/* Right card */}
                    {rightCard && (
                      <div 
                        className={`transition-all duration-800 ease-out ${
                          isLeftExpanded ? 'hidden' : ''
                        }`}
                        style={{
                          width: isRightExpanded ? '100%' : '50%',
                          marginLeft: 'auto'
                        }}
                        onMouseEnter={() => !hasExpansion && setHoveredIndex(rightIndex)}
                        onMouseLeave={() => !hasExpansion && setHoveredIndex(null)}
                      >
                        <div 
                          className={`transition-all duration-300 ease-out ${
                            !hasExpansion && hoveredIndex === rightIndex
                              ? 'scale-105 -translate-y-2'
                              : !hasExpansion && hoveredIndex !== null && hoveredIndex !== rightIndex
                              ? 'scale-98 translate-y-2 opacity-90'
                              : 'scale-100 translate-y-0'
                          }`}
                        >
                          <ServiceCard
                            title={rightCard.title}
                            description={rightCard.description}
                            icon={rightCard.icon}
                            isExpanded={isRightExpanded}
                            onToggleExpand={() => handleToggleExpand(rightIndex)}
                            cardPosition="right"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Show collapsed sibling below expanded card */}
                  {hasExpansion && (
                    <div className="w-full mt-3">
                      <div className="w-1/2">
                        <div className="animate-slide-in">
                          {isLeftExpanded && rightCard && (
                            <div
                              onMouseEnter={() => setHoveredIndex(rightIndex)}
                              onMouseLeave={() => setHoveredIndex(null)}
                            >
                              <ServiceCard
                                title={rightCard.title}
                                description={rightCard.description}
                                icon={rightCard.icon}
                                isExpanded={false}
                                onToggleExpand={() => handleToggleExpand(rightIndex)}
                                cardPosition="right"
                              />
                            </div>
                          )}
                          {isRightExpanded && (
                            <div
                              onMouseEnter={() => setHoveredIndex(leftIndex)}
                              onMouseLeave={() => setHoveredIndex(null)}
                            >
                              <ServiceCard
                                title={leftCard.title}
                                description={leftCard.description}
                                icon={leftCard.icon}
                                isExpanded={false}
                                onToggleExpand={() => handleToggleExpand(leftIndex)}
                                cardPosition="left"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Mobile Layout - Simple stack */}
                <div className="lg:hidden space-y-6">
                  <div>
                    <ServiceCard
                      title={leftCard.title}
                      description={leftCard.description}
                      icon={leftCard.icon}
                      isExpanded={isLeftExpanded}
                      onToggleExpand={() => handleToggleExpand(leftIndex)}
                      cardPosition="left"
                    />
                  </div>
                  {rightCard && (
                    <div>
                      <ServiceCard
                        title={rightCard.title}
                        description={rightCard.description}
                        icon={rightCard.icon}
                        isExpanded={isRightExpanded}
                        onToggleExpand={() => handleToggleExpand(rightIndex)}
                        cardPosition="right"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </section>
    </>
  );
}