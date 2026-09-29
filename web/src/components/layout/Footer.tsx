import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { DESENVOLVEDOR, EMPRESA } from "@/lib/conteudo";

const INSTITUCIONAL = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "#entregadores", label: "Seja um entregador parceiro" },
  { href: "#calculadora", label: "Calculadora de custos" },
];

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface px-6 pt-16 pb-8">
      {/* Em telemóvel tudo centra; a partir de md volta ao alinhamento à
          esquerda, que é o que funciona numa grelha de quatro colunas. */}
      <div className="mx-auto w-full max-w-6xl text-center md:text-left">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">
          <div className="md:col-span-2">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>

            <p className="mt-5 text-lg font-medium text-ink italic">
              {EMPRESA.assinatura}
            </p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-muted md:mx-0">
              Entregas rápidas com motoboys credenciados, rastreamento em tempo
              real e acompanhamento de cada etapa do processo.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-4 py-2.5">
                <ShieldCheck className="size-4 shrink-0 text-brand" aria-hidden />
                <span className="text-xs font-medium text-ink-muted">
                  Entregas cobertas pela 88i Seguradora Digital
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Contato</h3>
            {/* min-h-11 dá 44px de alvo de toque em telemóvel. Sem isto, estes
                links ficavam com 20px de altura e erravam ao dedo. */}
            <ul className="mt-2 flex flex-col items-center gap-0.5 text-sm md:mt-4 md:items-start md:gap-3">
              <li>
                <a
                  href={`mailto:${EMPRESA.email}`}
                  className="inline-flex min-h-11 items-center gap-2 text-ink-muted transition-colors hover:text-brand md:min-h-0"
                >
                  <Mail className="size-4 shrink-0" aria-hidden />
                  {EMPRESA.email}
                </a>
              </li>
              <li>
                <a
                  href={EMPRESA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-ink-muted transition-colors hover:text-brand md:min-h-0"
                >
                  <InstagramIcon className="size-4 shrink-0" />
                  {EMPRESA.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Institucional</h3>
            <ul className="mt-2 flex flex-col items-center gap-0.5 text-sm md:mt-4 md:items-start md:gap-3">
              {INSTITUCIONAL.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-ink-muted transition-colors hover:text-brand md:min-h-0"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-line pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-ink-subtle">
            © {ano} {EMPRESA.nome}. Todos os direitos reservados.
          </p>

          <p className="text-xs text-ink-subtle">
            Desenvolvido por{" "}
            <a
              href={DESENVOLVEDOR.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-0.5 font-semibold text-ink-muted transition-colors hover:text-brand md:min-h-0"
            >
              {DESENVOLVEDOR.nome}
              <ArrowUpRight
                aria-hidden
                className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
