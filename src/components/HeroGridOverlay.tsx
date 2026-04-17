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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0, 0.45, 0], scale: [0.8, 1.1, 0.8] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 4, ease: "easeInOut" }}
      className="bg-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] aspect-square"
      style={{
        gridRowStart: row,
        gridColumnStart: col,
        willChange: "transform, opacity",
      }}
    />
  );
});
HeroParticle.displayName = "HeroParticle";

export const HeroGridOverlay = () => {
  const [activeParticles, setActiveParticles] = useState<{ id: number; index: number }[]>([]);
  const cols = 15;
  // Render enough rows to cover tall mobile viewports (e.g. 15 cols * 50 rows = 750)
  const totalCells = 750;

  useEffect(() => {
    let pId = 0;
    const interval = setInterval(() => {
      const newIndices: { id: number; index: number }[] = [];
      const spawnCount = Math.floor(Math.random() * 8) + 4; 

      for (let i = 0; i < spawnCount; i++) {
        const index = Math.floor(Math.random() * totalCells);
        const col = index % cols;
        const normalizedX = col / (cols - 1);
        const spawnProbability = 0.15 + (normalizedX * 0.85);
        
        if (Math.random() < spawnProbability) {
          newIndices.push({ id: pId++, index });
        }
      }
      setActiveParticles((prev) => [...prev.slice(-30), ...newIndices]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-40">
      {/* PERFECT SQUARE GRID: Height is derived from width * aspect ratio */}
      <div className="grid grid-cols-15 w-full h-auto relative">
        {/* STATIC LINES */}
        {Array.from({ length: totalCells }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-white/5 aspect-square" />
        ))}
        
        {/* ACTIVE PARTICLES: Absolute-overlay within the square-grid container */}
        <div className="absolute inset-0 grid grid-cols-15 w-full h-full">
          <AnimatePresence mode="popLayout">
            {activeParticles.map((p) => (
              <HeroParticle key={p.id} index={p.index} cols={cols} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
