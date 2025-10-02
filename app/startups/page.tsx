'use client';
import React, { useState } from 'react';
import StartupCard, { Startup } from '@/components/StartupCard';
import StartupModal from '@/components/StartupModal';

const GREEN_ACCENT = '#B9FF66';

// Mock data for startups and incubation projects
const MOCK_STARTUPS: Startup[] = [
  {
    id: '1',
    name: 'GreenTech Innovations',
    tagline: 'Sustainable Solutions for Tomorrow',
    logo: '/ecelllogo.png',
    stage: 'Idea',
    category: 'CleanTech',
    shortDescription: 'Revolutionizing renewable energy storage with cutting-edge battery technology.',
    longDescription: `GreenTech Innovations is pioneering next-generation battery solutions that promise to make renewable energy more reliable and accessible. Our proprietary technology increases energy density by 40% while reducing costs, making green energy a viable option for communities worldwide.
    
We're tackling one of the biggest challenges in renewable energy: efficient storage. Our team of engineers and scientists are developing advanced materials that could change the landscape of clean energy forever.`,
    founders: [
      { name: 'Alice Johnson', role: 'CEO & Co-founder', linkedinUrl: 'https://linkedin.com' },
      { name: 'Bob Smith', role: 'CTO & Co-founder', linkedinUrl: 'https://linkedin.com' }
    ],
    websiteUrl: 'https://example.com',
    isIncubation: false
  },
  {
    id: '2',
    name: 'EduLearn Platform',
    tagline: 'Personalized Learning for Every Student',
    logo: '/ecelllogo.png',
    stage: 'Prototype',
    category: 'EdTech',
    shortDescription: 'AI-powered adaptive learning platform transforming education.',
    longDescription: `EduLearn Platform leverages artificial intelligence to create personalized learning experiences for students of all ages. Our adaptive algorithms analyze learning patterns and adjust content difficulty in real-time, ensuring optimal educational outcomes.
    
With partnerships across 50+ schools and growing, we're proving that technology can democratize quality education and help every student reach their full potential.`,
    founders: [
      { name: 'Carol White', role: 'Founder & CEO', linkedinUrl: 'https://linkedin.com' },
      { name: 'David Brown', role: 'Head of Product', linkedinUrl: 'https://linkedin.com' }
    ],
    websiteUrl: 'https://example.com',
    isIncubation: false
  },
  {
    id: '3',
    name: 'HealthSync',
    tagline: 'Connecting Patients with Care',
    logo: '/ecelllogo.png',
    stage: 'MVP',
    category: 'HealthTech',
    shortDescription: 'Telemedicine platform bridging healthcare accessibility gaps.',
    longDescription: `HealthSync is building the future of accessible healthcare through our comprehensive telemedicine platform. We connect patients in remote areas with qualified healthcare professionals, providing consultations, prescriptions, and follow-up care through secure video conferencing.
    
Our mission is to ensure that quality healthcare is not a privilege but a right, accessible to everyone regardless of their location.`,
    founders: [
      { name: 'Dr. Emily Chen', role: 'Medical Director', linkedinUrl: 'https://linkedin.com' },
      { name: 'Frank Martinez', role: 'CEO & Co-founder', linkedinUrl: 'https://linkedin.com' }
    ],
    websiteUrl: 'https://example.com',
    isIncubation: false
  },
  {
    id: '4',
    name: 'AgroSmart',
    logo: '/ecelllogo.png',
    tagline: 'Precision Agriculture for Modern Farmers',
    stage: 'Product-Market Fit',
    category: 'AgriTech',
    shortDescription: 'IoT sensors and analytics helping farmers optimize crop yields.',
    longDescription: `AgroSmart combines IoT sensors, satellite imagery, and machine learning to provide farmers with actionable insights about their crops. Our system monitors soil health, weather patterns, and plant growth to recommend optimal irrigation, fertilization, and harvest timing.
    
We've helped over 1,000 farmers increase their yields by an average of 25% while reducing water usage by 30%. Our technology is making farming more sustainable and profitable.`,
    founders: [
      { name: 'George Taylor', role: 'Founder & CEO', linkedinUrl: 'https://linkedin.com' },
      { name: 'Hannah Wilson', role: 'Chief Agricultural Officer', linkedinUrl: 'https://linkedin.com' }
    ],
    websiteUrl: 'https://example.com',
    isIncubation: false
  },
  {
    id: '5',
    name: 'FinFlow',
    logo: '/ecelllogo.png',
    tagline: 'Streamlining Business Finances',
    stage: 'Scaling',
    category: 'FinTech',
    shortDescription: 'All-in-one financial management suite for SMEs.',
    longDescription: `FinFlow is revolutionizing how small and medium enterprises manage their finances. Our platform combines invoicing, expense tracking, payroll, and financial analytics into one seamless experience, saving business owners countless hours of administrative work.
    
With over 10,000 active users and $50M in processed transactions, we're proving that powerful financial tools don't need to be complicated or expensive.`,
    founders: [
      { name: 'Ian Rodriguez', role: 'CEO & Founder', linkedinUrl: 'https://linkedin.com' },
      { name: 'Julia Lee', role: 'CFO & Co-founder', linkedinUrl: 'https://linkedin.com' }
    ],
    websiteUrl: 'https://example.com',
    isIncubation: false
  },
  {
    id: '6',
    name: 'Urban Garden Kit',
    logo: '/ecelllogo.png',
    tagline: 'Grow Fresh Food at Home',
    stage: 'Idea',
    category: 'Consumer',
    shortDescription: 'Compact hydroponic systems for apartment dwellers.',
    longDescription: `Urban Garden Kit makes it possible for anyone to grow fresh, organic vegetables at home, even in the smallest apartments. Our sleek, space-efficient hydroponic systems require no soil and use 90% less water than traditional gardening.
    
We're on a mission to reconnect urban populations with their food sources and promote sustainable living one garden at a time.`,
    founders: [
      { name: 'Kevin Park', role: 'Founder', linkedinUrl: 'https://linkedin.com' }
    ],
    websiteUrl: 'https://example.com',
    isIncubation: true
  },
  {
    id: '7',
    name: 'CodeMentor AI',
    logo: '/ecelllogo.png',
    tagline: 'Learn Coding with Intelligent Guidance',
    stage: 'Prototype',
    category: 'EdTech',
    shortDescription: 'AI-powered coding tutor for beginners.',
    longDescription: `CodeMentor AI is an intelligent tutoring system that helps aspiring developers learn programming through personalized, interactive lessons. Our AI analyzes code submissions, identifies mistakes, and provides contextual explanations that accelerate learning.
    
We believe coding education should be accessible, engaging, and effective for everyone, regardless of their background.`,
    founders: [
      { name: 'Laura Adams', role: 'CEO & Founder', linkedinUrl: 'https://linkedin.com' },
      { name: 'Michael Green', role: 'Lead Developer', linkedinUrl: 'https://linkedin.com' }
    ],
    websiteUrl: 'https://example.com',
    isIncubation: true
  },
  {
    id: '8',
    name: 'EcoPackage',
    logo: '/ecelllogo.png',
    tagline: 'Biodegradable Packaging Solutions',
    stage: 'MVP',
    category: 'CleanTech',
    shortDescription: 'Replacing plastic packaging with sustainable alternatives.',
    longDescription: `EcoPackage develops innovative, fully biodegradable packaging materials made from agricultural waste. Our products decompose within 90 days while providing the same protection as traditional plastic packaging.
    
We're working with e-commerce companies and retailers to eliminate billions of plastic packages from landfills and oceans each year.`,
    founders: [
      { name: 'Nina Patel', role: 'Founder & CEO', linkedinUrl: 'https://linkedin.com' },
      { name: 'Oliver Kim', role: 'Head of R&D', linkedinUrl: 'https://linkedin.com' }
    ],
    websiteUrl: 'https://example.com',
    isIncubation: true
  }
];

type FilterType = 'all' | 'startups' | 'incubation';

export default function Startups() {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');

  // Filter startups based on search term and filter type
  const filteredStartups = MOCK_STARTUPS.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          startup.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          startup.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || 
                          (filterType === 'startups' && !startup.isIncubation) ||
                          (filterType === 'incubation' && startup.isIncubation);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-[#B9FF66] px-2 py-1 rounded">Startups</span> & Incubation Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover innovative ventures and projects nurtured by our entrepreneurship cell. 
            From early-stage ideas to scaling businesses, we&apos;re fostering the next generation of changemakers.
          </p>
        </div>
      </div>

      {/* Filters & Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search by name, category, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-base rounded-2xl border-2 border-gray-300 focus:border-[#B9FF66] focus:outline-none transition duration-200"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3 flex-wrap justify-center md:justify-end">
              <button
                onClick={() => setFilterType('all')}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition duration-200 ${
                  filterType === 'all' 
                    ? 'bg-[#B9FF66] text-gray-900' 
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilterType('startups')}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition duration-200 ${
                  filterType === 'startups' 
                    ? 'bg-[#B9FF66] text-gray-900' 
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400'
                }`}
              >
                Startups
              </button>
              <button
                onClick={() => setFilterType('incubation')}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition duration-200 ${
                  filterType === 'incubation' 
                    ? 'bg-orange-400 text-gray-900' 
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400'
                }`}
              >
                Incubation
              </button>
            </div>
          </div>

          {/* Results Count */}
          <p className="mt-6 text-gray-600 text-sm">
            Showing <span className="font-bold">{filteredStartups.length}</span> result{filteredStartups.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Startups Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredStartups.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No startups found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup) => (
              <StartupCard 
                key={startup.id} 
                startup={startup} 
                onClick={() => setSelectedStartup(startup)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Startup Modal */}
      <StartupModal 
        startup={selectedStartup} 
        isOpen={selectedStartup !== null} 
        onClose={() => setSelectedStartup(null)}
      />
    </div>
  );
}
