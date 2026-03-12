import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between px-6 md:px-12 py-4">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Lemon Labs Logo" className="w-[28px] h-[28px]" />
        <span className="font-urbanist text-[21px] font-normal text-[#181818] leading-none">
          Lemon <br /> Labs
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 font-urbanist text-[18px] text-[#181818]">

        <li>
          <Link
            to="/"
            className="hover:text-yellow-500 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className="hover:text-yellow-500 transition"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-yellow-500 transition"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-yellow-500 transition"
          >
            Contact
          </Link>
        </li>

      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-[#181818] text-[#F4F4F4] text-[18px] font-urbanist font-[600] px-5 py-2 rounded-full">
        Book a 15 min call
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer z-50">
        {menuOpen ? (
          <HiOutlineX size={28} onClick={() => setMenuOpen(false)} />
        ) : (
          <HiOutlineMenu size={28} onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-start gap-6 py-8 px-7 font-urbanist text-[18px] text-[#181818]">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

            <button className="bg-[#181818] text-[#F4F4F4] text-[18px] font-urbanist font-[600] px-5 py-2 rounded-full mt-2">
              Book a 15 min call
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;