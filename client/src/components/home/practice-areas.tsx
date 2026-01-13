import { Scale, Gavel, Building2, Briefcase, FileText, Users, Shield, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const practices = [
  {
    title: "Direito Penal",
    description: "Defesa em inquéritos policiais e ações penais, atuando em crimes comuns e complexos com estratégia e técnica.",
    icon: Scale,
  },
  {
    title: "Direito Penal Militar",
    description: "Especialistas na defesa de policiais e bombeiros militares em processos administrativos e judiciais.",
    icon: Shield,
  },
  {
    title: "Tribunal do Júri",
    description: "Mais de 100 julgamentos realizados. Atuação técnica, oratória forense e domínio da psicologia do julgamento.",
    icon: Gavel,
  },
  {
    title: "Direito Civil e Empresarial",
    description: "Assessoria estratégica para grandes empresas, gestão de risco jurídico e contencioso cível.",
    icon: Building2,
  },
  {
    title: "Direito Tributário",
    description: "Defesa administrativa e judicial em matéria tributária para empresas nacionais e internacionais.",
    icon: FileText,
  },
  {
    title: "Tribunais Superiores",
    description: "Sustentações orais e recursos no STF e STJ. Reversão de decisões e proteção de direitos fundamentais.",
    icon: Landmark,
  },
];

export function PracticeAreas() {
  return (
    <section id="practices" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Áreas de Atuação</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Atuação multidisciplinar e especializada para oferecer soluções jurídicas completas e eficazes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-muted-foreground leading-relaxed">
                  {practice.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
