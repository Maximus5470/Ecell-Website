import Hero from "@/components/Hero";
import WorkingProcess from "@/components/WorkingProcessComponent";
import ServicesSection from "@/sections/ServicesSection";
import ContactUs from "@/components/ContactUs";

const workingProcessSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
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

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-baseline mb-8 sm:mb-12 text-center lg:text-left">
            <span className="bg-[#B9FF66] text-black font-bold text-xl sm:text-2xl lg:text-3xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg mb-4 lg:mb-0 lg:mr-8 inline-block">Our Working Process</span>
            <span className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">Step-by-Step Guide to Achieving Your Business Goals</span>
          </div>
        </div>
        <WorkingProcess
          steps={workingProcessSteps}
        />
      </div>
      <ContactUs />
    </div>
  );
}