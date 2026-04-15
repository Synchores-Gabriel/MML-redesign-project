"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealStagger, Reveal } from "./Reveal";

interface QuickLink {
  name: string;
  href: string;
}

interface QuickLinksProps {
  links: QuickLink[];
  id?: string;
  title?: string;
  translateClass?: string;
  paddingClass?: string;
}

export const QuickLinks = ({ links, id = "mml-lp-quick-links", title, translateClass = "md:-translate-y-[20%]", paddingClass }: QuickLinksProps) => {
  return (
    <section id={id} className={`px-6 md:px-12 relative z-30 ${translateClass} ${paddingClass || ""}`}>
      <div className="max-w-screen-2xl mx-auto mml-res-container">
        {title && (
          <Reveal className="mb-12 text-center w-full">
            <h2 className="text-3xl font-serif text-primary/10 uppercase tracking-[0.3em]">
              {title}
            </h2>
          </Reveal>
        )}
        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="group relative block aspect-[16/7] overflow-hidden bg-primary shadow-2xl rounded-sm mml-lp-quick-links__link">
              {/* Gold Frame Effect literal look-a-like */}
              <div className="absolute inset-4 border-[0.5px] border-tertiary/20 z-20 group-hover:border-tertiary group-hover:inset-3 transition-all duration-500 mml-lp-quick-links__frame" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A243F] via-[#232D4B] to-[#0A0E1A] z-10 mml-lp-quick-links__gradient" />
              <div className="relative z-30 h-full w-full p-8 lg:p-10 flex flex-col justify-end mml-lp-quick-links__content">
                <span className="text-tertiary uppercase tracking-[0.4em] font-sans font-bold text-[8px] mb-2 opacity-60 group-hover:opacity-100 transition-opacity mml-lp-quick-links__tag">Explore</span>
                <h3 className="text-xl lg:text-2xl font-serif text-white uppercase tracking-tight mml-lp-quick-links__title leading-tight">{link.name}</h3>
              </div>
              <div className="absolute top-0 right-0 p-8 z-30 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 group-hover:-translate-y-2 mml-lp-quick-links__icon">
                <ArrowRight size={20} className="text-tertiary" />
              </div>
            </Link>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};