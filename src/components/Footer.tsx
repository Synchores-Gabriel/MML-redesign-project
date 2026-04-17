"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export const Footer = () => {
  return (
    <footer id="mml-global-footer" className="relative bg-primary overflow-hidden pt-24 pb-12 px-12 mml-global-footer">
      {/* Dark Wood Overlay Texture */}
      <div className="absolute inset-0 opacity-15 wood-overlay pointer-events-none" />

      <div className="relative z-10 max-w-screen-2xl mx-auto mml-res-container">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24 mml-global-footer__grid">
          {/* Column 1: Branding */}
          <div className="space-y-8">
            <Link href="/" className="group mml-global-footer__logo mml-res-flow--desktop items-center">
              <BrandLogo textClassName="text-tertiary" size="md" />
            </Link>

            <p className="font-sans text-base text-neutral/40 leading-relaxed max-w-xs uppercase tracking-widest font-medium italic">
              Heritage Modernist Architecture & Jurisprudence. Multi-Generational Legal Craftsmanship.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral/30 border-b border-white/5 pb-4">
              Practices
            </h4>
            <ul className="grid grid-cols-1 gap-4 font-sans text-[11px] font-bold tracking-[0.15em] text-neutral/60 overflow-hidden mml-global-footer__list">
              {["Corporate Litigation", "Maritime Law", "Real Estate", "Intellectual Property", "Family Law", "Taxation"].map((item) => (
                <li key={item} className="mml-global-footer__list-item">
                  <Link href="#" className="hover:text-white transition-colors duration-400 mml-global-footer__list-link">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral/30 border-b border-white/5 pb-4 mml-global-footer__link-col-title">
            Firm
          </h4>
          <ul className="space-y-4 font-sans text-[11px] font-bold tracking-[0.15em] text-neutral/60 mml-global-footer__link-col">
            {[
              { name: "ABOUT THE FIRM", href: "/about" },
              { name: "OUR LAWYERS", href: "/lawyers" },
              { name: "OUR PRACTICE AREAS", href: "/practice-areas" },
              { name: "CONTACT US", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-white transition-colors duration-400 mml-global-footer__link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Column 4: Direct Entry */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral/30 border-b border-white/5 pb-4">
              Direct Contact
            </h4>
            <ul className="space-y-6 font-sans text-[11px] font-bold tracking-[0.15em] text-neutral/60">
              <li className="flex gap-4">
                <Phone size={14} className="text-secondary shrink-0" />
                <span>+63 2 8 844 1540</span>
              </li>
              <li className="flex gap-4">
                <Mail size={14} className="text-secondary shrink-0" />
                <span>contact@mmlazarolaw.com</span>
              </li>
              <li className="flex gap-4">
                <MapPin size={14} className="text-secondary shrink-0" />
                <span>19th Floor Chatham House Building, Valero cor. V.A. Rufino Sts., Salcedo Village, Makati City 1227</span>
              </li>
            </ul>
            <div className="flex gap-6 pt-4 border-t border-white/5">
              <Link href="#" className="text-neutral/20 hover:text-white transition-colors"><Facebook size={18} /></Link>
              <Link href="#" className="text-neutral/20 hover:text-white transition-colors"><Linkedin size={18} /></Link>
              <Link href="#" className="text-neutral/20 hover:text-white transition-colors"><Twitter size={18} /></Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 grayscale opacity-30">
            <Image src="/asset/mma-logo-hq.png" alt="Law Firm" width={30} height={30} />
            <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-white">The Jurisprudence Group</span>
          </div>
          <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral/20 mml-global-footer__disclaimer">
            © {new Date().getFullYear()} M. M. LAZARO AND ASSOCIATES. PIXEL-PERFECTION IN LEGAL SERVICE.
          </p>
        </div>
      </div>
    </footer>
  );
};
