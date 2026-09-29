import { Mail, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { EMPRESA } from "@/lib/conteudo";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface px-6 pt-16 pb-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-lg font-medium text-ink italic">
              {EMPRESA.assinatura}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              Entregas rápidas com motoboys credenciados, rastreamento em tempo
              real e acompanhamento de cada etapa do processo.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-4 py-2.5">
              <ShieldCheck className="size-4 text-brand" aria-hidden />
              <span className="text-xs font-medium text-ink-muted">
                Entregas cobertas pela 88i Seguradora Digital
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${EMPRESA.email}`}
                  className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-brand"
                >
                  <Mail className="size-4" aria-hidden />
                  {EMPRESA.email}
                </a>
              </li>
              <li>
                <a
                  href={EMPRESA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-brand"
                >
                  <InstagramIcon className="size-4" />
                  {EMPRESA.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Institucional</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="/politica-de-privacidade"
                  className="text-ink-muted transition-colors hover:text-brand"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#entregadores"
                  className="text-ink-muted transition-colors hover:text-brand"
                >
                  Seja um entregador parceiro
                </a>
              </li>
              <li>
                <a
                  href="#calculadora"
                  className="text-ink-muted transition-colors hover:text-brand"
                >
                  Calculadora de custos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-subtle">
            © {ano} {EMPRESA.nome}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ink-subtle">
            Desenvolvido por{" "}
            <span className="font-medium text-ink-muted">
              RonalDigital Tech
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
