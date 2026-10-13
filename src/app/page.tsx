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

import {
  Blocks,
  Eye,
  Handshake,
  PanelsTopLeft,
  type LucideProps,
} from "lucide-react";

import { motion, useScroll, useTransform, easeOut } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroScrollCards from "@/components/HeroScrollCards";
import Marquee from "@/components/Marquee";
import Footer from "@/components/layout/Footer";
import GetInTouch from "@/components/layout/GetInTouch";
import Introhome from "@/components/Introhome";
import Introhometwo from "@/components/Introhometwo";

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

export default function CaseStudy() {
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
      <Introhometwo />
        <main className="w-full hidden ">
     
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          pt-4
          bg-[linear-gradient(79deg,#043E84_-20.65%,#104F92_11.84%,#256EAB_45.66%,#398CC2_69.88%,#6BD4FC_90.51%,#FFEFB0_122.08%)]
        "
      >
        <Header />

        <motion.div
          style={{ y: bgY, opacity: bgOpacity }}
          className="absolute left-1/2 top-0 z-10 h-auto w-full -translate-x-1/2"
        >
          <Image
            src="/images/home/section-top-image.png"
            alt=""
            width={1000}
            height={500}
            priority
            className="block h-auto w-full"
          />
        </motion.div>

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
      flex
      xl:w-7/12
      lg:w-8/12
      md:w-9/12
      sm:w-10/12
      w-11/12
      items-center
      px-3
      sm:px-6
      md:px-8
      lg:min-h-[calc(100vh-100px)]
      md:pt-[0]
      pt-7
      lg:px-6
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
        block
        shrink-0

        ml-0
        mt-1
        h-[38px]

        sm:ml-[10px]
        sm:mt-0
        sm:h-[50px]
      "
                    >
                      {/* HIGHLIGHT */}
                      <span
                        className="
          absolute
          left-0
          right-0
          bg-[linear-gradient(90deg,#fff_0%,rgba(59,141,195,0)_100%)]

          top-0
          h-[38px]

          sm:top-[8px]
          sm:h-[50px]
        "
                      />

                      {/* BADGE */}
                      <span
                        className="
          relative
          z-10
          inline-block
          bg-[#3281ba]
          font-medium
          leading-none

          top-[-8px]
          
          sm:left-[0px]
          left-[4px]
          px-[12px]
          sm:py-[8px]
          py-[9.2px]
          text-[10px]
          tracking-[1px]
          whitespace-normal

          sm:top-[-11px]
          sm:ml-[9px]
          sm:px-[18px]
          sm:py-[11px]
          sm:text-[12px]
          sm:tracking-[1.5px]
          sm:whitespace-nowrap

          md:top-[-16px]
          lg:top-[-33px]
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
        </section>

        {/* =================================================
            ARC SECTION
        ================================================= */}

        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "linear" }}
          className="relative h-[430px] w-full overflow-hidden "
        >
          {/* Top glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[520px] w-[75%] -translate-x-1/2 rounded-full  blur-[130px]" />

          {/* SVG Arcs */}
          <svg
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            width={containerWidth}
            height="430"
            viewBox={`0 0 ${containerWidth} 430`}
            preserveAspectRatio="none">
            <defs>
              <linearGradient id="arcGradient" gradientUnits="userSpaceOnUse" x1={startX} y1="0" x2={endX} y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="12%" stopColor="white" stopOpacity="0.35" />
                <stop offset="50%" stopColor="white" stopOpacity="0.8" />
                <stop offset="88%" stopColor="white" stopOpacity="0.35" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="innerArcGradient" gradientUnits="userSpaceOnUse" x1={innerStartX} y1="0" x2={innerEndX} y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="15%" stopColor="white" stopOpacity="0.25" />
                <stop offset="50%" stopColor="white" stopOpacity="0.65" />
                <stop offset="85%" stopColor="white" stopOpacity="0.25" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Outer Arc */}
            <path
              d={arcPath}
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="1.3"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />

            {/* Inner Parallel Arc */}
            <path
              d={innerArcPath}
              fill="none"
              stroke="url(#innerArcGradient)"
              strokeWidth="1.2"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />
          </svg>

          {/* Animated pills on outer arc — constant linear rotation speed */}
          {isMounted &&
            containerWidth > 0 &&
            words.map((word, index) => {
              const degree =
                (index * spacing + (isArcReady ? angle : 0)) % cycle;
              const isVisible = degree >= 0 && degree <= 180;
              const radians = (degree * Math.PI) / 180;

              const x = centerX + radiusX * Math.cos(Math.PI - radians);
              const y = centerY - radiusY * Math.sin(radians);

              const closeness = 1 - Math.abs(degree - 90) / 90;
              const distance = Math.min(x - startX, endX - x);
              const edgeOpacity = Math.max(0, Math.min(1, (distance - edgePadding) / fadeRange));

              const opacity = isVisible ? edgeOpacity : 0;
              const scale = 0.9 + closeness * 0.12;

              return (
                <div
                  key={`${word}-${index}`}
                  className="pointer-events-none absolute z-30 whitespace-nowrap rounded-full border border-white/80 bg-white/10 text-white shadow-sm backdrop-blur-sm will-change-transform"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    opacity,
                    fontSize: containerWidth < 640 ? 12 : 14,
                    padding: containerWidth < 640 ? "6px 12px" : "8px 18px",
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    transition: "opacity 0.2s linear",
                  }}
                >
                  {word}
                </div>
              );
            })}

          {/* Static stats on inner arc */}
        {staticStats.map((item, i) => {
  const radians = (item.degree * Math.PI) / 180;
  const x = centerX + innerRadiusX * Math.cos(Math.PI - radians);
  const y = centerY - innerRadiusY * Math.sin(radians);

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: easeOut, delay: i * 0.12 }}
      className="pointer-events-none absolute z-40 flex -translate-x-1/2 flex-col items-center text-center text-white"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <div className="flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500/25 backdrop-blur-sm">
        <Image
          src={item.icon}
          alt={item.line1}
          width={containerWidth < 640 ? 20 : 34}
          height={containerWidth < 640 ? 20 : 34}
        />
      </div>
      <div className="mt-2 md:flex hidden flex-col items-center">
        <strong className="text-2xl font-bold leading-none sm:text-3xl">
          {item.value}
        </strong>
        <p className="mt-2 text-xs leading-4 text-white/95 sm:text-base sm:leading-5 elms-sans-light ">
          {item.line1}
          <br />
          {item.line2}
        </p>
      </div>
    </motion.div>
  );
})}
        </motion.section>

        <div className="w-11/12 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:hidden flex  flex-wrap"
          >
            {staticStats.map((item, i) => {
              return (
                <motion.div
                  variants={fadeUpStagger(i * 0.1)}
                  className="w-6/12 text-center py-4"
                  key={item.id}
                >
                  <strong className="text-2xl figtree-Bold leading-none sm:text-3xl text-white">
                    {item.value}
                  </strong>
                  <p className="mt-2 text-xs leading-4 text-white/95 sm:text-base sm:leading-5 elms-sans-light ">
                    {item.line1}
                    <br />
                    {item.line2}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          <HeroScrollCards />
        </motion.div>

    
          <Marquee items={words1} />
      
      
          <Marquee items={words2} reverse />
        
       
          <Marquee items={words1} />
     
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
    </main>
    </>
 
  );
}