"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import { words1, words2 } from "@/data/words";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";



import { motion, useScroll, useTransform, easeOut } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "@/components/layout/Footer";
import GetInTouch from "@/components/layout/GetInTouch";

import PsmjUniverse from "@/components/PsmjUniverse";
import TrustedBySection from "@/components/TrustedBySection";
import ScrollMask from "@/components/layout/ScrollMask";

const words = [
  "#Lorem", "#Branding", "#Marketing", "#Creative", "#Digital",
  "#Strategy", "#Business", "#Agency", "#Design", "#Growth",
  "#Motion", "#UIUX", "#React", "#NextJS", "#Tailwind",
  "#SEO", "#Content", "#Media", "#Ideas", "#Future",
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

const fadeUpStagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, delay },
  },
});

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/* =========================================================
   STATS
========================================================= */

type StaticStat = {
  id: number;
  degree: number;
  value: string;
  line1: string;
  line2: string;
  icon:string;
};

const staticStats: StaticStat[] = [
  { id: 1, degree: 35, value: "90+", line1: "Brand", line2: "management", icon: "/images/home/stats/brand.svg" },
  { id: 2, degree: 72, value: "11", line1: "Years of", line2: "experience", icon: "/images/home/stats/experience.svg" },
  { id: 3, degree: 108, value: "400+", line1: "Team Building", line2: "programs", icon: "/images/home/stats/team.svg" },
  { id: 4, degree: 145, value: "60", line1: "Clients across", line2: "industries", icon: "/images/home/stats/clients.svg" },
];

/* =========================================================
   MAIN
========================================================= */
const SERVICES = [
  "CORPORATE LEARNING",
  "TEAM BUILDING",
  "LEADERSHIP",
  "PEOPLE DEVELOPMENT",
  "LEARNING EXPERIENCES",
  "WORKSHOPS",
  "TRAININGS",
  "BRAND MANAGEMENT",
  "BRAND ACTIVATION",
  "EVENTS",
  "EXHIBITIONS",
  "EXPERIENCE DESIGN",
  "CREATIVE STRATEGY",
  "EVENT PRODUCTION",
  "ON-GROUND ENGAGEMENT",
  "SPACE DESIGN",
  "STORYTELLING",
  "COMMUNICATION",
  "STRATEGY",
  "PRODUCTION",
  "BRAND EXPERIENCES",
  "PEOPLE EXPERIENCES",
];
type Stat = {
  value: string;
  label: string;
};
 
const stats: Stat[] = [
  { value: "60", label: "clients across industries" },
  { value: "400+", label: "Team Building programs" },
  { value: "11", label: "Years of experience" },
  { value: "90+", label: "Brand management" },
];




export default function Home() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [angle, setAngle] = useState(0);
  const [isArcReady, setIsArcReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  /* =======================================================
     SCROLL-LINKED PARALLAX (hero background image)
  ======================================================= */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Subtle, linear parallax drift + fade as the hero scrolls out
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);

  /* =======================================================
     SCROLL TO TOP
  ======================================================= */

  useEffect(() => {
    setIsMounted(true);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  /* =======================================================
     WIDTH
  ======================================================= */

  useEffect(() => {
    if (!sectionRef.current) return;

    const updateWidth = () => {
      if (!sectionRef.current) return;

      setContainerWidth(
        sectionRef.current.getBoundingClientRect().width
      );
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);

    resizeObserver.observe(sectionRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  /* =======================================================
     ARC ANIMATION (continuous linear rotation)
  ======================================================= */

  useEffect(() => {
    setIsArcReady(true);

    let animationFrameId: number;
    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - previousTime;

      // linear increment -> constant angular speed, no easing
      setAngle((prev) => (prev + delta * 0.003) % 360);

      previousTime = currentTime;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  /* =======================================================
     ARC CALCULATIONS
  ======================================================= */

  const centerX = containerWidth / 2;

  const arcWidth = Math.min(containerWidth * 0.92, 1350);
  const radiusX = arcWidth / 2;
  const radiusY =
    containerWidth >= 1200 ? 370 : containerWidth >= 768 ? 300 : 220;

  const centerY =
    containerWidth >= 1200 ? 455 : containerWidth >= 768 ? 430 : 390;

  const startX = centerX - radiusX;
  const endX = centerX + radiusX;

  const arcPath = `
    M ${startX} ${centerY}
    A ${radiusX} ${radiusY} 0 0 1 ${endX} ${centerY}
  `;

  /* =======================================================
     OUTER ARC
  ======================================================= */

  const offset = containerWidth >= 1200 ? 98 : containerWidth >= 768 ? 78 : 52;

  const innerRadiusX = Math.max(radiusX - offset, 30);
  const innerRadiusY = Math.max(radiusY - offset, 30);

  const innerStartX = centerX - innerRadiusX;
  const innerEndX = centerX + innerRadiusX;

  const innerArcPath = `
    M ${innerStartX} ${centerY}
    A ${innerRadiusX} ${innerRadiusY} 0 0 1 ${innerEndX} ${centerY}
  `;

  const visibleCount = containerWidth >= 1200 ? 6 : containerWidth >= 768 ? 5 : 4;
  const spacing = 180 / visibleCount;
  const cycle = words.length * spacing;
  const edgePadding = containerWidth >= 768 ? 12 : 5;
  const fadeRange = containerWidth >= 768 ? 80 : 45;

  return (
    <>
      
        <main className="w-full ">
     
      {/* =====================================================
          HERO
      ===================================================== */}
         <div className="relative z-10 -mt-[50vh] w-full shadow-[0_-30px_80px_rgba(0,0,0,0.45)] rounded-t-[40px]">
      <section
        ref={heroRef}
        className="
          relative
          pt-2
          bg-[linear-gradient(79deg,#043E84_-20.65%,#104F92_11.84%,#256EAB_45.66%,#398CC2_69.88%,#6BD4FC_90.51%,#FFEFB0_122.08%)]
        "
      >
        <Header />



        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <section
          className="
    relative
    z-[999]
    min-h-0
    px-0
    lg:min-h-[calc(100vh-100px)]
  "
        >
          <div
            className="
      mx-auto
    
      xl:w-7/12
      lg:w-8/12
      md:w-9/12
      sm:w-10/12
      w-11/12
      
      px-0
      sm:px-6
      md:px-8
      
      md:pt-[32px]
      pt-7
      lg:px-6
      pb-6
    "
          >
            <div className="w-full">
              {/* =====================================================
          HEADING AREA
      ===================================================== */}

              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="
          relative
      
        "
              >
                {/* =================================================
            TARGET ICON
        ================================================= */}

                <motion.div
                  initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
                  className="
            absolute
            left-0
            top-[-28px]
            z-[50]

            sm:left-0
            sm:top-[-35px]

            md:left-0
            md:top-[-40px]

            lg:left-[-56px]
            lg:top-[-40px]
          "
                >
                  <Image
                    src="/images/home/target-icon.svg"
                    alt="Target"
                    width={54}
                    height={54}
                    priority
                    className="
              block
              h-auto
              w-[34px]

              sm:w-[40px]

              md:w-[48px]

              lg:w-[54px]
            "
                  />
                </motion.div>

                {/* =================================================
            AEROPLANE ICON
        ================================================= */}

                <motion.div
                  initial={{ opacity: 0, x: 40, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: easeOut, delay: 0.65 }}
                  className="
    absolute
    right-[5px]
    top-[110px]

    sm:top-[90px]
    md:top-[105px]
    lg:top-[125px]
    xl:top-[140px]
  "
                >
                  <Image
                    src="/images/home/aeroplan-icon.svg"
                    alt="Aeroplane"
                    width={47}
                    height={47}
                    priority
                    className="
              block
              h-auto
              w-[30px]

              sm:w-[34px]

              md:w-[40px]

              lg:w-[47px]
            "
                  />
                </motion.div>

                {/* =================================================
            MAIN HEADING
        ================================================= */}

                <h1
                  className="
    relative
    z-[20]
    m-0
    w-full
    text-white
    font-normal
    not-italic

    text-[34px]
    leading-[110%]
    tracking-[0.7px]

    sm:text-[46px]
    md:text-[56px]
    lg:text-[64px]
    lg:leading-[140%]
    lg:tracking-[2.127px]
    md:pt-[0px]
    pt-[12px]

    [text-shadow:0_52.798px_79.696px_rgba(101,101,101,0.34),0_34.221px_46.674px_rgba(0,0,0,0.26),0_20.337px_25.385px_rgba(0,0,0,0.21),0_10.56px_12.951px_rgba(0,0,0,0.17),0_4.302px_6.494px_rgba(0,0,0,0.13),0_0.978px_3.136px_rgba(0,0,0,0.08)]
  "
                >
                  {/* BUILDING + BADGE — stacks on mobile, inline from sm: up */}
                  <span
                    className="
      flex
      w-full
     
      items-start
      gap-2

      
      sm:items-center
      sm:gap-0
    "
                  >
                    <span className="block shrink-0 whitespace-nowrap">Building</span>

                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: easeOut, delay: 0.35 }}
                      className="
        relative
        
        
bg-[linear-gradient(90deg,#fff_0%,rgba(59,141,195,0)_100%)]
        ml-0
        mt-1
       
           sm:h-[50px]
           h-[36px]
            

        sm:ml-[10px]
        sm:mt-0
        
      "
                    >
                      {/* HIGHLIGHT */}
                   

                      {/* BADGE */}
                      <span
                        className="
         
      
          bg-[#3281ba]
          font-medium
          leading-none

          
          
         
        
          text-[9px]
          tracking-[1px]
          whitespace-normal
           p-[4px]
           sm:m-[8px]
           m-[6px]

         
         sm:py-[10px]
         sm:px-[12px]
         py-[8px]
         px-[9px]
         
          sm:text-[12px]
          sm:tracking-[1.5px]
          sm:whitespace-nowrap block
            
        
        "
                      >
                        <span className="text-pink-400">People.</span>{" "}
                        <span className="text-yellow-300">Strategy.</span>{" "}
                        <span className="text-lime-300">Performance.</span>
                      </span>
                    </motion.span>
                  </span>

                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
                    className="block"
                  >
                    High-Performing
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: easeOut, delay: 0.25 }}
                    className="block"
                  >
                    Organizations
                  </motion.span>
                </h1>
              </motion.div>

              {/* =====================================================
          DESCRIPTION
      ===================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.8 }}
                className="
          relative
          z-[20]
          mt-6
          flex
         xl:[w-50%]
         md:[w-80%]
         w-[92%]
          items-start
          gap-4

          sm:mt-7
          sm:gap-5

          md:mt-8
          md:ml-[80px]
          md:gap-6

          lg:ml-[140px]
          lg:gap-8
        "
              >
                {/* =================================================
            BRAIN ICON
        ================================================= */}

                <Image
                  src="/images/home/brain-icon.svg"
                  alt="Brain"
                  width={71}
                  height={68}
                  priority
                  className="
            relative
            z-[30]
            block
            h-auto
            w-[38px]
            shrink-0

            sm:w-[48px]

            md:w-[58px]

            lg:w-[71px]
          "
                />

                {/* =================================================
            DESCRIPTION TEXT
        ================================================= */}

                <p
                  className="
            m-0
          
            pt-0
            text-white

            text-[11px]
            leading-[165%]
            tracking-[0.3px]

            sm:text-[12px]
            sm:leading-[175%]
            sm:tracking-[0.45px]

            md:text-[13.5px]
            md:leading-[180%]
            md:tracking-[0.6px]

            lg:pt-1
            lg:text-[15.146px]
            lg:leading-[180%]
            lg:tracking-[0.757px]
          "
                >
                  For over two decades, PSMJ has been transforming teams,
                  strengthening leadership, and creating engaging workplace
                  experiences through learning, consulting, events, and brand
                  activation.
                </p>
              </motion.div>


            
            </div>

          </div>
                         <div
      aria-label="Company statistics"
      className="w-full px-4 py-8 sm:py-10"
    >
      <div className="mx-auto grid xl:w-9/12 lg:w-10/12 md:w-11/12 w-11/12 grid-cols-2 gap-x-6 gap-y-8 text-center text-white sm:grid-cols-4">
       

        <div  className="flex flex-col items-center">
            <p className="text-xl font-bold leading-tight sm:text-3xl">
              60
            </p>
            <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 sm:text-[15px]">
              clients across <br/> industries
            </p>
          </div>
          <div  className="flex flex-col items-center">
            <p className="text-xl font-bold leading-tight sm:text-3xl">
              400+
            </p>
            <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 sm:text-[15px]">
             Team Building <br/> programs
            </p>
          </div>
           <div  className="flex flex-col items-center">
            <p className="text-xl font-bold leading-tight sm:text-3xl">
              11
            </p>
            <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 sm:text-[15px]">
            Years of <br/> exeperince
            </p>
          </div>
          <div  className="flex flex-col items-center">
            <p className="text-xl font-bold leading-tight sm:text-3xl">
              90+            </p>
            <p className="mt-1 max-w-[9rem] text-[12px] font-light leading-snug text-white/80 sm:text-[15px]">
           Brand <br/>management
            </p>
          </div>
      </div>
    </div>
        </section>

        <PsmjUniverse />

        <TrustedBySection />

      

       
     
      </section>

      <div className="pt-7"></div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <GetInTouch />
      </motion.div>

      <Footer />
      </div>
    </main>

    </>
 
  );
}