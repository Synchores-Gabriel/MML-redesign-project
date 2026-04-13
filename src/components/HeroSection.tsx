"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { RevealStagger } from "./Reveal";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  overlayColor?: string;
  overlayOpacity?: number;
  children?: ReactNode;
  height?: string;
  showGrid?: boolean;
}

import { GridAnimation } from "./GridAnimation";

export const HeroSection = ({
  title,
  subtitle,
  imageSrc,
  overlayColor = "primary",
  overlayOpacity = 0.3,
  children,
  height = "h-screen",
  showGrid = false,
}: HeroProps) => {
  return (
    <section className={`relative ${height} flex items-center px-6 overflow-hidden`}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Scrim Overlay */}
      <div 
        className="absolute inset-0 bg-primary/30 z-10"
        style={{ backgroundColor: `rgba(26, 36, 63, ${overlayOpacity})` }}
      />

      {/* Dynamic Grid Animation */}
      {showGrid && <GridAnimation />}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-20">
        <RevealStagger className="space-y-8">
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-display-lg font-serif text-white uppercase leading-[1.1] tracking-tight">
              {title.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            {subtitle && (
              <p className="text-xl font-sans text-neutral/80 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <div className="pt-6">
            {children}
          </div>
        </RevealStagger>
      </div>

      {/* Bottom inner glow/fade to seat into layout */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral to-transparent z-10" />
    </section>
  );
};
