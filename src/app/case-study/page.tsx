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
                id: "oracle",
                title: "Helping organizations learn, lead, and grow through every challenge.",
                company: "ORACLE",
                gradient: "linear-gradient(90deg, #4A91E8 0%, #295182 100%)",
            },
            right: {
                id: "lt-infotech",
                title: "Ideas that inspired people. Strategies that delivered results.",
                company: "L&T INFOTECH",
                 gradient: "linear-gradient(90deg, rgb(140, 91, 205) 0%, rgb(70, 46, 103) 100%)",
            },
        },
        {
            id: 2,
            left: {
                id: "flextronics",
                title: "From complex challenges to meaningful results—one project at a time.",
                company: "FLEXTRONICS",
                gradient: " linear-gradient(90deg, #EA6194 0%, #843753 100%)",
            },
            right: {
                id: "collabnet",
                title: "Where challenges become opportunities for growth.",
                company: "COLLABNET",
                gradient: "linear-gradient(90deg, #F87A25 0%, #924816 100%)",
            },
        },
        {
            id: 3,
            left: {
                id: "henkel",
                title: "Turning business challenges into success stories.",
                company: "HENKEL",
                gradient: "linear-gradient(90deg, #56B4AC 0%, #254E4B 100%)",
            },
            right: {
                id: "paypal",
                title: "Real business challenges. Real people. Real impact.",
                company: "PAYPAL",
                gradient: " linear-gradient(90deg, #4A91E8 0%, #295182 100%)",
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
                                      
                                    <Link href={`/case-study-details?id=${row.left.id}`}>
                                    <p className="mt-3 elms-sans-medium  text-[#1E1E1E] text-[15px] font-semibold leading-[151%] tracking-[0.75px]">
                                            {row.left.company}
                                        </p>
                                    </Link>
                                        
                                    </div>

                                    {/* Right */}
                                    <div className="mb-10 lg:mb-0 lg:absolute lg:-right-[47px] xl:right-0 bottom-[50px] lg:max-w-[380px] xl:max-w-[420px] z-[999999]">

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
                                         <p className="mt-3 elms-sans-medium  text-[#1E1E1E] text-[15px] font-semibold leading-[151%] tracking-[0.75px]">
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