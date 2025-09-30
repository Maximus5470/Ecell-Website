import React from 'react';
import Image, { StaticImageData } from 'next/image';

// --- Data for the team members ---
// NOTE: Replace the placeholder image imports with your actual image files
import johnImage from '@/public/Illustration3.png'; // Placeholder
import janeImage from '@/public/Illustration4.png'; // Placeholder
import michaelImage from '@/public/Illustration5.png'; // Placeholder
import emilyImage from '@/public/Illustration6.png'; // Placeholder
import brianImage from '@/public/Illustration2.png'; // Placeholder
import sarahImage from '@/public/Illustration1.png'; // Placeholder

// Define the structure for a Team Member
interface TeamMember {
  name: string;
  role: string;
  department: 'Leadership' | 'SEO/Content' | 'PPC/Social'; // Custom departments based on roles
  description: string;
  image: StaticImageData;
}

// Define the full team data
const teamData: TeamMember[] = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    department: 'Leadership',
    description:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.',
    image: johnImage,
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    department: 'Leadership',
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills.',
    image: janeImage,
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    department: 'SEO/Content',
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.',
    image: michaelImage,
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    department: 'PPC/Social',
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.',
    image: emilyImage,
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    department: 'PPC/Social',
    description:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.',
    image: brianImage,
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    department: 'SEO/Content',
    description:
      '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.',
    image: sarahImage,
  },
];

// Group members by the custom department
const teamsByDepartment = teamData.reduce((acc, member) => {
  if (!acc[member.department]) {
    acc[member.department] = [];
  }
  acc[member.department].push(member);
  return acc;
}, {} as Record<string, TeamMember[]>);

// --- Component for a single team card ---
const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="relative bg-white rounded-[32px] border border-black border-b-6 border-b-[#191A23] px-8 pt-10 pb-8 w-full max-w-[370px] mx-auto flex flex-col items-center transition-all duration-300 hover:scale-105">
    {/* LinkedIn Icon in black circle */}
    <a
      href="#"
      className="absolute top-7 right-7"
      aria-label={`LinkedIn profile for ${member.name}`}
    >
      <div className="bg-black rounded-full w-9 h-9 flex items-center justify-center shadow-md">
        <span className="text-[#B9FF66] font-bold text-lg">in</span>
      </div>
    </a>
    {/* Butterfly-like SVG shape wrapping profile image, no glow */}
    <div className="relative mb-4 flex items-center justify-center w-20 h-20">
      <svg
        width="280"
        height="220"
        viewBox="0 0 80 80"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <path d="M40 30 C54 18, 66 34, 54 40 C66 46, 54 62, 40 54 C26 62, 14 46, 26 40 C14 34, 26 18, 40 30 Z" fill="#B9FF66" />
      </svg>
      <div className="relative z-10 w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src={member.image}
          alt=""
          width={64}
          height={64}
          className="object-cover rounded-full"
        />
      </div>
    </div>
    {/* Name and Role */}
    <div className="text-center mb-2">
      <div className="font-bold text-2xl text-gray-900 font-sans tracking-tight">{member.name}</div>
      <div className="text-gray-600 text-lg font-sans">{member.role}</div>
    </div>
    {/* Divider */}
    <hr className="w-3/4 border-t-2 border-gray-200 my-5" />
    {/* Description */}
    <div className="text-gray-700 text-[17px] leading-relaxed text-center font-medium">
      {member.description}
    </div>
  </div>
);

// --- Main Teams Component ---
export default function Teams() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-[#B9FF66] px-2 py-1 rounded">Teams</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals behind E-Cell IARE who drive innovation and entrepreneurship.
          </p>
        </div>

        {/* Dynamic Teams Grid */}
        <div className="space-y-16">
          {Object.entries(teamsByDepartment).map(([department, members]) => (
            <section key={department}>
              {/* Department Heading with Green Bottom Border */}
              <h2 className="text-4xl font-extrabold text-[#191A23] mb-8 text-left border-b-4 border-[#B9FF66] pb-2 tracking-tight">
                {department}
              </h2>
              
              {/* Cards Grid: Mobile stacks (cols-1), Tablet/Small Desktop 2-columns (md:cols-2), Large Desktop 3-columns (lg:cols-3) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                  <TeamCard key={index} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}