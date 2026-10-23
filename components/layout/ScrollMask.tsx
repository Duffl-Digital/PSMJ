"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

type ScrollMaskProps = {
  desktopVideo: string;
  mobileVideo: string;
  height?: string;
};

export default function ScrollMask({
  desktopVideo,
  mobileVideo,
  height = "400vh", // pinned scroll distance = height - 100vh
}: ScrollMaskProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [badgeHidden, setBadgeHidden] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Circle opens over the first 90% of scroll, last 10% is a short hold */
  const rawCircleSize = useTransform(
    scrollYProgress,
    [0, 0.07, 0.17, 0.35, 0.55, 0.72, 0.9],
    [0.7, 3, 10, 25, 50, 80, 150]
  );

  const circleSize = useSpring(rawCircleSize, {
    stiffness: 120,
    damping: 30,
    mass: 0.6,
  });

  /* Sharp edge (no blur/feather) */
  const maskImage = useTransform(circleSize, (size) => {
    return `radial-gradient(
      circle at center,
      black 0%,
      black ${size}%,
      transparent ${size + 0.3}%
    )`;
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.9], [1.25, 1]);

  /* Red dot */
  const dotOpacity = useTransform(scrollYProgress, [0, 0.02, 0.06], [1, 1, 0]);
  const dotScale = useTransform(scrollYProgress, [0, 0.02, 0.06], [1, 1, 0]);

  /* Text */
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.9, 1], [0, 1, 1]);
  const rawTextY = useTransform(scrollYProgress, [0.6, 0.9, 1], [120, 0, 0]);
  const textY = useSpring(rawTextY, { stiffness: 120, damping: 30, mass: 0.6 });

  /* Scroll-down badge: fades out and moves down, then is fully hidden */
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 0.06], [0, 40]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setBadgeHidden(v > 0.06);
  });

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height }}>
      <div className="sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-[url('/images/white-bg-video.jpg')] bg-cover bg-center bg-no-repeat">
        {/* MASKED VIDEO LAYER */}
        <motion.div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: maskImage,
            maskImage,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        >
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ scale: videoScale }}
          >
            <video
              src={desktopVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 hidden h-full w-full object-cover md:block"
            />
            <video
              src={mobileVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 block h-full w-full object-cover md:hidden"
            />
          </motion.div>
        </motion.div>

        {/* TEXT LAYER (outside the mask) */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
          style={{ opacity: textOpacity, y: textY }}
        >
          <h1 className="text-center text-4xl font-bold tracking-[0.2em] text-white md:text-6xl lg:text-8xl">
            WELCOME TO PSMJ
          </h1>
        </motion.div>

        {/* CENTER DOT (outer = scroll-driven, inner = smooth small pulse) */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: dotOpacity, scale: dotScale }}
        >
          <motion.div
            className="h-full w-full rounded-full bg-[red] will-change-transform"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </motion.div>

        {/* SCROLL DOWN BADGE (positioned right below the red dot) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 mt-10 -translate-x-1/2">
          <motion.div
            className="scroll-badge"
            style={{
              position: "relative",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto",
              opacity: badgeOpacity,
              y: badgeY,
              visibility: badgeHidden ? "hidden" : "visible",
            }}
          >
            <div className="scroll-badge-inner">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="24"
                  viewBox="0 0 17 24"
                  fill="none"
                >
                  <path
                    d="M0.150822 14.7245L7.88055 23.157C8.11839 23.4164 8.47515 23.4164 8.71298 23.157L16.4427 14.7245C16.6806 14.4651 16.6806 14.0759 16.4427 13.8164C16.2049 13.557 15.8481 13.557 15.6103 13.8164L8.92109 21.1462L8.92109 0.648858C8.9211 0.292102 8.65353 0.000209112 8.3265 0.000209083C7.99947 0.000209055 7.73191 0.292102 7.73191 0.648858L7.7319 21.1462L1.01299 13.8164C0.894066 13.6867 0.745417 13.6218 0.596768 13.6218C0.448119 13.6218 0.29947 13.6867 0.18055 13.8164C-0.0572883 14.0435 -0.0572864 14.4651 0.150822 14.7245Z"
                    fill="url(#paint0_linear_1405_24368)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1405_24368"
                      x1="8.30968"
                      y1="23.3516"
                      x2="8.30968"
                      y2="0.000209368"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <p className="text-md elms-sans-medium mt-2 text-[#1E1E1E]">
                Scroll Down
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}