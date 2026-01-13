import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Users, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Team() {
  const { t } = useLanguage();
  
  const teamMembers = [
    {
      name: t("team.dinoermeson.name"),
      role: t("team.dinoermeson.role"),
      oab: "OAB/BA nº 36.408",
      description: t("team.dinoermeson.description"),
      achievements: [
        t("team.dinoermeson.achievement1"),
        t("team.dinoermeson.achievement2"),
        t("team.dinoermeson.achievement3"),
        t("team.dinoermeson.achievement4")
      ]
    },
    {
      name: t("team.ailton.name"),
      role: t("team.ailton.role"),
      description: t("team.ailton.description"),
      achievements: [
        t("team.ailton.achievement1"),
        t("team.ailton.achievement2"),
        t("team.ailton.achievement3"),
        t("team.ailton.achievement4")
      ]
    }
  ];
  
  return (
    <section id="team" className="py-20 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">{t("team.title")}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">{t("team.subtitle")}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 md:mb-6" />
          <p className="text-muted-foreground text-base md:text-lg">
            {t("team.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  {index === 0 ? (
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-primary/10 flex-shrink-0 shadow-md">
                      <img 
                        src="/drdino2.jpg" 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-12 h-12 text-secondary" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium mb-1">{member.role}</p>
                    {member.oab && (
                      <p className="text-sm text-muted-foreground">{member.oab}</p>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{member.description}</p>
                <div className="space-y-3">
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <GraduationCap className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold text-primary mb-3">{t("team.multidisciplinary")}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("team.multidisciplinaryText")}
          </p>
        </div>
      </div>
    </section>
  );
}

