"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { EMPRESA } from "@/lib/conteudo";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#ferramentas", label: "Ferramentas" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Impede o fundo de rolar enquanto o menu de telemóvel está aberto.
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        rolou
          ? "border-b border-line bg-surface/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-6">
        <a href="#topo" className="shrink-0" aria-label="Jura Express, início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {/* O recrutamento de motoboys sai do funil principal e vive aqui,
              discreto: a página fala com quem contrata entregas. */}
          <a
            href="#entregadores"
            className="text-sm font-medium text-ink-subtle transition-colors hover:text-ink-muted"
          >
            Sou entregador
          </a>
          <ButtonLink href="#contato">
            <MessageCircle className="size-4" aria-hidden />
            Falar com a equipe
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="rounded-lg p-2 text-ink transition-colors hover:bg-surface-muted md:hidden"
        >
          {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {aberto && (
        <div className="border-t border-line bg-surface px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setAberto(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#entregadores"
              onClick={() => setAberto(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-subtle"
            >
              Sou entregador
            </a>
          </nav>
          <ButtonLink
            href="#contato"
            tamanho="lg"
            className="mt-4 w-full"
            onClick={() => setAberto(false)}
          >
            <MessageCircle className="size-4" aria-hidden />
            Falar com a equipe
          </ButtonLink>
          <p className="mt-4 text-center text-sm text-ink-subtle">
            {EMPRESA.assinatura}
          </p>
        </div>
      )}
    </header>
  );
}
