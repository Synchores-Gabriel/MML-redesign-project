"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const logoScale = "h-14";

const logos = [
  "/asset/logo/1-bsp.png",
  "/asset/logo/2-bank-of-commerce-transparent.png",
  "/asset/logo/3-sterling.png",
  "/asset/logo/4-Planters-removebg-transparent.png",
  "/asset/logo/5-afpslai-removebg-transparent.png",
  "/asset/logo/6-mercator.png",
  "/asset/logo/7-ictsi.png",
  "/asset/logo/8-SM.png",
];

export function LogoMarquee() {
  // Triple the logos for seamless looping
  const duplicatedLogos = [...logos, ...logos, ...logos];
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const [isDragPaused, setIsDragPaused] = useState(false);
  const baseVelocity = -1.5; // Baseline speed (pixels per frame)

  useAnimationFrame((t, delta) => {
    if (!isDragPaused && scrollerRef.current) {
      const scrollWidth = scrollerRef.current.scrollWidth;
      const oneThird = scrollWidth / 3;

      // Calculate next position
      let moveBy = baseVelocity * (delta / 16);
      let nextX = x.get() + moveBy;

      // Wrap-around logic
      if (nextX <= -oneThird) {
        nextX += oneThird;
      } else if (nextX > 0) {
        nextX -= oneThird;
      }

      x.set(nextX);
    }
  });

  const handleWheel = (e: React.WheelEvent) => {
    if (e.shiftKey) {
      // Direct influence on motion value for tactile scrolling
      const delta = e.deltaY;
      x.set(x.get() - delta * 0.8);
    }
  };

  // Deep Blue Monochrome Filter provided by user
  const blueFilter = "brightness(0) saturate(100%) invert(9%) sepia(87%) saturate(1633%) hue-rotate(143deg) brightness(91%) contrast(106%)";

  return (
    <section id="mml-lp-marquee" className="pt-24 pb-48 md:pt-32 md:pb-64 bg-neutral/80 relative z-20 overflow-hidden border-y border-primary/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <h2 className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.4em] text-primary/30 mb-16 text-center">
          EMINENT CLIENTS & INSTITUTIONAL PARTNERS
        </h2>

        <div
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing py-20"
          onWheel={handleWheel}
        >
          <motion.div
            ref={scrollerRef}
            className="flex gap-16 md:gap-28 items-center w-max will-change-transform"
            style={{ x }}
            drag="x"
            onDragStart={() => setIsDragPaused(true)}
            onDragEnd={() => setIsDragPaused(false)}
            dragElastic={0.05}
            dragConstraints={containerRef}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className={`${logoScale} w-auto flex-shrink-0 relative group`}>
                <Image
                  src={logo}
                  alt="Client"
                  width={200}
                  height={60}
                  className="object-contain opacity-70 hover:opacity-100 transition-all duration-500 transition-all"
                  style={{ filter: blueFilter }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}