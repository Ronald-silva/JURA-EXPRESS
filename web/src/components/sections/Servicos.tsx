import { ArrowRight, Gift, Package, Route } from "lucide-react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Card, IconBox } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICOS } from "@/lib/conteudo";

const ICONES = { Package, Gift, Route } as const;

export function Servicos() {
  return (
    <Section id="servicos" fundo="canvas">
      <SectionHead
        sobretitulo="Serviços"
        titulo="Três formas de entregar"
        texto="Do pedido avulso à rota dedicada, o formato se ajusta ao que a sua operação precisa."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {SERVICOS.map((servico, i) => {
          const Icone = ICONES[servico.icone as keyof typeof ICONES];
          return (
            <Reveal key={servico.titulo} indice={i}>
              <Card className="group flex h-full flex-col">
                <IconBox>
                  <Icone className="size-5" aria-hidden />
                </IconBox>

                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {servico.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {servico.texto}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {servico.exemplos.map((exemplo) => (
                    <li
                      key={exemplo}
                      className="rounded-lg bg-surface-muted px-2.5 py-1 text-xs font-medium text-ink-muted"
                    >
                      {exemplo}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-brand"
                >
                  Falar sobre este serviço
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
