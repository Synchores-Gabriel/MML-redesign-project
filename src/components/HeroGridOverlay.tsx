"use client";

import { useEffect, useState } from "react";

export const HeroGridOverlay = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const cols = 15;
    const rows = 15;

    const interval = setInterval(() => {
      const newIndices: number[] = [];
      
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const normalizedX = c / (cols - 1);
          const spawnProbability = 0.1 + (normalizedX * 0.8);
          
          if (Math.random() < spawnProbability * 0.15) { // 0.15 is a scale to control total active count
            newIndices.push(r * cols + c);
          }
        }
      }
      setActiveIndices(newIndices);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      <div className="grid grid-cols-15 w-full h-full opacity-20">
        {Array.from({ length: 225 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square border-[0.5px] border-transparent transition-all duration-[1500ms] ease-in-out ${activeIndices.includes(i)
              ? "bg-white/40 shadow-[0_0_15px_rgba(179,142,62,0.3)]"
              : "bg-transparent"
              }`}
          />
        ))}
      </div>
    </div>
  );
};
