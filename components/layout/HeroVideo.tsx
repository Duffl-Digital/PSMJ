"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode } from "react"; // add to your imports
type HeroVideoProps = {
  desktopVideo: string;
  mobileVideo?: string;
  poster?: string;
   mobilePoster?: string; // NEW
    header?: ReactNode;     
  onShow?: () => void;  
};

export default function HeroVideo({
  desktopVideo,
  mobileVideo,
  poster,
   mobilePoster,
    header,
  onShow,
}: HeroVideoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastY = useRef(0);
  
  const [showVideo, setShowVideo] = useState(false); // false on first load
  const [playing, setPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  /* NEW: detect mobile and preload the thumbnail so it shows instantly */
  const [posterVisible, setPosterVisible] = useState(true);
+/* Pause and rewind when the video leaves the screen */
useEffect(() => {
  const el = sectionRef.current;
  if (!showVideo || !el) return;
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPosterVisible(true); // ADD THIS LINE
    }
  });
  observer.observe(el);
  return () => observer.disconnect();
}, [showVideo]);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setIsMobile(mobile);

    const img = new window.Image();
    img.src = mobile ? mobilePoster ?? poster ?? "" : poster ?? "";
  }, [poster, mobilePoster]);
  /* Once the user has scrolled one screen down, add the video at the top */
  useEffect(() => {
    if (showVideo) return;
    const onScroll = () => {
      lastY.current = window.scrollY;
      if (window.scrollY > window.innerHeight) setShowVideo(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showVideo]);

  /* Keep the user's view in place when the video is inserted above them */
  useLayoutEffect(() => {
    if (!showVideo || !sectionRef.current) return;
    const h = sectionRef.current.offsetHeight;
    const alreadyShifted = window.scrollY - lastY.current; // some browsers auto-adjust
    window.scrollBy({ top: h - alreadyShifted, behavior: "instant" });
  }, [showVideo]);

  /* Pause and rewind when the video leaves the screen */
  useEffect(() => {
    const el = sectionRef.current;
    if (!showVideo || !el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [showVideo]);


const onShowRef = useRef(onShow);
useEffect(() => {
  onShowRef.current = onShow;
});

useEffect(() => {
  if (showVideo) onShowRef.current?.();
}, [showVideo]);

  if (!showVideo) return null;

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] w-full overflow-hidden  bg-black"
    >
<video
  ref={videoRef}
  playsInline
  preload="metadata"
  onPlay={() => setPlaying(true)}
  onPlaying={() => setPosterVisible(false)}  // hide thumbnail when video really starts
  onPause={() => setPlaying(false)}
  onEnded={() => {
    setPlaying(false);
    setPosterVisible(true);                  // thumbnail comes back after end
  }}
  onClick={playing ? () => videoRef.current?.pause() : undefined}
  className="absolute inset-0 h-full w-full object-cover"
>
  {mobileVideo && (
    <source src={mobileVideo} media="(max-width: 767px)" type="video/mp4" />
  )}
  <source src={desktopVideo} type="video/mp4" />
</video>

{/* THUMBNAIL (desktop + mobile) */}
<picture>
  {mobilePoster && (
    <source media="(max-width: 767px)" srcSet={mobilePoster} />
  )}
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img
    src={poster}
    alt=""
    className={`pointer-events-none absolute inset-0 z-[5] h-full w-full object-cover transition-opacity duration-300 ${
      posterVisible ? "opacity-100" : "opacity-0"
    }`}
  />
</picture>
       {/* NEW: header overlapping the video, top center */}
      {header && (
        <div className="absolute inset-x-0 top-[-12px] z-20 flex justify-center pt-2">
          {header}
        </div>
      )}

      <AnimatePresence>
        {!playing && (
          <motion.button
            type="button"
            onClick={() => videoRef.current?.play()}
            aria-label="Play video"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/90 shadow-lg backdrop-blur md:h-12 md:w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="ml-1 h-8 w-8 md:h-8 md:w-8"
              fill="white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}