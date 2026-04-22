"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BrandLogo } from "./BrandLogo";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "LAWYERS", href: "/lawyers" },
  { name: "PRACTICE AREAS", href: "/practice-areas" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT US", href: "/contact" },
];

/* Pages whose initial (un-scrolled) hero background is LIGHT/WHITE —
   on these pages, text must start as dark-blue to avoid blending. */
const LIGHT_BG_ROUTES = ["/lawyers", "/practice-areas"];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  /* Determine if the current page has a light top section */
  const isLightPage = LIGHT_BG_ROUTES.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Derived Color Logic ----------
     Scrolled   → Deep Blue bg, Gold logo, White/80 nav
     Light page → Transparent bg, Dark Blue logo, Dark Blue nav
     Dark page  → Transparent bg, Gold logo, White/80 nav
  ----------------------------------------- */
  const scrolledBg = "bg-primary shadow-lg";
  const transparentBg = "bg-transparent";

  const logoColor = isScrolled
    ? "text-tertiary"
    : isLightPage
      ? "text-primary"
      : "text-tertiary";

  const navColor = isScrolled
    ? "text-white/80 hover:text-tertiary hover:border-tertiary"
    : isLightPage
      ? "text-primary/80 hover:text-primary hover:border-primary/40"
      : "text-white/80 hover:text-white hover:border-white/40";

  const mobileIconColor = isScrolled || !isLightPage ? "text-white" : "text-primary";

  return (
    <>
      <header
        id="mml-global-header"
        className={cn(
          "fixed top-0 left-0 right-0 z-9999 transition-all duration-500 px-6 md:px-12 flex items-center min-h-[5rem] mml-global-header",
          isScrolled ? scrolledBg : transparentBg,
          isScrolled ? "mml-global-header--scrolled" : "mml-global-header--transparent"
        )}
      >
        <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between mml-res-container">

          {/* ═══════ Logo — Unified "Editorial Juris" Identity ═══════ */}
          <Link href="/" className="group mml-global-header__logo shrink-0">
            <BrandLogo
              textClassName={logoColor}
              size="md"
              withShadow={!isScrolled}
            />
          </Link>

          {/* ═══════ Navigation — Right Aligned ═══════ */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mml-global-header__nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-sans font-bold tracking-[0.08em] transition-all duration-400 py-2 border-b-[3px] border-transparent mml-global-header__nav-link",
                  navColor
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ═══════ Mobile menu button ═══════ */}
          <button onClick={() => setIsOpen(!isOpen)} className={cn("lg:hidden p-2 transition-colors", mobileIconColor)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-80 bg-primary z-50 p-6"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-tertiary transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col gap-6 mt-16">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-tertiary text-lg font-sans font-bold tracking-[0.08em] transition-colors py-2 border-b border-white/10 hover:border-tertiary"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
