import { useId } from "react";
import type { CSSProperties, ReactNode } from "react";

type HexProps = {
  fill: string | [string, string]; // solid colour OR [from, to] gradient
  radius?: number; // corner roundness (6 to 14)
  rim?: boolean; // grey gradient rim (for white cards)
  rimSize?: number; // 0.5 (thin) to 3 (thick)
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

function hexPoints(d: number) {
  return [
    [25 + 0.575 * d, 2 + d],
    [75 - 0.575 * d, 2 + d],
    [100 - 1.156 * d, 45],
    [75 - 0.575 * d, 88 - d],
    [25 + 0.575 * d, 88 - d],
    [1.156 * d, 45],
  ]
    .map((p) => p.join(","))
    .join(" ");
}

export default function Hex({
  fill,
  radius = 10,
  rim = false,
  className = "",
  style,
  children,
}: HexProps) {
  const id = useId().replace(/:/g, "");
  const points = hexPoints(radius);
  const isGradient = Array.isArray(fill);
  const mainFill = isGradient ? `url(#bg-${id})` : fill;

  return (
    <div className={`relative aspect-[100/90] ${className}`} style={style}>
      <svg
        viewBox="0 0 100 90"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {isGradient && (
            <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={fill[0]} />
              <stop offset="1" stopColor={fill[1]} />
            </linearGradient>
          )}

          {/* rim gradient taken from your design SVG */}
          <linearGradient id={`rim-${id}`} x1="0.15" y1="0.12" x2="0.85" y2="0.88">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.2964" stopColor="#F6F7F7" />
            <stop offset="0.773" stopColor="#DFE0E1" />
            <stop offset="1" stopColor="#D1D3D4" />
          </linearGradient>
        </defs>

        {rim ? (
          <>
            {/* outer hexagon: the gradient rim */}
            <polygon
              points={points}
              fill={`url(#rim-${id})`}
              stroke={`url(#rim-${id})`}
              strokeWidth={radius * 2}
              strokeLinejoin="round"
            />
            {/* inner hexagon: slightly smaller, shifted up-left,
                so the rim looks thicker at the bottom-right */}
            <g transform="translate(50 45) translate(-0.5 -0.5) scale(0.98) translate(-50 -45)">
              <polygon
                points={points}
                fill={mainFill}
                stroke={mainFill}
                strokeWidth={radius * 2}
                strokeLinejoin="round"
              />
            </g>
          </>
        ) : (
          <polygon
            points={points}
            fill={mainFill}
            stroke={mainFill}
            strokeWidth={radius * 2}
            strokeLinejoin="round"
          />
        )}
      </svg>

      {children && (
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}