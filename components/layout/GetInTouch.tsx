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
        
  <div className="xl:pt-24 md:pt-8 pt-18 relative  bg-[linear-gradient(180deg,_#FFE79E_51.44%,_#FFF_100%)] md:bg-none ">
    
<div className="md:-mt-[70px] md:w-[260px]  text-md-start text-center relative  md:absolute  md:-bottom-[52px] z-99  ">
    <img
        src="/images/footer-boxes.png"
        className=" text-center  md:aspect-[142/142] md:mx-0 mx-auto  w-[142px]  md:absolute md:top-[50%] md:left-[40%] md:-translate-[50%]"
        alt=""
    />
    <img
       src="/images/footer-polygon.png"    className="w-full  md:block hidden"/>
</div>
<div className=" md:pb-[60px] ">
        {/* Contact Bar */}
                <motion.div
                    className="max-w-7xl  mx-auto relative md:bg-[linear-gradient(270deg,#FFDF7E_0%,#FEFFB3_100%)] xl:rounded-sm  px-4 sm:pr-[8%]  md:py-7 pb-7 pt-0 flex xl:pl-[15%] md:pl-[20%] lg:pl-[16%] flex-col xl:flex-row items-center  xl:gap-6 lg:gap-4 gap-6"
                   
                >
                    




                    <h2 className="font-figtree text-[#1C1C1C] xl:text-[30px] lg:text-[26px] text-[30px] font-bold leading-[134%] uppercase figtree-Bold">
                        Get In Touch
                    </h2>

                    <div className="hidden xl:block w-px h-10 bg-[linear-gradient(180deg,#FFF_0%,#121212_50%,_#FFF_100%)]" />


                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 flex-1 ">
                         <div className="flex items-center justify-center gap-[13px] ">

                            <a href="tel:+919840077635" className="elms-sans-Regular text-black text-[18.322px] font-normal leading-[140%] ">+91 98400 77635</a>

                            <span>|</span>

                            <a href="tel:04428170635" className="elms-sans-Regular text-black text-[18.322px] font-normal leading-[140%] ">044 2817 0635</a>


                        </div>
                        <a href="mailto:we@psmj.in" className="elms-sans-Regular text-black text-[18.322px] font-normal leading-[140%] tracking-[0.366px]">we@psmj.in</a>

                        {/* <span className="hidden lg:block">|</span> */}

                       


                    

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
                    </div>

                </motion.div>
                </div>
               

  </div>

              )
}