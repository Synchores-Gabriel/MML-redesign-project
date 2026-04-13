"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealStagger, Reveal } from "@/components/Reveal";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Building2, Gavel, Landmark, Calculator, Users, Shield, Briefcase, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const practices = [
  {
    title: "Corporate Services & Business Transactions",
    icon: Building2,
    description: "Our firm provides a full range of legal support for corporate accounts. We help clients establish and maintain corporate entities, grounding our strategies in personal and commercial services.",
    details: "This includes mergers and acquisitions, corporate governance, venture capital, and day-to-day operational compliance. We manage changes in laws and regulations to protect your business interest.",
    image: "/asset/office/5.jpg"
  },
  {
    title: "Litigation and Arbitration",
    icon: Gavel,
    description: "We provide our clients with expert services and advocacy, establishing litigation strategies grounded in thorough preparation and sensitivity to the client's business goals.",
    details: "Our team handles complex civil litigation, commercial disputes, and alternative dispute resolution. We recognize the practice concerns that affect most litigation and work to resolve them efficiently.",
    image: "/asset/office/1.jpg"
  },
  {
    title: "Real Estate",
    icon: Landmark,
    description: "Our experience in real estate practice covers the simplest portfolio purchase to more complex deals and developments.",
    details: "We have assisted developers on a variety of enterprises including industrial parks, commercial projects, golf courses, and residential projects. We act as counsel for the consortium that acquired majority of the shares of developers.",
    image: "/asset/office/2.png"
  },
  {
    title: "Taxation Law",
    icon: Calculator,
    description: "Our tax lawyers advise on the tax aspects of, and provide thorough efficiency in effecting corporate work.",
    details: "We handle tax planning, estate taxes, donor taxes, and representation before tax authorities. Our team spent thousand of hours in the tax requirements—rulings, treaty, relief applications, fair audits, tax, realty application, tax...",
    image: "/asset/office/3.jpg"
  }
];

export default function PracticeAreasPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <RevealStagger className="space-y-6 max-w-2xl">
            <span className="text-secondary uppercase tracking-[0.3em] font-semibold text-xs text-left block">Expertise</span>
            <h1 className="text-5xl font-serif text-primary uppercase leading-tight">Our Practice Areas</h1>
            <p className="text-primary/60 font-sans leading-relaxed text-lg">
              Comprehensive legal solutions across all aspects of Philippine business law, 
              with a particular focus on the following specialized areas.
            </p>
          </RevealStagger>

          {/* Accordion Style List */}
          <div className="space-y-4">
            {practices.map((practice, i) => (
              <Reveal key={i} className="w-full">
                <div 
                  className={`group border-b border-primary/5 transition-all duration-500 overflow-hidden ${openIndex === i ? 'bg-white shadow-ambient mb-8' : 'hover:bg-primary/5'}`}
                >
                  {/* Collapsed Header */}
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full text-left p-8 md:p-12 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-8">
                      <span className="text-[10px] font-sans font-bold text-primary/30 tracking-widest">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex items-center gap-6">
                        <practice.icon size={28} className={`${openIndex === i ? 'text-secondary' : 'text-primary/40'} transition-colors duration-500`} />
                        <h3 className="text-xl md:text-2xl font-serif text-primary uppercase tracking-tight">
                          {practice.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`transition-transform duration-500 text-secondary ${openIndex === i ? 'rotate-180' : ''}`} 
                      size={24} 
                    />
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="p-8 md:p-12 pt-0 grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div className="space-y-6">
                            <p className="font-sans text-lg text-primary leading-relaxed">
                              {practice.description}
                            </p>
                            <p className="font-sans text-primary/60 leading-relaxed">
                              {practice.details}
                            </p>
                            <div className="pt-8">
                              <button className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-secondary hover:text-primary transition-colors flex items-center gap-2">
                                ENQUIRE ABOUT THIS SERVICE <ChevronDown className="-rotate-90" size={12} />
                              </button>
                            </div>
                          </div>
                          <div className="relative aspect-video md:aspect-auto h-full rounded-[0.25rem] overflow-hidden">
                             <Image src={practice.image} alt={practice.title} fill className="object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
                             <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contact Section Preview (Simplified version of the landing one) */}
          <Reveal className="p-16 ring-1 ring-ghost flex flex-col md:flex-row items-center justify-between gap-12 mt-32">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-serif text-primary uppercase">Need specific legal advice?</h2>
              <p className="font-sans text-primary/60 max-w-md">Our team of experts is ready to assist you with any legal complexity.</p>
            </div>
            <button className="bg-primary text-white px-10 py-4 font-sans font-bold tracking-widest text-xs uppercase hover:bg-secondary transition-all duration-500 rounded-[0.25rem]">
              Message Our Partners
            </button>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
