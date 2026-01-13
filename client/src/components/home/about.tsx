import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 -z-10 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 -z-10 rounded-br-3xl" />
            
            <div className="bg-muted aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden relative shadow-xl max-w-md mx-auto lg:max-w-none">
               <img 
                  src="/drdino2.jpg" 
                  alt="Dr. Dinoermeson Nascimento"
                  className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                  <p className="text-white font-serif text-xl font-bold">Dr. Dinoermeson Nascimento</p>
                  <p className="text-white/80 text-sm tracking-wide uppercase">Sócio Fundador • OAB/BA nº 36.408</p>
               </div>
            </div>
          </div>

          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">{t("about.title")}</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4 leading-tight">
              {t("about.heading")}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
              {t("about.description1")}
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              {t("about.description2")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 p-4 md:p-6 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-serif font-bold text-primary mb-2 text-lg">{t("about.mission")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("about.missionText")}
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-primary mb-2 text-lg">{t("about.vision")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("about.visionText")}
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-primary mb-2 text-lg">{t("about.values")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("about.valuesText")}
                </p>
              </div>
            </div>

            <h3 className="font-serif font-bold text-primary mb-3 text-lg md:text-xl">{t("about.differentiators")}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6">
              {[
                t("about.differentiator1"),
                t("about.differentiator2"),
                t("about.differentiator3"),
                t("about.differentiator4"),
                t("about.differentiator5"),
                t("about.differentiator6")
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/equipe">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                {t("about.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
