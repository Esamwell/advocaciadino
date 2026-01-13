import article1 from "@assets/generated_images/digital_signature_on_tablet.png";
import article2 from "@assets/generated_images/business_credit_and_finance.png";
import article3 from "@assets/generated_images/calculator_and_financial_documents.png";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Assinatura Eletrônica e Validade Jurídica: Guia Completo para 2025",
    date: "31/03/2025",
    category: "Destaques | Direito do Trabalho",
    excerpt: "A adoção de assinaturas eletrônicas tem transformado o cenário jurídico e empresarial, proporcionando mais agilidade...",
    image: article1,
    author: "HMGC Advogados"
  },
  {
    title: "Recuperação Judicial – Qual o Risco de Conceder Crédito",
    date: "10/11/2021",
    category: "Destaques | Direito Tributário",
    excerpt: "Não é preciso muito para sentir o estigma que envolve uma empresa em recuperação judicial...",
    image: article2,
    author: "Renato Gois"
  },
  {
    title: "Multa Tributária de 100% é Confiscatória?",
    date: "16/11/2020",
    category: "Destaques | Direito Tributário",
    excerpt: "O Supremo Tribunal Federal tem afirmado há tempos que, regra geral, é confiscatória a multa tributária que exceda 100%.",
    image: article3,
    author: "Marcos Luiz de Melo"
  }
];

export function Articles() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 relative">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2 block">Publicações Jurídicas</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary relative inline-block px-8 bg-background z-10">
            Artigos Recentes
          </h2>
          <div className="absolute top-1/2 left-0 w-full h-px bg-border -z-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="border-none shadow-none hover:shadow-lg transition-all duration-300 group bg-transparent">
              <CardHeader className="p-0 overflow-hidden rounded-lg mb-6">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-2 py-0">
                <h3 className="text-xl font-bold font-serif text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <div className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wide">
                  <span className="text-secondary">{article.author}</span> • {article.date}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="px-2 pt-0">
                 <span className="text-xs font-bold text-primary/60 uppercase tracking-widest group-hover:text-secondary transition-colors">
                   {article.category}
                 </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
