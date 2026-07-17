"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {


    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);



    const menus = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "What We Do", href: "/what-we-do" },
        { name: "Clientele", href: "/clientele" },
        { name: "Moments & Milestones", href: "/moments-and-milestones" },
        { name: "Case Study", href: "/case-study" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Header */}
            <div
                className={`flex justify-center z-[9999999999999999999999] transition-all duration-300 ${menuOpen
                        ? "fixed top-8 left-0 right-0"
                        : "relative mt-8 mb-12"
                    }`}
            >
                <div className="flex z-[999999] items-center justify-between w-max py-[5px] sm:py-[11px] px-[20px] sm:px-[25px] rounded-full bg-[linear-gradient(73deg,_#6BD4FC_7.66%,_#75ADF1_49.63%,_#6BD4FC_98.64%)] shadow-[0_36px_80px_rgba(0,0,0,0.17),_0_23.333px_46.852px_rgba(0,0,0,0.13),_0_13.867px_25.481px_rgba(0,0,0,0.10),_0_7.2px_13px_rgba(0,0,0,0.09),_0_2.933px_6.519px_rgba(0,0,0,0.07),_0_0.667px_3.148px_rgba(0,0,0,0.04)]">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            alt="PSMJ Logo"
                            width={130}
                            height={40}
                            className="w-[100px] sm:w-auto  h-auto me-4"
                        />
                    </Link>
                   

                    <div className="flex items-center gap-5">
                        <span className="h-10 w-px bg-white/40"></span>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="relative w-10 h-10 flex items-center cursor-pointer justify-center"
                        >
                            {/* Top */}
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? 45 : 0,
                                    y: menuOpen ? 0 : -10,
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    transformOrigin: "center",
                                }}
                                className="absolute w-8 h-[3px] bg-white rounded-full"
                            />

                            {/* Middle */}
                            <motion.span
                                animate={{
                                    opacity: menuOpen ? 0 : 1,
                                }}
                                transition={{ duration: 0.2 }}
                                className="absolute w-8 h-[3px] bg-white rounded-full"
                            />

                            {/* Bottom */}
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? -45 : 0,
                                    y: menuOpen ? 0 : 10,
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    transformOrigin: "center",
                                }}
                                className="absolute w-8 h-[3px] bg-white rounded-full"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Fullscreen Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                            borderRadius: 120,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            borderRadius: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                        }}
                        transition={{
                            duration: 0.45,
                        }}
                        className="fixed inset-0 z-[99999999] bg-[linear-gradient(180deg,#6BD4FC,#75ADF1)] overflow-hidden"
                    >
                        <div className="h-screen overflow-y-auto pt-36 pb-16">
                            <div className="mx-auto flex min-h-full max-w-6xl flex-col items-center justify-start">
                                {menus.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: index * 0.08,
                                            duration: 0.5,
                                        }}
                                        className="py-4"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="
            relative
            figtree-Bold
            text-white
            text-[26px]
            md:text-[26px]
            lg:text-[45px]
            font-extrabold
            leading-none
            tracking-tight
            transition-all
            duration-300
            hover:tracking-[4px]
            hover:text-white/80
          "
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}