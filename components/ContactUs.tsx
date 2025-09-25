"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contactType: "Say Hi",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      contactType: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
      contactType: "Say Hi",
    });
  };

  return (
    <section className="bg-gray-50 py-16 flex justify-center">
      <div className="bg-white max-w-3xl w-full rounded-3xl shadow-md p-10">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
          <h2 className="bg-[#14B8A6] text-black px-3 py-1 rounded text-2xl font-bold">
            Contact Us
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Radio Buttons */}
          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="Say Hi"
                checked={formData.contactType === "Say Hi"}
                onChange={(e) => handleRadioChange(e.target.value)}
                className="w-4 h-4 text-[#14B8A6] border-gray-300 focus:ring-[#14B8A6]"
              />
              <span className="text-gray-700">Say Hi</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactType"
                value="Get a Quote"
                checked={formData.contactType === "Get a Quote"}
                onChange={(e) => handleRadioChange(e.target.value)}
                className="w-4 h-4 text-[#14B8A6] border-gray-300 focus:ring-[#14B8A6]"
              />
              <span className="text-gray-700">Get a Quote</span>
            </label>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] placeholder-gray-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] placeholder-gray-400"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Message*
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] placeholder-gray-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#191A23] text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
