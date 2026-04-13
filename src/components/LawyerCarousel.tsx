"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const lawyers = [
  {
    type: "partner",
    name: "Atty. Manuel M. Lazaro",
    title: "Founding Partner",
    img: "/asset/avatar/JusticeManuelLazaro-3679.jpg",
    bio: "Atty. Lazaro is the Founder and Senior Partner of M.M. Lazaro and Associates and is one of the incorporators of TDF. He previously served the government in several positions..."
  },
  {
    type: "partner",
    name: "Atty. Michelle Lazaro",
    title: "Managing Partner",
    img: "/asset/avatar/AttyMichelleLazaro-3744.jpg",
    bio: "Atty. Michelle Lazaro leads the firm's major corporate transactions and strategic advisory services, maintaining the legacy of excellence..."
  },
  {
    type: "grid",
    title: "Other Lawyers",
    members: [
      { name: "Atty. Manuel B. Lazaro", title: "Senior Partner", img: "/asset/avatar/MBLpic.jpg" },
      { name: "Atty. Mike Lazaro", title: "Associate Partner", img: "/asset/avatar/MMLpic.jpg" },
      { name: "Atty. Maria Santos", title: "Associate", img: "/asset/avatar/AttyMichelleLazaro-3744.jpg" },
      { name: "Atty. Ricardo Reyes", title: "Associate", img: "/asset/avatar/MBLpic.jpg" },
    ]
  }
];

export const LawyerCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % lawyers.length);
  const prev = () => setIndex((i) => (i - 1 + lawyers.length) % lawyers.length);

  return (
    <div className="relative w-full overflow-hidden min-h-[700px] flex items-center justify-center bg-[#4D4D4D]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A4A4A] to-[#333333]" />
      
      <div className="max-w-7xl mx-auto w-full px-12 relative z-10 py-20">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-5xl font-sans text-white uppercase tracking-tight font-medium">Meet our Lawyers</h2>
           <p className="max-w-4xl mx-auto text-white/80 font-sans text-sm leading-relaxed">
             Our lawyers and other professionals are recognized for their innovative approach to solving 
             complex legal problems and exceptional service, high ethical standards, attention to detail, and responsiveness.
           </p>
        </div>

        <div className="relative h-[500px]">
          <AnimatePresence mode="wait">
            {lawyers[index].type === "partner" ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row bg-white rounded-sm overflow-hidden shadow-2xl max-w-5xl mx-auto"
              >
                <div className="relative w-full md:w-[45%] aspect-[4/5] md:aspect-auto">
                   <Image 
                     src={lawyers[index].img!} 
                     alt={lawyers[index].name!} 
                     fill 
                     className="object-cover" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="w-full md:w-[55%] p-12 flex flex-col justify-center space-y-6">
                   <div className="space-y-1">
                      <h3 className="text-2xl font-serif text-primary uppercase font-bold">{lawyers[index].name}</h3>
                      <p className="text-primary/60 font-sans text-xs uppercase tracking-[0.2em] font-bold">{lawyers[index].title}</p>
                   </div>
                   <p className="text-primary/70 font-sans text-[13px] leading-relaxed">
                     {lawyers[index].bio}
                   </p>
                   <div className="pt-4 border-t border-primary/10">
                      <div className="flex gap-4">
                        <div className="h-[2px] w-12 bg-primary self-center" />
                        <div className="h-[2px] w-8 bg-primary/30 self-center" />
                      </div>
                   </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-6xl mx-auto"
              >
                <div className="text-center mb-8">
                   <h3 className="text-2xl font-sans text-white uppercase tracking-tighter">Other Lawyers</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                  {/* White-to-transparent gradient as per mockup */}
                  <div className="absolute -inset-x-12 -bottom-12 h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
                  
                  {lawyers[index].members!.map((m, i) => (
                    <div key={i} className="bg-white p-4 shadow-lg group hover:-translate-y-2 transition-transform duration-500">
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                        <Image src={m.img} alt={m.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-[10px] text-primary uppercase font-bold leading-tight">{m.name}</h4>
                        <p className="text-[8px] font-sans text-primary/40 uppercase tracking-widest">{m.title}</p>
                      </div>
                      <div className="mt-4 border-t border-primary/5 pt-2">
                         <div className="h-[1px] w-full bg-primary/10" />
                         <div className="h-[1px] w-1/2 bg-primary/40 mt-[2px]" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-20">
           <button onClick={prev} className="p-4 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors">
             <ChevronLeft size={32} />
           </button>
        </div>
        <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-20">
           <button onClick={next} className="p-4 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors">
             <ChevronRight size={32} />
           </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-4 mt-12">
           {lawyers.map((_, i) => (
             <button
               key={i}
               onClick={() => setIndex(i)}
               className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? 'w-12 bg-tertiary' : 'w-4 bg-white/20'}`}
             />
           ))}
        </div>
      </div>
    </div>
  );
};
