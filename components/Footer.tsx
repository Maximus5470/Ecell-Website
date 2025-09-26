"use client";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [remarks, setRemarks] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    setRemarks("");
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <footer className="bg-gray-50 w-full p-0 m-0">
      <div className="max-w-[1300px] mx-auto rounded-t-[20px] sm:rounded-t-[32px] bg-[#191A23] shadow-[0_2px_16px_rgba(0,0,0,0.08)] pt-8 sm:pt-12 px-4 sm:px-8 lg:px-12">
        {/* Top Row: Logo + Navigation & Social Icons */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 gap-4 lg:gap-0">
          {/* Left: E-CELL IARE Heading with Symbol */}
          <div className="flex items-center justify-center lg:justify-start lg:mr-10">
            <h2 className="text-white text-lg sm:text-xl font-black m-0">
              E-CELL IARE
            </h2>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-8 text-sm lg:text-lg justify-center lg:justify-start flex-wrap">
            <a href="#" className="text-white underline hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white underline hover:text-gray-300">
              About us
            </a>
            <a href="#" className="text-white underline hover:text-gray-300">
              Teams
            </a>
            <a href="#" className="text-white underline hover:text-gray-300">
              Startups
            </a>
            <a href="#" className="text-white underline hover:text-gray-300">
              Collaborators
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-end">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="bg-white rounded-full w-9 h-9 flex items-center justify-center border-2 border-gray-800 hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="bg-white rounded-full w-9 h-9 flex items-center justify-center border-2 border-gray-800 hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* X */}
            <a
              href="#"
              aria-label="X"
              className="bg-white rounded-full w-9 h-9 flex items-center justify-center border-2 border-gray-800 hover:bg-gray-100 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Row: Contact + Form */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Contact */}
          <div className="lg:min-w-[260px]">
            <h3 className="bg-[#A6FF6F] text-gray-800 font-black text-base sm:text-lg px-3 sm:px-4 py-2 rounded inline-block mb-3 sm:mb-4">
              Contact us:
            </h3>
            <div className="text-white text-sm sm:text-base lg:text-lg mt-3 mb-3 leading-relaxed">
              <div>Email: ecell@iare.ac.in</div>
              <div>Phone: 555-567-8901</div>
              <br />
              <div>
                Address: Institute of Aeronautical Engineering
                <br />
                Dundigal, Hyderabad, Telangana 500043
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#3C3D47] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:px-10 flex flex-col flex-1 max-w-[750px]">
            <div className="mb-3 sm:mb-4">
              {/* Mobile: Clickable header with dropdown arrow */}
              <div 
                className="sm:hidden flex items-center justify-between cursor-pointer"
                onClick={toggleForm}
              >
                <div>
                  <h3 className="text-white text-base font-semibold mb-1">Get in Touch</h3>
                  <p className="text-gray-300 text-xs">Share your thoughts with us</p>
                </div>
                <svg 
                  className={`w-5 h-5 text-white transition-transform duration-200 ${isFormOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Desktop: Regular header */}
              <div className="hidden sm:block">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-1">Get in Touch</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Share your thoughts with us</p>
              </div>
            </div>
            
            {/* Form - collapsible on mobile, always visible on desktop */}
            <form 
              onSubmit={handleSubscribe} 
              className={`w-full flex flex-col gap-3 sm:gap-4 transition-all duration-300 overflow-hidden ${
                isFormOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 sm:max-h-none sm:opacity-100'
              }`}
            >
              {/* Email input - always full width on mobile, part of row on desktop */}
              <div className="sm:flex sm:gap-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full sm:flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#A6FF6F] focus:border-2 transition-colors text-sm sm:text-base mb-3 sm:mb-0"
                />
                {/* Submit button - hidden on mobile, shown on desktop */}
                <button
                  type="submit"
                  className="hidden sm:block bg-[#A6FF6F] text-gray-800 font-semibold px-8 sm:px-12 py-2.5 sm:py-3 rounded-lg hover:bg-[#95E55F] transition-colors whitespace-nowrap text-sm sm:text-base"
                >
                  Submit
                </button>
              </div>
              
              {/* Textarea */}
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Your remarks or feedback..."
                rows={3}
                className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#A6FF6F] focus:border-2 transition-colors resize-none text-sm sm:text-base"
              />
              
              {/* Submit button - shown on mobile, hidden on desktop */}
              <button
                type="submit"
                className="sm:hidden bg-[#A6FF6F] text-gray-800 font-semibold px-8 py-2.5 rounded-lg hover:bg-[#95E55F] transition-colors text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <hr className="border-t-1 sm:border-t-2 border-white my-6 sm:my-8 lg:mt-12 lg:mb-8" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 lg:gap-12 font-bold text-gray-200 text-xs sm:text-sm lg:text-base pb-4 sm:pb-6 text-center sm:text-left">
          <span>© 2025 E-CELL IARE. All Rights Reserved.</span>
          <a href="#" className="text-gray-400 underline hover:text-gray-200">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
