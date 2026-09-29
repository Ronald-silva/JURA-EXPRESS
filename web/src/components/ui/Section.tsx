import type { ReactNode } from "react";

type Fundo = "canvas" | "surface" | "muted";

const FUNDOS: Record<Fundo, string> = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  muted: "bg-surface-muted",
};

interface SectionProps {
  id?: string;
  fundo?: Fundo;
  className?: string;
  children: ReactNode;
}

/**
 * Invólucro de seção. Centraliza a largura máxima e o respiro vertical para
 * que nenhuma seção invente o seu próprio espaçamento — era isso que dava ao
 * site antigo a sensação de blocos empilhados sem ritmo.
 */
export function Section({
  id,
  fundo = "canvas",
  className = "",
  children,
}: SectionProps) {
  return (
    /* scroll-mt compensa a altura do cabeçalho fixo: sem isto, clicar num link
       do menu deixa o título da seção escondido por baixo dele. */
    <section
      id={id}
      className={`${FUNDOS[fundo]} scroll-mt-20 px-6 py-20 sm:py-28`}
    >
      <div className={`mx-auto w-full max-w-6xl ${className}`}>{children}</div>
    </section>
  );
}

interface SectionHeadProps {
  sobretitulo?: string;
  titulo: string;
  texto?: string;
  centrado?: boolean;
}

export function SectionHead({
  sobretitulo,
  titulo,
  texto,
  centrado = false,
}: SectionHeadProps) {
  return (
    <div className={centrado ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {sobretitulo && (
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand uppercase">
          {sobretitulo}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
        {titulo}
      </h2>
      {texto && (
        <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-muted">
          {texto}
        </p>
      )}
    </div>
  );
}
