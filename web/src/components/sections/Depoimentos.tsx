import { Quote } from "lucide-react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  DEPOIMENTOS_EXEMPLO,
  DEPOIMENTOS_REAIS,
  MODO_DEMONSTRACAO,
  type Depoimento,
} from "@/lib/conteudo";

/**
 * Os depoimentos reais têm sempre precedência. Os exemplos só entram enquanto
 * MODO_DEMONSTRACAO estiver ligado e não houver nenhum real — e, nesse caso, a
 * seção diz que são ilustrativos.
 *
 * O site antigo usava depoimentos inventados sem qualquer aviso, com fotos de
 * banco de imagens. Aqui não há fotos de pessoas que não existem: a assinatura
 * usa as iniciais da pessoa.
 */
export function Depoimentos() {
  const temReais = DEPOIMENTOS_REAIS.length > 0;
  const lista: Depoimento[] = temReais
    ? DEPOIMENTOS_REAIS
    : MODO_DEMONSTRACAO
      ? DEPOIMENTOS_EXEMPLO
      : [];

  const ilustrativos = !temReais && lista.length > 0;

  return (
    <Section id="depoimentos" fundo="canvas">
      <SectionHead
        centrado
        sobretitulo="Clientes"
        titulo="Quem entrega com a Jura Express"
        texto="Empresas que deixaram de administrar motoboy e passaram a acompanhar entregas."
      />

      {ilustrativos && (
        <p className="mx-auto mt-5 w-fit rounded-full border border-line bg-surface px-3.5 py-1.5 text-center text-xs font-medium text-ink-subtle">
          Exemplos ilustrativos — a substituir por depoimentos reais
        </p>
      )}

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {lista.length > 0
          ? lista.map((d, i) => (
              <Reveal key={d.nome} indice={i}>
                <Cartao depoimento={d} />
              </Reveal>
            ))
          : Array.from({ length: 3 }).map((_, i) => (
              <Reveal key={i} indice={i}>
                <EspacoReservado />
              </Reveal>
            ))}
      </div>
    </Section>
  );
}

function Cartao({ depoimento: d }: { depoimento: Depoimento }) {
  const iniciais = d.nome
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("");

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md">
      <Quote className="size-6 shrink-0 text-brand-soft" aria-hidden />

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
        {d.texto}
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        {/* Iniciais em vez de retrato: não inventamos o rosto de ninguém. */}
        <div
          aria-hidden
          className="slant flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-sm font-bold text-brand"
        >
          <span className="unslant">{iniciais}</span>
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{d.nome}</p>
          <p className="truncate text-xs text-ink-subtle">
            {d.cargo} · {d.empresa}
          </p>
        </div>
      </figcaption>
    </figure>
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
        <div className="size-10 rounded-xl bg-surface-muted" aria-hidden />
        <p className="text-xs text-ink-subtle">Depoimento a recolher</p>
      </figcaption>
    </figure>
  );
}
