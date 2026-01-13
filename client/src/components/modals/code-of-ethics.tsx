import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CodeOfEthicsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CodeOfEthicsModal({ open, onOpenChange }: CodeOfEthicsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">
            Código de Ética e Disciplina da OAB
          </DialogTitle>
          <DialogDescription>
            Compromisso com a Ética Profissional
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">Compromisso Ético</h3>
              <p>
                A Advocacia Dinoermeson Nascimento observa rigorosamente o Código de Ética e Disciplina 
                da Ordem dos Advogados do Brasil (OAB), comprometendo-se com os mais altos padrões de 
                conduta profissional, integridade e responsabilidade.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">Princípios Fundamentais</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-foreground">Independência:</strong> Exercício da advocacia 
                  com total independência, sem subordinação a interesses que comprometam a defesa dos 
                  direitos do cliente.
                </li>
                <li>
                  <strong className="text-foreground">Sigilo Profissional:</strong> Manutenção absoluta 
                  do sigilo sobre informações confiadas pelo cliente, conforme estabelecido no art. 7º 
                  do Código de Ética.
                </li>
                <li>
                  <strong className="text-foreground">Lealdade:</strong> Lealdade ao cliente, aos 
                  colegas, aos tribunais e à sociedade, agindo sempre com honestidade e transparência.
                </li>
                <li>
                  <strong className="text-foreground">Dignidade:</strong> Manutenção da dignidade da 
                  profissão, evitando condutas que possam desprestigiar a advocacia.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">Provimento nº 205/2021 - CF/OAB</h3>
              <p className="mb-2">
                Em observância ao Provimento nº 205/2021 do Conselho Federal da OAB, o escritório:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Não realiza promessas de resultado</li>
                <li>Não pratica mercantilização da advocacia</li>
                <li>Respeita o sigilo profissional em todas as comunicações</li>
                <li>Mantém transparência sobre honorários e condições de trabalho</li>
                <li>Evita publicidade enganosa ou abusiva</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">Relação com o Cliente</h3>
              <p className="mb-2">
                Em nossa relação com os clientes, comprometemo-nos a:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Prestar serviços com competência e dedicação</li>
                <li>Manter comunicação clara e objetiva</li>
                <li>Respeitar a autonomia e as decisões do cliente</li>
                <li>Informar sobre riscos e possibilidades do caso</li>
                <li>Manter confidencialidade absoluta</li>
                <li>Cobrar honorários de forma justa e transparente</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">Relação com os Tribunais</h3>
              <p>
                Mantemos relação respeitosa e profissional com os tribunais, apresentando argumentos 
                técnicos e fundamentados, sempre com veracidade e lealdade processual.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">Relação com os Colegas</h3>
              <p>
                Respeitamos nossos colegas de profissão, mantendo relações cordiais e profissionais, 
                evitando condutas que possam desprestigiar a advocacia ou prejudicar outros advogados.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">Compromisso Social</h3>
              <p>
                Reconhecemos o papel social da advocacia na defesa dos direitos fundamentais e na 
                construção de uma sociedade mais justa, atuando sempre em defesa da legalidade e 
                da dignidade da pessoa humana.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-2">Formação Continuada</h3>
              <p>
                Comprometemo-nos com a formação continuada e atualização constante, participando de 
                cursos, palestras e eventos jurídicos para manter a excelência técnica na prestação 
                de serviços.
              </p>
            </section>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground italic">
                Este código reflete nosso compromisso com a ética profissional e está em conformidade 
                com o Código de Ética e Disciplina da OAB e demais normas aplicáveis.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

