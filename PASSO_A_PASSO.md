# 📖 Passo a Passo: Criando seu Primeiro Vídeo

Siga este guia visual para criar seu primeiro vídeo do zero.

---

## ✅ Verificação Inicial

### Passo 1: Você já tem créditos?

Acesse: https://console.higgsfield.ai

Você deve ver uma tela assim:

```
┌─────────────────────────────────────┐
│ Saldo de Créditos: X.XX            │
└─────────────────────────────────────┘
```

**Tem créditos?** ✅ Continue

**Não tem créditos?** 
1. Clique em "Billing" 
2. Escolha um plano
3. Faça o pagamento
4. Volte aqui

---

## 🔑 Checagem de Credenciais

### Passo 2: Verificar API Key

1. Abra seu projeto (a pasta HIGGSFIELD-EDITOR)
2. Procure pelo arquivo `.env.local`
3. Deve conter:
   ```
   HF_CREDENTIALS=seu-key-id:seu-key-secret
   ```

**Não tem chave?**
1. Vá em: https://console.higgsfield.ai/api-keys
2. Clique em "Create New Key"
3. Copie a chave (formato: `abc123:def456`)
4. Cole em `.env.local`

**Ficou assim?** ✅ Continue

---

## 🎬 Criando seu Primeiro Vídeo

### Passo 3: Abrir o arquivo `index.ts`

Na pasta do projeto, abra o arquivo `index.ts`

Você vai ver algo assim:

```typescript
const response = await client.subscribe(
  'bytedance/seedance-2.5/text-to-video',
  {
    input: {
      prompt: 'A cinematic scene at sunset',  ← VOCÊ VAI MUDAR ISSO
      duration: 5,
      resolution: '720p',
      aspect_ratio: '16:9'
    },
    withPolling: true
  }
);
```

### Passo 4: Mudar o Prompt

**Opção A: Usar um dos exemplos**

Abra `EXAMPLES.md` e escolha um exemplo que gosta.

Exemplo escolhido:
```
'A drone flying over mountain peaks with snow during golden sunset'
```

**Opção B: Criar seu próprio**

Pense em um vídeo que quer. Exemplo:
```
'A beautiful girl walking on a beach at sunset, dress flowing in the wind'
```

### Passo 5: Colar no Arquivo

No `index.ts`, encontre essa linha:
```typescript
prompt: 'A cinematic scene at sunset',
```

Mude para:
```typescript
prompt: 'Seu prompt aqui',
```

**Exemplo completo:**
```typescript
prompt: 'A drone flying over mountain peaks with snow during golden sunset',
duration: 5,
resolution: '720p',
aspect_ratio: '16:9'
```

### Passo 6: Salvar o Arquivo

Após fazer a mudança, salve o arquivo:
- Windows/Linux: `Ctrl + S`
- Mac: `Cmd + S`

---

## 🚀 Executar a Geração

### Passo 7: Abrir o Terminal

Na pasta do projeto, abra um terminal:

```bash
# Você deve estar em:
~/projetos/HIGGSFIELD-EDITOR
```

### Passo 8: Rodar o Comando

Digite no terminal:
```bash
npm run dev
```

Pressione Enter.

Você vai ver:
```
> higgsfield-editor@1.0.0 dev
> npm run build && cp .env.local dist/.env.local && node dist/index.js

🎬 Starting Seedance 2.5 text-to-video generation...
📝 Prompt: Seu prompt aqui
⏱️  Duration: 5 seconds
📐 Resolution: 720p, Aspect ratio: 16:9

```

### Passo 9: Aguardar a Geração

**Pode levar 30-120 segundos.**

Você vai ver mensagens como:
```
⏳ Gerando...
⏳ Status: queued
⏳ Status: in_progress
```

### Passo 10: Copiar o Link do Vídeo

Quando terminar, você vai ver:
```
✅ Generation completed successfully!

🎥 Generated Video URL:
https://video-cdn.higgsfield.ai/xxxxxxxxxxxxx/video.mp4
```

**Copie a URL!**

---

## ✨ Usando o Vídeo

### Passo 11: O Vídeo está Pronto!

Agora você pode:

**Opção 1: Baixar**
- Clique com botão direito na URL
- Selecione "Salvar vídeo como..."
- O arquivo `.mp4` será baixado

**Opção 2: Compartilhar**
- Copie a URL
- Cole em seu chat, rede social, etc
- Qualquer pessoa pode acessar

**Opção 3: Editar**
- Baixe o vídeo
- Abra em software de edição (Adobe, DaVinci, etc)
- Edite como quiser

---

## 🎨 Criando Mais Vídeos

### Para fazer outro vídeo:

1. Abra `index.ts` novamente
2. Mude o `prompt` para um novo
3. Salve
4. Execute `npm run dev`
5. Pronto!

**Dica:** Cada novo vídeo consome créditos. Verifique seu saldo em:
https://console.higgsfield.ai

---

## 🎯 Exemplos Passo a Passo

### Exemplo 1: Vídeo de Natureza

**Arquivo `index.ts`:**
```typescript
prompt: 'Ocean waves crashing on black rocks during a storm, cinematic lighting, dramatic sky',
duration: 8,
resolution: '1080p',
aspect_ratio: '16:9'
```

**Comando:**
```bash
npm run dev
```

**Resultado:** Vídeo de 8 segundos em 1080p mostrando ondas do mar.

---

### Exemplo 2: Vídeo para TikTok

**Arquivo `index.ts`:**
```typescript
prompt: 'Beautiful girl dancing modern dance with colorful spotlights, energetic movements',
duration: 6,
resolution: '1080p',
aspect_ratio: '9:16'
```

**Comando:**
```bash
npm run dev
```

**Resultado:** Vídeo vertical (9:16) perfeito para TikTok/Reels.

---

### Exemplo 3: Vídeo de Produto

**Arquivo `index.ts`:**
```typescript
prompt: 'Premium headphones being showcased with smooth transitions, professional lighting on clean white background',
duration: 5,
resolution: '1080p',
aspect_ratio: '16:9'
```

**Comando:**
```bash
npm run dev
```

**Resultado:** Vídeo profissional de produto.

---

## ⚠️ Se Algo der Errado

### Erro: "Not enough credits"
```
💥 Error: Not enough credits
```

**Solução:**
1. Vá em: https://console.higgsfield.ai/billing
2. Compre créditos
3. Volte e execute `npm run dev` novamente

### Erro: "HF_CREDENTIALS not set"
```
💥 Error: HF_CREDENTIALS not set in .env.local
```

**Solução:**
1. Abra `.env.local`
2. Adicione: `HF_CREDENTIALS=seu-key-id:seu-key-secret`
3. Salve
4. Execute `npm run dev` novamente

### Erro: "Content was flagged as NSFW"
```
⚠️  Content was flagged as NSFW and rejected. Credits refunded.
```

**Solução:**
- Tente um prompt diferente
- Evite conteúdo violento ou explícito
- Créditos são devolvidos automaticamente

### Vídeo de péssima qualidade
**Solução:**
- Mude o `prompt` para ser mais descritivo
- Aumente o `duration` 
- Tente com `resolution: '1080p'`

---

## 🎓 Aprendendo Mais

| Se você quer... | Leia... |
|----------------|---------|
| Entender como funciona | [USAGE.md](./USAGE.md) |
| Ver 25+ exemplos prontos | [EXAMPLES.md](./EXAMPLES.md) |
| Guia rápido em português | [GUIA_RAPIDO.md](./GUIA_RAPIDO.md) |
| Documentação oficial | https://docs.higgsfield.ai |

---

## ✅ Checklist Final

Antes de começar, marque tudo:

- [ ] Créditos adicionados na conta
- [ ] API Key configurada em `.env.local`
- [ ] Arquivo `index.ts` editado com novo prompt
- [ ] Terminal aberto na pasta do projeto
- [ ] Comando `npm run dev` executado
- [ ] Aguardei a geração terminar
- [ ] Copiei a URL do vídeo gerado

**Tudo marcado?** Parabéns! 🎉 Você criou seu primeiro vídeo!

---

## 🚀 Próximo Nível

Agora que você sabe como funciona, tente:

1. **Criar vários vídeos** em diferentes estilos
2. **Testar diferentes aspect ratios** (16:9, 9:16, 1:1)
3. **Baixar e editar** os vídeos em software profissional
4. **Compartilhar** nos seus canais (YouTube, TikTok, etc)
5. **Otimizar prompts** para qualidade melhor

---

**Boa sorte! 🎬 Divirta-se criando! ✨**

Qualquer dúvida, releia este guia ou veja a documentação oficial.
