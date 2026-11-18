"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import { words1, words2 } from "@/data/words";
import {
  useEffect,
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

import { motion, useScroll, useTransform, easeOut } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import Footer from "@/components/layout/Footer";
import GetInTouch from "@/components/layout/GetInTouch";

import PsmjUniverse from "@/components/PsmjUniverse";
import TrustedBySection from "@/components/TrustedBySection";
import IntroVideo from "@/components/layout/IntroVideo";
import Home from "@/components/home";




export default function homenew() {


  return (
   <IntroVideo
        desktopVideo="/video/intro.mp4"
        mobileVideo="/video/intro-mobile.mp4"
        showPromptBefore={2}
      >
        <Home />
      </IntroVideo>
 
  );
}