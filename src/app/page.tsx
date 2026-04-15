"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroGridOverlay } from "@/components/HeroGridOverlay";
import { GridAnimation } from "@/components/GridAnimation";
import { LawyerCarousel } from "@/components/LawyerCarousel";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { QuickLinks } from "@/components/QuickLinks";
import { LogoMarquee } from "@/components/LogoMarquee";
import { useState, useEffect } from "react";
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

const HERO_SLIDES = [
  {
    video: "/asset/vid/hero1.mp4",
    subtitle: "Expert Legal Solutions for the Philippines"
  },
  {
    video: "/asset/vid/hero2.mp4",
    subtitle: "Navigating Complex Corporate Challenges"
  },
  {
    video: "/asset/vid/hero3.mp4",
    subtitle: "Dedicated to Protecting Your Family’s Legacy"
  }
];

type SubtitleShot = 0 | 1 | 2;

function getSubtitleShot(slideIndex: number): SubtitleShot {
  if (slideIndex === 1) return 1;
  if (slideIndex === 2) return 2;
  return 0;
}

export default function Home() {
  const [activePractice, setActivePractice] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [radius, setRadius] = useState('180px');
  const orbitTransition = { ease: "easeOut", duration: 0.3 } as const;

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // 6 seconds rotation
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth >= 1024) setRadius('240px');
      else if (window.innerWidth >= 768) setRadius('200px');
      else setRadius('180px');
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  useEffect(() => {
    if (activePractice) {
      const iconAngles: Record<string, number> = {
        corp: 90,
        lit: 180,
        real: 270,
        tax: 0,
      };
      const targetAngle = 90 - iconAngles[activePractice];
      setOrbitAngle(targetAngle);
    } else {
      setOrbitAngle(0);
    }
  }, [activePractice]);

  return (
    <>
      <Header />

      <main className="flex-grow scroll-smooth bg-neutral">
        {/* HERO SECTION 1 - CINEMATIC SQUARE GRID */}
        <section id="mml-lp-hero" className="relative min-h-screen overflow-hidden bg-primary">

          {/* BACKGROUND VIDEO SLIDER */}
          <div className="mml-hero-lp__bg-slider absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.6, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="mml-hero-lp__bg-item absolute inset-0 w-full h-full"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={HERO_SLIDES[currentSlide].video} type="video/mp4" />
                </video>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent z-10" />

          {/* Hydration-safe Grid Overlay */}
          <HeroGridOverlay />

          {/* Subtitle layer — absolute, above foreground content */}
          <div className="absolute inset-0 z-[35] pointer-events-none">
            {(() => {
              const shot = getSubtitleShot(currentSlide);
              const isShot1 = shot === 0;
              const isShot2 = shot === 1;
              const isShot3 = shot === 2;

              const maskCommon = {
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              } as const;

              const maskLR = {
                maskImage:
                  "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                maskSize: "220% 100%",
                WebkitMaskSize: "220% 100%",
              } as const;

              const maskTB = {
                maskImage:
                  "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                maskSize: "100% 220%",
                WebkitMaskSize: "100% 220%",
              } as const;

              const revealStart =
                isShot1
                  ? { maskPosition: "100% 0%", WebkitMaskPosition: "100% 0%" } // L→R
                  : isShot2
                    ? { maskPosition: "0% 0%", WebkitMaskPosition: "0% 0%" } // R→L
                    : { maskPosition: "0% 100%", WebkitMaskPosition: "0% 100%" }; // T→B

              const revealEnd =
                isShot1
                  ? { maskPosition: "0% 0%", WebkitMaskPosition: "0% 0%" }
                  : isShot2
                    ? { maskPosition: "100% 0%", WebkitMaskPosition: "100% 0%" }
                    : { maskPosition: "0% 0%", WebkitMaskPosition: "0% 0%" };

              const clipStart = isShot1
                ? { clipPath: "inset(0 100% 0 0)", WebkitClipPath: "inset(0 100% 0 0)" }
                : isShot2
                  ? { clipPath: "inset(0 0 0 100%)", WebkitClipPath: "inset(0 0 0 100%)" }
                  : { clipPath: "inset(100% 0 0 0)", WebkitClipPath: "inset(100% 0 0 0)" };

              const clipEnd = { clipPath: "inset(0 0 0 0)", WebkitClipPath: "inset(0 0 0 0)" };

              const endX = isDesktop ? "15%" : "8%";
              const motionInitial = isShot1
                ? { x: "0%", y: "0%", scale: 1, ...revealStart, ...clipStart }
                : isShot2
                  ? { x: "0%", y: "6%", scale: 1, ...revealStart, ...clipStart }
                  : { x: "0%", y: "0%", scale: 1.4, ...revealStart, ...clipStart };

              const motionAnimate = isShot1
                ? { x: `-${endX}`, y: "0%", scale: 1, ...revealEnd, ...clipEnd }
                : isShot2
                  ? { x: endX, y: "10%", scale: 1, ...revealEnd, ...clipEnd }
                  : { x: "0%", y: "0%", scale: 1.0, ...revealEnd, ...clipEnd };

              const duration = isShot3 ? 0.8 : 1.2;

              return (
                <div
                  className={[
                    "absolute left-1/2 top-[38%] md:top-[40%] -translate-x-1/2 -translate-y-1/2 w-full px-6 md:px-12",
                    "flex justify-center",
                  ].join(" ")}
                >
                  <motion.p
                    key={currentSlide}
                    initial={motionInitial}
                    animate={motionAnimate}
                    transition={{ duration, ease: "easeOut" }}
                    className={[
                      "select-none",
                      "font-sans font-bold",
                      "text-white/35",
                      isShot1 ? "text-left" : isShot2 ? "text-right" : "text-center",
                      "leading-[1.12]",
                      "whitespace-normal",
                      "break-words",
                      "mx-auto",
                      "max-w-[min(86vw,44rem)] md:max-w-[min(78vw,52rem)]",
                      "text-[clamp(1.45rem,3.6vw,3.5rem)]",
                    ].join(" ")}
                    style={{
                      ...maskCommon,
                      ...(isShot3 ? maskTB : maskLR),
                      textShadow: "0 12px 40px rgba(0,0,0,0.35)",
                    }}
                  >
                    {HERO_SLIDES[currentSlide].subtitle}
                  </motion.p>
                </div>
              );
            })()}
          </div>

          {/* Content container — anchored to bottom-left, occupying bottom 50% of hero */}
          <div className="absolute bottom-0 left-0 right-0 z-30 h-[50vh] flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-16">
            <div className="max-w-screen-2xl mx-auto w-full">
              <RevealStagger className="space-y-5 max-w-6xl md:max-w-6xl mml-lp-hero__stagger">
                <div className="space-y-4 mml-res-stack--mobile">
                  <span className="text-tertiary uppercase tracking-[0.5em] font-sans font-bold text-[10px] md:text-xs inline-block">Established 1970</span>

                  {/* GRAND LOGO & NAME IDENTITY */}
                  <div className="mml-hero-lp__brand-wrap flex items-center gap-4 md:gap-6">
                    <div className="relative w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0 drop-shadow-2xl">
                      <Image
                        src="/asset/mma-logo-hq.png"
                        alt="MML Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h1
                      className="mml-hero-lp__logo-text font-serif uppercase tracking-wider leading-snug text-tertiary font-semibold"
                      style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5), 0 4px 32px rgba(179,142,62,0.2)' }}
                    >
                      <span className="block text-2xl md:text-4xl lg:text-5xl">MM. LAZARO and ASSOCIATES</span>
                      <span className="block text-2xl md:text-4xl lg:text-5xl">LAW OFFICES</span>
                    </h1>
                  </div>

                  <p className="text-neutral/60 font-sans text-sm md:text-base font-medium max-w-xl leading-relaxed">
                    Precision legal counsel grounded in heritage and modern jurisprudence.
                  </p>
                </div>

                <div className="flex gap-5 mml-lp-hero__actions">
                  <Link href="#mml-lp-about" className="glow-gold px-8 py-3 md:px-10 md:py-4 rounded-[0.25rem] text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mml-lp-hero__btn-more inline-block">
                    MORE ABOUT US
                  </Link>
                  <div className="w-px h-10 bg-white/10 hidden md:block mml-lp-hero__divider" />
                  <button className="group flex items-center gap-3 text-white font-sans font-bold tracking-[0.2em] text-xs uppercase hover:text-tertiary transition-colors duration-400 mml-lp-hero__btn-consult">
                    CONSULT NOW <span className="bg-white/10 p-2 rounded-full group-hover:bg-tertiary/20 group-hover:pl-4 transition-all duration-400 mml-lp-hero__btn-icon"><ArrowRight size={14} /></span>
                  </button>
                </div>
              </RevealStagger>
            </div>
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
            <p className="text-neutral/40 font-sans text-base font-medium max-w-2xl ml-auto leading-relaxed mml-lp-strip__desc">
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
          <div className="flex justify-center max-w-screen-2xl mx-auto text-center space-y-16 relative z-10 mml-res-container">
            <Reveal className="space-y-12 flex flex-col items-center">
              <div className="space-y-6 flex flex-col items-center">
                <span className="text-tertiary uppercase tracking-[0.6em] font-sans font-bold text-[10px] md:text-xs text-center">The Legacy</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white uppercase leading-tight font-black mml-res-text--fluid-lg text-center">Authority of Experience.</h2>
              </div>

              <div className="space-y-8 text-neutral/60 font-sans leading-relaxed text-lg max-w-3xl mx-auto text-center mml-lp-about__desc">
                <p>
                  M. M. Lazaro and Associates is an established, full-service law firm with an impeccable record in its more than four (4) decades of providing premier legal service.
                </p>
                <p>
                  Leveraging its collective expertise, the Firm is committed to advocating its clients&apos; legal and business interests with the highest degree of competence and integrity.
                </p>
              </div>
              <div className="relative max-w-4xl mx-auto w-full mml-lp-about__quote-container">
                <span className="absolute top-0 left-0 -translate-y-[20%] translate-x-[40%] text-[220px] z-20 text-tertiary font-serif leading-none italic mml-lp-about__quote-symbol pointer-events-none select-none">&ldquo;</span>
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
              <motion.div
                animate={{ rotate: orbitAngle }}
                transition={orbitTransition}
                className="w-64 h-64 md:w-[500px] md:h-[500px] lg:w-[480px] lg:h-[480px] rounded-full border border-primary/20 flex items-center justify-center relative bg-white/40 backdrop-blur-xl shadow-2xl transition-all duration-1000"
              >


                {/* Inner hub ring */}
                <div className="w-[85%] h-[85%] rounded-full border border-primary/10 flex items-center justify-center relative mml-lp-practice__core-inner lg:bg-white/10">
                  <div className="w-full h-full rounded-full bg-primary/5 ring-[15px] ring-primary/5 flex items-center justify-center ml-lp-practice__core-hub">
                    {/* Counter-rotate icon so it stays upright while orbit rotates */}
                    <motion.div
                      animate={{ rotate: -orbitAngle }}
                      transition={orbitTransition}
                    >
                      <Scale size={160} className="text-tertiary/20" />
                    </motion.div>
                  </div>
                </div>

                {/* Floating icons with shadows - Now fully visible due to overflow override */}
                <div className="absolute top-1/2 left-1/2 bg-white p-6 shadow-2xl ring-1 ring-ghost rounded-sm z-20 mml-lp-practice__icon-1" style={{ transform: `translate(-50%, -50%) rotate(90deg) translate(${radius}) rotate(-90deg)` }}>
                  <motion.div
                    animate={{ rotate: -orbitAngle }}
                    transition={orbitTransition}
                  >
                    <Building2 size={36} className="text-secondary" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 left-1/2 bg-white p-6 shadow-2xl ring-1 ring-ghost rounded-sm z-20 mml-lp-practice__icon-2" style={{ transform: `translate(-50%, -50%) rotate(180deg) translate(${radius}) rotate(-180deg)` }}>
                  <motion.div
                    animate={{ rotate: -orbitAngle }}
                    transition={orbitTransition}
                  >
                    <Gavel size={36} className="text-primary/40" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 left-1/2 bg-white p-6 shadow-2xl ring-1 ring-ghost rounded-sm z-20 mml-lp-practice__icon-3" style={{ transform: `translate(-50%, -50%) rotate(270deg) translate(${radius}) rotate(-270deg)` }}>
                  <motion.div
                    animate={{ rotate: -orbitAngle }}
                    transition={orbitTransition}
                  >
                    <Landmark size={36} className="text-primary/40" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 left-1/2 bg-white p-6 shadow-2xl ring-1 ring-ghost rounded-sm z-20 mml-lp-practice__icon-4" style={{ transform: `translate(-50%, -50%) rotate(0deg) translate(${radius}) rotate(0deg)` }}>
                  <motion.div
                    animate={{ rotate: -orbitAngle }}
                    transition={orbitTransition}
                  >
                    <Calculator size={36} className="text-tertiary" />
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>

            <div className="col-start-1 row-start-1 lg:col-start-2 lg:row-start-auto z-10 space-y-12 md:space-y-16 mml-res-stack--mobile">
              <RevealStagger className="space-y-6">
                <span className="text-tertiary uppercase tracking-[0.5em] font-sans font-bold text-[10px] inline-block">Expertise Dashboard</span>
                <h2 className="text-4xl md:text-5xl font-serif text-primary uppercase leading-tight font-black mml-res-text--fluid-lg">Our Practice Areas</h2>
                <p className="text-primary/60 font-sans text-base font-medium max-w-xl leading-relaxed mml-res-text--fluid">
                  A vision to create a true corporate meritocracy dedicated to excellence in the practice of law.
                </p>
              </RevealStagger>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

                {practiceAreas.map((area) => (
                  <Reveal key={area.id} width="100%" className="h-full">
                    <button
                      onClick={() => setActivePractice(activePractice === area.id ? null : area.id)}
                      {...(isDesktop && {
                        onMouseEnter: () => setActivePractice(area.id),
                        onMouseLeave: () => setActivePractice(null)
                      })}
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
                            <p className="font-sans text-sm text-white leading-relaxed mml-lp-practice__card-desc">
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

        <LogoMarquee />

        <div className="relative">
          {/* QUICK LINKS - OVERLAY POSITION BETWEEN SECTIONS */}
          <QuickLinks translateClass="-translate-y-[10%] md:-translate-y-[25%]" links={[
            { name: "About the Firm", href: "/about" },
            { name: "Our Lawyers", href: "/lawyers" },
            { name: "Practice Areas", href: "/practice-areas" },
          ]} />

          {/* CONTACT SECTION — Uses shared component */}
          <ContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
