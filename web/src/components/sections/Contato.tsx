import { ArrowRight, Bike, Mail } from "lucide-react";
import { InstagramIcon, WhatsappIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { EMPRESA } from "@/lib/conteudo";

export function Contato() {
  const temWhatsapp = Boolean(EMPRESA.whatsapp);

  return (
    <Section id="contato" fundo="canvas">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-12 shadow-sm sm:px-14 sm:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-brand/8 blur-3xl"
        />
        <div
          aria-hidden
          className="speed-lines pointer-events-none absolute inset-0 opacity-50"
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand uppercase">
            Fale com a equipe
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
            Conte o seu volume de entregas.{" "}
            <span className="text-brand italic">
              A gente responde rápido.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-muted">
            Sem formulário longo nem espera. Diga quantas entregas você faz por
            dia e para onde, e devolvemos uma proposta.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            {temWhatsapp ? (
              <ButtonLink
                href={`https://wa.me/${EMPRESA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                tamanho="lg"
              >
                <WhatsappIcon className="size-4" />
                Chamar no WhatsApp
              </ButtonLink>
            ) : (
              /* O site atual não tem WhatsApp em lado nenhum — é o maior
                 vazamento de leads. O botão fica pronto; falta só o número. */
              <ButtonLink href={`mailto:${EMPRESA.email}`} tamanho="lg">
                <WhatsappIcon className="size-4" />
                Chamar no WhatsApp
              </ButtonLink>
            )}
            <ButtonLink
              href={`mailto:${EMPRESA.email}`}
              variante="secundario"
              tamanho="lg"
            >
              <Mail className="size-4" aria-hidden />
              {EMPRESA.email}
            </ButtonLink>
          </div>

          <a
            href={EMPRESA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-brand sm:mt-6 sm:min-h-0"
          >
            <InstagramIcon className="size-4" />
            {EMPRESA.instagram}
          </a>
        </div>
      </div>

      {/* Recrutamento de motoboys: presente, mas fora do funil principal, para
          não competir com o CTA de quem contrata entregas. */}
      <div
        id="entregadores"
        style={{ scrollMarginTop: "5rem" }}
        className="mt-5 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-surface-muted px-6 py-6 sm:flex-row sm:px-8 sm:py-7 sm:items-center"
      >
        <div className="flex items-start gap-4">
          <div className="slant flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface text-brand shadow-sm">
            <Bike className="unslant size-5" aria-hidden />
          </div>
          <div>
            <h3 className="font-semibold text-ink">
              Você é motoboy e quer rodar com a gente?
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              Ganhos justos, rotas definidas e app próprio para organizar suas
              entregas.
            </p>
          </div>
        </div>
        <ButtonLink
          href={EMPRESA.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          variante="secundario"
          className="shrink-0"
        >
          Quero me cadastrar
          <ArrowRight className="size-4" aria-hidden />
        </ButtonLink>
      </div>
    </Section>
  );
}
