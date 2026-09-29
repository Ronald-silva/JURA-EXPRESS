import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  /** Posição na grelha: escalona a entrada dos itens. */
  indice?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Revelação ao entrar no viewport. É um componente de servidor: toda a
 * animação vive no CSS (ver globals.css), portanto não envia JavaScript para o
 * cliente e o conteúdo nunca depende de hidratação para ficar visível.
 */
export function Reveal({ indice = 0, className = "", children }: RevealProps) {
  return (
    <div
      data-reveal
      style={{ "--i": indice } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
