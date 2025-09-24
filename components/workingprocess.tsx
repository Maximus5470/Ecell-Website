import React, { useState, useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    bgColor: "#B9FF66",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description: "In this phase, we conduct in-depth research and develop a customized marketing strategy to achieve your specific business goals.",
    bgColor: "#B9FF66",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We execute the planned marketing strategies, ensuring seamless implementation across all relevant channels and platforms.",
    bgColor: "#B9FF66",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description: "We continuously monitor results and optimize tactics to maximize your marketing ROI and adapt to any changes.",
    bgColor: "#B9FF66",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description: "Receive regular reports and clear communication about your campaign's performance, progress, and results.",
    bgColor: "#B9FF66",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description: "We look for opportunities for ongoing improvement to ensure your marketing effectiveness grows over time.",
    bgColor: "#B9FF66",
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMobile;
};

const WorkingProcess = () => {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(null);

  const handlePanelHover = idx => {
    if (!isMobile) setExpanded(idx);
  };

  const handlePanelLeave = () => {
    if (!isMobile) setExpanded(null);
  };

  const handleIconClick = (e, idx) => {
    e.stopPropagation();
    if (isMobile) setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", maxWidth: 700, margin: "40px auto" }}>
      <div style={{ display: "flex", alignItems: "baseline", marginBottom: 10 }}>
        <span style={{ color:"#000",background: "#B9FF66", fontWeight: 600, fontSize: 24, padding: "8px 18px", borderRadius: 4, marginRight: 14 }}>
          Our Working Process
        </span>
        <span style={{ color: "#656565", fontSize: 13 }}>Step-by-Step Guide to Achieving Your Business Goals</span>
      </div>
      {steps.map((step, idx) => (
        <div
          key={step.number}
          onMouseEnter={() => handlePanelHover(idx)}
          onMouseLeave={handlePanelLeave}
          style={{
            background: expanded === idx ? step.bgColor : "#f9f9f9",
            transition: "all 0.25s",
            margin: "18px 0",
            borderRadius: 20,
            border: "1.5px solid #111",
            boxShadow: expanded === idx ? "0 4px 18px rgba(200,255,106,0.12)" : "none",
            cursor: "pointer",
            padding: expanded === idx ? "28px 32px" : "18px 32px",
            minHeight: 38,
            overflow: "hidden",
            position: "relative"
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color:"#000", fontSize: 28, fontWeight: 600, marginRight: 20 }}>{step.number}</span>
            <span style={{ color: "#000",fontSize: 18, fontWeight: 500 }}>{step.title}</span>
            <span
              style={{
                color: "#000",
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
              onClick={e => handleIconClick(e, idx)}
            >
              {expanded === idx ? "−" : "+"}
            </span>
          </div>
          {expanded === idx && (
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
