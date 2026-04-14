"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  id?: string;
  style?: React.CSSProperties;
}

export const Reveal = ({ children, width = "fit-content", className = "", delay = 0, id, style }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      id={id}
      style={{ position: "relative", width, overflow: "hidden", ...style }}
      className={`reveal ${isInView ? "active" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export const RevealStagger = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      id={id}
      className={`reveal-stagger ${isInView ? "active" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
