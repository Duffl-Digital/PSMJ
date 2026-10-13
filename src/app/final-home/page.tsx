"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";

import {
  useEffect,
  useLayoutEffect,
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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* =========================================================
   WORDS
========================================================= */

const words = [
  "#Lorem",
  "#Branding",
  "#Marketing",
  "#Creative",
  "#Digital",
  "#Strategy",
  "#Business",
  "#Agency",
  "#Design",
  "#Growth",
  "#Motion",
  "#UIUX",
  "#React",
  "#NextJS",
  "#Tailwind",
  "#SEO",
  "#Content",
  "#Media",
  "#Ideas",
  "#Future",
];

/* =========================================================
   STATS
========================================================= */

type StaticStat = {
  id: number;
  degree: number;
  value: string;
  line1: string;
  line2: string;
  icon: ComponentType<LucideProps>;
};

const staticStats: StaticStat[] = [
  {
    id: 1,
    degree: 35,
    value: "90+",
    line1: "Brand",
    line2: "management",
    icon: PanelsTopLeft,
  },
  {
    id: 2,
    degree: 72,
    value: "11",
    line1: "Years of",
    line2: "experience",
    icon: Eye,
  },
  {
    id: 3,
    degree: 108,
    value: "400+",
    line1: "Team Building",
    line2: "programs",
    icon: Handshake,
  },
  {
    id: 4,
    degree: 145,
    value: "60",
    line1: "Clients across",
    line2: "industries",
    icon: Blocks,
  },
];

/* =========================================================
   MAIN
========================================================= */

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [mounted, setMounted] = useState(false);

  const [containerWidth, setContainerWidth] = useState(1440);

  const [angle, setAngle] = useState(0);

  /* =======================================================
     MOUNT
  ======================================================= */

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  /* =======================================================
     WIDTH
  ======================================================= */

  useEffect(() => {
    if (!sectionRef.current) return;

    const updateWidth = () => {
      if (!sectionRef.current) return;

      setContainerWidth(sectionRef.current.getBoundingClientRect().width);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [mounted]);

  /* =======================================================
     ARC ANIMATION
  ======================================================= */

  useEffect(() => {
    let frameId: number;

    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - previousTime;

      setAngle((prev) => (prev + delta * 0.003) % 360);

      previousTime = currentTime;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  /* =======================================================
     MOUNT CHECK
  ======================================================= */

  if (!mounted) {
    return null;
  }

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

  /* =======================================================
     OUTER ARC
  ======================================================= */

  const arcPath = `
    M ${startX} ${centerY}
    A ${radiusX} ${radiusY} 0 0 1 ${endX} ${centerY}
  `;

  /* =======================================================
     INNER ARC
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

  /* =======================================================
     WORD SETTINGS
  ======================================================= */

  const visibleCount =
    containerWidth >= 1200 ? 6 : containerWidth >= 768 ? 5 : 4;

  const spacing = 180 / visibleCount;

  const cycle = words.length * spacing;

  const edgePadding = containerWidth >= 768 ? 12 : 5;

  const fadeRange = containerWidth >= 768 ? 80 : 45;

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <main className="w-full overflow-hidden">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[linear-gradient(79deg,#043E84_-20.65%,#104F92_11.84%,#256EAB_45.66%,#398CC2_69.88%,#6BD4FC_90.51%,#FFEFB0_122.08%)]
        "
      >
        <Header />

        <Image
          src="/images/home/section-top-image.png"
          alt=""
          width={1000}
          height={500}
          priority
          className="
            absolute
            left-1/2
            top-0
            z-10
            h-auto
            w-full
            -translate-x-1/2
          "
        />

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
      w-full
      max-w-5xl
      items-center
      px-5
      sm:px-6
      md:px-8
      lg:min-h-[calc(100vh-100px)]
      lg:px-6
    "
          >
            <div className="w-full">
              {/* =====================================================
          HEADING AREA
      ===================================================== */}

              <div
                className="
          relative
          w-full
          max-w-full
        "
              >
                {/* =================================================
            TARGET ICON
        ================================================= */}

                <div
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
                </div>

                {/* =================================================
            AEROPLANE ICON
        ================================================= */}

                <div
                  className="
            absolute
            right-[5px]
            top-[75px]
            z-[50]

            sm:right-[8px]
            sm:top-[90px]

            md:right-[12px]
            md:top-[105px]

            lg:right-[20px]
            lg:top-[125px]

            xl:right-[40px]
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
                </div>

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
          

        
           leading-[140%]
            tracking-[2.127px]


            [text-shadow:0_52.798px_79.696px_rgba(101,101,101,0.34),0_34.221px_46.674px_rgba(0,0,0,0.26),0_20.337px_25.385px_rgba(0,0,0,0.21),0_10.56px_12.951px_rgba(0,0,0,0.17),0_4.302px_6.494px_rgba(0,0,0,0.13),0_0.978px_3.136px_rgba(0,0,0,0.08)]
          "
                >
                  {/* =================================================
              BUILDING + BADGE
          ================================================= */}

                  <span
                    className="
    flex
    w-full
    flex-row
    items-center
    gap-0
  "
                  >
                    {/* BUILDING */}

                    <span
                      className="
      block
      shrink-0
      whitespace-nowrap
    "
                    >
                      Building
                    </span>


                 

                    {/* =================================================
      PEOPLE / STRATEGY / PERFORMANCE
  ================================================= */}

                    <span
                      className="
      relative
      ml-[10px]
      mt-0
      block
     
      shrink-0

    

      h-[50px]
    "
                    >
                      {/* HIGHLIGHT */}

                      <span
                        className="
        absolute
        left-0
        right-0
       
        bg-[linear-gradient(90deg,#fff_0%,rgba(59,141,195,0)_100%)]

       

        top-[8px]
        h-[52px]
      "
                      />

                      {/* BADGE */}

                      <span
                        className="
        relative
        z-10

        top-[2px]
       sm:top-[-11px]
     md:top-[-22px]
     lg:top-[-31px]
ml-[9px]
        inline-block
        whitespace-nowrap
        bg-[#3281ba]

   

        
        font-medium
        leading-none
        tracking-[0.8px]

        

       px-[18px]
      py-[11px]
      text-[12px]
       tracking-[1.5px]
      "
                      >
                        <span className="text-pink-400">People.</span>{" "}
                        <span className="text-yellow-300">Strategy.</span>{" "}
                        <span className="text-lime-300">Performance.</span>
                      </span>
                    </span>
                  </span>

                  {/* =================================================
              HIGH-PERFORMING
          ================================================= */}

                  <span className="block">High-Performing</span>

                  {/* =================================================
              ORGANIZATIONS
          ================================================= */}

                  <span className="block">Organizations</span>
                </h1>
              </div>

              {/* =====================================================
          DESCRIPTION
      ===================================================== */}

              <div
                className="
          relative
          z-[20]
          mt-6
          flex
          w-full
          max-w-3xl
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
            max-w-full
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
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            ARC SECTION
        ================================================= */}

        <section
          ref={sectionRef}
          className="
            relative
            h-[430px]
            w-full
            overflow-hidden
          "
        >
          <svg
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              h-full
              w-full
            "
            width={containerWidth}
            height="430"
            viewBox={`0 0 ${containerWidth} 430`}
            preserveAspectRatio="none"
          >
            <defs>
              {/* OUTER ARC GRADIENT */}

              <linearGradient
                id="arcGradient"
                gradientUnits="userSpaceOnUse"
                x1={startX}
                y1="0"
                x2={endX}
                y2="0"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0" />

                <stop offset="12%" stopColor="white" stopOpacity="0.35" />

                <stop offset="50%" stopColor="white" stopOpacity="0.8" />

                <stop offset="88%" stopColor="white" stopOpacity="0.35" />

                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              {/* INNER ARC GRADIENT */}

              <linearGradient
                id="innerArcGradient"
                gradientUnits="userSpaceOnUse"
                x1={innerStartX}
                y1="0"
                x2={innerEndX}
                y2="0"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0" />

                <stop offset="15%" stopColor="white" stopOpacity="0.25" />

                <stop offset="50%" stopColor="white" stopOpacity="0.65" />

                <stop offset="85%" stopColor="white" stopOpacity="0.25" />

                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* OUTER ARC */}

            <path
              d={arcPath}
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="1.3"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />

            {/* INNER ARC */}

            <path
              d={innerArcPath}
              fill="none"
              stroke="url(#innerArcGradient)"
              strokeWidth="1.2"
              strokeDasharray="5 7"
              strokeLinecap="round"
            />
          </svg>

          {/* =================================================
              WORDS
          ================================================= */}

          {words.map((word, index) => {
            const degree = (index * spacing + angle) % cycle;

            const isVisible = degree >= 0 && degree <= 180;

            const radians = (degree * Math.PI) / 180;

            const x = centerX + radiusX * Math.cos(Math.PI - radians);

            const y = centerY - radiusY * Math.sin(radians);

            const closeness = 1 - Math.abs(degree - 90) / 90;

            const distance = Math.min(x - startX, endX - x);

            const edgeOpacity = Math.max(
              0,
              Math.min(1, (distance - edgePadding) / fadeRange),
            );

            const opacity = isVisible ? edgeOpacity : 0;

            const scale = 0.9 + closeness * 0.12;

            return (
              <div
                key={`${word}-${index}`}
                className="
                  pointer-events-none
                  absolute
                  z-30
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/80
                  bg-white/10
                  text-white
                  shadow-sm
                  backdrop-blur-sm
                "
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  opacity,
                  fontSize: containerWidth < 640 ? "12px" : "14px",
                  padding: containerWidth < 640 ? "6px 12px" : "8px 18px",
                  transform: `translate(-50%, -50%) scale(${scale})`,
                }}
              >
                {word}
              </div>
            );
          })}

          {/* =================================================
              STATS
          ================================================= */}

          {staticStats.map((item) => {
            const radians = (item.degree * Math.PI) / 180;

            const x = centerX + innerRadiusX * Math.cos(Math.PI - radians);

            const y = centerY - innerRadiusY * Math.sin(radians);

            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  pointer-events-none
                  absolute
                  z-40
                  flex
                  -translate-x-1/2
                  flex-col
                  items-center
                  text-center
                  text-white
                "
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                }}
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-500/25
                    backdrop-blur-sm
                  "
                >
                  <Icon
                    size={containerWidth < 640 ? 25 : 34}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="mt-2">
                  <strong
                    className="
                      text-2xl
                      font-bold
                      leading-none
                      sm:text-3xl
                    "
                  >
                    {item.value}
                  </strong>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-4
                      text-white/95
                      sm:text-base
                      sm:leading-5
                    "
                  >
                    {item.line1}
                    <br />
                    {item.line2}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
}
