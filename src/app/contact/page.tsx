"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealStagger } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { HeroGridOverlay } from "@/components/HeroGridOverlay";
import { QuickLinks } from "@/components/QuickLinks";
import { getAdaptiveAsset } from "@/utils/paths";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />

      <main className="flex-grow overflow-x-hidden">
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
          <QuickLinks id="mml-contact-quick-links" links={[
            {
              name: "About The Firm",
              href: "/about",
              asset: getAdaptiveAsset("/asset/office/1.jpg")
            },
            {
              name: "Our Lawyers",
              href: "/lawyers",
              asset: getAdaptiveAsset("/asset/quick_alt2.png")
            },
            {
              name: "Our Practice Areas",
              href: "/practice-areas",
              asset: getAdaptiveAsset("/asset/quick2.png")
            },
          ]} />


          {/* CONTACT SECTION — Shared component */}
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
