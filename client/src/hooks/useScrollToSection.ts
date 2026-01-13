import { useEffect } from "react";
import { useLocation } from "wouter";

// Mapeamento de rotas para IDs de seção
const routeToSectionMap: Record<string, string> = {
  "/sobre": "about",
  "/equipe": "team",
  "/tribunais-superiores": "superior-courts",
  "/tribunal-do-juri": "jury",
  "/empresas": "enterprises",
  "/imprensa": "press",
  "/areas-de-atuacao": "practices",
  "/contato": "contact",
};

export function useScrollToSection() {
  const [location] = useLocation();

  useEffect(() => {
    // Função para fazer scroll para a seção
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Scroll suave para a seção, com offset para o navbar fixo
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    // Se não for a rota raiz, fazer scroll para a seção correspondente
    if (location !== "/" && routeToSectionMap[location]) {
      const sectionId = routeToSectionMap[location];
      
      // Tentar fazer scroll imediatamente
      scrollToSection(sectionId);
      
      // Se não encontrar, tentar novamente após um delay (para garantir que o DOM está renderizado)
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    } else if (location === "/") {
      // Se for a rota raiz, scroll para o topo apenas se não estiver no topo
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [location]);
}

