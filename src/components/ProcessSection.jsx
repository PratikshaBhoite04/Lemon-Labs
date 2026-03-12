import { useEffect, useState, useRef } from "react";

import lemon1 from "../assets/images/lemon1.png";
import lemon2 from "../assets/images/lemon2.png";
import lemon3 from "../assets/images/lemon3.png";
import lemon4 from "../assets/images/lemon4.png";

const steps = [
  {
    title: "1. Pick",
    subtitle: "The right foundation",
    desc: "Every project starts with understanding your product goals, technical requirements, and long-term scalability.",
    image: lemon1,
    label: "Raw idea"
  },
  {
    title: "2. Slice",
    subtitle: "Complexity into components",
    desc: "We break large systems into modular components to ensure flexibility and scalability.",
    image: lemon2,
    label: "Planning"
  },
  {
    title: "3. Squeeze",
    subtitle: "Performance and precision",
    desc: "We develop efficient systems optimized for speed and performance.",
    image: lemon3,
    label: "Execution"
  },
  {
    title: "4. Serve",
    subtitle: "Production-ready solutions",
    desc: "Finally we deploy scalable and reliable solutions ready for the real world.",
    image: lemon4,
    label: "Outcome"
  }
];

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();

      const progress =
        (window.innerHeight - rect.top) / rect.height;

      const index = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(progress * steps.length))
      );

      setStep(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = steps[step];

  return (
    <section ref={sectionRef} className="px-6 md:px-20 py-32">

      {/* HEADER */}
      <p className="text-[24px] font-cormorant text-[#181818] italic font-[700]">
        (03 Process)
      </p>

      <div className="flex justify-between items-start mt-2">

        <h2 className="text-[42px] md:text-[80px] text-[#181818] font-urbanist font-[600]">
          How we work.
        </h2>

        <p className="max-w-md text-[#818181] text-[18px] font-[400] font-urbanist mb-0">
          Our process ensures deep understanding of your mission,
          your market, and your potential for positive disruption.
        </p>
       
      </div>

      <div className="border-t border-black mt-6 mb-24"></div>

      {/* STICKY SCROLL AREA */}
      <div className="h-[300vh] relative">

        <div className="sticky top-[150px] flex items-center justify-between">

          {/* LEFT TEXT */}
          <div className="max-w-md">

            <h3 className="text-[28px] font-urbanist font-semibold mb-2">
              {current.title}
            </h3>

            <p className="font-medium mb-3">
              {current.subtitle}
            </p>

            <p className="text-[#707070] text-[14px]">
              {current.desc}
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center gap-8">

            <img
              src={current.image}
              alt="step"
              className="w-[200px] transition-all duration-500"
            />

            <p className="text-[64px] italic font-cormorant">
              {current.label}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProcessSection;