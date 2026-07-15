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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function WhatWeDo() {

    const [index, setIndex] = useState(-1);

    const images = [
        "/images/moments-and-milestones/img1.jpg",
        "/images/moments-and-milestones/img2.jpg",
        "/images/moments-and-milestones/img3.jpg",
        "/images/moments-and-milestones/img4.jpg",
        "/images/moments-and-milestones/img5.jpg",
        "/images/moments-and-milestones/img6.jpg",
        "/images/moments-and-milestones/img7.jpg",
        "/images/moments-and-milestones/img8.jpg",
    ];

    const slides = images.map((src) => ({ src }));

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
                                Lorem ipsum dolor sit amet consectetur. Ut sed enim a ornare elit auctor ac
                                fringilla. Sed adipiscing mauris euismod sed nisl erat est morbi.
                                Pellentesque adipiscing fusce condimentum elementum tincidunt vel
                                tristique.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-center  elms-sans-medium text-[#1E1E1E] text-[14px] font-medium leading-[180%] tracking-[0.7px]"
                            >
                                Lorem ipsum dolor sit amet consectetur. Ut sed enim a ornare elit auctor ac
                                fringilla. Sed adipiscing mauris euismod sed nisl erat est morbi.
                                Pellentesque adipiscing fusce condimentum elementum tincidunt vel
                                tristique.
                            </motion.p>
                        </div>


                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-2">
  {images.map((img, index) => {
    const pattern = index % 4;

    return (
      <div
        key={index}
        onClick={() => setIndex(index)}
        className={`
          relative overflow-hidden rounded-lg cursor-pointer group
          h-[180px] md:h-[250px] lg:h-[350px]

          col-span-1
          md:col-span-1

          ${
            pattern === 0 || pattern === 2
              ? "lg:col-span-3"
              : "lg:col-span-2"
          }
        `}
      >
        <Image
          src={img}
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
/>



                    </div>
                </section>

                <GetInTouch />
                <Footer />
            </section>



        </>

    );
}