"use client";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";
import {
  Blocks,
  Eye,
  Handshake,
  PanelsTopLeft,
  type LucideProps,
} from "lucide-react";

const words = [
  "#Lorem", "#Branding", "#Marketing", "#Creative", "#Digital",
  "#Strategy", "#Business", "#Agency", "#Design", "#Growth",
  "#Motion", "#UIUX", "#React", "#NextJS", "#Tailwind",
  "#SEO", "#Content", "#Media", "#Ideas", "#Future",
];

type StaticStat = {
  id: number;
  degree: number;
  value: string;
  line1: string;
  line2: string;
  icon: ComponentType<LucideProps>;
};

const staticStats: StaticStat[] = [
  { id: 1, degree: 35, value: "90+", line1: "Brand", line2: "management", icon: PanelsTopLeft },
  { id: 2, degree: 72, value: "11", line1: "Years of", line2: "experience", icon: Eye },
  { id: 3, degree: 108, value: "400+", line1: "Team Building", line2: "programs", icon: Handshake },
  { id: 4, degree: 145, value: "60", line1: "Clients across", line2: "industries", icon: Blocks },
];

export default function Blog() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [angle, setAngle] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1440);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  // Update container width
  useEffect(() => {
    if (!sectionRef.current) return;
    const updateWidth = () => {
      if (!sectionRef.current) return;
      setContainerWidth(sectionRef.current.getBoundingClientRect().width);
    };
    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(sectionRef.current);
    return () => resizeObserver.disconnect();
  }, [mounted]);

  // Animation for pills
  useEffect(() => {
    let animationFrameId: number;
    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - previousTime;
      setAngle((prev) => (prev + delta * 0.003) % 360);
      previousTime = currentTime;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!mounted) return null;

  const centerX = containerWidth / 2;

  /* ====================== OUTER ARC ====================== */
  const arcWidth = Math.min(containerWidth * 0.92, 1350);
  const radiusX = arcWidth / 2;
  const radiusY =
    containerWidth >= 1200 ? 370 : containerWidth >= 768 ? 300 : 220;

  const centerY =
    containerWidth >= 1200 ? 455 : containerWidth >= 768 ? 430 : 390;

  const startX = centerX - radiusX;
  const endX = centerX + radiusX;

  const arcPath = `
    M ${startX} ${centerY}
    A ${radiusX} ${radiusY} 0 0 1 ${endX} ${centerY}
  `;

  /* ====================== INNER ARC (Parallel + Constant Gap) ====================== */
  const offset = containerWidth >= 1200 ? 98 : containerWidth >= 768 ? 78 : 52;

  const innerRadiusX = Math.max(radiusX - offset, 30);
  const innerRadiusY = Math.max(radiusY - offset, 30);

  const innerStartX = centerX - innerRadiusX;
  const innerEndX = centerX + innerRadiusX;

  const innerArcPath = `
    M ${innerStartX} ${centerY}
    A ${innerRadiusX} ${innerRadiusY} 0 0 1 ${innerEndX} ${centerY}
  `;

  const visibleCount = containerWidth >= 1200 ? 6 : containerWidth >= 768 ? 5 : 4;
  const spacing = 180 / visibleCount;
  const cycle = words.length * spacing;
  const edgePadding = containerWidth >= 768 ? 12 : 5;
  const fadeRange = containerWidth >= 768 ? 80 : 45;

  return (
    <main className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500">
      <section
        ref={sectionRef}
        className="relative h-[430px] w-full overflow-hidden "
      >
        {/* Top glow */}
        <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[520px] w-[75%] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[130px]" />

        {/* SVG Arcs */}
        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          width={containerWidth}
          height="430"
          viewBox={`0 0 ${containerWidth} 430`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="arcGradient" gradientUnits="userSpaceOnUse" x1={startX} y1="0" x2={endX} y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="12%" stopColor="white" stopOpacity="0.35" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="88%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="innerArcGradient" gradientUnits="userSpaceOnUse" x1={innerStartX} y1="0" x2={innerEndX} y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="15%" stopColor="white" stopOpacity="0.25" />
              <stop offset="50%" stopColor="white" stopOpacity="0.65" />
              <stop offset="85%" stopColor="white" stopOpacity="0.25" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Arc */}
          <path
            d={arcPath}
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="1.3"
            strokeDasharray="5 7"
            strokeLinecap="round"
          />

          {/* Inner Parallel Arc */}
          <path
            d={innerArcPath}
            fill="none"
            stroke="url(#innerArcGradient)"
            strokeWidth="1.2"
            strokeDasharray="5 7"
            strokeLinecap="round"
          />
        </svg>

        {/* Animated pills on outer arc */}
        {words.map((word, index) => {
          const degree = (index * spacing + angle) % cycle;
          const isVisible = degree >= 0 && degree <= 180;
          const radians = (degree * Math.PI) / 180;

          const x = centerX + radiusX * Math.cos(Math.PI - radians);
          const y = centerY - radiusY * Math.sin(radians);

          const closeness = 1 - Math.abs(degree - 90) / 90;
          const distance = Math.min(x - startX, endX - x);
          const edgeOpacity = Math.max(0, Math.min(1, (distance - edgePadding) / fadeRange));

          const opacity = isVisible ? edgeOpacity : 0;
          const scale = 0.9 + closeness * 0.12;

          return (
            <div
              key={`${word}-${index}`}
              className="pointer-events-none absolute z-30 whitespace-nowrap rounded-full border border-white/80 bg-white/10 text-white shadow-sm backdrop-blur-sm will-change-transform"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                opacity,
                fontSize: containerWidth < 640 ? "12px" : "14px",
                padding: containerWidth < 640 ? "6px 12px" : "8px 18px",
                transform: `translate(-50%, -50%) scale(${scale})`,
              }}
            >
              {word}
            </div>
          );
        })}

        {/* Static stats on inner arc */}
        {staticStats.map((item) => {
          const radians = (item.degree * Math.PI) / 180;
          const x = centerX + innerRadiusX * Math.cos(Math.PI - radians);
          const y = centerY - innerRadiusY * Math.sin(radians);

          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="pointer-events-none absolute z-40 flex -translate-x-1/2 flex-col items-center text-center text-white"
              style={{ left: `${x}px`, top: `${y}px` }}
            >
              <div className="flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500/25 backdrop-blur-sm">
                <Icon size={containerWidth < 640 ? 25 : 34} strokeWidth={1.5} />
              </div>
              <div className="mt-2 flex flex-col items-center">
                <strong className="text-2xl font-bold leading-none sm:text-3xl">
                  {item.value}
                </strong>
                <p className="mt-2 text-xs leading-4 text-white/95 sm:text-base sm:leading-5">
                  {item.line1}
                  <br />
                  {item.line2}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}