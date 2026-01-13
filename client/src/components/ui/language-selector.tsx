import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "pt-BR" as const, name: "Português", flag: "🇧🇷" },
  { code: "en-US" as const, name: "English", flag: "🇺🇸" },
  { code: "es-ES" as const, name: "Español", flag: "🇪🇸" },
];

export function LanguageSelector({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const currentLang = languages.find((lang) => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors outline-none",
          className
        )}
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-sm font-medium hidden sm:inline">{currentLang.name}</span>
        <Globe className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              "flex items-center gap-3 cursor-pointer",
              language === lang.code && "bg-muted"
            )}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="flex-1">{lang.name}</span>
            {language === lang.code && (
              <span className="text-secondary text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

