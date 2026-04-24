"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealStagger, Reveal } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import Image from "next/image";
import { useState, useRef, useEffect, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QuickLinks } from "@/components/QuickLinks";
import { getAdaptiveAsset } from "@/utils/paths";

const lawyers = [
  {
    id: 2,
    name: "Michelle B. Lazaro",
    title: "MANAGING PARTNER",
    img: "/asset/avatar/MBLpic.webp",
    bio: "Specializing in Corporate Law, Litigation, and Estate Planning, Atty. Michelle Lazaro handles complex legal frameworks for multi-generational wealth and corporate governance."
  },
  {
    id: 3,
    name: "Abel M. Almario",
    title: "Senior Lawyer",
    img: "/asset/avatar/3.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    name: "Rafael P. Garcia Jr.",
    title: "Senior Lawyer",
    img: "/asset/avatar/4.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 5,
    name: "Edwin M. Espejo",
    title: "Senior Lawyer",
    img: "/asset/avatar/5.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 6,
    name: "Irish Marie V. Cabrera",
    title: "Senior Lawyer",
    img: "/asset/avatar/6.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 7,
    name: "Rommel M. Santiago",
    title: "Senior Lawyer",
    img: "/asset/avatar/7.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 8,
    name: "Philipe T. Aquino",
    title: "Senior Lawyer",
    img: "/asset/avatar/8.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 9,
    name: "Ma. Florence R. Fuerte",
    title: "Junior Lawyer",
    img: "/asset/avatar/9.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 10,
    name: "Loisse Danielle D. Vitug",
    title: "Junior Lawyer",
    img: "/asset/avatar/10.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 11,
    name: "Gerald	H. Caraan",
    title: "Junior Lawyer",
    img: "/asset/avatar/11.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 12,
    name: "Princess Khaila D. Palabrica",
    title: "Junior Lawyer",
    img: "/asset/avatar/12.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 13,
    name: "Robert Saimon D. Sison",
    title: "Junior Lawyer",
    img: "/asset/avatar/13.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 14,
    name: "Joseph Cornelius R. Lazaro",
    title: "Junior Lawyer",
    img: "/asset/avatar/14.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const LawyerCard = memo(({
  lawyer,
  index,
  isHovered,
  onMobileClick
}: {
  lawyer: typeof lawyers[0];
  index: number;
  isHovered: boolean;
  onMobileClick: (lawyer: typeof lawyers[0]) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [expandDirection, setExpandDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const checkPosition = () => {
      if (!cardRef.current) return;
      const width = window.innerWidth;
      const cols = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
      const column = index % cols;

      // If col 2 (rightmost) of 3, expand left. 
      // If col 1 (rightmost) of 2, expand left.
      // Otherwise expand right.
      const isRightHalf = column >= (cols / 2);
      setExpandDirection(isRightHalf ? "left" : "right");
    };
    checkPosition();
    window.addEventListener("resize", checkPosition);
    return () => window.removeEventListener("resize", checkPosition);
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative w-full mml-lw-card"
      onClick={() => onMobileClick(lawyer)}
    >
      <div className={`relative w-full flex flex-col md:block md:aspect-square glass-card shadow-2xl rounded-[12px] overflow-hidden border border-white/20 transition-all duration-700 cursor-pointer ${isHovered ? 'shadow-ambient ring-1 ring-tertiary/20' : ''}`}>

        {/* Person Image: Always square */}
        <div className="relative aspect-square md:absolute md:inset-0 mml-lw-card__image-container">
          <Image
            src={lawyer.img}
            alt={lawyer.name}
            fill
            className={`object-cover object-top transition-transform duration-[1.5s] ease-out ${isHovered ? 'scale-110 grayscale-0' : 'grayscale-[0.3] scale-100'}`}
          />
          <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-10'}`} />
        </div>

        {/* Info Block: Below image on mobile, overlay on desktop */}
        <div className={`
          relative md:absolute md:inset-x-0 md:bottom-0 p-4 md:p-6 space-y-2 bg-white/95 md:bg-white/90 backdrop-blur-md mml-lw-card__content transition-all duration-500
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
              x: expandDirection === "right" ? "80%" : "-80%",
              scaleX: 0.9,
              translateZ: 0
            }}
            animate={{
              opacity: 1,
              x: expandDirection === "right" ? "100%" : "-100%",
              scaleX: 1,
              translateZ: 0
            }}
            exit={{
              opacity: 0,
              x: expandDirection === "right" ? "90%" : "-90%",
              scaleX: 0.95,
              transition: { duration: 0.3, ease: "easeIn" }
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`hidden md:flex absolute top-2 bottom-2 w-full ${expandDirection === "right" ? 'left-[-8px]' : 'right-[-8px]'} z-[-1] pointer-events-auto ${expandDirection === "right" ? 'origin-left' : 'origin-right'} will-change-transform`}
          >
            <div className="w-full h-full glass-overlay p-8 flex flex-col justify-center border border-white/20 shadow-2xl overflow-hidden mml-lw-card__bio-overlay rounded-[12px]">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[1px] bg-tertiary" />
                  <span className="text-tertiary uppercase tracking-[0.5em] font-black text-[8px]">Insight</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white text-xl font-serif italic mml-lw-card__bio-heading tracking-tight">{lawyer.name}</h4>
                  <p className="text-white font-sans text-sm md:text-[15px] leading-relaxed overflow-y-auto max-h-[350px] scrollbar-thin scrollbar-thumb-tertiary/20 pr-4 mml-lw-card__bio-content font-medium opacity-90">
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
});
LawyerCard.displayName = "LawyerCard";

export default function LawyersPage() {
  const [selectedLawyer, setSelectedLawyer] = useState<typeof lawyers[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-neutral paper-texture">
      <Header />

      <main id="mml-lw-directory-root" className="flex-grow pt-32 md:pt-48 pb-0 md:pb-0 overflow-x-hidden">
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


          {/* Unified Lawyer Grid */}
          <section id="directory" className="scroll-mt-32 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {lawyers.map((lawyer, i) => {
                const isFirstSenior = lawyer.title.includes("Senior") && lawyers.findIndex(l => l.title.includes("Senior")) === i;
                const isFirstJunior = lawyer.title.includes("Junior") && lawyers.findIndex(l => l.title.includes("Junior")) === i;

                return (
                  <div
                    key={lawyer.id}
                    id={isFirstSenior ? "seniors" : isFirstJunior ? "juniors" : undefined}
                    className={`relative transition-[z-index] duration-0 ${hoveredIndex === i ? 'z-[100]' : 'z-0'} scroll-mt-48`}
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
                );
              })}
            </div>
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
              <div className="max-h-[40vh] overflow-y-auto pr-2 mml-scrollbar">
                <p className="text-white font-sans text-lg md:text-xl leading-relaxed font-semibold opacity-90 first-letter:text-3xl first-letter:font-serif">
                  {selectedLawyer.bio}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <QuickLinks
          id="mml-lw-quick-links"
          links={[
            {
              name: "About the Firm",
              href: "/about",
              asset: getAdaptiveAsset("/asset/office/1.jpg")
            },
            {
              name: "Our Lawyers",
              href: "/lawyers",
              asset: getAdaptiveAsset("/asset/quick_alt2.png")
            },
            {
              name: "Practice Areas",
              href: "/practice-areas",
              asset: getAdaptiveAsset("/asset/quick2.png")
            },
          ]}
          translateClass="translate-y-[20%] mt-32 md:mt-48"
        />

        <div className="mt-[-100px] pt-[150px]">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
