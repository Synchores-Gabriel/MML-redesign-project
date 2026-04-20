"use client";

import { useEffect, useState, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * OPTIMIZED HERO GRID PARTICLE
 * Uses grid positioning to ensure perfect squares aligned with the background.
 */
const HeroParticle = memo(({ index, cols }: { index: number; cols: number }) => {
  const row = Math.floor(index / cols) + 1;
  const col = (index % cols) + 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.9, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] aspect-square"
      style={{
        gridRowStart: row,
        gridColumnStart: col,
        willChange: "opacity",
      }}
    />
  );
});
HeroParticle.displayName = "HeroParticle";

export const HeroGridOverlay = () => {
  const [mounted, setMounted] = useState(false);
  const [activeParticles, setActiveParticles] = useState<{ id: number; index: number }[]>([]); // Keep state for consistency if needed, though we use static map now
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const cols = 15;
  const totalCells = 750;

  // 1. HIGH-PERFORMANCE STATIC MAPPING (0% JS overhead after mount)
  const gridCells = useMemo(() => {
    return Array.from({ length: totalCells }, (_, index) => {
      const col = index % cols;
      const normalizedX = col / (cols - 1);
      
      // Tiered Probability Logic
      let probability = 0;
      if (normalizedX >= 0.85) probability = 0.95;    // High-Density Zone (Right)
      else if (normalizedX >= 0.50) probability = 0.65; // Transition Zone
      else probability = (normalizedX / 0.49) * 0.12;  // Sparse Zone

      const isActive = Math.random() < probability;
      
      return {
        id: index,
        isActive,
        // Randomize pulse timing for a non-repetitive "natural" digital feel
        delay: `${(Math.random() * 10).toFixed(2)}s`,
        duration: `${(3 + Math.random() * 4).toFixed(2)}s`,
        opacity: (0.7 + Math.random() * 0.3).toFixed(2), // Random peak between 0.7 and 1.0
      };
    });
  }, [totalCells, cols]);

  const gridStyle = {
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
  };

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-40">
      <div className="grid w-full h-full relative gap-0" style={gridStyle}>
        {gridCells.map((cell) => (
          <div 
            key={cell.id} 
            className="aspect-square relative border-0"
          >
            {mounted && cell.isActive && (
              <div 
                className="absolute inset-0 bg-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] grid-pulse-active"
                style={{
                  "--pulse-delay": cell.delay,
                  "--pulse-duration": cell.duration,
                  "--pulse-opacity": cell.opacity,
                } as any}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
