import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { PracticeAreas } from "@/components/home/practice-areas";
import { Articles } from "@/components/home/articles";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <div id="jury" className="py-20 bg-primary text-white text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Tribunal do Júri</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              "A atuação no Tribunal do Júri constitui um dos pilares centrais do escritório. 
              Mais de duas décadas de experiência e mais de 100 julgamentos realizados."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
               {[
                 { label: "Anos de Experiência", value: "20+" },
                 { label: "Júris Realizados", value: "100+" },
                 { label: "Estados de Atuação", value: "12" },
                 { label: "Sustentações Orais", value: "500+" }
               ].map((stat, i) => (
                 <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10">
                   <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                   <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
