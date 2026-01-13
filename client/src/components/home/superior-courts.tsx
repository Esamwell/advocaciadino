import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export function SuperiorCourts() {
  const { t } = useLanguage();
  
  return (
    <section id="superior-courts" className="py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">{t("superiorCourts.title")}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">{t("superiorCourts.heading")}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground text-base md:text-lg">
            {t("superiorCourts.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-serif text-primary">{t("superiorCourts.stf.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t("superiorCourts.stf.description")}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("superiorCourts.stf.item1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("superiorCourts.stf.item2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("superiorCourts.stf.item3")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-serif text-primary">{t("superiorCourts.stj.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t("superiorCourts.stj.description")}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("superiorCourts.stj.item1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("superiorCourts.stj.item2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{t("superiorCourts.stj.item3")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
          <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold mb-4">{t("superiorCourts.cta.title")}</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            {t("superiorCourts.cta.description")}
          </p>
          <Link href="/contato">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              {t("superiorCourts.cta.button")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

