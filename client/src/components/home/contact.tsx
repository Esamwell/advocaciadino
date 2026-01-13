import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">{t("contact.title")}</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mb-4 md:mb-6">
              {t("contact.heading")}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">{t("contact.phone")}</h4>
                  <p className="text-muted-foreground">(71) XXXX-XXXX</p>
                  <p className="text-sm text-muted-foreground/80 mt-1">OAB/BA nº 36.408</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">{t("contact.email")}</h4>
                  <p className="text-muted-foreground">contato@advocaciadn.com.br</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary text-lg">{t("contact.location")}</h4>
                  <p className="text-muted-foreground">
                    Salvador • Bahia<br />
                    Brasil
                  </p>
                  <p className="text-sm text-muted-foreground/80 mt-1">
                    Site: www.advocaciadn.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border border-border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("contact.form.name")}</label>
                  <Input placeholder={t("contact.form.name")} className="bg-muted/50 border-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("contact.form.email")}</label>
                  <Input type="email" placeholder={t("contact.form.email")} className="bg-muted/50 border-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("contact.form.subject")}</label>
                <Input placeholder={t("contact.form.subject")} className="bg-muted/50 border-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("contact.form.message")}</label>
                <Textarea placeholder={t("contact.form.message")} className="bg-muted/50 border-none min-h-[150px]" />
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 text-lg">
                {t("contact.form.send")} <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
