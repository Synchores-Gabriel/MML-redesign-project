"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const logoScale = "h-12"; // Custom scaling variable for easy editing

const logos = [
  "/asset/logo/1-bsp.png",
  "/asset/logo/2-bank-of-commerce.png",
  "/asset/logo/3-sterling.png",
  "/asset/logo/4-Planters.png",
  "/asset/logo/5-afpslai.png",
  "/asset/logo/6-mercator.png",
  "/asset/logo/7-ictsi.png",
  "/asset/logo/8-SM.png",
];

export function LogoMarquee() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: "-50%",
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    startAnimation();
  }, [controls]);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.shiftKey) {
      e.preventDefault();
      const scrollAmount = e.deltaY * 0.5;
      controls.set((prev) => ({
        x: (prev?.x || 0) - scrollAmount,
      }));
    }
  };

  return (
    <section className="py-16 bg-neutral/50 relative overflow-hidden">
      <h1 className="text-2xl font-bold text-center font-serif uppercase tracking-wider leading-snug text-tertiary font-semibold">Our Clients</h1>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div
          ref={containerRef}
          className="relative overflow-hidden h-[100px]"
          onWheel={handleWheel}
        >
          <motion.div
            className="flex gap-12 items-center"
            animate={controls}
            style={{ width: "200%" }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className={`${logoScale} w-auto flex-shrink-0`}>
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={48}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className={`${logoScale} w-auto flex-shrink-0`}>
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={48}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}