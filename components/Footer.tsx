"use client";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-white mt-16 flex justify-center">
      {/* Centered Footer Box */}
      <div className="bg-[#2B2B2B] max-w-5xl w-full mx-6 rounded-2xl shadow-lg px-10 py-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Section: Logo and Contact Info */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white text-2xl">★</span>
              <h3 className="text-white font-semibold text-lg">e-cell</h3>
            </div>

            {/* Contact Information */}
            <div className="text-gray-300 text-sm leading-relaxed space-y-1">
              <p>
                <span className="font-medium text-white">Email:</span>{" "}
                info@ecell.com
              </p>
              <p>
                <span className="font-medium text-white">Phone:</span>{" "}
                555-567-8901
              </p>
              <p>
                <span className="font-medium text-white">Address:</span> 1234
                Main St
              </p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm">
            <a
              href="#"
              className="font-normal text-gray-300 cursor-pointer transition-colors hover:text-teal-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-normal text-gray-300 cursor-pointer transition-colors hover:text-teal-600"
            >
              Services
            </a>
            <a
              href="#"
              className="font-normal text-gray-300 cursor-pointer transition-colors hover:text-teal-600"
            >
              Use Cases
            </a>
            <a
              href="#"
              className="font-normal text-gray-300 cursor-pointer transition-colors hover:text-teal-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-normal text-gray-300 cursor-pointer transition-colors hover:text-teal-600"
            >
              Blog
            </a>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="text-black text-sm">in</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="text-black text-sm">f</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
              <span className="text-black text-sm">@</span>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="mt-10 bg-[#191A23] rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h4 className="text-white font-semibold text-lg">
              Subscribe to news
            </h4>
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-3 w-full md:w-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-grow md:flex-grow-0 bg-[#2B2B2B] border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-teal-600 transition"
              />
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded font-medium hover:bg-teal-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a
              href="#"
              className="font-normal text-gray-300 cursor-pointer transition-colors hover:text-teal-600"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
