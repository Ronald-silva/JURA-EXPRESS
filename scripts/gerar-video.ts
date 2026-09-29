/**
 * Gera o vídeo do Hero pela API da Higgsfield, descarrega-o para
 * web/public/media/ e extrai o frame de poster.
 *
 *   npm run gerar -- cidade          gera (consome créditos)
 *   npm run gerar -- cidade --seco   só mostra o prompt, não gasta nada
 *   npm run retomar                  volta a acompanhar o último pedido
 *   npm run retomar -- <request_id>  acompanha um pedido específico
 *
 * O pedido é enviado sem polling e o request_id é gravado em disco ANTES de
 * começarmos a esperar. Na primeira versão deste script o polling do SDK
 * lançava exceção ao fim do tempo máximo e levava o request_id com ele: os
 * créditos ficavam gastos sem forma de ir buscar o resultado. Separar o envio
 * da espera torna a espera repetível de graça.
 */
import { createHiggsfieldClient } from "@higgsfield/client/v2";
import { execFile } from "node:child_process";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { CONCEITOS, type Conceito } from "./conceitos.ts";

const execFileAsync = promisify(execFile);

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DESTINO = path.join(RAIZ, "web", "public", "media");
const REGISTO = path.join(RAIZ, ".ultimo-pedido.json");

const ENDPOINT = "bytedance/seedance-2.5/text-to-video";
const API = "https://api.higgsfield.ai";

interface Registo {
  requestId: string;
  conceito: string;
  ficheiro: string;
  criadoEm: string;
}

function credenciais(): string {
  const c = process.env.HF_CREDENTIALS;
  if (!c) {
    throw new Error(
      "HF_CREDENTIALS não definido. Confirme .env.local (npm run gerar já o carrega).",
    );
  }
  return c;
}

/** Consulta o estado sem o SDK, para podermos retomar um pedido antigo. */
async function estado(requestId: string) {
  const res = await fetch(`${API}/requests/${requestId}/status`, {
    headers: {
      Authorization: `Key ${credenciais()}`,
      "User-Agent": "higgsfield-server-js/2.0",
    },
  });
  if (!res.ok) {
    throw new Error(`Consulta falhou: HTTP ${res.status} ${await res.text()}`);
  }
  return (await res.json()) as {
    status: string;
    video?: { url: string };
    images?: { url: string }[];
  };
}

/** Espera até terminar, relatando o tempo decorrido. Repetível sem custo. */
async function esperar(requestId: string, minutos = 20) {
  const limite = Date.now() + minutos * 60_000;
  let anterior = "";

  while (Date.now() < limite) {
    const r = await estado(requestId);

    if (r.status !== anterior) {
      console.log(`   [${new Date().toLocaleTimeString("pt-BR")}] ${r.status}`);
      anterior = r.status;
    }

    if (r.status === "completed") return r;
    if (r.status === "failed") throw new Error("A geração falhou.");
    if (r.status === "nsfw") {
      throw new Error("Recusado pelo filtro de conteúdo. Créditos devolvidos.");
    }

    await new Promise((r) => setTimeout(r, 5_000));
  }

  throw new Error(
    `Ainda a processar ao fim de ${minutos} min.\n` +
      `   O pedido continua vivo — retome com:  npm run retomar -- ${requestId}`,
  );
}

async function guardar(r: { video?: { url: string }; images?: { url: string }[] }, ficheiro: string) {
  const url = r.video?.url ?? r.images?.[0]?.url;
  if (!url) throw new Error(`Resposta sem URL: ${JSON.stringify(r)}`);

  console.log(`🔗 ${url.slice(0, 70)}...`);
  await mkdir(DESTINO, { recursive: true });

  const mp4 = path.join(DESTINO, `${ficheiro}.mp4`);
  const jpg = path.join(DESTINO, `${ficheiro}.jpg`);

  console.log("⬇️  A descarregar...");
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download falhou: HTTP ${res.status}`);
  await writeFile(mp4, Buffer.from(await res.arrayBuffer()));

  const { size } = await stat(mp4);
  console.log(`   ${path.relative(RAIZ, mp4)} (${(size / 1048576).toFixed(1)} MB)`);

  // Um segundo dentro do vídeo: o primeiro frame costuma ser escuro.
  await execFileAsync("ffmpeg", [
    "-y", "-loglevel", "error",
    "-ss", "00:00:01", "-i", mp4,
    "-frames:v", "1", "-q:v", "3", jpg,
  ]);
  console.log(`   ${path.relative(RAIZ, jpg)}`);

  await writeFile(
    path.join(RAIZ, "web", "src", "lib", "midia.ts"),
    `/**
 * Assets gerados pela Higgsfield e guardados em web/public/media/.
 * Escrito por scripts/gerar-video.ts — editar à mão é seguro.
 */
export const MIDIA = {
  heroVideo: "/media/${ficheiro}.mp4" as string | null,
  /** Primeiro frame do vídeo: aparece enquanto carrega e em ligações lentas. */
  heroPoster: "/media/${ficheiro}.jpg" as string | null,
};
`,
  );
  console.log("   web/src/lib/midia.ts atualizado");
  console.log("\n🎉 Feito. Recarregue http://localhost:3000 para ver no Hero.");
}

async function gerar(conceito: Conceito, seco: boolean) {
  console.log(`\n🎬 ${conceito.titulo}`);
  console.log(`   ${conceito.duracao}s · ${conceito.resolucao} · ${conceito.proporcao}`);
  console.log(`\n📝 ${conceito.prompt}\n`);

  if (seco) {
    console.log("🧪 Modo seco: nada enviado, nenhum crédito gasto.");
    return;
  }

  const client = createHiggsfieldClient({ credentials: credenciais() });

  console.log("📤 A enviar o pedido...");
  const inicial = await client.subscribe(ENDPOINT, {
    input: {
      prompt: conceito.prompt,
      duration: conceito.duracao,
      resolution: conceito.resolucao,
      aspect_ratio: conceito.proporcao,
    },
    // Sem polling: queremos o request_id em mãos antes de esperar.
    withPolling: false,
  });

  if (!inicial.request_id) {
    throw new Error(`Sem request_id na resposta: ${JSON.stringify(inicial)}`);
  }

  const registo: Registo = {
    requestId: inicial.request_id,
    conceito: conceito.chave,
    ficheiro: conceito.ficheiro,
    criadoEm: new Date().toISOString(),
  };
  await writeFile(REGISTO, JSON.stringify(registo, null, 2));

  console.log(`🆔 ${inicial.request_id}`);
  console.log("   (guardado em .ultimo-pedido.json — retome com npm run retomar)");
  console.log("⏳ A aguardar...");

  const pronto = await esperar(inicial.request_id);
  await guardar(pronto, conceito.ficheiro);
}

async function retomar(idExplicito?: string) {
  let requestId = idExplicito;
  let ficheiro = "hero-motoboy";

  if (!requestId) {
    const reg = JSON.parse(await readFile(REGISTO, "utf8")) as Registo;
    requestId = reg.requestId;
    ficheiro = reg.ficheiro;
    console.log(`\n🔁 Último pedido: ${reg.conceito} (${reg.criadoEm})`);
  }

  console.log(`🆔 ${requestId}`);
  console.log("⏳ A consultar...");

  const pronto = await esperar(requestId);
  await guardar(pronto, ficheiro);
}

async function main() {
  const args = process.argv.slice(2);
  const modo = args.includes("--retomar");
  const seco = args.includes("--seco");
  const livre = args.filter((a) => !a.startsWith("--"));

  if (modo) return retomar(livre[0]);

  const chave = livre[0];
  if (!chave || !CONCEITOS[chave]) {
    console.error("Escolha um conceito:\n");
    for (const c of Object.values(CONCEITOS)) {
      console.error(`  ${c.chave.padEnd(10)} ${c.titulo}`);
    }
    console.error("\nExemplo: npm run gerar -- cidade");
    process.exit(1);
  }

  return gerar(CONCEITOS[chave], seco);
}

main().catch((erro) => {
  console.error("\n💥", erro instanceof Error ? erro.message : erro);
  process.exit(1);
});
