import logo from "../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white px-6 md:px-20 py-12">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="logo" className="w-13 h-13" />
            <span className="text-[22px] font-urbanist font-[400] md:text-[44px] leading-tight">
              Lemon <br /> Labs
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-[#F4F4F4] w-[70%] mb-6"></div>

          {/* Text */}
          <p className="text-[#BDBDBD] max-w-md font-urbanist  font-[400] md:text-[18px] text-[16px] mb-6">
          Let's create something extraordinary together—visual
           identity that doesn't just represent change, but ignites it.
          </p>

          {/* Button */}
          <button className="bg-white text-[#181818] font-[400] font-urbanist md:text-[21px] px-6 py-2 rounded-full font-urbanist text-[16px]">
            Book a 15 mins call
          </button>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex md:justify-end">

          <ul className="space-y-4 font-urbanist text-[#F4F4F4] font-[400] text-[18px]">

            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

        </div>

      </div>


      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-6 text-[#BABABA] text-[14px] font-[400] font-urbanist">

        <p>© Lemon Labs. All rights reserved</p>

        <div className="flex gap-6 text-[#BABABA] text-[14px] font-[400] font-urbanist">
          <Link to="#">Privacy</Link>
          <Link to="#">Terms</Link>
          <Link to="#">404</Link>
        </div>

    <div className="flex gap-5 text-lg">

  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition"
  >
    <FiLinkedin />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-yellow-400 transition"
  >
    <FiInstagram />
  </a>

</div>

      </div>

    </footer>
  );
};

export default Footer;