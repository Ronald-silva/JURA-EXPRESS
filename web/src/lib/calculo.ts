/**
 * Comparação de custo: frota própria (motoboy CLT) vs entregas terceirizadas.
 *
 * Todos os parâmetros são expostos na interface e editáveis. A calculadora não
 * é enviesada: quando o volume justifica frota própria, ela diz isso. Um
 * gestor que testa números e apanha a ferramenta a mentir deixa de confiar na
 * empresa toda — e o ponto de equilíbrio é o dado mais útil da página.
 */

/** Referências de mercado (Brasil). São estimativas editáveis, não preços da Jura Express. */
export const PADROES = {
  /** Salário-base mensal de motoboy CLT. */
  salarioBase: 1900,
  /**
   * Adicional de periculosidade: 30% sobre o salário-base.
   * Lei 12.997/2014 incluiu o §4 no art. 193 da CLT e tornou-o obrigatório
   * para motociclistas. É o custo que mais some das contas caseiras.
   */
  percentualPericulosidade: 0.3,
  /** Encargos sobre a remuneração: INSS patronal, FGTS, 13º, férias + 1/3 e provisões. */
  percentualEncargos: 0.68,
  /** Vale-transporte e vale-alimentação somados. */
  beneficios: 600,
  /** Moto: aluguel, ou depreciação somada ao seguro. */
  moto: 700,
  /** Combustível mensal. */
  combustivel: 600,
  /** Manutenção, pneus e revisões. */
  manutencao: 250,
  /**
   * Entregas que um motoboy dedicado dá conta num dia útil.
   * Com 20, a frota própria nunca ganharia em nenhum cenário e a calculadora
   * seria viciada a favor da terceirização. 25 é o número que mantém a
   * comparação honesta: acima disso, ter frota própria realmente compensa.
   */
  entregasPorMotoboyPorDia: 25,
  /** Dias úteis por mês. */
  diasUteis: 22,
  /** Valor médio cobrado por entrega terceirizada. */
  custoPorEntrega: 12,
} as const;

export interface ParametrosCusto {
  salarioBase: number;
  percentualPericulosidade: number;
  percentualEncargos: number;
  beneficios: number;
  moto: number;
  combustivel: number;
  manutencao: number;
  entregasPorMotoboyPorDia: number;
  diasUteis: number;
  custoPorEntrega: number;
}

export interface DetalheCustoProprio {
  salarioBase: number;
  periculosidade: number;
  encargos: number;
  beneficios: number;
  moto: number;
  combustivel: number;
  manutencao: number;
  total: number;
}

export interface Comparacao {
  entregasPorMes: number;
  /** Frota própria cresce aos saltos: cada motoboy tem um tecto de entregas. */
  motoboysNecessarios: number;
  custoProprio: number;
  custoTerceirizado: number;
  /** Positivo quando terceirizar sai mais barato; negativo quando não sai. */
  economiaMensal: number;
  economiaAnual: number;
  custoPorEntregaProprio: number;
  /** Volume mensal a partir do qual a frota própria passa a compensar. */
  pontoEquilibrio: number;
  /** Falso quando o volume já justifica frota própria. */
  terceirizarCompensa: boolean;
  detalheProprio: DetalheCustoProprio;
}

/** Custo mensal real de um motoboy CLT, somando o que costuma ficar de fora. */
export function custoMensalPorMotoboy(p: ParametrosCusto): DetalheCustoProprio {
  const periculosidade = p.salarioBase * p.percentualPericulosidade;
  const remuneracao = p.salarioBase + periculosidade;
  const encargos = remuneracao * p.percentualEncargos;

  const total =
    remuneracao +
    encargos +
    p.beneficios +
    p.moto +
    p.combustivel +
    p.manutencao;

  return {
    salarioBase: p.salarioBase,
    periculosidade,
    encargos,
    beneficios: p.beneficios,
    moto: p.moto,
    combustivel: p.combustivel,
    manutencao: p.manutencao,
    total,
  };
}

export function compararCustos(
  entregasPorDia: number,
  p: ParametrosCusto = PADROES,
): Comparacao {
  const entregasPorMes = Math.round(entregasPorDia * p.diasUteis);
  const detalheProprio = custoMensalPorMotoboy(p);

  const capacidadeMensal = p.entregasPorMotoboyPorDia * p.diasUteis;
  const motoboysNecessarios =
    entregasPorMes > 0 ? Math.ceil(entregasPorMes / capacidadeMensal) : 0;

  const custoProprio = motoboysNecessarios * detalheProprio.total;
  const custoTerceirizado = entregasPorMes * p.custoPorEntrega;
  const economiaMensal = custoProprio - custoTerceirizado;

  return {
    entregasPorMes,
    motoboysNecessarios,
    custoProprio,
    custoTerceirizado,
    economiaMensal,
    economiaAnual: economiaMensal * 12,
    custoPorEntregaProprio:
      entregasPorMes > 0 ? custoProprio / entregasPorMes : 0,
    pontoEquilibrio: detalheProprio.total / p.custoPorEntrega,
    terceirizarCompensa: economiaMensal > 0,
    detalheProprio,
  };
}

export function formatarReal(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function formatarNumero(valor: number): string {
  return valor.toLocaleString("pt-BR", { maximumFractionDigits: 0 });
}
