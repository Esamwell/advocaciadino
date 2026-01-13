import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Newspaper } from "lucide-react";

const pressItems = [
  {
    title: "Atuação em Caso de Grande Repercussão",
    source: "Jornal da Bahia",
    date: "2024",
    excerpt: "Advogado Dinoermeson Nascimento atua em caso de grande repercussão envolvendo direitos fundamentais...",
    category: "Direito Penal",
  },
  {
    title: "Defesa de Agentes de Segurança Pública",
    source: "Tribuna da Bahia",
    date: "2024",
    excerpt: "Escritório destaca-se na defesa técnica de policiais militares em processos administrativos e judiciais...",
    category: "Direito Militar",
  },
  {
    title: "Tribunal do Júri: Experiência e Técnica",
    source: "Revista Jurídica",
    date: "2023",
    excerpt: "Com mais de 100 julgamentos realizados, escritório consolida experiência em Tribunal do Júri...",
    category: "Tribunal do Júri",
  },
];

export function Press() {
  return (
    <section id="press" className="py-20 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 relative">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2 block">Na Imprensa</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary relative inline-block px-6 md:px-8 bg-background z-10">
            Reconhecimento e Visibilidade
          </h2>
          <div className="absolute top-1/2 left-0 w-full h-px bg-border -z-0" />
        </div>

        <div className="bg-muted/30 rounded-lg p-6 md:p-8 mb-10 md:mb-12 max-w-3xl mx-auto text-center">
          <Newspaper className="w-12 h-12 text-secondary mx-auto mb-4" />
          <p className="text-muted-foreground leading-relaxed">
            A atuação profissional e institucional de Dinoermeson Tiago dos Santos Nascimento é frequentemente 
            acompanhada pela imprensa, especialmente em casos de grande repercussão. Todo conteúdo jornalístico 
            respeita rigorosamente o sigilo profissional e as normas da OAB.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pressItems.map((item, index) => (
            <Card key={index} className="border-none shadow-none hover:shadow-lg transition-all duration-300 group bg-transparent">
              <CardHeader className="p-0 mb-6">
                <div className="aspect-[4/3] bg-muted/50 rounded-lg flex items-center justify-center">
                  <Newspaper className="w-16 h-16 text-muted-foreground/30" />
                </div>
              </CardHeader>
              <CardContent className="px-2 py-0">
                <Badge variant="outline" className="mb-3 text-xs">
                  {item.category}
                </Badge>
                <h3 className="text-xl font-bold font-serif text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wide">
                  <span className="text-secondary">{item.source}</span> • {item.date}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
              </CardContent>
              <CardFooter className="px-2 pt-0">
                <a 
                  href="#" 
                  className="text-xs font-bold text-primary/60 uppercase tracking-widest group-hover:text-secondary transition-colors flex items-center gap-2"
                >
                  Ler mais <ExternalLink className="w-3 h-3" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            Nota: Todo o conteúdo jornalístico respeita rigorosamente o sigilo profissional e as normas 
            estabelecidas pelo Conselho Federal da OAB, especialmente o Provimento nº 205/2021.
          </p>
        </div>
      </div>
    </section>
  );
}

