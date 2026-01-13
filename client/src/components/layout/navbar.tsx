import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "O Escritório", href: "#about" },
    { name: "Nossa Equipe", href: "#team" },
    { name: "Tribunais Superiores", href: "#superior-courts" },
    { name: "Tribunal do Júri", href: "#jury" },
    { name: "Empresas", href: "#enterprises" },
    { name: "Na Imprensa", href: "#press" },
    { name: "Contato", href: "#contact" },
  ];

  const practiceAreas = [
    { name: "Direito Penal", href: "#practices" },
    { name: "Direito Penal Militar", href: "#practices" },
    { name: "Tribunal do Júri", href: "#jury" },
    { name: "Tribunais Superiores", href: "#superior-courts" },
    { name: "Civil e Empresarial", href: "#practices" },
    { name: "Direito Tributário", href: "#practices" },
    { name: "Direito do Trabalho", href: "#practices" },
    { name: "Direito do Consumidor", href: "#practices" },
    { name: "Família Empresarial", href: "#practices" },
    { name: "Público Municipal e Estadual", href: "#practices" },
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
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs xl:text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider whitespace-nowrap",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          
          {/* Áreas de Atuação Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "text-xs xl:text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider flex items-center gap-1 outline-none whitespace-nowrap",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              Áreas
              <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {practiceAreas.map((area) => (
                <DropdownMenuItem key={area.name} asChild>
                  <a
                    href={area.href}
                    className="cursor-pointer"
                    onClick={() => {
                      const element = document.querySelector(area.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {area.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(2, 5).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs xl:text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider whitespace-nowrap",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "text-xs xl:text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider flex items-center gap-1 outline-none whitespace-nowrap",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              Mais
              <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.slice(5).map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <a
                    href={link.href}
                    className="cursor-pointer"
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white font-medium px-4 xl:px-6 text-xs xl:text-sm whitespace-nowrap"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contato
          </Button>
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
            <a
              key={link.name}
              href={link.href}
              className="py-3 text-lg font-medium border-b border-border/50 last:border-0 hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="py-3 border-b border-border/50">
            <p className="text-lg font-medium mb-2">Áreas de Atuação</p>
            <div className="pl-4 space-y-2">
              {practiceAreas.map((area) => (
                <a
                  key={area.name}
                  href={area.href}
                  className="block text-sm text-muted-foreground hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {area.name}
                </a>
              ))}
            </div>
          </div>
          <Button 
            className="mt-4 w-full bg-secondary text-white hover:bg-secondary/90"
            onClick={() => {
              setIsOpen(false);
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Solicitar Atendimento
          </Button>
        </div>
      )}
    </nav>
  );
}
