"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Building2, Gavel, Landmark, Calculator, Scale } from "lucide-react";

interface PracticeAreasLeftColumnProps {
  activePractice: string | null;
}

const practiceData = [
  { id: "corp", icon: Building2, initialAngle: 90 },
  { id: "lit", icon: Gavel, initialAngle: 180 },
  { id: "real", icon: Landmark, initialAngle: 270 },
  { id: "tax", icon: Calculator, initialAngle: 0 },
];

export function PracticeAreasLeftColumn({ activePractice }: PracticeAreasLeftColumnProps) {
  const [rotationTarget, setRotationTarget] = useState(0);
  const [radius, setRadius] = useState(240);

  // Motion value for the shared rotation offset
  const rotationMv = useMotionValue(0);

  // Handle responsive radius
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth >= 1280) setRadius(240);
      else if (window.innerWidth >= 1024) setRadius(200);
      else if (window.innerWidth >= 768) setRadius(220);
      else setRadius(120);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const orbitTransition = { type: "spring", stiffness: 45, damping: 20, mass: 1 } as const;

  // Animate the shared rotation motion value toward the target
  useEffect(() => {
    if (activePractice) {
      const activeItem = practiceData.find((p) => p.id === activePractice);
      if (activeItem) {
        const targetAngle = -activeItem.initialAngle; // Aim for 3 o'clock

        // Shortest path logic
        let currentRotation = rotationMv.get();
        let currentNormalized = currentRotation % 360;
        if (currentNormalized < 0) currentNormalized += 360;

        let delta = (targetAngle - currentNormalized) % 360;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;

        const finalTarget = currentRotation + delta;
        animate(rotationMv, finalTarget, orbitTransition);
      }
    } else {
      animate(rotationMv, 0, orbitTransition);
    }
  }, [activePractice, rotationMv]);

  return (
    <div className="relative w-full h-[400px] md:h-full flex items-center justify-center lg:justify-start">
      {/* Visual background rings - Concentric & Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-3/4 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-primary/5" />
        <div className="absolute w-[400px] h-[400px] md:w-[680px] md:h-[680px] rounded-full border border-primary/5" />
      </div>

      {/* CORE HUB - Concentric Inner elements */}
      <div className="w-56 h-56 md:w-[420px] md:h-[420px] rounded-full border border-primary/5 flex items-center justify-center relative bg-white/30 backdrop-blur-xl shadow-inner z-10 mml-lp-practice__orbit-center">
        <div className="w-[85%] h-[85%] rounded-full border border-primary/5 flex items-center justify-center relative bg-primary/5">
          <Scale size={180} className="text-secondary/10 opacity-30" />
        </div>

        {/* ORBITING ATOMS */}
        {practiceData.map((item) => (
          <AtomIcon
            key={item.id}
            item={item}
            rotationMv={rotationMv}
            radius={radius}
            isActive={activePractice === item.id}
          />
        ))}
      </div>

      {/* Decorative dashed radius (Guide) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/5 pointer-events-none"
        style={{ width: radius * 2, height: radius * 2 }}
      />
    </div>
  );
}

// Sub-component to handle per-icon Polar Transform
function AtomIcon({ item, rotationMv, radius, isActive }: {
  item: typeof practiceData[0],
  rotationMv: any,
  radius: number,
  isActive: boolean
}) {
  // Derive X and Y from the SHARED rotation value
  const x = useTransform(rotationMv, (rot) => {
    const angleRad = ((item.initialAngle + rot) * Math.PI) / 180;
    return Math.cos(angleRad) * radius;
  });

  const y = useTransform(rotationMv, (rot) => {
    const angleRad = ((item.initialAngle + rot) * Math.PI) / 180;
    return Math.sin(angleRad) * radius;
  });

  return (
    <motion.div
      style={{ x, y }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
    >
      <div className={`
        relative p-5 md:p-8 bg-white rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
        border border-ghost/10 transition-all duration-700
        ${isActive ? "ring-1 ring-tertiary scale-110 z-40" : "opacity-40 grayscale scale-90"}
      `}>
        <item.icon
          size={32}
          className={isActive ? "text-tertiary" : "text-primary/40"}
        />

        {/* Radar Pulse - Centered on Icon */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute -inset-4 border border-tertiary/20 rounded-full -z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
