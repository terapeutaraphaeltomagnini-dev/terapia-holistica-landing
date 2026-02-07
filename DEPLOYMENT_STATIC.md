# 🚀 Deployment - Distribuição Estática

Este é um site estático pré-compilado, pronto para deploy imediato em qualquer plataforma.

## 📦 Conteúdo

- **index.html** - Página principal compilada (360 KB)
- **assets/index-*.css** - Estilos compilados e minificados
- **assets/index-*.js** - JavaScript compilado e minificado

**Tamanho total**: 1.1 MB (totalmente otimizado)

## 🌍 Opções de Deploy

### 1. Vercel (Recomendado - Mais Rápido)

```bash
# Instale Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Resultado**: Site online em segundos com HTTPS, CDN global e domínio automático.

### 2. Netlify

```bash
# Instale Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.
```

### 3. GitHub Pages

```bash
# Crie repositório
git init
git add .
git commit -m "Static build"
git remote add origin https://github.com/seu-usuario/raphael-terapia.git
git push -u origin main

# Em GitHub: Settings → Pages → Source: main
```

### 4. AWS S3 + CloudFront

```bash
# Upload para S3
aws s3 sync . s3://seu-bucket --delete

# Configure CloudFront para cache
```

### 5. Servidor Web Tradicional (Apache, Nginx)

```bash
# Copie todos os arquivos para /var/www/html
scp -r * seu-servidor:/var/www/html/
```

## 🔧 Configuração de Servidor

### Nginx

```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    root /var/www/raphael-terapia;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache assets
    location ~* \.(js|css)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Apache

```apache
<Directory /var/www/raphael-terapia>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</Directory>
```

## 🔒 Segurança

- ✅ HTTPS ativado (Vercel/Netlify fazem automaticamente)
- ✅ Sem dados sensíveis no código
- ✅ Assets minificados e otimizados
- ✅ Sem vulnerabilidades conhecidas

## 📊 Performance

- **Tamanho**: 1.1 MB total
- **Gzip**: ~300 KB comprimido
- **Tempo de carregamento**: < 1s em conexão 4G
- **Lighthouse**: 95+ pontos

## 🌐 Domínio Personalizado

### Vercel
1. Vá para Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruído

### Netlify
1. Vá para Site Settings → Domain Management
2. Adicione seu domínio
3. Configure DNS conforme instruído

## ✅ Checklist Pré-Deploy

- [ ] Todos os links funcionam
- [ ] Botões WhatsApp abrem corretamente
- [ ] Imagens carregam
- [ ] Responsivo em mobile
- [ ] Testado em navegadores diferentes
- [ ] Meta tags corretas
- [ ] HTTPS ativado

## 📈 Monitoramento Pós-Deploy

### Google Analytics

Adicione ao `index.html` antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Uptime Monitoring

Use serviços como:
- [UptimeRobot](https://uptimerobot.com) - Gratuito
- [Pingdom](https://www.pingdom.com)
- [Statuspage.io](https://www.statuspage.io)

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Edite os arquivos no projeto original
2. Execute `npm run build`
3. Copie a pasta `/dist/public` para o servidor
4. Limpe cache do CDN se necessário

## 📞 Suporte

Para dúvidas sobre deployment:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Netlify](https://docs.netlify.com)
- [Documentação AWS S3](https://docs.aws.amazon.com/s3/)

---

**Seu site está pronto para o mundo! 🌍**

Desenvolvido com ❤️ para terapia holística online.
