import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Presentation,
  Megaphone,
  TrendingUp,
  Sparkles,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import Hex from "./Hex";

/* ---------- data ---------- */

// Coordinates are in a 420 x 350 design grid (centre of each hexagon).
// const GRID_W = 420;
// const GRID_H = 350;
import { motion, MotionConfig } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.3 };

const GRID_W = 440;
const GRID_H = 388;

type Card = { label: string; icon: string; x: number; y: number };
type Pair = [string, string];
const cards: Card[] = [
  { label: "Employee Engagement Programs", icon: "/images/home/icons/engagement.png", x: 99, y: 60 },
  { label: "Brand management", icon: "/images/home/icons/brand-management.png", x: 348, y: 82 },
  { label: "Corporate events", icon: "/images/home/icons/events.png", x: 203, y: 152 },
  { label: "Brand Expressions", icon: "/images/home/icons/expressions.png", x: 65, y: 197 },
  { label: "Exhibition", icon: "/images/home/icons/exhibition.png", x: 298, y: 247 },
  { label: "Corporate Learning Programs", icon: "/images/home/icons/learning.png", x: 149, y: 292 },
];

// Decorative background hexagons (size = width in grid units)
// Decorative background hexagons (size = width in grid units)
const bgHexes: { x: number; y: number; size: number; fill: Pair }[] = [
  { x: 48, y: 45, size: 68, fill: ["#BCD1F8", "#9DB9F0"] },
  { x: 215, y: 62, size: 38, fill: ["#55AAAB", "#479799"] },
  { x: 315, y: 55, size: 125, fill: ["#FBB09B", "#F59580"] },
  { x: 115, y: 135, size: 118, fill: ["#6A9BE0", "#4F82CF"] },
  { x: 265, y: 215, size: 125, fill: ["#C6C5EE", "#ABA9E2"] },
  { x: 375, y: 170, size: 55, fill: ["#FCE3AA", "#F7D685"] },
  { x: 80, y: 285, size: 125, fill: ["#9DB3EA", "#8099DB"] },
  { x: 263, y: 330, size: 70, fill: ["#F8E3A4", "#F2D587"] },
  { x: 190, y: 335, size: 38, fill: ["#3A6AB5", "#2A559A"] },
];

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

/* ---------- pieces ---------- */

function Logo() {
  return (
    <div className="flex items-baseline gap-2 select-none">
      {/* <span className="text-3xl font-bold tracking-tight text-[#3B1F6B] sm:text-4xl">
        psmj<span className="text-red-500">.</span>
      </span>
      <span className="text-xl font-semibold tracking-wide text-[#1E2A5E] sm:text-2xl">
        UNIVERSE
      </span> */}
      <img src="/images/home/psmjuniverselogo.svg" className="md:w-auto w-[280px]" />
    </div>
  );
}

 function HexCluster() {
    const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  // useEffect(() => {
  //   const el = ref.current;
  //   if (!el) return;
  //   const io = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setInView(true);
  //         io.disconnect(); // play once
  //       }
  //     },
  //     { threshold: 0.25 }
  //   );
  //   io.observe(el);
  //   return () => io.disconnect();
  // }, []);
  return (
    <div
      ref={ref}
      data-inview={inView}
      className="relative mx-auto w-full max-w-[520px] xl:max-w-[594px] [container-type:inline-size]"
      style={{ aspectRatio: `${GRID_W} / ${GRID_H}` }}
    >
      {/* background shapes */}
      {bgHexes.map((h, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: pct(h.x, GRID_W),
            top: pct(h.y, GRID_H),
            width: pct(h.size, GRID_W),
          }}
        >
          <Hex
            fill={h.fill}
            className="animate-pop"
            style={{ animationDelay: `${i * 90}ms` }}
          />
        </div>
      ))}

      {/* white cards */}
      {cards.map((c, i) => (
        <div
          key={c.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: pct(c.x, GRID_W),
            top: pct(c.y, GRID_H),
            width: pct(126, GRID_W),
          }}
        >
          <div
            className="animate-card"
            style={{ animationDelay: `${800 + i * 140}ms` }}
          >
            <div
              className="animate-float"
              style={{ animationDelay: `${i * 450}ms` }}
            >
              <Hex
                fill="#ffffff"
                rim
                rimSize={0.8}
                className="group transition-transform duration-300 hover:scale-105"
                style={{
                  filter:
                    "drop-shadow(0 10px 16px rgba(70,80,160,0.22)) drop-shadow(0 2px 4px rgba(70,80,160,0.10))",
                }}
              >
                <Image
                  src={c.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="mb-[1.2cqw] h-[6.5cqw] w-[6.5cqw] object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                />
                <span className="max-w-[70%] text-center text-[2.4cqw] elms-sans-medium leading-[1.25] text-[#1E1E1E] xl:max-w-[60%]">
                  {c.label}
                </span>
              </Hex>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Bulb() {
  return (
    <div className="relative h-14 w-14 sm:h-16 sm:w-16">
      <span className="absolute inset-0 animate-glow rounded-full bg-[#FFD25A]/60 blur-xl" />
      <svg viewBox="0 0 64 64" className="relative h-full w-full" aria-hidden="true">
        <g stroke="#FFC233" strokeWidth="3" strokeLinecap="round">
          <line x1="6" y1="22" x2="14" y2="25" />
          <line x1="22" y1="4" x2="26" y2="11" />
          <line x1="58" y1="22" x2="50" y2="25" />
        </g>
        <circle cx="34" cy="34" r="14" fill="#FFC233" />
        <rect x="28" y="46" width="12" height="8" rx="3" fill="#F2A900" />
      </svg>
    </div>
  );
}

// Orbit ring drawn in code: back half sits behind the girl, front half in front.
function OrbitLayer({ id, half, z }: { id: string; half: "back" | "front"; z: string }) {
  return (
    <svg
      viewBox="0 0 400 380"
      className={`pointer-events-none absolute inset-0 h-full w-full ${z}`}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={id}>
          {half === "back" ? (
            <rect x="-50" y="-50" width="500" height="240" />
          ) : (
            <rect x="-50" y="190" width="500" height="240" />
          )}
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <g transform="rotate(-12 200 190)">
          <ellipse
            cx="200"
            cy="190"
            rx="188"
            ry="150"
            fill="none"
            stroke="#9DB8F5"
            strokeWidth="1.2"
          />
          <circle r="7" fill="#2F6BFF">
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M 12 190 a 188 150 0 1 0 376 0 a 188 150 0 1 0 -376 0"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}


/* ---------- page ---------- */

export default function PsmjUniverse() {
  return (
        <MotionConfig reducedMotion="user">
      <main className="n overflow-x-hidden bg-white">
        <div className="mx-auto grid max-w-6xl max-w-[1320px] items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10 lg:py-12">
          {/* left */}
          <motion.section
            className="space-y-6 lg:space-y-10"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 1.2, ease }}
          >
            <Logo />
            <HexCluster />
          </motion.section>

          {/* right */}
          <motion.section
            className="grid grid-cols-[1fr_auto] items-start gap-2 sm:gap-6
                       md:grid-cols-[auto_auto] md:items-center md:justify-center md:gap-10
                       lg:grid-cols-1 lg:items-end lg:justify-start lg:gap-10"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
          >
            <div>
              <h1 className="text-[15px] figtree-Medium leading-snug tracking-wide text-neutral-800 sm:text-xl md:text-2xl lg:text-[22px]">
                EVERYTHING YOUR
                <br />
                <span className="figtree-SemiBold text-neutral-900">
                  ORGANIZATION <span className="text-[#1964F9]">NEEDS</span>
                </span>
              </h1>
              <motion.span
                className="mt-2 block h-[3px] w-24 origin-left rounded bg-[#FFD25A] sm:w-40"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease, delay: 0.9 }}
              />
            </div>

            <div className="lg:ml-8">
              <div className="relative aspect-[318/377] w-[220px] sm:w-[280px] md:w-[260px] lg:w-[318px]">
                <img src="../images/girl.png" alt="img" className="w-full" />
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </MotionConfig>
  );
}
