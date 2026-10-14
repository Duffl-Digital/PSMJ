"use client";

import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.5 },
};

export default function CompanyStats() {
  return (
    <div aria-label="Company statistics" className="w-full px-4 py-8 sm:py-10">
      <div className="mx-auto grid xl:w-9/12 lg:w-10/12 md:w-11/12 w-11/12 grid-cols-2 gap-x-6 gap-y-8 text-center text-white sm:grid-cols-4">
        <motion.div
          {...fade}
          transition={{ duration: 0.8, delay: 0 }}
          className="flex flex-col items-center"
        >
          <p className="text-xl font-bold leading-tight sm:text-3xl">60</p>
          <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 sm:text-[15px]">
            clients across <br /> industries
          </p>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col items-center"
        >
          <p className="text-xl font-bold leading-tight sm:text-3xl">400+</p>
          <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 sm:text-[15px]">
            Team Building <br /> programs
          </p>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <p className="text-xl font-bold leading-tight sm:text-3xl">11</p>
          <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 sm:text-[15px]">
            Years of <br /> experience
          </p>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col items-center"
        >
          <p className="text-xl font-bold leading-tight sm:text-3xl">90+</p>
          <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 sm:text-[15px]">
            Brand <br /> management
          </p>
        </motion.div>
      </div>
    </div>
  );
}