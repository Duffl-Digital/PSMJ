"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type IntroVideoProps = {
  desktopVideo: string;
  mobileVideo?: string;
  showPromptBefore?: number; // seconds before the end to show the prompt
  children: ReactNode; // the Home page
};

export default function IntroVideo({
  desktopVideo,
  mobileVideo,
  showPromptBefore = 2,
  children,
}: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [leaving, setLeaving] = useState(false); // slide-up animation running
  const [gone, setGone] = useState(false); // intro removed

  /* Pick the right video file (md = 768px) */
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    setSrc(isDesktop ? desktopVideo : mobileVideo ?? desktopVideo);
  }, [desktopVideo, mobileVideo]);

  /* Lock page scroll while the intro is visible */
  useEffect(() => {
    if (gone) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [gone]);

  /* Show the prompt 2 seconds before the video ends */
  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    if (v.duration - v.currentTime <= showPromptBefore) setShowPrompt(true);
  };

  /* Try to autoplay; if the browser blocks it, show the prompt so the user can continue */
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !src) return;
    v.play().catch(() => setShowPrompt(true));
  }, [src]);

  /* Scroll / swipe / key -> go to Home (only once the prompt is visible) */
  useEffect(() => {
    if (gone || leaving || !showPrompt) return;

    const go = () => setLeaving(true);
    let touchY = 0;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 4) go();
    };
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchY - e.touches[0].clientY > 20) go();
    };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [showPrompt, leaving, gone]);

  return (
    <>
      {/* HOME PAGE (sits underneath the intro) */}
      {children}

      {/* INTRO OVERLAY */}
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[100] h-[100dvh] w-full overflow-hidden bg-black"
          initial={{ y: 0 }}
          animate={{ y: leaving ? "-100%" : 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (leaving) setGone(true);
          }}
        >
          {src && (
            <video
              ref={videoRef}
              src={src}
              autoPlay
              muted
              playsInline
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setShowPrompt(true)} // no `loop`: plays once
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          {/* RED DOT + ARROW + SCROLL TEXT (bottom center) */}
          <AnimatePresence>
            {showPrompt && !leaving && (
              <motion.button
                type="button"
                onClick={() => setLeaving(true)}
                aria-label="Scroll to continue"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-12"
              >
                {/* red dot */}
                <motion.span
                  className="block h-[20px] w-[20px] rounded-full bg-[red]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* arrow */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="24"
                  viewBox="0 0 17 24"
                  fill="none"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    d="M0.150822 14.7245L7.88055 23.157C8.11839 23.4164 8.47515 23.4164 8.71298 23.157L16.4427 14.7245C16.6806 14.4651 16.6806 14.0759 16.4427 13.8164C16.2049 13.557 15.8481 13.557 15.6103 13.8164L8.92109 21.1462L8.92109 0.648858C8.9211 0.292102 8.65353 0.000209112 8.3265 0.000209083C7.99947 0.000209055 7.73191 0.292102 7.73191 0.648858L7.7319 21.1462L1.01299 13.8164C0.894066 13.6867 0.745417 13.6218 0.596768 13.6218C0.448119 13.6218 0.29947 13.6867 0.18055 13.8164C-0.0572883 14.0435 -0.0572864 14.4651 0.150822 14.7245Z"
                    fill="black"
                  />
                </motion.svg>

                {/* text */}
                <span className="text-base font-medium tracking-widest text-black">
                  Scroll
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}