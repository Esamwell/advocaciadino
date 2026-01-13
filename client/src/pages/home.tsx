import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { PracticeAreas } from "@/components/home/practice-areas";
import { Press } from "@/components/home/press";
import { Enterprises } from "@/components/home/enterprises";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Team } from "@/components/home/team";
import { SuperiorCourts } from "@/components/home/superior-courts";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export default function Home() {
  useScrollToSection();
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <PracticeAreas />
        <SuperiorCourts />
        <Enterprises />
        <div id="jury" className="py-20 md:py-24 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 md:mb-6">Tribunal do Júri & Advocacia de Plenário</h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-3 md:mb-4 leading-relaxed">
                A atuação no Tribunal do Júri constitui um dos pilares centrais do escritório. 
                Mais de duas décadas de experiência contínua e mais de 100 julgamentos realizados.
              </p>
              <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                Especialização em crimes dolosos contra a vida, casos complexos e midiáticos, 
                com domínio da técnica processual, oratória forense e psicologia do julgamento.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mb-10 md:mb-12">
               {[
                 { label: "Anos de Experiência", value: "20+" },
                 { label: "Júris Realizados", value: "100+" },
                 { label: "Estados de Atuação", value: "12" },
                 { label: "Sustentações Orais", value: "500+" }
               ].map((stat, i) => (
                 <div key={i} className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                   <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                   <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary">Estratégia</h3>
                <p className="text-white/80 leading-relaxed">
                  Desenvolvimento de estratégias personalizadas para cada caso, considerando as particularidades 
                  processuais e as nuances do direito material aplicável.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary">Oratória</h3>
                <p className="text-white/80 leading-relaxed">
                  Domínio da oratória forense, com capacidade de comunicação clara, objetiva e persuasiva 
                  perante o plenário do júri.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary">Técnica</h3>
                <p className="text-white/80 leading-relaxed">
                  Conhecimento profundo da técnica processual do júri, com atenção aos detalhes que podem 
                  fazer a diferença no resultado final.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
