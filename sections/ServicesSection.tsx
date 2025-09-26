'use client'
// components/ServicesSection.tsx
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggleExpand = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (expandedIndex === index) {
      // Collapsing
      setExpandedIndex(null);
      setTimeout(() => setIsAnimating(false), 800);
    } else {
      // Expanding
      setExpandedIndex(index);
      
      // Scroll to the top of the card with a delay to allow expansion animation to start
      setTimeout(() => {
        const cardElement = cardRefs.current[index];
        if (cardElement) {
          // Scroll to the top of the card with smoother behavior
          const startPosition = window.pageYOffset;
           // Calculate position to ensure the entire card is visible
           const targetPosition = cardElement.offsetTop - 120; // Increased offset for better visibility
          const distance = targetPosition - startPosition;
          const duration = 1200; // Longer duration for slower, smoother scrolling
          
          let start: number | null = null;
          
          function step(timestamp: number) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function for smoother motion
            const easeInOutCubic = percentage < 0.5
              ? 4 * percentage * percentage * percentage
              : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
            
            window.scrollTo({
              top: startPosition + distance * easeInOutCubic,
              behavior: 'auto' // We're manually controlling the animation
            });
            
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          }
          
          window.requestAnimationFrame(step);
        }
      }, 250); // Increased delay for better timing with expansion animation
      
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <section
      id="services"
      className={`w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 ${
        expandedIndex !== null ? 'pb-64 pt-32' : 'pb-32'
      } transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-46 ${expandedIndex !== null ? 'mt-8' : ''}  p-6  relative z-50`}>
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            <h2 className="text-3xl lg:text-4xl font-medium text-black mb-6 lg:mb-0">
              <span className="bg-[#B9FF66] px-1 py-0.5 rounded">Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${expandedIndex !== null && expandedIndex >= servicesData.length - 2 ? 'mb-96' : expandedIndex !== null ? 'mb-80' : ''}`}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`transition-all transform-gpu ${
                expandedIndex !== null
                  ? expandedIndex === index
                    ? 'duration-800 ease-out z-50 relative mb-24 mt-24' // Increased bottom margin and added top margin for expanded card
                    : // Adjacent card (same row, different column) moves below expanded card
                      (expandedIndex % 2 !== index % 2 && Math.floor(expandedIndex / 2) === Math.floor(index / 2))
                      ? 'duration-800 ease-out translate-y-[250px] mb-20 z-40' // Increased margin for adjacent cards
                      : // Cards in rows below the expanded card move down more
                        Math.floor(index / 2) > Math.floor(expandedIndex / 2)
                      ? `duration-800 ease-out translate-y-[300px] ${
                          // Bottom row cards get extra margin when they're below an expanded card
                          index >= servicesData.length - 2 ? 'mb-32' : 'mb-20'
                        } ${
                          // Right column cards get higher z-index when left column cards are expanded
                          expandedIndex % 2 === 0 && index % 2 === 1 ? 'z-40' : 'z-20'
                        }`
                      : // Cards in rows above stay in place or move slightly
                        `duration-800 ease-out translate-y-[-180px] mb-20 ${
                          // Right column cards get higher z-index when left column cards are expanded
                          expandedIndex % 2 === 0 && index % 2 === 1 ? 'z-40' : 'z-20'
                        }`
                  : hoveredIndex === null
                  ? 'duration-600 ease-out translate-y-0 mb-8'
                  : hoveredIndex === index
                  ? 'duration-300 ease-out scale-105 -translate-y-2 z-10 relative mb-8'
                  : 'duration-300 ease-out scale-98 translate-y-2 opacity-90 mb-8'
              } ${expandedIndex !== null ? 'pb-12' : ''}`}
              style={{
                transformOrigin: 'center center'
              }}
              onMouseEnter={() => expandedIndex === null && setHoveredIndex(index)}
              onMouseLeave={() => expandedIndex === null && setHoveredIndex(null)}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                isExpanded={expandedIndex === index}
                onToggleExpand={() => handleToggleExpand(index)}
                cardPosition={index % 2 === 0 ? 'left' : 'right'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}