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


const ArrowIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17 17L7 7" />
    <path d="M7 16V7h9" />
  </svg>
);
import Link from "next/link";

type CaseStudy = {
    id: string;
    tab: string;
    title: string;
    

    href: string;
};



const cases: CaseStudy[] = [
    { id: "bpcl", tab: "BPCL", title: "YouNgage - Nation wide engagement initiative", href: "/case-study-details?id=BPCL" },
    { id: "astrazeneca", tab: "AstraZeneca", title: "Young Scientist", href: "/case-study-details?id=AstraZeneca" },
    { id: "mfd", tab: "MFD Galaxy", title: "MFD Galaxy Conference & Expo", href: "/case-study-details?id=MFD_Galaxy" },
    { id: "astrazeneca_2", tab: "AstraZeneca", title: "Business Connect - Mystery Room", href: "/case-study-details?id=AstraZeneca_2" },
    { id: "dhl", tab: "DHL", title: "Flavors of India: The Team CookOff", href: "/case-study-details?id=DHL" },
    { id: "uk_based_organisation", tab: "UK-Based Organisation", title: "Sustainability Roadshow", href: "/case-study-details?id=UK_Based_Organisation" },
    { id: "tiger_analytics", tab: "TIGER ANALYTICS", title: "Board Game Experience", href: "/case-study-details?id=TIGER_ANALYTICS" },
    { id: "global_tech_company", tab: "GLOBAL TECH COMPANY", title: "Pitch Perfect", href: "/case-study-details?id=GLOBAL_TECH_COMPANY" },
    { id: "exhibition_stall_launch", tab: "Real Estate", title: "Exhibition Stall Launch", href: "/case-study-details?id=Exhibition_Stall_Launch" },
    { id: "bounteous", tab: "BOUNTEOUS", title: "Family Day", href: "/case-study-details?id=BOUNTEOUS" },
];

const moreColors = [
    "from-[#000000] to-[#000000]",
    "from-[#000000] to-[#000000]",
    "from-[#000000] to-[#000000]",
];
export default function CaseStudyDetails() {

    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const data = CaseStudyData[id as keyof typeof CaseStudyData];
// ---- Explore more: next 3 case studies (no duplicate of current) ----
const currentIndex = cases.findIndex(
    (c) => c.href.split("id=")[1]?.toLowerCase() === id?.toLowerCase()
);

const startIndex = currentIndex === -1 ? 0 : currentIndex + 1;
const moreCases = Array.from(
    { length: 3 },
    (_, i) => cases[(startIndex + i) % cases.length]
);
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

     <a href="/case-study" className="group w-10/12 mx-auto flex items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="11"
    viewBox="0 0 22 11"
    fill="none"
    className="transition-transform duration-300 ease-out group-hover:-translate-x-2"
  >
    <path d="M0.14431 5.10652L5.07831 0.172477C5.25555 -0.0344865 5.56704 -0.058613 5.774 0.118669C5.98096 0.295909 6.00509 0.607392 5.82781 0.814356C5.81127 0.833648 5.79329 0.851669 5.774 0.868163L1.68371 4.96342L21.2176 4.96342C21.49 4.96342 21.7109 5.18433 21.7109 5.45684C21.7109 5.72936 21.49 5.95023 21.2176 5.95023L1.68371 5.95023L5.774 10.0405C5.98096 10.2178 6.00509 10.5293 5.82781 10.7362C5.65053 10.9432 5.33909 10.9673 5.13212 10.79C5.11283 10.7735 5.09481 10.7555 5.07831 10.7362L0.144267 5.80217C-0.047008 5.60979 -0.0470061 5.29898 0.14431 5.10652Z" fill="white"/>
  </svg>
  <span className="text-[15px] text-[#fff] elms-sans-Regular ml-2">Back to Case studies</span>
</a>
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
                                <div className="xl:col-span-4 lg:col-span-3 lg:pl-10 xl:pl-14 text-center lg:text-left mt-10 lg:mt-0">

                                    <p className="elms-sans-medium text-[#1E1E1E] text-[20px]">
                                        Case Study
                                    </p>

                                    <h2 className="mt-2 figtree-extra-bold text-[#1E1E1E] text-[24px] uppercase">
                                        {data.title}
                                    </h2>

                                    <div className="mt-8 hidden flex justify-center lg:justify-start">
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
                                <div className="xl:col-span-8 lg:col-span-9 relative">

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
                                                <span className="text-white">SOLUTION</span>
                                                {/* <span
                                                    className="text-transparent"
                                                    style={{ WebkitTextStroke: "0.85px #FFDB6E" }}
                                                >
                                                    TION
                                                </span> */}
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
                                            <div className="grid lg:grid-cols-2 gap-5 lg:gap-12 items-center xl:min-h-50">
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

<section
    aria-labelledby="casestudies-heading"
    className="w-full bg-white px-4 py-10 md:pt-0 md:pb-16"
>
    <div className="mx-auto w-full max-w-5xl">
        <h2
            id="casestudies-heading"
            className="mb-6 text-base figtree-Bold uppercase tracking-wide text-[#1D1D1F] sm:mb-8 sm:text-[19px]"
        >
            Explore more case studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3">
            {moreCases.map((item, index) => (
                <Link
                    key={item.id}
                    href={item.href}
                    className={`group flex items-center justify-between gap-4 py-5 md:py-2 ${
                        index === 0
                            ? "md:pr-6"
                            : "border-t border-gray-300 md:border-l md:border-t-0 md:px-6"
                    }`}
                >
                    <div className="min-w-0">
                        <p
                            className={`bg-gradient-to-r ${moreColors[index]} bg-clip-text text-[14px] elms-sans-semibold leading-snug text-transparent sm:text-[17px]`}
                        >
                            {item.title}
                        </p>
                        <p className="mt-2 text-[13px] figtree-Medium  capitalize italic text-[#1D1D1F]">
                            {item.tab}
                        </p>
                    </div>
                    <span className="flex h-7 w-7 rotate-90  shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#2B7DE9] to-[#1558C0] text-white transition-transform group-hover:scale-110 sm:h-8 sm:w-8">
                        <ArrowIcon />
                    </span>
                </Link>
            ))}
        </div>
    </div>
</section>

            <GetInTouch />

            <Footer />
        </div>
    );
}