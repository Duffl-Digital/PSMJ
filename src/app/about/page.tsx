"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

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
  const container = scrollRef.current;
  if (!container) return;

  let animation: number;
  let lastTime = 0;

  const speed = 45; // Pixels per second

  const autoScroll = (time: number) => {
    if (!container) return;

    if (!lastTime) lastTime = time;

    const deltaTime = (time - lastTime) / 1000;
    lastTime = time;

    container.scrollLeft += speed * deltaTime;

    // Seamless loop
    const loopWidth = container.scrollWidth / 2;

    if (container.scrollLeft >= loopWidth) {
      container.scrollLeft -= loopWidth;
    }

    animation = requestAnimationFrame(autoScroll);
  };

  animation = requestAnimationFrame(autoScroll);

  return () => {
    cancelAnimationFrame(animation);
  };
}, []);

  const timeline = [
    {
      year: "2004",
      description:
  "Entrepreneurial Journey Begins,\nPSMJ – First letter of 4 young founders"
    },
    {
      year: "2006",
      description:
        "Launch of psmj.in",
    },
    {
      year: "2008",
      description:
        "500 events milestone",
    },
    {
      year: "2010",
      description:
        "Launch of expostalls.in",
    },
    {
      year: "2012",
      description: "Dun & Bradstreet approved organisation",
    },
    {
      year: "2016",
      description: "National presence",
    },
    {
      year: "2018",
      description: "Launch of engagemyteam.in",
    },
     {
      year: "2020",
      description:
        "Virtual & Hybrid Experiences",
    },
    {
      year: "2022",
      description: "Digitalization of Events",
    },
    {
      year: "2026",
      description: "Developing AI driven event automation product",
    },
   
  ];

  const sliderData = [
    {
      image: "/images/about/team/SAI_SHANKAR.png",
      name: "R. SAI SHANKAR",
      role: "Founder",
      mt: "",
    },
    {
      image: "/images/about/team/M.KESHAV.png",
      name: "M. KESHAV",
      role: "Mentor",
      mt: "sm:-mt-[39px]",
    },
    {
      image: "/images/about/team/M.L.NARENDRA_KUMAR.png",
      name: "M.L.NARENDRA KUMAR",
      role: "Mentor",
      mt: "",
    },
    {
      image: "/images/about/team/NEHA_SHRIVASTAVA.png",
      name: "NEHA SHRIVASTAVA",
      role: "HRBP",
      mt: "sm:-mt-[39px]",
    },
    {
      image: "/images/about/team/SNEHAA_SRIRAMAN.png",
      name: "SNEHAA SRIRAMAN",
      role: "HR Executive",
      mt: "",
    },
    {
      image: "/images/about/team/ARUL.png",
      name: "ARUL",
      role: "Manager",
      mt: "sm:-mt-[39px]",
    },
    {
      image: "/images/about/team/PUGAZH.png",
      name: "PUGAZH",
      role: "Manager",
      mt: "",
    },
    {
      image: "/images/about/team/SATISH.png",
      name: "SATISH",
      role: "Designer",
      mt: "sm:-mt-[39px]",
    },
    {
      image: "/images/about/team/C.PAVITHRA.png",
      name: "C.PAVITHRA",
      role: "Junior Accounts",
      mt: "",
    },


    // loop-mode

    
   
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

  //   console.log(team.length);

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
            PSMJ is a leading experiential engagement and event solutions
            company with over two decades of expertise in creating impactful
            corporate experiences. Our work spans employee engagement, learning
            interventions, leadership experiences, conferences, expos and
            business events.
          </motion.p>
        </motion.div>
      </section>

      <motion.div
        className="w-full bg-white relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Blue Line */}
        <div className="absolute top-7.5 left-0 w-full z-999">
          <div
            className="relative h-8 "
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
            <h2
              className=" uppercase pt-5 leading-[126%] tracking-[1.25px] figtree-extra-bold text-[19px] sm:text-[25.773px]"
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
          <div
            className="overflow-x-auto scrollbar-hide flex-1"
            ref={scrollRef}
          >
            <div className="min-w-max relative">
              {/* Cards */}
             <div className="flex flex-nowrap">
  {[...timeline, ...timeline].map((item, index) => (
    <div
      key={`${item.year}-${index}`}
      className="w-[280px] shrink-0 timeline-card relative ps-4 pe-10"
    >
      <h3 className="text-[#1E1E1E] figtree-Bold font-[19px] leading-[142%] tracking-[0.95px] pt-1 mb-12">
        {item.year}
      </h3>

      <p className="elms-sans-light text-[15px] leading-[142%] text-[#1E1E1E] tracking-[0.75px] pb-10 whitespace-pre-line">
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

        <motion.div
          className="team-details text-center gap-y-8.75 sm:gap-y-16.25 flex flex-wrap  justify-center items-center pt-15.25"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={item}
            className="order-1 z-[9] mr-5 lg:order-1 bg-[#FFF7DEB8] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center"
          >
            <h6 className="text-[#1E1E1E] figtree-extra-bold text-[30px]  tracking-[1.5px]">
              20+
            </h6>
            <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">
              Years 
            </p>
           
          </motion.div>
          <motion.div
            variants={item}
            className="order-2 z-[9]  ml-5 lg:order-3 bg-[#FFF7DEB8] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center"
          >
            <h6 className="text-[#1E1E1E] figtree-extra-bold text-[30px]  tracking-[1.5px]">
              70+
            </h6>
            <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">
              Corporate 
            </p>
            <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">
              {" "}
              Clients
            </p>
          </motion.div>
          <motion.div
            variants={item}
            className="order-2 z-[9]  ml-5 lg:order-3 bg-[#FFF7DEB8] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center"
          >
            
             <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">
               Pan
            </p>
            <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">
              India
            </p>
            
          </motion.div>

          <motion.div
            variants={item}
            className="order-2 z-[9]  ml-5 lg:order-3 bg-[#FFF7DEB8] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center"
          >
            
             <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">
              Customized 
            </p>
            <p className="text-[#1E1E1E] text-[15px] elms-sans-light leading-[142%] tracking-[0.75px]">
             Solutions
            </p>
            
          </motion.div>
        </motion.div>

       <div className="">
  <motion.div
    className="team-details text-center py-[61px] overflow-hidden"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className=" pb-10">
      <div className="marquee_About">
        <div className="marquee__track mt-[47]" >
          {[...sliderData, ...sliderData].map((member, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[220px] text-center ${member.mt}`}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="mx-auto"
              />

              <h3 className="mt-3 figtree-SemiBold text-[19px]">
                {member.name}
              </h3>

              <p className="text-[#ADADAD] text-[13px]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
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
              variants={fadeUpVariants}
              className="text-center end-btm-line relative pt-6 pb-5"
            >
              <Image
                src="/images/about/Industries/IT-Technology.svg"
                alt="IT & Technology"
                width={38}
                height={38}
                className="mx-auto"
              />
              <h3 className="text-[15px] figtree-extra-light text-white leading-[142%] tracking-[0.75px] mt-3">
                IT & ITES
              </h3>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="text-center end-top-line relative pt-6 pb-5"
            >
              <Image
                src="/images/about/Industries/Financial-Services.svg"
                alt="Banking & Financial Services"
                width={38}
                height={38}
                className="mx-auto"
              />
              <h3 className="text-[15px] figtree-extra-light text-white leading-[142%] tracking-[0.75px] mt-3">
                {/* Banking & <br className="block sm:hidden" /> Financial Services */}
                Pharma
              </h3>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="text-center end-btm-line relative pt-6 pb-5"
            >
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
              variants={fadeUpVariants}
              className="text-center end-top-line relative pt-6 pb-5"
            >
              <Image
                src="/images/about/Industries/Retail-E-commerce.svg"
                alt="Retail & E-commerce"
                width={38}
                height={38}
                className="mx-auto"
              />
              <h3 className="text-[15px] figtree-extra-light text-white leading-[142%] tracking-[0.75px] mt-3">
                {/* Retail & <br className="block sm:hidden" /> E-commerce */}
                Public sector
              </h3>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="text-center relative pt-6 pb-5"
            >
              <Image
                src="/images/about/Industries/Telecommunications.svg"
                alt="Telecommunications"
                width={38}
                height={38}
                className="mx-auto"
              />
              <h3 className="text-[15px] figtree-extra-light text-white leading-[142%] tracking-[0.75px] mt-3">
                Real Estate
              </h3>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 xl:order-2 col-span-12 xl:col-span-2 flex items-center justify-center xl:justify-start px-4 xl:ps-12 py-8 xl:py-0"
        >
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
              className=""
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative lg:min-h-[196px] text-center lg:text-start pb-[29px]">
                <div className="absolute top-3 right-[-190px] w-[160px] xl:w-[200px] hidden lg:block  border-t border-gray-500">
                  <span className="absolute -left-1 -top-[5px] w-3 h-3 rounded-full bg-gray-700"></span>
                </div>

                <h3 className="figtree-SemiBold pb-[10px] text-[#564F4F] text-[16px] font-semibold leading-[26px] capitalize">
                  Experienced Team 20+ Years of Executional Excellence
                </h3>

                <p className="elms-sans-light text-[#1E1E1E]  text-[13px] font-light leading-[162%] tracking-[0.7px]">
                  Backed by experienced professionals across strategy, creative design, client servicing, production,
technology, and on-ground execution, we deliver events with precision from concept to completion.
                </p>
              </div>

              <div className="relative lg:min-h-[196px] text-center lg:text-start ">
                <div className="absolute top-3 right-[-120px] w-[160px] hidden lg:block w-[120px] border-t border-gray-500">
                  <span className="absolute -left-1 -top-[5px] w-3 h-3 rounded-full bg-gray-700"></span>
                </div>

                <h3 className="figtree-SemiBold pb-[10px] text-[#564F4F] text-[16px] font-semibold leading-[26px] capitalize">
                  Cross-Industry Expertise
  <br className="hidden lg:block" />
  Trusted Across Diverse Business Sectors
                </h3>

                <p className="elms-sans-light text-[#1E1E1E] text-[13px] font-light leading-[162%] tracking-[0.7px]">
                  Our experience spans IT & ITES, Pharmaceuticals, Manufacturing, Public Sector Enterprises, Real Estate,
Financial Services, and other industries, enabling us to create solutions tailored to every business
environment.
                </p>
              </div>
            </motion.div>

            {/* Center */}
            <motion.div
              className="flex justify-center z-9 "
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
              className=""
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative lg:min-h-[196px] lg:ps-5 text-center lg:text-start pb-[29px] ">
                <div className="absolute top-3 left-[-195px] hidden lg:block w-[200px] border-t border-gray-500">
                  <span className="absolute -right-1 -top-[5px] w-3 h-3 rounded-full bg-gray-700"></span>
                </div>

                <h3 className="figtree-SemiBold pb-[10px] text-[#564F4F] text-[16px] font-semibold leading-[26px] capitalize">
                  360° Engagement Expertise One Partner. Multiple Engagement Solutions.
                </h3>

                <p className="elms-sans-light  text-[#1E1E1E] text-[13px] font-light leading-[162%] tracking-[0.7px]">
                  From employee engagement and learning interventions to conferences, offsites, exhibitions, large-scale
corporate events, and experiential campaigns, we bring deep domain expertise across every engagement
format.
                </p>
              </div>

              <div className="relative lg:min-h-[196px] lg:ps-5 text-center lg:text-start  sm:mb-7 lg:mb-0">
                <div className="absolute top-3 left-[-120px] hidden lg:block w-[120px] border-t border-gray-500">
                  <span className="absolute -right-1 -top-[5px] w-3 h-3 rounded-full bg-gray-700"></span>
                </div>

                <h3 className="figtree-SemiBold pb-[10px] text-[#564F4F] text-[16px] font-semibold leading-[26px] capitalize">
                  Technology-Driven Experiences Digital Innovation That Elevates Engagement
                </h3>

                <p className="elms-sans-light text-[#1E1E1E] text-[13px] font-light leading-[162%] tracking-[0.7px]">
                  We leverage event technology, mobile applications, gamification, live analytics, digital leaderboards,
interactive experiences, and AI-enabled solutions to create immersive and measurable participant journeys.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GetInTouch />

      <Footer />
    </>
  );
}
