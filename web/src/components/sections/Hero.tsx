import { ArrowRight, Calculator, ShieldCheck, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { HERO, PROVAS } from "@/lib/conteudo";
import { MIDIA } from "@/lib/midia";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-canvas">
      {/* Atmosfera: um halo índigo muito diluído atrás do conteúdo. Dá
          profundidade sem recorrer ao bloco de cor chapada do site antigo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[38rem] rounded-full bg-brand/8 blur-3xl"
      />
      <div
        aria-hidden
        className="speed-lines pointer-events-none absolute inset-x-0 top-0 h-full opacity-40"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 pt-16 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pt-24 lg:pb-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink-muted uppercase shadow-sm">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            {HERO.sobretitulo}
          </span>

          {/* A assinatura da marca que estava escondida no rodapé do site antigo
              passa a ser o título da página. */}
          <h1 className="mt-6 text-5xl font-bold tracking-[-0.03em] text-balance text-ink sm:text-6xl lg:text-[4.2rem] lg:leading-[0.97]">
            Juro que chega{" "}
            <span className="relative inline-block italic text-brand">
              rápido.
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-soft"
              >
                <path
                  d="M2 9C40 4 120 2 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-ink-muted">
            {HERO.subtitulo}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contato" tamanho="lg">
              {HERO.ctaPrimario}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="#calculadora" variante="secundario" tamanho="lg">
              <Calculator className="size-4" aria-hidden />
              {HERO.ctaSecundario}
            </ButtonLink>
          </div>

          {/* Prova concreta logo abaixo do CTA, no lugar dos adjetivos
              ("líder", "a mais completa do mercado") que o site antigo usava. */}
          <dl className="mt-11 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8 sm:grid-cols-4 sm:gap-x-4">
            {PROVAS.map((prova) => (
              <div key={prova.rotulo}>
                <dt className="text-sm font-semibold text-ink">
                  {prova.rotulo}
                </dt>
                <dd className="mt-0.5 text-xs leading-snug text-ink-subtle">
                  {prova.detalhe}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)]">
            {MIDIA.heroVideo ? (
              <video
                className="size-full object-cover"
                src={MIDIA.heroVideo}
                poster={MIDIA.heroPoster ?? undefined}
                autoPlay
                muted
                loop
                playsInline
                // O vídeo é decorativo: a mensagem está toda no texto ao lado.
                aria-hidden
              />
            ) : (
              <PlaceholderVideo />
            )}

            {/* Véu inferior para o cartão flutuante manter contraste sobre
                qualquer frame do vídeo. */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/45 to-transparent"
            />

            <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/15 bg-white/92 p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="slant flex size-9 shrink-0 items-center justify-center rounded-lg bg-positive-tint text-positive">
                  <ShieldCheck className="unslant size-4" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink">
                    Entrega confirmada
                  </p>
                  <p className="truncate text-xs text-ink-muted">
                    Rastreamento em tempo real, do despacho à assinatura
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -left-3 hidden rounded-2xl border border-line bg-surface px-4 py-3 shadow-md sm:block lg:-left-6">
            <div className="flex items-center gap-2">
              <Star className="size-4 fill-brand text-brand" aria-hidden />
              <span className="text-sm font-semibold text-ink">
                Motoboys credenciados
              </span>
            </div>
            <p className="mt-0.5 text-xs text-ink-subtle">
              Treinados, identificados e segurados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Estado provisório enquanto o vídeo do motoboy não foi gerado.
 * Deliberadamente sóbrio: melhor um painel intencional do que um bloco vazio.
 */
function PlaceholderVideo() {
  return (
    <div className="relative flex size-full items-center justify-center bg-gradient-to-br from-brand-tint via-canvas to-surface-muted">
      <div
        aria-hidden
        className="speed-lines absolute inset-0 opacity-70"
      />
      <div className="relative text-center">
        <div className="slant mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg">
          <ArrowRight className="unslant size-7" aria-hidden />
        </div>
        <p className="mt-5 text-sm font-medium text-ink-muted">
          Espaço reservado para o vídeo
        </p>
      </div>
    </div>
  );
}
