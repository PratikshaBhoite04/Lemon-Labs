import project3 from "../assets/images/project3.png";
import project1 from "../assets/images/project1.png";
import { useNavigate } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  { title: "Shadow Studio", tag: "Website Design", image: project3 },
  { title: "Shadow Studio", tag: "Website Design", image: project3 },
  { title: "Shadow Studio", tag: "Website Design", image: project3 },
  { title: "Shadow Studio", tag: "Website Design", image: project3 },
  { title: "Shadow Studio", tag: "Website Design", image: project3 },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
<section className="px-6 md:px-20 pt-40 md:pt-42 pb-10">
      {/* Heading */}
      <div className="text-center mb-16">

        <p className="text-[#000000] text-[24px] font-cormorant italic font-[700] pb-5">
          (Projects)
        </p>

        <h1 className="text-[36px] md:text-[100px] font-urbanist font-[600] leading-[0.80]">
          See how we <br />
          <span className="text-[#F5DD53] italic  font-[700] font-cormorant">
            make an impact.
          </span>
        </h1>

        <p className="mt-10 text-[#000000] font-urbanist font-[400] text-[18px] leading-[28px] max-w-[400px] mx-auto text-center">
          Choose a project to see examples of creativity
          building industry leaders in sustainability.
        </p>

      </div>

      {/* Projects List */}

{/* Divider */}
<div className="border-t border-[#181818] mt-20 md:mt-28 mb-16 md:mb-24 max-w-[1000px] mx-auto"></div>


<div className="space-y-20">

        {projects.map((project, index) => (

          <div
            key={index}
            onClick={() => navigate("/project-details")}
            className="flex flex-col items-center group cursor-pointer"
          >

            {/* Image Wrapper */}
            <div className="relative rounded-[28px] overflow-hidden max-w-[1000px] w-full bg-black">

              {/* Desktop Image */}
              <img
                src={project.image}
                alt={project.title}
                className="hidden md:block w-full h-[478px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
              />

              {/* Mobile Image */}
              <img
                src={project1}
                alt={project.title}
                className="block md:hidden w-full aspect-[900/700] object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-700"></div>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">

                <div className="text-center text-white">

                  <h2 className="text-[30px] md:text-[52px] font-urbanist font-[700] leading-none">
                    {project.title}
                  </h2>

                </div>

              </div>

              {/* Arrow Icon */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">

                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center backdrop-blur-sm">

                  <HiArrowUpRight className="text-white text-[24px] md:text-[28px]" />

                </div>

              </div>

            </div>

            {/* Bottom Content */}
            <div className="flex items-center justify-between mt-4 max-w-[1000px] w-full gap-3">

              <h3 className="text-[24px] md:text-[32px] font-urbanist font-[600] text-[#000000]">
                {project.title}
              </h3>

              <span
                className="shrink-0 text-[#181818] px-3 md:px-4 py-1 bg-[#E3E3E3]
                font-urbanist font-[400] text-[12px] md:text-[16px] rounded-full whitespace-nowrap"
              >
                {project.tag}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;