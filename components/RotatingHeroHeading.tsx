"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

// Only these texts rotate. The badge (People. Strategy. Performance.) stays static.
const HERO_ITEMS = [
  { prefix: "Building", line1: "High-Performing", line2: "Organizations" },
  { prefix: "Shaping", line1: "Winning", line2: "Strategies" },
  { prefix: "Empowering", line1: "Ambitious", line2: "Teams" },
];

const INTERVAL_MS = 7000;

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.45, ease: "easeInOut" as const },
};

export default function RotatingHeroHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_ITEMS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const { prefix, line1, line2 } = HERO_ITEMS[index];

  return (
    <h1
      className="
        relative
        z-[20]
        m-0
        w-full
        text-white
        font-normal
        not-italic

        text-[28px]
        leading-[110%]
        tracking-[0.7px]

        sm:text-[46px]
        md:text-[56px]
        lg:text-[64px]
        lg:leading-[140%]
        lg:tracking-[2.127px]
        md:pt-[0px]
        pt-[12px]

        
      "
    >
      {/* PREFIX (changes) + BADGE (static) */}
      <span className="flex w-full items-start gap-2 sm:items-center sm:gap-0">
        <span className="block shrink-0 whitespace-nowrap min-w-[110px] sm:min-w-[170px] lg:min-w-[260px]">
          <AnimatePresence mode="wait">
            <motion.span key={prefix} {...fade} className="block">
              {prefix}
            </motion.span>
          </AnimatePresence>
        </span>

        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.35 }}
          className="
            relative
            ml-0
            mt-1
            h-[36px]
            bg-[linear-gradient(90deg,#fff_0%,rgba(59,141,195,0)_100%)]
            sm:ml-[10px]
            sm:mt-0
            sm:h-[50px]
          "
        >
          {/* BADGE — static, never changes */}
          <span
            className="
              block
              bg-[#3281ba]
              font-medium
              leading-none
              text-[9px]
              tracking-[1px]
              whitespace-normal
              p-[4px]
              m-[6px]
              py-[8px]
              px-[9px]
              sm:m-[8px]
              sm:py-[10px]
              sm:px-[12px]
              sm:text-[12px]
              sm:tracking-[1.5px]
              sm:whitespace-nowrap
            "
          >
            <span className="text-pink-400">People.</span>{" "}
            <span className="text-yellow-300">Strategy.</span>{" "}
            <span className="text-lime-300">Performance.</span>
          </span>
        </motion.span>
      </span>

      {/* LINE 1 (changes) */}
      <span className="block">
        <AnimatePresence mode="wait">
          <motion.span key={line1} {...fade} className="block">
            {line1}
          </motion.span>
        </AnimatePresence>
      </span>

      {/* LINE 2 (changes) */}
      <span className="block">
        <AnimatePresence mode="wait">
          <motion.span key={line2} {...fade} className="block">
            {line2}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}