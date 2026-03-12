const Hero = () => {
  return (
    <section className="px-6 md:px-20 pt-24 pb-12 md:pb-20">

      {/* Heading */}
      <h1 className="text-[43px] md:text-[96px] text-[#000000] font-urbanist font-[600] leading-[0.95]">
        We turn raw ideas into <br />
        refined digital products
      </h1>

      {/* Highlight text */}
      <p className="font-cormorant text-[#F5DD53] font-bold italic text-[56px] md:text-[60px] lg:text-[96px] leading-[0.85] mt-2">
        Just like Lemonade
      </p>

<div className="mt-10 flex flex-col md:flex-row md:justify-between md:items-start gap-6">

  {/* Paragraph */}
  <p className="max-w-[418px] text-[#000000] md:text-[18px] text-[16px] font-urbanist font-[400] order-1 md:order-2">
    We believe creativity has the power to change the world.
    Our design services help sustainable brands break through
    the noise and ignite positive change in their industries.
  </p>

  {/* Scroll */}
 <p className="mt-6 md:mt-20 text-[#000000] font-cormorant italic font-[700] text-[18px] order-2 md:order-1">
  (Scroll down)
</p>

</div>

      {/* Divider */}
      <div className="border-t  border-[#000000] mt-10 md:mt-12"></div>

    </section>
  );
};

export default Hero;