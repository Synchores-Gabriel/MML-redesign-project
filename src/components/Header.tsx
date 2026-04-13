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
  { name: "CONTACT US", href: "/#contact" },
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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-12 flex items-center h-20",
        isScrolled ? "glass ring-1 ring-ghost bg-neutral/80" : "bg-transparent"
      )}
    >
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12">
            <Image
              src="/asset/mma-logo-hq.png"
              alt="MML Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-logo text-xl leading-tight tracking-[0.05em] text-primary group-hover:text-secondary transition-colors duration-400">
              M. M. LAZARO
            </span>
            <span className="font-logo text-[10px] leading-none tracking-[0.3em] text-secondary opacity-70">
              and ASSOCIATES
            </span>
          </div>
        </Link>

        {/* Navigation - Right Aligned as per Structural Reference */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-sans font-bold tracking-[0.2em] text-primary hover:text-secondary transition-all duration-400 py-2 border-b-2 border-transparent hover:border-secondary/40"
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
