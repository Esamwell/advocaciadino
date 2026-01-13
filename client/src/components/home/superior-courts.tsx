import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SuperiorCourts() {
  return (
    <section id="superior-courts" className="py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Tribunais Superiores</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">Atuação no STF e STJ</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground text-base md:text-lg">
            Especialidade em sustentações orais exitosas, Habeas Corpus e Recursos Constitucionais. 
            Reversão de decisões, reconhecimento de nulidades e proteção de direitos fundamentais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-serif text-primary">Supremo Tribunal Federal (STF)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Atuação em recursos extraordinários, ações diretas de inconstitucionalidade, 
                habeas corpus e demais processos de competência do STF.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Sustentações orais perante o Plenário</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Habeas Corpus em casos de grande repercussão</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Recursos Constitucionais</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-serif text-primary">Superior Tribunal de Justiça (STJ)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Atuação em recursos especiais, habeas corpus e demais processos de competência do STJ, 
                com foco na uniformização da jurisprudência e proteção de direitos fundamentais.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Sustentações orais exitosas</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Reversão de decisões desfavoráveis</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Reconhecimento de nulidades processuais</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
          <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold mb-4">Proteção de Direitos Fundamentais</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            Nossa atuação nos Tribunais Superiores tem como objetivo principal a proteção de direitos fundamentais, 
            a reversão de decisões injustas e o reconhecimento de nulidades que violam garantias constitucionais.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
}

