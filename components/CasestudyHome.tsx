"use client";

import { useState } from "react";
import Link from "next/link";

type CaseStudy = {
  id: string;
  tab: string;
  title: string;
  heading: string;
  text: string;
  href: string;
};

const cases: CaseStudy[] = [
  {
    id: "bpcl",
    tab: "BPCL",
    title: "YouNgage - Nation wide engagement initiative",
    heading: "THE CHALLENGE",
    text: "As a national PSU, BPCL recognized the need to connect with its younger workforce through an engaging platform that encouraged collaboration and celebrated emerging talent across seven regions.",
    href: "/case-studies/bpcl",
  },
  {
    id: "astrazeneca",
    tab: "ASTRAZENECA",
    title: "Your AstraZeneca case study title",
    heading: "THE CHALLENGE",
    text: "Replace this with the AstraZeneca challenge description.",
    href: "/case-studies/astrazeneca",
  },
  {
    id: "mfd",
    tab: "MFD Galaxy",
    title: "Your MFD Galaxy case study title",
    heading: "THE CHALLENGE",
    text: "Replace this with the MFD Galaxy challenge description.",
    href: "/case-studies/mfd-galaxy",
  },
  {
    id: "dhl",
    tab: "DHL",
    title: "Your DHL case study title",
    heading: "THE CHALLENGE",
    text: "Replace this with the DHL challenge description.",
    href: "/case-studies/dhl",
  },
];

export default function CasestudyHome() {
  const [active, setActive] = useState(cases[0].id);
  const current = cases.find((c) => c.id === active) ?? cases[0];

  return (
    <section className="relative overflow-hidden  px-5 py-12 text-white md:px-10 md:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center lg:grid-cols-[0.9fr_1.9fr_0.7fr] lg:gap-10">
        {/* 1. Heading */}
        <div className="order-1">
          <h2 className="text-2xl font-light uppercase leading-snug tracking-wide md:text-3xl">
            Creating
            <br />
            <span className="font-bold">
              Real <span className="text-[#FFD75E]">Impact.</span>
            </span>
          </h2>
          <span className="mt-3 block h-[3px] w-16 rounded bg-[#FFD75E]" />
        </div>

        {/* 2. Tabs: horizontal on mobile/tablet, vertical line on desktop */}
     <ul
  role="tablist"
  aria-label="Case studies"
  className="order-2 flex gap-6 overflow-x-auto border-b border-white/25 pb-3 [scrollbar-width:none] md:justify-end lg:order-3 lg:flex-col lg:justify-start lg:gap-7 lg:overflow-visible lg:border-b-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
>
  {cases.map((c, i) => {
    const isActive = c.id === active;
    const isLast = i === cases.length - 1;
    return (
      <li key={c.id} className="relative shrink-0 lg:pl-9">
        {/* line segment between this dot and the next (gap at both ends) */}
        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute left-2 top-[calc(50%_+_14px)] hidden h-[calc(100%_+_1.75rem_-_28px)] w-px bg-white/50 lg:block"
          />
        )}

        <button
          role="tab"
          aria-selected={isActive}
          onClick={() => setActive(c.id)}
          className={`flex items-center gap-2 cursor-pointer whitespace-nowrap text-xs tracking-wider transition-colors duration-300 md:text-sm ${
            isActive
              ? "font-medium uppercase text-[#FFD75E]"
              : "text-[#DEDEDE] hover:text-white"
          } ${c.tab === c.tab.toUpperCase() ? "uppercase" : ""}`}
        >
          {/* fixed 16px box so every dot is centred on the same line */}
          <span className="flex h-4 w-4 shrink-0 items-center justify-center lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            <span
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "h-4 w-4 bg-white lg:shadow-[0_0_10px_rgba(255,255,255,0.95)]"
                  : "h-3.5 w-3.5 border border-white/70 bg-transparent"
              }`}
            />
          </span>
          {c.tab}
        </button>
      </li>
    );
  })}
</ul>

        {/* 3. Card */}
    {/* 3. Card */}
<div className="order-3 md:col-span-2 lg:order-2 lg:col-span-1 [container-type:inline-size]">
  <div className="relative px-6 pb-6 pt-16 md:aspect-[700/277] md:p-0">
    {/* MOBILE background: simple rounded card with a right fade */}
    <div
      aria-hidden="true"
      className="absolute inset-0 rounded-[28px] bg-[linear-gradient(100deg,rgba(98,176,220,1)_0%,rgba(98,176,220,0.6)_65%,rgba(98,176,220,0.15)_100%)] md:hidden"
    />

    {/* TABLET / DESKTOP: exact card shape + yellow dot + thin lines (same 700x277 as your design) */}
    <svg
      aria-hidden="true"
      viewBox="0 0 700 277"
      className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible md:block"
    >
      <defs>
        {/* blue -> transparent fade */}
        <linearGradient id="cs-card-fill" gradientUnits="userSpaceOnUse" x1="0" y1="40" x2="640" y2="210">
          <stop offset="0" stopColor="#62B0DC" />
          <stop offset="0.55" stopColor="#62B0DC" stopOpacity="0.45" />
          <stop offset="1" stopColor="#62B0DC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cs-line-1" gradientUnits="userSpaceOnUse" x1="358" y1="0" x2="492" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="1" stopColor="#FFD75E" />
        </linearGradient>
        <linearGradient id="cs-line-2" gradientUnits="userSpaceOnUse" x1="493" y1="30" x2="604" y2="160">
          <stop offset="0" stopColor="#FFD75E" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* card shape: round top-left, flat top, diagonal right edge, round bottom-left */}
      <path
        d="M0 58C0 36 17 18 40 18H432C462 18 484 33 496 48L626 194C640 211 636 247 604 259H40C17 259 0 241 0 219Z"
        fill="url(#cs-card-fill)"
      />

      {/* thin lines + dot */}
      <path d="M358 5H446C468 5 484 14 491 27" stroke="url(#cs-line-1)" strokeWidth="1" fill="none" />
      <path d="M493 31L604 160" stroke="url(#cs-line-2)" strokeWidth="1" fill="none" />
      <circle cx="492" cy="26" r="7" fill="#F8B81F" />
    </svg>

    {/* quote icon (inside the card, top-left) */}
    <svg
      aria-hidden="true"
      viewBox="0 0 42 30"
      fill="currentColor"
      className="absolute left-6 top-5 h-7 w-10 text-white md:left-[3.1cqw] md:top-[2.9cqw] md:h-auto md:w-[6.3cqw]"
    >
      <path d="M0 20C0 10 6 3 16 0L18 4C12 7 10 10 10 13C14 13 18 16 18 21C18 26 14 30 9 30C4 30 0 26 0 20Z" />
      <path
        transform="translate(24 0)"
        d="M0 20C0 10 6 3 16 0L18 4C12 7 10 10 10 13C14 13 18 16 18 21C18 26 14 30 9 30C4 30 0 26 0 20Z"
      />
    </svg>

    {/* text (re-animates on tab change) */}
    <div
      key={current.id}
      className="relative animate-[fadeUp_0.4s_ease_both] md:absolute md:left-[5.7cqw] md:top-[10.65cqw] md:w-[68cqw]"
    >
      <h3 className="elms-sans-bold text-[15px] leading-[1.3] tracking-[0.04em] text-white md:text-[2.3cqw]">
        {current.title}
      </h3>
      <p className="figtree-Medium mt-4 text-[17px] uppercase leading-[1.3] tracking-[0.04em] text-white md:mt-[2.56cqw] md:text-[2.6cqw]">
        {current.heading}
      </p>
      <p className="elms-sans-light mt-2 text-[14px] leading-[1.65] tracking-[0.02em] text-white/90 md:mt-[0.97cqw] md:text-[2cqw]">
        {current.text}
      </p>
    </div>

    {/* Know More */}
    <Link
      key={`${current.id}-link`}
      href={current.href}
      className="figtree-Medium group relative ml-auto mt-5 flex w-fit animate-[fadeUp_0.4s_ease_both] items-center gap-2 text-[13px] tracking-[0.02em] text-white md:absolute md:bottom-[2.4cqw] md:right-[19.3cqw] md:m-0 md:gap-[1cqw] md:text-[2.14cqw]"
    >
      Know More
      <svg
        aria-hidden="true"
        viewBox="0 0 26 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 transition-transform duration-300 group-hover:translate-x-1 md:w-[3.2cqw]"
      >
        <path d="M0 5H25M20.5 1L25 5L20.5 9" />
      </svg>
    </Link>
  </div>
</div>
      </div>
    </section>
  );
}

/*
  Add to globals.css:

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
*/