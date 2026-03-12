import hero from "../assets/images/project-detail-hero.png";
import overviewImage from "../assets/images/overviewimage.png";
import highlight1 from "../assets/images/highlight1.png";
import highlight2 from "../assets/images/highlight2.png";
import resultImage from "../assets/images/project3.png";

const ProjectDetails = () => {
  return (
    <section className="px-6 md:px-20 py-16">

      {/* HERO IMAGE */}
      <div className="relative rounded-[24px] overflow-hidden">

        <img
          src={hero}
          alt="Shadow Studio"
          className="w-full h-[300px] md:h-[520px] object-cover"
        />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* CONTENT */}
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          <div>
            <span className="bg-[#E3E3E3] text-[#181818] font-[400] text-[16px] font-urbanist px-3 py-1 rounded-full text-sm">
              Full Website Development
            </span>

            <h1 className="text-[#F4F4F4] text-[32px] md:text-[92px] font-urbanist font-[600] mt-3">
              Shadow Studio
            </h1>

            <p className="text-[400]  text-[16px] font-urbanist text-[#818181] md:text-[18px]">
              A scalable digital platform built for performance and clarity.
            </p>
          </div>

          <button className="bg-black text-[#F4F4F4] px-6 py-3 rounded-full text-sm md:text-[18px] font-[600] font-urbanist flex items-center gap-2">
            View Live Project →
          </button>

        </div>
      </div>

      {/* PROJECT META INFO */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12 text-sm md:text-base">

        <div>
          <p className="text-[#000000] text-[24px] font-cormorant italic font-[700]">Client</p>
          <p className="font-[400] font-urbanist text-[18px] text-[#707070] mt-2">Shadow Studio</p>
        </div>

        <div>
          <p className="text-[#000000] text-[24px] font-cormorant italic font-[700]">Industry</p>
          <p className="font-[400] font-urbanist text-[18px] text-[#707070] mt-2">Creative Agency</p>
        </div>

        <div>
          <p className="text-[#000000] text-[24px] font-cormorant italic font-[700]">Year</p>
          <p className="font-[400] font-urbanist text-[18px] text-[#707070] mt-2">2025</p>
        </div>

        <div>
          <p className="text-[#000000] text-[24px] font-cormorant italic font-[700]">Duration</p>
          <p className="font-[400] font-urbanist text-[18px] text-[#707070] mt-2">1 Week</p>
        </div>

        <div>
          <p className="text-[#000000] text-[24px] font-cormorant italic font-[700]">Tech Stack</p>
          <p className="font-[400] font-urbanist text-[18px] text-[#707070] mt-2">Next.js, Node.js, Tailwind</p>
        </div>

      </div>

      {/* Divider */}
        <div className="border-t  border-[#000000] mt-10 md:mt-12"></div>


{/* PROJECT OVERVIEW */}
<section className="mt-20">

  {/* Heading Row */}
  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

    <div>
      <p className="text-[#000000] text-[24px] font-cormorant italic font-[700]">
        (01)
      </p>

      <h2 className="text-[32px] md:text-[48px] font-urbanist font-[600]">
        Project overview.
      </h2>
    </div>

    <p className="text-[#707070] text-[18px]  font-[400] md:text-[18px] max-w-[580px] leading-[28px]">
     We developed a performance-optimized website focused on speed, scalability, and long-term maintainability. 
     The goal was to translate their creative identity into a stable, high-performing digital product.
    </p>

  </div>

  {/* Image */}
  <div className="mt-10 rounded-[24px] overflow-hidden">

    <img
      src={overviewImage}
      alt="Project overview"
      className="w-full h-[300px] md:h-[600px] object-cover"
    />

  </div>

</section>



{/* HIGHLIGHTS */}
<section className="mt-20">

  {/* Heading Row */}
  <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-10">

    <div>
      <p className="text-[#000000] font-cormorant italic font-[700] md:text-[24px] text-[18px]">
        (02)
      </p>

      <h2 className="text-[36px] md:text-[48px] font-urbanist font-[600]">
        Highlights
      </h2>
    </div>

    <p className="max-w-[620px] text-[#707070] font-urbanist text-[18px] font-[400] md:text-[18px] leading-[28px]">
     Built with precision. Optimized for performance. Engineered to scale.
      Basically, Every decision in this project was driven by performance,
       maintainability, and long-term growth. 
     From clean architecture to responsive execution, 
     the system was developed to deliver reliability in real-world conditions.
    </p>

  </div>


  {/* Image Cards */}
<div className="grid md:grid-cols-2 gap-8">

  <div className="rounded-[24px] overflow-hidden">
    <img
      src={highlight1}
      alt="Highlight 1"
      className="w-full aspect-[4/5] object-cover"
    />
  </div>

  <div className="rounded-[24px] overflow-hidden">
    <img
      src={highlight2}
      alt="Highlight 2"
      className="w-full aspect-[4/5] object-cover"
    />
  </div>

</div>

  {/* Image */}
  <div className="mt-10 rounded-[24px] overflow-hidden">

    <img
      src={overviewImage}
      alt="Project overview"
      className="w-full h-[300px] md:h-[600px] object-cover"
    />

  </div>

</section>


{/* RESULT SECTION */}
<section className="mt-20">

  {/* Heading */}
  <div className="flex items-start justify-between mb-10">

    <div>
      <p className="text-[#000000] text-[24px] font-cormorant italic font-[700]">
        (03)
      </p>

      <h2 className="text-[36px] md:text-[48px] font-urbanist font-[600]">
        Result
      </h2>
    </div>

    <p className="max-w-[580px] text-[#818181] font-urbanist text-[18px]">
     Achieved significantly improved site performance and user engagement through a 
     streamlined structure and optimized development approach.
      The refined digital platform positioned Shadow Studio as a premium creative agency,
      helping attract higher-value clients and improving overall brand perception.
    </p>

  </div>


  {/* BIG RESULT IMAGE */}
<div className="relative mt-10 rounded-[24px] overflow-hidden">

  {/* Image */}
  <img
    src={resultImage}
    alt="Project Result"
    className="w-full h-[320px] md:h-[520px] object-cover"
  />

  {/* Fade Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Center Text */}
  <div className="absolute inset-0 flex items-center justify-center text-center px-6">

    <p className="text-white font-urbanist text-[18px] md:text-[28px] font-[500] max-w-[520px] leading-snug">
      UI Screenshot / Dashboard / <br />
      Mockup / performance metrics visual
    </p>

  </div>

</div>

  {/* OR TEXT */}
  <p className="text-start font-urbanist font-[600] md:text-[39] text-[18px] text-[#181818] my-8">
    OR
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

  {/* BEFORE */}
  <div className="relative rounded-[24px] overflow-hidden">

    <img
      src={highlight1}
      alt="Before"
      className="w-full h-[420px] object-cover"
    />

    {/* Fade Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Text */}
    <p className="absolute inset-0 flex items-center justify-center 
    text-white text-[24px] font-urbanist font-[600]">
      Before
    </p>

  </div>


  {/* AFTER */}
  <div className="relative rounded-[24px] overflow-hidden">

    <img
      src={highlight2}
      alt="After"
      className="w-full h-[full] object-cover"
    />

    {/* Fade Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Text */}
    <p className="absolute inset-0 flex items-center justify-center 
    text-white text-[24px] font-urbanist font-[600]">
      After
    </p>

  </div>

</div>


    </section>

    </section>



  );

  
};

export default ProjectDetails;