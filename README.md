# 🍥 Naruto App

Uma aplicação web interativa para explorar personagens do universo Naruto, utilizando uma galeria 3D imersiva e detalhes completos dos personagens.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6.svg)
![License](https://img.shields.io/badge/license-Private-red.svg)

## ✨ Funcionalidades

- 🎨 **Galeria 3D Interativa** - Navegue pelos personagens em uma esfera 3D rotativa
- 📱 **Responsivo** - Funciona perfeitamente em desktop e mobile
- 🔍 **Detalhes dos Personagens** - Modal completo com informações sobre cada personagem
- 🎭 **Animações Suaves** - Transições fluidas e efeitos visuais impressionantes
- 🌓 **Suporte a Tema Escuro/Claro** - Interface adaptável
- ⚡ **Performance Otimizada** - Cache de dados com React Query

## 🚀 Tecnologias Utilizadas

### Core
- **React 18.3.1** - Biblioteca UI
- **TypeScript 5.9.3** - Tipagem estática
- **Vite 7.2.4** - Build tool e dev server

### UI & Styling
- **Material-UI 7.1.0** - Componentes de interface
- **Tailwind CSS 4.1.17** - Utility-first CSS
- **Emotion** - CSS-in-JS
- **Framer Motion 12.23.24** - Animações avançadas
- **GSAP 3.13.0** - Animações de alta performance

### Roteamento & Estado
- **TanStack Router 1.139.7** - Roteamento type-safe
- **TanStack Query 5.90.11** - Gerenciamento de estado assíncrono

### Componentes Especiais
- **@use-gesture/react 10.3.1** - Gestos e interações
- **DomeGallery (React Bits)** - Galeria 3D customizada
- **Lucide React** - Ícones modernos

### Utilitários
- **Axios 1.13.2** - Cliente HTTP
- **clsx & tailwind-merge** - Manipulação de classes CSS
- **class-variance-authority** - Variantes de componentes

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd naruto-app
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build
npm run build        # Compila TypeScript e gera build de produção

# Linting
npm run lint         # Executa ESLint para verificar código

# Preview
npm run preview      # Preview da build de produção
```

## 🌐 API

Este projeto utiliza a **[Naruto BR API](https://naruto-br-api.site/)** - uma API pública brasileira com dados completos sobre personagens, vilas e jutsus do universo Naruto.

### Endpoints Utilizados

```typescript
// Listar todos os personagens
GET https://naruto-br-api.site/api/characters

// Detalhes de um personagem específico
GET https://naruto-br-api.site/api/characters/:id
```

### Estrutura de Dados

```typescript
type Characters = {
  id: number;
  name: string;
  rank: string;
  power: number;
  profile_image: string;
  summary: string;
  village: {
    id: number;
    name: string;
  };
};
```

## 📁 Estrutura do Projeto

```
naruto-app/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes reutilizáveis
│   │   │   ├── DomeGallery/ # Galeria 3D
│   │   │   └── fuzzy-text/  # Texto com efeito fuzzy
│   │   └── ...
│   ├── hooks/
│   │   └── useQueryGetCharacters.ts  # Hook React Query
│   ├── pages/
│   │   ├── ViewCharacters.tsx        # Página principal
│   │   └── PageNotFound.tsx          # Página 404
│   ├── types/
│   │   └── index.ts         # Tipos TypeScript
│   └── App.tsx
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Componentes Principais

### DomeGallery

Galeria 3D interativa para exibir personagens em uma esfera rotativa.

```tsx
<DomeGallery 
  images={galleryImages}
  fit={0.6}
  dragSensitivity={15}
  enlargeTransitionMs={400}
  openedImageWidth="500px"
  openedImageHeight="500px"
  grayscale={true}
  onImageClick={handleImageClick}
/>
```

### CharacterModal

Modal com detalhes completos do personagem selecionado.

```tsx
<CharacterModal 
  character={selectedCharacter} 
  onClose={() => setSelectedCharacter(null)} 
/>
```

## 🔐 Configuração do React Query

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
      cacheTime: 1000 * 60 * 10, // 10 minutos
    },
  },
});
```

## 🎯 Funcionalidades por Dispositivo

### Desktop
- ✅ Arrastar para rotacionar a galeria
- ✅ Click para visualizar detalhes
- ✅ Tecla ESC para fechar modal
- ✅ Efeitos de hover

### Mobile
- ✅ Gestos de arrastar/deslizar
- ✅ Toque para visualizar detalhes
- ✅ Interface otimizada para touch
- ✅ Transições suaves

## 🐛 Solução de Problemas

### Build falha com erro de TypeScript
```bash
# Limpe o cache e rebuilde
rm -rf node_modules dist
npm install
npm run build
```

### DomeGallery não renderiza
Verifique se:
1. O CSS foi importado: `import './DomeGallery.css'`
2. As imagens têm URLs válidas
3. O container tem largura/altura definidas

### React Query não faz cache
Verifique a configuração do `QueryClient` e as opções de `staleTime` e `cacheTime`.

## 📝 Customização

### Alterar cores do tema

```typescript
// No DomeGallery
<DomeGallery 
  overlayBlurColor="#0a0a1e"  // Cor do overlay
  grayscale={true}             // Imagens em escala de cinza
/>
```

### Ajustar sensibilidade de rotação

```typescript
<DomeGallery 
  dragSensitivity={15}      // Menor = mais sensível
  dragDampening={2}         // Inércia após soltar
/>
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e de uso pessoal.

## 🙏 Agradecimentos

- **[Naruto BR API](https://naruto-br-api.site/)** - Pelos dados dos personagens
- **[React Bits](https://react-bits.dev/)** - Pelo componente DomeGallery
- **Masashi Kishimoto** - Criador de Naruto

## 📧 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

---

Feito com ❤️ e ☕ por [Seu Nome]