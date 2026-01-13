import { createContext, useContext, useState, ReactNode } from "react";
import ptBR from "../locales/pt-BR.json";
import enUS from "../locales/en-US.json";
import esES from "../locales/es-ES.json";

type Language = "pt-BR" | "en-US" | "es-ES";

const translations: Record<Language, Record<string, string>> = {
  "pt-BR": ptBR as Record<string, string>,
  "en-US": enUS as Record<string, string>,
  "es-ES": esES as Record<string, string>,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Verificar localStorage ou detectar idioma do navegador
    if (typeof window === "undefined") return "pt-BR";
    
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "pt-BR" || saved === "en-US" || saved === "es-ES")) return saved;
    
    const browserLang = navigator.language;
    if (browserLang.startsWith("es")) return "es-ES";
    if (browserLang.startsWith("en")) return "en-US";
    return "pt-BR";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

