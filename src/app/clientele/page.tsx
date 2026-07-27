"use client";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import GetInTouch from "@/components/layout/GetInTouch";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";



export default function WhatWeDo() {

  const clients = [
    "/images/clientele/logo/1.svg",
    "/images/clientele/logo/2.svg",
    "/images/clientele/logo/3.svg",
    "/images/clientele/logo/4.svg",
    "/images/clientele/logo/5.svg",

    "/images/clientele/logo/6.svg",
    "/images/clientele/logo/7.svg",
    "/images/clientele/logo/8.svg",
    "/images/clientele/logo/9.svg",
    "/images/clientele/logo/10.svg",

    "/images/clientele/logo/11.svg",
    "/images/clientele/logo/12.svg",
    "/images/clientele/logo/13.svg",
    "/images/clientele/logo/14.svg",
    "/images/clientele/logo/15.svg",

    "/images/clientele/logo/16.svg",
    "/images/clientele/logo/17.svg",
    "/images/clientele/logo/18.svg",
    "/images/clientele/logo/19.svg",
    "/images/clientele/logo/20.svg",

      "/images/clientele/logo/21.svg",
    "/images/clientele/logo/22.svg",
    "/images/clientele/logo/23.svg",
    "/images/clientele/logo/24.svg",
    "/images/clientele/logo/25.svg",

      "/images/clientele/logo/26.svg",
    "/images/clientele/logo/27.svg",
  ];

  return (
    <>

      <section className="w-full  bg-[url('/images/clientele/banner-design.png')] bg-no-repeat bg-cover bg-bottom">
        {/* Navbar */}
        <Header />



        <div className="flex items-center justify-center gap-4 pb-20">
          <div className="w-[148px] h-[1px] bg-[url('/images/clientele/heading-line.svg')] bg-no-repeat bg-contain"></div>

          <h1 className="text-[#1E1E1E] text-[25.798px] figtree-Bold leading-[180%] tracking-[1.29px] uppercase whitespace-nowrap">
            Our Clientele
          </h1>

          <div className="w-[148px] h-[1px] bg-[url('/images/clientele/heading-line.svg')] bg-no-repeat bg-contain rotate-180"></div>
        </div>
      </section>


      <motion.div
        className="px-8 lg:px-30 pb-20  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-16">
          {clients.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                src={logo}
                alt="Client Logo"
                width={300}
                height={120}
                className="w-auto h-auto max-h-[55px] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>


      <GetInTouch />
      <Footer />

    </>

  );
}