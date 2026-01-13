import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
    { name: "Áreas de Atuação", href: "#practices" },
    { name: "Tribunal do Júri", href: "#jury" },
    { name: "Contato", href: "#contact" },
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
        <Link href="/">
          <span className={cn("text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors cursor-pointer block", 
            isScrolled ? "text-primary" : "text-white")}>
            HMG<span className="text-secondary">C</span>
            <span className="block text-xs font-sans font-medium tracking-widest mt-1 opacity-90">ADVOGADOS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-secondary transition-colors uppercase tracking-wider",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6"
          >
            Solicitar Atendimento
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
        <div className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden flex flex-col p-6 shadow-xl animate-in slide-in-from-top-5">
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
          <Button className="mt-4 w-full bg-secondary text-white hover:bg-secondary/90">
            Solicitar Atendimento
          </Button>
        </div>
      )}
    </nav>
  );
}
