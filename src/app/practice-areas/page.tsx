"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealStagger, Reveal } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { QuickLinks } from "@/components/QuickLinks";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const practices = [
  {
    title: "Corporate Services & Business Transactions",
    description: "Our firm provides a full range of services for corporate accounts. We help clients establish and maintain corporate entities suitable for their commercial personal or commercial activities. We also help clients manage changes in laws and regulations, or as their business plans and objectives evolve.",
    details: "We advise our corporate clients on, and help them manage, compliance and good governance.\n\nIn this connection, lawyers of our firm are able to serve as corporate secretaries, assisting the client in managing director and stockholder meetings, share issuances and transfers, record keeping, and complying with reporting requirements imposed by such agencies as the Securities and Exchange Commission, the Department of Trade and Industry, the Board of Investments, and the Philippine Stock Exchange.",
    image: "/asset/prackey1.png"
  },
  {
    title: "Litigation and Arbitration",
    description: "We provide our clients with expert advice and advocacy, establishing litigation strategies grounded on thorough preparation, sensitivity to the client’s business goals and awareness of the practical concerns that affect most litigation. Our advice is keyed to the successful disposition of disputes, including, and many times preferably, the bridging of conflict and avoidance of suits.",
    details: "In this connection, our business law group often involves our litigators in the due diligence or review of commercial transactions, to better assess and manage the risk of future controversy.\n\nIndeed, many of our trial lawyers have strong backgrounds in business law, making our firm a top choice for complex commercial litigation. We have handled a broad range of cases, many of them precedent-setting, and for a variety of clients. We have acted for individuals, private corporates and governments. Our firm has extensive experience in product liability cases; we act as counsel to a multinational company involved in the first mass tort case in the Philippines, as well as a major cigarette manufacturing concern in tobacco product liability claims. We successfully defended Newsweek in a libel case that still stands as a landmark decision in local jurisprudence.\n\nWe are involved in the first local case of cybersquatting, testing the right of leading Philippine companies to challenge the use of their business names as domain names by others. Our practice has always mirrored the country’s economic surges and shifts. We successfully defended the privatization of the largest Philippine oil company as well as a major shipyard. We acted for the Philippine Chamber of Mines in obtaining a reversal of the Supreme Court’s decision holding provisions of the Mining Act unconstitutional. We have extensive experience in arbitration and mediation, particularly domestic and international arbitration involving industrial projects.",
    image: "/asset/prackey2.png"
  },
  {
    title: "Real Estate",
    description: "Our experience in real estate practice covers the simplest portfolio purchase to more complex deals and transactions, and our clients range from individuals to foreign governments.",
    details: "We have assisted land developers on a variety of enterprises including industrial parks, recreational projects such as golf courses, and joint ventures for multi-use projects.\n\nWe acted as counsel to the consortium that acquired majority of the shares in Fort Bonifacio Development Corporation, the owner and developer of prime lands converted from military use under the Bases Conversion Act. We also advise other parties interested in participating in development projects for that area. We advised the Government of Singapore in its investment in RCBC Plaza, the first vertical information technology ecozone. We have expertise in special land issues, especially those that restrict its disposition and use, including nationality restrictions on ownership, reclamation, and issues relating to the rights of indigenous peoples. We have a thorough knowledge of all aspects of land titling.\n\nIn this connection, we have advised a major power company in determining and evaluating the status of ownership and titling of more than 350 parcels of land necessary for an estimated 30-kilometer transmission line system, and have actively assisted in the acquisition of right-of-way, ownership and other rights over these lands, through private contract or eminent domain. We have advised mining and land companies on the impact of classification restrictions and agrarian reform laws and have helped them formulate business plans that achieve compliance, manage risks, and produce satisfactory business results. The disposition or utilization of real property may trigger a number of tax and appraisal issues, and we are experts on these issues, whether in the context of financing, investment or sale transactions.",
    image: "/asset/prackey3.png"
  },
  {
    title: "Taxation Law",
    description: "Our tax lawyers advise on the tax aspects of, and provide efficient structuring solutions for all types of transactions. Their depth of experience in corporate work sets them apart from other tax advisers.",
    details: "We help our clients comply with all their tax-related requirements – rulings, treaty relief applications, tax audits, tax assessments and refund claims.\n\nOur customs practice group handles customs duty assessments, customs duty refund claim and anti-dumping controversies. We have a developed tax litigation practice and have won precedent-setting cases for our clients. We provide specialized advice on estate planning, and employee compensation and retirement benefits.",
    image: "/asset/prackey4.png"
  }
];

export default function PracticeAreasPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

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
                    <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-0 relative mml-res-container--bleed">
                      {/* Left Column (Text) */}
                      <div className="relative p-8 md:p-16 flex flex-col justify-center min-h-[300px] md:min-h-[400px] mml-pa-row__desc">
                        <div className="space-y-8 relative z-10 pr-4 md:pr-0">
                          {/* Title & Number */}
                          <div className="space-y-4">
                            <span className={`text-[11px] font-sans font-bold tracking-widest block transition-colors duration-500 ${isActive ? 'text-tertiary' : 'text-primary/30'}`}>
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <motion.h3 
                              animate={{ 
                                fontSize: isActive ? (isDesktop ? "1.875rem" : "1.5rem") : (isDesktop ? "3rem" : "2.25rem"),
                                lineHeight: isActive ? "1.2" : "1.1"
                              }}
                              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                              className={`font-serif uppercase tracking-tight font-black transition-colors duration-500 ${isActive ? 'text-white' : 'text-primary'}`}
                            >
                              {practice.title}
                            </motion.h3>
                          </div>

                          {/* Description & Details */}
                          <div className="space-y-6 max-w-2xl">
                            <motion.p 
                              animate={{ 
                                fontSize: isActive ? "1.125rem" : (isDesktop ? "1.5rem" : "1.25rem"),
                                opacity: isActive ? 0.9 : 1
                              }}
                              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                              className={`font-sans leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-primary/80'} ${!isActive ? 'line-clamp-2' : ''}`}
                            >
                              {practice.description}
                            </motion.p>

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
                                    <p className="font-sans text-white/60 leading-relaxed text-base whitespace-pre-line">
                                      {practice.details}
                                    </p>
                                    <div className="pt-2">
                                      <a
                                        href="#mml-ab-contact"
                                        className="group inline-flex items-center gap-4 text-tertiary font-sans font-bold tracking-[0.3em] text-[10px] uppercase hover:text-white transition-all duration-500 cursor-pointer"
                                      >
                                        ENQUIRE ABOUT THIS SERVICE
                                        <span className="bg-tertiary/10 p-2 rounded-full group-hover:bg-tertiary group-hover:text-primary transition-all duration-500">
                                          <ArrowRight size={14} />
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Toggle Area - Tall Hitbox with Square Indicator */}
                        <button
                          onClick={() => setOpenIndex(isActive ? null : i)}
                          className="absolute top-0 bottom-0 right-0 w-24 md:w-32 z-20 group transition-all duration-500 mml-pa-row__hit-area"
                        >
                          <div className={`absolute p-4 transition-all duration-700 aspect-square flex items-center justify-center mml-pa-row__arrow-toggle top-8 right-8 md:top-auto md:bottom-8 md:right-12 ${isActive ? 'rotate-180 bg-tertiary/20' : 'group-hover:bg-primary/5'
                            }`}>
                            <ChevronDown size={28} className={isActive ? 'text-tertiary' : 'text-primary/40'} />
                          </div>
                        </button>
                      </div>

                      {/* Right Column (Continuous Image) */}
                      <div className="relative w-full h-[300px] md:h-auto">
                        {/* Breakout container: only expands on active and md screen upwards */}
                        <motion.div 
                          layout
                          initial={false}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          style={{ 
                            width: (isActive && isDesktop) ? "calc(100% + 50vw - 50%)" : "100%",
                            right: 0,
                            translateZ: 0,
                            willChange: "transform"
                          }}
                          className="absolute inset-y-0 left-0 z-10"
                        >
                          <Image
                            src={practice.image}
                            alt={practice.title}
                            fill
                            className="object-cover"
                            priority={i < 2}
                          />

                          {/* Interaction Overlays */}
                          <motion.div 
                            animate={{ opacity: isActive ? 0.4 : 0 }}
                            className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity duration-700" 
                          />
                          <motion.div 
                            animate={{ opacity: isActive ? 1 : 0 }}
                            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/60 to-transparent transition-opacity duration-700" 
                          />
                        </motion.div>
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
