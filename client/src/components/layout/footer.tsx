import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container px-4 md:px-6">
        {/* Flags & International - Visual cue from image */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-white/10 pb-12">
          {['Portugal', 'China', 'Itália'].map((country) => (
            <div key={country} className="text-center group cursor-pointer">
              <div className="w-12 h-8 bg-white/10 mb-3 mx-auto rounded shadow-sm relative overflow-hidden">
                {/* Simple CSS Flags placeholders */}
                {country === 'Portugal' && <div className="flex h-full"><div className="w-2/5 bg-green-700 h-full"></div><div className="w-3/5 bg-red-700 h-full"></div></div>}
                {country === 'China' && <div className="bg-red-700 h-full w-full"></div>}
                {country === 'Itália' && <div className="flex h-full"><div className="w-1/3 bg-green-700 h-full"></div><div className="w-1/3 bg-white h-full"></div><div className="w-1/3 bg-red-700 h-full"></div></div>}
              </div>
              <p className="text-xs font-bold tracking-widest text-white/60 group-hover:text-white transition-colors uppercase">Associados HMGC<br/>{country}</p>
            </div>
          ))}
          <div className="ml-auto self-center hidden lg:block">
            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium tracking-wide">
              SOLICITAR ATENDIMENTO
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              HMGC<span className="text-secondary">ADVOGADOS</span>
            </h3>
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
                <p className="font-medium hover:text-secondary transition-colors cursor-pointer">+55 11 3473-8051</p>
                <p className="font-medium hover:text-secondary transition-colors cursor-pointer">+55 11 3562-5998</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Atendimento</p>
                <p className="text-sm text-white/80">Seg a Sex: 09h às 18h</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
             <ul className="space-y-2 text-sm text-white/70">
               {['O Escritório', 'Cível', 'Compliance', 'Licitações e Contratos', 'Trabalhista', 'Tributário', 'Previdenciário', 'Família'].map(item => (
                 <li key={item} className="hover:text-secondary transition-colors cursor-pointer flex items-center gap-2">
                   <span className="text-secondary text-xs">→</span> {item}
                 </li>
               ))}
             </ul>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Entrada Principal</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Av. Ibirapuera, 2120, 20º Andar<br/>
                  Moema, São Paulo-SP<br/>
                  CEP 04028-001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Estacionamento</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Av. Juriti, 674<br/>
                  Moema, São Paulo-SP
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <p>Copyright © 2026 - HMGC Advogados. Todos os Direitos Reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Código de Ética</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
