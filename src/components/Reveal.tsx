"use client";

import { useRef, ReactNode, Children } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  id?: string;
  style?: React.CSSProperties;
}

const revealVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: {
      type: "tween",
      ease: [0.16, 1, 0.3, 1], // Custom prestigous quintic ease
    } as const
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    } as const,
  }),
} as const;

export const Reveal = ({ children, width = "fit-content", className = "", delay = 0, id, style }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      id={id}
      variants={revealVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      style={{ 
        position: "relative", 
        width, 
        overflow: "hidden", 
        willChange: "transform, opacity",
        ...style 
      }}
      className={className}
      transition={shouldReduceMotion ? { duration: 0 } : undefined}
    >
      {children}
    </motion.div>
  );
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const staggerChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    } as const,
  },
};

export const RevealStagger = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      id={id}
      variants={staggerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {Children.map(children, (child, i) => (
          <motion.div 
            key={i} 
            variants={staggerChildVariants}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
          >
            {child}
          </motion.div>
      ))}
    </motion.div>
  );
};
