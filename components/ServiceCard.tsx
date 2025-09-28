import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  cardPosition?: 'left' | 'right';
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
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default function ServiceCard({ title, description, icon, isExpanded = false, onToggleExpand, cardPosition: _cardPosition = 'left' }: ServiceCardProps): React.JSX.Element {
  const styles = serviceStyles[title] || defaultStyle;
  const isDarkTheme = title === 'Social Media Marketing' || title === 'Analytics and Tracking';
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [showContent, setShowContent] = useState(isExpanded);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    if (isExpanded) {
      // When expanding, show content after card grows
      setIsCollapsing(false);
      const delay = isMobile ? 600 : 800;
      setTimeout(() => setShowContent(true), delay);
    } else {
      // When collapsing, hide content first
      setShowContent(false);
      setIsCollapsing(true);
      const delay = isMobile ? 400 : 600;
      setTimeout(() => setIsCollapsing(false), delay);
    }
  }, [isExpanded, isMobile]);

  const handleToggle = () => {
    if (onToggleExpand) onToggleExpand();
  };

  // Sample expanded content for each service
  const expandedContent = {
    'Search engine optimization': {
      details: 'Our comprehensive SEO strategy includes keyword research, on-page optimization, technical SEO audits, and link building campaigns to improve your search rankings.',
      features: ['Keyword Research & Analysis', 'On-Page SEO Optimization', 'Technical SEO Audits', 'Link Building Strategy', 'Content Optimization', 'Local SEO'],
      benefits: 'Increase organic traffic by up to 300% within 6 months with our proven SEO methodologies and data-driven approach.'
    },
    'Pay-per-click advertising': {
      details: 'Maximize your ROI with our data-driven PPC campaigns across Google Ads, Facebook, Instagram, and other major advertising platforms.',
      features: ['Campaign Strategy & Setup', 'Ad Copy Creation', 'Landing Page Optimization', 'Bid Management', 'A/B Testing', 'Performance Tracking'],
      benefits: 'Generate qualified leads with an average 250% return on ad spend through optimized campaigns and strategic targeting.'
    },
    'Social Media Marketing': {
      details: 'Build a strong social presence with engaging content, community management, and strategic social advertising across all major platforms.',
      features: ['Content Strategy & Creation', 'Community Management', 'Social Media Advertising', 'Influencer Partnerships', 'Analytics & Reporting', 'Brand Monitoring'],
      benefits: 'Increase brand awareness and engagement rates by up to 400% across all social platforms with consistent, quality content.'
    },
    'Email Marketing': {
      details: 'Create personalized email campaigns that convert subscribers into loyal customers with our advanced automation and segmentation tools.',
      features: ['Email Campaign Design', 'List Segmentation', 'Automated Workflows', 'Personalization', 'A/B Testing', 'Performance Analytics'],
      benefits: 'Achieve average open rates of 28% and click-through rates of 4.5% with our targeted and personalized email campaigns.'
    },
    'Content Creation': {
      details: 'Develop compelling, SEO-optimized content that resonates with your audience and drives meaningful engagement across all channels.',
      features: ['Blog Posts & Articles', 'Video Production', 'Graphic Design', 'Infographics', 'Case Studies', 'Social Media Content'],
      benefits: 'Increase website traffic by 200% and improve lead generation through high-quality, engaging content that converts.'
    },
    'Analytics and Tracking': {
      details: 'Gain deep insights into your marketing performance with advanced analytics, comprehensive reporting, and actionable recommendations.',
      features: ['Google Analytics Setup', 'Custom Dashboards', 'Conversion Tracking', 'Performance Reports', 'ROI Analysis', 'Competitor Analysis'],
      benefits: 'Make data-driven decisions that improve marketing ROI by an average of 180% through detailed insights and optimization.'
    }
  };

  const currentContent = expandedContent[title as keyof typeof expandedContent] || expandedContent['Search engine optimization'];

  // Function to render title with proper line breaks and individual span backgrounds
  const renderTitle = () => {
    const baseClasses = "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-1.5 sm:px-2 py-0.5 rounded leading-tight break-words";
    const titleClasses = `${baseClasses} ${styles.titleBg}`;
    
    switch (title) {
      case 'Search engine optimization':
        return (
          <h3 className="mb-3 sm:mb-6 md:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>Search engine</span><br />
            <span className={titleClasses}>optimization</span>
          </h3>
        );
      case 'Pay-per-click advertising':
        return (
          <h3 className="mb-3 sm:mb-6 md:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>Pay-per-click</span><br />
            <span className={titleClasses}>advertising</span>
          </h3>
        );
      case 'Social Media Marketing':
        return (
          <h3 className="mb-3 sm:mb-6 md:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>Social Media</span><br />
            <span className={titleClasses}>Marketing</span>
          </h3>
        );
      case 'Analytics and Tracking':
        return (
          <h3 className="mb-3 sm:mb-6 md:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>Analytics and</span><br />
            <span className={titleClasses}>Tracking</span>
          </h3>
        );
      default:
        // For other titles, use the original single span approach with mobile-friendly wrapping
        return (
          <h3 className="mb-3 sm:mb-6 md:mb-8" style={{ fontFamily: 'Inter' }}>
            <span className={titleClasses}>{title}</span>
          </h3>
        );
    }
  };

  return (
    <div
      onClick={handleToggle}
      className={`relative rounded-[20px] sm:rounded-[45px] flex flex-col justify-between ${styles.cardBg} transition-all duration-800 ease-out cursor-pointer ${
        isExpanded 
          ? 'p-3 sm:p-6 md:p-8 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] w-full shadow-2xl border-2 overflow-visible'
          : 'p-3 sm:p-6 md:p-8 min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[350px] w-full shadow-md overflow-hidden hover:shadow-lg'
      }`}
      style={{
        border: '1px solid #191A23',
        borderBottomWidth: isMobile ? '4px' : '8px',
        borderBottomColor: '#191A23',
        transformOrigin: 'top center',
        margin: isMobile ? '0.2rem' : '0.4rem'
      }}
    >
      {/* Illustration */}
      <div className={`absolute right-1 sm:right-2 transition-all pointer-events-none ${
        isExpanded 
          ? 'duration-1000 ease-out top-3 sm:top-6 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-40 sm:opacity-50' 
          : 'duration-800 ease-in top-1/2 transform -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 opacity-70 sm:opacity-80'
      }`}>
        <Image 
          src={icon} 
          alt={`${title} illustration`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, (max-width: 1024px) 208px, 320px"
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col justify-between h-full ${
        isExpanded ? 'pr-32 sm:pr-48 md:pr-72 lg:pr-88' : 'pr-28 sm:pr-40 md:pr-56 lg:pr-76'
      } transition-all duration-800`}>
        <div>
          {renderTitle()}
          
          {/* Basic Description */}
          <p className={`text-sm sm:text-base ${styles.textColor} mb-4 sm:mb-6 leading-relaxed break-words`}>
            {description}
          </p>
          
          {/* Expanded Content */}
          {showContent && (
            <div className={`mt-3 sm:mt-6 space-y-3 sm:space-y-6 ${styles.textColor} transition-all duration-500 ${
              isCollapsing 
                ? 'opacity-0 translate-y-4 pointer-events-none' 
                : 'opacity-100 translate-y-0'
            }`}>
              <div className={`transform transition-all duration-400 ${
                showContent && !isCollapsing 
                  ? 'delay-100 translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}>
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Overview</h4>
                <p className="leading-relaxed text-sm sm:text-base pr-2 sm:pr-4 break-words">{currentContent.details}</p>
              </div>
              
              <div className={`transform transition-all duration-400 ${
                showContent && !isCollapsing 
                  ? 'delay-200 translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}>
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">What We Include</h4>
                <ul className="grid grid-cols-1 gap-1.5 sm:gap-2 pr-2 sm:pr-4">
                  {currentContent.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start sm:items-center transform transition-all duration-300 ${
                      showContent && !isCollapsing 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-2 opacity-0'
                    }`} style={{
                      transitionDelay: showContent && !isCollapsing ? `${300 + idx * 50}ms` : '0ms'
                    }}>
                      <span className="mr-2 text-[#B9FF66] flex-shrink-0 mt-0.5 sm:mt-0">✓</span>
                      <span className="text-xs sm:text-sm break-words leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`p-3 sm:p-4 rounded-lg mr-2 sm:mr-4 transform transition-all duration-400 ${
                showContent && !isCollapsing 
                  ? 'delay-500 translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              } ${isDarkTheme ? 'bg-white/10' : 'bg-black/5'}`}>
                <h4 className="text-base sm:text-lg font-semibold mb-2">Expected Results</h4>
                <p className="leading-relaxed text-xs sm:text-sm break-words">{currentContent.benefits}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-3 sm:pt-6">
          <div className={`inline-flex items-center text-sm sm:text-base md:text-lg font-medium ${styles.textColor} group transition-all duration-300 hover:translate-x-1 cursor-pointer`}>
            <span className={`mr-2 sm:mr-3 flex items-center justify-center transition-all duration-300 ${
              isExpanded ? 'rotate-180 scale-105' : 'rotate-0 scale-100 group-hover:scale-105'
            }`}>
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9">
                <ArrowIcon isDarkTheme={isDarkTheme} />
              </div>
            </span>
            <span className="transition-all duration-300 break-words">
              {isExpanded ? 'Show less' : 'Learn more'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}