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

const ProcessSection = () => {
  const sectionRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect =
        sectionRef.current.getBoundingClientRect();

      const scrollTop = -rect.top;

      const sectionHeight =
        rect.height - window.innerHeight;

      const progress =
        scrollTop / sectionHeight;

      const totalSteps = steps.length;

      const stepIndex = Math.min(
        totalSteps - 1,
        Math.max(
          0,
          Math.floor(progress * totalSteps)
        )
      );

      setActiveStep(stepIndex);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const current = steps[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative h-[450vh] bg-[#FFFFFF]"
    >
      {/* STICKY SECTION */}
      <div className="sticky top-0 h-screen overflow-hidden">

        <div className="h-full px-6 md:px-20 py-10 md:py-16 flex flex-col">

          {/* TOP HEADER */}
          <div>

            <p className="text-[18px] md:text-[24px] font-cormorant italic font-[700] text-[#181818]">
              (03 Process)
            </p>

            <div className="flex flex-col md:flex-row justify-between md:items-start mt-3">

              <h2 className="text-[52px] md:text-[88px] leading-none text-[#181818] font-urbanist font-[600]">
                How we work.
              </h2>

              <p className="max-w-[420px] text-[#818181] text-[15px] md:text-[18px] font-[400] font-urbanist mt-5 md:mt-6 leading-[150%]">
                Our process ensures deep understanding
                of your mission, your market, and your
                potential for positive disruption.
              </p>

            </div>

            <div className="border-t border-black/40 mt-8"></div>

          </div>

          {/* CENTER CONTENT */}
          <div className="flex-1 flex items-center">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeStep}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -80,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  w-full
                  grid
                  md:grid-cols-2
                  gap-14
                  md:gap-10
                  items-center
                "
              >

                {/* LEFT SIDE */}
                <div className="max-w-[500px]">

                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="
                      text-[40px]
                      md:text-[64px]
                      leading-none
                      font-urbanist
                      font-[600]
                      text-[#181818]
                      mb-5
                    "
                  >
                    {current.title}
                  </motion.h3>

                  <motion.h4
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="
                      text-[28px]
                      md:text-[48px]
                      leading-[110%]
                      font-urbanist
                      font-[600]
                      text-[#181818]
                      mb-6
                    "
                  >
                    {current.subtitle}
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="
                      text-[#707070]
                      text-[16px]
                      md:text-[19px]
                      leading-[180%]
                      font-urbanist
                    "
                  >
                    {current.desc}
                  </motion.p>

                </div>
{/* RIGHT SIDE */}
<div
  className="
    relative
    flex
    items-center
    justify-center
    w-full
    min-h-[320px]
    md:min-h-[520px]
    overflow-hidden
  "
>

  {/* COMPOSITION WRAPPER */}
  <div
    className="
      relative
      w-[280px]
      h-[280px]

      md:w-[420px]
      md:h-[420px]

      flex
      items-center
      justify-center
    "
  >

    {/* LABEL */}
    <motion.p
      key={current.label}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        z-0

        top-[14%]
        left-[18%]

        -translate-x-1/2
        -translate-y-1/2

        text-[72px]
        md:text-[130px]

        leading-none
        whitespace-nowrap

        font-cormorant
        italic

        text-black/90
        pointer-events-none
      "
    >
      {current.label}
    </motion.p>

    {/* IMAGE */}
    <motion.img
      key={current.image}
      src={current.image}
      alt={current.title}
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.82,
        rotate: -8,
      }}
      animate={{
        opacity: 1,
        y: 40,
        scale: 1,
        rotate: -8,
      }}
      exit={{
        opacity: 0,
        y: -80,
        scale: 0.82,
        rotate: -8,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        absolute
        z-10
        object-contain

        drop-shadow-[0_30px_40px_rgba(0,0,0,0.12)]

        ${
          activeStep === 0
            ? "w-[170px] md:w-[240px]"
            : "w-[220px] md:w-[300px]"
        }
      `}
    />

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