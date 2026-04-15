"use client";

import { Mail, Phone, MapPin, User, MessageSquare, Send, ArrowRight } from "lucide-react";
import { Reveal, RevealStagger } from "./Reveal";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <section 
      id="mml-ab-contact" 
      className="py-32 md:py-40 pb-32 md:pb-48 px-6 md:px-12 bg-primary font-sans mt-[-100px] pt-[200px] text-white overflow-hidden mml-ab-contact"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10 mml-res-container">

        
        {/* Left: Info & Map */}
        <div className="lg:w-1/2 space-y-12 mml-ab-contact__info-col">
          <RevealStagger className="space-y-10">
            <div className="space-y-6 mml-res-stack--mobile">
              <h2 className="text-4xl md:text-5xl font-serif text-white uppercase font-black mml-res-text--fluid-lg">Contact Section</h2>
              <div className="space-y-4 font-sans text-base text-white/60 mml-res-stack--mobile">
                <p className="font-bold text-tertiary tracking-widest text-[10px] md:text-xs uppercase">Location</p>
                <p className="text-base md:text-lg leading-relaxed text-white mml-res-text--fluid">
                  19th Floor Chatham House Building<br />Valero cor. V.A. Rufino Sts.<br />Salcedo Village, Makati City 1227
                </p>
              </div>
            </div>

            
            <div className="space-y-4 text-base font-sans pt-8 border-t border-white/5 mml-ab-contact__info-items">
              <p className="flex gap-4 items-center mml-ab-contact__info-item">
                <Phone size={16} className="text-tertiary" /> 
                <span className="font-bold text-white tracking-tighter self-center">+63 987 654 321</span>
              </p>
              <p className="flex gap-4 items-center mml-ab-contact__info-item">
                <Mail size={16} className="text-tertiary" /> 
                <span className="font-bold text-white tracking-tighter self-center">example@example.com</span>
              </p>
            </div>

            {/* Styled Map Placeholder (Consistent with landing page) */}
            <div className="relative h-[450px] w-full overflow-hidden shadow-ambient ring-1 ring-ghost grayscale group rounded-sm mml-ab-contact__map-wrapper">
              <div className="absolute inset-0 bg-primary/40 z-10 mix-blend-multiply" />
              <Image 
                src="/asset/office/5.jpg" 
                alt="Map" 
                fill 
                className="object-cover opacity-50 contrast-125 transition-transform duration-[2000ms] group-hover:scale-110" 
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-tertiary/20 blur-xl rounded-full scale-150 animate-pulse" />
                  <MapPin size={48} className="text-tertiary relative z-10 mml-ab-contact__map-pin" />
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
        <div className="lg:w-1/2 p-16 bg-primary rounded-sm shadow-2xl relative overflow-hidden flex flex-col justify-center mml-ab-contact__form-col">
          <div className="absolute inset-0 opacity-10 wood-strip pointer-events-none scale-150 rotate-3" />
          <RevealStagger className="relative z-10 space-y-12">
            <div className="space-y-4 mml-res-stack--mobile">
              <span className="text-tertiary uppercase tracking-[0.5em] font-sans font-bold text-[10px]">Case Inquiry</span>
              <h3 className="text-xl md:text-2xl font-serif text-white uppercase tracking-tight font-black">Request Counsel</h3>
              <p className="text-white/40 font-sans text-sm mml-res-text--fluid">A designated representative will respond to your inquiry within 24 hours.</p>
            </div>

            
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3 mml-ab-contact__form-field">
                  <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">NAME</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm focus:pl-4" 
                    placeholder="Full Name" 
                  />
                </div>
                <div className="space-y-3 mml-ab-contact__form-field">
                  <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm focus:pl-4" 
                    placeholder="email@address.com" 
                  />
                </div>
              </div>
              <div className="space-y-3 mml-ab-contact__form-field">
                <label className="text-[10px] text-neutral/40 tracking-[0.3em] font-bold uppercase">MESSAGE</label>
                <textarea 
                  rows={5} 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-tertiary transition-all font-sans text-sm resize-none focus:pl-4" 
                  placeholder="Describe your case or inquiry..." 
                />
              </div>
              <button 
                type="submit" 
                className="glow-gold w-full py-6 rounded-sm text-primary font-sans font-bold tracking-[0.4em] text-[12px] uppercase mml-ab-contact__submit-btn"
              >
                SEND MESSAGE
              </button>
            </form>
          </RevealStagger>
        </div>

      </div>
    </section>
  );
};
