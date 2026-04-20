"use client";

import { useEffect, useState, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * OPTIMIZED GRID PARTICLE
 */
export const GridAnimation = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const cols = 15;
  const totalCells = 750;

  // 1. HIGH-PERFORMANCE STATIC MAPPING (Synchronized)
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
        delay: `${(Math.random() * 10).toFixed(2)}s`,
        duration: `${(3 + Math.random() * 4).toFixed(2)}s`,
      };
    });
  }, [totalCells, cols]);

  const gridStyle = {
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
  };

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-30">
      <div className="grid w-full h-full relative gap-0" style={gridStyle}>
        {gridCells.map((cell) => (
          <div 
            key={cell.id} 
            className="aspect-square relative border-0"
          >
            {mounted && cell.isActive && (
              <div 
                className="absolute inset-0 bg-tertiary/90 grid-pulse-active"
                style={{
                  "--pulse-delay": cell.delay,
                  "--pulse-duration": cell.duration,
                  "--pulse-opacity": "0.5", // Optimized Peak Opacity for Tertiary Grid
                } as any}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
