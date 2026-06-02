import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import lemon1 from "../assets/images/lemon1.png";
import lemon2 from "../assets/images/lemon2.png";
import lemon3 from "../assets/images/lemon3.png";
import lemon4 from "../assets/images/lemon4.png";

const steps = [
  {
    title: "1. Pick",
    subtitle: "The right foundation",
    desc: "Every project starts with understanding your product goals, technical requirements, and long-term scalability. We identify the right stack, tools, and structure before writing a single line of code.",
    image: lemon1,
    label: "Raw idea",
  },
  {
    title: "2. Slice",
    subtitle: "Complexity into components",
    desc: "We break large systems into modular components to ensure flexibility and scalability.",
    image: lemon2,
    label: "Planning",
  },
  {
    title: "3. Squeeze",
    subtitle: "Performance and precision",
    desc: "This is where development happens. We build scalable backend logic, smooth frontend experiences, and optimized systems that perform reliably.",
    image: lemon3,
    label: "Execution",
  },
  {
    title: "4. Serve",
    subtitle: "Production-ready solutions",
    desc: "Finally we deploy scalable and reliable solutions ready for the real world.",
    image: lemon4,
    label: "Outcome",
  },
];

const imageScales = [0.85, 1.1, 1.4, 1.6];

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const activeStepRef = useRef(0);
  const isScrollingRef = useRef(false);
  const [activeStep, setActiveStep] = useState(0);

  // Sync ref with state
  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  // Wheel handler — one scroll = one step
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();
      const inSection = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!inSection) return;

      const current = activeStepRef.current;
      const direction = e.deltaY > 0 ? 1 : -1;
      const next = current + direction;

      // If going before first step or after last, let page scroll naturally
      if (next < 0 || next >= steps.length) return;

      e.preventDefault();

      if (isScrollingRef.current) return;
      isScrollingRef.current = true;

      const sectionHeight = section.offsetHeight - window.innerHeight;
      const targetScrollY =
        section.offsetTop + (next / (steps.length - 1)) * sectionHeight;

      window.scrollTo({ top: targetScrollY, behavior: "smooth" });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 900);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Keep activeStep in sync with scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = -rect.top;
      const sectionHeight = rect.height - window.innerHeight;
      const progress = scrollTop / sectionHeight;
      const clampedProgress = Math.min(1, Math.max(0, progress));
      const stepIndex = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(clampedProgress * steps.length))
      );
      setActiveStep(stepIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = steps[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] bg-[#FFFFFF]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full px-6 md:px-20 pt-16 md:pt-24 pb-6 md:pb-24 flex flex-col">

          {/* TOP HEADER */}
          <div className="mt-6 md:mt-0">
            <p className="text-[16px] md:text-[24px] font-cormorant italic font-[700] text-[#181818]">
              (03 Process)
            </p>

            <div className="flex flex-col md:flex-row justify-between md:items-start mt-2 md:mt-3">
              <h2 className="text-[34px] md:text-[88px] leading-none text-[#181818] font-urbanist font-[600]">
                How we work.
              </h2>
              <p className="max-w-full md:max-w-[420px] text-[#818181] text-[16px] md:text-[18px] font-[400] font-urbanist mt-4 md:mt-6 leading-[160%]">
                Our process ensures deep understanding of your mission, your
                market, and your potential for positive disruption.
              </p>
            </div>

            <div className="border-t border-black/40 mt-5 md:mt-8"></div>
          </div>

          {/* CENTER CONTENT */}
          <div className="flex-1 flex flex-col justify-start md:justify-center pt-4 md:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-10 items-center"
              >

                {/* TEXT CONTENT */}
                <div className="max-w-[500px] order-1">
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[42px] md:text-[64px] leading-none font-urbanist font-[600] text-[#181818] mb-1"
                  >
                    {current.title}
                  </motion.h3>

                  <motion.h4
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-[29px] md:text-[48px] leading-[115%] font-urbanist font-[600] text-[#181818] mb-3"
                  >
                    {current.subtitle}
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#707070] text-[16px] md:text-[19px] leading-[175%] font-[400] font-urbanist max-w-[340px] md:max-w-full"
                  >
                    {current.desc}
                  </motion.p>
                </div>

                {/* IMAGE SECTION */}
                <div className="relative flex items-center justify-center w-full min-h-[200px] md:min-h-[520px] overflow-visible order-2 mt-2 md:mt-0">
                  <div className="relative w-[260px] h-[200px] md:w-[420px] md:h-[420px] flex flex-col items-center justify-center">

                    <motion.img
                      key={current.image}
                      src={current.image}
                      alt={current.title}
                      initial={{ opacity: 0, y: 80, scale: 0.82, rotate: -8 }}
                      animate={{ opacity: 1, y: 0, scale: imageScales[activeStep], rotate: -8 }}
                      exit={{ opacity: 0, y: -40, scale: 0.82, rotate: -8 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        width: "185px",
                        height: "185px",
                        objectFit: "contain",
                        flexShrink: 0,
                      }}
                      className="z-10 drop-shadow-[0_30px_40px_rgba(0,0,0,0.12)]"
                    />

                    {/* LABEL */}
                    <motion.p
                      key={current.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute bottom-[-5px] md:top-[8%] left-1/2 md:left-[18%] -translate-x-1/2 md:-translate-y-1/2 text-[44px] md:text-[130px] leading-none whitespace-nowrap font-cormorant italic text-black/90 pointer-events-none"
                    >
                      {current.label}
                    </motion.p>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;