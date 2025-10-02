import React, { useState } from 'react';
import Footer from './Footer';

// TypeScript Interfaces
interface Founder {
  name: string;
  role: string;
  linkedinUrl?: string;
}

interface Startup {
  id: string;
  name: string;
  isIncubation: boolean;
  logoUrl?: string;
  imageUrl?: string;
  tagline: string;
  category: string;
  stage: string;
  longDescription: string;
  founders: Founder[];
  websiteUrl?: string;
}

const GREEN_ACCENT = '#B9FF66';
const DARK_ACCENT = '#191A23';
const STAGES = ['Idea Generation', 'Active Incubation', 'Launch Phase', 'Seed Stage'];

const MOCK_STARTUPS: Startup[] = [
  {
    id: '1',
    name: 'EcoCycle AI',
    isIncubation: false,
    logoUrl: 'https://placehold.co/40x40/B9FF66/1a1a1a?text=E',
    imageUrl: 'https://placehold.co/300x400/B9FF66/1a1a1a?text=EcoCycle',
    tagline: 'AI-powered waste management for a greener campus.',
    category: 'Sustainability',
    stage: 'Seed Stage',
    longDescription:
      "EcoCycle AI aims to revolutionize waste sorting by using computer vision models to accurately identify and separate recyclable materials, significantly boosting the college's sustainability metrics. Our pilot program has shown a 40% increase in correct recycling rates, reducing manual labor costs by 25%. We are now seeking Series A funding to expand beyond campus.",
    founders: [
      { name: 'Alex Johnson', role: 'CEO / Algorithm Lead', linkedinUrl: 'https://www.linkedin.com/in/alexj' },
      { name: 'Maria Chen', role: 'Operations & Hardware', linkedinUrl: 'https://www.linkedin.com/in/mariac' },
    ],
    websiteUrl: '#',
  },
  {
    id: '2',
    name: 'CampusConnect',
    isIncubation: true,
    logoUrl: 'https://placehold.co/40x40/B9FF66/1a1a1a?text=C',
    imageUrl: 'https://placehold.co/300x400/B9FF66/1a1a1a?text=CampusConnect',
    tagline: 'A centralized events and resource platform for all student clubs.',
    category: 'EdTech',
    stage: 'Active Incubation',
    longDescription:
      "CampusConnect is currently in the prototype stage, building a unified calendar and resource sharing platform to address the fragmentation of information across the college. We are focused on rapid user feedback and iterating weekly. Our goal is to achieve 80% club adoption by the end of the semester. We are looking for UI/UX contributors!",
    founders: [
      { name: 'Sam Rivera', role: 'Project Lead / UX Designer' },
      { name: 'David Lee', role: 'Backend Developer' },
    ],
  },
  {
    id: '3',
    name: 'HealthStream',
    isIncubation: false,
    logoUrl: 'https://placehold.co/40x40/B9FF66/1a1a1a?text=H',
    imageUrl: 'https://placehold.co/300x400/B9FF66/1a1a1a?text=HealthStream',
    tagline: 'Telehealth platform connecting students with mental wellness resources.',
    category: 'Health Tech',
    stage: 'Launch Phase',
    longDescription:
      'HealthStream provides confidential, instant access to licensed counselors and support groups, addressing the growing need for accessible mental health services on university campuses. We prioritize student privacy and offer asynchronous communication options.',
    founders: [
      { name: 'Jessica Wong', role: 'Founder & Product Manager', linkedinUrl: 'https://www.linkedin.com/in/jessicawong' },
    ],
    websiteUrl: '#',
  },
  {
    id: '4',
    name: 'Artisan Hub',
    isIncubation: true,
    logoUrl: 'https://placehold.co/40x40/B9FF66/1a1a1a?text=A',
    imageUrl: 'https://placehold.co/300x400/B9FF66/1a1a1a?text=ArtisanHub',
    tagline: 'Marketplace for student creators to sell their art and crafts.',
    category: 'E-Commerce',
    stage: 'Idea Generation',
    longDescription:
      "Artisan Hub is designed to solve the problem of student artists lacking a centralized, low-fee platform to sell their creations. We plan to integrate payment processing and local campus delivery options. Currently seeking marketing strategists to help validate the concept.",
    founders: [{ name: 'Olivia Kim', role: 'Visionary Lead' }],
  },
];

interface StartupCardProps {
  startup: Startup;
  onCardClick: (startup: Startup) => void;
}

const StartupCard: React.FC<StartupCardProps> = ({ startup, onCardClick }) => {
  const { name, logoUrl, tagline, category, isIncubation } = startup;
  const cardTitle = name;
  const cardSubtitle1 = isIncubation ? 'INCUBATION' : 'STARTUP';
  const accentColorClass = 'text-blue-600 bg-blue-100';
  const cardBorderColor = GREEN_ACCENT;
  const currentStageIndex = STAGES.indexOf(startup.stage);

  return (
    <div
      className="p-6 bg-white rounded-xl shadow-lg cursor-pointer border-t-4 border-gray-100 border-b-4 border-gray-100 transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
      style={{ backgroundColor: DARK_ACCENT, borderColor: cardBorderColor }}
      onClick={() => onCardClick(startup)}
    >
      <div className="flex items-start mb-4">
        <div
          className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border-2"
          style={{ borderColor: GREEN_ACCENT }}
        >
          <img
            src={logoUrl}
            alt={`${name} Logo`}
            className="object-cover w-full h-full rounded-full"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div>
          <h3 style={{ color: '#F3F3F3' }} className="text-2xl font-bold text-gray-900 leading-tight">
            {cardTitle}
          </h3>
          <p
            className={`text-xs font-semibold uppercase tracking-wider mt-1 px-2 py-0.5 rounded-full inline-block ${accentColorClass}`}
          >
            {cardSubtitle1}
          </p>
        </div>
      </div>
      <p style={{ color: '#F3F3F3' }} className="text-gray-600 mb-4 text-base line-clamp-3">
        {tagline}
      </p>
      <div className="mt-4 mb-4 pt-4 border-t border-gray-100">
        <p style={{ color: '#F3F3F3' }} className="text-xs font-semibold uppercase text-gray-500 mb-4">
          Development Pipeline:
        </p>
        <div className="flex justify-between items-center relative h-3">
          {STAGES.map((stage, index) => (
            <React.Fragment key={stage}>
              {index > 0 && (
                <div
                  className="absolute h-0.5 top-1/2 transform -translate-y-1/2 transition-colors duration-500"
                  style={{
                    left: `${(index - 1) * (100 / (STAGES.length - 1)) + 5}%`,
                    width: `${100 / (STAGES.length - 1) - 10}%`,
                    zIndex: 0,
                    backgroundColor: index <= currentStageIndex ? '#374151' : '#e5e7eb',
                  }}
                />
              )}
              <div
                className="w-4 h-4 rounded-full relative z-10 border-2 transition-all duration-500 flex items-center justify-center"
                style={{
                  backgroundColor: index <= currentStageIndex ? cardBorderColor : '#f3f4f6',
                  borderColor: index <= currentStageIndex ? '#374151' : '#d1d5db',
                  transform: index === currentStageIndex ? 'scale(1.2)' : 'scale(1)',
                }}
                title={stage}
              >
                {index === currentStageIndex && (
                  <svg
                    className="w-2 h-2 text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-xs font-medium text-gray-500">
          <span style={{ color: '#F3F3F3' }} className={`text-left ${currentStageIndex === 0 ? 'font-bold text-gray-900' : ''}`}>
            Idea
          </span>
          <span style={{ color: '#F3F3F3' }} className={`text-center ${currentStageIndex === 1 ? 'font-bold text-gray-900' : ''}`}>
            Incubating
          </span>
          <span style={{ color: '#F3F3F3' }} className={`text-center ${currentStageIndex === 2 ? 'font-bold text-gray-900' : ''}`}>
            Launch
          </span>
          <span style={{ color: '#F3F3F3' }} className={`text-right ${currentStageIndex === 3 ? 'font-bold text-gray-900' : ''}`}>
            Funded
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full">{category}</span>
        <span
          style={{ backgroundColor: cardBorderColor, color: DARK_ACCENT }}
          className="text-sm font-bold py-1 px-4 rounded-full transition duration-200 inline-flex items-center hover:shadow-md"
        >
          Details
        </span>
      </div>
    </div>
  );
};

interface StartupModalProps {
  startup: Startup;
  isOpen: boolean;
  onClose: () => void;
}

const StartupModal: React.FC<StartupModalProps> = ({ startup, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-auto flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-1/4 h-full">
          <img
            src={startup.imageUrl ?? startup.logoUrl ?? 'https://placehold.co/300x400'}
            alt={startup.name}
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-3/4 p-6 flex flex-col">
          <h2 id="modal-title" className="text-3xl font-bold mb-4 text-gray-900">
            {startup.name}
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Creators</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-800 max-h-32 overflow-auto">
              {startup.founders.map((founder, idx) => (
                <li key={idx}>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{founder.name}</span>
                    <span className="italic text-sm text-gray-600">({founder.role})</span>
                    {founder.linkedinUrl && (
                      <a
                        href={founder.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        aria-label={`${founder.name} LinkedIn`}
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-grow overflow-auto text-gray-700 whitespace-pre-line">{startup.longDescription}</div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'startup' | 'incubation'>('all');

  const handleCardClick = (startup: Startup) => setSelectedStartup(startup);
  const handleCloseModal = () => setSelectedStartup(null);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

  const filteredStartups = MOCK_STARTUPS.filter((startup) => {
    if (filterType === 'startup' && startup.isIncubation) return false;
    if (filterType === 'incubation' && !startup.isIncubation) return false;
    if (
      !startup.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !startup.tagline.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });

  const startupsOnly = filteredStartups.filter((s) => !s.isIncubation);
  const incubationsOnly = filteredStartups.filter((s) => s.isIncubation);
  const fundedStartups = filteredStartups.filter((s) => s.stage === 'Seed Stage' || s.stage === 'Funded');

  return (
    <div className="min-h-screen bg-gray-50 font-sans px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-center py-6">
        <h1 className="text-3xl font-extrabold tracking-tight">
          <span style={{ backgroundColor: GREEN_ACCENT, borderRadius: 10 }} className="p-2">
            Startups & Incubations
          </span>
        </h1>
      </div>

      <main className="max-w-7xl mx-auto mt-10">
        <div className="mb-8">
          <h2 className="text-5xl font-extrabold tracking-tighter text-gray-900 mb-2">Discover the Next Big Thing</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover the innovative startups and ventures supported by E-Cell IARE.
          </p>
        </div>
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-1/2">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg style={{ color: DARK_ACCENT }} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by name, tagline, or category..."
              style={{ backgroundColor: '#F3F3F3', color: DARK_ACCENT }}
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            />
          </div>
        </div>
        <section className="mb-16 px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="p-2 text-3xl font-bold mb-6" style={{ backgroundColor: GREEN_ACCENT, borderRadius: 10, color: DARK_ACCENT }}>
              Startups
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {startupsOnly.length > 0 ? (
              startupsOnly.map((s) => <StartupCard key={s.id} startup={s} onCardClick={handleCardClick} />)
            ) : (
              <p className="col-span-full text-center text-gray-600">No startups found.</p>
            )}
          </div>
        </section>
        <section className="mb-16 px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="p-2 text-3xl font-bold mb-6" style={{ backgroundColor: GREEN_ACCENT, borderRadius: 10, color: DARK_ACCENT }}>
              Incubations
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {incubationsOnly.length > 0 ? (
              incubationsOnly.map((s) => <StartupCard key={s.id} startup={s} onCardClick={handleCardClick} />)
            ) : (
              <p className="col-span-full text-center text-gray-600">No incubations found.</p>
            )}
          </div>
        </section>
      </main>
      {selectedStartup && <StartupModal startup={selectedStartup} isOpen onClose={handleCloseModal} />}
        <Footer />
    </div>
    
  );
};

export default App;
