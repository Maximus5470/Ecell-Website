import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-50 py-4 px-8 sticky top-0 z-50 shadow-sm">
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
