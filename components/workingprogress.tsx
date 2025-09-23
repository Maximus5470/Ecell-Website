'use client';

import React, { useState } from "react";


const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    bgColor: "#C8FF6A",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description: "In this phase, we conduct in-depth research and develop a customized marketing strategy to achieve your specific business goals.",
    bgColor: "#C8FF6A",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We execute the planned marketing strategies, ensuring seamless implementation across all relevant channels and platforms.",
    bgColor: "#C8FF6A",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description: "We continuously monitor results and optimize tactics to maximize your marketing ROI and adapt to any changes.",
    bgColor: "#C8FF6A",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description: "Receive regular reports and clear communication about your campaign's performance, progress, and results.",
    bgColor: "#C8FF6A",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description: "We look for opportunities for ongoing improvement to ensure your marketing effectiveness grows over time.",
    bgColor: "#C8FF6A",
  },
];

const WorkingProcess = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", maxWidth: 700, margin: "40px auto" }}>
      <div style={{ display: "flex", alignItems: "baseline", marginBottom: 10 }}>
        <span style={{ background: "#C8FF6A", fontWeight: 600, fontSize: 24, padding: "8px 18px", borderRadius: 4, marginRight: 14 }}>
          Our Working Process
        </span>
        <span style={{ color: "#656565", fontSize: 13 }}>Step-by-Step Guide to Achieving Your Business Goals</span>
      </div>
      {steps.map((step, idx) => (
        <div
          key={step.number}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          style={{
            background: hovered === idx ? step.bgColor : "#f9f9f9",
            transition: "all 0.25s",
            margin: "18px 0",
            borderRadius: 20,
            border: "1.5px solid #111",
            boxShadow: hovered === idx ? "0 4px 18px rgba(42, 180, 61, 0.12)" : "none",
            cursor: "pointer",
            padding: hovered === idx ? "28px 32px" : "18px 32px",
            minHeight: 38,
            overflow: "hidden",
            position: "relative"
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 28, fontWeight: 600, marginRight: 20 }}>{step.number}</span>
            <span style={{ fontSize: 18, fontWeight: 500 }}>{step.title}</span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: 25,
                background: "#fff",
                borderRadius: "50%",
                border: "1.5px solid #aaa",
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {hovered === idx ? "−" : "+"}
            </span>
          </div>
          {hovered === idx && (
            <div
              style={{
                color: "#222",
                marginTop: 15,
                fontSize: 14,
                lineHeight: 1.6,
                letterSpacing: 0.02
              }}
            >
              {step.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkingProcess;
