import { Section, SectionHead } from "@/components/ui/Section";
import { FAQ } from "@/lib/conteudo";

/**
 * Detalhes nativos em vez de acordeão em JavaScript: funciona sem hidratação,
 * é acessível por omissão e o conteúdo fica no HTML para os motores de busca.
 */
export function Duvidas() {
  return (
    <Section id="duvidas" fundo="surface">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHead
          sobretitulo="Dúvidas"
          titulo="Perguntas frequentes"
          texto="As respostas rápidas para quem está avaliando contratar entregas."
        />

        <div className="divide-y divide-line border-y border-line">
          {FAQ.map((item) => (
            <details key={item.pergunta} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink marker:hidden">
                {item.pergunta}
                <span
                  aria-hidden
                  className="relative size-5 shrink-0 rounded-full border border-line-strong transition-colors group-open:border-brand"
                >
                  <span className="absolute top-1/2 left-1/2 h-px w-2.5 -translate-x-1/2 -translate-y-1/2 bg-ink-muted transition-colors group-open:bg-brand" />
                  <span className="absolute top-1/2 left-1/2 h-2.5 w-px -translate-x-1/2 -translate-y-1/2 bg-ink-muted transition-all group-open:scale-y-0 group-open:bg-brand" />
                </span>
              </summary>
              <p className="mt-3 pr-9 text-sm leading-relaxed text-ink-muted">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
