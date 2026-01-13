import { Scale, Gavel, Building2, Briefcase, FileText, Users, Shield, Landmark, ShoppingCart, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export function PracticeAreas() {
  const { t } = useLanguage();
  
  const practices = [
    {
      title: t("practiceAreas.criminal"),
      description: t("practiceAreas.criminalDesc"),
      icon: Scale,
      details: [
        t("practiceAreas.criminalDetails.1"),
        t("practiceAreas.criminalDetails.2"),
        t("practiceAreas.criminalDetails.3"),
        t("practiceAreas.criminalDetails.4")
      ]
    },
    {
      title: t("practiceAreas.military"),
      description: t("practiceAreas.militaryDesc"),
      icon: Shield,
      details: [
        t("practiceAreas.militaryDetails.1"),
        t("practiceAreas.militaryDetails.2"),
        t("practiceAreas.militaryDetails.3"),
        t("practiceAreas.militaryDetails.4")
      ]
    },
    {
      title: t("practiceAreas.jury"),
      description: t("practiceAreas.juryDesc"),
      icon: Gavel,
      details: [
        t("practiceAreas.juryDetails.1"),
        t("practiceAreas.juryDetails.2"),
        t("practiceAreas.juryDetails.3"),
        t("practiceAreas.juryDetails.4")
      ]
    },
    {
      title: t("practiceAreas.civil"),
      description: t("practiceAreas.civilDesc"),
      icon: Building2,
      details: [
        t("practiceAreas.civilDetails.1"),
        t("practiceAreas.civilDetails.2"),
        t("practiceAreas.civilDetails.3"),
        t("practiceAreas.civilDetails.4")
      ]
    },
    {
      title: t("practiceAreas.tax"),
      description: t("practiceAreas.taxDesc"),
      icon: FileText,
      details: [
        t("practiceAreas.taxDetails.1"),
        t("practiceAreas.taxDetails.2"),
        t("practiceAreas.taxDetails.3"),
        t("practiceAreas.taxDetails.4")
      ]
    },
    {
      title: t("practiceAreas.labor"),
      description: t("practiceAreas.laborDesc"),
      icon: Briefcase,
      details: [
        t("practiceAreas.laborDetails.1"),
        t("practiceAreas.laborDetails.2"),
        t("practiceAreas.laborDetails.3"),
        t("practiceAreas.laborDetails.4")
      ]
    },
    {
      title: t("practiceAreas.consumer"),
      description: t("practiceAreas.consumerDesc"),
      icon: ShoppingCart,
      details: [
        t("practiceAreas.consumerDetails.1"),
        t("practiceAreas.consumerDetails.2"),
        t("practiceAreas.consumerDetails.3"),
        t("practiceAreas.consumerDetails.4")
      ]
    },
    {
      title: t("practiceAreas.family"),
      description: t("practiceAreas.familyDesc"),
      icon: Home,
      details: [
        t("practiceAreas.familyDetails.1"),
        t("practiceAreas.familyDetails.2"),
        t("practiceAreas.familyDetails.3"),
        t("practiceAreas.familyDetails.4")
      ]
    },
    {
      title: t("practiceAreas.public"),
      description: t("practiceAreas.publicDesc"),
      icon: Landmark,
      details: [
        t("practiceAreas.publicDetails.1"),
        t("practiceAreas.publicDetails.2"),
        t("practiceAreas.publicDetails.3"),
        t("practiceAreas.publicDetails.4")
      ]
    },
  ];
  
  return (
    <section id="practices" className="py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">{t("practiceAreas.title")}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground text-base md:text-lg">
            {t("practiceAreas.description")}
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
