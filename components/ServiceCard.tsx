import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

// Service styling configuration
const serviceStyles: Record<string, {
  cardBg: string;
  titleBg: string;
  textColor: string;
}> = {
  'Search engine optimization': {
    cardBg: 'bg-gray-100 text-black',
    titleBg: 'bg-[#B9FF66] text-black',
    textColor: 'text-black'
  },
  'Pay-per-click advertising': {
    cardBg: 'bg-[#B9FF66] text-black',
    titleBg: 'bg-white text-black',
    textColor: 'text-black'
  },
  'Social Media Marketing': {
    cardBg: 'bg-[#191A23] text-white',
    titleBg: 'bg-white text-black',
    textColor: 'text-white'
  },
  'Email Marketing': {
    cardBg: 'bg-gray-100 text-black',
    titleBg: 'bg-[#B9FF66] text-black',
    textColor: 'text-black'
  },
  'Content Creation': {
    cardBg: 'bg-[#B9FF66] text-black',
    titleBg: 'bg-white text-black',
    textColor: 'text-black'
  },
  'Analytics and Tracking': {
    cardBg: 'bg-[#191A23] text-white',
    titleBg: 'bg-[#B9FF66] text-black',
    textColor: 'text-white'
  }
};

// Default styling for fallback
const defaultStyle = {
  cardBg: 'bg-gray-100 text-black',
  titleBg: 'bg-[#191A23] text-white',
  textColor: 'text-black'
};

// Arrow icon component
const ArrowIcon = ({ isDarkTheme }: { isDarkTheme: boolean }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill={isDarkTheme ? "white" : "#292929"} />
    <path 
      d="M8 16L16 8M16 8L10 8M16 8L16 14" 
      stroke={isDarkTheme ? "black" : "#B9FF66"} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServiceCard({ title, description, icon }: ServiceCardProps): React.JSX.Element {
  const styles = serviceStyles[title] || defaultStyle;
  const isDarkTheme = title === 'Social Media Marketing' || title === 'Analytics and Tracking';

  // Function to render title with proper line breaks and individual span backgrounds
  const renderTitle = () => {
    const baseClasses = "text-xl sm:text-2xl lg:text-3xl font-bold px-2 py-0.5 rounded leading-tight";
    const titleClasses = `${baseClasses} ${styles.titleBg}`;
    
    switch (title) {
      case 'Search engine optimization':
        return (
          <h3 className="mb-6 sm:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>Search engine</span><br />
            <span className={titleClasses}>optimization</span>
          </h3>
        );
      case 'Pay-per-click advertising':
        return (
          <h3 className="mb-6 sm:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>Pay-per-click</span><br />
            <span className={titleClasses}>advertising</span>
          </h3>
        );
      case 'Social Media Marketing':
        return (
          <h3 className="mb-6 sm:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>Social Media</span><br />
            <span className={titleClasses}>Marketing</span>
          </h3>
        );
      case 'Analytics and Tracking':
        return (
          <h3 className="mb-6 sm:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>Analytics and</span><br />
            <span className={titleClasses}>Tracking</span>
          </h3>
        );
      default:
        // For other titles, use the original single span approach
        return (
          <h3 className="mb-6 sm:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>{title}</span>
          </h3>
        );
    }
  };

  return (
    <div
      className={`relative p-6 sm:p-8 rounded-[45px] min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col justify-between transition-colors duration-200 ${styles.cardBg} overflow-hidden`}
      style={{
        border: '1px solid #191A23',
        borderBottomWidth: '8px',
        borderBottomColor: '#191A23'
      }}
    >
      {/* Illustration */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 opacity-70">
        <Image 
          src={icon} 
          alt={`${title} illustration`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {renderTitle()}
        </div>
        
        <div className="mt-auto">
          <a
            href="#"
            className={`inline-flex items-center text-base sm:text-lg font-medium ${styles.textColor} group transition-transform duration-200 hover:translate-x-1`}
          >
            <span className="mr-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <ArrowIcon isDarkTheme={isDarkTheme} />
            </span>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}