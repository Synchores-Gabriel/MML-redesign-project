import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Reveal, RevealStagger } from "@/components/Reveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* HERO */}
        <HeroSection
          title="About\nThe Firm"
          subtitle="Redefining the role of a law firm in an emerging regional market through reciprocity, trust, and professional ethics."
          imageSrc="/asset/office/2.png"
          overlayOpacity={0.4}
        />

        {/* NARRATIVE SECTION */}
        <section id="mml-ab-narrative" className="py-32 px-6 bg-neutral mml-ab-narrative">
          <div className="max-w-4xl mx-auto space-y-16">
            <RevealStagger className="space-y-8">
              <span className="text-secondary uppercase tracking-[0.3em] font-semibold text-xs text-center block">Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary text-center leading-tight">
                An innovative law firm building long-term relationships.
              </h2>
              <div className="font-sans text-lg text-primary/70 leading-relaxed space-y-6">
                <p>
                  By adopting new models for the delivery of legal services, we strive to redefine 
                  the role that a law firm plays in an emerging regional market. Our mission is to 
                  produce truly exceptional results for our clients.
                </p>
                <p>
                  We believe in Asymmetric Authority—the idea that legal solutions should not just 
                  be functional, but bespoke and authoritative. Our history is rooted in the 
                  Philippines, yet our eyes are set on the global legal horizon.
                </p>
              </div>
            </RevealStagger>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section id="mml-ab-mission-vision" className="py-24 px-6 bg-white relative mml-ab-mission-vision">
          <div className="absolute top-0 left-0 w-1/4 h-full bg-neutral/50" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <Reveal className="p-12 bg-neutral ring-1 ring-ghost space-y-6">
              <h3 className="text-2xl font-serif text-primary uppercase tracking-tighter">Our Mission</h3>
              <p className="font-sans text-primary/60 leading-relaxed">
                To provide high-end legal counsel that balances the gravitas of history with the 
                fluidity of modern business, ensuring our clients are always positioned for success.
              </p>
              <div className="pt-4 flex items-center gap-4 text-xs font-bold tracking-widest text-secondary">
                <div className="w-8 h-[1px] bg-secondary" /> 01 / PURPOSE
              </div>
            </Reveal>
            <Reveal className="p-12 bg-primary text-white space-y-6">
              <h3 className="text-2xl font-serif text-white uppercase tracking-tighter">Our Vision</h3>
              <p className="font-sans text-neutral/60 leading-relaxed">
                To be the most trusted legal partner in the region, known for our innovative 
                approach, absolute integrity, and the heritage we carry into every courtroom.
              </p>
              <div className="pt-4 flex items-center gap-4 text-xs font-bold tracking-widest text-secondary">
                <div className="w-8 h-[1px] bg-secondary" /> 02 / ASPIRATION
              </div>
            </Reveal>
          </div>
        </section>

        {/* DISCOVER PARTNER (Asymmetric Offset) */}
        <section id="mml-ab-partner-legacy" className="py-32 px-6 bg-neutral overflow-hidden mml-ab-partner-legacy">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2 relative group">
              <Reveal className="aspect-[4/5] relative overflow-hidden rounded-[0.25rem]">
                <Image 
                  src="/asset/avatar/JusticeManuelLazaro-3679.jpg" 
                  alt="Justice Manuel Lazaro" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </Reveal>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
            </div>
            <div className="md:w-1/2 space-y-8">
              <RevealStagger className="space-y-6">
                <span className="text-secondary uppercase tracking-[0.3em] font-semibold text-xs">Founding Authority</span>
                <h2 className="text-5xl font-serif text-primary uppercase leading-[1.1]">The Heritage of Excellence.</h2>
                <p className="text-primary/70 font-sans leading-relaxed text-lg">
                  Lead by Justice Manuel Lazaro and Atty. Michelle Lazaro, the firm embodies 
                  decades of supreme legal practice and uncompromising dedication to the rule of law.
                </p>
                <div className="pt-6">
                  <button className="px-10 py-4 bg-primary text-white font-sans font-bold tracking-widest text-xs uppercase hover:bg-secondary transition-colors duration-400 rounded-[0.25rem]">
                    FULL PARTNER BIOGRAPHY
                  </button>
                </div>
              </RevealStagger>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
