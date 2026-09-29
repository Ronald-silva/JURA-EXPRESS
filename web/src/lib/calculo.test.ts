import { test } from "node:test";
import assert from "node:assert/strict";
import {
  PADROES,
  compararCustos,
  custoMensalPorMotoboy,
  formatarReal,
} from "./calculo.ts";

test("periculosidade de 30% entra no custo do motoboy", () => {
  const d = custoMensalPorMotoboy(PADROES);
  assert.equal(d.periculosidade, 1900 * 0.3);
  assert.equal(d.periculosidade, 570);
});

test("encargos incidem sobre salario mais periculosidade, nao so sobre o salario", () => {
  const d = custoMensalPorMotoboy(PADROES);
  assert.equal(d.encargos, (1900 + 570) * 0.68);
  assert.ok(
    d.encargos > 1900 * 0.68,
    "ignorar a periculosidade subestimaria os encargos",
  );
});

test("custo total soma todas as parcelas", () => {
  const d = custoMensalPorMotoboy(PADROES);
  const esperado =
    1900 + 570 + (1900 + 570) * 0.68 + 600 + 700 + 600 + 250;
  assert.equal(d.total, esperado);
});

test("volume baixo: terceirizar compensa", () => {
  const r = compararCustos(5);
  assert.equal(r.entregasPorMes, 110);
  assert.equal(r.custoTerceirizado, 110 * 12);
  assert.equal(r.motoboysNecessarios, 1);
  assert.ok(r.terceirizarCompensa);
  assert.ok(r.economiaMensal > 0);
});

test("motoboy a 100% de ocupacao: a calculadora admite que a frota propria compensa", () => {
  const r = compararCustos(PADROES.entregasPorMotoboyPorDia);
  assert.equal(r.motoboysNecessarios, 1);
  assert.equal(r.terceirizarCompensa, false);
  assert.ok(
    r.economiaMensal < 0,
    "a ferramenta nao pode fingir economia onde nao existe",
  );
});

test("zona intermedia: um segundo motoboy ocioso volta a favorecer terceirizar", () => {
  // Logo acima do tecto de um motoboy, a frota propria salta para dois
  // salarios inteiros enquanto o volume mal cresce.
  const r = compararCustos(PADROES.entregasPorMotoboyPorDia + 1);
  assert.equal(r.motoboysNecessarios, 2);
  assert.ok(r.terceirizarCompensa);
});

test("frota propria cresce aos saltos: cada motoboy tem tecto de entregas", () => {
  const capacidade = PADROES.entregasPorMotoboyPorDia;
  assert.equal(compararCustos(capacidade).motoboysNecessarios, 1);
  assert.equal(compararCustos(capacidade + 0.5).motoboysNecessarios, 2);
});

test("ponto de equilibrio bate com o cruzamento real dos custos", () => {
  const r = compararCustos(10);
  const entregasNoEquilibrio = r.pontoEquilibrio;
  const custoTerceirizadoNoPonto = entregasNoEquilibrio * PADROES.custoPorEntrega;
  assert.ok(
    Math.abs(custoTerceirizadoNoPonto - r.detalheProprio.total) < 0.01,
    "no ponto de equilibrio os dois custos coincidem",
  );
});

test("zero entregas nao gera divisao por zero", () => {
  const r = compararCustos(0);
  assert.equal(r.entregasPorMes, 0);
  assert.equal(r.motoboysNecessarios, 0);
  assert.equal(r.custoProprio, 0);
  assert.equal(r.custoPorEntregaProprio, 0);
  assert.ok(Number.isFinite(r.custoPorEntregaProprio));
});

test("formata em real brasileiro", () => {
  const texto = formatarReal(6349);
  assert.match(texto, /6\.349/);
  assert.match(texto, /R\$/);
});
