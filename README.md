# Advocacia Dinoermeson Nascimento

Site institucional do escritório de advocacia Advocacia Dinoermeson Nascimento, sediado em Salvador/BA.

## 🚀 Tecnologias

- **React 19** - Framework frontend
- **Vite 5** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **Tailwind CSS 3** - Estilização
- **Express** - Servidor backend (desenvolvimento)
- **Wouter** - Roteamento client-side

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Apenas cliente (Vite)
npm run dev:client
```

## 🏗️ Build

```bash
# Build completo (cliente + servidor)
npm run build

# Build apenas do cliente (para Vercel)
npm run build:vercel
```

## 🌐 Deploy no Vercel

O projeto está configurado para deploy no Vercel:

1. Conecte seu repositório GitHub ao Vercel
2. O Vercel detectará automaticamente o `vercel.json`
3. O build será executado automaticamente usando `build:vercel`
4. Os arquivos estáticos serão servidos de `dist/public`

### Configuração do Vercel

- **Build Command**: `npm run build:vercel`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`
- **Node Version**: 20.x (recomendado)

## 📁 Estrutura do Projeto

```
├── client/              # Aplicação React
│   ├── public/         # Arquivos estáticos (logos, favicon)
│   └── src/
│       ├── components/ # Componentes React
│       ├── pages/      # Páginas
│       └── lib/        # Utilitários
├── server/             # Servidor Express (desenvolvimento)
├── script/             # Scripts de build
├── attached_assets/    # Imagens e assets
└── vercel.json         # Configuração do Vercel
```

## 🔧 Variáveis de Ambiente

Não são necessárias variáveis de ambiente para o deploy estático no Vercel.

## 📝 Notas

- O projeto usa Node.js 18+ (compatível com Node.js 20+)
- Para produção no Vercel, apenas o build do cliente é necessário
- O servidor Express é usado apenas em desenvolvimento

