"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down (only after scrolling past 100px)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`flex items-center justify-between bg-gray-50 py-4 px-8 fixed top-0 left-0 right-0 z-50 shadow-sm transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex items-center">
        <Image src="/ecelllogo.png" alt="E-Cell IARE Logo" width={150} height={10} priority />
      </div>
      <ul className="flex flex-1 justify-center items-center list-none gap-9 m-0 p-0">
        <li className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">Home</li>
        <li className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">About us</li>
        <li className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">Teams</li>
        <li className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">Startups</li>
        <li className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">Collaborators</li>
        <li className="font-inter text-[1px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">Contact us</li>
      </ul>
      <div className="flex items-center">
        <button className="px-6 py-2 border border-gray-800 rounded-lg bg-white text-gray-800 text-[16px] font-inter cursor-pointer transition-all hover:bg-teal-600 hover:text-white hover:border-teal-600">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
