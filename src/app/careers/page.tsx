"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { HeroGridOverlay } from "@/components/HeroGridOverlay";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const jobListings = [
  {
    id: "01",
    title: "Lawyer",
    type: "Full Time",
    requirements: [
      "With at least 2-3 years in law practice",
      "Willing to work in the Makati area",
    ],
    image: "/asset/office/1.jpg",
  },
  {
    id: "02",
    title: "Paralegal",
    type: "Full Time",
    requirements: [
      "With at least 2-3 years work experience in the legal field.",
      "Good writing and communication skill (working knowledge of Mandarin is a plus).",
      "Willing to work in the Makati area.",
    ],
    image: "/asset/office/gallery.jpg",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />

      <main className="flex-grow">
        {/* ═══════════════════════════════════════════════════════════
            1. HERO SECTION — Dark boardroom backdrop with grid overlay
        ═══════════════════════════════════════════════════════════ */}
        <section
          id="mml-careers-hero"
          className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/asset/office/1.jpg"
              alt="MML Office"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
          </div>

          {/* Glassmorphism Grid Overlay */}
          <HeroGridOverlay />

          {/* Hero Content */}
          <div className="relative z-30 text-center px-6 md:px-12 max-w-screen-2xl mx-auto mml-res-container">
            <RevealStagger className="space-y-6 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white uppercase leading-tight font-black mml-res-text--fluid-lg">
                Career Opportunities
              </h1>
              <p className="text-white/60 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed mml-res-text--fluid">
                Get in touch in today — we look forward to hearing from you.
              </p>
            </RevealStagger>
          </div>

          {/* Bottom gradient fade to neutral */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral to-transparent z-20" />
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2. JOB LISTINGS — Bento-style cards
        ═══════════════════════════════════════════════════════════ */}
        <section
          id="mml-careers-listings"
          className="py-16 md:py-24 px-6 md:px-12 bg-neutral"
        >
          <div className="max-w-screen-xl mx-auto space-y-10 md:space-y-14 mml-res-container">
            {jobListings.map((job, i) => (
              <Reveal key={job.id} width="100%" className="w-full">
                <div
                  className="group relative bg-primary rounded-sm overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-gold-glow mml-careers-card"
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  {/* Subtle gold glow border */}
                  <div className="absolute inset-0 rounded-sm ring-1 ring-tertiary/15 group-hover:ring-tertiary/40 transition-all duration-700 z-30 pointer-events-none" />

                  <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] min-h-[280px] md:min-h-[320px]">
                    {/* Left: Text Content */}
                    <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 z-10">
                      {/* Job Number & Title */}
                      <div className="space-y-3">
                        <span className="text-tertiary font-sans font-bold text-[11px] tracking-[0.4em] uppercase block">
                          {job.id}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-tight font-black leading-tight">
                          {job.title}
                        </h3>
                        <span className="inline-block bg-tertiary/10 text-tertiary font-sans font-bold text-[10px] tracking-[0.3em] uppercase px-4 py-2 rounded-sm">
                          {job.type}
                        </span>
                      </div>

                      {/* Requirements */}
                      <ul className="space-y-3 font-sans text-white/70 text-base leading-relaxed font-medium mml-res-text--fluid">
                        {job.requirements.map((req, j) => (
                          <li key={j} className="flex gap-3 items-start">
                            <span className="text-tertiary mt-1.5 shrink-0">
                              —
                            </span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="pt-4">
                        <button className="group/btn flex items-center gap-4 text-tertiary font-sans font-bold tracking-[0.3em] text-[10px] uppercase hover:text-white transition-all duration-500">
                          APPLY NOW
                          <span className="bg-tertiary/10 p-2 rounded-full group-hover/btn:bg-tertiary group-hover/btn:text-primary transition-all duration-500">
                            <ArrowRight size={14} />
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Office Image */}
                    <div className="relative h-[250px] md:h-auto overflow-hidden">
                      <Image
                        src={job.image}
                        alt={`${job.title} position at MML`}
                        fill
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                      {/* Gradient fade from left for seamless blend */}
                      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent z-10 hidden md:block" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            3. QUICK LINKS — Gold-framed navigation cards
        ═══════════════════════════════════════════════════════════ */}
        <div className="relative">
          <section
            id="mml-careers-quick-links"
            className="px-6 md:px-12 relative z-30 -translate-y-[20%] mml-careers-quick-links"
          >
            <div className="max-w-7xl mx-auto">
              <Reveal width="100%" className="mb-12 text-center w-full">
                <h2 className="text-3xl font-serif text-primary/10 uppercase tracking-[0.3em]">
                  Quick Links
                </h2>
              </Reveal>
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

          {/* ═══════════════════════════════════════════════════════════
              4. CONTACT SECTION & FOOTER
          ═══════════════════════════════════════════════════════════ */}
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
