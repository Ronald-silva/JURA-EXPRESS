import type { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

/**
 * Cartão padrão: borda fina, sombra suave e elevação no hover.
 * Substitui os blocos de cor chapada do site antigo — a hierarquia passa a vir
 * da profundidade e do espaço, não da saturação.
 */
export function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={
        "rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8 " +
        "transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md " +
        className
      }
    >
      {children}
    </div>
  );
}

interface IconBoxProps {
  children: ReactNode;
}

/** Caixa de ícone. A inclinação vem do itálico do logótipo da Jura. */
export function IconBox({ children }: IconBoxProps) {
  return (
    <div className="slant flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
      <span className="unslant">{children}</span>
    </div>
  );
}
