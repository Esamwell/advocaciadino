import { Scale, Gavel, Building2, Briefcase, FileText, Users, Shield, Landmark, ShoppingCart, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const practices = [
  {
    title: "Direito Penal",
    description: "Defesa em inquéritos policiais e ações penais, atuando em crimes comuns e complexos com estratégia e técnica. Atuação em todas as fases processuais, desde a fase investigatória até recursos nos Tribunais Superiores.",
    icon: Scale,
    details: [
      "Inquéritos policiais",
      "Ações penais",
      "Crimes comuns e complexos",
      "Recursos e habeas corpus"
    ]
  },
  {
    title: "Direito Penal Militar",
    description: "Especialistas na defesa de policiais militares, bombeiros militares e agentes de segurança pública em processos administrativos e judiciais. Atuação em IPM, Conselhos de Disciplina e crimes militares próprios e impróprios.",
    icon: Shield,
    details: [
      "Defesa de PMs e Bombeiros",
      "IPM e Conselhos de Disciplina",
      "Crimes militares próprios/impróprios",
      "Justiça Militar"
    ]
  },
  {
    title: "Tribunal do Júri",
    description: "Mais de 100 julgamentos realizados. Atuação técnica, oratória forense e domínio da psicologia do julgamento. Especialização em crimes dolosos contra a vida, casos complexos e midiáticos.",
    icon: Gavel,
    details: [
      "Mais de 100 Júris realizados",
      "20+ anos de experiência",
      "Crimes dolosos contra a vida",
      "Casos complexos e midiáticos"
    ]
  },
  {
    title: "Direito Civil e Empresarial",
    description: "Assessoria estratégica para grandes empresas, gestão de risco jurídico e contencioso cível. Atuação em responsabilidade civil, contratos e demandas estratégicas.",
    icon: Building2,
    details: [
      "Contencioso estratégico",
      "Responsabilidade civil",
      "Contratos empresariais",
      "Gestão de risco jurídico"
    ]
  },
  {
    title: "Direito Tributário",
    description: "Defesa administrativa e judicial em matéria tributária para empresas nacionais e internacionais. Atuação em tributos federais, estaduais e municipais.",
    icon: FileText,
    details: [
      "Defesa administrativa",
      "Defesa judicial",
      "Tributos federais, estaduais e municipais",
      "Empresas nacionais e internacionais"
    ]
  },
  {
    title: "Direito do Trabalho",
    description: "Defesa empresarial e consultoria preventiva em questões trabalhistas. Atuação estratégica em demandas trabalhistas e estruturação de relações de trabalho.",
    icon: Briefcase,
    details: [
      "Defesa empresarial",
      "Consultoria preventiva",
      "Demandas trabalhistas",
      "Estruturação de relações de trabalho"
    ]
  },
  {
    title: "Direito do Consumidor",
    description: "Defesa judicial e administrativa de empresas e gestão de risco em relações de consumo. Atuação preventiva e contenciosa.",
    icon: ShoppingCart,
    details: [
      "Defesa judicial e administrativa",
      "Gestão de risco",
      "Relações de consumo",
      "Atuação preventiva"
    ]
  },
  {
    title: "Família Empresarial",
    description: "Planejamento sucessório, estruturação de famílias empresárias e divórcios com repercussão empresarial. Atuação estratégica em questões familiares que envolvem patrimônio empresarial.",
    icon: Home,
    details: [
      "Planejamento sucessório",
      "Estruturação de famílias empresárias",
      "Divórcios empresariais",
      "Proteção patrimonial"
    ]
  },
  {
    title: "Público Municipal e Estadual",
    description: "Assessoria a Municípios, Estados e Agentes Públicos. Atos administrativos, controle de legalidade e defesa em ações de natureza pública.",
    icon: Landmark,
    details: [
      "Assessoria a Municípios e Estados",
      "Atos administrativos",
      "Controle de legalidade",
      "Defesa de agentes públicos"
    ]
  },
];

export function PracticeAreas() {
  return (
    <section id="practices" className="py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">Áreas de Atuação</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground text-base md:text-lg">
            Atuação multidisciplinar e especializada para oferecer soluções jurídicas completas e eficazes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {practices.map((practice, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md bg-card overflow-hidden">
              <div className="h-1 w-full bg-transparent group-hover:bg-secondary transition-colors duration-300" />
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <practice.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-serif text-primary">{practice.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {practice.description}
                </p>
                {practice.details && (
                  <ul className="space-y-2">
                    {practice.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
