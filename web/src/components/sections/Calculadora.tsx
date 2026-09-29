"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Info,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHead } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import {
  PADROES,
  compararCustos,
  formatarNumero,
  formatarReal,
} from "@/lib/calculo";

export function Calculadora() {
  const [entregasPorDia, setEntregasPorDia] = useState(12);
  const [custoPorEntrega, setCustoPorEntrega] = useState<number>(
    PADROES.custoPorEntrega,
  );
  const [detalheAberto, setDetalheAberto] = useState(false);

  const r = useMemo(
    () => compararCustos(entregasPorDia, { ...PADROES, custoPorEntrega }),
    [entregasPorDia, custoPorEntrega],
  );

  return (
    <Section id="calculadora" fundo="muted">
      <SectionHead
        sobretitulo="Calculadora"
        titulo="Quanto custa ter motoboy próprio?"
        texto="Compare o custo real de um motoboy contratado com o de terceirizar as entregas. Todos os valores são editáveis — e o resultado diz a verdade, inclusive quando ter frota própria compensa mais."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        {/* Entradas */}
        <div className="rounded-2xl border border-line bg-surface p-8 shadow-sm">
          <Slider
            id="entregas"
            rotulo="Entregas por dia"
            valor={entregasPorDia}
            min={1}
            max={60}
            passo={1}
            formatar={(v) => `${v} por dia`}
            auxiliar={`${formatarNumero(r.entregasPorMes)} entregas por mês`}
            aoMudar={setEntregasPorDia}
          />

          <div className="mt-9">
            <Slider
              id="custo"
              rotulo="Valor por entrega terceirizada"
              valor={custoPorEntrega}
              min={6}
              max={30}
              passo={1}
              formatar={(v) => formatarReal(v)}
              auxiliar="Varia conforme distância e tipo de carga"
              aoMudar={setCustoPorEntrega}
            />
          </div>

          <div className="mt-8 rounded-xl border border-line bg-canvas p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-ink">
                  Ponto de equilíbrio
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  A partir de{" "}
                  <strong className="font-semibold text-ink">
                    {formatarNumero(r.pontoEquilibrio)} entregas por mês
                  </strong>{" "}
                  por motoboy, manter frota própria passa a compensar. Abaixo
                  disso, você paga salário parado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <CartaoCusto
              titulo="Motoboy próprio"
              valor={r.custoProprio}
              detalhe={
                r.motoboysNecessarios > 0
                  ? `${r.motoboysNecessarios} ${
                      r.motoboysNecessarios === 1 ? "motoboy" : "motoboys"
                    } em regime CLT`
                  : "Sem operação"
              }
              porEntrega={r.custoPorEntregaProprio}
              destacado={!r.terceirizarCompensa}
            />
            <CartaoCusto
              titulo="Jura Express"
              valor={r.custoTerceirizado}
              detalhe="Você paga só o que usar"
              porEntrega={custoPorEntrega}
              destacado={r.terceirizarCompensa}
            />
          </div>

          <Veredicto comparacao={r} />

          {/* A transparência é o argumento: quem vê a conta aberta confia nela. */}
          <div className="rounded-2xl border border-line bg-surface shadow-sm">
            <button
              type="button"
              onClick={() => setDetalheAberto((v) => !v)}
              aria-expanded={detalheAberto}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <span className="text-sm font-semibold text-ink">
                Como chegamos ao custo de {formatarReal(r.detalheProprio.total)}{" "}
                por motoboy
              </span>
              <ChevronDown
                aria-hidden
                className={`size-4 shrink-0 text-ink-subtle transition-transform duration-300 ${
                  detalheAberto ? "rotate-180" : ""
                }`}
              />
            </button>

            {detalheAberto && (
              <div className="border-t border-line px-6 pt-5 pb-6">
                <dl className="space-y-2.5 text-sm">
                  <Linha rotulo="Salário-base" valor={r.detalheProprio.salarioBase} />
                  <Linha
                    rotulo="Periculosidade (30%)"
                    valor={r.detalheProprio.periculosidade}
                    nota="Obrigatória por lei para motociclistas"
                  />
                  <Linha
                    rotulo="Encargos (INSS, FGTS, 13º, férias)"
                    valor={r.detalheProprio.encargos}
                  />
                  <Linha rotulo="Vale-transporte e alimentação" valor={r.detalheProprio.beneficios} />
                  <Linha rotulo="Moto (aluguel ou depreciação)" valor={r.detalheProprio.moto} />
                  <Linha rotulo="Combustível" valor={r.detalheProprio.combustivel} />
                  <Linha rotulo="Manutenção" valor={r.detalheProprio.manutencao} />
                  <div className="flex items-center justify-between border-t border-line pt-3 font-semibold text-ink">
                    <dt>Total por motoboy</dt>
                    <dd>{formatarReal(r.detalheProprio.total)}/mês</dd>
                  </div>
                </dl>
                <p className="mt-5 text-xs leading-relaxed text-ink-subtle">
                  Estimativas de mercado para efeito de comparação, não valores
                  praticados pela Jura Express. Os custos reais variam conforme
                  região, acordo coletivo e perfil da operação.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Veredicto({
  comparacao: r,
}: {
  comparacao: ReturnType<typeof compararCustos>;
}) {
  const economia = Math.abs(r.economiaMensal);

  if (r.terceirizarCompensa) {
    return (
      <div className="rounded-2xl border border-positive/25 bg-positive-tint p-7">
        <div className="flex items-start gap-3">
          <TrendingDown className="mt-1 size-5 shrink-0 text-positive" aria-hidden />
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-wide text-positive uppercase">
              Terceirizar sai mais barato
            </p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {formatarReal(economia)}
              <span className="ml-1.5 text-base font-medium text-ink-muted">
                por mês
              </span>
            </p>
            <p className="mt-1.5 text-sm text-ink-muted">
              {formatarReal(Math.abs(r.economiaAnual))} por ano que você deixa
              de gastar com folha, moto e manutenção.
            </p>
            <ButtonLink href="#contato" className="mt-5">
              Pedir orçamento
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </div>
    );
  }

  // Quando a frota própria ganha, a calculadora diz isso. Fingir o contrário
  // destruiria a credibilidade da ferramenta e da empresa.
  return (
    <div className="rounded-2xl border border-line bg-surface p-7 shadow-sm">
      <div className="flex items-start gap-3">
        <TrendingUp className="mt-1 size-5 shrink-0 text-ink-muted" aria-hidden />
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
            No seu volume, frota própria compensa
          </p>
          <p className="mt-2 text-lg leading-relaxed text-ink">
            Com esse volume, manter motoboy próprio custa{" "}
            <strong className="font-semibold">{formatarReal(economia)}</strong>{" "}
            a menos por mês — desde que você consiga mantê-lo ocupado todos os
            dias, cobrir férias, faltas e manutenção.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            É aí que entra a logística personalizada: rota dedicada e volume
            garantido, sem folha de pagamento. Vale conversar.
          </p>
          <ButtonLink href="#contato" variante="secundario" className="mt-5">
            Falar sobre rota dedicada
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function CartaoCusto({
  titulo,
  valor,
  detalhe,
  porEntrega,
  destacado,
}: {
  titulo: string;
  valor: number;
  detalhe: string;
  porEntrega: number;
  destacado: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 ${
        destacado
          ? "border-brand/30 bg-surface shadow-md ring-1 ring-brand/15"
          : "border-line bg-surface shadow-sm"
      }`}
    >
      <p className="text-sm font-semibold text-ink-muted">{titulo}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-ink tabular-nums">
        {formatarReal(valor)}
      </p>
      <p className="mt-1 text-xs text-ink-subtle">por mês</p>
      <div className="mt-4 border-t border-line pt-3">
        <p className="text-xs text-ink-muted">{detalhe}</p>
        <p className="mt-1 text-xs font-medium text-ink tabular-nums">
          {formatarReal(porEntrega)} por entrega
        </p>
      </div>
    </div>
  );
}

function Linha({
  rotulo,
  valor,
  nota,
}: {
  rotulo: string;
  valor: number;
  nota?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-ink-muted">
        {rotulo}
        {nota && (
          <span className="mt-0.5 block text-xs text-ink-subtle">{nota}</span>
        )}
      </dt>
      <dd className="shrink-0 font-medium text-ink tabular-nums">
        {formatarReal(valor)}
      </dd>
    </div>
  );
}

function Slider({
  id,
  rotulo,
  valor,
  min,
  max,
  passo,
  formatar,
  auxiliar,
  aoMudar,
}: {
  id: string;
  rotulo: string;
  valor: number;
  min: number;
  max: number;
  passo: number;
  formatar: (v: number) => string;
  auxiliar: string;
  aoMudar: (v: number) => void;
}) {
  const progresso = ((valor - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold text-ink">
          {rotulo}
        </label>
        <span className="text-lg font-bold text-brand tabular-nums">
          {formatar(valor)}
        </span>
      </div>

      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={passo}
        value={valor}
        onChange={(e) => aoMudar(Number(e.target.value))}
        className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none
          [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-brand
          [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform
          hover:[&::-webkit-slider-thumb]:scale-110
          [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white
          [&::-moz-range-thumb]:bg-brand [&::-moz-range-thumb]:shadow-md"
        style={{
          background: `linear-gradient(to right, var(--color-brand) ${progresso}%, var(--color-line) ${progresso}%)`,
        }}
      />

      <p className="mt-2.5 text-xs text-ink-subtle">{auxiliar}</p>
    </div>
  );
}
