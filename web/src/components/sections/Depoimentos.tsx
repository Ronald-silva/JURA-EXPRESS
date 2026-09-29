import { Quote } from "lucide-react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * O site antigo usava depoimentos inventados ("Maria Silva — Sabor em Casa",
 * "Rafael Mendes — Tech Innovate") com fotos de banco de imagens. Isso é
 * detetável e destrói a confiança justamente na seção que existe para a criar.
 *
 * Aqui a estrutura fica pronta e os espaços ficam assumidamente vazios, à
 * espera de clientes reais. Assim que existirem, basta preencher este array.
 */
const DEPOIMENTOS: {
  texto: string;
  nome: string;
  empresa: string;
}[] = [];

const VAGOS = 3;

export function Depoimentos() {
  const temReais = DEPOIMENTOS.length > 0;

  return (
    <Section id="depoimentos" fundo="canvas">
      <SectionHead
        centrado
        sobretitulo="Clientes"
        titulo="Quem entrega com a Jura Express"
        texto={
          temReais
            ? "O que dizem as empresas que usam nossas entregas no dia a dia."
            : "Espaço reservado para os depoimentos dos seus clientes reais."
        }
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {temReais
          ? DEPOIMENTOS.map((d, i) => (
              <Reveal key={d.nome} indice={i}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <Quote className="size-6 text-brand-soft" aria-hidden />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                    {d.texto}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-5">
                    <p className="text-sm font-semibold text-ink">{d.nome}</p>
                    <p className="text-xs text-ink-subtle">{d.empresa}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))
          : Array.from({ length: VAGOS }).map((_, i) => (
              <Reveal key={i} indice={i}>
                <EspacoReservado />
              </Reveal>
            ))}
      </div>

      {!temReais && (
        <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-ink-subtle">
          Preferimos deixar este espaço vazio a preenchê-lo com depoimentos
          fictícios. Assim que você indicar clientes dispostos a dar um
          depoimento, eles entram aqui.
        </p>
      )}
    </Section>
  );
}

function EspacoReservado() {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-dashed border-line-strong bg-surface/60 p-8">
      <Quote className="size-6 text-ink-subtle/50" aria-hidden />

      <div className="mt-5 flex-1 space-y-2.5" aria-hidden>
        <div className="h-2.5 w-full rounded-full bg-surface-muted" />
        <div className="h-2.5 w-11/12 rounded-full bg-surface-muted" />
        <div className="h-2.5 w-4/5 rounded-full bg-surface-muted" />
      </div>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <div className="size-9 rounded-full bg-surface-muted" aria-hidden />
        <div className="space-y-1.5">
          <div className="h-2.5 w-24 rounded-full bg-surface-muted" aria-hidden />
          <p className="text-xs text-ink-subtle">Depoimento a recolher</p>
        </div>
      </figcaption>
    </figure>
  );
}
