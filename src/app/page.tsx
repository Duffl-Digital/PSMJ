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


import ScrollMask from "@/components/layout/ScrollMask";
import Home from "@/components/home";




export default function home() {


  return (
    <>
      <ScrollMask
        desktopVideo="/video/intro.mp4"
        mobileVideo="https://cd.duffldigital.in/video/mobile-sample2.mp4"
        height="250vh"
      />
      <Home />
    </>
 
  );
}