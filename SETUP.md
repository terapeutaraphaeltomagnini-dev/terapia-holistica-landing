# 🚀 Guia Completo de Setup e Deploy

Instruções passo a passo para configurar, desenvolver e fazer deploy da landing page.

## 📋 Índice

1. [Setup Local](#setup-local)
2. [Desenvolvimento](#desenvolvimento)
3. [Build para Produção](#build-para-produção)
4. [Deploy na Vercel](#deploy-na-vercel)
5. [Customizações Comuns](#customizações-comuns)
6. [Troubleshooting](#troubleshooting)

---

## 🔧 Setup Local

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** 18 ou superior ([download](https://nodejs.org/))
- **npm** (vem com Node.js) ou **pnpm** (alternativa mais rápida)
- **Git** para versionamento ([download](https://git-scm.com/))

### Verificar Instalação

```bash
node --version      # Deve ser v18 ou superior
npm --version       # Deve ser 9 ou superior
git --version       # Deve estar instalado
```

### Passos de Instalação

#### 1. Clone o repositório

```bash
# Via HTTPS
git clone https://github.com/seu-usuario/raphael-terapia-holistica.git

# Ou via SSH (se configurado)
git clone git@github.com:seu-usuario/raphael-terapia-holistica.git

# Entre no diretório
cd raphael-terapia-holistica
```

#### 2. Instale as dependências

```bash
# Com npm
npm install

# Ou com pnpm (mais rápido)
pnpm install
```

Isso criará a pasta `node_modules/` com todas as dependências.

#### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Você verá uma saída como:

```
  VITE v7.1.7  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

#### 4. Abra no navegador

Acesse `http://localhost:5173/` no seu navegador. A página será recarregada automaticamente quando você fizer mudanças.

---

## 💻 Desenvolvimento

### Estrutura de Pastas

```
raphael-terapia-holistica/
├── client/
│   ├── public/                  # Assets estáticos (favicon, etc)
│   │   └── index.html          # HTML principal
│   └── src/
│       ├── pages/
│       │   ├── Home.tsx        # Landing page (EDITAR AQUI)
│       │   ├── Termos.tsx      # Termos de Uso
│       │   ├── Privacidade.tsx # Política de Privacidade
│       │   └── NotFound.tsx    # Página 404
│       ├── components/         # Componentes reutilizáveis
│       ├── App.tsx             # Roteamento principal
│       ├── main.tsx            # Entry point
│       └── index.css           # Estilos globais
├── package.json                # Dependências
├── vite.config.ts              # Configuração Vite
├── tailwind.config.ts          # Configuração Tailwind
└── README.md                   # Documentação
```

### Editar Conteúdo

A maioria do conteúdo está em `client/src/pages/Home.tsx`:

```typescript
// Exemplo: Mudar texto do headline
<h1 className="text-4xl md:text-5xl font-bold leading-tight">
  Seu novo texto aqui
</h1>
```

### Editar Estilos

Estilos globais estão em `client/src/index.css`:

```css
:root {
  --primary: #a8d5ba;        /* Cor principal (verde-menta) */
  --accent: #8fa3b8;         /* Cor de destaque (azul) */
  --secondary: #e8dcc8;      /* Cor secundária (bege) */
}
```

### Editar Link WhatsApp

Em `client/src/pages/Home.tsx`, procure por:

```typescript
const WHATSAPP_LINK = "https://wa.link/0zku4o";
```

Substitua pelo seu link do WhatsApp.

### Hot Module Replacement (HMR)

Todas as mudanças são refletidas instantaneamente no navegador. Não precisa recarregar manualmente!

---

## 🏗️ Build para Produção

### Criar Build Otimizado

```bash
npm run build
```

Isso criará a pasta `dist/` com todos os arquivos otimizados para produção.

### Verificar Build Localmente

```bash
npm run preview
```

Abre um servidor local mostrando exatamente como ficará em produção.

### O que é Gerado

A pasta `dist/` contém:

```
dist/
├── index.html           # HTML minificado
├── assets/
│   ├── index-HASH.js    # JavaScript bundled e minificado
│   └── index-HASH.css   # CSS bundled e minificado
└── favicon.ico          # Ícone do site
```

---

## 🚀 Deploy na Vercel

### Opção 1: Deploy via GitHub (Recomendado)

**Vantagens**: Integração contínua, deploy automático a cada push, fácil rollback.

#### Passo 1: Criar repositório GitHub

```bash
# Inicialize git (se ainda não fez)
git init

# Adicione todos os arquivos
git add .

# Commit inicial
git commit -m "Initial commit: landing page terapêutica"

# Crie um repositório em github.com
# Depois, adicione o remote:
git remote add origin https://github.com/seu-usuario/raphael-terapia-holistica.git

# Envie para GitHub
git branch -M main
git push -u origin main
```

#### Passo 2: Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Selecione **"Import Git Repository"**
4. Conecte sua conta GitHub
5. Selecione o repositório `raphael-terapia-holistica`
6. Clique em **"Import"**
7. Vercel detectará automaticamente:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
8. Clique em **"Deploy"**

Pronto! Seu site estará online em poucos minutos.

#### Passo 3: Configurar Domínio Personalizado (Opcional)

1. Na dashboard Vercel, vá para **"Settings"** → **"Domains"**
2. Adicione seu domínio personalizado
3. Siga as instruções para apontar seu DNS

### Opção 2: Deploy via Vercel CLI

```bash
# Instale Vercel CLI
npm install -g vercel

# Faça login
vercel login

# Deploy
vercel
```

Siga as instruções interativas.

### Opção 3: Deploy Manual via ZIP

1. Faça o build: `npm run build`
2. Vá para [vercel.com](https://vercel.com)
3. Clique em **"New Project"** → **"Other"**
4. Faça upload da pasta `dist/`
5. Clique em **"Deploy"**

---

## ✏️ Customizações Comuns

### 1. Mudar Cores

Edite `client/src/index.css`:

```css
:root {
  --primary: #seu-verde;
  --accent: #seu-azul;
  --secondary: #seu-bege;
}
```

### 2. Mudar Fontes

Edite `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFont:wght@400;600;700&display=swap" rel="stylesheet" />
```

E atualize em `index.css`:

```css
h1, h2, h3 {
  font-family: 'SuaFont', sans-serif;
}
```

### 3. Adicionar Nova Página

Crie `client/src/pages/Contato.tsx`:

```typescript
export default function Contato() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Seu conteúdo */}
    </div>
  );
}
```

Adicione a rota em `client/src/App.tsx`:

```typescript
import Contato from "./pages/Contato";

function Router() {
  return (
    <Switch>
      <Route path={"\\"} component={Home} />
      <Route path={"/contato"} component={Contato} />
      {/* ... outras rotas */}
    </Switch>
  );
}
```

### 4. Adicionar Imagem Local

1. Coloque a imagem em `client/public/images/`
2. Referencie em `Home.tsx`:

```typescript
<img src="/images/minha-imagem.png" alt="Descrição" />
```

### 5. Mudar Meta Tags (SEO)

Edite `client/index.html`:

```html
<title>Seu Título Aqui</title>
<meta name="description" content="Sua descrição aqui" />
<meta property="og:title" content="Título para redes sociais" />
```

---

## 🐛 Troubleshooting

### Problema: "Port 5173 is already in use"

**Solução**: Use outra porta

```bash
npm run dev -- --port 3000
```

### Problema: Erro ao instalar dependências

**Solução**: Limpe cache e reinstale

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: Build falha

**Solução**: Verifique erros TypeScript

```bash
npm run check
```

Corrija os erros e tente novamente.

### Problema: Imagens não carregam em produção

**Solução**: Verifique se:
- URLs CDN estão acessíveis
- Ou mude para imagens locais em `client/public/`

### Problema: Estilos não aparecem em produção

**Solução**: Limpe cache do navegador (Ctrl+Shift+Delete)

### Problema: Deploy na Vercel falha

**Solução**: Verifique:
1. `package.json` está na raiz do repositório
2. `npm run build` funciona localmente
3. Não há variáveis de ambiente faltando

---

## 📊 Monitoramento em Produção

### Vercel Analytics

1. Na dashboard Vercel, vá para **"Analytics"**
2. Veja métricas de performance e tráfego
3. Configure alertas se necessário

### Google Analytics (Opcional)

Para adicionar rastreamento:

1. Crie uma conta em [google.com/analytics](https://google.com/analytics)
2. Adicione o script em `client/index.html`:

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

## 🔐 Segurança

### Checklist de Segurança

- [ ] Nenhuma chave de API no código
- [ ] HTTPS ativado (Vercel faz automaticamente)
- [ ] Dependências atualizadas: `npm audit`
- [ ] Política de Privacidade incluída
- [ ] Termos de Uso incluídos

### Atualizar Dependências

```bash
npm update
npm audit fix
```

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique este guia
2. Consulte a documentação do [Vite](https://vitejs.dev/)
3. Consulte a documentação do [Vercel](https://vercel.com/docs)
4. Abra uma issue no GitHub

---

**Pronto para começar?** Execute `npm install && npm run dev` e comece a desenvolver! 🎉
