"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe } from "lucide-react";

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

  const filteredCollaborators = MOCK_COLLABORATORS.filter((c) => {
    const q = searchTerm.trim().toLowerCase();
    return (
      !q ||
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.focusAreas.some((area) => area.toLowerCase().includes(q))
    );
  });

  return (
    <section className="relative py-20 px-6 sm:px-12 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6]">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold tracking-tight">
          Our{" "}
          <span className="px-4 py-1 bg-[#B9FF66] border-2 rounded-xl shadow-md">
            Collaborators
          </span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Building impactful partnerships with leading institutions, startups,
          and organizations.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-14">
        <input
          type="text"
          placeholder="Search collaborators..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border-2 border-black px-5 py-3 focus:outline-none focus:ring-4 focus:ring-[#B9FF66] text-lg shadow-md"
        />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCollaborators.map((collaborator, index) => (
          <motion.div
            key={collaborator.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`relative rounded-3xl p-8 border-2 border-black cursor-pointer
              shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
              ${index % 2 === 0 ? "bg-white" : "bg-[#B9FF66]"}`}
            onClick={() => setSelectedCollaborator(collaborator)}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-xl bg-white border border-black flex items-center justify-center overflow-hidden">
                <img
                  src={collaborator.logoUrl}
                  alt={collaborator.name}
                  className="object-contain w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-bold">{collaborator.name}</h3>
            </div>
            <p className="text-gray-700 mb-4 line-clamp-3">
              {collaborator.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {collaborator.focusAreas.map((area, i) => (
                <span
                  key={i}
                  className="bg-black text-white px-3 py-1 rounded-lg text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCollaborators.length === 0 && (
        <div className="text-center py-24">
          <p className="text-lg text-gray-600">
            No collaborators found. Try adjusting your search.
          </p>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedCollaborator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
                  <img
                    src={selectedCollaborator.logoUrl}
                    alt={selectedCollaborator.name}
                    className="object-contain w-16 h-16"
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
