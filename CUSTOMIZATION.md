# 🎨 Guia de Customização

Instruções detalhadas para personalizar a landing page conforme suas necessidades.

## 📋 Índice

1. [Conteúdo e Textos](#conteúdo-e-textos)
2. [Cores e Design](#cores-e-design)
3. [Imagens e Mídia](#imagens-e-mídia)
4. [Links e CTAs](#links-e-ctas)
5. [Estrutura e Páginas](#estrutura-e-páginas)
6. [SEO e Meta Tags](#seo-e-meta-tags)

---

## 📝 Conteúdo e Textos

### Editar Headline Principal

Arquivo: `client/src/pages/Home.tsx`

```typescript
<h1 className="text-4xl md:text-5xl font-bold leading-tight">
  Você não precisa carregar isso sozinho(a).
</h1>
```

Substitua o texto mantendo a estrutura HTML.

### Editar Subheadline

```typescript
<p className="text-xl text-accent font-semibold">
  Aqui você é ouvido(a).
</p>
```

### Editar Seção "Sobre"

Procure por:

```typescript
<p className="text-lg text-foreground leading-relaxed mb-6">
  Raphael é terapeuta holístico...
</p>
```

Substitua o texto completo.

### Editar Abordagens Terapêuticas

Procure pelo array:

```typescript
{[
  {
    title: "Reiki",
    description: "Canalização de energia...",
  },
  // ... outras abordagens
].map((item, idx) => (
```

Adicione, remova ou edite itens conforme necessário.

### Editar Formações

Procure por "Formações Principais" e "Especializações":

```typescript
<ul className="space-y-2 text-sm text-muted-foreground">
  <li>✓ Reiki Master (Linhas Mikao Usui e Tibetano)</li>
  <li>✓ Practitioner em PNL</li>
  {/* Adicione mais itens aqui */}
</ul>
```

### Editar Termos de Uso

Arquivo: `client/src/pages/Termos.tsx`

Edite as seções conforme necessário. Mantenha a estrutura HTML.

### Editar Política de Privacidade

Arquivo: `client/src/pages/Privacidade.tsx`

Edite as seções conforme necessário.

---

## 🎨 Cores e Design

### Paleta de Cores

Arquivo: `client/src/index.css`

```css
:root {
  /* Cores principais */
  --primary: #a8d5ba;           /* Verde-menta (CTAs) */
  --accent: #8fa3b8;            /* Azul-acinzentado (destaque) */
  --secondary: #e8dcc8;         /* Bege quente (fundo) */
  
  /* Cores de texto */
  --foreground: #3a3a3a;        /* Texto principal */
  --muted-foreground: #7a7a7a;  /* Texto secundário */
  
  /* Cores de fundo */
  --background: #faf9f7;        /* Fundo principal */
  --card: #ffffff;              /* Fundo de cards */
  
  /* Cores de borda */
  --border: #e0d5c7;            /* Bordas */
}
```

### Mudar Cor Principal (CTAs)

Para mudar a cor dos botões:

```css
--primary: #seu-verde;
--primary-foreground: #ffffff;  /* Cor do texto do botão */
```

### Mudar Cor de Destaque

Para mudar a cor de destaque (headlines, acentos):

```css
--accent: #seu-azul;
--accent-foreground: #ffffff;
```

### Mudar Cor de Fundo

Para mudar o fundo geral:

```css
--background: #sua-cor;
--foreground: #cor-do-texto;
```

### Modo Escuro

Para adicionar suporte a modo escuro, edite:

```css
.dark {
  --background: #1a1a1a;
  --foreground: #e8e8e8;
  /* ... outras cores para dark mode */
}
```

E em `client/src/App.tsx`, mude:

```typescript
<ThemeProvider
  defaultTheme="light"
  switchable  // Adicione esta linha para permitir toggle
>
```

---

## 🖼️ Imagens e Mídia

### Adicionar Imagem Local

1. Coloque a imagem em `client/public/images/`
2. Referencie em `Home.tsx`:

```typescript
<img
  src="/images/minha-imagem.png"
  alt="Descrição da imagem"
  className="w-full h-auto rounded-lg"
/>
```

### Substituir Imagem Hero

Arquivo: `client/src/pages/Home.tsx`

Procure por:

```typescript
<img
  src="https://private-us-east-1.manuscdn.com/..."
  alt="Espaço terapêutico acolhedor"
  className="w-full h-auto rounded-lg shadow-lg"
/>
```

Substitua a URL pela sua imagem.

### Adicionar Foto de Perfil

Na seção "Sobre Raphael Tomagnini":

```typescript
<div className="flex justify-center mb-8">
  <img
    src="/images/raphael-foto.jpg"
    alt="Raphael Tomagnini"
    className="w-32 h-32 rounded-full object-cover border-4 border-primary"
  />
</div>
```

### Otimizar Imagens

Para melhor performance:

1. Use [TinyPNG](https://tinypng.com) para comprimir
2. Use formatos modernos (WebP)
3. Redimensione para o tamanho necessário
4. Use lazy loading para imagens abaixo do fold

```typescript
<img
  src="/images/imagem.png"
  alt="Descrição"
  loading="lazy"
/>
```

### Adicionar Vídeo

Para adicionar um vídeo de apresentação:

```typescript
<div className="aspect-video">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Apresentação"
    className="w-full h-full rounded-lg"
    allowFullScreen
  />
</div>
```

---

## 🔗 Links e CTAs

### Mudar Link WhatsApp

Arquivo: `client/src/pages/Home.tsx`

Procure por:

```typescript
const WHATSAPP_LINK = "https://wa.link/0zku4o";
```

Substitua pelo seu link. Para gerar seu link WhatsApp:

1. Vá para [wa.link](https://wa.link)
2. Insira seu número (com código do país)
3. Copie o link gerado

### Mudar Texto dos Botões

Procure pelos botões:

```typescript
<Button className="btn-cta">
  Quero ser ouvido(a) agora
</Button>
```

Substitua o texto conforme desejar. Opções:
- "Falar com o terapeuta"
- "Agendar atendimento online"
- "Começar agora"
- "Entrar em contato"

### Adicionar Novo CTA

Para adicionar um novo botão:

```typescript
<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
  <Button className="btn-cta">
    Seu texto aqui
  </Button>
</a>
```

### Adicionar Link Externo

```typescript
<a
  href="https://seu-site.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary hover:underline"
>
  Texto do link
</a>
```

### Adicionar Link Interno

```typescript
<a href="/termos" className="text-primary hover:underline">
  Termos de Uso
</a>
```

---

## 🏗️ Estrutura e Páginas

### Adicionar Nova Seção

1. Crie um novo componente em `client/src/pages/Home.tsx`
2. Ou adicione uma nova seção `<section>`:

```typescript
<section className="section-spacing bg-secondary/20">
  <div className="container">
    <h2 className="text-3xl font-bold mb-8">Seu Título</h2>
    {/* Conteúdo */}
  </div>
</section>
```

### Adicionar Nova Página

1. Crie `client/src/pages/MinhaPage.tsx`:

```typescript
export default function MinhaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Conteúdo */}
    </div>
  );
}
```

2. Adicione a rota em `client/src/App.tsx`:

```typescript
import MinhaPage from "./pages/MinhaPage";

function Router() {
  return (
    <Switch>
      <Route path={"\\"} component={Home} />
      <Route path={"/minha-page"} component={MinhaPage} />
      {/* ... outras rotas */}
    </Switch>
  );
}
```

### Adicionar Navegação

Para adicionar um menu de navegação:

```typescript
<nav className="flex gap-6">
  <a href="/" className="hover:text-primary">Home</a>
  <a href="/sobre" className="hover:text-primary">Sobre</a>
  <a href="/contato" className="hover:text-primary">Contato</a>
</nav>
```

---

## 🔍 SEO e Meta Tags

### Editar Título da Página

Arquivo: `client/index.html`

```html
<title>Seu Novo Título | Terapia Holística Online</title>
```

### Editar Meta Description

```html
<meta name="description" content="Sua descrição aqui" />
```

Esta descrição aparece nos resultados do Google.

### Editar Open Graph (Redes Sociais)

```html
<meta property="og:title" content="Título para redes sociais" />
<meta property="og:description" content="Descrição para redes sociais" />
<meta property="og:image" content="https://seu-site.com/imagem.png" />
<meta property="og:url" content="https://seu-site.com" />
```

### Adicionar Keywords

```html
<meta name="keywords" content="terapia, holística, ansiedade, online" />
```

### Adicionar Favicon

1. Coloque seu favicon em `client/public/favicon.ico`
2. Ou adicione em `client/index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
```

### Criar Sitemap

Crie `client/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seu-dominio.com/</loc>
    <lastmod>2026-02-06</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://seu-dominio.com/termos</loc>
    <lastmod>2026-02-06</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seu-dominio.com/privacidade</loc>
    <lastmod>2026-02-06</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Criar Robots.txt

Crie `client/public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://seu-dominio.com/sitemap.xml
```

### Adicionar Google Analytics

Em `client/index.html`, adicione:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

Substitua `G-XXXXXXX` pelo seu ID do Google Analytics.

---

## 💡 Dicas de Customização

### Manter Consistência Visual

- Use a mesma paleta de cores em toda a página
- Mantenha a tipografia consistente
- Use espaçamento uniforme

### Melhorar Performance

- Comprima imagens antes de usar
- Use lazy loading para imagens
- Minimize CSS e JavaScript

### Melhorar Conversão

- Coloque CTAs em locais estratégicos
- Use linguagem clara e emocional
- Reduza fricção no processo de contato

### Acessibilidade

- Sempre adicione `alt` em imagens
- Use contraste adequado de cores
- Teste navegação por teclado

---

## 🆘 Problemas Comuns

### Mudança não aparece

1. Salve o arquivo
2. Verifique se o servidor está rodando
3. Recarregue a página (Ctrl+R)
4. Limpe cache (Ctrl+Shift+Delete)

### Estilos não funcionam

1. Verifique a classe Tailwind está correta
2. Verifique se está usando `className` (React) e não `class`
3. Recompile o CSS: `npm run dev`

### Imagem não carrega

1. Verifique o caminho da imagem
2. Verifique se arquivo existe
3. Verifique permissões do arquivo

---

**Pronto para customizar? Comece editando `client/src/pages/Home.tsx`! 🎨**
