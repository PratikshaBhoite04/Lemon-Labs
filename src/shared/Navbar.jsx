import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
      {/* NAVBAR */}
      <nav
        className="
          fixed
          top-0
          left-0
          w-full
          z-[100]

          bg-[#FFFFFF]

          flex
          items-center
          justify-between

          px-6
          md:px-12

          py-6
          md:py-10
        "
      >

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 z-[120]"
        >
          <img
            src={logo}
            alt="Lemon Labs Logo"
            className="w-[32px] h-[32px] md:w-[38px] md:h-[38px]"
          />

          <span
            className="
              font-urbanist
              text-[18px]
              md:text-[21px]
              font-normal
              text-[#181818]
              leading-none
            "
          >
            Lemon <br /> Labs
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul
          className="
            hidden
            md:flex
            items-center
            gap-10

            font-urbanist
            text-[18px]
            text-[#181818]
          "
        >

          {navItems.map((item, index) => (
            <li
              key={index}
              className="overflow-hidden h-[28px]"
            >
              <Link
                to={item.path}
                className="relative block group"
              >

                {/* Default */}
                <span
                  className="
                    block
                    transition-transform
                    duration-400
                    group-hover:-translate-y-full
                  "
                >
                  {item.name}
                </span>

                {/* Hover */}
                <span
                  className="
                    absolute
                    left-0
                    top-full

                    text-[#F5DD53]

                    transition-transform
                    duration-300

                    group-hover:-translate-y-full
                  "
                >
                  {item.name}
                </span>

              </Link>
            </li>
          ))}

        </ul>

        {/* Desktop Button */}
        <a href="#contact">
          <button
            className="
              hidden
              md:flex

              relative
              overflow-hidden

              bg-[#181818]
              text-white

              text-[18px]
              font-urbanist
              font-[600]

              px-6
              py-3

              rounded-full

              group
              items-center
              justify-center
            "
          >

            {/* Default */}
            <span
              className="
                block
                transition-transform
                duration-300
                group-hover:-translate-y-[150%]
              "
            >
              Contact Us
            </span>

            {/* Hover */}
            <span
              className="
                absolute
                inset-0

                flex
                items-center
                justify-center

                text-[#F5DD53]

                translate-y-full
                transition-transform
                duration-400

                group-hover:translate-y-0
              "
            >
              Contact Us
            </span>

          </button>
        </a>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            z-[120]
            text-[#181818]
          "
        >
          {menuOpen ? (
            <HiOutlineX size={30} />
          ) : (
            <HiOutlineMenu size={30} />
          )}
        </button>

      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-0

              z-[110]

              bg-[#F7F7F7]

              md:hidden

              flex
              flex-col
            "
          >

            {/* TOP BAR */}
            <div
              className="
                flex
                items-center
                justify-between

                px-6
                py-6
              "
            >

              {/* Logo */}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <img
                  src={logo}
                  alt="Lemon Labs Logo"
                  className="w-[32px] h-[32px]"
                />

                <span
                  className="
                    font-urbanist
                    text-[18px]
                    font-normal
                    text-[#181818]
                    leading-none
                  "
                >
                  Lemon <br /> Labs
                </span>
              </Link>

              {/* Close */}
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#181818]"
              >
                <HiOutlineX size={30} />
              </button>

            </div>

            {/* MENU CONTENT */}
            <div
              className="
                flex-1

                flex
                flex-col

                justify-start

                px-6

                pt-10
              "
            >

              <ul
                className="
                  flex
                  flex-col

                  gap-8

                  font-urbanist
                  text-[24px]
                  font-[500]

                  text-[#181818]
                "
              >

                {navItems.map((item, index) => (

                  <motion.li
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >

                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="
                        transition-all
                        duration-300

                        hover:text-[#F5DD53]
                      "
                    >
                      {item.name}
                    </Link>

                  </motion.li>

                ))}

              </ul>

              {/* Button */}
   <motion.a
  href="#contact"
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.35,
  }}
  onClick={() => setMenuOpen(false)}
  className="
    mt-12

    w-fit

    relative
    overflow-hidden

    bg-[#181818]
    text-white

    text-[15px]
    font-urbanist
    font-[600]

    px-5
    py-3

    rounded-full

    group

    inline-flex
    items-center
    justify-center
  "
>

  {/* Default Text */}
  <span
    className="
      block
      transition-transform
      duration-300

      group-hover:-translate-y-[150%]
    "
  >
    Contact us
  </span>

  {/* Hover Text */}
  <span
    className="
      absolute
      inset-0

      flex
      items-center
      justify-center

      text-[#F5DD53]

      translate-y-full
      transition-transform
      duration-300

      group-hover:translate-y-0
    "
  >
    Contact us
  </span>

</motion.a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;