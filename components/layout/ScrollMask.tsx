"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ScrollMaskProps = {
  desktopVideo: string;
  mobileVideo: string;
  logoSrc?: string; // logo shown in the center while scrolling
  height?: string; // pinned scroll distance = height - 100vh
  playAt?: number; // scroll progress where the video starts (once)
  videoWidth?: number; // final video width, 0.8 = 80% (height stays full)
  bgHideAt?: number; // scroll progress where the bg image is removed
  onVideoEnd?: () => void; // called once when the video finishes
};

export default function ScrollMask({
  desktopVideo,
  mobileVideo,
  logoSrc = "/images/logo.svg",
  height = "400vh",
  playAt = 0.6,
  videoWidth = 1,
  bgHideAt = 0.8,
  onVideoEnd,
}: ScrollMaskProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false); // video started once: never restart
  const hasEndedRef = useRef(false); // onVideoEnd fires once only

  const [badgeHidden, setBadgeHidden] = useState(false);
  const [bgVisible, setBgVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundButton, setShowSoundButton] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Circle opens over the first 90% of scroll */
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

  /* Only the width shrinks 100% -> videoWidth (height stays full) */
  // const videoWidthValue = useTransform(
  //   scrollYProgress,
  //   [0.5, bgHideAt],
  //   ["100%", `${videoWidth * 100}%`]
  // );

  const videoScale = useTransform(scrollYProgress, [0, 0.9], [1.25, 1]);

  /* Red dot */
  const dotOpacity = useTransform(scrollYProgress, [0, 0.02, 0.06], [1, 1, 0]);
  const dotScale = useTransform(scrollYProgress, [0, 0.02, 0.06], [1, 1, 0]);

  /* Logo: appears after the dot, stays centered, fades out when the video starts */
  const logoOpacity = useTransform(
    scrollYProgress,
    [0.04, 0.12, Math.max(playAt - 0.08, 0.13), playAt],
    [0, 1, 1, 0]
  );
  const logoScale = useTransform(scrollYProgress, [0.04, 0.12], [0.85, 1]);

  /* Scroll-down badge */
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 0.06], [0, 40]);

  /* Keep both videos' muted state in sync */
  useEffect(() => {
    [desktopRef.current, mobileRef.current].forEach((v) => {
      if (v) v.muted = isMuted;
    });
  }, [isMuted]);

  /* Whichever video is actually visible (md breakpoint = 768px) */
  const getActiveVideo = () =>
    window.matchMedia("(min-width: 768px)").matches
      ? desktopRef.current
      : mobileRef.current;

  const playVideo = (video: HTMLVideoElement) => {
    video.play().catch(() => {
      // sound blocked -> fall back to muted
      if (!video.muted) {
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {
          hasPlayedRef.current = false; // allow another attempt
        });
      } else {
        hasPlayedRef.current = false;
      }
    });
  };

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setBadgeHidden(v > 0.06);
    setBgVisible(v < bgHideAt); // bg image only exists before bgHideAt

    // Start the video ONE time when scroll passes playAt.
    // No pause/reset when scrolling back.
    if (v >= playAt && !hasPlayedRef.current) {
      const video = getActiveVideo();
      if (!video) return;
      hasPlayedRef.current = true;
      setShowSoundButton(true);
      playVideo(video);
    }
  });

  const handleEnded = () => {
    setShowSoundButton(false);
    if (hasEndedRef.current) return;
    hasEndedRef.current = true;
    onVideoEnd?.(); // -> Index opens the Home page
  };

  const toggleMute = () => {
    const next = !isMuted;
    [desktopRef.current, mobileRef.current].forEach((v) => {
      if (v) v.muted = next;
    });
    setIsMuted(next);

    const video = getActiveVideo();
    if (video && video.paused && !video.ended && hasPlayedRef.current) {
      video.play().catch(() => {});
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height }}>
      <div className="sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-white">
        {/* BG IMAGE: its own layer, first child, behind the video */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          style={{
            backgroundImage: "url('/images/white-bg-video.jpg')",
            opacity: bgVisible ? 1 : 0,
          }}
        />

        {/* MASKED VIDEO LAYER: no bg image, no opacity */}
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
          {/* WIDTH WRAPPER */}
        <motion.div
  className="absolute inset-y-0 left-1/2 overflow-hidden"
  style={{ width: `${videoWidth * 100}%`, x: "-50%" }}
>
            {/* ZOOM WRAPPER */}
            <motion.div
              className="absolute inset-0 will-change-transform"
              style={{ scale: videoScale }}
            >
              {/* no `loop`: the video plays only once */}
              <video
                ref={desktopRef}
                src={desktopVideo}
                muted
                playsInline
                preload="auto"
                onEnded={handleEnded}
                className="absolute inset-0 hidden h-full w-full object-cover md:block"
              />
              <video
                ref={mobileRef}
                src={mobileVideo}
                muted
                playsInline
                preload="auto"
                onEnded={handleEnded}
                className="absolute inset-0 block h-full w-full object-cover md:hidden"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* LOGO (center) */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-[15] flex items-center justify-center"
          style={{ opacity: logoOpacity, scale: logoScale }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt="PSMJ"
            className="w-40 select-none object-contain md:w-56 lg:w-72"
            draggable={false}
          />
        </motion.div>

        {/* CENTER DOT */}
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

        {/* SCROLL DOWN BADGE */}
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

        {/* MUTE / UNMUTE BUTTON (only while the video is playing) */}
        <AnimatePresence>
          {showSoundButton && (
            <motion.button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              aria-pressed={!isMuted}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="absolute bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70 md:bottom-10 md:right-10 md:h-14 md:w-14"
            >
              {isMuted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}