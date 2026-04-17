"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import Image from "next/image";

/**
 * LOGO MARQUEE CONFIGURATION 
 * Edit these values to globally adjust the look and layout.
 */
const LOGO_HEIGHT_CLASS = "h-14"; // e.g. h-12, h-16, h-20
const GLOBAL_OPACITY = 0.7;       // Default opacity for logos
const USE_TINT_BY_DEFAULT = true; // Set to true to preserve logo detail, false for solid silhouette

const logos = [
  { src: "/asset/logo/1-bsp.png", mode: "silhouette" },
  { src: "/asset/logo/2-bank-of-commerce-transparent.png", mode: "tinted" },
  { src: "/asset/logo/3-sterling.png", mode: "silhouette" },
  { src: "/asset/logo/4-Planters-removebg-transparent.png", mode: "tinted" },
  { src: "/asset/logo/5-afpslai-removebg-transparent.png", mode: "tinted" },
  { src: "/asset/logo/6-mercator.png", mode: "silhouette" },
  { src: "/asset/logo/7-ictsi-strip.png", mode: "tinted" },
  { src: "/asset/logo/8-SM.png", mode: "silhouette" },
];

export function LogoMarquee() {
  const duplicatedLogos = [...logos, ...logos, ...logos];
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const [isDragPaused, setIsDragPaused] = useState(false);
  const baseVelocity = -1.5;

  useAnimationFrame((t, delta) => {
    if (!isDragPaused && scrollerRef.current) {
      const scrollWidth = scrollerRef.current.scrollWidth;
      const oneThird = scrollWidth / 3;
      let moveBy = baseVelocity * (delta / 16); 
      let nextX = x.get() + moveBy;
      if (nextX <= -oneThird) nextX += oneThird;
      else if (nextX > 0) nextX -= oneThird;
      x.set(nextX);
    }
  });

  const handleWheel = (e: React.WheelEvent) => {
    if (e.shiftKey) {
      const delta = e.deltaY;
      x.set(x.get() - delta * 0.8);
    }
  };

  /**
   * FILTER FACTORY 
   * silhouette: Solid Deep Blue silhouette
   * tinted: Detail-preserving Navy tint
   */
  const filters = useMemo(() => ({
    silhouette: "brightness(0) saturate(100%) invert(9%) sepia(87%) saturate(1633%) hue-rotate(143deg) brightness(91%) contrast(106%)",
    tinted: "grayscale(1) brightness(0.6) sepia(1) hue-rotate(185deg) saturate(3) contrast(1.1)",
  }), []);

  return (
    <section id="mml-lp-marquee" className="py-24 md:py-32 bg-neutral/80 relative z-20 border-y border-primary/5 min-h-[250px] flex flex-col justify-center">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
        <h2 className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.4em] text-primary/30 mb-20 text-center">
          EMINENT CLIENTS & INSTITUTIONAL PARTNERS
        </h2>
        
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
          onWheel={handleWheel}
        >
          <motion.div
            ref={scrollerRef}
            className="flex gap-16 md:gap-32 items-center w-max py-10 will-change-transform"
            style={{ x }}
            drag="x"
            onDragStart={() => setIsDragPaused(true)}
            onDragEnd={() => setIsDragPaused(false)}
            dragElastic={0.05}
            dragConstraints={containerRef}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className={`${LOGO_HEIGHT_CLASS} w-auto flex-shrink-0 relative flex items-center`}>
                <Image
                  src={logo.src}
                  alt="Client"
                  width={240}
                  height={80}
                  className="object-contain transition-all duration-500"
                  style={{ 
                    filter: logo.mode === "tinted" || USE_TINT_BY_DEFAULT ? filters.tinted : filters.silhouette,
                    opacity: GLOBAL_OPACITY 
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}