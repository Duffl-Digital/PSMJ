"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({
  items,
  speed = 25,
  separator = "  /  ",
  reverse = false,
  className = "",
}: MarqueeProps) {
  const content = items.join(separator) + separator;

  return (
    
    <div
      className={`relative overflow-hidden whitespace-nowrap border-ink/5 bg-white py-1 ${className}`}
    >
        <div className="pt-1"></div>
      {/* left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-24" />

      {/* right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

      <div
        className="flex w-max"
        style={{
          animationName: "marquee",
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className="flex-shrink-0 text-xs font-medium tracking-wide text-ink/25"
            aria-hidden={i === 1}
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}