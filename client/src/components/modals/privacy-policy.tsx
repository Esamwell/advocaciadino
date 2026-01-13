import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyPolicyModal({ open, onOpenChange }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">
            Política de Privacidade
          </DialogTitle>
          <DialogDescription>
            Advocacia Dinoermeson Nascimento
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. Informações Coletadas</h3>
              <p className="mb-2">
                A Advocacia Dinoermeson Nascimento respeita a privacidade de seus clientes e visitantes. 
                Coletamos informações apenas quando necessário para prestação de serviços jurídicos ou 
                quando você voluntariamente as fornece através de formulários de contato.
              </p>
              <p>
                As informações coletadas podem incluir: nome, e-mail, telefone, endereço e outras 
                informações relevantes para a prestação de serviços jurídicos.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. Uso das Informações</h3>
              <p className="mb-2">
                Utilizamos as informações coletadas exclusivamente para:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Prestação de serviços jurídicos</li>
                <li>Comunicação com clientes e potenciais clientes</li>
                <li>Atendimento de solicitações e dúvidas</li>
                <li>Cumprimento de obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. Sigilo Profissional</h3>
              <p>
                Como escritório de advocacia, observamos rigorosamente o sigilo profissional estabelecido 
                pelo Código de Ética e Disciplina da OAB, garantindo total confidencialidade sobre todas 
                as informações compartilhadas conosco.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">4. Segurança dos Dados</h3>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
                suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">5. Compartilhamento de Informações</h3>
              <p>
                Não compartilhamos informações pessoais com terceiros, exceto quando necessário para 
                a prestação de serviços jurídicos, cumprimento de obrigações legais, ou com seu 
                consentimento expresso.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">6. Seus Direitos</h3>
              <p className="mb-2">
                Você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de dados, quando aplicável</li>
                <li>Revogar consentimento, quando aplicável</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">7. Alterações nesta Política</h3>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. A data da última 
                atualização será indicada no início deste documento.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">8. Contato</h3>
              <p>
                Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados, 
                entre em contato conosco através dos canais disponíveis em nosso site.
              </p>
            </section>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground italic">
                Última atualização: Janeiro de 2026
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

