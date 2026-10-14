"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import ScrollMask from "@/components/layout/ScrollMask";
import Home from "@/components/home";

const DURATION = 1;   // seconds, Home slide
const HOLD = 450;     // ms after arriving (end of mask / top of Home) before a scroll can trigger
const TOL = 8;        // px tolerance
const SWIPE = 20;     // px swipe needed on touch
const EASE = [0.76, 0, 0.24, 1] as const;

export default function Index() {
  const homeRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0); // 0 = Home hidden, 1 = Home fully open

  // Home is rendered in a portal so the mask can never paint over it
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Home slides up from the bottom
  const homeY = useTransform(progress, (v) => `${(1 - v) * 100}%`);
  // parallax: mask moves slower than Home
  const maskY = useTransform(progress, [0, 1], ["0vh", "-25vh"]);
  const dim = useTransform(progress, [0, 1], [0, 0.45]);
  const homeVisibility = useTransform(progress, (v) =>
    v === 0 ? "hidden" : "visible"
  );

  useEffect(() => {
    const home = homeRef.current;
    if (!mounted || !home) return;

    let state: "closed" | "open" = "closed";
    let busy = false;
    let arrivedAt = 0; // when user reached the end of the mask
    let topAt = 0;     // when Home scrollTop reached 0
    let touchY = 0;
    let anim: ReturnType<typeof animate> | null = null;

    const atEnd = () =>
      window.scrollY >=
      document.documentElement.scrollHeight - window.innerHeight - TOL;

    const open = () => {
      busy = true;
      document.body.style.overflow = "hidden";
      home.scrollTop = 0;
      anim?.stop();
      anim = animate(progress, 1, {
        duration: DURATION,
        ease: EASE,
        onComplete: () => {
          state = "open";
          busy = false;
          topAt = performance.now();
        },
      });
    };

    const close = () => {
      busy = true;
      anim?.stop();
      anim = animate(progress, 0, {
        duration: DURATION,
        ease: EASE,
        onComplete: () => {
          state = "closed";
          busy = false;
          arrivedAt = performance.now();
          document.body.style.overflow = "";
        },
      });
    };

    const canOpen = () =>
      state === "closed" &&
      atEnd() &&
      arrivedAt > 0 &&
      performance.now() - arrivedAt > HOLD;

    const canClose = () =>
      state === "open" &&
      home.scrollTop <= 0 &&
      topAt > 0 &&
      performance.now() - topAt > HOLD;

    /* track arrival at the end of the mask */
    const onScroll = () => {
      if (state !== "closed") return;
      if (atEnd()) {
        if (!arrivedAt) arrivedAt = performance.now();
      } else arrivedAt = 0;
    };

    /* track Home reaching its top */
    const onHomeScroll = () => {
      if (home.scrollTop <= 0) {
        if (!topAt) topAt = performance.now();
      } else topAt = 0;
    };

    /* WHEEL */
    const onWheel = (e: WheelEvent) => {
      if (busy) return e.preventDefault();
      if (Math.abs(e.deltaY) < 4) return;

      if (e.deltaY > 0 && canOpen()) {
        e.preventDefault();
        open();
      } else if (e.deltaY < 0 && canClose()) {
        e.preventDefault();
        close();
      }
    };

    /* TOUCH */
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (busy) return e.cancelable && e.preventDefault();
      const dy = touchY - e.touches[0].clientY; // >0 = swipe up
      if (dy > SWIPE && canOpen()) {
        if (e.cancelable) e.preventDefault();
        open();
      } else if (dy < -SWIPE && canClose()) {
        if (e.cancelable) e.preventDefault();
        close();
      }
    };

    /* KEYBOARD */
    const onKey = (e: KeyboardEvent) => {
      const down = ["ArrowDown", "PageDown", " "].includes(e.key);
      const up = ["ArrowUp", "PageUp"].includes(e.key);
      if (!down && !up) return;
      if (busy) return e.preventDefault();
      if (down && canOpen()) {
        e.preventDefault();
        if (!e.repeat) open();
      } else if (up && canClose()) {
        e.preventDefault();
        if (!e.repeat) close();
      }
    };

    arrivedAt = atEnd() ? performance.now() : 0;

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey);
    home.addEventListener("scroll", onHomeScroll, { passive: true });

    return () => {
      anim?.stop();
      document.body.style.overflow = "";
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      home.removeEventListener("scroll", onHomeScroll);
    };
  }, [progress, mounted]);

  return (
    <>
      {/* MASK (normal scroll reveal) + parallax */}
      <motion.div style={{ y: maskY }}>
        <ScrollMask
          desktopVideo="/video/intro.mp4"
          mobileVideo="https://cd.duffldigital.in/video/mobile-sample2.mp4"
          height="200vh"
        />
      </motion.div>

      {mounted &&
        createPortal(
          <>
            {/* dark overlay for depth while Home slides up */}
            <motion.div
              className="pointer-events-none fixed inset-0 z-[40] bg-black"
              style={{ opacity: dim }}
            />

            {/* HOME: fixed overlay on document.body, slides bottom -> top */}
            <motion.div
              ref={homeRef}
              className="fixed inset-0 z-[50] h-[100dvh] overflow-y-auto overscroll-contain bg-white"
              style={{ y: homeY, visibility: homeVisibility }}
            >
              <Home />
            </motion.div>
          </>,
          document.body
        )}
    </>
  );
}