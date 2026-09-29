# 🎬 COMECE AQUI - Higgsfield Editor

Bem-vindo! Este é seu guia de entrada para o projeto de geração de vídeos com IA.

---

## 📍 Você está em qual ponto?

### 🆕 Você é novo e quer começar AGORA?
👉 Abra: **[PASSO_A_PASSO.md](./PASSO_A_PASSO.md)**

Este arquivo tem instruções passo-a-passo com exemplos visuais. Leva 5 minutos.

---

### 🚀 Você quer começar rápido (em português)?
👉 Abra: **[GUIA_RAPIDO.md](./GUIA_RAPIDO.md)**

Explicação concisa sobre o que é, como usar, e examples prontos. Leva 3 minutos.

---

### 📚 Você quer entender TUDO?
👉 Abra: **[USAGE.md](./USAGE.md)**

Documentação completa sobre como usar, configurar, e customizar. Leva 10 minutos.

---

### 💡 Você quer ver EXEMPLOS?
👉 Abra: **[EXAMPLES.md](./EXAMPLES.md)**

25+ prompts prontos para copiar e colar. Inclui: natureza, cidade, pessoas, ficção científica, food, social media.

---

### 🌍 Você quer a visão geral do projeto?
👉 Abra: **[README.md](./README.md)**

Documentação em English com recursos, FAQ, estrutura do projeto.

---

## ⚡ Resumo em 30 Segundos

Este projeto permite você:
- ✅ Escrever uma descrição de um vídeo em português
- ✅ Executar um comando
- ✅ Receber um vídeo gerado em 1-2 minutos

```bash
npm run dev  # Pronto!
```

---

## 🎯 Roteiro Recomendado

### Se tem 5 minutos:
1. Leia este arquivo até aqui
2. Vá em [PASSO_A_PASSO.md](./PASSO_A_PASSO.md)
3. Siga as instruções
4. Crie seu primeiro vídeo

### Se tem 20 minutos:
1. Leia [GUIA_RAPIDO.md](./GUIA_RAPIDO.md)
2. Abra [EXAMPLES.md](./EXAMPLES.md)
3. Escolha um exemplo
4. Cole em `index.ts`
5. Execute `npm run dev`
6. Leia [USAGE.md](./USAGE.md) pra entender melhor

### Se quer dominar:
1. Leia tudo: GUIA_RAPIDO.md → USAGE.md → EXAMPLES.md
2. Experimente diferentes prompts
3. Teste diferentes resoluções e aspect ratios
4. Baixe e edite os vídeos
5. Crie seu workflow

---

## 🎓 Estrutura de Arquivos

```
📁 HIGGSFIELD-EDITOR/
├── 📄 COMECE_AQUI.md ← VOCÊ ESTÁ AQUI
├── 📄 PASSO_A_PASSO.md (Tutorial visual - 5 min)
├── 📄 GUIA_RAPIDO.md (Guia rápido em português - 3 min)
├── 📄 USAGE.md (Documentação completa - 10 min)
├── 📄 EXAMPLES.md (25+ exemplos prontos)
├── 📄 README.md (Visão geral em English)
│
├── 📝 index.ts (Arquivo principal - EDITE AQUI)
├── 📝 generate-video.ts (Função reutilizável)
│
├── ⚙️ tsconfig.json (Configuração TypeScript)
├── ⚙️ package.json (Dependências)
├── 🔐 .env.local (Credenciais - não commitir)
└── 📂 dist/ (Código compilado)
```

---

## ✅ Checklist Inicial

Antes de começar, certifique-se:

- [ ] Você tem uma conta em https://console.higgsfield.ai
- [ ] Você tem API credentials (key-id:key-secret)
- [ ] Você adicionou créditos na sua conta
- [ ] A chave está em `.env.local`
- [ ] Node.js e npm estão instalados

**Tudo pronto?** Vá para [PASSO_A_PASSO.md](./PASSO_A_PASSO.md)

---

## 🚀 Comece em 3 Passos

### Passo 1: Abra `index.ts`
```typescript
prompt: 'A cinematic scene at sunset',  ← MUDE ISSO
```

Mude para algo que você quer:
```typescript
prompt: 'A drone flying over mountains at sunset',
```

### Passo 2: Salve o arquivo
`Ctrl + S` (ou `Cmd + S` no Mac)

### Passo 3: Execute
```bash
npm run dev
```

**Pronto!** Em 30-120 segundos você terá seu vídeo.

---

## 💡 Dicas Importantes

1. **Prompts específicos fazem vídeos melhores**
   - ❌ "Montanha"
   - ✅ "Drone flying over snowy mountain at sunset with cinematic lighting"

2. **Cada geração consome créditos**
   - Veja seu saldo em: https://console.higgsfield.ai

3. **Créditos não expiram**
   - Use quando quiser

4. **Vídeos NSFW são rejeitados**
   - Créditos são reembolsados automaticamente

---

## 🆘 Problemas Comuns?

### "Not enough credits"
→ Compre créditos em https://console.higgsfield.ai/billing

### "HF_CREDENTIALS not set"
→ Adicione sua chave em `.env.local`

### Vídeo com qualidade ruim
→ Tente um prompt mais detalhado

---

## 🎬 Próximas Ações

Escolha uma:

**Opção 1: Rápido (3 min)**
- Abra [GUIA_RAPIDO.md](./GUIA_RAPIDO.md)
- Siga as instruções
- Crie seu primeiro vídeo

**Opção 2: Passo-a-Passo (5 min)**
- Abra [PASSO_A_PASSO.md](./PASSO_A_PASSO.md)
- Siga cada passo detalhadamente
- Aprenda enquanto faz

**Opção 3: Completo (20 min)**
- Leia [USAGE.md](./USAGE.md) primeiro
- Veja [EXAMPLES.md](./EXAMPLES.md)
- Customize como quiser

---

## 📞 Links Importantes

| Recurso | Link |
|---------|------|
| Seu Console | https://console.higgsfield.ai |
| API Docs | https://docs.higgsfield.ai |
| Comprar Créditos | https://console.higgsfield.ai/billing |
| API Keys | https://console.higgsfield.ai/api-keys |
| Status da API | https://status.higgsfield.ai |

---

## ✨ Você está pronto!

Escolha seu caminho acima e comece a criar vídeos incríveis! 🎥

**Qual você escolhe?**

→ [🏃 PASSO_A_PASSO.md (Rápido)](./PASSO_A_PASSO.md)  
→ [⚡ GUIA_RAPIDO.md (Muito rápido)](./GUIA_RAPIDO.md)  
→ [📚 USAGE.md (Completo)](./USAGE.md)  
→ [💡 EXAMPLES.md (Exemplos)](./EXAMPLES.md)  

---

**Boa criação! 🚀**
