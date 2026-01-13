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
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  useScrollToSection();
  const { t } = useLanguage();
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 md:mb-6">{t("jury.title")}</h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-3 md:mb-4 leading-relaxed">
                {t("jury.description1")}
              </p>
              <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                {t("jury.description2")}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mb-10 md:mb-12">
               {[
                 { value: "20+", label: t("hero.stats.years") },
                 { value: "100+", label: t("hero.stats.juries") },
                 { value: "12", label: t("hero.stats.states") },
                 { value: "500+", label: t("hero.stats.oral") }
               ].map((stat, i) => (
                 <div key={i} className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                   <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                   <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary">{t("jury.strategy")}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t("jury.strategyText")}
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary">{t("jury.oratory")}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t("jury.oratoryText")}
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary">{t("jury.technique")}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t("jury.techniqueText")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Press />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
