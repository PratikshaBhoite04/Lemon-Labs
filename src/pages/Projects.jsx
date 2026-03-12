import project3 from "../assets/images/project3.png";
import project1 from "../assets/images/project1.png";
import { useNavigate } from "react-router-dom";

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
    <section className="px-6 md:px-20 py-10">

      {/* Heading */}
      <div className="text-center mb-16">

        <p className="text-[#000000] text-[24px] font-cormorant italic font-[700]">
          (Projects)
        </p>

        <h1 className="text-[36px] md:text-[70px] font-urbanist font-[600] leading-[0.75]">
          See how we <br />
          <span className="text-yellow-400 italic font-cormorant">
            make an impact.
          </span>
        </h1>

     <p className="mt-8 text-[#000000] font-urbanist font-[400] text-[18px] leading-[28px] max-w-[400px] mx-auto text-center">
  Choose a project to see examples of creativity
  building industry leaders in sustainability.
</p>

      </div>

      {/* Projects List */}
      <div className="space-y-10">

        {projects.map((project, index) => (
         <div key={index} className="flex flex-col items-center">

  <div className="rounded-[20px] overflow-hidden max-w-[800px] w-full">

   {/* Desktop Image */}
<img
  src={project3}
  alt={project.title}
  className="hidden md:block w-full h-[478px] object-cover hover:scale-101 transition duration-300"
/>

{/* Mobile Image */}
<img
  src={project1}
  alt={project.title}
  className="block md:hidden w-full aspect-[900/700] object-cover"
/>

  </div>

  <div className="flex items-center justify-between mt-4 max-w-[800px] w-full">

    <h3 className="text-[24px] md:text-[32px] font-urbanist font-[600]">
      {project.title}
    </h3>

  <span
  onClick={() => navigate("/project-details")}
  className="cursor-pointer shrink-0 text-[#181818] px-3 py-1 bg-[#E3E3E3] 
  font-urbanist font-[400] text-[12px] md:text-[16px] rounded-full whitespace-nowrap hover:bg-[#d6d6d6]"
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