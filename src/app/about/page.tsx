"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { HeroGridOverlay } from "@/components/HeroGridOverlay";
import { QuickLinks } from "@/components/QuickLinks";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />

      <main className="flex-grow text-primary">
        {/* Hidden SVG for Precision Clipping of Headshot */}
        <svg width="0" height="0" className="absolute pointer-events-none opacity-0">
          <defs>
            <clipPath id="popout-clip-js" clipPathUnits="objectBoundingBox">
              {/* 
                Mathematical Pop-out Path:
                Rectangle for top 60% (Headroom + Upper half of circle)
                Semi-circle for bottom 40% (Lower half of circle)
                Ensures 100% cross-browser reliability (Safari/Firefox)
              */}
              <path d="M0,0 H1 V0.6 A0.5,0.4 0 0,1 0,0.6 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* 1. HERO SECTION - DARK WITH QUOTE BLOCK */}
        <section id="mml-ab-hero" className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-12 bg-[#4A4A4A] text-white flex flex-col items-center overflow-hidden">
          {/* Grid Overlay */}
          <HeroGridOverlay />
          <RevealStagger className="w-full max-w-screen-2xl mx-auto flex flex-col items-center space-y-16 mml-res-container">

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white uppercase leading-tight font-black mml-ab-hero__title mml-res-text--fluid-lg">
              About the Firm
            </h1>

            {/* Quote Block - Replicated from Landing Page Style */}
            <div className="relative pt-20 max-w-4xl mx-auto mml-ab-hero__quote-container">
              {/* Large Quote Symbol */}
              <span className="absolute top-10 left-10 md:left-10 text-[200px] md:text-[280px] z-20 text-tertiary font-serif leading-none italic pointer-events-none select-none mml-ab-hero__quote-symbol">
                &ldquo;
              </span>

              <blockquote className="relative z-10 bg-white p-10 md:p-16 border-l-8 border-tertiary italic font-sans text-primary text-xl md:text-2xl shadow-2xl leading-relaxed text-left mml-ab-hero__quote">
                An innovative law firm by building long-term relationships with clients based on reciprocity, trust and highest standards of professional ethics. By adopting new models for the delivery of legal services, we strive to redefine the role that a law firm plays in an emerging regional market, in order to produce truly exceptional results for our clients.
              </blockquote>
            </div>
          </RevealStagger>
        </section>

        {/* 2. DISCOVERY SECTION - 2 COLUMN WITH OVERFLOW HEADSHOT */}
        <section id="mml-ab-discovery" className="pt-24 md:pt-48 pb-24 md:pb-32 px-6 md:px-12 relative overflow-hidden bg-neutral">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 mml-res-container">

            {/* Left Column: Complex Overflow Headshot - Cross-Browser Precision Fix */}
            <div className="relative flex justify-center lg:justify-start mml-ab-discovery__image-col h-[400px] md:h-[600px] mml-res-stack--mobile">

              {/* Outer Wrapper with overflow-visible to show the head popping out */}
              <Reveal
                className="relative w-full h-full flex items-end justify-center lg:justify-start mml-ab-discovery__headshot-container"
                style={{ overflow: "visible" }}
              >
                {/* 1. Circular Background Layer */}
                <div
                  className="absolute bottom-0 w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full bg-[#E2E8F0] shadow-inner aspect-square"
                />


                {/* 2. Image Layer - Integrated Bounding Box Clipping */}
                <div
                  className="relative w-[280px] h-[350px] md:w-[480px] md:h-[600px] pointer-events-none"
                  style={{ clipPath: 'url(#popout-clip-js)' }}
                >

                  {/* Container height is 600px (1.25x circle height of 480px) */}
                  <div className="absolute inset-0 w-full h-full flex items-end justify-center scale-110">
                    <Image
                      src="/asset/avatar/JusticeManuelLazaro-3679-transparent.png"
                      alt="Justice Manuel Lazaro"
                      fill
                      className="object-contain object-bottom mml-ab-discovery__headshot-img"
                      priority
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Text Bio */}
            <RevealStagger className="space-y-8 mml-res-stack--mobile">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-7xl font-serif text-primary leading-tight mml-res-text--fluid-lg italic">Discover</h2>
                <div className="space-y-1">
                  <span className="text-secondary uppercase tracking-[0.4em] font-bold text-xs md:text-sm block">M.M. LAZARO</span>
                  <div className="w-12 h-0.5 bg-tertiary/30" />
                </div>
              </div>

              <div className="space-y-6 text-primary/70 font-sans leading-relaxed text-base md:text-lg font-medium mml-res-text--fluid">

                <p>
                  An innovative law firm building long-term relationships with clients based on reciprocity,
                  trust and highest standards of professional ethics. By adopting new models for the
                  delivery of legal services, we strive to redefine the role that a law firm plays in
                  an emerging regional market, in order to produce truly exceptional results for our clients.
                </p>
                <p>
                  Precision legal counsel grounded in heritage and modern jurisprudence. Experience
                  the apex of legal craftsmanship through our multi-generational expertise.
                  A heritage of authority, multi-generational legal craftsmanship.
                </p>
              </div>
            </RevealStagger>
          </div>
        </section>

        {/* 3. MISSION & VISION OVERLAY SECTION */}
        <div className="relative z-30">
          <section id="mml-ab-cards-container" className="px-6 md:px-12 relative -translate-y-[40px] md:-translate-y-[60px]">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mml-res-container">


              {/* Mission Overlay Box */}
              <Reveal className="mml-ab-card">
                <div className="bg-white p-12 md:p-16 shadow-2xl border-t-8 border-tertiary flex flex-col space-y-6 mml-ab-card__glass-wrap">
                  <h3 className="text-3xl font-serif text-primary uppercase font-black mml-ab-card__title">Mission</h3>
                  <p className="font-sans text-base text-primary/60 leading-relaxed mml-ab-card__text">
                    Curabitur quas nets lacus et nulat iaculis lorems etis nisle varius vitae seditum
                    fugiatur ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia.
                  </p>
                </div>
              </Reveal>

              {/* Vision Overlay Box */}
              <Reveal className="mml-ab-card" delay={0.2}>
                <div className="bg-white p-12 md:p-16 shadow-2xl border-t-8 border-secondary flex flex-col space-y-6 mml-ab-card__glass-wrap">
                  <h3 className="text-3xl font-serif text-primary uppercase font-black mml-ab-card__title">Vision</h3>
                  <p className="font-sans text-base text-primary/60 leading-relaxed mml-ab-card__text">
                    Curabitur quas nets lacus et nulat iaculis lorems etis nisle varius vitae seditum
                    fugiatur ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia.
                  </p>
                </div>
              </Reveal>

            </div>
          </section>
        </div>

        {/* 4. QUICK LINKS SECTION - PERFECTLY CENTERED BREATHER */}
        <QuickLinks id="mml-lp-quick-links" title="Explore Further" translateClass="md:translate-y-[30%]" paddingClass="pt-24 pb-48" links={[
          { name: "About the Firm", href: "/about" },
          { name: "Our Lawyers", href: "/lawyers" },
          { name: "Practice Areas", href: "/practice-areas" },
        ]} />

        {/* 5. CONTACT SECTION - REFINED WITH MAP */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
