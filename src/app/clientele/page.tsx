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
    "/images/clientele/logo/axis-bank.svg",
    "/images/clientele/logo/tata.svg",
    "/images/clientele/logo/standard_chartered.svg",
    "/images/clientele/logo/verizon.svg",
    "/images/clientele/logo/cognizant.svg",

    "/images/clientele/logo/infosys.svg",
    "/images/clientele/logo/cbre.svg",
    "/images/clientele/logo/paypal.svg",
    "/images/clientele/logo/bharat-petroleum.svg",
    "/images/clientele/logo/trimble.svg",

    "/images/clientele/logo/oracle.svg",
    "/images/clientele/logo/l&t.svg",
    "/images/clientele/logo/flextronics.svg",
    "/images/clientele/logo/collabnet.svg",
    "/images/clientele/logo/henkel.svg",

    "/images/clientele/logo/verizon.svg",
    "/images/clientele/logo/cognizant.svg",
    "/images/clientele/logo/axis-bank.svg",
    "/images/clientele/logo/standard_chartered.svg",
    "/images/clientele/logo/tata.svg",
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