"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { CaseStudyData } from "@/src/app/data/CaseStudyData";
import Header from "@/components/layout/Header";
import GetInTouch from "@/components/layout/GetInTouch";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function CaseStudyDetails() {

    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const data = CaseStudyData[id as keyof typeof CaseStudyData];

    if (!data) {
        return (
            <div>
                Case Study Not Found
            </div>
        );
    }


    useEffect(() => {
        document.body.classList.add("case-study-details");
        return () => {
            document.body.classList.remove("case-study-details");
        };
    }, []);

    return (
        <div className="overflow-x-clip">
            <section className="bg-[url('/images/case-study-details/bg.jpg')] bg-cover pb-10 pt-5 bg-center bg-no-repeat">
                <Header />
            </section>

            <div className="w-full lg:container lg:mx-auto px-6 mb-10 md:mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-8">

                    {/* LEFT */}


                    {/* RIGHT */}
                    <div className="lg:col-span-12">

                        {/* WHITE SECTION */}
                        <section className="bg-white lg:py-24 pb-12 relative">
                            <div className="grid lg:grid-cols-12 lg:gap-16 gap-10 items-center">

                                {/* LEFT IMAGE */}
                                <div className="lg:col-span-4 lg:pl-14 text-center lg:text-left mt-10 lg:mt-0">

                                    <p className="elms-sans-medium text-[#1E1E1E] text-[15px]">
                                        Case Study
                                    </p>

                                    <h2 className="mt-2 figtree-extra-bold text-[#1E1E1E] text-[22px] uppercase">
                                        {data.title}
                                    </h2>

                                    <div className="mt-8 flex justify-center lg:justify-start">
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 80,
                                                scale: 0.85,
                                                rotate: -10,
                                                filter: "blur(10px)",
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                rotate: 0,
                                                filter: "blur(0px)",
                                            }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.8 }}
                                        >
                                            <Image
                                                src="/images/case-study-details/puzzle.png"
                                                alt="Puzzle"
                                                width={265}
                                                height={265}
                                                className="w-[265px] h-auto"
                                            />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className="lg:col-span-8 relative">

                                    <Image
                                        src="/images/case-study-details/problem-shadow.svg"
                                        alt="Problem"
                                        width={56}
                                        height={56}
                                        className="hidden xl:block w-auto h-auto absolute -left-[81px] top-[0px]"
                                    />


                                    <Image
                                        src="/images/case-study-details/problem-shadow.svg"
                                        alt="Problem"
                                        width={56}
                                        height={56}
                                        className="w-auto h-auto absolute -right-[18px] top-[111px] hidden xl:block"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, x: -80 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{
                                            duration: 1.4,
                                            ease: "easeOut",
                                        }}
                                        className="flex flex-col md:flex-row items-center relative z-10 gap-6">
                                        <div className="shrink-0">
                                            <div className="flex items-center gap-5">
                                                <Image
                                                    src="/images/case-study-details/problem.svg"
                                                    alt="Problem"
                                                    width={56}
                                                    height={56}
                                                    className="w-14 h-auto"
                                                />
                                                <h3 className="px-4 md:px-10 text-[#1E1E1E] text-[26px] figtree-Bold leading-[151%] tracking-[1.3px] uppercase">
                                                    Problem
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="elms-sans-light text-[#374151] text-[16px] leading-[175%] break-words md:pe-12 text-center md:text-left">
                                                {data.problem}
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 80 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{
                                            duration: 1.4,
                                            ease: "easeOut",
                                        }}
                                        className="mt-10 flex flex-col md:flex-row items-center relative z-10 gap-6 md:gap-0">
                                        <div className="min-w-0 flex-1 order-2 md:order-1">
                                            <p className="elms-sans-light text-[#374151] text-[16px] leading-[175%] break-words md:ps-12 text-center md:text-left">
                                                {data.challenge}
                                            </p>
                                        </div>

                                        <div className="shrink-0 order-1 md:order-1">
                                            <div className="flex items-center gap-5">
                                                <h3 className="px-4 md:px-10 figtree-Bold text-[#1E1E1E] text-[26px] leading-[151%] tracking-[1.3px] uppercase">
                                                    Challenge
                                                </h3>
                                                <Image
                                                    src="/images/case-study-details/challenge.svg"
                                                    alt="Challenge"
                                                    width={56}
                                                    height={56}
                                                    className="w-14 h-auto"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                </div>

                            </div>
                        </section>

                        {/* BLUE SECTION */}
                        <section className="bg-[url('/images/case-study-details/bg.jpg')] bg-cover bg-center bg-no-repeat text-white py-10 -mx-[100vw] px-[100vw] relative z-0">
                            <div className="container mx-auto md:px-6">

                                <div className="grid lg:grid-cols-12 lg:gap-16 gap-10 items-center">

                                    {/* LEFT IMAGE */}
                                    <div className="lg:col-span-4 flex justify-center lg:justify-start">

                                        <motion.div
                                            initial={{ opacity: 0, x: -60 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2 }}
                                        >
                                            <Image
                                                src="/images/case-study-details/puzzle.png"
                                                alt="Solution"
                                                width={265}
                                                height={265}
                                                className="w-[265px] h-auto"
                                            />
                                        </motion.div>

                                    </div>

                                    {/* RIGHT CONTENT */}
                                    <div className="lg:col-span-8 relative">


                                        <motion.div
                                            initial={{ opacity: 0, y: 60 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: [0.22, 1, 0.36, 1],
                                            }} className="text-center max-w-4xl mx-auto">
                                            <h2 className="text-center figtree-extra-bold text-[31.793px] leading-[151%] tracking-[1.59px] uppercase">
                                                <span className="text-white">SOLU</span>
                                                <span
                                                    className="text-transparent"
                                                    style={{ WebkitTextStroke: "0.85px #FFDB6E" }}
                                                >
                                                    TION
                                                </span>
                                            </h2>

                                            <p className="mt-8 text-white text-center elms-sans-light text-[14px] font-light leading-[165%] tracking-[0.95px]">
                                                {data.solution}
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{
                                                duration: 1.6,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="mt-7 py-5 xl:bg-[url('/images/case-study-details/impact-bg.svg')] bg-none  bg-no-repeat bg-center bg-[length:100%_100%]">
                                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                                <div className="flex justify-center">
                                                    <motion.h3
                                                        initial={{ opacity: 0, x: -60 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            duration: 1.5,
                                                            delay: 0.2,
                                                            ease: "easeOut",
                                                        }}
                                                        className="figtree-extra-bold text-[#FFDB6E] font-[800] text-[32.74px] leading-[151%] tracking-[1.637px] uppercase [text-shadow:0_99.213px_79.37px_rgba(0,0,0,0.19),0_64.304px_46.483px_rgba(0,0,0,0.14),0_38.215px_25.281px_rgba(0,0,0,0.12),0_19.843px_12.898px_rgba(0,0,0,0.09),0_8.084px_6.467px_rgba(0,0,0,0.07),0_1.837px_3.123px_rgba(0,0,0,0.05)]">
                                                        Impact
                                                    </motion.h3>
                                                </div>

                                                <div className="space-y-3">
                                                    {data.impact.map((item, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: 40 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                duration: 0.8,
                                                                delay: index * 0.15,
                                                                ease: "easeOut",
                                                            }}
                                                            className="flex items-center gap-4"
                                                        >
                                                            <Image
                                                                src="/images/case-study-details/impact-list-icon.svg"
                                                                alt="Impact list icon"
                                                                width={15}
                                                                height={14}
                                                            />

                                                            <p className="text-white text-[15.049px] font-medium leading-normal elms-sans-Regular">
                                                                {item}
                                                            </p>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>



                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <GetInTouch />

            <Footer />
        </div>
    );
}