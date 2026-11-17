"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type HeroVideoProps = {
  desktopVideo: string;
  mobileVideo?: string;
  poster?: string;
  mobilePoster?: string;
  header?: ReactNode; // header shown over the video
  onShow?: () => void; // tells Home that video mode started
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
  const insertedAtTop = useRef(false);

  const [showVideo, setShowVideo] = useState(false); // false on first load
  const [playing, setPlaying] = useState(false);
  const [posterVisible, setPosterVisible] = useState(true);

  /* Preload thumbnails so they show instantly */
  useEffect(() => {
    [poster, mobilePoster].forEach((src) => {
      if (!src) return;
      const img = new window.Image();
      img.src = src;
    });
  }, [poster, mobilePoster]);

  /* Add the video when:
     (a) user scrolled one screen down, or
     (b) user is at the top and scrolls up (right after the intro) */
  useEffect(() => {
    if (showVideo) return;

    // the intro overlay locks body scroll while it is visible
    const introActive = () => document.body.style.overflow === "hidden";

    const reveal = (atTop: boolean) => {
      insertedAtTop.current = atTop;
      lastY.current = window.scrollY;
      setShowVideo(true);
    };

    const onScroll = () => {
      lastY.current = window.scrollY;
      if (window.scrollY > window.innerHeight) reveal(false);
    };

    const onWheel = (e: WheelEvent) => {
      if (introActive()) return;
      if (window.scrollY <= 0 && e.deltaY < -4) reveal(true);
    };

    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (introActive()) return;
      if (window.scrollY <= 0 && e.touches[0].clientY - touchY > 20)
        reveal(true);
    };

    const onKey = (e: KeyboardEvent) => {
      if (introActive()) return;
      if (window.scrollY <= 0 && ["ArrowUp", "PageUp"].includes(e.key))
        reveal(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [showVideo]);

  /* Keep the user's view in place when the video is inserted above them */
  useLayoutEffect(() => {
    if (!showVideo || !sectionRef.current) return;
    if (insertedAtTop.current) return; // added at top: user should see the video
    const h = sectionRef.current.offsetHeight;
    const alreadyShifted = window.scrollY - lastY.current; // some browsers auto-adjust
    window.scrollBy({ top: h - alreadyShifted, behavior: "instant" });
  }, [showVideo]);

  /* Pause, rewind and show the thumbnail when the video leaves the screen */
  useEffect(() => {
    const el = sectionRef.current;
    if (!showVideo || !el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setPosterVisible(true);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [showVideo]);

  /* Tell Home once, when video mode starts */
  const onShowRef = useRef(onShow);
  useEffect(() => {
    onShowRef.current = onShow;
  });

  useEffect(() => {
    if (showVideo) onShowRef.current?.();
  }, [showVideo]);

  if (!showVideo) return null;

  return (
     <motion.section
    ref={sectionRef}
    initial={insertedAtTop.current ? { height: 0, opacity: 0 } : false}
    animate={{ height: "100vh", opacity: 1 }}
    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    className="relative w-full overflow-hidden bg-black hero-video"
  >
   
      <video
        ref={videoRef}
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPlaying={() => setPosterVisible(false)} // hide thumbnail when video really starts
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setPosterVisible(true); // thumbnail comes back after end
        }}
        onClick={playing ? () => videoRef.current?.pause() : undefined}
        className="absolute inset-0 h-full w-full object-cover"
      >
        {mobileVideo && (
          <source
            src={mobileVideo}
            media="(max-width: 767px)"
            type="video/mp4"
          />
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

      {/* Header overlapping the video, top center */}
      {header && (
        <div className="absolute hero-header inset-x-0 top-[-12px] z-20 flex justify-center pt-2">
          {header}
        </div>
      )}

      {/* Play button */}
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
            className="absolute left-1/2 cursor-pointer top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/90 shadow-lg backdrop-blur md:h-12 md:w-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=" h-8 w-8"
              fill="white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.section>
  );
}