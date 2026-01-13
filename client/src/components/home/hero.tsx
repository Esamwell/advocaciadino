import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/prestigious_law_firm_library_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Law Library"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0 animate-in slide-in-from-bottom-10 duration-700 fade-in">
          <div className="inline-block mb-4 px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full">
            <span className="text-secondary font-medium text-sm tracking-wider uppercase">Excelência Jurídica desde 2005</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Defesa Técnica.<br />
            Atuação Estratégica.<br />
            <span className="text-secondary">Compromisso com a Justiça.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed font-light">
            Especialistas em Direito Penal, Militar e Grandes Causas.
            Atuação destacada no Tribunal do Júri e Tribunais Superiores.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white min-w-[180px] h-14 text-base">
              Fale com um Especialista
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm min-w-[180px] h-14 text-base">
              Conheça o Escritório <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
