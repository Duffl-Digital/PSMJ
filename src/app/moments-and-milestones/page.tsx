"use client";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Header from "@/components/layout/Header";
import GetInTouch from "@/components/layout/GetInTouch";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";

export default function WhatWeDo() {

    const [index, setIndex] = useState(-1);
const images = [
    { thumb: "/images/moments-and-milestones/Img-1.jpg",   full: "/images/moments-and-milestones/lightbox-1.jpg" },
    { thumb: "/images/moments-and-milestones/Img-2.jpg",   full: "/images/moments-and-milestones/lightbox-2.jpg" },
    { thumb: "/images/moments-and-milestones/Img-3.jpg",   full: "/images/moments-and-milestones/lightbox-3.jpg" },
    { thumb: "/images/moments-and-milestones/Img-4.jpg",   full: "/images/moments-and-milestones/lightbox-4.jpg" },
    { thumb: "/images/moments-and-milestones/Img-5.jpg",   full: "/images/moments-and-milestones/lightbox-5.jpg" },
    { thumb: "/images/moments-and-milestones/Img-6.jpg",   full: "/images/moments-and-milestones/lightbox-6.jpg" },
    { thumb: "/images/moments-and-milestones/Img-7.jpg",   full: "/images/moments-and-milestones/lightbox-7.jpg" },
    { thumb: "/images/moments-and-milestones/Img-8.jpg",   full: "/images/moments-and-milestones/lightbox-8.jpg" },
    { thumb: "/images/moments-and-milestones/Img-9.jpg",   full: "/images/moments-and-milestones/lightbox-9.jpg" },
    { thumb: "/images/moments-and-milestones/Img-10.jpg",  full: "/images/moments-and-milestones/lightbox-10.jpg" },
    { thumb: "/images/moments-and-milestones/Img-11.jpg",  full: "/images/moments-and-milestones/lightbox-11.jpg" },
    { thumb: "/images/moments-and-milestones/Img-12.jpg",  full: "/images/moments-and-milestones/lightbox-12.jpg" },
    { thumb: "/images/moments-and-milestones/Img-13.jpg", full: "/images/moments-and-milestones/lightbox-13.jpg" },
    { thumb: "/images/moments-and-milestones/Img-14.jpg", full: "/images/moments-and-milestones/lightbox-14.jpg" },
];



    const slides = images.map((item) => ({ src: item.full }));

    return (
        <>

            <section className="bg-white bg-no-repeat">
                <Header />



                <section className="pb-20 sm:pt-12">
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                        <div className="pb-10">
                            <h2 className="text-center  text-[#1E1E1E] text-[34px] font-[800] figtree-Bold leading-[151%] tracking-[1.7px] uppercase mb-8">
                                MOMENTS &
                                MILESTONES
                            </h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-center  elms-sans-medium text-[#1E1E1E] text-[14px] font-medium leading-[180%] tracking-[0.7px] mb-6"
                            >
                               Every event we create reflects our commitment to meaningful engagement, thoughtful execution, and lasting impact. From corporate gatherings to large-scale exhibitions, our work brings people, ideas, and brands together.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-center  elms-sans-medium text-[#1E1E1E] text-[14px] font-medium leading-[180%] tracking-[0.7px]"
                            >
                               Explore the moments that define our journey experiences built through collaboration, creativity, and a passion for delivering exceptional outcomes.
                            </motion.p>
                        </div>


                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-2">
{images.map((item, index) => {
  const pattern = index % 4;
  return (
    <div key={index} onClick={() => setIndex(index)}   className={`
          relative overflow-hidden rounded-lg cursor-pointer group
          h-[180px] md:h-[250px] lg:h-[350px]

          col-span-1
          md:col-span-1

          ${
            pattern === 0 || pattern === 2
              ? "lg:col-span-3"
              : "lg:col-span-2"
          }
        `}>
      <Image
        src={item.thumb}   // 👈 was `img`
        alt={`Gallery ${index + 1}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
})}
</div>

<Lightbox
  open={index >= 0}
  close={() => setIndex(-1)}
  index={index}
  slides={slides}
  plugins={[Zoom]}
  styles={{
    root: {
      zIndex: 2147483647,
    },
    container: {
      zIndex: 2147483647,
    },
  }}
/>



                    </div>
                </section>

                <GetInTouch />
                <Footer />
            </section>



        </>

    );
}