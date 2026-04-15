"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT THE FIRM", href: "/about" },
  { name: "OUR LAWYERS", href: "/lawyers" },
  { name: "OUR PRACTICE AREAS", href: "/practice-areas" },
  { name: "CONTACT US", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="mml-global-header"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 flex items-center min-h-[5rem] mml-global-header",
        isScrolled ? "glass ring-1 ring-ghost bg-neutral/80 mml-glass-wrap mml-global-header--scrolled" : "bg-transparent mml-global-header--transparent"
      )}
    >
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between mml-res-container">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group mml-global-header__logo mml-res-flow--desktop items-center">
          <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
            <Image
              src="/asset/mma-logo-hq.png"
              alt="MML Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col mml-res-stack--mobile">
            <span className={cn("font-serif text-lg md:text-xl leading-tight tracking-[0.05em] transition-colors duration-400 mml-global-header__logo-text mml-res-text--fluid",
              isScrolled ? "text-primary group-hover:text-secondary" : "text-white group-hover:text-secondary"
            )}>
              M. M. LAZARO
            </span>
            <span className={cn("font-serif text-[8px] md:text-[10px] leading-none tracking-[0.3em] opacity-70 mml-global-header__logo-text--desc",
              isScrolled ? "text-primary group-hover:text-secondary" : "text-white group-hover:text-secondary"
            )}>
              AND ASSOCIATES
            </span>
          </div>
        </Link>


        {/* Navigation - Right Aligned as per Structural Reference */}
        <nav className="hidden md:flex items-center gap-10 mml-global-header__nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn("text-[10px] font-sans font-bold tracking-[0.2em] text-primary hover:text-secondary transition-all duration-400 py-2 border-b-2 border-transparent hover:border-secondary/40 mml-global-header__nav-link",
                isScrolled ? "text-primary hover:text-secondary mml-global-header__nav-link--scrolled" : "text-white hover:text-white mml-global-header__nav-link--transparent"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-primary p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};
