"use client";
import { useState, useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import GetInTouch from "@/components/layout/GetInTouch";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";



export default function WhatWeDo() {

const isManualClick = useRef(false);

    const bouquetData = [
        {
            title: "EMPLOYEE ENGAGEMENT PROGRAMS",
            description: "Lorem ipsum dolor sit amet consectetur. Ultricies urna sit sem commodo gravida. Diam suspendisse pharetra mauris diam. Dignissim tempor mattis amet pharetra. Massa quis volutpat lectus pharetra in.",
            bg: "/images/what-we-do/eep-BG.jpeg",
            image: "/images/what-we-do/eep.svg",
        },
        {
            title: "BRAND MANAGEMENT",
            description: "Lorem ipsum dolor sit amet consectetur. Ultricies urna sit sem commodo gravida. Diam suspendisse pharetra mauris diam. Dignissim tempor mattis amet pharetra. Massa quis volutpat lectus pharetra in.",
            bg: "/images/what-we-do/bm.jpg",
            image: "/images/what-we-do/bm.svg",
        },
        {
            title: "BRAND EXPRESSIONS",
            description: "Lorem ipsum dolor sit amet consectetur. Ultricies urna sit sem commodo gravida. Diam suspendisse pharetra mauris diam. Dignissim tempor mattis amet pharetra. Massa quis volutpat lectus pharetra in.",
            bg: "/images/what-we-do/be.jpg",
            image: "/images/what-we-do/be.svg",
        },
        {
            title: "CORPORATE EVENTS",
            description: "Lorem ipsum dolor sit amet consectetur. Ultricies urna sit sem commodo gravida. Diam suspendisse pharetra mauris diam. Dignissim tempor mattis amet pharetra. Massa quis volutpat lectus pharetra in.",
            bg: "/images/what-we-do/ce.jpg",
            image: "/images/what-we-do/ce.svg",
        },
        {
            title: "EXHIBITION",
            description: "Lorem ipsum dolor sit amet consectetur. Ultricies urna sit sem commodo gravida. Diam suspendisse pharetra mauris diam. Dignissim tempor mattis amet pharetra. Massa quis volutpat lectus pharetra in.",
            bg: "/images/what-we-do/Exhibition.jpg",
            image: "/images/what-we-do/exhibition.svg",
        },
        {
            title: "CORPORATE LEARNING PROGRAMS",
            description: "Lorem ipsum dolor sit amet consectetur. Ultricies urna sit sem commodo gravida. Diam suspendisse pharetra mauris diam. Dignissim tempor mattis amet pharetra. Massa quis volutpat lectus pharetra in.",
            bg: "/images/what-we-do/clp.jpg",
            image: "/images/what-we-do/clp.svg",
        },
    ];

    const stats = [
        {
            number: "400+",
            title: "Team Building",
            subtitle: "programs",

        },
        {
            number: "140+",
            title: "Employee engagement",
            subtitle: "programs",
            className: "mb-10",
        },
        {
            number: "90+",
            title: "Brand",
            subtitle: "management",
        },
        {
            number: "20",
            title: "Years of",
            subtitle: "experience",
        },
        {
            number: "60+",
            title: "Workshops on",
            subtitle: "soft skills",
        },
        {
            number: "60",
            title: "clients across",
            subtitle: "industries",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0); 

 useEffect(() => {
 const handleScroll = () => {
  if (isManualClick.current) return;

  const cards = document.querySelectorAll(".mobile-card");

  let closestIndex = activeIndex;
  let closestDistance = Infinity;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;

    const distance = Math.abs(cardCenter - viewportCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  if (closestIndex !== activeIndex) {
    setActiveIndex(closestIndex);
  }
};

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [activeIndex]);


    return (
        <>

            <section
                className="w-full  bg-[url('/images/what-we-do/banner.jpg')] bg-no-repeat bg-cover bg-center"
            >
                {/* Navbar */}
                <Header />

                {/* Banner */}
                <motion.div
                    className="max-w-7xl mx-auto mt-20 px-6 -mb-[100px]"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <div className="relative overflow-hidden rounded-[21px]">
                        <motion.img
                            src="/images/what-we-do/banner-img.jpg"
                            alt="Banner"
                            className="w-full h-auto object-cover hidden md:block"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut",
                            }}
                        />

                        <motion.img
                            src="/images/what-we-do/banner-img-mobile.jpg"
                            alt="Banner"
                            className="w-full h-auto object-cover block md:hidden"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut",
                            }}
                        />

                        <div className="absolute inset-0 bg-[linear-gradient(0deg,_#000_0%,_rgba(0,0,0,0.83)_13.44%,_rgba(0,0,0,0.61)_29.51%,_rgba(0,0,0,0)_43.72%)]"></div>

                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <motion.h2
                                className="text-[#ffff] font-bold text-[29px] leading-[180%] tracking-[1.45px] uppercase figtree-extra-bold"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                    ease: "easeOut",
                                }}
                            >
                                WHAT WE DO
                            </motion.h2>
                        </div>
                    </div>


                </motion.div>
            </section>



            <motion.section
                className="mt-[100px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <motion.p
                    className="max-w-4xl mx-auto px-4 mt-10 text-center text-[#1E1E1E] text-[14px] elms-sans-medium leading-[180%] tracking-[0.7px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.8,
                    }}
                >
                    From strategy and planning to flawless execution, we design learning,
                    engagement, and event solutions that inspire people, strengthen teams,
                    and deliver measurable business outcomes.
                </motion.p>
            </motion.section>




            <motion.section
                className="bg-white py-14"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 relative" >
                    <Image
                        src="/images/what-we-do/stats-line.svg"
                        alt="Stats Line"
                        width={1200}
                        height={80}
                        className="hidden lg:block  w-full h-auto absolute -left-[31px] bottom-[13px] xl:-bottom-[7px]"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 sm:gap-x-8 gap-y-5 sm:gap-y-8 lg:gap-y-0 text-center">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className={`
        ${index % 2 !== 0 ? "lg:-translate-y-8" : ""}
        ${index === stats.length - 1 ? "lg:pr-10" : ""}
      `}
                            >
                                <h2 className="text-[#1E1E1E] text-[30px] leading-[180%] tracking-[1.5px] figtree-Bold">
                                    {item.number}
                                </h2>

                                <p className="text-center text-[#1E1E1E] elms-sans-Regular text-[15px] leading-[142%] tracking-[0.75px]">
                                    {item.title}
                                    <br />
                                    {item.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>


            <section className=" pb-12">
                <div className="max-w-[1320px] mx-auto px-4">

                    <motion.h2
                        className="text-[#1E1E1E] text-[30px] font-bold leading-[180%] tracking-[1.5px] figtree-Bold text-center mb-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        The PSMJ Bouquet
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {bouquetData.map((item, index) => (
                            <motion.div
                                key={index}
                                data-index={index}
                                className="mobile-card relative overflow-hidden rounded-[35px] bg-cover bg-center bg-no-repeat p-8"
                                style={{
                                    backgroundImage: `url(${item.bg})`,
                                }}
                             onClick={() => {
  isManualClick.current = true;
  setActiveIndex(index);

  setTimeout(() => {
    isManualClick.current = false;
  }, 800);
}}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                            >
                                <h3 className="text-dark text-center sm:text-start figtree-Bold text-[19px] leading-[137%] tracking-[0.57px] uppercase">
                                    {item.title}
                                </h3>

                                <div className={`overflow-hidden transition-all duration-[1500ms] ease-in-out lg:max-h-[500px] lg:opacity-100 lg:mt-5
          ${activeIndex === index
                                        ? "max-h-[500px] opacity-100 mt-5"
                                        : "max-h-0 opacity-0 mt-0"
                                    }
        `}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] items-center">
                                        <div className="order-2 sm:order-1">
                                            <p className="text-[#353535] text-center sm:text-start sm:pe-5 text-[14px] font-medium leading-[180%] tracking-[0.7px]">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="order-1 sm:order-2 mb-4 sm:mb-0 flex justify-center md:justify-end">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={164}
                                                height={164}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>


            <GetInTouch />
            <Footer />

        </>

    );
}