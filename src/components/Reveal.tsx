"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

export const Reveal = ({ children, width = "fit-content", className = "", delay = 0 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className={`reveal ${isInView ? "active" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export const RevealStagger = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal-stagger ${isInView ? "active" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
