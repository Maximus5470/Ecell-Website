import React from 'react';
import { Startup } from './StartupCard';

const GREEN_ACCENT = '#B9FF66';

interface StartupModalProps {
  startup: Startup | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExternalLinkIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const StartupModal: React.FC<StartupModalProps> = ({ startup, isOpen, onClose }) => {
  if (!isOpen || !startup) return null;

  const linkBg = startup.isIncubation ? 'bg-orange-500 hover:bg-orange-600' : 'bg-[#B9FF66] hover:brightness-90';
  
  return (
    // Full-screen overlay for the modal background
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-80 flex justify-center items-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      
      {/* Modal Content Container */}
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full text-white bg-gray-900 hover:bg-gray-700 transition duration-150 flex items-center justify-center text-2xl font-light"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Header Section */}
        <header className="p-8 md:p-10 rounded-t-3xl" style={{ borderBottom: `6px solid ${GREEN_ACCENT}`, backgroundColor: '#191A23' }}>
          <div className="flex items-center justify-between pr-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{startup.name}</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 italic mt-2">{startup.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span 
              className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider ${startup.isIncubation ? 'bg-orange-400 text-gray-900' : 'bg-[#B9FF66] text-gray-900'}`}
            >
              {startup.isIncubation ? 'Incubation Project' : 'Startup Venture'}
            </span>
            <span className="inline-block px-4 py-1.5 text-xs font-bold bg-gray-700 text-gray-200 rounded-full">
              Stage: {startup.stage}
            </span>
            <span className="inline-block px-4 py-1.5 text-xs font-bold bg-gray-700 text-gray-200 rounded-full">
              Category: {startup.category}
            </span>
          </div>
        </header>

        {/* Body Content: Description and Founders */}
        <div className="p-8 md:p-10">
          
          {/* Detailed Description */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
              Our Mission & Story
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
              {startup.longDescription}
            </p>
          </section>

          {/* People Responsible (Founders/Team) */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
              The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {startup.founders.map((founder, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-5 bg-gray-50 rounded-2xl shadow-md border-l-4 hover:shadow-lg transition-shadow duration-200" 
                  style={{ borderColor: GREEN_ACCENT }}
                >
                  {/* Profile Icon/Placeholder */}
                  <div className="w-14 h-14 bg-gray-900 rounded-full mr-4 flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-base md:text-lg text-gray-900 leading-tight">
                      {founder.name}
                    </p>
                    <p className="text-sm text-gray-600 italic mt-1">
                      {founder.role}
                    </p>
                    {founder.linkedinUrl && (
                      <a 
                        href={founder.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-blue-600 hover:underline flex items-center mt-2"
                      >
                        LinkedIn <ExternalLinkIcon size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* External Links Button */}
          {startup.websiteUrl && (
            <div className="mt-10 pt-6 border-t-2 border-gray-200 flex justify-end">
              <a
                href={startup.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-base md:text-lg font-bold text-gray-900 py-3 px-8 rounded-2xl transition duration-200 shadow-lg ${linkBg}`}
              >
                Visit Website <ExternalLinkIcon size={20} className="ml-2" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupModal;
