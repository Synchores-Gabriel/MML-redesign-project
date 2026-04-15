"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealStagger, Reveal } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const lawyers = [
  {
    id: 1,
    name: "Justice Manuel Lazaro",
    title: "Chairman",
    img: "/asset/avatar/JusticeManuelLazaro-3679.jpg",
    bio: "Atty. Lazaro is the Founder and Senior Partner of M.M. Lazaro and Associates and is one of the incorporators of TDF. He previously served the government in the following positions: Government Corporate Counsel with the rank of Presiding Justice of the Court of Appeals, Presidential Assistant for Legal Affairs of the Office of the President, and Executive Vice President and General Counsel of GSIS. He is presently the Chairman and CEO of Philippine Constitution Association (Philconsa), and Member of the Board of Advisors (Ateneo Law School)."
  },
  {
    id: 2,
    name: "Atty. Michelle Lazaro",
    title: "Managing Partner",
    img: "/asset/avatar/AttyMichelleLazaro-3744.jpg",
    bio: "Atty. Michelle Lazaro specializes in Corporate Law, Litigation, and Estate Planning. With over two decades of experience, she handles complex legal frameworks for multi-generational wealth and corporate governance. Her leadership has been instrumental in modernizing the firm's approach to emerging market realities while maintaining the highest standards of professional ethics."
  },
  {
    id: 3,
    name: "Atty. Ms. Founder",
    title: "Attorney Partner",
    img: "/asset/avatar/AttyMichelleLazaro-3744.jpg",
    bio: "Leading the firm's litigation department, Atty. Founder brings a wealth of experience in appellate practice and constitutional law. Her strategic approach to dispute resolution has produced exceptional results for high-net-worth clients and corporate entities alike."
  },
  {
    id: 4,
    name: "Atty. M.M. Lazaro Jr.",
    title: "Partner",
    img: "/asset/avatar/MBLpic.jpg",
    bio: "Specializing in Intellectual Property and Information Technology law, Atty. Lazaro Jr. bridges the gap between traditional legal practice and the digital age. He serves as counsel for various tech startups and established media conglomerates."
  },
  {
    id: 5,
    name: "Atty. Maria Santos",
    title: "Attorney Partner",
    img: "/asset/avatar/AttyMichelleLazaro-3744.jpg",
    bio: "Focusing on International Trade and Investment Law, she assists foreign investors in navigating the Philippine legal landscape. Her expertise includes cross-border transactions and regulatory compliance."
  },
  {
    id: 6,
    name: "Atty. Ricardo Reyes",
    title: "Attorney Partner",
    img: "/asset/avatar/AttyMichelleLazaro-3744.jpg",
    bio: "An expert in Labor and Employment law, Atty. Reyes represents both management and labor in complex negotiations and litigation. He is a recognized speaker on employment standards and human rights."
  },
];

function LawyerCard({
  lawyer,
  index,
  isHovered,
  onMobileClick
}: {
  lawyer: typeof lawyers[0];
  index: number;
  isHovered: boolean;
  onMobileClick: (lawyer: typeof lawyers[0]) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [expandDirection, setExpandDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const checkPosition = () => {
      if (!cardRef.current) return;
      const width = window.innerWidth;
      const cols = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
      const column = index % cols;
      const isRightMost = column === (cols - 1);
      setExpandDirection(isRightMost ? "left" : "right");
    };
    checkPosition();
    window.addEventListener("resize", checkPosition);
    return () => window.removeEventListener("resize", checkPosition);
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative mml-lw-card"
      onClick={() => onMobileClick(lawyer)}
    >
      <div className={`relative flex flex-col md:block md:aspect-square glass-card shadow-2xl rounded-[12px] overflow-hidden border border-white/20 transition-all duration-700 cursor-pointer ${isHovered ? 'shadow-ambient ring-1 ring-tertiary/20' : ''}`}>

        {/* Person Image: Always square (relative/aspect-square on mobile, absolute/fill on desktop) */}
        <div className="relative aspect-square md:absolute md:inset-0 mml-lw-card__image-container">
          <Image
            src={lawyer.img}
            alt={lawyer.name}
            fill
            className={`object-cover object-top transition-transform duration-[1.5s] ease-out ${isHovered ? 'scale-110 grayscale-0' : 'grayscale-[0.3] scale-100'}`}
          />
          <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-10'}`} />
        </div>

        {/* Info Block: Relative below on mobile, Absolute overlay on desktop */}
        <div className={`
          relative md:absolute md:inset-x-0 md:bottom-0 p-6 space-y-2 bg-white/95 md:bg-white/90 backdrop-blur-md mml-lw-card__content transition-all duration-500
          ${isHovered ? 'md:translate-y-0' : 'md:translate-y-1 md:opacity-90'}
        `}>
          <div className="space-y-1">
            <h3 className="font-serif text-lg md:text-xl text-primary font-bold mml-lw-card__name uppercase tracking-tight leading-tight">
              {lawyer.name}
            </h3>
            <div className="w-6 h-[1px] bg-tertiary/30" />
          </div>
          <p className="font-sans text-[8px] md:text-[8px] uppercase tracking-[0.3em] font-black text-secondary mml-lw-card__title">
            {lawyer.title}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              opacity: 0,
              x: expandDirection === "right" ? "-20%" : "20%",
              scaleX: 0.8
            }}
            animate={{
              opacity: 1,
              x: expandDirection === "right" ? "100%" : "-100%",
              scaleX: 1
            }}
            exit={{
              opacity: 0,
              x: expandDirection === "right" ? "-10%" : "10%",
              scaleX: 0.9,
              transition: { duration: 0.3 }
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 1
            }}
            className={`hidden md:flex absolute top-2 bottom-2 w-full ${expandDirection === "right" ? 'left-[-8px]' : 'right-[-8px]'} z-[-1] pointer-events-none origin-${expandDirection === "right" ? 'left' : 'right'}`}
          >
            <div className="w-full h-full glass-overlay p-8 flex flex-col justify-center border border-white/20 shadow-2xl overflow-hidden mml-lw-card__bio-overlay rounded-[12px]">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[1px] bg-tertiary" />
                  <span className="text-tertiary uppercase tracking-[0.5em] font-black text-[8px]">Insight</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white text-lg font-serif italic mml-lw-card__bio-heading">Biographical Record</h4>
                  <p className="text-white/80 font-sans text-xs leading-relaxed overflow-y-auto max-h-[250px] scrollbar-thin scrollbar-thumb-tertiary/20 pr-4 mml-lw-card__bio-content uppercase tracking-widest text-[9px]">
                    {lawyer.bio}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LawyersPage() {
  const [selectedLawyer, setSelectedLawyer] = useState<typeof lawyers[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-neutral paper-texture">
      <Header />

      <main id="mml-lw-directory-root" className="flex-grow pt-32 md:pt-48 pb-24 md:pb-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24 mml-res-container">


          <RevealStagger className="space-y-8 max-w-4xl mml-res-stack--mobile">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-primary uppercase leading-tight font-black mml-res-text--fluid-lg">
              Our Lawyers
            </h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
              <div className="w-16 h-[2px] bg-tertiary shrink-0" />
              <p className="text-primary/70 font-sans text-base md:text-xl leading-relaxed font-medium max-w-2xl mml-res-text--fluid">
                Our lawyers and other professionals are recognized for their innovative approach to solving legal problems
                and exceptional service, high ethical standards, and responsiveness.
              </p>
            </div>
          </RevealStagger>


          <section className="relative">
            <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16 mml-res-flow--desktop">

              {lawyers.map((lawyer, i) => (
                <div
                  key={lawyer.id}
                  className={`first-letter:uppercase relative transition-[z-index] duration-0 ${hoveredIndex === i ? 'z-[100]' : 'z-0'}`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <LawyerCard
                    lawyer={lawyer}
                    index={i}
                    isHovered={hoveredIndex === i}
                    onMobileClick={(l) => {
                      if (window.innerWidth < 768) setSelectedLawyer(l);
                    }}
                  />
                </div>
              ))}
            </RevealStagger>
          </section>

        </div>

        <AnimatePresence>
          {selectedLawyer && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="md:hidden fixed bottom-4 left-4 right-4 z-[110] bg-primary/95 backdrop-blur-2xl border border-tertiary/20 shadow-2xl p-8 rounded-[24px] mml-lw-mobile-drawer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <h3 className="text-white font-serif text-2xl uppercase font-black">{selectedLawyer.name}</h3>
                  <p className="text-tertiary font-sans text-[10px] uppercase tracking-[0.3em] font-bold">{selectedLawyer.title}</p>
                </div>
                <button
                  onClick={() => setSelectedLawyer(null)}
                  className="p-3 bg-white/5 rounded-full border border-white/10 text-white"
                >
                  <ArrowRight size={20} className="rotate-45" />
                </button>
              </div>
              <div className="max-h-[30vh] overflow-y-auto pr-2 mml-scrollbar">
                <p className="text-white/70 font-sans text-base leading-loose italic lowercase first-letter:uppercase">
                  {selectedLawyer.bio}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-center">
                <p className="text-white/20 text-[8px] tracking-widest uppercase font-bold">Swipe down to dismiss</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <section id="mml-lp-quick-links" className="px-12 relative z-50 translate-y-[40%] mt-32 md:mt-48 mml-lp-quick-links">
          <div className="max-w-7xl mx-auto">
            <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "About the Firm", href: "/about" },
                { name: "Our Lawyers", href: "/lawyers" },
                { name: "Practice Areas", href: "/practice-areas" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group relative block aspect-[16/7] overflow-hidden bg-primary shadow-2xl rounded-sm mml-lp-quick-links__link">
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

        <div className="mt-[-100px] pt-[150px]">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
