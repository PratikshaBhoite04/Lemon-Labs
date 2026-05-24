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
      <div className="border-t border-black mb-10"></div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-4">

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex min-w-max animate-marquee gap-16">

          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 shrink-0 opacity-90"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-5 md:h-6 object-contain"
              />

              <span className="font-urbanist font-[700] text-sm md:text-[25px] text-black whitespace-nowrap">
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