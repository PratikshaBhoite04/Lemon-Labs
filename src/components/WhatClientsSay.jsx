import { useState } from "react";
import clientImg from "../assets/images/profile.png";
import arrow1 from "../assets/images/arrow1.png";
import arrow2 from "../assets/images/arrow2.png";

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: `"Lemon Labs took our messy story and turned it into something that actually connects with people who care about the Health & Wellness"`,
    name: "Sarah Martinez",
    role: "Co-Founder of Pharma Co",
    image: clientImg,
  },
  {
    text: `"Their team helped transform our digital product with incredible clarity and execution."`,
    name: "David Lee",
    role: "Founder of TechFlow",
    image: clientImg,
  },
];

const WhatClientsSay = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const t = testimonials[active];

  return (
    <section className="px-6 md:px-20 mt-24 bg-[#F2F2F2] py-4">

      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 ">

        <div>
          <p className="text-[#181818] font-cormorant italic font-[700] text-[18px] md:text-[24px]">
            (04 Testimonials)
          </p>

          <h2 className="text-[38px] md:text-[80px] text-[#181818] font-urbanist font-[600]">
            What clients say.
          </h2>
        </div>

        <p className="max-w-md text-[#707070]  md:text-[18px] font-urbanist font-[400] mt-4 md:mt-0">
          We work with passionate change makers. Here’s what they say
          about working with us.
        </p>

      </div>

      {/* Divider */}
      <div className="border-t border-black mb-10"></div>

      {/* Testimonial card */}
      <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">

        {/* Image */}
        <img
          src={t.image}
          alt={t.name}
          className="w-[180px] h-[240px] rounded-xl object-cover"
        />

        {/* Text content */}
        <div>

          {/* Stars */}
         <div className="flex mb-4 gap-1">
  <FaStar className="text-[#F5DD53]" />
  <FaStar className="text-[#F5DD53]" />
  <FaStar className="text-[#F5DD53]" />
  <FaStar className="text-[#F5DD53]" />
  <FaStar className="text-[#F5DD53]" />
</div>

          {/* Quote */}
          <p className="text-[18px] md:text-[28px] font-urbanist font-[400] text-[#181818] mb-6 max-w-2xl">
            {t.text}
          </p>

          {/* Author */}
          <div>
            <p className="text-[#181818] font-cormorant italic font-[400] text-[24px] md:text-[24px]">{t.name}</p>
            <p className="text-[#707070] font-[400] text-[16px] font-urbanist">{t.role}</p>
          </div>

        </div>

      </div>

      {/* Navigation */}
<div className="flex gap-3 justify-end mt-6">

  <button
    onClick={prev}
    className="w-10 h-10 rounded-full bg-[#707070] flex items-center justify-center"
  >
    <img src={arrow1} alt="Previous" className="w-4 h-4 object-contain" />
  </button>

  <button
    onClick={next}
    className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
  >
    <img src={arrow2} alt="Next" className="w-4 h-4 object-contain" />
  </button>

</div>

    </section>
  );
};

export default WhatClientsSay;