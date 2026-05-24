import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Our process ensures deep understanding of your mission, your market, and your potential for positive disruption.",
    points: [
      "Front-End development",
      "Back-End development",
      "Testing",
      "Quality Assurance",
      "Deployment & Maintenance",
    ],
  },
  {
    title: "Web Design",
    description:
      "Design systems and user experiences that convert.",
    points: [
      "UI Design",
      "UX Research",
      "Prototyping",
      "Interaction Design",
    ],
  },
  {
    title: "UI/UX",
    description:
      "User-focused design to build engaging digital experiences.",
    points: [
      "Wireframing",
      "User Testing",
      "Design Systems",
    ],
  },
  {
    title: "Brand Strategy",
    description:
      "Positioning and branding to help businesses stand out.",
    points: [
      "Brand Identity",
      "Visual Systems",
      "Brand Guidelines",
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
   <section
  id="services"
  className="scroll-mt-32 px-6 md:px-20 mt-20 pb-20"
>

      {/* Heading */}
      <div className="flex justify-between items-start mb-8">

        <p className="font-cormorant italic text-[16px] md:text-[24px] font-[700]">
          (02 How we can help)
        </p>

        <h2 className="font-urbanist text-[42px] md:text-[90px] leading-none font-[600] text-right">
          Our Services.
        </h2>

      </div>

      {/* Divider */}
      <div className="border-t border-black mb-12"></div>

      {/* Services */}
      <div className="space-y-6">

        {services.map((service, index) => {
          const isActive = active === index;
          const isHovered = hovered === index;

          return (
            <motion.div
              key={index}
              layout
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`rounded-[24px] overflow-hidden transition-all duration-500
              
              ${
                isActive || isHovered
                  ? "bg-[#111111]"
                  : "bg-[#F3F3F3]"
              }`}
            >

              {/* Top Row */}
              <div
                onClick={() =>
                  setActive(isActive ? null : index)
                }
                className="flex justify-between items-center px-6 md:px-14 py-8 cursor-pointer"
              >

                <h3
                  className={`font-urbanist font-[600]  transition-all duration-300
                  
                  ${
                    isActive || isHovered
                      ? "text-[#E8D64E]"
                      : "text-black"
                  }
                  
                  text-[28px] md:text-[48px] font-[400]`}
                >
                  {service.title}
                </h3>

                {/* Plus / Cross */}
                <span
                  className={`text-[42px] md:text-[72px] leading-none transition-all duration-300
                  
                  ${
                    isActive || isHovered
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {isActive ? "×" : "+"}
                </span>

              </div>

              {/* Expanded Content */}
              <AnimatePresence>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >

<div className="px-6 md:px-14 pb-8 md:pb-12 grid md:grid-cols-[1.2fr_1.8fr] gap-8 md:gap-[140px]">
          {/* Left Description */}
<div className="max-w-[420px]">

<p className="text-[#8E8E8E] font-urbanist text-[14px] md:text-[20px] leading-[145%] max-w-[260px] md:max-w-[420px]">
  {service.description}
</p>

</div>

{/* Right Points */}
<div className="grid grid-cols-2 gap-x-6 md:gap-x-14 gap-y-3 md:gap-y-4">
  
  {service.points.map((point, i) => (
    <div
      key={i}
      className="text-[#9F9F9F] font-urbanist text-[16px] md:text-[22px]"
    >
      • {point}
    </div>
  ))}

</div>

                    </div>

                  </motion.div>
                )}

              </AnimatePresence>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
};

export default Services;