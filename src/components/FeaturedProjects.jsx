import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Shadow Studio",
    tag: "Website Design",
    image: project1,
  },
  {
    title: "Matters Group",
    tag: "Web Development",
    image: project2,
  },
  {
    title: "Holla Americana",
    tag: "Framework Design",
    image: project1,
  },
  {
    title: "POSTHUMN.Design",
    tag: "Website Development",
    image: project2,
  },
];

const FeaturedProjects = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 md:px-20 mt-16">

      {/* Section Header */}
   <div className="flex items-end justify-between mb-6 md:mb-6">

  <div>
    <p className="text-[#181818] font-cormorant font-[700] text-[16px] md:text-[24px] italic">
      (01 Projects)
    </p>

    <h2 className="text-[36px] md:text-[80px] leading-[1.1] font-urbanist font-[600] text-[#181818]">
      Featured <br className="md:hidden" /> work
    </h2>
  </div>

  <button className="px-4 md:px-6 py-1.5 bg-black text-white font-urbanist rounded-full text-[12px] md:text-sm whitespace-nowrap">
    All projects
  </button>

</div>

         {/* Divider */}
      <div className="border-t  border-[#000000] mt-10 md:mt-12 mb-10"></div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {projects.map((project, index) => (
          <div key={index}>

            {/* Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

    {/* Title + Tag */}
<div className="flex items-center justify-between gap-2 mt-3">

  <h3 className="flex-1 truncate md:truncate-none text-[20px] md:text-[32px] text-[#000000] font-urbanist font-[600]">
    {project.title}
  </h3>

  <span onClick={() => navigate("/project-details")} className="shrink-0 text-[#181818] px-3 py-1 bg-[#E3E3E3] 
  font-urbanist font-[400] text-[12px] md:text-[16px] rounded-full whitespace-nowrap cursor-pointer">
    {project.tag}
  </span>

</div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default FeaturedProjects;