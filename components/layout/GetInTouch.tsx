import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";



export default function GetInTouch() {

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
        
  <div className="xl:pt-24 md:pt-8 pt-18">

        {/* Contact Bar */}
                <motion.div
                    className="max-w-7xl mx-auto relative bg-[linear-gradient(-270deg,#FFF_0%,#FFE79E_51.44%)] rounded-sm  px-4 sm:pr-12  md:py-7 pb-7 pt-0 flex xl:pl-[12%] lg:pl-[14%] flex-col lg:flex-row items-center justify-between xl:gap-6 lg:gap-4 gap-6"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >

<div className="xl:aspect-[255/255] md:aspect-[200/200]  md:mt-0 -mt-[70px] aspect-square w-[120px] md:w-[200px] xl:w-[255px] xl:h-[255px] md:absolute md:-left-[29px] lg:-bottom-[51px] ">
    <img
        src="/images/footer/footer-img.png"
        className="w-full h-full object-cover hidden md:block"
        alt=""
    />
    <img
       src="/images/footer/footer-img-noshadow.png"    className="w-full h-full object-cover md:hidden block"/>
</div>


                    <h2 className="font-figtree text-[#1C1C1C] xl:text-[30px] lg:text-[26px] text-[30px] font-bold leading-[134%] uppercase figtree-Bold">
                        Get In Touch
                    </h2>

                    <div className="hidden lg:block w-px h-10 bg-[linear-gradient(180deg,#FFF_0%,#121212_50%,_#FFF_100%)]" />


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