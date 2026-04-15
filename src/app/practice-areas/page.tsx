"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealStagger, Reveal } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { QuickLinks } from "@/components/QuickLinks";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const practices = [
  {
    title: "Corporate Services & Business Transactions",
    description: "Our firm provides a full range of legal support for corporate accounts. We help clients establish and maintain corporate entities, grounding our strategies in personal and commercial services.",
    details: "This includes mergers and acquisitions, corporate governance, venture capital, and day-to-day operational compliance. We manage changes in laws and regulations to protect your business interest.",
    image: "/asset/prackey1.png"
  },
  {
    title: "Litigation and Arbitration",
    description: "We provide our clients with expert services and advocacy, establishing litigation strategies grounded in thorough preparation and sensitivity to the client's business goals.",
    details: "Our team handles complex civil litigation, commercial disputes, and alternative dispute resolution. We recognize the practice concerns that affect most litigation and work to resolve them efficiently.",
    image: "/asset/prackey2.png"
  },
  {
    title: "Real Estate",
    description: "Our experience in real estate practice covers the simplest portfolio purchase to more complex deals and developments.",
    details: "We have assisted developers on a variety of enterprises including industrial parks, commercial projects, golf courses, and residential projects. We act as counsel for the consortium that acquired majority of the shares of developers.",
    image: "/asset/prackey3.png"
  },
  {
    title: "Taxation Law",
    description: "Our tax lawyers advise on the tax aspects of, and provide thorough efficiency in effecting corporate work.",
    details: "We handle tax planning, estate taxes, donor taxes, and representation before tax authorities. Our team spent thousand of hours in the tax requirements—rulings, treaty, relief applications, fair audits, tax, realty application, tax...",
    image: "/asset/prackey4.png"
  }
];

export default function PracticeAreasPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral pt-32 md:pt-44 pb-0 overflow-x-hidden">
        {/* Header Section */}
        <div id="mml-pa-root" className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-16 md:mb-24 mml-res-container">
          <RevealStagger className="space-y-6 max-w-3xl mml-res-stack--mobile">
            <span className="text-tertiary uppercase tracking-[0.4em] font-sans font-bold text-[10px] block">Expertise</span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary uppercase leading-tight font-black mml-res-text--fluid-lg">Our Practice Areas</h1>
            <p className="text-primary/60 font-sans leading-relaxed text-base md:text-lg font-medium max-w-2xl mml-res-text--fluid">
              Precision legal counsel grounded in heritage and modern jurisprudence. 
              Our specialized departments represent the pinnacle of legal excellence in the Philippines.
            </p>
          </RevealStagger>
        </div>


        {/* Continuous Image Wall Accordion */}
        <section className="w-full relative mb-32">
          <div className="flex flex-col space-y-0 mml-pa-list">
            {practices.map((practice, i) => {
              const isActive = openIndex === i;
              
              return (
                <div 
                  key={i} 
                  className={`relative w-full mml-pa-row ${isActive ? 'mml-pa-row--active z-20' : 'z-10'}`}
                >
                  <motion.div
                    initial={false}
                    animate={{ 
                      backgroundColor: isActive ? "#012B55" : "#F5F2ED",
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full border-b border-primary/5 last:border-b-0"
                  >
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-0 relative mml-res-container">

                      
                      {/* Left Column (Text) */}
                      <div className="relative p-6 lg:p-16 flex flex-col justify-center min-h-[300px] md:min-h-[400px] mml-pa-row__desc">
                        <div className="space-y-8 relative z-10">
                          {/* Title & Number */}
                          <div className="space-y-4">
                             <span className={`text-[11px] font-sans font-bold tracking-widest block transition-colors duration-500 ${isActive ? 'text-tertiary' : 'text-primary/30'}`}>
                               {String(i + 1).padStart(2, '0')}
                             </span>
                             <h3 className={`text-2xl md:text-3xl font-serif uppercase tracking-tight font-black transition-colors duration-500 ${isActive ? 'text-white' : 'text-primary'}`}>
                                {practice.title}
                             </h3>
                          </div>

                          {/* Description & Details */}
                          <div className="space-y-6 max-w-2xl">
                            <p className={`font-sans text-lg leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-primary/80'} ${!isActive ? 'line-clamp-2' : ''}`}>
                               {practice.description}
                            </p>
                            
                            <AnimatePresence initial={false}>
                              {isActive && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                  className="overflow-hidden"
                                >
                                   <div className="space-y-8 py-4">
                                     <p className="font-sans text-white/60 leading-relaxed text-base">
                                        {practice.details}
                                     </p>
                                     <div className="pt-2">
                                        <button className="group flex items-center gap-4 text-tertiary font-sans font-bold tracking-[0.3em] text-[10px] uppercase hover:text-white transition-all duration-500">
                                          ENQUIRE ABOUT THIS SERVICE 
                                          <span className="bg-tertiary/10 p-2 rounded-full group-hover:bg-tertiary group-hover:text-primary transition-all duration-500">
                                            <ArrowRight size={14} />
                                          </span>
                                        </button>
                                     </div>
                                   </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Absolute Positioning Arrows At Bottom of Left Column */}
                        <button 
                          onClick={() => setOpenIndex(isActive ? null : i)}
                          className={`absolute bottom-8 right-12 z-20 p-4 transition-all duration-700 mml-pa-row__arrow-toggle ${isActive ? 'rotate-180 bg-tertiary/20' : 'hover:bg-primary/5'}`}
                        >
                          <ChevronDown size={28} className={isActive ? 'text-tertiary' : 'text-primary/40'} />
                        </button>
                      </div>

                      {/* Right Column (Continuous Image) */}
                      <div className="relative w-90 h-[250px] md:h-auto">
                        {/* Breakout container: only expands on active and md screen upwards */}
                        <div className={`absolute inset-0 transition-all duration-1000 ease-[0.16,1,0.3,1] z-10 ${isActive ? 'md:-mr-[calc(50vw-50%)]' : ''}`}>

                          <Image
                            src={practice.image}
                            alt={practice.title}
                            fill
                            className="object-cover"
                            priority={i < 2}
                          />

                          {/* Interaction Overlays */}
                          <div className={`absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-700 ${isActive ? 'opacity-40' : 'opacity-0'}`} />
                          <div className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/60 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="relative">
          {/* QUICK LINKS - OVERLAY POSITION BETWEEN SECTIONS */}
          <QuickLinks id="mml-pa-quick-links" links={[
            { name: "About the Firm", href: "/about" },
            { name: "Our Lawyers", href: "/lawyers" },
            { name: "Practice Areas", href: "/practice-areas" },
          ]} />

          {/* Contact Section — Uses shared component */}
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
