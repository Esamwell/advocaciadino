import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/prestigious_law_firm_library_background.png";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Law Library"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-block mb-6 px-4 py-1.5 bg-secondary/20 border border-secondary/40 rounded-full backdrop-blur-sm">
                <span className="text-secondary font-semibold text-xs md:text-sm tracking-wider uppercase">Excelência Jurídica • OAB/BA nº 36.408</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.1] mb-5 md:mb-6 drop-shadow-lg">
                ADVOCACIA<br />
                DINOERMESON<br />
                <span className="text-secondary">NASCIMENTO</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed font-serif font-medium">
                {t("hero.description")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <Link href="/contato">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white min-w-[200px] h-12 text-sm md:text-base font-medium shadow-md">
                    {t("hero.cta")}
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button size="lg" variant="outline" className="border border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm min-w-[200px] h-12 text-sm md:text-base font-medium">
                    {t("hero.learnMore")} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/15 backdrop-blur-md rounded-lg p-5 md:p-6 border border-white/30 shadow-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 leading-none">20+</div>
                  <div className="text-[10px] md:text-xs text-white/90 uppercase tracking-wider font-medium">Anos de Experiência</div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-lg p-5 md:p-6 border border-white/30 shadow-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 leading-none">100+</div>
                  <div className="text-[10px] md:text-xs text-white/90 uppercase tracking-wider font-medium">Júris Realizados</div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-lg p-5 md:p-6 border border-white/30 shadow-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 leading-none">12</div>
                  <div className="text-[10px] md:text-xs text-white/90 uppercase tracking-wider font-medium">Estados de Atuação</div>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-lg p-5 md:p-6 border border-white/30 shadow-lg hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 leading-none">500+</div>
                  <div className="text-[10px] md:text-xs text-white/90 uppercase tracking-wider font-medium">Sustentações Orais</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
