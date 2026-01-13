import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/sobre" },
    { name: t("nav.team"), href: "/equipe" },
    { name: t("nav.superiorCourts"), href: "/tribunais-superiores" },
    { name: t("nav.jury"), href: "/tribunal-do-juri" },
    { name: t("nav.enterprises"), href: "/empresas" },
    { name: t("nav.press"), href: "/imprensa" },
    { name: t("nav.contact"), href: "/contato" },
  ];

  const practiceAreas = [
    { name: "Direito Penal", href: "/areas-de-atuacao" },
    { name: "Direito Penal Militar", href: "/areas-de-atuacao" },
    { name: "Tribunal do Júri", href: "/tribunal-do-juri" },
    { name: "Tribunais Superiores", href: "/tribunais-superiores" },
    { name: "Civil e Empresarial", href: "/areas-de-atuacao" },
    { name: "Direito Tributário", href: "/areas-de-atuacao" },
    { name: "Direito do Trabalho", href: "/areas-de-atuacao" },
    { name: "Direito do Consumidor", href: "/areas-de-atuacao" },
    { name: "Família Empresarial", href: "/areas-de-atuacao" },
    { name: "Público Municipal e Estadual", href: "/areas-de-atuacao" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src={isScrolled ? "/logodn.png" : "/logodn-branco.png"} 
            alt="Advocacia Dinoermeson Nascimento"
            className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs xl:text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white",
                location === link.href && "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Áreas de Atuação Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "text-xs xl:text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider flex items-center gap-1 outline-none whitespace-nowrap",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              {t("nav.practiceAreas")}
              <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {practiceAreas.map((area) => (
                <DropdownMenuItem key={area.name} asChild>
                  <Link href={area.href} className="cursor-pointer">
                    {area.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(2, 5).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs xl:text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white",
                location === link.href && "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "text-xs xl:text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider flex items-center gap-1 outline-none whitespace-nowrap",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              {t("nav.more")}
              <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.slice(5).map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link href={link.href} className="cursor-pointer">
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link href="/contato">
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-4 xl:px-6 text-xs xl:text-sm whitespace-nowrap"
            >
              {t("nav.contact")}
            </Button>
          </Link>
          
          <LanguageSelector 
            className={cn(
              isScrolled ? "text-foreground" : "text-white/90"
            )}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className={isScrolled ? "text-primary" : "text-white"} /> : <Menu className={isScrolled ? "text-primary" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden flex flex-col p-6 shadow-xl animate-in slide-in-from-top-5 max-h-[90vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-3 text-lg font-medium border-b border-border/50 last:border-0 hover:text-secondary transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="py-3 border-b border-border/50">
            <p className="text-lg font-medium mb-2">{t("nav.practiceAreas")}</p>
            <div className="pl-4 space-y-2">
              {practiceAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="block text-sm text-muted-foreground hover:text-secondary transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contato" onClick={() => setIsOpen(false)}>
            <Button 
              className="mt-4 w-full bg-secondary text-white hover:bg-secondary/90"
            >
              {t("hero.cta")}
            </Button>
          </Link>
          
          <div className="mt-4 pt-4 border-t border-border/50">
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
}
