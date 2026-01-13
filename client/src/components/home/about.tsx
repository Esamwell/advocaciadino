import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import lawyerImage from "@assets/generated_images/senior_lawyer_portrait.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 -z-10 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 -z-10 rounded-br-3xl" />
            
            <div className="bg-muted aspect-[4/5] rounded-lg overflow-hidden relative shadow-xl">
               <img 
                  src={lawyerImage} 
                  alt="Dinoermeson Nascimento"
                  className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                  <p className="text-white font-serif text-xl font-bold">Dinoermeson Nascimento</p>
                  <p className="text-white/80 text-sm tracking-wide uppercase">Sócio Fundador</p>
               </div>
            </div>
          </div>

          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Quem Somos</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              Compromisso com a defesa intransigente das garantias constitucionais.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A Advocacia Dinoermeson Nascimento nasce da missão de exercer a advocacia com excelência técnica, coragem e responsabilidade. Atuamos de forma estratégica e personalizada, oferecendo atendimento próximo a cada cliente.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              O escritório possui forte atuação na defesa de policiais militares, agentes de segurança pública e cidadãos submetidos a processos criminais complexos, bem como em demandas estratégicas que envolvem liberdade, honra e direitos fundamentais.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Mais de 100 Júris Realizados", "Atuação em Tribunais Superiores", "Defesa Militar Especializada", "Compliance & Ética"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Conheça Nossa Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
