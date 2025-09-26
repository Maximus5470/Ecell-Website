"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  bgColor: string;
}

interface WorkingProcessProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

const WorkingProcess: React.FC<WorkingProcessProps> = ({ 
  steps
}) => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="font-sans max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {steps.map((step, idx) => {
        const isOpen = expanded === idx;
        return (
          <div
            key={step.number}
            className={`relative transition-all duration-300 rounded-2xl sm:rounded-3xl border-1 border-black border-b-4 sm:border-b-6 shadow-lg mb-6 sm:mb-8 cursor-pointer ${
              isOpen ? "bg-[#B9FF66] shadow-[0_8px_32px_rgba(200,255,106,0.25)]" : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
            } ${isOpen ? "pb-6 sm:pb-8" : ""} hover:shadow-xl`}
            style={{ minHeight: 60 }}
            onClick={() => setExpanded(isOpen ? null : idx)}
          >
            <div className="flex items-center px-4 sm:px-8 lg:px-12 py-6 sm:py-8">
              <span className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mr-4 sm:mr-6 lg:mr-8 flex-shrink-0">{step.number}</span>
              <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold flex-1 leading-tight">{step.title}</span>
              <div
                className={`ml-auto bg-white rounded-full border-2 border-black w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center select-none transition-all duration-300 hover:scale-110 hover:bg-gray-50 flex-shrink-0 ${
                  isOpen ? "rotate-180 bg-gray-100" : "rotate-0"
                }`}
              >
                {isOpen ? (
                  <Minus className="h-5 w-5 sm:h-6 sm:w-6 text-black" strokeWidth={3} />
                ) : (
                  <Plus className="h-5 w-5 sm:h-6 sm:w-6 text-black" strokeWidth={3} />
                )}
              </div>
            </div>
            {isOpen && (
              <div className="text-black border-t-2 border-black/20 mx-4 sm:mx-8 lg:mx-12 pt-4 sm:pt-6 text-base sm:text-lg lg:text-xl leading-relaxed">
                {step.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkingProcess;


