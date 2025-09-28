import React from "react";
import Flashcard from "@/components/Flashcard";
import Timeline from "@/components/Timeline";
import Hero_Aboutus from "@/components/Hero_Aboutus";

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-8 lg:pt-12">
      <Hero_Aboutus />
      <Timeline />
      <Flashcard />
    </div>
  );
}
