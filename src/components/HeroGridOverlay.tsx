"use client";

import { useEffect, useState } from "react";

export const HeroGridOverlay = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const cols = 15;
    const rows = 15;
    // Total 225 squares
    
    const interval = setInterval(() => {
      // Pick random squares with a preference for the right side (cols 8-15)
      // We want ~30-40 squares active at any time for visibility
      const count = Math.floor(Math.random() * 20) + 30;
      const newIndices = Array.from({ length: count }, () => {
        const row = Math.floor(Math.random() * rows);
        let col;
        const rand = Math.random();
        
        // 70% chance to be on the right side (col 8-14)
        if (rand > 0.3) {
          col = Math.floor(Math.random() * 7) + 8;
        } else {
          col = Math.floor(Math.random() * 8);
        }
        return row * cols + col;
      });
      setActiveIndices(newIndices);
    }, 1500); // More frequent update

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      <div className="grid grid-cols-15 w-full h-full opacity-40">
        {Array.from({ length: 225 }).map((_, i) => (
          <div 
            key={i} 
            className={`aspect-square border-[0.5px] border-white/10 transition-all duration-[1500ms] ease-in-out ${
              activeIndices.includes(i) 
                ? "bg-tertiary/20 shadow-[0_0_15px_rgba(179,142,62,0.3)]" 
                : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
