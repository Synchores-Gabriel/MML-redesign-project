"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useMemo, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import { getAssetPath, getAdaptiveAsset } from "@/utils/paths";


/**
 * LOGO MARQUEE CONFIGURATION 
 */
const LOGO_HEIGHT_CLASS = "h-14";
const GLOBAL_OPACITY = 0.7;
const USE_TINT_BY_DEFAULT = true;

const logos = [
  { asset: getAdaptiveAsset("/asset/logo/1-bsp.png"), mode: "silhouette" },
  { asset: getAdaptiveAsset("/asset/logo/2-bank-of-commerce-transparent.png"), mode: "tinted" },
  { asset: getAdaptiveAsset("/asset/logo/3-sterling.png"), mode: "silhouette" },
  { asset: getAdaptiveAsset("/asset/logo/4-Planters-removebg-transparent.png"), mode: "tinted" },
  { asset: getAdaptiveAsset("/asset/logo/5-afpslai-removebg-transparent.png"), mode: "tinted" },
  { asset: getAdaptiveAsset("/asset/logo/6-mercator.png"), mode: "silhouette" },
  { asset: getAdaptiveAsset("/asset/logo/7-ictsi-strip.png"), mode: "tinted" },
  { asset: getAdaptiveAsset("/asset/logo/8-SM.png"), mode: "silhouette" },
];

/**
 * OPTIMIZED LOGO ITEM
 * Using React.memo to prevent re-renders during smooth sliding
 */
const LogoItem = memo(({ asset, mode, filter, opacity }: {
  asset: any;
  mode: string;
  filter: string;
  opacity: number;
}) => (
  <div className={`${LOGO_HEIGHT_CLASS} w-auto flex-shrink-0 relative flex items-center will-change-transform`}>
    <picture>
      <source srcSet={asset.hq} type="image/webp" />
      <Image
        src={asset.legacy}
        alt="Client"
        width={240}
        height={80}
        className="object-contain transition-all duration-500"
        style={{
          filter,
          opacity
        }}
      />
    </picture>
  </div>
));
LogoItem.displayName = "LogoItem";

export function LogoMarquee() {
  const duplicatedLogos = useMemo(() => [...logos, ...logos, ...logos], []);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const [isDragPaused, setIsDragPaused] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const baseVelocity = -1.5;

  // INITIALIZE & WATCH SCROLL WIDTH (AVOID LAYOUT THRASHING)
  useEffect(() => {
    const updateWidth = () => {
      if (scrollerRef.current) {
        setScrollWidth(scrollerRef.current.scrollWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useAnimationFrame((t, delta) => {
    if (!isDragPaused && scrollWidth > 0) {
      const oneThird = scrollWidth / 3;
      let moveBy = baseVelocity * (delta / 16);
      let nextX = x.get() + moveBy;

      if (nextX <= -oneThird) nextX += oneThird;
      else if (nextX > 0) nextX -= oneThird;

      x.set(nextX);
    }
  });

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (e.shiftKey) {
      const delta = e.deltaY;
      x.set(x.get() - delta * 0.8);
    }
  }, [x]);

  const filters = useMemo(() => ({
    silhouette: "brightness(0) saturate(100%) invert(9%) sepia(87%) saturate(0%) hue-rotate(143deg) brightness(91%) contrast(106%)",
    tinted: "grayscale(1) brightness(0.6) sepia(1) hue-rotate(185deg) saturate(0) contrast(1.5)",
  }), []);

  return (
    <section id="mml-lp-marquee" className="py-24 md:py-32 bg-neutral/80 relative z-20 border-y border-primary/5 min-h-[250px] flex flex-col justify-center">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
        <h2 className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.4em] text-primary/30 mb-20 text-center">
          EMINENT CLIENTS & INSTITUTIONAL PARTNERS
        </h2>

        <div
          ref={containerRef}
          className="relative w-full cursor-grab active:cursor-grabbing"
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
              <LogoItem
                key={index}
                asset={logo.asset}
                mode={logo.mode}
                filter={logo.mode === "tinted" || USE_TINT_BY_DEFAULT ? filters.tinted : filters.silhouette}
                opacity={GLOBAL_OPACITY}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}