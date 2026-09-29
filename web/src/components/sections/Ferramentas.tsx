import { Check, MonitorSmartphone, Smartphone } from "lucide-react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Card, IconBox } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { FERRAMENTAS } from "@/lib/conteudo";

const ICONES = { MonitorSmartphone, Smartphone } as const;

export function Ferramentas() {
  return (
    <Section id="ferramentas" fundo="surface">
      <SectionHead
        sobretitulo="Ferramentas"
        titulo="Você vê onde está cada entrega"
        texto="Web Panel no navegador e aplicativo no celular: o mesmo acompanhamento, do despacho à confirmação."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {FERRAMENTAS.map((ferramenta, i) => {
          const Icone = ICONES[ferramenta.icone as keyof typeof ICONES];
          return (
            <Reveal key={ferramenta.titulo} indice={i}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <IconBox>
                    <Icone className="size-5" aria-hidden />
                  </IconBox>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-ink">
                      {ferramenta.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {ferramenta.texto}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {ferramenta.itens.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Check className="size-4 shrink-0 text-brand" aria-hidden />
                      <span className="text-sm text-ink-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
