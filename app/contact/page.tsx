'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState('sayHi');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { selectedOption, ...formData });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Contact <span className="bg-[#B9FF66] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Connect with us to learn more about our services and how we can help your business grow.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:pl-12 lg:py-12">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
              {/* Form */}
              <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Radio Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="contactType"
                          value="sayHi"
                          checked={selectedOption === 'sayHi'}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          selectedOption === 'sayHi' 
                            ? 'border-[#B9FF66] bg-[#B9FF66]' 
                            : 'border-gray-400 bg-white'
                        } flex items-center justify-center`}>
                          {selectedOption === 'sayHi' && (
                            <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                          )}
                        </div>
                      </div>
                      <span className="ml-3 text-sm sm:text-base font-normal text-gray-900">Say Hi</span>
                    </label>
                    
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="contactType"
                          value="getQuote"
                          checked={selectedOption === 'getQuote'}
                          onChange={(e) => setSelectedOption(e.target.value)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          selectedOption === 'getQuote' 
                            ? 'border-[#B9FF66] bg-[#B9FF66]' 
                            : 'border-gray-400 bg-white'
                        } flex items-center justify-center`}>
                          {selectedOption === 'getQuote' && (
                            <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                          )}
                        </div>
                      </div>
                      <span className="ml-3 text-sm sm:text-base font-normal text-gray-900">Get a Quote</span>
                    </label>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-normal text-gray-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl sm:rounded-2xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-normal text-gray-900 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl sm:rounded-2xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm sm:text-base font-normal text-gray-900 mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      required
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl sm:rounded-2xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] focus:border-transparent resize-none text-sm sm:text-base sm:rows-4"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white text-sm sm:text-base font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl hover:bg-gray-800 transition-colors duration-200 mt-4 sm:mt-6"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Illustration */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-6 md:mt-0">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <Image
                    src="/ContactUs-Picture.png"
                    alt="Contact Us Illustration"
                    width={300}
                    height={300}
                    className="hidden md:block lg:block w-[300] h-auto object-contain mx-auto md:ml-auto md:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;