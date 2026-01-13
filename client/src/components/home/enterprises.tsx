import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, Lock, Users, Globe, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: Shield,
    title: "Visão Sistêmica",
    description: "Análise completa dos riscos jurídicos e desenvolvimento de estratégias integradas para proteção dos interesses empresariais.",
  },
  {
    icon: Lock,
    title: "Sigilo Absoluto",
    description: "Compromisso com a confidencialidade e proteção de informações sensíveis, essenciais para grandes corporações.",
  },
  {
    icon: Users,
    title: "Governança e Compliance",
    description: "Assessoria em conformidade regulatória, estruturação de programas de compliance e gestão de riscos jurídicos.",
  },
  {
    icon: Globe,
    title: "Atuação Nacional e Internacional",
    description: "Capacidade de atender empresas com operações em múltiplos estados e países, com conhecimento das diferentes jurisdições.",
  },
];

const practiceAreas = [
  "Direito Civil e Empresarial",
  "Direito Tributário",
  "Direito do Trabalho",
  "Direito do Consumidor",
  "Direito de Família Empresarial",
  "Direito Público Municipal e Estadual",
  "Gestão de Risco e Compliance",
];

export function Enterprises() {
  return (
    <section id="enterprises" className="py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Empresas & Grandes Contas</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">
            Assessoria Jurídica Estratégica para Grandes Empresas
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground text-base md:text-lg">
            O escritório possui estrutura e expertise para atender grandes empresas nacionais e internacionais, 
            oferecendo assessoria jurídica estratégica e contenciosa com foco em resultados e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg font-serif text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          <Card className="border-none shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-serif text-primary">Áreas de Atuação Empresarial</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {practiceAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-card">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-serif text-primary">Nossos Diferenciais</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Atendimento Direto pelos Sócios</p>
                    <p className="text-sm text-muted-foreground">
                      Acesso direto aos sócios responsáveis, garantindo atenção personalizada e decisões estratégicas rápidas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Estrutura Multidisciplinar</p>
                    <p className="text-sm text-muted-foreground">
                      Corpo jurídico especializado em diversas áreas, permitindo uma visão integrada dos desafios empresariais.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Experiência em Casos Complexos</p>
                    <p className="text-sm text-muted-foreground">
                      Histórico comprovado em demandas de alta complexidade e grande repercussão empresarial.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
          <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold mb-4">Sua Empresa Merece Excelência Jurídica</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            Entre em contato para conhecer como podemos ajudar sua empresa com assessoria jurídica estratégica, 
            contencioso especializado e gestão de riscos jurídicos.
          </p>
          <Link href="/contato">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Solicitar Proposta
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

