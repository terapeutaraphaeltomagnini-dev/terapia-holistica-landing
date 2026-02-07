# 🚀 Quick Start - Comece em 5 Minutos

Guia rápido para colocar a landing page em funcionamento.

## ⚡ 5 Passos Rápidos

### 1️⃣ Extrair e Instalar (2 min)

```bash
unzip raphael-terapia-holistica-export-v2.zip
cd export-raphael-v2
npm install
```

### 2️⃣ Rodar Localmente (1 min)

```bash
npm run dev
```

Abra http://localhost:5173 no navegador.

### 3️⃣ Customizar (1 min)

Edite `client/src/pages/Home.tsx`:
- Mude o link WhatsApp na linha 13: `const WHATSAPP_LINK = "https://wa.link/seu-link";`
- Edite textos conforme necessário

### 4️⃣ Build para Produção (1 min)

```bash
npm run build
npm run preview
```

### 5️⃣ Deploy na Vercel (Instantâneo)

```bash
# Opção A: Via GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/raphael-terapia.git
git push -u origin main

# Depois vá para vercel.com e clique "New Project"

# Opção B: Via Vercel CLI
npm install -g vercel
vercel
```

---

## 📋 Checklist Pré-Deploy

- [ ] Link WhatsApp atualizado
- [ ] Textos revisados
- [ ] Imagens carregando
- [ ] Todos os links funcionando
- [ ] Testado em mobile

---

## 🆘 Problemas Comuns

**Porta 5173 em uso?**
```bash
npm run dev -- --port 3000
```

**npm install falha?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build falha?**
```bash
npm run check
```

---

## 📚 Documentação Completa

- **README.md** - Visão geral
- **SETUP.md** - Setup detalhado
- **DEPLOYMENT.md** - Deploy detalhado
- **CUSTOMIZATION.md** - Customizações
- **EXPORT_INSTRUCTIONS.md** - Instruções de exportação

---

**Pronto? Comece com `npm install && npm run dev`! 🎉**
