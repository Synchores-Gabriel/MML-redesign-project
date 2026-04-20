"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAssetPath, getAdaptiveAsset } from "@/utils/paths";


const lawyers = [
  {
    type: "partner",
    name: "Atty. Manuel M. Lazaro",
    title: "Founding Partner",
    asset: getAdaptiveAsset("/asset/avatar/JusticeManuelLazaro-3679.jpg"),
    bio: "Founder and Senior Partner of M.M. Lazaro and Associates. A former Presiding Justice of the Court of Appeals and Presidential Assistant for Legal Affairs, he currently serves as the Chairman and CEO of Philconsa."
  },
  {
    type: "partner",
    name: "Atty. Michelle Lazaro",
    title: "Managing Partner",
    asset: getAdaptiveAsset("/asset/avatar/AttyMichelleLazaro-3744.jpg"),
    bio: "Specializing in Corporate Law, Litigation, and Estate Planning, Atty. Michelle Lazaro handles complex legal frameworks for multi-generational wealth and corporate governance."
  },
  {
    type: "grid",
    title: "Our Associates",
    hash: "#seniors",
    members: [
      { name: "Atty. Rafael P. Garcia Jr.", title: "Senior Associate", asset: getAdaptiveAsset("/asset/avatar/4.png") },
      { name: "Atty. Rommel M. Santiago", title: "Senior Associate", asset: getAdaptiveAsset("/asset/avatar/7.png") },
      { name: "Atty. Abel M. Almario", title: "Senior Associate", asset: getAdaptiveAsset("/asset/avatar/3.png") },
      { name: "Atty. Edwin M. Espejo", title: "Senior Associate", asset: getAdaptiveAsset("/asset/avatar/5.png") },
      { name: "Atty. Irish Marie V. Cabrera", title: "Senior Associate", asset: getAdaptiveAsset("/asset/avatar/6.png") },
      { name: "Atty. Philipe T. Aquino", title: "Senior Associate", asset: getAdaptiveAsset("/asset/avatar/8.png") },
    ]
  },
  {
    type: "grid",
    title: "Our Associates",
    hash: "#juniors",
    members: [
      { name: "Atty. Ma. Florence R. Fuerte", title: "Junior Associate", asset: getAdaptiveAsset("/asset/avatar/9.png") },
      { name: "Atty. Loisse Danielle D. Vitug", title: "Junior Associate", asset: getAdaptiveAsset("/asset/avatar/10.png") },
      { name: "Atty. Gerald H. Caraan", title: "Junior Associate", asset: getAdaptiveAsset("/asset/avatar/11.png") },
      { name: "Atty. Princess Khaila D. Palabrica", title: "Junior Associate", asset: getAdaptiveAsset("/asset/avatar/12.png") },
      { name: "Atty. Robert Saimon D. Sison", title: "Junior Associate", asset: getAdaptiveAsset("/asset/avatar/13.png") },
      { name: "Atty. Joseph Cornelius R. Lazaro", title: "Junior Associate", asset: getAdaptiveAsset("/asset/avatar/14.png") },
    ]
  }
];

export const LawyerCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % lawyers.length);
  const prev = () => setIndex((i) => (i - 1 + lawyers.length) % lawyers.length);

  return (
    <div id="mml-comp-lawyers-carousel" className="relative w-full overflow-hidden h-auto flex items-center justify-center bg-[#4D4D4D] mml-comp-lawyers-carousel">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A4A4A] to-[#333333] mml-comp-lawyers-carousel__bg" />

      <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-12 relative z-10 py-12 md:py-20 mml-res-container">

        <div className="text-center mb-16 space-y-4 mml-res-stack--mobile">
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-tight font-medium mml-res-text--fluid-lg">Meet our Lawyers</h2>
          <p className="max-w-4xl mx-auto text-white/80 font-sans text-sm md:text-base leading-relaxed mml-res-text--fluid">
            Our lawyers and other professionals are recognized for their innovative approach to solving
            complex legal problems and exceptional service, high ethical standards, attention to detail, and responsiveness.
          </p>
        </div>


        <div className="relative h-auto mml-comp-lawyers-carousel__track">
          <AnimatePresence mode="wait">
            {lawyers[index].type === "partner" ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row bg-white rounded-sm overflow-hidden shadow-2xl min-h-[400px] max-w-5xl mx-auto mml-comp-lawyers-carousel__slide mml-comp-lawyers-carousel__slide--partner scale-90 lg:scale-100"
              >

                <div className="relative w-full md:w-[45%] aspect-[4/5] md:aspect-auto">
                  {lawyers[index].type === "partner" && (lawyers[index] as any).asset && (
                    <picture className="absolute inset-0">
                      <source srcSet={(lawyers[index] as any).asset!.hq} type="image/webp" />
                      <Image
                        src={(lawyers[index] as any).asset!.legacy}
                        alt={lawyers[index].name || ""}
                        fill
                        className="object-cover object-top"
                      />
                    </picture>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="w-full md:w-[55%] p-12 flex flex-col justify-center space-y-6 text-primary">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-primary uppercase font-bold">{lawyers[index].name}</h3>
                    <p className="text-primary/60 font-sans text-sm uppercase tracking-[0.2em] font-bold">{lawyers[index].title}</p>
                  </div>
                  <p className="text-primary/70 font-sans text-base leading-relaxed font-medium">
                    {(lawyers[index] as any).bio}
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
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-6xl mx-auto mml-comp-lawyers-carousel__slide mml-comp-lawyers-carousel__slide--grid"
              >
                <div className="text-center mb-12 mml-comp-lawyers-carousel__header">
                  <h3 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-tighter mml-comp-lawyers-carousel__title">{lawyers[index].title}</h3>
                </div>

                {/* Grid Container */}
                <div className="space-y-12 relative z-10 mml-comp-lawyers-carousel__grid-container">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mml-comp-lawyers-carousel__grid justify-center">
                    {(lawyers[index] as any).members.map((m: any, i: number) => (
                      <div key={i} className="bg-white p-4 shadow-xl group hover:-translate-y-4 transition-all duration-700 mml-comp-lawyers-carousel__item">
                        <div className="relative aspect-[4/5] mb-4 overflow-hidden">
                          <picture className="absolute inset-0">
                            <source srcSet={m.asset.hq} type="image/webp" />
                            <Image 
                              src={m.asset.legacy} 
                              alt={m.name} 
                              fill 
                              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                            />
                          </picture>
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-serif text-[11px] text-primary uppercase font-bold leading-tight">{m.name}</h5>
                          <p className="text-[9px] font-sans text-primary/50 uppercase tracking-widest font-semibold">{m.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center pt-8">
                    <Link 
                      href={`/lawyers${(lawyers[index] as any).hash || ""}`} 
                      className="group flex items-center gap-6 px-10 py-5 bg-primary rounded-sm transition-all duration-500 hover:bg-tertiary shadow-xl mml-comp-lawyers-carousel__button"
                    >
                      <span className="text-white group-hover:text-primary font-sans text-[11px] font-black uppercase tracking-[0.4em] transition-colors duration-500">Show More</span>
                      <ArrowRight size={16} className="text-white group-hover:text-primary group-hover:translate-x-2 transition-all duration-500" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-20 mml-comp-lawyers-carousel__prev">
            <button onClick={prev} className="p-4 rounded-full bg-black/20 text-white hover:bg-black/60 hover:scale-110 transition-all duration-500 backdrop-blur-sm">
              <ChevronLeft size={36} strokeWidth={1} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-20 mml-comp-lawyers-carousel__next">
            <button onClick={next} className="p-4 rounded-full bg-black/20 text-white hover:bg-black/60 hover:scale-110 transition-all duration-500 backdrop-blur-sm">
              <ChevronRight size={36} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-4 mt-16">
          {lawyers.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-700 rounded-full ${index === i ? 'w-24 bg-tertiary' : 'w-6 bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
