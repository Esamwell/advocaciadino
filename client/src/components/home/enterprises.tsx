import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, Lock, Users, Globe, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export function Enterprises() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Shield,
      title: t("enterprises.services.systemic.title"),
      description: t("enterprises.services.systemic.description"),
    },
    {
      icon: Lock,
      title: t("enterprises.services.confidentiality.title"),
      description: t("enterprises.services.confidentiality.description"),
    },
    {
      icon: Users,
      title: t("enterprises.services.governance.title"),
      description: t("enterprises.services.governance.description"),
    },
    {
      icon: Globe,
      title: t("enterprises.services.international.title"),
      description: t("enterprises.services.international.description"),
    },
  ];
  
  const practiceAreas = [
    t("enterprises.areas.civil"),
    t("enterprises.areas.tax"),
    t("enterprises.areas.labor"),
    t("enterprises.areas.consumer"),
    t("enterprises.areas.family"),
    t("enterprises.areas.public"),
    t("enterprises.areas.compliance"),
  ];
  
  return (
    <section id="enterprises" className="py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">{t("enterprises.title")}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">
            {t("enterprises.heading")}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground text-base md:text-lg">
            {t("enterprises.description")}
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
              <CardTitle className="text-2xl font-serif text-primary">{t("enterprises.businessAreas.title")}</CardTitle>
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
              <CardTitle className="text-2xl font-serif text-primary">{t("enterprises.differentiators.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{t("enterprises.differentiators.directService.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("enterprises.differentiators.directService.description")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{t("enterprises.differentiators.multidisciplinary.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("enterprises.differentiators.multidisciplinary.description")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{t("enterprises.differentiators.complexCases.title")}</p>
                    <p className="text-sm text-muted-foreground">
                      {t("enterprises.differentiators.complexCases.description")}
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
          <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold mb-4">{t("enterprises.cta")}</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            {t("enterprises.ctaText")}
          </p>
          <Link href="/contato">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              {t("enterprises.button")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

