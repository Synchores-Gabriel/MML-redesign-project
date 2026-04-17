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
import { BrandLogo } from "@/components/BrandLogo";
import { PracticeAreasLeftColumn } from "@/components/PracticeAreasLeftColumn";
import { useMemo, useState, useEffect } from "react";
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

function HeroSubtitleLayer({
  currentSlide,
  isDesktop,
}: {
  currentSlide: number;
  isDesktop: boolean;
}) {
  const shot = getSubtitleShot(currentSlide);
  const isShot1 = shot === 0;
  const isShot2 = shot === 1;
  const isShot3 = shot === 2;

  const [revealDone, setRevealDone] = useState(false);

  useEffect(() => {
    setRevealDone(false);
  }, [currentSlide]);

  const maskCommon = useMemo(
    () =>
      ({
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }) as const,
    [],
  );

  const maskLtoR = useMemo(
    () =>
      ({
        // One-sided feather: only the leading edge is transparent.
        // This prevents any trailing-edge “fade-out” while drifting.
        maskImage: "linear-gradient(90deg, transparent 0%, #000 16%, #000 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 16%, #000 100%)",
        maskSize: "220% 100%",
        WebkitMaskSize: "220% 100%",
      }) as const,
    [],
  );

  const maskRtoL = useMemo(
    () =>
      ({
        maskImage: "linear-gradient(90deg, #000 0%, #000 84%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, #000 0%, #000 84%, transparent 100%)",
        maskSize: "220% 100%",
        WebkitMaskSize: "220% 100%",
      }) as const,
    [],
  );

  const maskTtoB = useMemo(
    () =>
      ({
        maskImage: "linear-gradient(180deg, transparent 0%, #000 16%, #000 100%)",
        WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 16%, #000 100%)",
        maskSize: "100% 220%",
        WebkitMaskSize: "100% 220%",
      }) as const,
    [],
  );

  const solidMask = useMemo(
    () =>
      ({
        maskImage: "linear-gradient(#000, #000)",
        WebkitMaskImage: "linear-gradient(#000, #000)",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskPosition: "0% 0%",
        WebkitMaskPosition: "0% 0%",
      }) as const,
    [],
  );

  const revealStart = isShot1
    ? { maskPosition: "0% 0%", WebkitMaskPosition: "0% 0%" } // L→R (starts at transp side)
    : isShot2
      ? { maskPosition: "100% 0%", WebkitMaskPosition: "100% 0%" } // R→L
      : { maskPosition: "0% 0%", WebkitMaskPosition: "0% 0%" }; // T→B

  const revealEnd = isShot1
    ? { maskPosition: "100% 0%", WebkitMaskPosition: "100% 0%" }
    : isShot2
      ? { maskPosition: "0% 0%", WebkitMaskPosition: "0% 0%" }
      : { maskPosition: "0% 100%", WebkitMaskPosition: "0% 100%" };

  const clipStart = isShot1
    ? { clipPath: "inset(-120px 100% -120px -120px)", WebkitClipPath: "inset(-120px 100% -120px -120px)" }
    : isShot2
      ? { clipPath: "inset(-120px -120px -120px 100%)", WebkitClipPath: "inset(-120px -120px -120px 100%)" }
      : { clipPath: "inset(100% -120px -120px -120px)", WebkitClipPath: "inset(100% -120px -120px -120px)" };

  const clipEnd = { clipPath: "inset(-120px -120px -120px -120px)", WebkitClipPath: "inset(-120px -120px -120px -120px)" };

  const endX = isDesktop ? "4%" : "2%";

  const motionInitial = isShot1
    ? { x: "-2%", y: "0%", scale: 1, ...revealStart, ...clipStart }
    : isShot2
      ? { x: "2%", y: "4%", scale: 1, ...revealStart, ...clipStart }
      : { x: "0%", y: "0%", scale: 1.4, ...revealStart, ...clipStart };

  const motionAnimate = isShot1
    ? { x: "0%", y: "0%", scale: 1, ...revealEnd, ...clipEnd }
    : isShot2
      ? { x: "0%", y: "8%", scale: 1, ...revealEnd, ...clipEnd }
      : { x: "0%", y: "0%", scale: 1.0, ...revealEnd, ...clipEnd };

  const duration = isShot3 ? 0.8 : 1.2;

  return (
    <div className="absolute inset-0 z-[35] pointer-events-none overflow-visible">
      <div className={`absolute left-1/2 top-[38%] md:top-[40%] -translate-x-1/2 -translate-y-1/2 w-full px-6 md:px-12 flex ${isShot1 ? 'justify-start' : isShot2 ? 'justify-end' : 'justify-center'} overflow-visible`}>
        <motion.p
          key={currentSlide}
          initial={motionInitial}
          animate={motionAnimate}
          transition={{ duration, ease: "easeOut" }}
          onAnimationComplete={() => setRevealDone(true)}
          className={[
            "select-none",
            "font-sans font-bold",
            "text-white/35",
            isShot1 ? "text-left" : isShot2 ? "text-right" : "text-center",
            "leading-[1.12]",
            "whitespace-normal",
            "break-words",
            isShot3 ? "mx-auto" : "",
            "max-w-[min(86vw,44rem)] md:max-w-[min(78vw,52rem)]",
            "text-[clamp(1.45rem,3.6vw,3.5rem)]",
            "overflow-visible",
            "py-20", // Expand bounding box for shadow safety
          ].join(" ")}
          style={{
            textShadow: "0 12px 40px rgba(0,0,0,0.35)",
            ...(revealDone
              ? { maskImage: "none", WebkitMaskImage: "none", clipPath: "none", WebkitClipPath: "none" }
              : {
                ...maskCommon,
                ...(isShot3 ? maskTtoB : isShot2 ? maskRtoL : maskLtoR),
              }),
          }}
        >
          {HERO_SLIDES[currentSlide].subtitle}
        </motion.p>
      </div>
    </div>
  );
}

export default function Home() {
  const [activePractice, setActivePractice] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // 6 seconds rotation
    return () => clearInterval(timer);
  }, []);

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

          <HeroSubtitleLayer currentSlide={currentSlide} isDesktop={isDesktop} />

          {/* Content container — anchored to bottom-left, occupying bottom 50% of hero */}
          <div className="absolute bottom-0 left-0 right-0 z-30 h-[50vh] flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-16">
            <div className="max-w-screen-2xl mx-auto w-full">
              <RevealStagger className="space-y-5 max-w-6xl md:max-w-6xl mml-lp-hero__stagger">
                <div className="space-y-4 mml-res-stack--mobile">
                  {/* GRAND LOGO & NAME IDENTITY */}
                  <div className="mml-hero-lp__brand-wrap">
                    <BrandLogo
                      textClassName="text-tertiary"
                      size="lg"
                      withShadow={false} //removed shadow on logo text for now
                    />
                  </div>
                </div>

                <div className="flex gap-5 mml-lp-hero__actions">
                  <Link href="#mml-lp-about" className="glow-gold px-8 py-3 md:px-10 md:py-4 rounded-[0.25rem] text-primary font-sans font-bold tracking-[0.2em] text-xs uppercase mml-lp-hero__btn-more inline-block">
                    MORE ABOUT US
                  </Link>
                </div>
              </RevealStagger>
            </div>
          </div>
        </section>

        {/* HERO SECTION 2 - BRANDED STRIP 1 */}
        <section id="mml-lp-strip-1" className="relative min-h-[300px] md:h-[400px] flex items-center justify-start text-left px-6 md:px-24 overflow-hidden">
          {/* Ken Burns Background */}
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ scale: 1, x: 0 }}
              animate={{ scale: 1.1, x: "2%" }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-x-[-5%] inset-y-[-5%] wood-strip opacity-100"
            />
          </div>
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
        <section id="mml-lp-strip-2" className="relative min-h-[300px] md:h-[400px] flex items-center justify-end text-right px-6 md:px-24 bg-[#1A243F] overflow-hidden">
          {/* Ken Burns Background Overlay */}
          <div className="absolute inset-0 z-0 opacity-10">
            <motion.div
              initial={{ scale: 1.1, y: 0 }}
              animate={{ scale: 1.2, y: "-2%" }}
              transition={{
                duration: 12,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-x-[-10%] inset-y-[-10%] wood-strip"
            />
          </div>
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
        <section id="mml-lp-about" className="py-20 md:py-32 px-6 md:px-12 wood-dark relative overflow-hidden">
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
        <section id="mml-lp-practice" className="pt-20 md:pt-32 pb-0 bg-[#F5F5F3] relative overflow-hidden">
          {/* CONTENT CONTAINER - LOCKS TO THEME WIDTH */}
          <div className="mml-res-container px-6 md:px-12 w-full flex items-center min-h-[500px] md:min-h-[750px] relative z-20">
            {/* Practice Area massive decorative background scale */}
            <div className="absolute -left-[300px] lg:-left-[200px] top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none z-0">
              <div className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full border-[30px] md:border-[60px] border-primary/20 flex items-center justify-center">
                <div className="w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full border-[20px] md:border-[40px] border-primary/10 flex items-center justify-center">
                  <Scale size={300} className="text-primary/5 translate-x-[100px] md:translate-x-[150px]" />
                </div>
              </div>
            </div>

            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 sm:pb-[0px] md:pb-[200px] xl:pb-[0px] items-center gap-12 lg:gap-24 relative z-10 w-full mml-res-container">
              <PracticeAreasLeftColumn
                activePractice={activePractice}
                isDesktop={isDesktop}
              />

              <div className="col-start-1 row-start-1 lg:col-start-2 lg:row-start-auto z-10 space-y-12 md:space-y-16 mml-res-stack--mobile">
                <RevealStagger className="space-y-6">
                  <span className="text-tertiary uppercase tracking-[0.5em] font-sans font-bold text-[10px] inline-block">Expertise Dashboard</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-primary uppercase leading-tight font-black mml-res-text--fluid-lg">Our Practice Areas</h2>
                  <p className="text-primary/60 font-sans text-base font-medium max-w-xl leading-relaxed mml-res-text--fluid">
                    A vision to create a true corporate meritocracy dedicated to excellence in the practice of law.
                  </p>
                </RevealStagger>

                <div className="grid grid-cols-1 md:grid-cols-2 md:pb-[200px] lg:pb-[0px] gap-6 items-stretch">

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
          </div>
        </section>

        <LogoMarquee />

        <div className="relative">
          {/* QUICK LINKS - OVERLAY POSITION BETWEEN SECTIONS */}
          <QuickLinks translateClass="-translate-y-[20%] md:-translate-y-[35%]" links={[
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
