"use client";

import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.5 },
};

const stats = [
  { number: "20+", line1: "Years of", line2: "experience" },
  { number: "70+", line1: "Corporate", line2: "Clients" },
  { number: "1K+", line1: "Programs", line2: "Delivered" },
  { number: "1L+", line1: "Participants", line2: "Engaged" },
  { number: "95%", line1: "Participant", line2: "Satisfaction" }, // new 5th stat
];

export default function CompanyStats() {
  return (
    <div
      aria-label="Company statistics"
      className="w-full xl:w-10/12 2xl:w-9/12 mx-auto px-4 py-8 sm:py-12 md:pt-18 md:pb-20"
    >
      <div className="flex flex-wrap items-center">
        {/* Logo + vertical divider */}
        <div className="xl:w-2/12 md:w-2/12 w-full relative md:pr-4">
          <div className="text-center">
            <img src="/images/duns-logo.png" alt="img" className="w-[101px] mx-auto" />
          </div>
          <br className="md:hidden block" />
          <span
            aria-hidden="true"
            className="block md:absolute md:mx-0 mx-auto right-0 top-1/2 -translate-y-1/2 md:h-12 h-[2px] lg:h-14 md:w-px w-[100px] bg-white/30"
          />
        </div>

        {/* 5 columns from sm up; 2 columns on mobile */}
        <div className="grid xl:w-10/12 md:pt-0 pt-8 lg:w-10/12 md:w-10/12 w-11/12 grid-cols-2 gap-x-6 gap-y-8 text-center text-white sm:grid-cols-5 md:pl-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.number + item.line1}
              {...fade}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              // On mobile, the 5th (orphan) item spans both columns so it stays centered
              className={`flex flex-col items-center ${
                index === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <p className="text-xl font-bold leading-tight sm:text-3xl">{item.number}</p>
              <p className="mt-1 max-w-[10rem] text-[14px] font-light leading-snug text-white/80 tracking-wide elms-sans-light sm:text-[15px]">
                {item.line1} <br /> {item.line2}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border line + gradient accent */}
      <div className="relative mt-8 sm:mt-10 w-full" aria-hidden="true">
        <div className="h-px w-full bg-white/40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[6px] w-1/3 sm:w-[20%] bg-gradient-to-r from-yellow-300 to-sky-400" />
      </div>
    </div>
  );
}