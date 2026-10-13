"use client";

import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  items: string[];
  speed?: number; // pixels per second
  separator?: string;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({
  items,
  speed = 30,
  separator = "   /  ",
  reverse = false,
  className = "",
}: MarqueeProps) {
  const baseContent = items.join(separator) + separator;

  const containerRef = useRef<HTMLDivElement>(null);
  const singleRef = useRef<HTMLSpanElement>(null);

  const [singleWidth, setSingleWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(2); // minimum sane default

  useEffect(() => {
    const measure = () => {
      const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0;
      const contentWidth = singleRef.current?.getBoundingClientRect().width ?? 0;

      if (contentWidth > 0) {
        setSingleWidth(contentWidth);
        // Make sure total rendered width is always >= 2x container width,
        // so there's always enough content to scroll through without gaps.
        const needed = Math.ceil((containerWidth * 2) / contentWidth) + 1;
        setRepeatCount(Math.max(2, needed));
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (singleRef.current) ro.observe(singleRef.current);
    return () => ro.disconnect();
  }, [baseContent]);

  const duration = singleWidth > 0 ? singleWidth / speed : 0;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden whitespace-nowrap bg-white py-1 ${className}`}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

      <div
        className="flex w-max"
        style={{
          animationName: singleWidth ? "marquee" : "none",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
          ["--marquee-distance" as any]: `-${singleWidth}px`,
        }}
      >
        {/* First copy, measured */}
        <span
          ref={singleRef}
          className="flex-shrink-0 text-xs font-medium tracking-wide text-ink/25"
        >
          {baseContent}
        </span>

        {/* Enough extra copies to guarantee no gap, ever */}
        {Array.from({ length: repeatCount - 1 }).map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="flex-shrink-0 text-xs font-medium tracking-wide text-ink/25"
          >
            {baseContent}
          </span>
        ))}
      </div>
    </div>
  );
}