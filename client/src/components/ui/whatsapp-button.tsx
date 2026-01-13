import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/message/UY62FE5BEOPPD1?autoload=1&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Fale conosco no WhatsApp"
    >
      <Button
        size="lg"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg h-14 w-14 p-0 animate-bounce hover:animate-none transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </a>
  );
}

