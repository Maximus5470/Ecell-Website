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

export default function ServiceCard({ title, description, icon, isExpanded = false, onToggleExpand, cardPosition = 'left' }: ServiceCardProps): React.JSX.Element {
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
      const delay = isMobile ? 400 : 500;
      setTimeout(() => setShowContent(true), delay);
    } else {
      // When collapsing, hide content first
      setShowContent(false);
      setIsCollapsing(true);
      const delay = isMobile ? 500 : 600;
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
      className={`relative rounded-[45px] flex flex-col justify-between ${styles.cardBg} transition-all ${
        isExpanded 
          ? 'duration-800 ease-out p-6 sm:p-8 min-h-[600px] sm:min-h-[700px] md:w-[210%] w-full shadow-2xl border-2 overflow-visible'
          : 'duration-600 ease-in p-6 sm:p-8 min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] w-full shadow-md overflow-hidden'
      }`}
      style={{
        border: '1px solid #191A23',
        borderBottomWidth: '8px',
        borderBottomColor: '#191A23',
        transformOrigin: isMobile ? 'top center' : cardPosition === 'left' ? 'top left' : 'top right',
        margin: '0.4rem',
        ...(isExpanded && cardPosition === 'right' && !isMobile && {
          marginLeft: '-110%'
        })
      }}
    >
      {/* Illustration */}
      <div className={`absolute right-2 transition-all ${
        isExpanded 
          ? 'duration-1000 ease-out top-6 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 opacity-50' 
          : 'duration-800 ease-in top-1/2 transform -translate-y-1/2 w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 opacity-80'
      }`}>
        <Image 
          src={icon} 
          alt={`${title} illustration`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 320px"
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col justify-between h-full ${
        isExpanded ? 'pr-48 sm:pr-72 md:pr-80 lg:pr-88' : 'pr-40 sm:pr-56 md:pr-64 lg:pr-76'
      } transition-all duration-800`}>
        <div>
          {renderTitle()}
          
          {/* Basic Description */}
          <p className={`text-base ${styles.textColor} mb-6 leading-relaxed`}>
            {description}
          </p>
          
          {/* Expanded Content */}
          {showContent && (
            <div className={`mt-6 space-y-6 ${styles.textColor} transition-all duration-500 ${
              isCollapsing 
                ? 'opacity-0 translate-y-4 pointer-events-none' 
                : 'opacity-100 translate-y-0'
            }`}>
              <div className={`transform transition-all duration-400 ${
                showContent && !isCollapsing 
                  ? 'delay-100 translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}>
                <h4 className="text-lg font-semibold mb-3">Overview</h4>
                <p className="leading-relaxed pr-4">{currentContent.details}</p>
              </div>
              
              <div className={`transform transition-all duration-400 ${
                showContent && !isCollapsing 
                  ? 'delay-200 translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}>
                <h4 className="text-lg font-semibold mb-3">What We Include</h4>
                <ul className="grid grid-cols-1 gap-2 pr-4">
                  {currentContent.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center transform transition-all duration-300 ${
                      showContent && !isCollapsing 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-2 opacity-0'
                    }`} style={{
                      transitionDelay: showContent && !isCollapsing ? `${300 + idx * 50}ms` : '0ms'
                    }}>
                      <span className="mr-2 text-[#B9FF66] flex-shrink-0">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`p-4 rounded-lg mr-4 transform transition-all duration-400 ${
                showContent && !isCollapsing 
                  ? 'delay-500 translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              } ${isDarkTheme ? 'bg-white/10' : 'bg-black/5'}`}>
                <h4 className="text-lg font-semibold mb-2">Expected Results</h4>
                <p className="leading-relaxed text-sm">{currentContent.benefits}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-6">
          <button
            onClick={handleToggle}
            className={`inline-flex items-center text-base sm:text-lg font-medium ${styles.textColor} group transition-all duration-300 hover:translate-x-1 cursor-pointer`}
          >
            <span className={`mr-3 flex items-center justify-center transition-all duration-300 ${
              isExpanded ? 'rotate-180 scale-105' : 'rotate-0 scale-100 group-hover:scale-105'
            }`}>
              <ArrowIcon isDarkTheme={isDarkTheme} />
            </span>
            <span className="transition-all duration-300">
              {isExpanded ? 'Show less' : 'Learn more'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}