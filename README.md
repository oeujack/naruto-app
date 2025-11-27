# 🍥 Shinobi Gallery

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
- ⚡ **Performance Otimizada** - Cache de dados com React Query

## 🚀 Tecnologias Utilizadas

### Core
- **React
- **TypeScript 
- **Vite
- **Axios

### UI & Styling
- **Material-UI 
- **Tailwind CSS
- **Framer Motion
- **GSAP

### Roteamento & Estado
- **TanStack Router
- **TanStack Query 

### Componentes Especiais
- **React Bits
- **Lucide React**

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

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
pnpm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
pnpm dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev ou pnpm dev         # Inicia o servidor de desenvolvimento

# Build
npm run build ou pnpm build       # Compila TypeScript e gera build de produção

# Preview
npm run preview ou pnpm build    # Preview da build de produção
```

## 🌐 API

Este projeto utiliza a **[Naruto BR API](https://naruto-br-api.site/)** - uma API pública brasileira com dados completos sobre personagens, vilas e jutsus do universo Naruto.

### Endpoints Utilizados

```typescript
// Listar todos os personagens
GET https://naruto-br-api.site/api/characters
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

Feito com ❤️ e ☕ por [Jackson]
