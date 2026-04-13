"use client";

import { useEffect, useState } from "react";

export const GridAnimation = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const cols = 15;
    const rows = 15;
    const totalSquares = cols * rows;
    
    const interval = setInterval(() => {
      // Pick random squares with a preference for the right side (cols 8-15)
      const count = Math.floor(Math.random() * 25) + 20;
      const newIndices = Array.from({ length: count }, () => {
        const row = Math.floor(Math.random() * rows);
        // Probability weighted towards the right (higher column indices)
        let col;
        const rand = Math.random();
        if (rand > 0.4) {
          col = Math.floor(Math.random() * 7) + 8; // Right side
        } else {
          col = Math.floor(Math.random() * 8); // Left side
        }
        return row * cols + col;
      });
      setActiveIndices(newIndices);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <div className="grid grid-cols-15 w-full h-auto opacity-30">
        {Array.from({ length: 225 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square border-[0.2px] border-white/5 transition-all duration-[2000ms] ease-in-out ${
              activeIndices.includes(i) ? "bg-tertiary/30" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
