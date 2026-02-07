# Mente e Corpo em Harmonia - Landing Page Terapêutica

Landing page profissional para atendimento terapêutico holístico online, otimizada para conversão via Google Ads.

## 📋 Características

- **Design Minimalista Acolhedor**: Paleta de cores tranquilizadora (verde-menta, azul-acinzentado, bege)
- **Copywriting Emocional**: Textos empáticos focados em conexão com o público-alvo
- **Otimizado para Conversão**: CTAs estratégicos direcionando para WhatsApp
- **Responsivo**: Totalmente adaptado para mobile, tablet e desktop
- **Performance**: Carregamento rápido, otimizado para Google Ads
- **Acessível**: Seguindo boas práticas de acessibilidade web

## 🛠️ Stack Tecnológico

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Vite** - Build tool rápido e moderno
- **shadcn/ui** - Componentes de UI de alta qualidade
- **Lucide React** - Ícones SVG

## 📦 Instalação Local

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm como gerenciador de pacotes

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/raphael-terapia-holistica.git
cd raphael-terapia-holistica
```

2. **Instale as dependências**

```bash
npm install
# ou
pnpm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
pnpm dev
```

O servidor estará disponível em `http://localhost:5173`

## 🚀 Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. **Push do código para GitHub**

```bash
git remote add origin https://github.com/seu-usuario/raphael-terapia-holistica.git
git branch -M main
git push -u origin main
```

2. **Acesse Vercel**

- Vá para [vercel.com](https://vercel.com)
- Clique em "New Project"
- Selecione seu repositório GitHub
- Vercel detectará automaticamente que é um projeto Vite
- Clique em "Deploy"

### Opção 2: Via Vercel CLI

1. **Instale Vercel CLI**

```bash
npm install -g vercel
```

2. **Deploy**

```bash
vercel
```

Siga as instruções interativas. Vercel fará o deploy automaticamente.

### Opção 3: Deploy Manual

1. **Build do projeto**

```bash
npm run build
# ou
pnpm build
```

2. **Faça upload da pasta `dist/`**

- Vá para [vercel.com](https://vercel.com)
- Clique em "New Project"
- Selecione "Other" e faça upload da pasta `dist/`

## 📁 Estrutura do Projeto

```
raphael-terapia-holistica/
├── client/                      # Código frontend
│   ├── public/                  # Assets estáticos
│   │   └── index.html          # HTML principal
│   └── src/
│       ├── pages/              # Páginas da aplicação
│       │   ├── Home.tsx        # Landing page principal
│       │   ├── Termos.tsx      # Termos de Uso
│       │   ├── Privacidade.tsx # Política de Privacidade
│       │   └── NotFound.tsx    # Página 404
│       ├── components/         # Componentes reutilizáveis
│       │   └── ui/            # Componentes shadcn/ui
│       ├── contexts/           # React contexts
│       ├── hooks/              # Custom hooks
│       ├── lib/                # Funções utilitárias
│       ├── App.tsx             # Componente raiz
│       ├── main.tsx            # Entry point
│       └── index.css           # Estilos globais e temas
├── package.json                # Dependências do projeto
├── tsconfig.json               # Configuração TypeScript
├── vite.config.ts              # Configuração Vite
├── tailwind.config.ts          # Configuração Tailwind CSS
├── postcss.config.js           # Configuração PostCSS
└── README.md                   # Este arquivo
```

## 🎨 Customização

### Cores

As cores principais estão definidas em `client/src/index.css`. Você pode customizá-las editando as variáveis CSS:

```css
:root {
  --primary: #a8d5ba;           /* Verde-menta para CTAs */
  --accent: #8fa3b8;            /* Azul-acinzentado */
  --secondary: #e8dcc8;         /* Bege quente */
  /* ... outras cores */
}
```

### Tipografia

As fontes estão configuradas em `client/index.html` (Google Fonts):

- **Display**: Poppins (headlines)
- **Body**: Inter (texto corpo)

### Conteúdo

Edite os textos em `client/src/pages/Home.tsx`. Todos os textos estão bem organizados e comentados.

### Link WhatsApp

O link do WhatsApp está definido como constante no topo de `Home.tsx`:

```typescript
const WHATSAPP_LINK = "https://wa.link/0zku4o";
```

Substitua pelo seu próprio link.

### Imagens

As imagens estão referenciadas via URLs CDN. Para usar imagens locais:

1. Adicione as imagens em `client/public/images/`
2. Atualize as referências em `Home.tsx` para caminhos relativos (ex: `/images/hero.png`)

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build            # Cria build otimizado para produção
npm run preview          # Visualiza o build localmente

# Qualidade de código
npm run check            # Verifica tipos TypeScript
npm run format           # Formata código com Prettier
```

## 📱 Responsividade

O projeto é mobile-first e totalmente responsivo:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Teste em diferentes tamanhos de tela usando as ferramentas de desenvolvimento do navegador.

## ♿ Acessibilidade

O projeto segue as melhores práticas de acessibilidade:

- Contraste de cores adequado
- Navegação por teclado funcional
- Semântica HTML correta
- ARIA labels onde necessário

## 🔒 Segurança

- Nenhuma chave de API exposta
- Sem dependências de terceiros desnecessárias
- HTTPS recomendado em produção
- Política de Privacidade e Termos de Uso inclusos

## 📊 SEO

O projeto inclui:

- Meta tags otimizadas em `client/index.html`
- Estrutura semântica HTML
- Sitemap pronto para ser criado
- Open Graph tags para compartilhamento social

Para melhorar SEO:

1. Crie um arquivo `public/sitemap.xml`
2. Adicione um arquivo `public/robots.txt`
3. Configure Google Search Console
4. Implemente schema.org markup se necessário

## 🐛 Troubleshooting

### Porta 5173 já em uso

```bash
npm run dev -- --port 3000
```

### Erro de build

```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Imagens não carregam

- Verifique se as URLs CDN estão acessíveis
- Ou mude para imagens locais em `client/public/`

## 📞 Contato e Suporte

Para dúvidas sobre a landing page ou customizações:

- WhatsApp: https://wa.link/0zku4o
- Email: [seu-email@exemplo.com]

## 📄 Licença

Este projeto é fornecido como está. Sinta-se livre para usar, modificar e distribuir conforme necessário.

## 🙏 Créditos

- **Design**: Minimalismo Acolhedor com foco em conversão
- **Copywriting**: Emocional e ético, focado em acolhimento
- **Framework**: React 19 + Vite + Tailwind CSS 4
- **Componentes**: shadcn/ui + Lucide React

---

**Última atualização**: Fevereiro de 2026

Desenvolvido com ❤️ para terapia holística online.
