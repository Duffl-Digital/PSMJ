
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";



export default function Footer() {

    const fadeUp: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

      return (
        
  <div className=" ">

        {/* Contact Bar */}
                <motion.div
                    className="max-w-6xl mx-auto bg-[linear-gradient(90deg,_#FFF_0%,_#FFE79E_51.44%,_#FFF_100%)] rounded-sm  px-4 sm:px-12 py-7 flex flex-col lg:flex-row items-center justify-between gap-6"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >




                    <h2 className="font-figtree text-[#1C1C1C] text-[30px] font-bold leading-[134%] uppercase figtree-Bold">
                        Get In Touch
                    </h2>

                    <div className="hidden lg:block w-px h-10 bg-[linear-gradient(180deg,_#FFF_0%,_#121212_50%,_#FFF_100%)]" />


                    <div className="flex flex-col lg:flex-row items-center gap-6 ">
                        <a href="mailto:we@psmj.in" className="elms-sans-Regular text-black text-[18.322px] font-normal leading-[140%] tracking-[0.366px]">we@psmj.in</a>

                        {/* <span className="hidden lg:block">|</span> */}

                        <div className="flex items-center justify-center gap-[13px] lg:ml-[30px]">

                            <a href="tel:+919840077635" className="elms-sans-Regular text-black text-[18.322px] font-normal leading-[140%] ">+91 98400 77635</a>

                            <span>|</span>

                            <a href="tel:04428170635" className="elms-sans-Regular text-black text-[18.322px] font-normal leading-[140%] ">044 2817 0635</a>


                        </div>


                    </div>

                    <div className="flex items-center gap-6 text-3xl">
                        <a href="" target="_blank">
                            <Image
                                src="/images/footer/linkedin.svg"
                                alt="LinkedIn"
                                width={23}
                                height={23}
                            />
                        </a>

                        <a href="" target="_blank">
                            <Image
                                src="/images/footer/instagram.svg"
                                alt="Instagram"
                                width={23}
                                height={23}
                            />
                        </a>

                    </div>

                </motion.div>

  </div>

              )
}