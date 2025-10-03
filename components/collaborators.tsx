"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

interface Collaborator {
  id: number;
  name: string;
  type: "Corporate" | "Academic" | "Startup" | "Government" | "NGO";
  description: string;
  focusAreas: string[];
  logoUrl: string;
  partnershipSince: string;
  website?: string;
  testimonial?: string;
  featured?: boolean;
}

const MOCK_COLLABORATORS: Collaborator[] = [
  {
    id: 1,
    name: "TechCorp Global",
    type: "Corporate",
    description:
      "Partnering in AI research and providing mentorship to students on real-world applications.",
    focusAreas: ["Artificial Intelligence", "Research", "Mentorship"],
  logoUrl: "/Illustration1.png",
    partnershipSince: "2021",
    website: "https://techcorp.com",
    testimonial:
      "Working with your institute has been an incredibly rewarding journey.",
    featured: true,
  },
  {
    id: 2,
    name: "University of Innovation",
    type: "Academic",
    description:
      "Collaborating on joint research papers and providing exchange opportunities for students.",
    focusAreas: ["Research", "Innovation", "Academia"],
  logoUrl: "/Illustration2.png",
    partnershipSince: "2019",
    website: "https://universityinnovation.edu",
  },
  {
    id: 3,
    name: "GreenStart",
    type: "Startup",
    description:
      "Driving sustainability projects in collaboration with student innovators.",
    focusAreas: ["Sustainability", "Innovation", "Green Tech"],
  logoUrl: "/Illustration3.png",
    partnershipSince: "2022",
    website: "https://greenstart.io",
  },
  {
    id: 4,
    name: "GovTech Initiative",
    type: "Government",
    description:
      "Supporting national-level hackathons and innovation challenges for students.",
    focusAreas: ["Hackathons", "Innovation", "Public Sector"],
  logoUrl: "/Illustration4.png",
    partnershipSince: "2020",
  },
  {
    id: 5,
    name: "Global NGO Connect",
    type: "NGO",
    description:
      "Partnering on social impact projects driven by student-led teams.",
    focusAreas: ["Social Impact", "Community Projects", "Innovation"],
  logoUrl: "/Illustration5.png",
    partnershipSince: "2023",
  },
  {
    id: 6,
    name: "Global NGO Connect",
    type: "NGO",
    description:
      "Partnering on social impact projects driven by student-led teams.",
    focusAreas: ["Social Impact", "Community Projects", "Innovation"],
  logoUrl: "/Illustration6.png",
    partnershipSince: "2023",
  },

];

export default function Collaborators() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCollaborator, setSelectedCollaborator] =
    useState<Collaborator | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<string>("All");

  const filteredCollaborators = MOCK_COLLABORATORS.filter((c) => {
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch = !q ||
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.focusAreas.some((area) => area.toLowerCase().includes(q));
    
    const matchesFilter = filterType === "All" || c.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  const partnerTypes = ["All", "Corporate", "Academic", "Startup", "Government", "NGO"];

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Animated SVG Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#B9FF66" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Interactive Elements */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#191A23] mb-4">
                Trusted
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B9FF66] to-[#8FD644]">
                  Collaborators
                </span>
              </h1>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Partnering with industry leaders, academic institutions, and innovative startups
          </motion.p>
        </div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {partnerTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300
                ${filterType === type
                  ? 'bg-[#191A23] text-white scale-105 shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search collaborators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 text-lg
                focus:outline-none focus:border-[#B9FF66] focus:bg-white transition-all duration-300"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Timeline/List Layout - NOT Cards! */}
        <div className="space-y-6">
          {filteredCollaborators.map((collaborator, index) => {
            const isExpanded = expandedId === collaborator.id;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={collaborator.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Connector Line */}
                <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#B9FF66] to-transparent
                  ${isLeft ? 'left-0' : 'right-0'} hidden lg:block`}></div>
                
                {/* Main Content Row */}
                <div className={`flex flex-col lg:flex-row gap-6 items-start
                  ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Logo Section - Large Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative flex-shrink-0 lg:ml-8 lg:mr-8"
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#B9FF66] to-[#8FD644] 
                      p-1 shadow-xl">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <Image
                          src={collaborator.logoUrl}
                          alt={collaborator.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    {/* Year Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-[#191A23] text-white px-3 py-1 
                      rounded-full text-xs font-bold shadow-lg">
                      {collaborator.partnershipSince}
                    </div>
                  </motion.div>

                  {/* Content Section - Expandable */}
                  <div className="flex-1">
                    <motion.div
                      layout
                      className={`relative bg-gray-50 rounded-3xl p-6 lg:p-8 border-2 
                        transition-all duration-300 cursor-pointer overflow-hidden
                        ${isExpanded 
                          ? 'border-[#B9FF66] shadow-2xl' 
                          : 'border-gray-200 hover:border-[#B9FF66] hover:shadow-xl'
                        }`}
                      onClick={() => setExpandedId(isExpanded ? null : collaborator.id)}
                    >
                      {/* Decorative Corner
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#B9FF66] opacity-10 
                        rounded-bl-full"></div> */}
                      
                      {/* Header */}
                      <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl lg:text-3xl font-black text-[#191A23] mb-2">
                            {collaborator.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="px-4 py-1.5 bg-[#191A23] text-white rounded-full 
                              text-sm font-bold">
                              {collaborator.type}
                            </span>
                            {!isExpanded && collaborator.focusAreas.slice(0, 2).map((area, i) => (
                              <span key={i} className="px-3 py-1 bg-white rounded-full text-xs 
                                font-medium text-gray-700 border border-gray-200">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Expand/Collapse Button */}
                        <motion.button
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 rounded-full bg-[#B9FF66] flex items-center 
                            justify-center hover:bg-[#191A23] hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.button>
                      </div>

                      {/* Brief Description - Always Visible */}
                      <p className={`text-gray-700 leading-relaxed mb-4 
                        ${isExpanded ? '' : 'line-clamp-2'}`}>
                        {collaborator.description}
                      </p>

                      {/* Expanded Content - Accordion Style */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            {/* All Focus Areas */}
                            <div>
                              <h4 className="font-bold text-[#191A23] mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#B9FF66] rounded-full"></div>
                                Focus Areas
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {collaborator.focusAreas.map((area, i) => (
                                  <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-4 py-2 bg-white rounded-xl text-sm font-medium 
                                      text-gray-700 border-2 border-gray-200 hover:border-[#B9FF66] 
                                      transition-colors"
                                  >
                                    {area}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            {/* Testimonial */}
                            {collaborator.testimonial && (
                              <div className="p-5 bg-white rounded-2xl border-l-4 border-[#B9FF66]">
                                <div className="flex items-start gap-3">
                                  <svg className="w-8 h-8 text-[#B9FF66] flex-shrink-0" 
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                  </svg>
                                  <p className="text-gray-700 italic">
                                    "{collaborator.testimonial}"
                                  </p>
                                </div>
                              </div>
                            )}

                            {/* Actions */}
                            <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-gray-200">
                              {collaborator.website && (
                                <a
                                  href={collaborator.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#191A23] 
                                    text-white rounded-xl font-bold hover:bg-[#B9FF66] 
                                    hover:text-[#191A23] transition-all duration-300 group"
                                >
                                  <Globe className="w-4 h-4" />
                                  Visit Website
                                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 
                                    group-hover:-translate-y-1 transition-transform" />
                                </a>
                              )}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedCollaborator(collaborator);
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white 
                                  text-[#191A23] rounded-xl font-bold border-2 border-[#191A23] 
                                  hover:bg-[#191A23] hover:text-white transition-all duration-300"
                              >
                                View Full Details
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCollaborators.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No collaborators found</h3>
            <p className="text-gray-600">Try adjusting your search terms</p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCollaborator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/30 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="relative bg-white border-4 border-black rounded-3xl p-10 max-w-2xl w-full shadow-2xl"
            >
              <button
                onClick={() => setSelectedCollaborator(null)}
                className="absolute top-4 right-4 p-2 rounded-full border-2 border-black bg-white hover:bg-[#B9FF66] transition"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl border-2 border-black flex items-center justify-center overflow-hidden">
                  <Image
                    src={selectedCollaborator.logoUrl}
                    alt={selectedCollaborator.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold">
                    {selectedCollaborator.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold px-3 py-1 rounded-full bg-[#B9FF66] border border-black inline-block">
                    {selectedCollaborator.type}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                {selectedCollaborator.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCollaborator.focusAreas.map((area, i) => (
                    <span
                      key={i}
                      className="bg-black text-white px-3 py-1 rounded-lg text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCollaborator.testimonial && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Testimonial</h4>
                  <blockquote className="italic text-gray-700 border-l-4 border-[#B9FF66] pl-4">
                    “{selectedCollaborator.testimonial}”
                  </blockquote>
                </div>
              )}

              <div className="flex items-center justify-between mt-8">
                <p className="text-sm text-gray-500">
                  Partnership Since {selectedCollaborator.partnershipSince}
                </p>
                {selectedCollaborator.website && (
                  <a
                    href={selectedCollaborator.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#B9FF66] border-2 border-black px-5 py-2 rounded-xl font-semibold hover:bg-black hover:text-white transition"
                  >
                    <Globe className="w-4 h-4" />
                    Visit Website
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
