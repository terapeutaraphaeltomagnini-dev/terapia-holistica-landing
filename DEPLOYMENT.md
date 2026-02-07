# 🚀 Guia Completo de Deploy

Instruções detalhadas para fazer deploy da landing page em produção.

## 📋 Índice

1. [Checklist Pré-Deploy](#checklist-pré-deploy)
2. [Deploy na Vercel](#deploy-na-vercel)
3. [Deploy em Outras Plataformas](#deploy-em-outras-plataformas)
4. [Domínio Personalizado](#domínio-personalizado)
5. [Monitoramento e Manutenção](#monitoramento-e-manutenção)

---

## ✅ Checklist Pré-Deploy

Antes de fazer deploy, verifique:

### Funcionalidade

- [ ] Landing page carrega sem erros
- [ ] Todos os links funcionam
- [ ] CTAs do WhatsApp funcionam
- [ ] Formulários (se houver) funcionam
- [ ] Imagens carregam corretamente
- [ ] Responsividade em mobile, tablet e desktop

### Performance

- [ ] Build local funciona: `npm run build`
- [ ] Não há console errors: `npm run check`
- [ ] Tempo de carregamento aceitável
- [ ] Imagens estão otimizadas

### Segurança

- [ ] Nenhuma chave de API no código
- [ ] Nenhuma informação sensível exposta
- [ ] Dependências atualizadas: `npm audit`
- [ ] HTTPS será ativado automaticamente

### Conteúdo

- [ ] Todos os textos revisados
- [ ] Link WhatsApp correto
- [ ] Termos de Uso inclusos
- [ ] Política de Privacidade incluída
- [ ] Meta tags corretas para SEO

---

## 🚀 Deploy na Vercel

### Método 1: Deploy via GitHub (Recomendado)

**Vantagens**:
- Integração contínua automática
- Deploy automático a cada push
- Fácil rollback
- Preview automático de PRs

#### Passo 1: Preparar Repositório GitHub

```bash
# Inicialize git
git init

# Configure seu usuário git
git config user.name "Seu Nome"
git config user.email "seu-email@exemplo.com"

# Adicione todos os arquivos
git add .

# Commit inicial
git commit -m "Initial commit: landing page terapêutica holística"

# Crie um repositório em https://github.com/new
# Depois execute:
git remote add origin https://github.com/seu-usuario/raphael-terapia-holistica.git
git branch -M main
git push -u origin main
```

#### Passo 2: Deploy na Vercel

1. **Acesse Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Clique em "Sign Up" (ou "Log In" se já tem conta)
   - Escolha "Continue with GitHub"

2. **Autorize Vercel**
   - Vercel pedirá permissão para acessar seus repositórios
   - Clique em "Authorize Vercel"

3. **Importe o Repositório**
   - Clique em "New Project"
   - Clique em "Import Git Repository"
   - Procure por "raphael-terapia-holistica"
   - Clique em "Import"

4. **Configure o Projeto**
   - **Project Name**: `raphael-terapia-holistica` (ou seu nome)
   - **Framework Preset**: Vite (deve detectar automaticamente)
   - **Root Directory**: `./` (raiz)
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `dist` (padrão)
   - **Environment Variables**: Deixe em branco (não precisa)

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build completar (2-3 minutos)
   - Você receberá um URL como: `https://raphael-terapia-holistica.vercel.app`

#### Passo 3: Verificar Deploy

- Acesse a URL fornecida
- Teste todos os links e funcionalidades
- Verifique responsividade em mobile

### Método 2: Deploy via Vercel CLI

**Vantagens**: Mais rápido, controle total via terminal

```bash
# Instale Vercel CLI globalmente
npm install -g vercel

# Faça login
vercel login

# Deploy
vercel
```

Siga as instruções interativas:
- Confirme o projeto
- Confirme o diretório
- Escolha a organização (ou pessoal)
- Aguarde o deploy

### Método 3: Deploy Manual

Se preferir não usar GitHub:

```bash
# Build local
npm run build

# Instale Vercel CLI
npm install -g vercel

# Deploy da pasta dist
vercel --prod
```

---

## 🌐 Deploy em Outras Plataformas

### Netlify

1. Vá para [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu GitHub
4. Selecione o repositório
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clique em "Deploy site"

### GitHub Pages

```bash
# Instale gh-pages
npm install --save-dev gh-pages

# Adicione ao package.json:
# "homepage": "https://seu-usuario.github.io/raphael-terapia-holistica",
# "scripts": {
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
# }

# Deploy
npm run deploy
```

### Cloudflare Pages

1. Vá para [pages.cloudflare.com](https://pages.cloudflare.com)
2. Clique em "Create a project"
3. Conecte seu GitHub
4. Selecione o repositório
5. Configure:
   - **Framework**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Clique em "Save and Deploy"

---

## 🌍 Domínio Personalizado

### Registrar Domínio

1. Escolha um registrador:
   - [Namecheap](https://namecheap.com)
   - [GoDaddy](https://godaddy.com)
   - [Google Domains](https://domains.google)
   - [Registro.br](https://registro.br) (para .br)

2. Procure por seu domínio desejado
3. Registre por 1-3 anos
4. Anote os dados de acesso

### Conectar Domínio na Vercel

#### Passo 1: Adicione o Domínio

1. Vá para sua dashboard Vercel
2. Selecione o projeto
3. Vá para **Settings** → **Domains**
4. Clique em **Add Domain**
5. Digite seu domínio (ex: `www.menteecorpoemharmonia.com`)
6. Clique em **Add**

#### Passo 2: Configure DNS

Vercel mostrará as instruções. Geralmente:

1. Vá para o painel do seu registrador
2. Procure por **DNS Settings** ou **Nameservers**
3. Mude para os nameservers da Vercel:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

Ou adicione um registro CNAME:
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`

#### Passo 3: Aguarde Propagação

- Pode levar 24-48 horas
- Verifique com: `nslookup seu-dominio.com`
- Quando estiver pronto, Vercel mostrará "Connected"

#### Passo 4: SSL/HTTPS

Vercel ativa automaticamente HTTPS com certificado Let's Encrypt.

---

## 📊 Monitoramento e Manutenção

### Vercel Analytics

1. Dashboard Vercel → **Analytics**
2. Veja:
   - Requisições por dia
   - Tempo de resposta
   - Erros
   - Localização dos visitantes

### Configurar Alertas

1. **Settings** → **Alerts**
2. Configure notificações para:
   - Falhas de deploy
   - Erros de produção
   - Performance degradada

### Logs

1. **Deployments** → Selecione um deploy
2. Veja logs de build e runtime
3. Procure por erros

### Atualizar Código em Produção

Simplesmente faça push para GitHub:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

Vercel fará deploy automaticamente em poucos minutos.

### Rollback (Voltar para Versão Anterior)

1. Dashboard Vercel → **Deployments**
2. Encontre o deployment anterior
3. Clique em **Promote to Production**

---

## 🔒 Segurança em Produção

### HTTPS

- ✅ Ativado automaticamente pela Vercel
- Certificado renovado automaticamente
- Força HTTPS em todos os acessos

### Headers de Segurança

Vercel adiciona automaticamente:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

### Variáveis de Ambiente

Se precisar de variáveis secretas:

1. **Settings** → **Environment Variables**
2. Adicione suas variáveis
3. Elas não serão expostas no cliente

### Atualizações de Segurança

Verifique regularmente:

```bash
npm audit
npm audit fix
```

---

## 📈 Otimizações Pós-Deploy

### Performance

1. **Imagens**: Comprima com [TinyPNG](https://tinypng.com)
2. **Lazy Loading**: Implemente para imagens abaixo do fold
3. **Caching**: Vercel configura automaticamente

### SEO

1. Crie `public/sitemap.xml`
2. Crie `public/robots.txt`
3. Registre em Google Search Console
4. Registre em Bing Webmaster Tools

### Analytics

Adicione Google Analytics para rastrear visitantes:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🆘 Troubleshooting Deploy

### Deploy falha com erro de build

```bash
# Verifique localmente
npm run build

# Se falhar, veja o erro e corrija
npm run check  # Verifica TypeScript
```

### Site mostra versão antiga

```bash
# Limpe cache do navegador
# Ctrl+Shift+Delete (Windows/Linux)
# Cmd+Shift+Delete (Mac)

# Ou force um novo deploy
git commit --allow-empty -m "Force rebuild"
git push origin main
```

### Domínio não funciona

1. Verifique se DNS foi propagado: `nslookup seu-dominio.com`
2. Verifique se domínio está conectado em Vercel
3. Aguarde até 48 horas para propagação completa

### Imagens não carregam em produção

1. Verifique se URLs estão corretas
2. Se usar URLs CDN, teste se estão acessíveis
3. Se usar imagens locais, verifique se estão em `public/`

---

## ✨ Próximos Passos

Após deploy bem-sucedido:

1. **Teste A/B**: Teste diferentes headlines e CTAs
2. **Rastreamento**: Configure Google Analytics
3. **Otimização**: Monitore taxa de conversão
4. **Feedback**: Recolha feedback de visitantes
5. **Iteração**: Melhore continuamente

---

**Parabéns! Seu site está em produção! 🎉**

Para dúvidas, consulte:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Vite](https://vitejs.dev/)
- [Documentação React](https://react.dev/)
