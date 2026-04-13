import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealStagger, Reveal } from "@/components/Reveal";
import Image from "next/image";

const lawyers = [
  { name: "Atty. Michelle Lazaro", title: "Managing Partner", img: "/asset/avatar/AttyMichelleLazaro-3744.jpg" },
  { name: "Justice Manuel Lazaro", title: "Senior Partner", img: "/asset/avatar/JusticeManuelLazaro-3679.jpg" },
  { name: "Atty. Manuel B. Lazaro", title: "Partner", img: "/asset/avatar/MBLpic.jpg" },
  { name: "Atty. Mike Lazaro", title: "Partner", img: "/asset/avatar/MMLpic.jpg" },
  // Repeating for grid demonstration as requested
  { name: "Atty. Maria Santos", title: "Associate", img: "/asset/avatar/AttyMichelleLazaro-3744.jpg" },
  { name: "Atty. Juan Dela Cruz", title: "Associate", img: "/asset/avatar/JusticeManuelLazaro-3679.jpg" },
  { name: "Atty. Elena Garcia", title: "Associate", img: "/asset/avatar/MBLpic.jpg" },
  { name: "Atty. Ricardo Reyes", title: "Associate", img: "/asset/avatar/MMLpic.jpg" },
];

export default function LawyersPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <RevealStagger className="space-y-6 text-center max-w-3xl mx-auto">
            <span className="text-secondary uppercase tracking-[0.3em] font-semibold text-xs">The Bench</span>
            <h1 className="text-5xl font-serif text-primary uppercase leading-tight">Our Attorneys</h1>
            <p className="text-primary/60 font-sans leading-relaxed text-lg">
              A collective of historical authority and modern legal insight, dedicated to 
              uncompromising representation.
            </p>
          </RevealStagger>

          {/* Grid */}
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {lawyers.map((lawyer, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 ring-1 ring-ghost group-hover:shadow-ambient transition-all duration-500">
                  <Image
                    src={lawyer.img}
                    alt={lawyer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                </div>
                <div className="space-y-1 px-2">
                  <h3 className="font-serif text-xl uppercase text-primary transition-colors duration-400 group-hover:text-secondary">
                    {lawyer.name}
                  </h3>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">
                    {lawyer.title}
                  </p>
                </div>
              </div>
            ))}
          </RevealStagger>

          {/* Joining the team section */}
          <Reveal className="bg-primary p-16 text-center space-y-8 rounded-[0.25rem] overflow-hidden relative">
             <div className="absolute inset-0 bg-white/5 skew-y-12 translate-y-1/2 pointer-events-none" />
             <h2 className="text-3xl font-serif text-white uppercase relative z-10">Join the Legacy.</h2>
             <p className="text-neutral/60 font-sans max-w-2xl mx-auto relative z-10">
               We are always looking for exceptional legal talent to join our multi-generational mission.
             </p>
             <button className="bg-secondary text-white px-10 py-4 font-sans font-bold tracking-widest text-xs uppercase hover:bg-white hover:text-primary transition-all duration-500 relative z-10 rounded-[0.25rem]">
               Career Opportunities
             </button>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
