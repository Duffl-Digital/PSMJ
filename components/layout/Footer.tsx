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
        


            
           

              <footer className="">

                {/* Bottom Bar */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} className="  bg-gradient-to-r from-[#0F4C8C] to-[#2F7CC2]  px-10 sm:px-30 py-3 flex justify-between items-center">

                    <p className="text-white text-[13px] figtree-extra-light leading-[28px] tracking-[0.26px] ">
                        &copy; {new Date().getFullYear()} | PSMJ
                    </p>

                    <p className="text-white text-[13px] figtree-extra-light leading-[28px] tracking-[0.26px]">
                        <a target="_blank" href="https://duffldigital.com/" className="text-white text-[13px]  leading-[28px] tracking-[0.26px]">
                            DUFFL DIGITAL
                        </a>

                    </p>

                </motion.div>

            </footer>
              )
}