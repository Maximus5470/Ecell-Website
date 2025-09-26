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

  // Custom smooth scroll function for better control
  const smoothScrollToElement = (element: HTMLElement) => {
    const targetPosition = element.offsetTop - 80; // 80px offset from top for better visibility
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Slower duration (1.2 seconds)
    let start: number | null = null;

    // Ease-in-out cubic function for smoother animation
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

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
      
      // Scroll to the card with a delay to allow expansion animation to start
      setTimeout(() => {
        const cardElement = cardRefs.current[index];
        if (cardElement) {
          smoothScrollToElement(cardElement);
        }
      }, 400);
      
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 ${expandedIndex !== null ? 'pb-32' : ''}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
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
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 ${expandedIndex !== null ? 'mb-96' : ''}`}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`transition-all transform-gpu ${
                expandedIndex !== null
                  ? expandedIndex === index
                    ? 'duration-800 ease-out z-30 relative mb-12'
                    : // Adjacent card (same row, different column) moves below expanded card
                      (expandedIndex % 2 !== index % 2 && Math.floor(expandedIndex / 2) === Math.floor(index / 2))
                      ? 'duration-800 ease-out translate-y-200 mb-12 z-40'
                      : // Cards in rows below the expanded card move down more
                        Math.floor(index / 2) > Math.floor(expandedIndex / 2)
                      ? `duration-800 ease-out translate-y-100 mb-12 ${
                          // Right column cards get higher z-index when left column cards are expanded
                          expandedIndex % 2 === 0 && index % 2 === 1 ? 'z-40' : 'z-20'
                        }`
                      : // Cards in rows above stay in place or move slightly
                        `duration-800 ease-out translate-y-0 mb-12 ${
                          // Right column cards get higher z-index when left column cards are expanded
                          expandedIndex % 2 === 0 && index % 2 === 1 ? 'z-40' : 'z-20'
                        }`
                  : hoveredIndex === null
                  ? 'duration-600 ease-out translate-y-0'
                  : hoveredIndex === index
                  ? 'duration-300 ease-out scale-105 -translate-y-2 z-10 relative'
                  : 'duration-300 ease-out scale-98 translate-y-2 opacity-90'
              } ${expandedIndex !== null ? 'pb-6' : ''}`}
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