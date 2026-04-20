"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export const Footer = () => {
  return (
    <footer id="mml-global-footer" className="relative bg-primary overflow-hidden pt-24 pb-12 mml-global-footer">
      {/* Dark Wood Overlay Texture */}
      <div className="absolute inset-0 opacity-15 wood-overlay pointer-events-none" />

      <div className="relative z-10 max-w-screen-2xl mx-auto mml-res-container px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24 mml-global-footer__grid">
          {/* ... (Existing columns 1-5) ... */}
          {/* Column 1: Branding */}
          <div className="space-y-8 mml-global-footer__col lg:col-span-2">
            <Link href="/" className="group mml-global-footer__logo items-center">
              <BrandLogo textClassName="text-tertiary" size="md" />
            </Link>
            <p className="font-sans text-base text-neutral/80 leading-relaxed font-bold">
              An innovative law firm by building long-term relationships with clients based on reciprocity, trust and highest standards of professional ethics. By adopting new models for the delivery of legal services, we strive to redefine the role that a law firm plays in an emerging regional market, in order to produce truly exceptional results for our clients.
            </p>
          </div>

          {/* Column 2: The Firm */}
          <div className="space-y-8 mml-global-footer__col text-left">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral/30 border-b border-white/5 pb-4">
              The Firm
            </h4>
            <ul className="space-y-4 font-sans text-[11px] font-bold tracking-[0.15em] text-neutral/60 mml-global-footer__link-col">
              <li><Link href="/#mml-lp-hero" className="mml-footer-link hover:text-white transition-colors duration-400">HOME</Link></li>
              <li><Link href="/#mml-lp-about" className="mml-footer-link hover:text-white transition-colors duration-400">ABOUT THE FIRM</Link></li>
              <li><Link href="/about" className="mml-footer-link hover:text-white transition-colors duration-400">HISTORY & LEGACY</Link></li>
              <li><Link href="/careers" className="mml-footer-link hover:text-white transition-colors duration-400">CAREERS</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal Expertise */}
          <div className="space-y-8 mml-global-footer__col text-left">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral/30 border-b border-white/5 pb-4">
              Legal Expertise
            </h4>
            <ul className="space-y-4 font-sans text-[11px] font-bold tracking-[0.15em] text-neutral/60 mml-global-footer__link-col">
              <li><Link href="/practice-areas" className="mml-footer-link hover:text-white transition-colors duration-400">OUR PRACTICE AREAS</Link></li>
              <li><Link href="/lawyers" className="mml-footer-link hover:text-white transition-colors duration-400">OUR LAWYERS</Link></li>
              <li><Link href="/#mml-lp-strip-2" className="mml-footer-link hover:text-white transition-colors duration-400">CASE HIGHLIGHTS</Link></li>
            </ul>
          </div>

          {/* Column 4: Client Resources */}
          <div className="space-y-8 mml-global-footer__col text-left">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral/30 border-b border-white/5 pb-4">
              Client Resources
            </h4>
            <ul className="space-y-4 font-sans text-[11px] font-bold tracking-[0.15em] text-neutral/60 mml-global-footer__link-col">
              <li><Link href="/contact" className="mml-footer-link hover:text-white transition-colors duration-400">CONTACT US</Link></li>
              <li><Link href="/#mml-ab-contact" className="mml-footer-link hover:text-white transition-colors duration-400">SEND A MESSAGE</Link></li>
              <li><Link href="/#mml-ab-contact" className="mml-footer-link hover:text-white transition-colors duration-400">OFFICE LOCATION</Link></li>
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div className="space-y-8 mml-global-footer__col text-left">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral/30 border-b border-white/5 pb-4">
              Direct Contact
            </h4>
            <ul className="space-y-6 font-sans text-neutral/60">
              <li className="flex gap-4 group">
                <Phone size={16} className="text-tertiary shrink-0" />
                <span className="text-[13px] md:text-[14px] font-bold tracking-tight text-neutral/80">+63 2 8 844 1540</span>
              </li>
              <li className="flex gap-4 group text-neutral/80">
                <Mail size={16} className="text-tertiary shrink-0" />
                <span className="text-[13px] md:text-[14px] font-bold tracking-tight">contact@mmlazarolaw.com</span>
              </li>
              <li className="flex gap-4 group text-neutral/80 leading-relaxed">
                <MapPin size={16} className="text-tertiary shrink-0" />
                <span className="text-[13px] md:text-[14px] font-bold tracking-tight">
                  19th Floor Chatham House Building,<br />Valero cor. V.A. Rufino Sts.,<br />Salcedo Village, Makati City 1227
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Branding & Final Cleanup - Now Full Width */}
      <div className="relative z-10 pt-16 border-t border-white/5 w-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-full">
          <div className="flex items-center gap-8 shrink-0">
            <div className="grayscale opacity-40 shrink-0">
              <Image src="/asset/mma-logo-hq.png" alt="MML" width={44} height={44} />
            </div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-neutral/40 whitespace-nowrap">
              MM. LAZARO and ASSOCIATES
            </span>
          </div>

          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-neutral/40 mml-global-footer__disclaimer text-center md:text-right">
            © {new Date().getFullYear()} M. M. LAZARO AND ASSOCIATES. PIXEL-PERFECTION IN LEGAL SERVICE.
          </div>
        </div>
      </div>
    </footer>
  );
};
