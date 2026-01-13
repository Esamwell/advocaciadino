import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";
import { PrivacyPolicyModal } from "@/components/modals/privacy-policy";
import { CodeOfEthicsModal } from "@/components/modals/code-of-ethics";

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [ethicsOpen, setEthicsOpen] = useState(false);

  return (
    <>
      <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img 
              src="/logodn-branco.png" 
              alt="Advocacia Dinoermeson Nascimento"
              className="h-16 md:h-20 w-auto object-contain mb-4"
            />
            <p className="text-sm text-white/60 mb-6">Salvador • Bahia</p>
            <div className="flex gap-4 mt-6">
              <Button size="icon" variant="ghost" className="hover:text-secondary hover:bg-white/5"><Facebook className="w-5 h-5" /></Button>
              <Button size="icon" variant="ghost" className="hover:text-secondary hover:bg-white/5"><Instagram className="w-5 h-5" /></Button>
              <Button size="icon" variant="ghost" className="hover:text-secondary hover:bg-white/5"><Linkedin className="w-5 h-5" /></Button>
            </div>
          </div>

          {/* Contact 1 */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Telefone</p>
                <p className="font-medium hover:text-secondary transition-colors cursor-pointer">(71) XXXX-XXXX</p>
                <p className="text-xs text-white/60 mt-1">OAB/BA nº 36.408</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Atendimento</p>
                <p className="text-sm text-white/80">Mediante prévio agendamento</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
             <ul className="space-y-2 text-sm text-white/70">
               {[
                 { name: 'O Escritório', href: '/sobre' },
                 { name: 'Nossa Equipe', href: '/equipe' },
                 { name: 'Tribunal do Júri', href: '/tribunal-do-juri' },
                 { name: 'Tribunais Superiores', href: '/tribunais-superiores' },
                 { name: 'Empresas & Grandes Contas', href: '/empresas' },
                 { name: 'Na Imprensa', href: '/imprensa' },
                 { name: 'Áreas de Atuação', href: '/areas-de-atuacao' },
                 { name: 'Contato', href: '/contato' }
               ].map(item => (
                 <li key={item.name}>
                   <Link 
                     href={item.href}
                     className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-2"
                   >
                     <span className="text-secondary text-xs">→</span> {item.name}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Localização</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Salvador • Bahia<br/>
                  Brasil
                </p>
                <p className="text-xs text-white/60 mt-2">
                  Site: www.advocaciadn.com.br
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <p>Copyright © 2026 - Advocacia Dinoermeson Nascimento. Todos os Direitos Reservados.</p>
          <div className="flex gap-4">
            <button 
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={() => setEthicsOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Código de Ética
            </button>
          </div>
        </div>
        <div className="mt-4 text-xs text-white/30 text-center">
          <p>Todo o conteúdo institucional observa rigorosamente o Provimento nº 205/2021 do Conselho Federal da OAB, não realizando promessas de resultado ou mercantilização da advocacia.</p>
        </div>
      </div>
    </footer>
    
    <PrivacyPolicyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    <CodeOfEthicsModal open={ethicsOpen} onOpenChange={setEthicsOpen} />
    </>
  );
}
