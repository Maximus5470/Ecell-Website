import React from 'react';
import CollaboratorsComponent from '../../components/collaborators';

export default function Collaborators() {
  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-[#B9FF66] px-2 py-1 rounded">Collaborators</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our partners and collaborators who help us drive entrepreneurship forward.
          </p>
        </div> */}

        <div className="pt-8 md:pt-6 lg:pt-8 bg-gray-50 min-h-screen">
          {/* <Hero_Aboutus /> */}
          <CollaboratorsComponent />
        </div>

        <div className="text-center py-12">
          {/* Optional footer or message */}
        </div>
      </div>
    </div>
  );
}