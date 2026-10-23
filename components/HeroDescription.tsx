"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

// Replace the image paths with your own icons (same order as the headline).
const ITEMS = [
  {
    image: "/images/home/brain-icon.svg",
    alt: "Brain",
    text: "For over two decades, PSMJ has been transforming teams, strengthening leadership, and creating engaging workplace experiences through learning, consulting, events, and brand activation.",
  },
  {
    image: "/images/home/aeroplan-icon.svg",
    alt: "Strategy",
    text: "From sharper business plans to clear execution roadmaps, PSMJ helps organizations turn ambition into results through learning, consulting, events, and brand activation.",
  },
  {
    image: "/images/home/target-icon.svg",
    alt: "Team",
    text: "For over two decades, PSMJ has been empowering ambitious teams with the skills, confidence, and culture to grow through learning, consulting, events, and brand activation.",
  },
];

const INTERVAL_MS = 7000; // keep same as the heading so both change together

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.45, ease: "easeInOut" as const },
};

export default function HeroDescription() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ITEMS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const { image, alt, text } = ITEMS[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut, delay: 0.8 }}
      className="
        relative
        z-[20]
        mt-6
        flex
        w-[92%]
        items-start
        gap-4

        sm:mt-7
        sm:gap-5

        md:mt-8
        md:ml-[80px]
        md:gap-6

        lg:ml-[140px]
        lg:gap-8
      "
    >
      {/* IMAGE (fades with the text) — wrapper keeps size fixed so nothing jumps */}
      <div
        className="
          relative
          z-[30]
          aspect-[71/68]
          w-[38px]
          shrink-0
          sm:w-[48px]
          md:w-[58px]
          lg:w-[71px]
        "
      >
        <AnimatePresence mode="wait">
          <motion.div key={image} {...fade} className="absolute inset-0">
            <Image
              src={image}
              alt={alt}
              width={71}
              height={68}
              priority
              className="block h-auto w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DESCRIPTION TEXT */}
      <p
        className="
          m-0
          pt-0
          text-white
          text-[11px]
          leading-[165%]
          tracking-[0.3px]

          sm:text-[12px]
          sm:leading-[175%]
          sm:tracking-[0.45px]

          md:text-[13.5px]
          md:leading-[180%]
          md:tracking-[0.6px]

          lg:pt-1
          lg:text-[15.146px]
          lg:leading-[180%]
          lg:tracking-[0.757px]
          elms-sans-light
        "
      >
        <AnimatePresence mode="wait">
          <motion.span key={text} {...fade} className="block elms-sans-light">
            {text}
          </motion.span>
        </AnimatePresence>
      </p>
    </motion.div>
  );
}