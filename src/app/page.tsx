"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroGridOverlay } from "@/components/HeroGridOverlay";
import { GridAnimation } from "@/components/GridAnimation";
import { LawyerCarousel } from "@/components/LawyerCarousel";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2, Gavel, Landmark, Calculator, Users,
  ArrowRight, MapPin, Phone, Mail, ChevronDown, Award, Scale
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const practiceAreas = [
  {
    id: "corp",
    title: "CORPORATE SERVICES & BUSINESS TRANSACTIONS",
    desc: "Our firm provides a full range of legal support for corporate accounts. We help clients establish and maintain corporate entities...",
    icon: Building2
  },
  {
    id: "lit",
    title: "LITIGATION AND ARBITRATION",
    desc: "We provide our clients with expert services and advocacy, establishing litigation strategies grounded in thorough preparation...",
    icon: Gavel
  },
  {
    id: "real",
    title: "REAL ESTATE",
    desc: "Our experience in real estate practice covers the simplest portfolio purchase to more complex deals and developments.",
    icon: Landmark
  },
  {
    id: "tax",
    title: "TAXATION LAW",
    desc: "Our tax lawyers advise on the tax aspects of, and provide thorough efficiency in effecting corporate work.",
    icon: Calculator
  },
];

export default function Home() {
  const [activePractice, setActivePractice] = useState<string | null>("corp");

  return (
    <>
      <Header />

      <main className="flex-grow scroll-smooth bg-neutral">
        {/* HERO SECTION 1 - CINEMATIC SQUARE GRID */}
        <section id="mml-lp-hero" className="relative h-screen flex items-center px-6 md:px-12 overflow-hidden bg-primary mml-res-container">

          <Image
            src="/asset/office/1.jpg"
            alt="MML Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent z-10" />

          {/* Hydration-safe Grid Overlay */}
          <HeroGridOverlay />

          <div className="relative z-30 max-w-screen-2xl mx-auto w-full pt-20 mml-res-container">

            <RevealStagger className="space-y-10 max-w-4xl mml-lp-hero__stagger">
              <div className="space-y-4 mml-res-stack--mobile">
                <span className="text-tertiary uppercase tracking-[0.5em] font-sans font-bold text-[10px] md:text-xs inline-block">Established 1970</span>
                <h1 className="text-4xl md:text-display-lg font-serif text-white uppercase font-black mml-res-text--fluid-lg leading-tight">
                  Eminence in Every Case.<br className="hidden md:block" />Integrity in Every Action.
                </h1>
                <p className="text-neutral/60 font-sans text-lg md:text-xl max-w-2xl leading-relaxed mml-res-text--fluid">
                  Precision legal counsel grounded in heritage and modern jurisprudence.
                  Experience the apex of legal craftsmanship.
                </p>
              </div>

              <div className="flex gap-6 mml-lp-hero__actions">
                <button className="glow-gold px-12 py-5 rounded-[0.25rem] text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mml-lp-hero__btn-more">
                  MORE ABOUT US
                </button>
                <div className="w-px h-12 bg-white/10 hidden md:block mml-lp-hero__divider" />
                <button className="group flex items-center gap-4 text-white font-sans font-bold tracking-[0.2em] text-xs uppercase hover:text-tertiary transition-colors duration-400 mml-lp-hero__btn-consult">
                  CONSULT NOW <span className="bg-white/10 p-2 rounded-full group-hover:bg-tertiary/20 group-hover:pl-4 transition-all duration-400 mml-lp-hero__btn-icon"><ArrowRight size={14} /></span>
                </button>
              </div>
            </RevealStagger>
          </div>
        </section>

        {/* HERO SECTION 2 - BRANDED STRIP 1 */}
        <section id="mml-lp-strip-1" className="relative min-h-[300px] md:h-[400px] flex items-center justify-start text-left px-6 md:px-24 wood-strip">
          <div className="absolute inset-0 bg-primary/40 z-10" />
          <Reveal style={{ overflow: "visible" }} className="relative z-20 space-y-6 max-w-3xl mml-res-stack--mobile">
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase italic tracking-tight mml-res-text--fluid-lg">
              &quot;All our clients make the right choices!&quot;
            </h2>
            <p className="text-tertiary/80 font-sans font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mml-res-text--fluid">
              Get in touch today we look forward to hearing from you.
            </p>
            <div className="pt-4">
              <button className="glow-gold px-10 py-4 rounded-[0.25rem] text-primary font-sans font-bold tracking-[0.2em] text-[10px] uppercase">
                OUR LAWYERS
              </button>
            </div>
          </Reveal>
        </section>

        {/* HERO SECTION 3 - BRANDED STRIP 2 */}
        <section id="mml-lp-strip-2" className="relative min-h-[300px] md:h-[400px] flex items-center justify-end text-right px-6 md:px-24 bg-[#1A243F]">

          <div className="absolute inset-x-0 bottom-0 top-0 opacity-10 wood-strip pointer-events-none" />
          <Reveal style={{ overflow: "visible" }} className="relative z-20 space-y-8 max-w-4xl mml-lp-strip__content">
            <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tighter mml-lp-strip__title">
              A heritage of authority.
            </h2>
            <p className="text-neutral/40 font-sans max-w-2xl ml-auto leading-relaxed mml-lp-strip__desc">
              We provide a full range of legal services for corporate clients, establishing strategies grounded in thorough preparation and business sensitivity.
            </p>
            <div className="pt-2 mml-lp-strip__actions">
              <button className="border border-white/20 text-white px-10 py-4 rounded-[0.25rem] font-sans font-bold tracking-[0.2em] text-[10px] uppercase hover:bg-white hover:text-primary transition-all duration-500 mml-lp-strip__btn mml-lp-strip__btn--outline">
                OUR PRACTICE AREAS
              </button>
            </div>
          </Reveal>
        </section>

        {/* ABOUT THE FIRM SECTION */}
        <section id="mml-lp-about" className="py-24 md:py-40 px-6 md:px-12 wood-dark relative overflow-hidden">
          <div className="max-w-screen-2xl mx-auto text-center space-y-16 relative z-10 mml-res-container">
            <Reveal className="space-y-12">
              <div className="space-y-6 mml-res-stack--mobile">
                <span className="text-tertiary uppercase tracking-[0.6em] font-sans font-bold text-[10px] md:text-xs">The Legacy</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white uppercase leading-tight font-black mml-res-text--fluid-lg">Authority of Experience.</h2>
              </div>

              <div className="space-y-8 text-neutral/60 font-sans leading-relaxed text-lg max-w-3xl mx-auto mml-lp-about__desc">
                <p>
                  M. M. Lazaro and Associates is an established, full-service law firm with an impeccable record in its more than four (4) decades of providing premier legal service.
                </p>
                <p>
                  Leveraging its collective expertise, the Firm is committed to advocating its clients&apos; legal and business interests with the highest degree of competence and integrity.
                </p>
              </div>
              <div className="relative pt-20 max-w-4xl mx-auto mml-lp-about__quote-container">
                <span className="absolute -top-10 -left-20 text-[280px] z-20 text-tertiary/20 font-serif leading-none italic mml-lp-about__quote-symbol pointer-events-none select-none">&ldquo;</span>
                <blockquote className="relative z-10 bg-white p-12 md:p-16 border-l-8 border-tertiary italic font-sans text-primary text-xl md:text-2xl shadow-2xl mml-lp-about__quote leading-relaxed text-left">
                  An innovative law firm by building long-term relationships with clients based on reciprocity, trust and highest standards of professional ethics. By adopting new models for the delivery of legal services, we strive to redefine the role that a law firm plays in an emerging regional market, in order to produce truly exceptional results for our clients.
                </blockquote>
              </div>
            </Reveal>
          </div>
          {/* Subtle Decorative element */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full -translate-x-1/2 pointer-events-none" />
        </section>

        {/* LAWYER CAROUSEL SECTION */}
        <section id="mml-lp-lawyers" className="mml-lp-lawyers">
          <LawyerCarousel />
        </section>

        {/* PRACTICE DASHBOARD - MASSIVE SCALE FIG */}
        <section id="mml-lp-practice" className="py-24 md:py-48 px-6 md:px-12 bg-[#F5F5F3] relative overflow-hidden flex items-center min-h-[600px] md:min-h-[900px] mml-res-container">
          {/* Practice Area massive graphic: Off-screen left logic for mobile/desktop */}
          <div className="absolute -left-[300px] lg:-left-[200px] top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none z-0">
            <div className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full border-[30px] md:border-[60px] border-primary/20 flex items-center justify-center">
              <div className="w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full border-[20px] md:border-[40px] border-primary/10 flex items-center justify-center">
                <Scale size={300} className="text-primary/5 translate-x-[100px] md:translate-x-[150px]" />
              </div>
            </div>
          </div>

          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 relative z-10 w-full mml-res-container">
            <Reveal
              style={{ overflow: "visible" }}
              className="col-start-1 row-start-1 lg:relative h-64 md:h-full lg:h-auto flex items-center justify-center lg:justify-start z-0"
            >
              {/* CORE GRAPHIC - Icon Hub (Green in diagram) with overflow visible for bleeding icons */}
              <div className="w-64 h-64 md:w-[500px] md:h-[500px] lg:w-[480px] lg:h-[480px] rounded-full border border-primary/20 flex items-center justify-center relative bg-white/40 backdrop-blur-xl shadow-2xl transition-all duration-1000">


                {/* Inner hub ring */}
                <div className="w-[85%] h-[85%] rounded-full border border-primary/10 flex items-center justify-center relative mml-lp-practice__core-inner lg:bg-white/10">
                  <div className="w-full h-full rounded-full bg-primary/5 ring-[15px] ring-primary/5 flex items-center justify-center ml-lp-practice__core-hub">
                    <Scale size={160} className="text-tertiary/20" />
                  </div>
                </div>

                {/* Floating icons with shadows - Now fully visible due to overflow override */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-6 shadow-2xl ring-1 ring-ghost rounded-sm z-20 mml-lp-practice__icon-1">
                  <Building2 size={36} className="text-secondary" />
                </div>
                <div className="absolute top-1/2 -left-10 -translate-y-1/2 bg-white p-6 shadow-2xl ring-1 ring-ghost rounded-sm z-20 mml-lp-practice__icon-2">
                  <Award size={36} className="text-tertiary" />
                </div>
                <div className="absolute bottom-1/2 -right-10 translate-y-1/2 bg-white p-6 shadow-2xl ring-1 ring-ghost rounded-sm z-20 mml-lp-practice__icon-3">
                  <Gavel size={36} className="text-primary/40" />
                </div>
              </div>
            </Reveal>

            <div className="col-start-1 row-start-1 lg:col-start-2 lg:row-start-auto z-10 space-y-12 md:space-y-16 mml-res-stack--mobile">
              <RevealStagger className="space-y-6">
                <span className="text-tertiary uppercase tracking-[0.5em] font-sans font-bold text-[10px] inline-block">Expertise Dashboard</span>
                <h2 className="text-4xl md:text-5xl font-serif text-primary uppercase leading-tight font-black mml-res-text--fluid-lg">Our Practice Areas</h2>
                <p className="text-primary/60 font-sans max-w-xl leading-relaxed mml-res-text--fluid">
                  A vision to create a true corporate meritocracy dedicated to excellence in the practice of law.
                </p>
              </RevealStagger>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

                {practiceAreas.map((area) => (
                  <Reveal key={area.id} width="100%" className="h-full">
                    <button
                      onClick={() => setActivePractice(activePractice === area.id ? null : area.id)}
                      className={`text-left p-12 transition-all duration-500 border border-tertiary/10 w-full h-[320px] relative group flex flex-col overflow-hidden mml-lp-practice__card ${activePractice === area.id
                        ? 'bg-neutral ring-1 ring-tertiary/20 shadow-2xl'
                        : 'bg-white text-primary hover:bg-neutral'
                        }`}
                    >
                      <div className="flex flex-col gap-8 h-full mml-lp-practice__card-base">
                        <area.icon size={32} className={`${activePractice === area.id ? 'text-secondary' : 'text-tertiary'} transition-colors duration-500`} />
                        <h3 className="font-serif text-xl uppercase tracking-tighter leading-tight font-black pr-8">
                          {area.title}
                        </h3>
                      </div>

                      {/* CONSTANT HEIGHT OVERLAY LOGIC */}
                      <AnimatePresence>
                        {activePractice === area.id && (
                          <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 z-20 glass-overlay p-12 flex flex-col justify-center mml-lp-practice__card-overlay"
                          >
                            <p className="font-sans text-[13px] text-white leading-relaxed mml-lp-practice__card-desc">
                              {area.desc}
                            </p>
                            <div className="mt-8 pt-4 border-t border-white/20">
                              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-white uppercase italic">Case Inquiry Required</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="relative">
          {/* QUICK LINKS - OVERLAY POSITION BETWEEN SECTIONS */}
          <section id="mml-lp-quick-links" className="px-6 md:px-12 relative z-30 -translate-y-[10%] md:-translate-y-[20%]">
            <div className="max-w-screen-2xl mx-auto mml-res-container">
              <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {[
                  { name: "About the Firm", href: "/about" },
                  { name: "Our Lawyers", href: "/lawyers" },
                  { name: "Practice Areas", href: "/practice-areas" },
                ].map((link, i) => (
                  <Link key={i} href={link.href} className="group relative block aspect-[16/7] overflow-hidden bg-primary shadow-2xl rounded-sm mml-lp-quick-links__link">
                    {/* Gold Frame Effect literal look-a-like */}
                    <div className="absolute inset-4 border-[0.5px] border-tertiary/20 z-20 group-hover:border-tertiary group-hover:inset-3 transition-all duration-500 mml-lp-quick-links__frame" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A243F] via-[#232D4B] to-[#0A0E1A] z-10 mml-lp-quick-links__gradient" />
                    <div className="relative z-30 h-full w-full p-8 lg:p-10 flex flex-col justify-end mml-lp-quick-links__content">
                      <span className="text-tertiary uppercase tracking-[0.4em] font-sans font-bold text-[8px] mb-2 opacity-60 group-hover:opacity-100 transition-opacity mml-lp-quick-links__tag">Explore</span>
                      <h3 className="text-xl lg:text-2xl font-serif text-white uppercase tracking-tight mml-lp-quick-links__title leading-tight">{link.name}</h3>
                    </div>
                    <div className="absolute top-0 right-0 p-8 z-30 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 group-hover:-translate-y-2 mml-lp-quick-links__icon">
                      <ArrowRight size={20} className="text-tertiary" />
                    </div>
                  </Link>
                ))}
              </RevealStagger>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="mml-lp-contact" className="py-48 pb-64 px-12 bg-primary font-sans mt-[-100px] pt-[200px] text-white mml-lp-contact">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
              {/* Left: Info & Map */}
              <div className="lg:w-1/2 space-y-12">
                <RevealStagger className="space-y-10">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-serif text-white uppercase font-black">Contact Section</h2>
                    <div className="space-y-4 font-sans text-sm text-white/60">
                      <p className="font-bold text-tertiary tracking-widest text-xs uppercase">Location</p>
                      <p className="text-lg leading-relaxed text-white">
                        19th Floor Chatham House Building<br />Valero cor. V.A. Rufino Sts.<br />Salcedo Village, Makati City 1227
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm font-sans pt-8 border-t border-white/5">
                    <p className="flex gap-4 items-center"><Phone size={16} className="text-tertiary" /> <span className="font-bold text-white tracking-tighter self-center">+63 987 654 321</span></p>
                    <p className="flex gap-4 items-center"><Mail size={16} className="text-tertiary" /> <span className="font-bold text-white tracking-tighter self-center">example@example.com</span></p>
                  </div>
                  {/* Styled Map Placeholder */}
                  <div className="relative h-[450px] w-full overflow-hidden shadow-ambient ring-1 ring-ghost grayscale group rounded-sm">
                    <div className="absolute inset-0 bg-primary/40 z-10 mix-blend-multiply" />
                    <Image src="/asset/office/5.jpg" alt="Map" fill className="object-cover opacity-50 contrast-125 transition-transform duration-[2000ms] group-hover:scale-110" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-tertiary/20 blur-xl rounded-full scale-150 animate-pulse" />
                        <MapPin size={48} className="text-tertiary relative z-10" />
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
                      <div className="grid grid-cols-10 w-full h-full">
                        {Array.from({ length: 100 }).map((_, i) => <div key={i} className="border-[0.5px] border-white/5" />)}
                      </div>
                    </div>
                  </div>
                </RevealStagger>
              </div>

              {/* Right: Form */}
              <div className="lg:w-1/2 p-16 bg-primary rounded-sm shadow-2xl relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 wood-strip pointer-events-none scale-150 rotate-3" />
                <RevealStagger className="relative z-10 space-y-12">
                  <div className="space-y-4">
                    <span className="text-tertiary uppercase tracking-[0.5em] font-sans font-bold text-[10px]">Case Inquiry</span>
                    <h3 className="text-5xl font-serif text-white uppercase tracking-tight font-black">Request Counsel</h3>
                    <p className="text-white/40 font-sans text-xs">A designated representative will respond to your inquiry within 24 hours.</p>
                  </div>
                  <form className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">NAME</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm focus:pl-4" placeholder="Full Name" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">EMAIL</label>
                        <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm focus:pl-4" placeholder="email@address.com" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">MESSAGE</label>
                      <textarea rows={5} className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm resize-none focus:pl-4" placeholder="Describe your case or inquiry..." />
                    </div>
                    <button type="submit" className="glow-gold w-full py-6 rounded-sm text-primary font-sans font-bold tracking-[0.4em] text-[12px] uppercase">
                      SEND MESSAGE
                    </button>
                  </form>
                </RevealStagger>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
