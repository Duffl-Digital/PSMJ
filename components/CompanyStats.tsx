"use client";

import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.5 },
};

export default function CompanyStats() {
  return (
   <div aria-label="Company statistics" className="w-full xl:w-10/12 2xl:w-9/12 mx-auto px-4 py-8 sm:py-12 md:pt-18 md:pb-20">
  <div className="flex flex-wrap items-center">
    {/* Logo + vertical divider */}
    <div className="xl:w-2/12 md:w-2/12 w-full relative md:pr-4">
      <div className="text-center">
        <img src="/images/duns-logo.png" alt="img" className="w-[101px] mx-auto" />
      </div>
      {/* Vertical line (hidden on mobile) */}
      <br className="md:hidden block"/>
      <span
        aria-hidden="true"
        className="block md:absolute md:mx-0 mx-auto right-0 top-1/2 -translate-y-1/2 md:h-12 h-[2px] lg:h-14 md:w-px w-[100px] bg-white/30"
      />
    </div>

    <div className="grid xl:w-10/12 md:pt-0 pt-8 lg:w-10/12 md:w-10/12 w-11/12 grid-cols-2 gap-x-6 gap-y-8 text-center text-white sm:grid-cols-4 md:pl-4">
      <motion.div
        {...fade}
        transition={{ duration: 0.8, delay: 0 }}
        className="flex flex-col items-center"
      >
        <p className="text-xl font-bold leading-tight sm:text-3xl">60</p>
        <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 tracking-wide elms-sans-light sm:text-[15px]">
          clients across <br /> industries
        </p>
      </motion.div>

      <motion.div
        {...fade}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="flex flex-col items-center"
      >
        <p className="text-xl font-bold leading-tight sm:text-3xl">400+</p>
        <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 tracking-wide elms-sans-light sm:text-[15px]">
          Team Building <br /> programs
        </p>
      </motion.div>

      <motion.div
        {...fade}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col items-center"
      >
        <p className="text-xl font-bold leading-tight sm:text-3xl">11</p>
        <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 tracking-wide elms-sans-light sm:text-[15px]">
          Years of <br /> experience
        </p>
      </motion.div>

      <motion.div
        {...fade}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="flex flex-col items-center"
      >
        <p className="text-xl font-bold leading-tight sm:text-3xl">90+</p>
        <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-normal text-white/80 tracking-wide elms-sans-light sm:text-[15px]">
          Brand <br /> management
        </p>
      </motion.div>
    </div>
  </div>

  {/* Bottom border line + gradient accent */}
  <div className="relative mt-8 sm:mt-10 w-full" aria-hidden="true">
    <div className="h-px w-full bg-white/40" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[6px] w-1/3 sm:w-[20%]  bg-gradient-to-r from-yellow-300 to-sky-400" />
  </div>
</div>
  );
}