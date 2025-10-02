import React from 'react';
import Image from 'next/image';

const GREEN_ACCENT = '#B9FF66';
const STAGES = ['Idea Generation', 'Active Incubation', 'Launch Phase', 'Seed Stage'];

interface Founder {
  name: string;
  role: string;
  linkedinUrl?: string;
}

export interface Startup {
  id: string;
  name: string;
  isIncubation: boolean;
  logo?: string;
  tagline: string;
  category: string;
  stage: string;
  shortDescription: string;
  longDescription: string;
  founders: Founder[];
  websiteUrl?: string;
}

interface StartupCardProps {
  startup: Startup;
  onClick: (startup: Startup) => void;
}

const StartupCard: React.FC<StartupCardProps> = ({ startup, onClick }) => {
  const { name, isIncubation, logo, tagline, category } = startup;

  const cardSubtitle = isIncubation ? 'INCUBATION PROJECT' : 'STARTUP VENTURE';
  const accentColorClass = isIncubation ? 'text-orange-600 bg-orange-100' : 'text-blue-600 bg-blue-100';
  const cardBorderColor = isIncubation ? '#f97316' : GREEN_ACCENT;

  // Milestone Pipeline Logic
  const currentStageIndex = STAGES.indexOf(startup.stage);

  return (
    <div
      className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-[#B9FF66] transform hover:-translate-y-1"
      style={{ borderBottomWidth: '4px', borderBottomColor: cardBorderColor }}
      onClick={() => onClick(startup)}
    >
      <div className="flex items-start mb-4">
        {/* Logo/Placeholder */}
        <div 
          className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border-2 overflow-hidden relative" 
          style={{ borderColor: GREEN_ACCENT }}
        >
          {logo ? (
            <Image
              src={logo}
              alt={`${name} Logo`}
              fill
              className="object-cover"
            />
          ) : (
            <span className="text-xl font-bold text-gray-700">{name[0]}</span>
          )}
        </div>
        
        {/* Card Header Text */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">{name}</h3>
          <p className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block ${accentColorClass}`}>
            {cardSubtitle}
          </p>
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-sm line-clamp-3 min-h-[3.6rem]">{tagline}</p>
      
      {/* Milestone Pipeline Indicator */}
      <div className="mt-4 mb-4 pt-4 border-t border-gray-200">
        <p className="text-xs font-semibold uppercase text-gray-500 mb-3">Development Stage:</p>
        <div className="flex justify-between items-center relative h-3">
          {STAGES.map((stage, index) => (
            <React.Fragment key={stage}>
              {/* Connector Line */}
              {index > 0 && (
                <div 
                  className="absolute h-0.5 top-1/2 transform -translate-y-1/2 transition-colors duration-500"
                  style={{ 
                    left: `${(index - 1) * (100 / (STAGES.length - 1)) + 5}%`, 
                    width: `${(100 / (STAGES.length - 1)) - 10}%`, 
                    zIndex: 0,
                    backgroundColor: index <= currentStageIndex ? '#191A23' : '#e5e7eb'
                  }}
                />
              )}
              
              {/* Milestone Circle */}
              <div 
                className="w-4 h-4 rounded-full relative z-10 border-2 transition-all duration-500 flex items-center justify-center"
                style={{ 
                  backgroundColor: index <= currentStageIndex ? GREEN_ACCENT : '#f3f4f6', 
                  borderColor: index <= currentStageIndex ? '#191A23' : '#d1d5db',
                  transform: index === currentStageIndex ? 'scale(1.3)' : 'scale(1.0)',
                }}
                title={stage}
              >
                {index === currentStageIndex && (
                  <svg className="w-2 h-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* Stage Labels */}
        <div className="flex justify-between mt-3 text-[10px] font-medium text-gray-500">
          <span className={currentStageIndex === 0 ? 'font-bold text-gray-900' : ''}>Idea</span>
          <span className={currentStageIndex === 1 ? 'font-bold text-gray-900' : ''}>Incubating</span>
          <span className={currentStageIndex === 2 ? 'font-bold text-gray-900' : ''}>Launch</span>
          <span className={currentStageIndex === 3 ? 'font-bold text-gray-900' : ''}>Funded</span>
        </div>
      </div>

      {/* Category Tag & Details Button */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full">
          {category}
        </span>

        {/* The green call-to-action link */}
        <span 
          style={{ backgroundColor: GREEN_ACCENT, color: '#191A23' }} 
          className="text-sm font-bold py-1.5 px-4 rounded-xl transition duration-200 inline-flex items-center hover:shadow-md hover:brightness-95"
        >
          Details
        </span>
      </div>
    </div>
  );
};

export default StartupCard;
