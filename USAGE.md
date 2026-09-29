# Como Usar o Higgsfield Editor para Gerar Vídeos

## 📋 Visão Geral

Este projeto permite gerar vídeos usando a API Higgsfield com o modelo **Seedance 2.5**. Você pode criar vídeos a partir de descrições de texto (text-to-video).

---

## 🎬 Exemplo Básico: Text-to-Video

O arquivo `index.ts` já tem um exemplo funcionando. Para usar:

```bash
npm run dev
```

**O que ele faz:**
- Lê as credenciais do `.env.local`
- Envia um prompt ("A cinematic scene at sunset") para a API
- Aguarda a geração do vídeo (polling automático)
- Retorna a URL do vídeo gerado

---

## 🔧 Personalizando o Script

Para criar seus próprios vídeos, edite o arquivo `index.ts` e altere esses parâmetros:

### Prompt (descrição do vídeo)
```typescript
prompt: 'A cinematic scene at sunset',
```

Exemplos de bons prompts:
- `'A drone flying over mountain peaks with snow'`
- `'Girl dancing in a city street at night with neon lights'`
- `'Ocean waves crashing on a rocky beach during sunrise'`
- `'Robot walking through a futuristic city'`

### Duração
```typescript
duration: 5,  // em segundos (1-10)
```

### Resolução
```typescript
resolution: '720p',  // ou '1080p'
```

### Aspect Ratio
```typescript
aspect_ratio: '16:9',  // ou '9:16', '1:1', etc
```

---

## 📝 Exemplo Prático: Criar um Vídeo Diferente

### Passo 1: Edite o `index.ts`

Mude a seção de input:

```typescript
const response = await client.subscribe(
  'bytedance/seedance-2.5/text-to-video',
  {
    input: {
      prompt: 'A futuristic city with flying cars and holographic billboards',
      duration: 8,
      resolution: '1080p',
      aspect_ratio: '16:9'
    },
    withPolling: true
  }
);
```

### Passo 2: Execute
```bash
npm run dev
```

### Passo 3: Aguarde
O script vai:
1. ✅ Compilar o TypeScript
2. ✅ Autenticar com suas credenciais
3. ⏳ Enviar o prompt para a API
4. ⏳ Aguardar a geração (geralmente 30-120 segundos)
5. ✅ Retornar a URL do vídeo

---

## 🎨 Dicas para Bons Vídeos

### ✨ Prompts Descritivos
Quanto mais detalhes, melhor o resultado:
- ❌ Ruim: "cachorro"
- ✅ Bom: "golden retriever correndo em um parque verde durante o dia, com luz solar brilhando"

### 🎥 Incluir Movimento
Descreva movimento e câmera:
- "câmera se afasta de..." 
- "transição suave para..."
- "zoom em..."
- "pan pela cena"

### 🎬 Especificar Estilo
- "cinematic"
- "documentary style"
- "cartoon animation"
- "photorealistic"

### 📐 Escolher o Aspect Ratio Certo
- **16:9** (widescreen) - melhor para TV/monitor
- **9:16** (portrait) - melhor para mobile/stories
- **1:1** (quadrado) - social media

---

## 💰 Créditos e Preços

Cada geração consome créditos da sua conta. Para ter créditos:

1. Acesse: https://console.higgsfield.ai/billing
2. Escolha um plano de créditos
3. Complete o pagamento
4. Os créditos aparecem na sua conta em segundos

---

## 🔑 Como Funciona a Autenticação

Suas credenciais estão seguras em `.env.local`:
- O arquivo está no `.gitignore` (nunca será commitado)
- Credenciais são carregadas apenas em tempo de execução
- Nunca são logadas ou expostas

---

## 📊 Entendendo a Resposta

Quando o vídeo é gerado com sucesso, você recebe:

```
✅ Generation completed successfully!

🎥 Generated Video URL:
https://video-cdn.higgsfield.ai/path/to/video.mp4
```

Você pode:
- Baixar o vídeo
- Compartilhar a URL
- Editar em outro software
- Usar em projetos

---

## ⚠️ Status Possíveis

- **completed** ✅ - Vídeo gerado com sucesso
- **failed** ❌ - Erro na geração (tente novamente)
- **nsfw** ⚠️ - Conteúdo flagged como impróprio, créditos reembolsados
- **queued** ⏳ - Aguardando processamento
- **in_progress** ⏳ - Gerando agora

---

## 🚀 Próximos Passos

1. **Adicionar créditos** na sua conta
2. **Editar o prompt** em `index.ts`
3. **Rodar** `npm run dev`
4. **Usar** o vídeo gerado

Boa criação! 🎬
