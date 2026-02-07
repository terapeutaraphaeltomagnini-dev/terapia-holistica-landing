# 📦 Instruções de Exportação e Uso

Este documento contém instruções para usar o projeto exportado de forma totalmente independente do Manus.

## ✅ O que Está Incluído

### Código-Fonte Completo
- ✅ React 19 + TypeScript
- ✅ Vite como build tool
- ✅ Tailwind CSS 4
- ✅ shadcn/ui components
- ✅ Lucide React icons
- ✅ Wouter para roteamento

### Páginas e Conteúdo
- ✅ Landing page (Home.tsx) - Completa e otimizada
- ✅ Página de Termos de Uso
- ✅ Página de Política de Privacidade
- ✅ Página 404

### Configurações
- ✅ Vite config (vite.config.ts)
- ✅ Tailwind config (tailwind.config.ts)
- ✅ TypeScript config (tsconfig.json)
- ✅ Vercel config (vercel.json) - Pronto para deploy
- ✅ PostCSS config (postcss.config.js)

### Documentação Completa
- ✅ README.md - Visão geral
- ✅ SETUP.md - Guia de setup e desenvolvimento
- ✅ DEPLOYMENT.md - Guia de deploy
- ✅ CUSTOMIZATION.md - Guia de personalização
- ✅ DOCS_INDEX.md - Índice de documentação
- ✅ EXPORT_INSTRUCTIONS.md - Este arquivo

## 🚀 Primeiros Passos

### 1. Extrair o Arquivo ZIP

```bash
unzip raphael-terapia-holistica-export.zip
cd export-raphael-terapia
```

### 2. Instalar Dependências

```bash
npm install
# ou
pnpm install
```

### 3. Iniciar Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:5173 no navegador.

## 🔒 Verificação de Independência

O projeto foi verificado para garantir que:

- ✅ **Nenhuma dependência do Manus**: Sem imports ou scripts da plataforma Manus
- ✅ **Sem links para Manus**: Nenhuma referência a manus.computer ou similares
- ✅ **Sem variáveis de ambiente do Manus**: Sem VITE_ANALYTICS_ENDPOINT ou similares
- ✅ **Código limpo**: Sem comentários ou placeholders do Manus
- ✅ **Pronto para produção**: Otimizado para deploy em qualquer plataforma

## 📋 Checklist de Configuração

Antes de fazer deploy, configure:

### 1. Link WhatsApp

Edite `client/src/pages/Home.tsx`:

```typescript
const WHATSAPP_LINK = "https://wa.link/seu-link";
```

### 2. Meta Tags e SEO

Edite `client/index.html`:

```html
<title>Seu Título</title>
<meta name="description" content="Sua descrição">
```

### 3. Imagens

Se usar imagens locais:
1. Coloque em `client/public/images/`
2. Referencie como `/images/seu-arquivo.png`

Se usar URLs CDN:
1. Substitua as URLs nos componentes

### 4. Domínio Personalizado

Após deploy na Vercel:
1. Vá para Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruído

## 🚀 Deploy Recomendado: Vercel

### Passo 1: Criar Repositório GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/raphael-terapia.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy na Vercel

1. Vá para [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Clique em "Deploy"

Vercel detectará automaticamente:
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### Passo 3: Configurar Domínio (Opcional)

1. Em Vercel, vá para Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruído

## 🔄 Atualizações Futuras

Para manter o projeto atualizado:

```bash
# Verifique dependências desatualizadas
npm outdated

# Atualize dependências
npm update

# Verifique vulnerabilidades
npm audit
npm audit fix
```

## 📊 Estrutura Final

```
raphael-terapia-holistica/
├── client/
│   ├── public/
│   │   ├── index.html          # HTML principal
│   │   └── images/             # Suas imagens locais
│   └── src/
│       ├── pages/
│       │   ├── Home.tsx        # Landing page (EDITAR AQUI)
│       │   ├── Termos.tsx
│       │   ├── Privacidade.tsx
│       │   └── NotFound.tsx
│       ├── components/         # Componentes reutilizáveis
│       ├── contexts/           # React contexts
│       ├── hooks/              # Custom hooks
│       ├── lib/                # Utilities
│       ├── App.tsx             # Roteamento
│       ├── main.tsx            # Entry point
│       └── index.css           # Estilos globais
├── package.json                # Dependências
├── vite.config.ts              # Build config
├── tailwind.config.ts          # Tailwind config
├── vercel.json                 # Vercel config
├── tsconfig.json               # TypeScript config
├── postcss.config.js           # PostCSS config
├── .gitignore                  # Git ignore
├── README.md                   # Visão geral
├── SETUP.md                    # Setup guide
├── DEPLOYMENT.md               # Deploy guide
├── CUSTOMIZATION.md            # Customization guide
└── DOCS_INDEX.md               # Documentation index
```

## 🔐 Segurança

### Checklist de Segurança

- [ ] Nenhuma chave de API no código
- [ ] Nenhuma informação sensível exposta
- [ ] HTTPS ativado (Vercel faz automaticamente)
- [ ] Dependências atualizadas: `npm audit`
- [ ] Política de Privacidade incluída
- [ ] Termos de Uso incluídos

### Antes de Deploy

```bash
# Verifique erros TypeScript
npm run check

# Verifique vulnerabilidades
npm audit

# Faça build e teste
npm run build
npm run preview
```

## 📞 Suporte

Se encontrar problemas:

1. **Erro de build**: Verifique `npm run check` para erros TypeScript
2. **Imagens não carregam**: Verifique URLs ou coloque em `client/public/`
3. **Estilos não funcionam**: Limpe cache (Ctrl+Shift+Delete)
4. **Deploy falha**: Verifique se `npm run build` funciona localmente

Consulte também:
- [Documentação Vite](https://vitejs.dev/)
- [Documentação React](https://react.dev/)
- [Documentação Tailwind](https://tailwindcss.com/)
- [Documentação Vercel](https://vercel.com/docs)

## ✨ Próximos Passos

1. **Customize o conteúdo**: Edite textos, cores e imagens
2. **Teste localmente**: Execute `npm run dev`
3. **Faça build**: Execute `npm run build`
4. **Deploy**: Siga DEPLOYMENT.md
5. **Monitore**: Configure Google Analytics
6. **Otimize**: Melhore continuamente baseado em dados

## 📝 Notas Importantes

- Este projeto é **totalmente independente** do Manus
- Você tem **controle total** do código
- Pode fazer **deploy em qualquer plataforma** (Vercel, Netlify, GitHub Pages, etc)
- Pode **modificar livremente** conforme necessário
- Pode **versioná-lo no GitHub** sem restrições

## 🎉 Parabéns!

Você agora tem uma landing page profissional, pronta para produção, totalmente independente e customizável.

Comece editando `client/src/pages/Home.tsx` e veja as mudanças em tempo real com `npm run dev`!

---

**Data de Exportação**: Fevereiro de 2026

**Versão do Projeto**: 1.0.0

**Stack**: React 19 + TypeScript + Vite + Tailwind CSS 4

Desenvolvido com ❤️ para terapia holística online.
