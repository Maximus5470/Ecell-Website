// components/Flashcard.tsx
import React from "react";


const cards = [
  {
    title: "Best Startup Award",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit id nibh tristique efficitur.",
  },
  {
    title: "Innovation Recognition",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit id nibh tristique efficitur.",
  },
  {
    title: "Community Impact",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit id nibh tristique efficitur.",
  },
  {
    title: "Excellence in Mentorship",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac velit id nibh tristique efficitur.",
  },
];

const colors = {
  grayMid: "#F5F5F5",
  gray: "#D9D9D9",
  dark: "#191A23",
};

function Badge1() {
  return (
    <svg width="100" height="100" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="18" r="8" fill={colors.dark} />
      <path d="M20 30c1.333-2 6-2 8 0" stroke={colors.dark} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Badge2() {
  return (
    <svg width="100" height="100" viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="14" y="14" width="20" height="12" rx="3" fill={colors.dark} />
      <path d="M18 30h12" stroke={colors.dark} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Badge3() {
  return (
    <svg width="100" height="100" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M24 14l4.5 9 10 1.2-7.5 6.6 2.2 9.8L24 33.5 14.8 40.2 17 30.4 9.6 23.8 19.6 22.6 24 14z" fill={colors.dark} />
    </svg>
  );
}

function Badge4() {
  return (
    <svg width="100" height="100" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="20" r="6" fill={colors.dark} />
      <rect x="16" y="28" width="16" height="6" rx="2" fill={colors.dark} />
    </svg>
  );
}

export default function Flashcard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-block px-5 py-3 text-2xl font-bold rounded-lg bg-[#B9FF66] text-[#191A23]">
            Awards & Recognitions
          </span>
        </div>
        <p className="max-w-3xl text-base text-[#191A23]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          congue, massa at feugiat faucibus, sapien sem iaculis nisl, sit amet
          faucibus lorem neque eget sapien.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <article
            key={i}
            className="h-[450px] rounded-3xl p-10 flex flex-col items-center bg-[#F5F5F5] border border-[#D9D9D9] 
                       transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            aria-labelledby={`flash-title-${i}`}
          >
            {/* Icon centered */}
            <div className="mb-6 flex justify-center">
              {i === 0 ? <Badge1 /> : i === 1 ? <Badge2 /> : i === 2 ? <Badge3 /> : <Badge4 />}
            </div>

            {/* Title */}
            <h3 className="mb-4 text-2xl font-semibold text-[#191A23]" id={`flash-title-${i}`}>
              {c.title}
            </h3>

            {/* Body */}
            <p className="text-sm text-[#191A23] leading-relaxed flex-1 text-justify">
              {c.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
