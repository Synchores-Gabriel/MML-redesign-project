"use client";

import { useEffect, useState, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * OPTIMIZED GRID PARTICLE
 */
const GridParticle = memo(({ index, cols }: { index: number; cols: number }) => {
  const row = Math.floor(index / cols) + 1;
  const col = (index % cols) + 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="bg-tertiary/90 aspect-square"
      style={{
        gridRowStart: row,
        gridColumnStart: col,
        willChange: "opacity",
      }}
    />
  );
});
GridParticle.displayName = "GridParticle";

export const GridAnimation = () => {
  const [activeParticles, setActiveParticles] = useState<{ id: number; index: number }[]>([]);
  const cols = 15;
  const totalCells = 750;

  useEffect(() => {
    let particleId = 0;
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 12) + 6;
      const newParticles = Array.from({ length: count }, () => {
        const index = Math.floor(Math.random() * totalCells);
        return { id: particleId++, index };
      });

      setActiveParticles((prev) => [...prev.slice(-35), ...newParticles]);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-30">
      <div className="grid grid-cols-15 w-full h-auto relative">
        {/* STATIC LINES */}
        {Array.from({ length: totalCells }).map((_, i) => (
          <div key={i} className="aspect-square" />
        ))}

        {/* ACTIVE PARTICLES */}
        <div className="absolute inset-0 grid grid-cols-15 w-full h-full">
          <AnimatePresence>
            {activeParticles.map((p) => (
              <GridParticle key={p.id} index={p.index} cols={cols} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
