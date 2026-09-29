interface LogoProps {
  /** Em fundo escuro o texto inverte para branco. */
  invertido?: boolean;
  className?: string;
}

/**
 * Marca nominativa tipográfica, reproduzindo a estrutura do logótipo atual:
 * "JURA" em itálico pesado sobre "EXPRESS" espaçado.
 *
 * É um substituto fiel, não o logótipo oficial — trocar pelo SVG original da
 * Jura Express assim que o ficheiro estiver disponível.
 */
export function Logo({ invertido = false, className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex flex-col leading-none select-none ${className}`}
      aria-label="Jura Express"
    >
      <span
        className={`text-2xl font-extrabold tracking-tight italic ${
          invertido ? "text-white" : "text-ink"
        }`}
      >
        JURA
      </span>
      <span
        className={`mt-0.5 text-[0.55rem] font-medium tracking-[0.42em] ${
          invertido ? "text-white/70" : "text-brand"
        }`}
      >
        EXPRESS
      </span>
    </span>
  );
}
