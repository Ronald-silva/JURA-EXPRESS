import type { SVGProps } from "react";

/**
 * O lucide-react deixou de publicar ícones de marca, por questões de marca
 * registada. O glifo do Instagram é geométrico (quadrado arredondado, círculo e
 * ponto), por isso desenha-se em traço, no mesmo estilo dos restantes ícones.
 */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
