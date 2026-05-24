import { motion } from "framer-motion";

const headingLine1 = "We turn raw ideas into";
const headingLine2 = "refined digital products";
const highlightText = "Just like Lemonade";

const Hero = () => {
  return (
    <section className="px-6 md:px-20 pt-32 md:pt-52 pb-12 md:pb-20">

{/* Animated Heading */}
<h1 className="text-[58px] leading-[0.92] md:text-[96px] text-[#000000] font-urbanist font-[600] md:leading-[0.95] max-w-[340px] md:max-w-full">

  {/* First Line */}
  <div className="flex flex-wrap">
    {headingLine1.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.2,
          delay: index * 0.12,
        }}
        className="whitespace-pre"
      >
        {char}
      </motion.span>
    ))}
  </div>

  {/* Second Line */}
  <div className="flex flex-wrap">
    {headingLine2.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.2,
          delay: 3 + index * 0.12,
        }}
        className="whitespace-pre"
      >
        {char}
      </motion.span>
    ))}
  </div>

</h1>

      {/* Animated Highlight Text */}
      <p className="font-cormorant text-[#F5DD53] font-[700] italic text-[44px] leading-[0.9] md:text-[96px] md:leading-[0.85] mt-4 md:mt-2 flex flex-wrap">

        {highlightText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
transition={{
  duration: 0.2,
delay: 6 + index * 0.12, }}

            className="whitespace-pre"
          >
            {char}
          </motion.span>
        ))}

      </p>

      {/* Content */}
      <div className="mt-14 md:mt-20 flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        {/* Paragraph */}
        <p className="max-w-[345px] md:max-w-[418px] text-[#000000] text-[18px] leading-[1.25] md:text-[18px] md:leading-[28px] font-urbanist font-[400] order-1 md:order-2">
          We believe creativity has the power to change the world.
          Our design services help sustainable brands break through
          the noise and ignite positive change in their industries.
        </p>

        {/* Scroll */}
        <p className="text-[#000000] font-cormorant italic font-[700] text-[20px] md:text-[18px] order-2 md:order-1 md:mt-20">
          (Scroll down)
        </p>

      </div>

      {/* Divider */}
      <div className="border-t border-[#000000] mt-14 md:mt-32"></div>

    </section>
  );
};

export default Hero;