import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function About() {
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
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">O Escritório</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4 leading-tight">
              Compromisso com a defesa intransigente das garantias constitucionais.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
              A Advocacia Dinoermeson Nascimento nasce do compromisso com a defesa intransigente das garantias constitucionais, da legalidade e da dignidade da pessoa humana. Atuamos de forma estratégica, técnica e personalizada, oferecendo atendimento próximo e responsável a cada cliente.
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              O escritório possui forte atuação na defesa de policiais militares, agentes de segurança pública e cidadãos submetidos a processos criminais complexos, bem como em demandas estratégicas que envolvem liberdade, honra e direitos fundamentais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 p-4 md:p-6 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-serif font-bold text-primary mb-2 text-lg">Missão</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Exercer a advocacia com excelência técnica, coragem e responsabilidade, defendendo direitos fundamentais e garantindo justiça.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-primary mb-2 text-lg">Visão</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ser referência regional em advocacia criminal e militar, reconhecida pela qualidade técnica e atuação ética.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-primary mb-2 text-lg">Valores</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ética, Legalidade, Lealdade ao cliente, Defesa intransigente das garantias constitucionais, Compromisso com a justiça.
                </p>
              </div>
            </div>

            <h3 className="font-serif font-bold text-primary mb-3 text-lg md:text-xl">Diferenciais</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6">
              {[
                "Atendimento direto pelos sócios responsáveis",
                "Atuação estratégica e personalizada",
                "Corpo jurídico multidisciplinar e especialista",
                "Forte experiência em casos sensíveis e de alta complexidade",
                "Defesa técnica com linguagem clara e objetiva",
                "Mais de 100 Júris Realizados"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-primary text-white hover:bg-primary/90" onClick={() => {
              const element = document.getElementById('team');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Conheça Nossa Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
