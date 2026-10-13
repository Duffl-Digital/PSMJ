// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// type ScrollMaskProps = {
//   video: string;
//   height?: string;
// };

// export default function ScrollMask({
//   video,
//   height = "250vh",
// }: ScrollMaskProps) {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });


//   const circleSize = useTransform(
//     scrollYProgress,
//     [0, 0.05, 0.15, 0.3, 0.5, 0.7, 1],
//     [0.7, 3, 10, 25, 50, 80, 150]
//   );

//  const maskImage = useTransform(
//   circleSize,
//   (size) =>
//     `radial-gradient(
//       circle at center,
//       black 0%,
//       black ${Math.max(size - 25, 0)}%,
//       rgba(0,0,0,0.8) ${Math.max(size - 18, 0)}%,
//       rgba(0,0,0,0.5) ${Math.max(size - 10, 0)}%,
//       rgba(0,0,0,0.15) ${Math.max(size - 4, 0)}%,
//       transparent ${size}%
//     )`
// );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full"
//       style={{ height }}
//     >
//       <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-black">

//         <motion.div
//           className="absolute inset-0"
//           style={{
//             WebkitMaskImage: maskImage,
//             maskImage,
//             WebkitMaskRepeat: "no-repeat",
//             maskRepeat: "no-repeat",
//             WebkitMaskPosition: "center",
//             maskPosition: "center",
//           }}
//         >
//           <video
//             src={video}
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="auto"
//             className="h-full w-full object-cover"
//           />
//         </motion.div>

    
//         <motion.div
//           className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
//           style={{
//             opacity: useTransform(
//               scrollYProgress,
//               [0, 0.02, 0.06],
//               [1, 1, 0]
//             ),
//             scale: useTransform(
//               scrollYProgress,
//               [0, 0.02, 0.06],
//               [1, 1, 0]
//             ),
//           }}
//         />
//       </div>
//     </section>
//   );
// }


"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
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

  /* SMOOTH CIRCLE REVEAL */
  const rawCircleSize = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15, 0.3, 0.5, 0.7, 1],
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

  const dotOpacity = useTransform(
    scrollYProgress,
    [0, 0.02, 0.06],
    [1, 1, 0]
  );

  const dotScale = useTransform(
    scrollYProgress,
    [0, 0.02, 0.06],
    [1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-black">

        {/* VIDEO + TEXT */}
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
          {/* DESKTOP VIDEO */}
          <video
            src={desktopVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
          />

          {/* MOBILE VIDEO */}
          <video
            src={mobileVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 block h-full w-full object-cover md:hidden"
          />

          {/* TEXT */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <h1 className="text-center text-4xl font-bold tracking-[0.2em] text-white md:text-6xl lg:text-8xl">
              WELCOME TO PSMJ
            </h1>
          </div>
        </motion.div>

        {/* CENTER DOT */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          style={{
            opacity: dotOpacity,
            scale: dotScale,
          }}
        />

      </div>
    </section>
  );
}

// IMMAGE 


// "use client";

// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// type ScrollMaskProps = {
//   image: string;
//   height?: string;
// };

// export default function ScrollMask({
//   image,
//   height = "250vh",
// }: ScrollMaskProps) {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });


//   const circleSize = useTransform(
//     scrollYProgress,
//     [0, 0.05, 0.15, 0.3, 0.5, 0.7, 1],
//     [0.7, 3, 10, 25, 50, 80, 150]
//   );

//   const maskImage = useTransform(circleSize, (size) => {
//     return `radial-gradient(
//       circle at center,
//       black 0%,
//       black ${Math.max(size - 20, 0)}%,
//       rgba(0,0,0,0.8) ${Math.max(size - 14, 0)}%,
//       rgba(0,0,0,0.5) ${Math.max(size - 8, 0)}%,
//       rgba(0,0,0,0.15) ${Math.max(size - 3, 0)}%,
//       transparent ${size}%
//     )`;
//   });

//   const dotOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.02, 0.06],
//     [1, 1, 0]
//   );

//   const dotScale = useTransform(
//     scrollYProgress,
//     [0, 0.02, 0.06],
//     [1, 1, 0]
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full"
//       style={{ height }}
//     >
//       <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-black">


//         <motion.div
//           className="absolute inset-0"
//           style={{
//             WebkitMaskImage: maskImage,
//             maskImage,
//             WebkitMaskRepeat: "no-repeat",
//             maskRepeat: "no-repeat",
//             WebkitMaskPosition: "center",
//             maskPosition: "center",
//           }}
//         >
//           <Image
//             src={image}
//             alt=""
//             fill
//             priority
//             className="object-cover"
//           />
//         </motion.div>

  
//         <motion.div
//           className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
//           style={{
//             opacity: dotOpacity,
//             scale: dotScale,
//           }}
//         />
//       </div>
//     </section>
//   );
// }