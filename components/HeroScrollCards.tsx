"use client";

import { JSX, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";


import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Card = {
  label: string;
  Icon: string;
};

const CARDS: Card[] = [
  { label: "Brand Management", Icon: '/images/home/categories/icon-1.png'  },
  { label: "Corporate Learning Programs", Icon: '/images/home/categories/icon-2.png'},
  { label: "Brand Expressions",  Icon: '/images/home/categories/icon-3.png' },
  { label: "Employee Engagement Programs",  Icon: '/images/home/categories/icon-4.png' },
  { label: "Exhibitions",  Icon: '/images/home/categories/icon-5.png'},
];

const LOGOS = [
  { name: "Infosys", src: "/images/home/client-logo/logo-1.svg" },
  { name: "CBRE", src: "/images/home/client-logo/logo-2.svg" },
  { name: "Trimble", src: "/images/home/client-logo/logo-3.svg" },
  { name: "Infosys", src: "/images/home/client-logo/logo-4.svg" },
  { name: "Axis Bank", src: "/images/home/client-logo/logo-5.svg" },
  { name: "TATA", src: "/images/home/client-logo/logo-6.svg" },
  { name: "Infosys", src: "/images/home/client-logo/logo-7.svg" },
  { name: "Standard Chartered", src: "/images/home/client-logo/logo-8.svg" },
  { name: "Verizon", src: "/images/home/client-logo/logo-9.svg" },
  { name: "Infosys", src: "/images/home/client-logo/logo-10.svg" },
  { name: "Cognizant", src: "/images/home/client-logo/logo-11.svg" },
  { name: "PayPal", src: "/images/home/client-logo/logo-12.svg" },
];

const AUTOPLAY_INTERVAL = 3000;

export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative ">
      {/* subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
       
      />

      <div className="relative z-10 mx-auto  max-w-7xl w-11/12  px-5 pt-12 pb-12 sm:px-6 sm:pt-12 md:px-0 md:pt-[120px] md:pb-0">
        <div className="flex w-full lg:items-end justify-end flex-wrap">
          {/* Left copy */}
          <div className="xl:w-3/12 md:w-5/12 pb-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-figtree font-normal text-[#B1E7FF] tracking-[0.96px] leading-[123%] [text-shadow:0_39.332px_59.37px_rgba(101,101,101,0.34),0_25.493px_34.77px_rgba(0,0,0,0.26),0_15.15px_18.91px_rgba(0,0,0,0.21)]">
              Everything Your  <br className="md:block hidden" /> Organization <br /> Needs. All in One <br className="md:block hidden" /> Place.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white sm:mt-5 ">
              Lorem ipsum dolor sit amet consectetur. In non in sit id et tristique at commodo.
            </p>
          </div>

          {/* Center: Swiper flip carousel */}
          <div className="xl:w-4/12 w-full md:w-7/12 relative xl:bottom-[-20px]">
    
              <div className=" items-center gap-3 sm:gap-4 relative">
                {/* prev arrow */}
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="hidden shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:h-10 sm:w-10"
                >
                  ‹
                </button>

                <div
                  className="hero-flip-swiper sm:w-[355px] w-11/12 h-[358px] mx-auto"
                >
                  <Swiper
                    modules={[EffectFlip, Navigation, Pagination, Autoplay]}
                    effect="flip"
                    flipEffect={{ slideShadows: false }}
                    speed={2000}
                    grabCursor
                    loop
                    autoplay={{
                      delay: AUTOPLAY_INTERVAL,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    pagination={{ el: ".hero-flip-pagination", clickable: true }}
                    onSwiper={(s) => (swiperRef.current = s)}
                    className="h-full w-full"
                  >
                  {CARDS.map((card, index) => {
  const Icon = card.Icon;
  return (
    <SwiperSlide key={card.label}>
      <div
        className={`card-${index + 1} flex h-full w-full flex-col rounded-[11px] px-4 py-8 shadow-2xl shadow-black/30 sm:px-5 sm:py-10`}
        style={{
          background:
            "linear-gradient(180deg, #FFF 0%, #FFF7DE 57.82%, #FFF 100%)",
          boxShadow: "0 2px 8.2px 0 rgba(154, 154, 154, 0.25)",
        }}
      >
        <div className="flex flex-col items-center justify-evenly text-center h-full">
          <p className="font-display text-base font-semibold tracking-wide text-ink md:text-[24px]">
            {card.label.toUpperCase()}
          </p>
          <div className="mt-4">
            <img src={Icon} alt={card?.label ?? ""} className="lg:w-7/12 md:w-5/12 w-7/12 mx-auto" />
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
})}
                  </Swiper>
                </div>

                {/* next arrow */}
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => swiperRef.current?.slideNext()}
                  className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:h-10 sm:w-10"
                >
                  ›
                </button>
                 <div className="hero-flip-pagination xl:absolute xl:!bottom-1/2 xl:!right-[5px]  xl:flex  xl:!w-max xl:flex-col mt-6 flex justify-center gap-[12px]" />
              </div>

              {/* pagination bullets, styled to match your amber dot design */}
             
          
          </div>

          {/* Right: logos grid */}
          <div className="xl:w-5/12 w-full pb-5 xl:pt-0 pt-8">
           <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-3 sm:gap-x-2 sm:gap-y-6">
  {LOGOS.map((logo, i) => (
    <div
      key={`${logo.name}-${i}`}
      className="flex items-center justify-center"
    >
      <img
        src={logo.src}
        alt={logo.name}
        className=" w-auto object-contain   "
      />
    </div>
  ))}
</div>
          </div>
        </div>
      </div>

      {/* Restyle default Swiper pagination bullets to match the amber dot design.
          Plain <style> tag (not styled-jsx) so this works in any React setup,
          not just Next.js. */}
     
    </section>
  );
}

