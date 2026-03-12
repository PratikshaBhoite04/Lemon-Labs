import { useState } from "react";

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
    description: "Design systems and user experiences that convert.",
    points: ["UI Design", "UX Research", "Prototyping", "Interaction Design"],
  },
  {
    title: "UI/UX",
    description: "User-focused design to build engaging digital experiences.",
    points: ["Wireframing", "User Testing", "Design Systems"],
  },
  {
    title: "Brand Strategy",
    description: "Positioning and branding to help businesses stand out.",
    points: ["Brand Identity", "Visual Systems", "Brand Guidelines"],
  },
];

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 md:px-20 mt-20">

      {/* Heading */}
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-[36px] md:text-[80px] font-urbanist font-[600]">
          Our Services.
        </h2>
      </div>

      <div className="border-t border-black mb-10"></div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT LIST */}
        <div className="space-y-4">

          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`flex justify-between items-center p-6 rounded-xl cursor-pointer transition
              ${
                active === index
                  ? "bg-white shadow-sm"
                  : "bg-gray-100"
              }`}
            >
              <span className="font-urbanist text-lg">
                {service.title}
              </span>

              <span className="text-xl">
                {active === index ? "×" : "+"}
              </span>
            </div>
          ))}

        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center md:justify-end">

          <div className="bg-[#111111] text-white rounded-xl p-8 w-full max-w-sm">

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-yellow-400 font-urbanist text-lg">
                {services[active].title}
              </h3>

              <button
                onClick={() => setActive(null)}
                className="text-xl"
              >
                ×
              </button>
            </div>

            <p className="text-sm text-gray-300 mb-6">
              {services[active].description}
            </p>

            <ul className="space-y-2 text-sm text-gray-300">
              {services[active].points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Services;