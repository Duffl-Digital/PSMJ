"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import GetInTouch from "@/components/layout/GetInTouch";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function CaseStudy() {

    const caseStudies = [
        {
            id: 1,
            left: {
                id: "BPCL",
                title: "YouNgage - Nation wide engagement initiative",
                company: "BPCL",
                gradient: "linear-gradient(90deg, #4A91E8 0%, #295182 100%)",
            },
            right: {
                id: "AstraZeneca",
                title: "Young Scientist",
                company: "AstraZeneca",
                 gradient: "linear-gradient(90deg, rgb(140, 91, 205) 0%, rgb(70, 46, 103) 100%)",
            },
        },
        {
            id: 2,
            left: {
                id: "MFD_Galaxy",
                title: "MFD Galaxy Conference & Expo",
                company: "MFD Galaxy",
                gradient: " linear-gradient(90deg, #EA6194 0%, #843753 100%)",
            },
            right: {
                id: "AstraZeneca_2",
                title: "Business Connect - Mystery Room",
                company: "AstraZeneca",
                gradient: "linear-gradient(90deg, #F87A25 0%, #924816 100%)",
            },
        },
        {
            id: 3,
            left: {
                id: "DHL",
                title: "Flavors of India: The Team CookOff",
                company: "DHL",
                gradient: "linear-gradient(90deg, #56B4AC 0%, #254E4B 100%)",
            },
            right: {
                id: "UK_Based_Organisation",
                title: "Sustainability Roadshow",
                company: "UK-Based Organisation",
                gradient: " linear-gradient(90deg, #4A91E8 0%, #295182 100%)",
            },
        },

        {
            id: 4,
            left: {
                id: "TIGER_ANALYTICS",
                title: "Board Game Experience",
                company: "TIGER ANALYTICS",
                gradient: "linear-gradient(90deg, #4A91E8 0%, #295182 100%)",
            },
            right: {
                id: "GLOBAL_TECH_COMPANY",
                title: "Pitch Perfect",
                company: "GLOBAL TECH COMPANY",
                 gradient: "linear-gradient(90deg, rgb(140, 91, 205) 0%, rgb(70, 46, 103) 100%)",
            },
        },

        {
            id: 5,
            left: {
                id: "Exhibition_Stall_Launch",
                title: "Exhibition Stall Launch",
                company: "",
                gradient: "linear-gradient(90deg, #4A91E8 0%, #295182 100%)",
            },
            right: {
                id: "BOUNTEOUS",
                title: "Family Day",
                company: "BOUNTEOUS",
                 gradient: "linear-gradient(90deg, rgb(140, 91, 205) 0%, rgb(70, 46, 103) 100%)",
            },
        },
    ];



    return (
        <>

            <section className="bg-[url('/images/case-study/bg.jpg')] bg-cover bg-center bg-no-repeat">
                <Header />

                <div className="px-8 lg:px-0">
                    <div className="mx-auto mb-2 h-[4px] w-[65px] rounded-full bg-gradient-to-r from-[#1D5AA8] via-[#6EB8FF] to-[#B6F6FF]" />
                    <h6 className="text-center text-[#1E1E1E] elms-sans-bold text-[18px] font-semibold leading-[151%] tracking-[0.9px]">Case Study</h6>
                    <h2 className="text-center  pt-4 figtree-extra-bold text-[#1E1E1E] text-[24px] sm:text-[32px]  leading-[136%] tracking-[1.6px] uppercase">
                        REAL CHALLENGES
                        <span className="text-[#FF0074]">.</span>
                        <br />
                        MEANINGFUL IMPACTS
                        <span className="text-[#0074FF]">.</span>
                    </h2>
                </div>


                <section className="lg:pt-24 pt-10">
                    <div className="container mx-auto px-8 lg:px-10">

                        {caseStudies.map((row, index) => (
                            <div key={row.id} className="relative lg:mb-24 lg:min-h-[320px] ">

                                {/* Wave Image */}
                                <Image
                                    src={`/images/case-study/arrow-line-${index + 1}.svg`}
                                    alt="Arrow line"
                                    width={1}
                                    height={1}
                                    useMap={`#image-map-${index + 1}`}
                                    className="absolute z-[999999] hidden lg:block top-0 left-[4%] xl:left-[10%] 2xl:left-[18%] w-auto h-auto "
                                />

                                {index === 0 && (
                                    <map name={`image-map-${index + 1}`}>
                                        <area
                                            shape="circle"
                                            coords="404,20,20"
                                             href={`/case-study-details?id=${row.left.id}`}
                                            alt={row.left.company}
                                          
                                            rel="noopener noreferrer"
                                           
                                        />

                                        <area
                                            shape="circle"
                                            coords="532,219,21"
                                             href={`/case-study-details?id=${row.right.id}`}
                                            alt={row.right.company}
                                       
                                            rel="noopener noreferrer"
                                            
                                        />
                                    </map>
                                )}
                                {index === 1 && (
                                    <map name={`image-map-${index + 1}`}>
                                        <area
                                            shape="circle"
                                            coords="404,20,20"
                                             href={`/case-study-details?id=${row.left.id}`}
                                            alt={row.left.company}
                                            rel="noopener noreferrer"
                                            
                                        />

                                        <area
                                            shape="circle"
                                            coords="532,219,21"
                                             href={`/case-study-details?id=${row.right.id}`}
                                            alt={row.right.company}
                                            rel="noopener noreferrer"
                                            
                                        />
                                    </map>
                                )}
                                {index === 2 && (
                                    <map name={`image-map-${index + 1}`}>
                                        <area
                                            shape="circle"
                                            coords="404,20,20"
                                             href={`/case-study-details?id=${row.left.id}`}
                                            alt={row.left.company}
                                            rel="noopener noreferrer"
                                            
                                        />

                                        <area
                                            shape="circle"
                                            coords="532,219,21"
                                             href={`/case-study-details?id=${row.right.id}`}
                                            alt={row.right.company}
                                            rel="noopener noreferrer"
                                            
                                        />
                                    </map>
                                )}

                                {index === 3 && (
                                    <map name={`image-map-${index + 1}`}>
                                        <area
                                            shape="circle"
                                            coords="404,20,20"
                                             href={`/case-study-details?id=${row.left.id}`}
                                            alt={row.left.company}
                                            rel="noopener noreferrer"
                                            
                                        />

                                        <area
                                            shape="circle"
                                            coords="532,219,21"
                                             href={`/case-study-details?id=${row.right.id}`}
                                            alt={row.right.company}
                                            rel="noopener noreferrer"
                                            
                                        />
                                    </map>
                                )}

                                {index === 4 && (
                                    <map name={`image-map-${index + 1}`}>
                                        <area
                                            shape="circle"
                                            coords="404,20,20"
                                             href={`/case-study-details?id=${row.left.id}`}
                                            alt={row.left.company}
                                            rel="noopener noreferrer"
                                            
                                        />

                                        <area
                                            shape="circle"
                                            coords="532,219,21"
                                             href={`/case-study-details?id=${row.right.id}`}
                                            alt={row.right.company}
                                            rel="noopener noreferrer"
                                            
                                        />
                                    </map>
                                )}

                                {/* Content Wrapper */}


                                    {/* Left */}
                                    <div className="lg:absolute left-0 top-0 lg:max-w-[380px] mb-10 lg:mb-0 z-[999999] ">

                                    <Link href={`/case-study-details?id=${row.left.id}`}>
                                          <h3
                                            className="elms-sans-bold text-[17px] sm:text-[19px] font-bold leading-[142%] tracking-[0.95px] relative"
                                            style={{
                                                background: row.left.gradient,
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            <span
                                                className="absolute -top-[9px] left-[-12px] inline-block text-[19px]"
                                                style={{
                                                    backgroundImage: row.left.gradient,
                                                    WebkitBackgroundClip: "text",
                                                    backgroundClip: "text",
                                                    color: "transparent",
                                                    WebkitTextFillColor: "transparent",
                                                }}
                                            >
                                                ❝
                                            </span>
                                            {row.left.title}
                                        </h3>
                                    </Link>
                                      
                                    <Link href={`/case-study-details?id=${row.left.id}`} className="flex items-center gap-[12px]">
                                    <p className="mt-3 elms-sans-medium uppercase  text-[#1E1E1E] text-[15px] font-semibold leading-[151%] tracking-[0.75px]">
                                            {row.left.company}
                                        </p>
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<path d="M11.4797 0.000259585L6.10966 0.0823858C5.90033 0.0694092 5.72009 0.228579 5.70713 0.437927C5.69416 0.647253 5.85333 0.827496 6.06268 0.840449C6.0822 0.841651 6.10179 0.841374 6.12124 0.839553L10.5757 0.774109L0.108297 11.5668C-0.0377117 11.7173 -0.0340338 11.9578 0.116535 12.1038C0.267104 12.2498 0.507517 12.2461 0.653526 12.0956L11.121 1.30291L11.1891 5.75468C11.1761 5.964 11.3353 6.14425 11.5446 6.1572C11.754 6.17015 11.9342 6.01101 11.9471 5.80166C11.9483 5.78214 11.9481 5.76255 11.9462 5.7431L11.8641 0.373005C11.8603 0.164236 11.6886 -0.00231279 11.4797 0.000259585Z" fill="black"/>
</svg>

                                    </Link>
                                        
                                    </div>

                                    {/* Right */}
                                    <div className="mb-10 lg:mb-0 lg:absolute lg:-right-[47px] xl:right-0 bottom-[50px] lg:min-w-[380px] xl:min-w-[420px] z-[999999]">

                                        <Link href={`/case-study-details?id=${row.right.id}`}>

                                                <h3
                                            className="elms-sans-bold text-[17px] sm:text-[19px] relative font-bold leading-[142%] tracking-[0.95px]"
                                            style={{
                                                background: row.right.gradient,
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            <span
                                                className="absolute -top-[9px] left-[-12px] inline-block text-[19px]"
                                                style={{
                                                    backgroundImage: row.right.gradient,
                                                    WebkitBackgroundClip: "text",
                                                    backgroundClip: "text",
                                                    color: "transparent",
                                                    WebkitTextFillColor: "transparent",
                                                }}
                                            >
                                                ❝
                                            </span>
                                            {row.right.title}
                                        </h3>

                                        </Link>


                                         <Link href={`/case-study-details?id=${row.right.id}`}>
                                         <p className="mt-3 elms-sans-medium uppercase  text-[#1E1E1E] text-[15px] font-semibold leading-[151%] tracking-[0.75px]">
                                            {row.right.company}
                                        </p>
                                         </Link>
                                        

                                        
                                    </div>

                                
                            </div>
                        ))}

                    </div>
                </section>





                <GetInTouch />
                <Footer />
            </section>



        </>

    );
}