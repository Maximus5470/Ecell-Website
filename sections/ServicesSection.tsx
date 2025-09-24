'use client'
// components/ServicesSection.tsx
import React, { useState } from 'react';
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

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 transition-all duration-700 ease-in-out">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out transform-gpu ${
                hoveredIndex === null
                  ? 'scale-100 translate-y-0'
                  : hoveredIndex === index
                  ? 'scale-110 -translate-y-4 z-10 relative'
                  : 'scale-95 translate-y-8 opacity-80'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}