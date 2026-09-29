# 🔧 Troubleshooting - Resolvendo Problemas

Se algo não está funcionando, você provavelmente encontrará a solução aqui.

---

## 💰 Erro: "Not enough credits"

### Sintoma
```
💥 Error: Not enough credits
```

### Causa
Sua conta não tem créditos suficientes para gerar um vídeo.

### Solução
1. Abra: https://console.higgsfield.ai/billing
2. Escolha um plano de créditos
3. Complete o pagamento
4. Aguarde 30 segundos
5. Execute `npm run dev` novamente

### Quanto custa?
- Depende da resolução e duração
- Consulte: https://console.higgsfield.ai/pricing

---

## 🔐 Erro: "HF_CREDENTIALS not set"

### Sintoma
```
💥 Error: HF_CREDENTIALS not set in .env.local. 
Please add your API credentials in key-id:key-secret format.
```

### Causa
O arquivo `.env.local` não tem as credenciais configuradas.

### Solução

#### Passo 1: Obter a Chave
1. Abra: https://console.higgsfield.ai/api-keys
2. Se não tem chave, clique "Create New Key"
3. Copie a chave (formato: `abc123:def456xyz`)

#### Passo 2: Adicionar ao Arquivo
1. Abra o arquivo `.env.local` na raiz do projeto
2. Mude isto:
   ```
   HF_CREDENTIALS=
   ```
3. Para isto (com sua chave):
   ```
   HF_CREDENTIALS=abc123:def456xyz
   ```
4. Salve o arquivo

#### Passo 3: Testar
Execute:
```bash
npm run dev
```

---

## ⚠️ Aviso: "Content was flagged as NSFW"

### Sintoma
```
⚠️  Content was flagged as NSFW and rejected. Credits refunded.
```

### Causa
O seu prompt descreve conteúdo que a API considerou impróprio.

### Solução
1. **Mude o prompt** para algo mais apropriado
2. **Evite:** violência, sexo, gore
3. **Tente:** natureza, ficção científica, arte, comida
4. Execute `npm run dev` novamente

### Exemplos de Prompts Seguros
- "A drone flying over mountains at sunset"
- "Girl dancing in a dance studio"
- "Robot walking in a city"
- "Ocean waves during a storm"

---

## 🎥 Problema: Vídeo com Péssima Qualidade

### Sintoma
- Vídeo muito pixelado
- Vídeo desfocado
- Cores estranhas
- Movimentos travados

### Causas Possíveis
1. Prompt muito genérico
2. Resolução baixa
3. Duração muito curta

### Solução

#### Opção 1: Melhorar o Prompt
**Ruim:**
```
A girl
```

**Bom:**
```
A beautiful girl with long dark hair dancing modern dance 
in a professional studio with colorful spotlights and 
dramatic lighting, energetic movements, slow motion effect
```

#### Opção 2: Aumentar Resolução
No `index.ts`:
```typescript
// De:
resolution: '720p',

// Para:
resolution: '1080p',
```

#### Opção 3: Aumentar Duração
```typescript
// De:
duration: 5,

// Para:
duration: 8,
```

---

## ⏳ Problema: Geração Muito Lenta

### Sintoma
- Esperou muito tempo (>5 min) e não terminou
- Status fica preso em "queued" ou "in_progress"

### Causas Possíveis
1. Servidor da API sobrecarregado
2. Prompt muito complexo
3. Problema de rede

### Solução

#### Opção 1: Aguardar Mais
- A API pode levar até 5 minutos em horários de pico
- Deixe rodando e vá tomar um café ☕

#### Opção 2: Cancelar e Tentar Novamente
```bash
# Pressione Ctrl + C para cancelar
npm run dev
```

Créditos são reembolsados se cancelado.

#### Opção 3: Simplificar o Prompt
Tente um prompt mais simples:

**Complexo:**
```
Intricate futuristic city with flying cars, holographic 
billboards, neon lights, rain, reflections, cinematic camera work
```

**Simples:**
```
Futuristic city at night with neon lights and flying cars
```

#### Opção 4: Verificar Status da API
Se todos os vídeos estão lentos:
- Acesse: https://status.higgsfield.ai
- Veja se há problemas reported

---

## ❌ Erro: "Generation failed"

### Sintoma
```
❌ Generation failed
```

### Causas Possíveis
1. Prompt inválido ou vazio
2. Parâmetros fora do range
3. Problema no servidor

### Solução

#### Verificar Prompt
Seu prompt está vazio?
```typescript
// ❌ Errado
prompt: '',

// ✅ Correto
prompt: 'A sunset over mountains',
```

#### Verificar Duração
Duração está entre 1 e 10 segundos?
```typescript
// ❌ Errado
duration: 0,      // Muito curto
duration: 120,    // Muito longo

// ✅ Correto
duration: 5,
```

#### Verificar Resolução
Resolução é válida?
```typescript
// ❌ Errado
resolution: '4K',   // Não suportado

// ✅ Correto
resolution: '720p',   // ou '1080p'
```

#### Verificar Aspect Ratio
Aspect ratio é válido?
```typescript
// ❌ Errado
aspect_ratio: '2:1',   // Não suportado

// ✅ Correto
aspect_ratio: '16:9',  // ou '9:16' ou '1:1'
```

Se tudo está correto, tente novamente. Pode ser erro temporário.

---

## 🌐 Erro: Problema de Rede

### Sintoma
```
Error: connect ECONNREFUSED 127.0.0.1:...
```

Ou:
```
Error: getaddrinfo ENOTFOUND api.higgsfield.ai
```

### Causa
- Internet desconectada
- Firewall bloqueando
- Problemas de DNS

### Solução

#### 1. Verificar Internet
```bash
ping google.com
```

Se não funcionar, seu internet está desconectado.

#### 2. Verificar Firewall
Se você está em uma rede corporativa:
- Fale com seu TI
- Peça para liberar: `api.higgsfield.ai`

#### 3. Verificar DNS
Tente mudar DNS (em último caso):
- Windows: Painel de Controle → Rede
- Mac: System Preferences → Network
- Linux: edite `/etc/resolv.conf`

---

## 🔄 Erro: TypeScript Não Compila

### Sintoma
```
error TS2305: Module has no exported member
```

Ou:
```
error TS2584: Cannot find name 'process'
```

### Causa
Configuração do TypeScript incorreta.

### Solução

#### Reinstalar Dependências
```bash
rm -rf node_modules
npm install
```

#### Verificar tsconfig.json
Arquivo deve ter:
```json
{
  "compilerOptions": {
    "lib": ["ES2020"],
    "types": ["node"],
    ...
  }
}
```

#### Limpar Cache
```bash
npm run build
```

---

## 📁 Erro: Arquivo .env.local não Funciona

### Sintoma
Arquivo `.env.local` não está sendo carregado.

### Causa
Arquivo pode estar em lugar errado ou com nome incorreto.

### Solução

#### Verificar Nome
Deve ser EXATAMENTE: `.env.local`

Não:
- `.env` (sem local)
- `env.local` (sem ponto)
- `.ENV.LOCAL` (case-sensitive)

#### Verificar Localização
Deve estar na raiz do projeto:
```
~/projetos/HIGGSFIELD-EDITOR/.env.local
```

Não em:
- `src/.env.local`
- `dist/.env.local` (será copiado automaticamente)

#### Verificar Conteúdo
Deve conter:
```
HF_CREDENTIALS=key-id:key-secret
```

Sem quebras de linha extras, sem espaços desnecessários.

---

## 🎬 Erro: Script Não Executa

### Sintoma
```bash
npm run dev
# Não faz nada ou erro estranho
```

### Causa
Pode ser problema com Node.js ou npm.

### Solução

#### 1. Verificar Node.js
```bash
node --version
# Deve mostrar v14+ (você tem v26.8.1, está ótimo!)
```

#### 2. Verificar npm
```bash
npm --version
# Deve mostrar v6+
```

#### 3. Limpar Cache
```bash
npm cache clean --force
npm install
```

#### 4. Testar Manualmente
```bash
npm run build
cp .env.local dist/.env.local
node dist/index.js
```

---

## 🆘 Erro: Algo Completamente Diferente

### Se nada acima resolveu:

1. **Copie a mensagem de erro completa**
2. **Procure em:** https://docs.higgsfield.ai/troubleshooting
3. **Recriar projeto do zero:**
   ```bash
   rm -rf node_modules dist
   npm install
   npm run build
   npm run dev
   ```

---

## ✅ Checklist de Debug

Se algo não funciona, execute passo-a-passo:

- [ ] `npm --version` (deve ser v6+)
- [ ] `node --version` (deve ser v14+)
- [ ] `.env.local` existe e tem credenciais
- [ ] `npm install` foi executado sem erros
- [ ] `npm run build` compila sem erros
- [ ] `index.ts` tem um prompt válido
- [ ] Internet está conectada
- [ ] Conta tem créditos
- [ ] Status da API está OK (https://status.higgsfield.ai)

---

## 🎯 Quando Pedir Ajuda

Se após tudo isso ainda não funciona:

1. Anote a **mensagem de erro completa**
2. Anote os **passos que tentou**
3. Anote seu **arquivo index.ts** (sem credenciais)
4. Acesse: https://console.higgsfield.ai/support
5. Compartilhe as informações acima

---

## 🚀 Funcionando Agora?

Parabéns! 🎉

Se resolveu o problema:
- Crie seu vídeo com `npm run dev`
- Compartilhe conosco seu resultado
- Divirta-se criando!

**Boa criação! 🎬✨**
