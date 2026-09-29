# Higgsfield Editor - Gerador de Vídeos com IA

Um projeto TypeScript para gerar vídeos automaticamente usando a API Higgsfield e o modelo **Seedance 2.5**. Crie vídeos cinematográficos a partir de descrições em texto.

---

## ✨ Recursos

- ✅ Text-to-Video com Seedance 2.5
- ✅ TypeScript + Node.js
- ✅ Autenticação segura com credenciais
- ✅ Polling automático até conclusão
- ✅ Exemplos prontos e documentação completa
- ✅ Suporte para múltiplas resoluções e aspect ratios

---

## 🚀 Início Rápido

### 1. Clonar/Usar este Projeto
```bash
npm install
```

### 2. Adicionar Credenciais
Edite `.env.local` e adicione suas credenciais:
```
HF_CREDENTIALS=seu-key-id:seu-key-secret
```

Obtenha suas credenciais em: https://console.higgsfield.ai/api-keys

### 3. Adicionar Créditos
Você precisa de créditos para gerar vídeos. Acesse:
https://console.higgsfield.ai/billing

### 4. Gerar seu Primeiro Vídeo
```bash
npm run dev
```

Pronto! O vídeo será gerado e a URL será exibida no terminal.

---

## 📚 Documentação

- **[USAGE.md](./USAGE.md)** - Como usar o projeto com explicação detalhada
- **[EXAMPLES.md](./EXAMPLES.md)** - 25+ exemplos de prompts prontos para copiar e colar

---

## 🎬 Como Funciona

### Passo 1: Descrever
Escreva o que você quer em um prompt:
```
"A drone flying over snowy mountains at sunset with cinematic lighting"
```

### Passo 2: Executar
```bash
npm run dev
```

### Passo 3: Aguardar
O script envia o prompt para a API e aguarda a geração (tipicamente 30-120 segundos).

### Passo 4: Usar
Receba a URL do vídeo pronto para usar, compartilhar ou editar.

---

## 📝 Scripts Disponíveis

```bash
# Compilar e executar (gera um vídeo)
npm run dev

# Compilar TypeScript
npm run build

# Executar vídeo compilado
npm start
```

---

## 🔧 Configuração de Geração

Edite o arquivo `index.ts` para personalizar:

```typescript
const response = await client.subscribe(
  'bytedance/seedance-2.5/text-to-video',
  {
    input: {
      prompt: 'Seu prompt aqui',           // Descrição do vídeo
      duration: 5,                         // 1-10 segundos
      resolution: '720p',                  // '720p' ou '1080p'
      aspect_ratio: '16:9'                 // '16:9', '9:16', '1:1'
    },
    withPolling: true
  }
);
```

---

## 🎨 Boas Práticas para Prompts

### ✅ Bom Prompt (Específico)
```
"Cinematic aerial view of a mountain peak during golden sunset, 
warm orange and purple colors, soft camera pan to the left, 
photorealistic quality"
```

### ❌ Ruim Prompt (Muito genérico)
```
"Uma montanha"
```

### 💡 Dicas
- Inclua movimento ("camera flies", "zoom in", "pan left")
- Especifique iluminação ("golden light", "neon glow", "dramatic shadows")
- Mencione estilo ("cinematic", "documentary", "animation")
- Descreva cores e atmosfera

---

## 🌍 Aspect Ratios Comuns

| Tipo | Ratio | Uso |
|------|-------|-----|
| Desktop/TV | 16:9 | Monitor, YouTube |
| Mobile | 9:16 | TikTok, Reels, Stories |
| Quadrado | 1:1 | Instagram, Feed |

---

## 📊 Entendendo a Resposta

```
🎬 Starting Seedance 2.5 text-to-video generation...
📝 Prompt: A cinematic scene at sunset
⏱️  Duration: 5 seconds
📐 Resolution: 720p, Aspect ratio: 16:9

✅ Generation completed successfully!

🎥 Generated Video URL:
https://video-cdn.higgsfield.ai/...
```

---

## 💰 Créditos e Preços

- Cada geração consome créditos
- Preços variam por duração e resolução
- Reembolsos automáticos em caso de falha ou conteúdo NSFW
- Confira preços em: https://console.higgsfield.ai/pricing

---

## 🔒 Segurança

- Credenciais armazenadas em `.env.local` (gitignored)
- Nunca são logadas ou expostas
- Carregadas apenas em tempo de execução
- Comunicação criptografada com a API

---

## 📁 Estrutura do Projeto

```
.
├── index.ts              # Exemplo principal
├── generate-video.ts     # Função reutilizável
├── .env.local            # Credenciais (gitignored)
├── tsconfig.json         # Configuração TypeScript
├── package.json          # Dependências
├── USAGE.md              # Guia de uso
├── EXAMPLES.md           # Exemplos de prompts
└── README.md             # Este arquivo
```

---

## 🛠️ Dependências

- `@higgsfield/client` - SDK oficial da Higgsfield
- `dotenv` - Carregamento de variáveis de ambiente
- `typescript` - Compilação TypeScript
- `ts-node` - Execução TypeScript

---

## ⚠️ Status Possíveis de Geração

| Status | Significado |
|--------|------------|
| `completed` | ✅ Vídeo gerado com sucesso |
| `failed` | ❌ Erro na geração |
| `nsfw` | ⚠️ Conteúdo impróprio, créditos reembolsados |
| `queued` | ⏳ Aguardando processamento |
| `in_progress` | ⏳ Gerando agora |

---

## 🤔 Perguntas Frequentes

**P: Como obtenho minhas credenciais?**
R: Acesse https://console.higgsfield.ai/api-keys e crie uma nova API key.

**P: Quanto tempo leva pra gerar um vídeo?**
R: Geralmente 30-120 segundos, dependendo da complexidade e resolução.

**P: Posso gerar vários vídeos em sequência?**
R: Sim! Execute `npm run dev` múltiplas vezes. Cada execução usa créditos.

**P: O que fazer se receber erro "Not enough credits"?**
R: Adicione créditos em https://console.higgsfield.ai/billing

**P: Posso editar o vídeo gerado?**
R: Sim! Baixe o vídeo e edite em qualquer software (Adobe Premiere, DaVinci Resolve, etc).

**P: Como compartilhar o vídeo?**
R: A URL retornada pode ser compartilhada, ou baixe o arquivo de vídeo.

---

## 📞 Suporte

- Documentação da API: https://docs.higgsfield.ai
- Status da API: https://status.higgsfield.ai
- Console: https://console.higgsfield.ai

---

## 📄 Licença

MIT

---

## 🚀 Próximos Passos

1. Leia [USAGE.md](./USAGE.md) para entender como usar
2. Veja [EXAMPLES.md](./EXAMPLES.md) para 25+ exemplos prontos
3. Adicione créditos na sua conta
4. Personalize o prompt e gere seus vídeos!

**Bora criar vídeos incríveis! 🎬**
