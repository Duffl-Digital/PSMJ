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
  height = "200vh", // pinned scroll distance = height - 100vh
}: ScrollMaskProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Circle fully open by 0.85 (spring lags a little, so it settles by the end) */
  const rawCircleSize = useTransform(
    scrollYProgress,
    [0, 0.05, 0.12, 0.25, 0.45, 0.65, 0.85],
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

  /* Video: no vertical movement, so no gap appears at the bottom */
  const videoScale = useTransform(scrollYProgress, [0, 0.85], [1.25, 1]);

  /* Text: no vertical movement, so it never freezes mid-scroll.
     It fades out smoothly while the circle opens. */
  // const textOpacity = useTransform(scrollYProgress, [0.3, 0.75], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.75], [1, 1.08]);

  const dotOpacity = useTransform(scrollYProgress, [0, 0.02, 0.06], [1, 1, 0]);
  const dotScale = useTransform(scrollYProgress, [0, 0.02, 0.06], [1, 1, 0]);


const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 1], [0, 1, 1]);
const rawTextY = useTransform(scrollYProgress, [0.3, 0.5, 1], [120, 0, 0]);
const textY = useSpring(rawTextY, { stiffness: 80, damping: 25, mass: 0.8 });

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height }}>
      <div className="sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-white">
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

      {/* MASKED LAYER (video only) */}
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
    {/* ...your two <video> tags... */}
  </motion.div>
</motion.div>

{/* TEXT LAYER (outside the mask, always stays once shown) */}
<motion.div
  className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
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