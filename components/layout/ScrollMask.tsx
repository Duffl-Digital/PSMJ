"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type ScrollMaskProps = {
  desktopVideo: string;
  mobileVideo: string;
  height?: string;
};

export default function ScrollMask({
  desktopVideo,
  mobileVideo,
  height = "250vh",
}: ScrollMaskProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* PHASE 1 (0 → 0.6): circle reveal */
  const rawCircleSize = useTransform(
    scrollYProgress,
    [0, 0.04, 0.1, 0.2, 0.32, 0.45, 0.6],
    [0.7, 3, 10, 25, 50, 80, 150]
  );

  const circleSize = useSpring(rawCircleSize, {
    stiffness: 80,
    damping: 25,
    mass: 0.8,
  });

  const maskImage = useTransform(circleSize, (size) => {
    return `radial-gradient(
      circle at center,
      black 0%,
      black ${Math.max(size - 20, 0)}%,
      rgba(0,0,0,0.8) ${Math.max(size - 14, 0)}%,
      rgba(0,0,0,0.5) ${Math.max(size - 8, 0)}%,
      rgba(0,0,0,0.15) ${Math.max(size - 3, 0)}%,
      transparent ${size}%
    )`;
  });

  /* PHASE 2 (0.6 → 1): parallax while home page slides over */
  const videoScale = useTransform(scrollYProgress, [0, 0.6], [1.25, 1]);
  const videoY = useTransform(scrollYProgress, [0.6, 1], ["0%", "-15%"]);
  const textOpacity = useTransform(scrollYProgress, [0.65, 0.9], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.6, 1], ["0%", "-40%"]);

  const dotOpacity = useTransform(scrollYProgress, [0, 0.02, 0.06], [1, 1, 0]);
  const dotScale = useTransform(scrollYProgress, [0, 0.02, 0.06], [1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height }}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-white">
        {/* MASKED LAYER */}
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
          {/* PARALLAX LAYER (scale + move) */}
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ scale: videoScale, y: videoY }}
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

          {/* TEXT (moves faster than video = depth) */}
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ opacity: textOpacity, y: textY }}
          >
            <h1 className="text-center text-4xl font-bold tracking-[0.2em] text-white md:text-6xl lg:text-8xl">
              WELCOME TO PSMJ
            </h1>
          </motion.div>
        </motion.div>

        {/* CENTER DOT */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[red]"
          style={{ opacity: dotOpacity, scale: dotScale }}
        />
      </div>
    </section>
  );
}