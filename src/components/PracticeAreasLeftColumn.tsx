"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef, useMemo, memo } from "react";
import { Building2, Gavel, Landmark, Calculator, Scale } from "lucide-react";

interface PracticeAreasLeftColumnProps {
  activePractice: string | null;
  isDesktop: boolean;
}

const ATOM_CONFIG = {
  SCALE_DESKTOP: 2.0,
  SCALE_MOBILE: 1.2,
  OFFSET_X_DESKTOP: 0,
  OFFSET_Y_DESKTOP: 0,
  OFFSET_X_MOBILE: 0,
  OFFSET_Y_MOBILE: 100,
  RADIUS_FACTOR: 1.0,
};

const practiceData = [
  { id: "corp", icon: Building2, initialAngle: 90, color: "text-secondary" },
  { id: "lit", icon: Gavel, initialAngle: 180, color: "text-primary" },
  { id: "real", icon: Landmark, initialAngle: 270, color: "text-primary" },
  { id: "tax", icon: Calculator, initialAngle: 0, color: "text-tertiary" },
];

/**
 * OPTIMIZED ATOM ICON
 * Prevents full re-render of all icons during orbit animation
 */
const AtomIcon = memo(({ item, rotationMv, radius, isActive }: { 
    item: typeof practiceData[0], 
    rotationMv: any, 
    radius: number, 
    isActive: boolean 
}) => {
  const x = useTransform(rotationMv, (rot: number) => {
    const angleRad = ((item.initialAngle + rot) * Math.PI) / 180;
    return Math.cos(angleRad) * radius;
  });

  const y = useTransform(rotationMv, (rot: number) => {
    const angleRad = ((item.initialAngle + rot) * Math.PI) / 180;
    return Math.sin(angleRad) * radius;
  });

  return (
    <motion.div
      style={{ x, y }}
      className="absolute z-30 flex items-center justify-center will-change-transform"
    >
      <div className={`
        relative p-5 md:p-8 bg-white rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
        border border-ghost/10 transition-all duration-700
        ${isActive ? "ring-1 ring-tertiary scale-110 z-40" : "opacity-30 scale-90"}
      `}>
        <item.icon 
          size={isActive ? 36 : 30} 
          className={item.color} 
        />
        
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
});
AtomIcon.displayName = "AtomIcon";

export function PracticeAreasLeftColumn({ activePractice, isDesktop }: PracticeAreasLeftColumnProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(240); 
  const rotationMv = useMotionValue(0);

  const config = useMemo(() => ({
    scale: isDesktop ? ATOM_CONFIG.SCALE_DESKTOP : ATOM_CONFIG.SCALE_MOBILE,
    offsetX: isDesktop ? ATOM_CONFIG.OFFSET_X_DESKTOP : ATOM_CONFIG.OFFSET_X_MOBILE,
    offsetY: isDesktop ? ATOM_CONFIG.OFFSET_Y_DESKTOP : ATOM_CONFIG.OFFSET_Y_MOBILE,
  }), [isDesktop]);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const side = Math.min(rect.height || 500, rect.width || 500);
      let newRadius = (isDesktop ? side * 0.38 : side * 0.45) * ATOM_CONFIG.RADIUS_FACTOR;
      newRadius = isDesktop ? Math.max(180, Math.min(newRadius, 280)) : Math.max(110, Math.min(newRadius, 180));
      setRadius(newRadius);
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [isDesktop]);

  const orbitTransition = useMemo(() => ({ type: "spring", stiffness: 45, damping: 20, mass: 1 } as const), []);

  useEffect(() => {
    if (activePractice) {
      const activeItem = practiceData.find((p) => p.id === activePractice);
      if (activeItem) {
        const landingAngle = isDesktop ? 0 : -90;
        const targetOffset = landingAngle - activeItem.initialAngle; 
        let currentRotation = rotationMv.get();
        let delta = (targetOffset - (currentRotation % 360 + 360) % 360) % 360;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        animate(rotationMv, currentRotation + delta, orbitTransition);
      }
    } else {
      animate(rotationMv, 0, orbitTransition);
    }
  }, [activePractice, rotationMv, isDesktop, orbitTransition]);

  return (
    <div 
        ref={containerRef}
        className="relative w-full h-[450px] md:h-full flex items-center justify-center lg:justify-start overflow-visible mb-24 md:mb-0"
    >
      <motion.div 
        style={{ scale: config.scale, x: config.offsetX, y: config.offsetY }}
        className="relative w-0 h-0 flex items-center justify-center overflow-visible perspective-[1000px]"
      >
        <div className="absolute rounded-full border border-primary/5 pointer-events-none will-change-transform" style={{ width: radius * 2.1, height: radius * 2.1 }} />
        <div className="absolute rounded-full border border-primary/5 pointer-events-none will-change-transform" style={{ width: radius * 2.8, height: radius * 2.8 }} />
        <div 
            className="rounded-full border border-primary/5 flex items-center justify-center absolute bg-white/30 backdrop-blur-xl shadow-inner z-10 will-change-transform"
            style={{ width: radius * 1.7, height: radius * 1.7 }}
        >
          <div className="w-[85%] h-[85%] rounded-full border border-primary/5 flex items-center justify-center relative bg-primary/5">
               <Scale size={radius * 0.75} className="text-secondary/10 opacity-30" />
          </div>
        </div>

        {practiceData.map((item) => (
          <AtomIcon 
            key={item.id}
            item={item}
            rotationMv={rotationMv}
            radius={radius}
            isActive={activePractice === item.id}
          />
        ))}
      </motion.div>
    </div>
  );
}
