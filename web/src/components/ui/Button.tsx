import type { ComponentProps, ReactNode } from "react";

type Variante = "primario" | "secundario" | "fantasma";
type Tamanho = "md" | "lg";

const BASE =
  // Quebra de linha só é bloqueada a partir de sm: abaixo disso, um rótulo
  // longo que não quebra empurra a página para o lado em ecrãs de 320px.
  "inline-flex items-center justify-center gap-2 rounded-xl text-center font-semibold sm:whitespace-nowrap " +
  "transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

const VARIANTES: Record<Variante, string> = {
  // O índigo aparece aqui e em quase mais lado nenhum: é isso que o mantém forte.
  primario:
    "bg-brand text-white shadow-sm hover:bg-brand-strong hover:shadow-md active:scale-[0.99]",
  secundario:
    "border border-line bg-surface text-ink shadow-sm hover:border-line-strong hover:shadow-md active:scale-[0.99]",
  fantasma: "text-ink-muted hover:bg-surface-muted hover:text-ink",
};

const TAMANHOS: Record<Tamanho, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps extends ComponentProps<"a"> {
  variante?: Variante;
  tamanho?: Tamanho;
  children: ReactNode;
}

export function ButtonLink({
  variante = "primario",
  tamanho = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${BASE} ${VARIANTES[variante]} ${TAMANHOS[tamanho]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
