# 🚀 Guia Rápido - Higgsfield Editor

## O que é isso?

Um projeto que gera **vídeos automaticamente** usando inteligência artificial. Você descreve o vídeo em texto e a IA cria pra você.

---

## 5 Passos para Começar

### 1️⃣ Você já tem créditos?
- **SIM?** Pule para o passo 3
- **NÃO?** Vá em: https://console.higgsfield.ai/billing e compre créditos

### 2️⃣ Verifique a chave API
- Abra: https://console.higgsfield.ai/api-keys
- Copie sua chave (formato: `key-id:key-secret`)
- Verifique se está em `.env.local` do projeto

### 3️⃣ Edite seu prompt
Abra o arquivo `index.ts` e mude isso:

```typescript
prompt: 'Seu vídeo aqui',  // ← MUDE ISSO
```

**Exemplos:**
- `'A drone flying over mountains at sunset'`
- `'Girl dancing in a nightclub with neon lights'`
- `'Robot walking through a futuristic city'`

### 4️⃣ Execute o comando
```bash
npm run dev
```

### 5️⃣ Aguarde e pegue o vídeo
O terminal vai mostrar a URL quando terminar:
```
🎥 Generated Video URL:
https://video-cdn.higgsfield.ai/...
```

---

## 🎬 Exemplos Rápidos

Copie e cole no `index.ts` (na linha do `prompt:`):

### Pôr do sol
```
'A cinematic aerial view of mountains during golden sunset with warm colors'
```

### Cidade futurista
```
'Futuristic neon-lit city at night with flying cars and holographic billboards'
```

### Dança
```
'Beautiful girl dancing modern dance in a dark studio with colorful spotlights'
```

### Natureza
```
'Ocean waves crashing on rocks during a storm with dramatic lighting'
```

### Comida
```
'Gourmet dish being plated with precision, steam rising, professional lighting'
```

---

## 🎨 Configurações Importantes

No mesmo arquivo `index.ts`, você pode mudar:

### Duração (segundos)
```typescript
duration: 5,  // Mude para 3-10
```

### Resolução
```typescript
resolution: '720p',  // Ou '1080p'
```

### Formato de tela
```typescript
aspect_ratio: '16:9',  // Opções: '16:9', '9:16', '1:1'
```

**Qual escolher?**
- **16:9** → YouTube, monitor, TV
- **9:16** → TikTok, Instagram Stories, celular
- **1:1** → Instagram Feed

---

## ⏱️ Tempos de Espera

Assim que você rodar `npm run dev`:
- ⏳ 1-2 seg: Autenticação
- ⏳ 5-10 seg: Upload do prompt
- ⏳ 20-120 seg: Gerando vídeo (vai aparecer "⏳ Status: queued" ou "in_progress")
- ✅ Pronto!

---

## 💡 Dicas para Vídeos Melhores

### ✅ Descreva Movimento
```
SEM: "A girl in a dance studio"
COM: "A girl dancing with energetic movements in a dark dance studio"
```

### ✅ Especifique Luz e Cor
```
SEM: "A city at night"
COM: "A city at night with neon purple and blue lights, cinematic lighting"
```

### ✅ Inclua Estilo
```
SEM: "A landscape"
COM: "A landscape in photorealistic style, cinematic quality"
```

### ✅ Seja Específico
```
SEM: "Casa"
COM: "Modern luxury house with white walls and large windows during sunset"
```

---

## 📱 Para Social Media

### TikTok/Instagram Reels
```typescript
duration: 6,
resolution: '1080p',
aspect_ratio: '9:16'
```

### YouTube/Monitor
```typescript
duration: 8,
resolution: '1080p',
aspect_ratio: '16:9'
```

### Instagram Feed
```typescript
duration: 5,
resolution: '720p',
aspect_ratio: '1:1'
```

---

## ❌ Erros Comuns

### Erro: "Not enough credits"
**Solução:** Compre créditos em https://console.higgsfield.ai/billing

### Erro: "HF_CREDENTIALS not set"
**Solução:** Adicione suas credenciais no arquivo `.env.local`

### Vídeo com status "nsfw"
**Significa:** Conteúdo foi detectado como impróprio. Créditos são devolvidos automaticamente. Tente outro prompt.

---

## 🎯 Workflow Típico

```
1. Pense em um vídeo legal
   ↓
2. Edite o prompt em index.ts
   ↓
3. Execute: npm run dev
   ↓
4. Aguarde 30-120 segundos
   ↓
5. Copie a URL do vídeo gerado
   ↓
6. Use em seu projeto/rede social
```

---

## 📞 Precisa de Mais?

- **Exemplos detalhados?** Veja `EXAMPLES.md`
- **Guia completo?** Veja `USAGE.md`
- **Dúvidas da API?** Veja https://docs.higgsfield.ai
- **Status do serviço?** Veja https://status.higgsfield.ai

---

## ✨ Resumão

| O que | Como |
|------|------|
| Gerar vídeo | `npm run dev` |
| Mudar prompt | Edite `index.ts` |
| Comprar créditos | https://console.higgsfield.ai/billing |
| Ver exemplos | Abra `EXAMPLES.md` |
| Entender tudo | Abra `USAGE.md` |

---

**Pronto! Agora é só criar vídeos incríveis! 🚀**

Próximo passo: Execute `npm run dev` e veja a magia acontecer ✨
