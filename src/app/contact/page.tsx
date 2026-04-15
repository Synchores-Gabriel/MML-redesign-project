"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { HeroGridOverlay } from "@/components/HeroGridOverlay";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white italic leading-tight mml-res-text--fluid-lg">
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
                <p className="text-primary/60 font-sans text-base md:text-lg leading-relaxed mml-res-text--fluid">
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
                <p className="text-primary/60 font-sans text-base md:text-lg leading-relaxed mml-res-text--fluid">
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

          {/* ═══════════════════════════════════════════════════════════
              4. INTERACTIVE CONTACT SECTION — Full 2-column layout
          ═══════════════════════════════════════════════════════════ */}
          <section
            id="mml-contact-form-section"
            className="py-24 md:py-48 pb-32 md:pb-64 px-6 md:px-12 bg-primary font-sans mt-[-100px] pt-[200px] text-white overflow-hidden"
          >
            <div className="max-w-screen-2xl mx-auto mml-res-container">
              {/* Section Header */}
              <Reveal width="100%" className="mb-16 md:mb-24 w-full">
                <h2 className="text-4xl md:text-6xl font-serif text-white uppercase font-black text-center mml-res-text--fluid-lg">
                  Contact Us
                </h2>
              </Reveal>

              <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
                {/* ─── Left Column: Info & Map ─── */}
                <div className="lg:w-1/2 space-y-12">
                  <RevealStagger className="space-y-10">
                    {/* Contact Details */}
                    <div className="space-y-8">
                      {/* Phone */}
                      <div className="flex gap-5 items-start">
                        <div className="w-12 h-12 bg-tertiary/10 rounded-sm flex items-center justify-center shrink-0">
                          <Phone size={20} className="text-tertiary" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-tertiary tracking-widest text-[10px] md:text-xs uppercase">
                            Phone
                          </p>
                          <p className="text-lg md:text-xl text-white font-bold tracking-tight mml-res-text--fluid">
                            +63 (2) 8812 1573
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex gap-5 items-start">
                        <div className="w-12 h-12 bg-tertiary/10 rounded-sm flex items-center justify-center shrink-0">
                          <Mail size={20} className="text-tertiary" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-tertiary tracking-widest text-[10px] md:text-xs uppercase">
                            Email
                          </p>
                          <p className="text-lg md:text-xl text-white font-bold tracking-tight mml-res-text--fluid">
                            info@mmlazaro.com
                          </p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex gap-5 items-start">
                        <div className="w-12 h-12 bg-tertiary/10 rounded-sm flex items-center justify-center shrink-0">
                          <MapPin size={20} className="text-tertiary" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-bold text-tertiary tracking-widest text-[10px] md:text-xs uppercase">
                            Address
                          </p>
                          <p className="text-base md:text-lg text-white leading-relaxed mml-res-text--fluid">
                            19th Floor Chatham House Building
                            <br />
                            Valero cor. V.A. Rufino Sts.
                            <br />
                            Salcedo Village, Makati City 1227
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Dark-themed Map */}
                    <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden shadow-ambient ring-1 ring-ghost grayscale group rounded-sm">
                      <div className="absolute inset-0 bg-primary/40 z-10 mix-blend-multiply" />
                      <Image
                        src="/asset/office/5.jpg"
                        alt="Office Location Map"
                        fill
                        className="object-cover opacity-50 contrast-125 transition-transform duration-[2000ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="relative">
                          <div className="absolute inset-0 bg-tertiary/20 blur-xl rounded-full scale-150 animate-pulse" />
                          <MapPin
                            size={48}
                            className="text-tertiary relative z-10"
                          />
                        </div>
                      </div>
                      {/* Grid overlay on map */}
                      <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
                        <div className="grid grid-cols-10 w-full h-full">
                          {Array.from({ length: 100 }).map((_, i) => (
                            <div
                              key={i}
                              className="border-[0.5px] border-white/5"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </RevealStagger>
                </div>

                {/* ─── Right Column: Contact Form ─── */}
                <div className="lg:w-1/2 p-10 md:p-16 bg-primary-container rounded-sm shadow-2xl relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute inset-0 opacity-10 wood-strip pointer-events-none scale-150 rotate-3" />
                  <RevealStagger className="relative z-10 space-y-12">
                    <div className="space-y-4 mml-res-stack--mobile">
                      <span className="text-tertiary uppercase tracking-[0.5em] font-sans font-bold text-[10px]">
                        Case Inquiry
                      </span>
                      <h3 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-tight font-black mml-res-text--fluid-lg">
                        Request Counsel
                      </h3>
                      <p className="text-white/40 font-sans text-[10px] md:text-xs mml-res-text--fluid">
                        A designated representative will respond to your inquiry
                        within 24 hours.
                      </p>
                    </div>

                    <form className="space-y-10">
                      {/* Name */}
                      <div className="space-y-3">
                        <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">
                          NAME
                        </label>
                        <input
                          type="text"
                          className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm focus:pl-4"
                          placeholder="Full Name"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-3">
                        <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm focus:pl-4"
                          placeholder="+63 XXX XXX XXXX"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-3">
                        <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm focus:pl-4"
                          placeholder="email@address.com"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-3">
                        <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">
                          MESSAGE
                        </label>
                        <textarea
                          rows={5}
                          className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm resize-none focus:pl-4"
                          placeholder="Describe your case or inquiry..."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="glow-gold w-full py-6 rounded-sm text-primary font-sans font-bold tracking-[0.4em] text-[12px] uppercase"
                      >
                        SEND MESSAGE
                      </button>
                    </form>
                  </RevealStagger>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
