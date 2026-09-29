// Placeholder temporário: existe só para validar os tokens de design.
// É substituído pelas seções reais (Hero, Calculadora, etc.) no próximo passo.
export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-canvas px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium text-brand">Jura Express</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Sistema de design configurado
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Fundos limpos, azul apenas como acento e cartões com sombra suave.
            As seções reais entram no próximo passo.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button className="rounded-xl bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-strong">
              CTA primário
            </button>
            <button className="rounded-xl border border-line bg-surface px-6 py-3 font-medium text-ink transition-colors hover:bg-surface-muted">
              CTA secundário
            </button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {["Painel Web", "App Mobile", "Rotas Otimizadas"].map((titulo) => (
              <div
                key={titulo}
                className="rounded-2xl border border-line bg-surface p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  ●
                </div>
                <h2 className="mt-5 font-semibold text-ink">{titulo}</h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Cartão de referência: rounded-2xl, p-8, shadow-sm no repouso.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Respiro entre seções
          </h2>
          <p className="mt-2 text-ink-muted">
            A alternância canvas → surface-muted separa blocos sem bordas
            grossas nem blocos de cor.
          </p>
        </div>
      </section>
    </main>
  );
}
