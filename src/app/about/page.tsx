"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import GetInTouch from "@/components/layout/GetInTouch";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";





export default function About() {

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animation: number;

        const autoScroll = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += 1; // speed

                // Restart from beginning
                if (
                    scrollRef.current.scrollLeft >=
                    scrollRef.current.scrollWidth - scrollRef.current.clientWidth
                ) {
                    scrollRef.current.scrollLeft = 0;
                }
            }

            animation = requestAnimationFrame(autoScroll);
        };

        animation = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animation);
    }, []);

    const timeline = [
        {
            year: "2004",
            description:
                "PSMJ began with three visionaries, a cup of coffee, and a passion for transforming people.",
        },
        {
            year: "2006",
            description:
                "From a cozy 200 sq. ft. workspace, PSMJ's journey of growth truly began.",
        },
        {
            year: "2008",
            description:
                "With 25 clients and a growing team of seven, PSMJ launched its official website.",
        },
        {
            year: "2011",
            description:
                "Expanded to Ahmedabad, reached 50 clients, and launched ExpoStalls.",
        },
        {
            year: "2014",
            description:
                "Premium office, larger team, and rapid expansion.",
        },
        {
            year: "2014",
            description:
                "Premium office, larger team, and rapid expansion.",
        },
        {
            year: "2014",
            description:
                "Premium office, larger team, and rapid expansion.",
        },
    ];

    const team = [
        {
            image: "/images/about/CEO.png",
            name: "Vikram Rao",
            role: "CEO",
            mt: "",
        },
        {
            image: "/images/about/Program-Manager.png",
            name: "Karan Verma",
            role: "Program Manager",
            mt: "sm:-mt-[39px]",
        },
        {
            image: "/images/about/Creative-Director.png",
            name: "Arjun Mehta",
            role: "Creative Director",
            mt: "",
        },
    ];

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


    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item: Variants = {
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

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const fadeUpVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };


    const leftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const rightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const zoomVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};



    return (
        <>
            <section className="about-banner text-center pt-5 pb-5 sm:pb-12 bg-white xl:bg-[url('/images/about/banner-bg.jpg')] bg-center bg-no-repeat xl:bg-cover">


                <Header />

               




                <motion.div
                    className="px-3"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h6
                        variants={fadeUp}
                        className="text-[#1E1E1E] elms-sans-bold text-[16px] leading-[180%] tracking-[0.8px]"
                    >
                        ABOUT PSMJ
                    </motion.h6>

                    <motion.h2
                        variants={fadeUp}
                        className="figtree-extra-bold text-[25px] sm:text-[35.773px] leading-[132%] tracking-[1.073px] bg-clip-text text-transparent"
                        style={{
                            background:
                                "linear-gradient(73deg, #043E84 7.12%, #104F92 23.66%, #256EAB 40.88%, #398CC2 53.2%, #262875 63.7%, #262875 79.77%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Inspiring People.
                    </motion.h2>

                    <motion.h2
                        variants={fadeUp}
                        className="figtree-extra-bold text-[25px] sm:text-[35.773px] leading-[132%] tracking-[1.073px] bg-clip-text text-transparent"
                        style={{
                            background:
                                "linear-gradient(73deg, #043E84 7.12%, #104F92 23.66%, #256EAB 40.88%, #398CC2 53.2%, #262875 63.7%, #262875 79.77%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Transforming Experiences.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="w-full md:w-[80%] lg:w-[50%] pt-4 mx-auto text-[#1E1E1E] elms-sans-medium text-[14px] leading-[180%] tracking-[0.7px]"
                    >
                        Lorem ipsum dolor sit amet consectetur. Sit odio pretium dolor nunc amet.
                        Nunc est praesent a magna. Etiam elit fermentum urna tortor congue.
                        Lorem ipsum dolor sit amet consectetur. Sit odio pretium dolor nunc amet.
                        Nunc est praesent a magna.
                    </motion.p>
                </motion.div>

            </section>

            <motion.div className="w-full bg-white relative"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                {/* Blue Line */}
                <div className="absolute top-[30px] left-0 w-full z-[999]">
                    <div className="relative h-8 "
                        style={{
                            background:
                                "linear-gradient(70deg, #043E84 7.11%, #104F92 27.91%, #256EAB 49.55%, #398CC2 65.05%, #6BD4FC 78.25%)",
                        }}
                    >
                        <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-white -translate-y-1/2"></div>
                    </div>
                </div>


                <div className="flex">

                    {/* Left Fixed Section */}
                    <div className="sticky left-0 z-20 min-w-[150px] sm:min-w-[250px]  bg-white  flex items-center justify-center">
                        <h2 className=" uppercase pt-5 leading-[126%] tracking-[1.25px] figtree-extra-bold text-[19px] sm:text-[25.773px]"
                            style={{
                                background:
                                    "linear-gradient(96deg, #262875 4.59%, #68155B 39.36%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            The <br /> Journey
                        </h2>
                    </div>

                    {/* Timeline Scroll */}
                    <div className="overflow-x-auto scrollbar-hide flex-1" ref={scrollRef}>

                        <div className="min-w-max relative">




                            {/* Cards */}
                            <div className="flex">

                                {timeline.map((item, index) => (
                                    <div key={`${item.year}-${index}`} className="w-[280px] timeline-card relative ps-4 pe-10">
                                        <h3 className="text-[#1E1E1E] figtree-Bold font-[19px] leading-[142%] tracking-[0.95px] pt-1 mb-12">
                                            {item.year}
                                        </h3>

                                        <p className="elms-sans-light tect-[15px] leading-[142%] text-[#1E1E1E] tracking-[0.75px] pb-10">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>
            </motion.div>

            <section className="relative bg-white xl:bg-[url('/images/about/team-bg.jpg')] bg-center bg-no-repeat xl:bg-cover">
               
                <motion.h1
                    variants={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center figtree-extra-bold text-[32px] leading-[126%] tracking-[1.6px]"
                    style={{
                        background:
                            "linear-gradient(96deg, #262875 4.59%, #68155B 39.36%, #F0404B 75.71%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Meet our Team
                </motion.h1>

                <div className="">
                    <motion.div
                        className="team-details text-center gap-y-[35px] sm:gap-y-[65px] flex flex-wrap gap-8 justify-center items-center py-[61px]"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            variants={item}
                            className="order-1 z-[9] lg:order-1 bg-[#FFF7DEB8] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center"
                        >
                            <h6 className="text-[#1E1E1E] figtree-extra-bold text-[30px]  tracking-[1.5px]">20+</h6>
                            <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">Years of</p>
                            <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">Expertise</p>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="order-3 z-[9] lg:order-2 hidden sm:flex gap-8 justify-center w-full lg:w-auto"
                        >
                            <motion.div variants={item}>
                                <Image
                                    src="/images/about/CEO.png"
                                    alt="CEO"
                                    width={200}
                                    height={200} // Required by Next.js
                                    style={{ width: "200px", height: "auto" }}
                                />
                                <h3 className="figtree-SemiBold mt-[10px] text-[#564F4F] font-semibold text-[19.491px] leading-[117%] capitalize">
                                    Vikram Rao
                                </h3>
                                <p className="text-[#ADADAD] mt-[3px] font-medium text-[13px] leading-[117%] capitalize elms-sans-Regular">CEO</p>
                            </motion.div>

                            <motion.div variants={item} className="sm:-mt-[39px] ">
                                <Image
                                    src="/images/about/Program-Manager.png"
                                    alt="CEO"
                                    width={200}
                                    height={200} // Required by Next.js
                                    style={{ width: "200px", height: "auto" }}
                                />
                                <h3 className="figtree-SemiBold mt-[6px]  text-[#564F4F] font-semibold text-[19.491px] leading-[117%] capitalize">
                                    Karan Verma
                                </h3>
                                <p className="text-[#ADADAD] font-medium mt-[3px] text-[13px] leading-[117%] capitalize elms-sans-Regular"> Program Manager</p>
                            </motion.div>

                            <motion.div variants={item} className="">
                                <Image
                                    src="/images/about/Creative-Director.png"
                                    alt="CEO"
                                    width={200}
                                    height={200} // Required by Next.js
                                    style={{ width: "200px", height: "auto" }}
                                />
                                <h3 className="figtree-SemiBold mt-[10px] text-[#564F4F] font-semibold text-[19.491px] leading-[117%] capitalize">
                                    Arjun Mehta
                                </h3>
                                <p className="text-[#ADADAD] font-medium mt-[3px] text-[13px] leading-[117%] capitalize elms-sans-Regular"> Creative Director </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="order-3 w-full sm:hidden z-[9]"
                        >
                            <Swiper
                                modules={[Navigation]}
                                navigation
                                loop={false}
                                spaceBetween={20}
                                slidesPerView={1.3}
                                centeredSlides
                                className="about-team-swiper"

                            >
                                {team.map((member, index) => (
                                    <SwiperSlide key={index}>
                                        <motion.div
                                            variants={item}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className={`text-center ${item.mt}`}
                                        >
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={200}
                                                height={200}
                                                className="w-[200px] h-auto mx-auto"
                                            />

                                            <h3 className="figtree-SemiBold mt-[10px] text-[#564F4F] text-[19.491px] leading-[117%] capitalize">
                                                {member.name}
                                            </h3>

                                            <p className="text-[#ADADAD] mt-[3px] text-[13px] leading-[117%] capitalize elms-sans-Regular">
                                                {member.role}
                                            </p>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>


                        <motion.div
                            variants={item}
                            className="order-2 z-[9] lg:order-3 bg-[#FFF7DEB8] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center"
                        >
                            <h6 className="text-[#1E1E1E] figtree-extra-bold text-[30px]  tracking-[1.5px]">100+</h6>
                            <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">Interventions</p>
                            <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]"> Every Year</p>
                        </motion.div>

                    </motion.div>
                </div>
            </section>



            <section className="mb-[20px]  industries-box relative grid grid-cols-12 px-4 lg:px-6 mx-4 lg:mx-10 rounded-[10px] bg-[linear-gradient(68deg,_#043E84_7.09%,_#104F92_33.85%,_#256EAB_61.71%,_#398CC2_81.65%,_#6BD4FC_98.64%,_#FFEFB0_124.63%)]">

                <motion.div
                    className="col-span-12 xl:col-span-10 order-2 xl:order-1"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-6 lg:gap-0">

                        <motion.div
                            variants={fadeUpVariants} className="text-center end-btm-line relative pt-6 pb-5">
                            <Image
                                src="/images/about/Industries/IT-Technology.svg"
                                alt="IT & Technology"
                                width={38}
                                height={38}
                                className="mx-auto"
                            />
                            <h3 className="text-[15px] figtree-extra-light text-white leading-[142%] tracking-[0.75px] mt-3">
                                IT & Technology
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={fadeUpVariants} className="text-center end-top-line relative pt-6 pb-5">
                            <Image
                                src="/images/about/Industries/Financial-Services.svg"
                                alt="Banking & Financial Services"
                                width={38}
                                height={38}
                                className="mx-auto"
                            />
                            <h3 className="text-[15px] figtree-extra-light text-white leading-[142%] tracking-[0.75px] mt-3">
                                Banking & <br className="block sm:hidden" /> Financial Services
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={fadeUpVariants} className="text-center end-btm-line relative pt-6 pb-5">
                            <Image
                                src="/images/about/Industries/Manufacturing.svg"
                                alt="Manufacturing"
                                width={38}
                                height={38}
                                className="mx-auto"
                            />
                            <h3 className="text-[15px] figtree-extra-light text-white leading-[142%] tracking-[0.75px] mt-3">
                                Manufacturing
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={fadeUpVariants} className="text-center end-top-line relative pt-6 pb-5">
                            <Image
                                src="/images/about/Industries/Retail-E-commerce.svg"
                                alt="Retail & E-commerce"
                                width={38}
                                height={38}
                                className="mx-auto"
                            />
                            <h3 className="text-[15px] figtree-extra-light text-white leading-[142%] tracking-[0.75px] mt-3">
                                Retail & <br className="block sm:hidden" /> E-commerce
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={fadeUpVariants} className="text-center relative pt-6 pb-5">
                            <Image
                                src="/images/about/Industries/Telecommunications.svg"
                                alt="Telecommunications"
                                width={38}
                                height={38}
                                className="mx-auto"
                            />
                            <h3 className="text-[15px] figtree-extra-light text-white leading-[142%] tracking-[0.75px] mt-3">
                                Telecommunications
                            </h3>
                        </motion.div>

                    </div>
                </motion.div>

                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} className="order-1 xl:order-2 col-span-12 xl:col-span-2 flex items-center justify-center xl:justify-start px-4 xl:ps-12 py-8 xl:py-0">
                    <h1 className="text-white text-[24px] lg:text-[25px] text-center xl:text-left leading-[126%] tracking-[1.253px] figtree-extra-bold">
                        Industries <br className="hidden xl:block" />
                        we Serve
                    </h1>
                </motion.div>

            </section>


            <section className="relative lg:py-20 py-10 overflow-hidden bg-white xl:bg-[url('/images/about/why-psmj-bg.jpg')] bg-center bg-no-repeat xl:bg-contain">
                
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 lg:gap-12">

                        {/* Left Side */}
                        <motion.div
    className="lg:space-y-20 lg:mt-[45px]"
    variants={leftVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
>

                            <div className="relative text-center lg:text-start mb-5 sm:mb-7 lg:mb-12">
                                <div className="absolute top-3 right-[-120px] w-[120px] xl:w-[160px] hidden lg:block w-[120px] border-t border-gray-500">
                                    <span className="absolute -left-1 -top-[5px] w-3 h-3 rounded-full bg-gray-700"></span>
                                </div>

                                <h3 className="figtree-SemiBold pb-[10px] text-[#564F4F] text-[19.491px] font-semibold leading-[117%] capitalize">
                                    Customized Learning Solutions
                                </h3>

                                <p className="elms-sans-light text-[#1E1E1E] lg:h-[60px] text-[14px] font-light leading-[162%] tracking-[0.7px]">
                                    Tailored programs designed to address your organization's
                                    unique goals, challenges, and workforce needs.
                                </p>
                            </div>

                            <div className="relative text-center lg:text-start ">
                                <div className="absolute top-3 right-[-120px] w-[160px] hidden lg:block w-[120px] border-t border-gray-500">
                                    <span className="absolute -left-1 -top-[5px] w-3 h-3 rounded-full bg-gray-700"></span>
                                </div>

                                <h3 className="figtree-SemiBold pb-[10px] text-[#564F4F] text-[19.491px] font-semibold leading-[117%] capitalize">
                                    Transformative Leadership
                                </h3>

                                <p className="elms-sans-light text-[#1E1E1E] text-[14px] font-light leading-[162%] tracking-[0.7px]">
                                    Empowering individuals and teams with future-ready leadership
                                    and professional development.
                                </p>
                            </div>

                        </motion.div>

                        {/* Center */}
                        <motion.div
    className="flex justify-center z-[9]"
    variants={zoomVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
>
                            <div className="relative">

                                <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-orange-400 p-[8px]">

                                    <div className="relative w-full h-full rounded-full overflow-hidden">

                                        <Image
                                            src="/images/about/why-psmj.png"
                                            alt="Why PSMJ"
                                            fill
                                            className="object-cover"
                                        />

                                        <div className="absolute "></div>

                                        <div className="absolute inset-0 flex items-end mb-[26px] justify-center">
                                            <h2 className="figtree-Bold text-white text-[32px] font-black leading-[126%] tracking-[1.6px] uppercase text-center">
                                                WHY <br /> PSMJ?
                                            </h2>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        {/* Right Side */}
                        <motion.div
    className="lg:space-y-20 lg:mt-[45px]"
    variants={rightVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
>

                            <div className="relative lg:ps-5 text-center lg:text-start mb-5 sm:mb-7 lg:mb-12">

                                <div className="absolute top-3 left-[-120px] hidden lg:block w-[120px] border-t border-gray-500">
                                    <span className="absolute -right-1 -top-[5px] w-3 h-3 rounded-full bg-gray-700"></span>
                                </div>

                                <h3 className="figtree-SemiBold pb-[10px] text-[#564F4F] text-[19.491px] font-semibold leading-[117%] capitalize">
                                    Experienced Facilitators
                                </h3>

                                <p className="elms-sans-light lg:h-[60px] text-[#1E1E1E] text-[14px] font-light leading-[162%] tracking-[0.7px]">
                                    Industry experts delivering engaging, practical, and impactful
                                    learning experiences.
                                </p>

                            </div>

                            <div className="relative lg:ps-5 text-center lg:text-start mb-5 sm:mb-7 lg:mb-0">

                                <div className="absolute top-3 left-[-120px] hidden lg:block w-[120px] border-t border-gray-500">
                                    <span className="absolute -right-1 -top-[5px] w-3 h-3 rounded-full bg-gray-700"></span>
                                </div>

                                <h3 className="figtree-SemiBold pb-[10px] text-[#564F4F] text-[19.491px] font-semibold leading-[117%] capitalize">
                                    End-to-End Execution
                                </h3>

                                <p className="elms-sans-light text-[#1E1E1E] text-[14px] font-light leading-[162%] tracking-[0.7px]">
                                    From strategy and planning to flawless delivery, we manage every
                                    stage of your learning journey.
                                </p>

                            </div>

                        </motion.div>

                    </div>
                </div>
            </section>


            <GetInTouch/>

            <Footer/>
          
        </>


    );
}
