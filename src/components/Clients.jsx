import logo1 from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo.svg";
import logo3 from "../assets/images/logo.svg";
import logo4 from "../assets/images/logo.svg";

const clients = [
  { name: "Shutterframe", logo: logo1 },
  { name: "Refractional", logo: logo2 },
  { name: "Shutterframe", logo: logo3 },
  { name: "Watchtower", logo: logo4 },
];

const Clients = () => {
  return (
    <section className="px-6 md:px-20 mt-20 mb-10">

      {/* Heading */}
<div className="mb-6">

  {/* Mobile subtitle */}
  <p className="text-[#181818] font-cormorant font-[700] text-[16px] italic mb-2 md:hidden">
    (02 Brands we have worked with)
  </p>

  <div className="flex items-end justify-between">
    
    <h2 className="text-[36px] md:text-[80px] font-urbanist font-[600]">
      Clients
    </h2>

    {/* Desktop subtitle */}
    <p className="text-[#181818] font-cormorant font-[700] text-[24px] italic hidden md:block">
      (02 Brands we have worked with)
    </p>

  </div>

</div>

      {/* Divider */}
      <div className="border-t border-black mb-8"></div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"></div>

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Row */}
        <div className="flex gap-16 animate-scroll whitespace-nowrap">

          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-2 opacity-80"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-5 md:h-6 object-contain"
              />

              <span className="font-urbanist  font-[700] text-sm text-[#000000] md:text-[25px]">
                {client.name}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Clients;