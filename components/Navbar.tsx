"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

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
    <nav className={`flex items-center justify-between bg-gray-50 py-4 px-4 sm:px-8 fixed top-0 left-0 right-0 z-50 shadow-sm transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="flex items-center">
        <Link href="/">
          <Image src="/ecelllogo.png" alt="E-Cell IARE Logo" width={120} height={8} priority className="sm:w-[150px] cursor-pointer" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-1 justify-center items-center list-none gap-6 xl:gap-9 m-0 p-0">
        <li>
          <Link href="/" className="font-inter text-[14px] xl:text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-inter text-[14px] xl:text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
            About us
          </Link>
        </li>
        <li>
          <Link href="/services" className="font-inter text-[14px] xl:text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
            Services
          </Link>
        </li>
        <li>
          <Link href="/teams" className="font-inter text-[14px] xl:text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
            Teams
          </Link>
        </li>
        <li>
          <Link href="/startups" className="font-inter text-[14px] xl:text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
            Startups
          </Link>
        </li>
        <li>
          <Link href="/collaborators" className="font-inter text-[14px] xl:text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
            Collaborators
          </Link>
        </li>
        <li>
          <Link href="/contact" className="font-inter text-[14px] xl:text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
            Contact us
          </Link>
        </li>
      </ul>

      {/* Desktop Login Button */}
      <div className="hidden sm:flex items-center">
        <button className="px-4 sm:px-6 py-2 border border-gray-800 rounded-lg bg-white text-gray-800 text-[14px] sm:text-[16px] font-inter cursor-pointer transition-all hover:bg-teal-600 hover:text-white hover:border-teal-600">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-gray-50 shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
              About us
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToSection('services')} className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
              Services
            </button>
          </li>
          <li>
            <Link href="/teams" onClick={() => setIsMobileMenuOpen(false)} className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
              Teams
            </Link>
          </li>
          <li>
            <Link href="/startups" onClick={() => setIsMobileMenuOpen(false)} className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
              Startups
            </Link>
          </li>
          <li>
            <Link href="/collaborators" onClick={() => setIsMobileMenuOpen(false)} className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
              Collaborators
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="font-inter text-[16px] font-normal text-gray-800 cursor-pointer transition-colors hover:text-teal-600">
              Contact us
            </button>
          </li>
          <li className="sm:hidden">
            <button className="px-6 py-2 border border-gray-800 rounded-lg bg-white text-gray-800 text-[16px] font-inter cursor-pointer transition-all hover:bg-teal-600 hover:text-white hover:border-teal-600">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;