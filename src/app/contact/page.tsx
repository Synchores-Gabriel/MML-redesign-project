"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealStagger } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { HeroGridOverlay } from "@/components/HeroGridOverlay";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />

      <main className="flex-grow">
        {/* ═══════════════════════════════════════════════════════════
            1. HERO SECTION — Dark boardroom with glassmorphism grid
        ═══════════════════════════════════════════════════════════ */}
        <section
          id="mml-contact-hero"
          className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/asset/office/3.jpg"
              alt="MML Office Interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />
          </div>

          {/* Glassmorphism Grid Overlay */}
          <HeroGridOverlay />

          {/* Hero Content */}
          <div className="relative z-30 text-center px-6 md:px-12 max-w-screen-2xl mx-auto mml-res-container">
            <RevealStagger className="space-y-4 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white uppercase leading-tight font-black mml-res-text--fluid-lg">
                True Passion
              </h1>
            </RevealStagger>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral to-transparent z-20" />
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2. EDITORIAL CONTENT — White section with asymmetric text
        ═══════════════════════════════════════════════════════════ */}
        <section
          id="mml-contact-editorial"
          className="py-20 md:py-32 px-6 md:px-12 bg-neutral"
        >
          <div className="max-w-screen-xl mx-auto mml-res-container">
            <RevealStagger className="space-y-16 md:space-y-20 max-w-3xl">
              {/* Block 1: CONTACT US */}
              <div className="space-y-6 mml-res-stack--mobile">
                <div className="space-y-2">
                  <div className="w-12 h-[2px] bg-tertiary/40" />
                  <h2 className="text-2xl md:text-3xl font-serif text-primary uppercase font-black tracking-tight">
                    Contact Us
                  </h2>
                </div>
                <p className="text-primary/60 font-sans text-base md:text-lg leading-relaxed font-medium mml-res-text--fluid">
                  Our firm provides a full range of services for corporate accounts.
                  We help clients establish and maintain corporate entities suitable
                  to their commercial personal or commercial activities.
                </p>
              </div>

              {/* Block 2: DISCOVER */}
              <div className="space-y-6 mml-res-stack--mobile">
                <div className="space-y-2">
                  <div className="w-12 h-[2px] bg-secondary/40" />
                  <h2 className="text-2xl md:text-3xl font-serif text-primary uppercase font-black tracking-tight">
                    Discover
                  </h2>
                </div>
                <p className="text-primary/60 font-sans text-base md:text-lg leading-relaxed font-medium mml-res-text--fluid">
                  A vision to create a true corporate meritocracy dedicated to
                  excellence in the practice of law. The sole measures of our
                  success are concrete results and client satisfaction.
                </p>
              </div>
            </RevealStagger>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            3. QUICK LINKS — Gold-framed navigation cards
        ═══════════════════════════════════════════════════════════ */}
        <div className="relative">
          <section
            id="mml-contact-quick-links"
            className="px-6 md:px-12 relative z-30 -translate-y-[20%] mml-contact-quick-links"
          >
            <div className="max-w-7xl mx-auto">
              <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "About the Firm", href: "/about" },
                  { name: "Our Lawyers", href: "/lawyers" },
                  { name: "Practice Areas", href: "/practice-areas" },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="group relative block aspect-[16/7] overflow-hidden bg-primary shadow-2xl rounded-sm mml-lp-quick-links__link"
                  >
                    <div className="absolute inset-4 border-[0.5px] border-tertiary/20 z-20 group-hover:border-tertiary group-hover:inset-3 transition-all duration-500 mml-lp-quick-links__frame" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A243F] via-[#232D4B] to-[#0A0E1A] z-10 mml-lp-quick-links__gradient" />
                    <div className="relative z-30 h-full w-full p-8 lg:p-10 flex flex-col justify-end mml-lp-quick-links__content">
                      <span className="text-tertiary uppercase tracking-[0.4em] font-sans font-bold text-[8px] mb-2 opacity-60 group-hover:opacity-100 transition-opacity mml-lp-quick-links__tag">
                        Explore
                      </span>
                      <h3 className="text-xl lg:text-2xl font-serif text-white uppercase tracking-tight mml-lp-quick-links__title leading-tight">
                        {link.name}
                      </h3>
                    </div>
                    <div className="absolute top-0 right-0 p-8 z-30 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 group-hover:-translate-y-2 mml-lp-quick-links__icon">
                      <ArrowRight size={20} className="text-tertiary" />
                    </div>
                  </Link>
                ))}
              </RevealStagger>
            </div>
          </section>


          {/* CONTACT SECTION — Shared component */}
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
