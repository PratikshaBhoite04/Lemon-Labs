import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between px-6 md:px-12 py-10">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="Lemon Labs Logo"
          className="w-[38px] h-[38px]"
        />

        <span className="font-urbanist text-[21px] font-normal text-[#181818] leading-none">
          Lemon <br /> Labs
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 font-urbanist text-[18px] text-[#181818]">

        {navItems.map((item, index) => (
          <li key={index} className="overflow-hidden h-[28px]">
            <Link to={item.path} className="relative block group">

              {/* Default Text */}
              <span className="block transition-transform duration-400 group-hover:-translate-y-full">
                {item.name}
              </span>

              {/* Hover Text */}
              <span className="absolute left-0 top-full text-[#F5DD53] transition-transform duration-300 group-hover:-translate-y-full">
                {item.name}
              </span>

            </Link>
          </li>
        ))}

      </ul>

      {/* Desktop Button */}
<a href="#contact">
  <button className="hidden md:flex relative overflow-hidden bg-[#181818] text-white text-[18px] font-urbanist font-[600] px-6 py-3 rounded-full group items-center justify-center">

    {/* Default Text */}
    <span className="block transition-transform duration-300 group-hover:-translate-y-[150%]">
      Contact Us
    </span>

    {/* Hover Text */}
    <span className="absolute inset-0 flex items-center justify-center text-[#F5DD53] translate-y-full transition-transform duration-400 group-hover:translate-y-0">
      Contact Us
    </span>

  </button>
</a>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer z-50 text-[#181818]">
        {menuOpen ? (
          <HiOutlineX size={30} onClick={() => setMenuOpen(false)} />
        ) : (
          <HiOutlineMenu size={30} onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181818] shadow-lg md:hidden">

          <ul className="flex flex-col items-start gap-7 py-8 px-7 font-urbanist text-[22px] text-white">

            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="transition-all duration-300 hover:text-[#F5DD53]"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Mobile Button */}
           <a
 href="#contact"
style={{ scrollMarginTop: "120px" }}
  onClick={() => setMenuOpen(false)}
  className="mt-4 bg-[#F5DD53] text-[#181818] text-[18px] font-urbanist font-[700] px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
>
  Contact Us
</a>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;