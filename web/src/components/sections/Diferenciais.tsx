import { Gauge, Headset, Radar, ShieldCheck } from "lucide-react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Card, IconBox } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { DIFERENCIAIS } from "@/lib/conteudo";

const ICONES = { Gauge, Radar, Headset, ShieldCheck } as const;

export function Diferenciais() {
  return (
    <Section id="diferenciais" fundo="surface">
      <SectionHead
        sobretitulo="Por que a Jura Express"
        titulo="Entregas que você não precisa administrar"
        texto="Sua equipe volta a cuidar do negócio enquanto a operação de entrega roda com acompanhamento, cobertura e suporte."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DIFERENCIAIS.map((item, i) => {
          const Icone = ICONES[item.icone as keyof typeof ICONES];
          return (
            <Reveal key={item.titulo} indice={i}>
              <Card className="h-full">
                <IconBox>
                  <Icone className="size-5" aria-hidden />
                </IconBox>
                <h3 className="mt-5 font-semibold text-ink">{item.titulo}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {item.texto}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
