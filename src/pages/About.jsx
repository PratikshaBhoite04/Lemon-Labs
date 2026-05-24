import Navbar from "../shared/Navbar";
import lemonTree from "../assets/images/plant.png";
import ProcessSection from "../components/ProcessSection";
import Contact from "./Contact";

const About = () => {
  return (
    <>
      <Navbar />

<section className="bg-[#FFFFFF] min-h-screen px-6 sm:px-8 md:px-20 pt-32 md:pt-40 pb-20">

        {/* HERO */}
        <div className="text-center">

          <p className="font-cormorant italic text-[16px] sm:text-[18px] md:text-[24px] font-[700] text-[#181818] mb-2 md:mb-4">
            (About us)
          </p>

          <h1
            className="
            font-urbanist
            font-[600]
            leading-[0.92]
            text-[#181818]
            text-[48px]
            sm:text-[70px]
            md:text-[110px]
            "
          >
            We
            <br />

            <span className="font-cormorant italic text-[#F5DD53] font-[600]">
              build digital systems
            </span>

            <br />

            that are
            <br />

            <span className="font-cormorant italic text-[#F5DD53] font-[600]">
              made to scale.
            </span>
          </h1>

          <p
            className="
            max-w-[920px]
            mx-auto
            mt-6
            md:mt-8
            text-[#707070]
            text-[14px]
            sm:text-[16px]
            md:text-[18px]
            font-urbanist
            leading-[165%]
            px-2
            "
          >
            We are a development studio focused on building scalable,
            high-performance digital systems for teams that think long-term.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-black mt-14 md:mt-20"></div>

        {/* SPACING LIKE FIGMA */}
        <div className="h-[180px] sm:h-[220px] md:h-[420px]"></div>

       {/* WHY SECTION */}
<div>

  {/* TOP */}
  <div
    className="
    flex
    flex-col
    md:flex-row
    md:items-end
    md:justify-between
    gap-4
    md:gap-10
    "
  >

    {/* LEFT */}
    <div>

      <p className="font-cormorant italic text-[14px] sm:text-[18px] md:text-[24px] font-[700] text-[#181818] mb-2 md:mb-3">
        (02 Why us)
      </p>

      <h2
        className="
        font-urbanist
        font-[600]
        text-[38px]
        sm:text-[52px]
        md:text-[68px]
        leading-[1]
        text-[#181818]
        "
      >
        Why We Exists
      </h2>

    </div>

    {/* RIGHT */}
    <p
      className="
      hidden md:block
      max-w-[340px]
      text-[#9A9A9A]
      text-[18px]
      font-urbanist
      leading-[150%]
      text-right
      mb-2
      "
    >
      Our process ensures deep understanding of your mission,
      your market, and your potential for positive disruption.
    </p>

  </div>

  {/* Divider */}
  <div className="border-t border-black mt-5 md:mt-8 mb-6 md:mb-12"></div>

  {/* CONTENT */}
  <div className="relative">

    {/* MAIN CONTENT */}
    <div className="flex flex-col md:flex-row md:justify-between gap-6">

      {/* LEFT TEXT */}
      <div className="max-w-[700px]">

        <h3
          className="
          font-urbanist
          text-[28px]
          sm:text-[36px]
          md:text-[48px]
          leading-[120%]
          font-[600]
          text-[#181818]
          "
        >
          If something is worth building,
          <br />
          It’s worth building properly.
        </h3>

      </div>

      {/* RIGHT SMALL TEXT */}
      <div>

        <p
          className="
          font-cormorant
          italic
          text-[20px]
          sm:text-[26px]
          md:text-[40px]
          text-[#C5C5C5]
          leading-[120%]
          text-left
          md:text-right
          "
        >
          Not rushed.
          <br />
          Not patched.
          <br />
          Not fragile.
        </p>

      </div>

    </div>

    {/* TREE + STRUCTURED */}
    <div
      className="
      relative
      flex
      flex-col
      items-start
      mt-10
      md:mt-14
      "
    >

      {/* TREE */}
      <img
        src={lemonTree}
        alt="Lemon Tree"
        className="
        w-[170px]
        sm:w-[210px]
        md:w-[300px]
        object-contain
        self-end
        md:mr-24
        "
      />

      {/* STRUCTURED */}
      <h4
        className="
        absolute
        left-0
        bottom-2
        md:bottom-0
        font-cormorant
        italic
        text-[#F5DD53]
        text-[44px]
        sm:text-[54px]
        md:text-[72px]
        leading-none
        "
      >
        Structured.
      </h4>

    </div>

  </div>

</div>


{/* PROCESS SECTION */}
<ProcessSection />


{/* WHO WE BUILD FOR */}
<div className="mt-20 md:mt-20">


  {/* TOP ROW */}
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

    {/* LEFT SMALL LABEL */}
    <div className="md:pb-4">
      <p className="font-cormorant italic text-[16px] md:text-[24px] font-[700] text-[#181818]">
        (04 for whom do we build)
      </p>
    </div>

{/* RIGHT HEADING */}
<div className="w-full md:w-[640px] flex md:justify-end">

  <h2
    className="
    w-full
    md:w-[540px]
    font-urbanist
    font-[600]
    text-[42px]
    sm:text-[56px]
    md:text-[52px]
    leading-[0.95]
    text-[#181818]
    text-left
    "
  >
    Built for teams
    <br />
    that think long-term.
  </h2>

</div>

  </div>


  {/* Divider */}
  <div className="border-t border-black mt-6 md:mt-8"></div>

{/* DESCRIPTION */}
<div className="mt-8 md:mt-12 w-full">

  <p
    className="
    w-full
    font-urbanist
    font-[600]
    text-[#181818]
    leading-[1.12]
    tracking-[-0.03em]
    text-[30px]
    sm:text-[40px]
    md:text-[50px]
    max-w-[1320px]
    "
  >
    We partner with people who care about performance,
    structure, and building things that last.
  </p>

</div>

{/* HOVER WORDS */}
<div className="mt-14 md:mt-20 flex flex-col gap-10 md:gap-16">

  {/* STARTUPS */}
  <div className="group cursor-pointer">

    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

      <h3
        className="
        font-cormorant
        italic
        text-[#F5DD53]
        md:opacity-40
        md:group-hover:opacity-100
        transition-all
        duration-300
        text-[34px]
        sm:text-[42px]
        md:text-[80px]
        leading-none
        "
      >
        Startups,
      </h3>

      <p
        className="
        text-[#707070]
        md:opacity-0
        md:group-hover:opacity-100
        transition-all
        duration-300
        font-urbanist
        text-[14px]
        md:text-[22px]
        md:max-w-[620px]
        leading-[145%]
        "
      >
        Building products that are meant to scale, not restart.
      </p>

    </div>

  </div>

  {/* FOUNDERS */}
  <div className="group cursor-pointer md:ml-auto">

    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

      <p
        className="
        text-[#707070]
        hidden md:block
        md:opacity-0
        md:group-hover:opacity-100
        transition-all
        duration-300
        font-urbanist
        text-[22px]
        md:max-w-[620px]
        leading-[145%]
        "
      >
        Who are focused on performance, not just how things look
      </p>

      <h3
        className="
        font-cormorant
        italic
        text-[#F5DD53]
        md:opacity-40
        md:group-hover:opacity-100
        transition-all
        duration-300
        text-[34px]
        sm:text-[42px]
        md:text-[92px]
        leading-none
        "
      >
        ,Founders
      </h3>

      {/* MOBILE TEXT */}
      <p
        className="
        md:hidden
        text-[#707070]
        font-urbanist
        text-[14px]
        leading-[145%]
        "
      >
        Who are focused on performance, not just how things look
      </p>

    </div>

  </div>

  {/* PRODUCT TEAMS */}
  <div className="group cursor-pointer">

    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

      <h3
        className="
        font-cormorant
        italic
        text-[#F5DD53]
        md:opacity-40
        md:group-hover:opacity-100
        transition-all
        duration-300
        text-[34px]
        sm:text-[42px]
        md:text-[92px]
        leading-none
        "
      >
        Product Teams,
      </h3>

      <p
        className="
        text-[#707070]
        md:opacity-0
        md:group-hover:opacity-100
        transition-all
        duration-300
        font-urbanist
        text-[14px]
        md:text-[22px]
        md:max-w-[620px]
        leading-[145%]
        "
      >
        Who are designing systems that grow without breaking.
      </p>

    </div>

  </div>

  {/* BUSINESSES */}
  <div className="group cursor-pointer md:ml-auto">

    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

      <p
        className="
        text-[#707070]
        hidden md:block
        md:opacity-0
        md:group-hover:opacity-100
        transition-all
        duration-300
        font-urbanist
        text-[22px]
        md:max-w-[620px]
        leading-[145%]
        "
      >
        Investing in digital foundations built for longevity
      </p>

      <h3
        className="
        font-cormorant
        italic
        text-[#F5DD53]
        md:opacity-40
        md:group-hover:opacity-100
        transition-all
        duration-300
        text-[34px]
        sm:text-[42px]
        md:text-[92px]
        leading-none
        "
      >
        ,Businesses
      </h3>

      {/* MOBILE TEXT */}
      <p
        className="
        md:hidden
        text-[#707070]
        font-urbanist
        text-[14px]
        leading-[145%]
        "
      >
        Investing in digital foundations built for longevity
      </p>

    </div>

  </div>

</div>

</div>


{/* CONTACT SECTION */}
<div className="mt-10 md:mt-10">
  <Contact />
</div>

      </section>
    </>
  );
};

export default About;