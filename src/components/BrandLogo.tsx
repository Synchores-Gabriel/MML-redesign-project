"use client";

import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BrandLogoProps {
  textClassName?: string;
  className?: string;
  withShadow?: boolean;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo = ({
  textClassName,
  className,
  withShadow = false,
  size = "md",
}: BrandLogoProps) => {

  const sizeClasses = {
    sm: "text-[11px] md:text-xs gap-x-2",
    md: "text-[13px] md:text-base gap-x-3",
    lg: "text-2xl md:text-4xl lg:text-5xl gap-x-4 md:gap-x-6",
  };

  return (
    <div className={cn("inline-flex flex-row items-stretch", sizeClasses[size], className)}>
      {/* 
        Graphic container - The height is constrained to exactly 1.7em.
        Parent's items-stretch forces the text column to match this height.
      */}
      <div className="h-[1.7em] shrink-0 flex items-center">
        <img
          src="/asset/mma-logo-hq.png"
          alt="MML Logo"
          className="h-full w-auto object-contain block mml-brand-logo__graphic"
        />
      </div>

      {/* Text Column - justify-between pushes L2 to the bottom of the logo's height */}
      <div
        className={cn(
          "flex flex-col justify-between font-serif uppercase tracking-wider font-semibold py-0.5",
          textClassName
        )}
        style={{ 
          textShadow: withShadow ? "0 2px 16px rgba(0,0,0,0.5), 0 4px 32px rgba(179,142,62,0.2)" : "none",
        }}
      >
        <span className="block leading-[0.9]">MM LAZARO</span>
        <span className={cn("block leading-[0.9]", size === "lg" ? "text-[0.75em]" : "text-[0.75em] opacity-80")}>and ASSOCIATES</span>
      </div>
    </div>
  );
};
