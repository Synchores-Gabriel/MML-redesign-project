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

            
            <div className="space-y-6 text-base font-sans pt-10 border-t border-white/10 mml-ab-contact__info-items">
              <div className="flex gap-5 items-center mml-ab-contact__info-item">
                <div className="bg-tertiary/10 p-3 rounded-sm">
                  <Phone size={18} className="text-tertiary" /> 
                </div>
                <span className="text-base md:text-lg leading-relaxed text-white font-medium mml-res-text--fluid">+63 2 8 844 1540</span>
              </div>
              <div className="flex gap-5 items-center mml-ab-contact__info-item">
                <div className="bg-tertiary/10 p-3 rounded-sm">
                  <Mail size={18} className="text-tertiary" /> 
                </div>
                <span className="text-base md:text-lg leading-relaxed text-white font-medium mml-res-text--fluid">contact@mmlazarolaw.com</span>
              </div>
            </div>

            {/* Google Map — High Visibility Pin */}
            <div className="relative h-[450px] w-full overflow-hidden shadow-ambient ring-1 ring-white/10 rounded-sm mml-ab-contact__map-wrapper bg-white">
              <iframe
                src="https://maps.google.com/maps?q=Chatham%20House%20Building%20Salcedo%20Village%20Makati&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none z-10 opacity-10 border border-black/5" />
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
