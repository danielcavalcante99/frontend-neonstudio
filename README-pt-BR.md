# Introdução
1. Projeto
2. Tech Stack
   - Core
   - Ambiente
3. Estrutura do Projeto
   - Princípios adotados
4. Screenshot Web Desktop
5. Screenshot Web Mobile

---

## 1. Projeto 💻

Este projeto é uma Landing Page de Alta Conversão para um aplicativo fictício chamado NeonMusic, focado no estudo musical. 
O design segue uma estética Premium Dark, utilizando cores neon (Ciano e Roxo) e o estilo Glassmorphism (efeito de vidro translúcido).
---

## 2. 🛠️ Tech Stack

Este projeto utiliza tecnologias modernas para garantir performance, escalabilidade e uma ótima experiência de desenvolvimento.

### 🚀 Core
- ⚡ **Vite** `7.2.4` — Build tool e dev server ultra-rápido
- ⚛️ **React** `19.2.5` — Biblioteca para construção da interface
- 🔷 **TypeScript** `5.9.3` — Tipagem estática e segurança no código

### 🧰 Ambiente
- 🟢 **Node.js** `24.10.1` — Ambiente de execução JavaScript

---
## 3. 📁 Estrutura do Projeto
~~~
src/
├── app/
│   ├── App.tsx
│   └── providers.tsx
│
├── assets/
│   ├── icons/
│   └── screenshots/
│
├── components/
│   ├── ui/
│   │   ├── FeatureCard.tsx
│   │   ├── FaqItem.tsx
│   │   ├── FooterLink.tsx
│   │   └── SocialIcon.tsx
│   │
│   ├── layout/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── LanguageDropdown.tsx
│   │   └── Footer/
│   │       └── Footer.tsx
│
├── features/
│   ├── landing/
│   │   ├── page/
│   │   │   ├── LandingPage.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── FaqSection.tsx
│   │   ├── i18n/
│   │   │   ├── translations-landing.types.ts
│   │   │   └── translations-landing.ts
│   │   └── hooks/
│   │       └── useAutoScroll.ts
│
├── i18n/
│   ├── LanguageContext.tsx
│   ├── translation-types.ts
│   ├── translations.ts
│   └── useLanguage.ts
│
├── styles/
│   └── globals.css
│
├── types/
│   └── language.types.ts
│
├── utils/
│   └── browserLanguage.ts
│
└── main.tsx

~~~
Esta estrutura segue uma abordagem **feature-based**, focada em escalabilidade, reutilização e separação clara de responsabilidades.

### **app/**
Camada de inicialização da aplicação.
- Responsável pelo bootstrap do React
- Centraliza providers globais (Context API, tema, i18n, etc.)
- Não contém regras de negócio nem UI específica

---

### **assets/**
Arquivos estáticos do projeto.
- **icons/** → Ícones SVG utilizados nos componentes
- **screenshots/** → Imagens de preview (landing, features, dashboard)

---

### **components/**
Componentes reutilizáveis e agnósticos de domínio.
- **ui/** → Componentes pequenos focados em UI (cards, itens, ícones, links)
- **layout/** → Estrutura global da aplicação (Navbar, Footer), que não conhece páginas nem features

---

### **features/**
Páginas e regras de negócio isoladas por domínio.  
Cada feature representa uma parte real do produto.
- **hooks/** → Hooks com lógica reutilizável da feature (efeitos, timers, scroll, interações)
- **i18n/** → Internacionalização isolada, com textos compartilhados apenas dentro da própria feature
- **page/** → Componente de página da feature, responsável por compor e orquestrar as sections, sem conter lógica de negócio nem detalhes de layout fino
- **sections/** → Seções visuais da página; cada seção representa um bloco independente da interface, contendo UI, comportamento e conteúdo específicos da feature, facilitando manutenção, reordenação e reutilização interna

---

### **i18n/**
Internacionalização global da aplicação.
- Gerencia idioma, contexto e traduções compartilhadas entre features

---

### **styles/**
Estilos globais da aplicação.
- Reset de CSS, variáveis globais e estilos base

---

### **types/**
Tipos e contratos compartilhados.
- Tipagens reutilizadas entre múltiplas camadas do projeto

---

### **utils/**
Funções utilitárias puras.
- Helpers reutilizáveis sem dependência de React

---

### **main.tsx**
Ponto de entrada da aplicação.
- Cria o root do React
- Renderiza o `App`
- Importa os estilos globais

---

### 🧠 Princípios adotados
- Componentes não conhecem regras de negócio
- Features são isoladas e independentes
- Hooks encapsulam comportamento, não UI
- Internacionalização é modular e desacoplada

✅ Escalável

Dá para adicionar novas páginas, novos idiomas ou novas features sem tocar no resto.
Fácil de transformar isso num monorepo futuramente.

✅ Código mais legível

Cada arquivo fica pequeno. Fica claro onde mexer quando algo quebra.

---

## 4. Screenshot Web Desktop
<img src="src/assets/screenshots/screenshot-web.png" width="800"/>

## 5. Screenshot Web Mobile

| <img src="src/assets/screenshots/hero-web-mobile.png" width="378"/> | <img src="src/assets/screenshots/features-web-mobile.png" /> |
|----------------------------------------------|---------------------------------------|
| <img src="src/assets/screenshots/testimonials-web-mobile.png" />    | <img src="src/assets/screenshots/pricing-web-mobile.png" />  |

