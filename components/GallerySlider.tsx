"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import type { Slide } from "./content";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function GallerySlider({ slides }: { slides: Slide[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Swiper ignores clicks that were really drags, so this only fires on a true click.
  // With loop mode the DOM has duplicate slides, so read the real index from data-index.
  const handleClick = (swiper: SwiperType) => {
    const i = Number(swiper.clickedSlide?.getAttribute("data-index"));
    if (!Number.isNaN(i)) {
      setIndex(i);
      setOpen(true);
    }
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
  // loopAdditionalSlides={3}
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
  className="home-gallery-slider !pb-6 !pt-4"
>
  {slides.map((s, i) => (

    <SwiperSlide
      key={s.src}
      data-index={i}
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

    <Lightbox
      open={open}
      close={() => setOpen(false)}
      index={index}
      slides={slides.map((s) => ({ src: s.src, alt: s.alt }))}
      plugins={[Zoom, Thumbnails]}
      carousel={{ finite: false }}
      animation={{ swipe: 250 }}
    />
  </div>
);
}
