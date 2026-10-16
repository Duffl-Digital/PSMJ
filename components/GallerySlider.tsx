"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Fancybox } from "@fancyapps/ui";
import type { Slide } from "./content";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function GallerySlider({ slides }: { slides: Slide[] }) {
  const handleClick = (swiper: SwiperType) => {
    const el = swiper.clickedSlide as HTMLElement | undefined;
    if (!el) return;

    // Side slide clicked: just bring it to the center
    if (!el.classList.contains("swiper-slide-active")) {
      swiper.slideToClickedSlide();
      return;
    }

    // In loop mode Swiper copies slides, so read the real index from the
    // attribute it adds (falls back to realIndex).
    const attr = el.getAttribute("data-swiper-slide-index");
    const startIndex = attr !== null ? parseInt(attr, 10) : swiper.realIndex;

    // Pause autoplay while the viewer is open
    swiper.autoplay?.stop();

    Fancybox.show(
      slides.map((s) => ({
        src: s.src,
        thumb: s.src,
        caption: s.alt,
        type: "image" as const,
      })),
      {
        startIndex,
        Carousel: { infinite: true },
      
        on: {
          close: () => swiper.autoplay?.start(),
        },
      }
    );
  };

  return (
    <div
      className="
        w-full min-w-0
        [&_.swiper-pagination]:!static [&_.swiper-pagination]:mt-2
        [&_.swiper-pagination]:flex [&_.swiper-pagination]:items-center [&_.swiper-pagination]:justify-center
        [&_.swiper-pagination-bullet]:mx-[5px] [&_.swiper-pagination-bullet]:h-[10px]
        [&_.swiper-pagination-bullet]:w-[10px] [&_.swiper-pagination-bullet]:rounded-full
        [&_.swiper-pagination-bullet]:bg-slate-200 [&_.swiper-pagination-bullet]:opacity-100
        [&_.swiper-pagination-bullet]:transition-all
        [&_.swiper-pagination-bullet-active]:!h-[6px] [&_.swiper-pagination-bullet-active]:!w-[30px]
        [&_.swiper-pagination-bullet-active]:bg-slate-800 
      "
    >
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        speed={600}
        autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        coverflowEffect={{
          rotate: 30,
          stretch: "60%",
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        onClick={handleClick}
        className="home-gallery-slider !pb-6 !pt-4 !px-2"
      >
        {slides.map((s) => (
          <SwiperSlide
            key={s.src}
            className="!h-auto !w-[62%] aspect-[5/4] cursor-zoom-in overflow-hidden rounded-2xl"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 1024px) 30vw, 62vw"
              quality={70}
              loading="eager"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}