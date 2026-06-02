import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import lemon1 from "../assets/images/lemon1.png";
import lemon2 from "../assets/images/lemon2.png";
import lemon3 from "../assets/images/lemon3.png";
import lemon4 from "../assets/images/lemon4.png";

const images = [lemon1, lemon2, lemon3, lemon4];

const Loader = ({ onFinish }) => {

  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const [showDivider, setShowDivider] = useState(false);
  const [showSplit, setShowSplit] = useState(false);

  const [step, setStep] = useState(0);

  // ================= INTRO =================

  useEffect(() => {

    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 2200);

    const mainTimer = setTimeout(() => {
      setShowMain(true);
    }, 3200);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(mainTimer);
    };

  }, []);

  // ================= MAIN FLOW =================

  useEffect(() => {

    if (!showMain) return;

    // IMAGE LOOP
    const imageInterval = setInterval(() => {

      setStep((prev) => {
        return (prev + 1) % images.length;
      });

    }, 1400);

    // DIVIDER APPEAR
    const dividerTimer = setTimeout(() => {
      setShowDivider(true);
    }, 5400);

    // OPEN PAGE
    const splitTimer = setTimeout(() => {

      setShowDivider(false);
      setShowSplit(true);

    }, 6400);

    // FINISH
    const finishTimer = setTimeout(() => {

      clearInterval(imageInterval);

      onFinish();

    }, 7600);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(dividerTimer);
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
    };

  }, [showMain]);

  return (

    <div
      className={`
      fixed inset-0 z-[999999] overflow-hidden
      ${showSplit ? "bg-transparent" : "bg-[#F5DD53]"}
      `}
    >

      {/* ================= INTRO ================= */}

      <AnimatePresence>

        {showIntro && (

          <div
            className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            z-50
            overflow-hidden
            "
          >

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                y: -140,
                opacity: 0
              }}
              transition={{
                duration: 1
              }}
              className="
              font-urbanist
              font-[700]
              text-black
              text-[52px]
              md:text-[110px]
              leading-none
              "
            >
              Lemon Labs
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                y: 120,
                opacity: 0
              }}
              transition={{
                duration: 1
              }}
              className="
              mt-4
              font-cormorant
              italic
              text-black
              text-[20px]
              md:text-[38px]
              "
            >
              Crafting systems that last.
            </motion.p>

          </div>

        )}

      </AnimatePresence>

      {/* ================= MAIN CONTENT ================= */}

      {showMain && !showSplit && (

        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          px-6
          z-40
          "
        >

          <div
            className="
            relative
            w-full
            flex
            items-center
            justify-between
            gap-6
            md:gap-24
            "
          >

            {/* LEFT */}
            <motion.div
              initial={{
                x: -220,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1]
              }}
            >

              <p
                className="
                font-urbanist
                text-black
                text-[18px]
                md:text-[34px]
                leading-[0.95]
                "
              >
                Raw
                <br />
                ideas.
              </p>

            </motion.div>

            {/* CARD */}
            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              transition={{
                duration: 1.1,
                ease: [0.76, 0, 0.24, 1]
              }}
              className="
              bg-[#F3F3F3]
              w-[170px]
              h-[200px]
              md:w-[380px]
              md:h-[420px]
              flex
              items-center
              justify-center
              overflow-hidden
              "
            >

              <AnimatePresence mode="wait">

                <motion.img
                  key={step}
                  src={images[step]}
           initial={{
  opacity: 0,
  scale: [0.85, 1.1, 1.4, 1.9][step] * 0.88,
}}
animate={{
  opacity: 1,
  scale: [0.85, 1.1, 1.4, 1.9][step],
}}
exit={{
  opacity: 0,
  scale: [0.85, 1.1, 1.4, 1.9][step] * 1.06,
}}
transition={{
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
}}
                  style={{
                    width: "clamp(150px, 15vw, 300px)",
                    height: "clamp(150px, 15vw, 300px)",
                    objectFit: "contain",
                  }}
                />

              </AnimatePresence>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                x: 220,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1]
              }}
            >

              <p
                className="
                font-urbanist
                text-black
                text-[18px]
                md:text-[34px]
                leading-[0.95]
                text-right
                "
              >
                Refined
                <br />
                products
              </p>

            </motion.div>

          </div>

        </div>

      )}

      {/* ================= DIVIDER ================= */}

      {showDivider && (

        <motion.div
          initial={{
            scaleX: 0
          }}
          animate={{
            scaleX: 1
          }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
          }}
          style={{
            originX: 0
          }}
          className="
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          w-full
          h-[3px]
          md:h-[5px]
          bg-white
          z-[80]
          "
        />

      )}

      {/* ================= SPLIT OPEN ================= */}

      {showSplit && (

        <div className="absolute inset-0 z-[120] overflow-hidden pointer-events-none">

          {/* TOP HALF */}
          <motion.div
            initial={{
              clipPath: "inset(0 0 50% 0)"
            }}
            animate={{
              clipPath: "inset(0 0 100% 0)"
            }}
            transition={{
              duration: 1.1,
              ease: [0.87, 0, 0.13, 1]
            }}
            className="
            absolute
            inset-0
            bg-[#F5DD53]
            border-b-[3px]
            md:border-b-[5px]
            border-white
            "
          />

          {/* BOTTOM HALF */}
          <motion.div
            initial={{
              clipPath: "inset(50% 0 0 0)"
            }}
            animate={{
              clipPath: "inset(100% 0 0 0)"
            }}
            transition={{
              duration: 1.6,
              ease: [0.87, 0, 0.13, 1]
            }}
            className="
            absolute
            inset-0
            bg-[#F5DD53]
            border-t-[3px]
            md:border-t-[5px]
            border-white
            "
          />

        </div>

      )}

    </div>

  );
};
export default Loader;