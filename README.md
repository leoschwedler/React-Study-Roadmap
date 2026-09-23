# React Study Roadmap

Repositório dedicado ao estudo de **React moderno**, utilizando como referência principal a **documentação oficial do React**.

O objetivo é evoluir dos fundamentos até a construção de aplicações React completas, organizadas, testáveis e preparadas para projetos reais.


---

## 🎯 Objetivo

O estudo será baseado em prática, com:

- teoria organizada em arquivos Markdown;
- exercícios progressivos;
- exercícios difíceis;
- desafios;
- projetos a cada 5 conteúdos;
- um projeto final maior;
- integração com ferramentas importantes do ecossistema React.

A prioridade será entender **como e por que o React funciona**, e não apenas decorar sintaxe.

---

# 📚 Metodologia

```text
Conteúdo
   ↓
Teoria em Markdown
   ↓
Exercícios
   ↓
Desafio
   ↓
Próximo conteúdo
   ↓
A cada 5 conteúdos
   ↓
🚀 Projeto
```

## Rotina semanal

```text
Segunda  → Conteúdo + exercícios
Terça    → Conteúdo + exercícios
Quarta   → Conteúdo + exercícios
Quinta   → Conteúdo + exercícios
Sexta    → Conteúdo + exercícios
Sábado   → 🚀 Projeto
```


O objetivo é desenvolver autonomia para resolver problemas.

---

# 🗺️ Roadmap

## Fase 1 — Fundamentos do React

### 01. Primeiro componente
- O que é componente
- Criar componentes
- Aninhar componentes
- Importação e exportação

### 02. JSX
- Sintaxe JSX
- JSX e JavaScript
- Expressões
- Estrutura de elementos

### 03. JavaScript no JSX
- Variáveis
- Funções
- Operações
- Expressões JavaScript

### 04. Props
- O que são props
- Passagem de dados
- Props primitivas
- Props como objetos
- Comunicação entre componentes

### 05. Children
- `children`
- Componentes contêiner
- Composição de conteúdo

## 🚀 Projeto 01 — React Fundamentals

Construir uma interface usando componentes, JSX, JavaScript, props, `children` e composição.

---

## Fase 2 — Renderização e Interatividade

### 06. Renderização condicional
- `if`
- ternário
- `&&`
- Estados visuais

### 07. Listas e Keys
- `.map()`
- listas dinâmicas
- `key`

### 08. Componentes puros
- Pureza
- Entradas e saídas
- Efeitos colaterais

### 09. UI como árvore
- Árvore de componentes
- Relações entre componentes
- Estrutura da interface

### 10. Eventos
- Eventos do usuário
- Event handlers
- Funções como eventos

## 🚀 Projeto 02 — Interface Interativa

Construir uma aplicação com renderização condicional, listas, keys, eventos e composição.

---

## Fase 3 — State e Renderização

### 11. Event Handlers
- Organização de handlers
- Funções para eventos

### 12. `useState`
- Criar state
- Atualizar state
- Estado local

### 13. Render e Commit
- Renderização
- Atualização da interface
- Render e commit

### 14. State como Snapshot
- Snapshot
- Renderizações
- Leitura do state

### 15. Atualizações de State
- Múltiplas atualizações
- Estado anterior
- Atualizações baseadas no state

## 🚀 Projeto 03 — Aplicação com State

Construir uma aplicação interativa utilizando eventos, `useState` e atualizações de state.

---

## Fase 4 — Objetos, Arrays e State

### 16. Objetos no State
- Imutabilidade
- Cópia de objetos
- Atualização de propriedades

### 17. Arrays no State
- Adicionar
- Remover
- Atualizar
- Transformar arrays

### 18. Estrutura do State
- Modelagem
- Evitar duplicação
- Estado mínimo

### 19. State derivado
- Valores derivados
- Evitar estado redundante

### 20. Compartilhamento de State
- Estado compartilhado
- Comunicação entre componentes

## 🚀 Projeto 04 — Gerenciador com Estado

Construir uma aplicação com objetos, arrays, estado derivado e múltiplos componentes compartilhando dados.

---

## Fase 5 — State Avançado

### 21. Lifting State Up
- Elevar estado
- Fonte única da verdade

### 22. Preservação e Reset
- Preservação do state
- Reset do state
- Identidade dos componentes

### 23. `useReducer`
- Reducer
- Actions
- Dispatch
- Estados complexos

### 24. Context
- Context
- Provider
- Consumo de contexto

### 25. Evitando Prop Drilling
- Prop drilling
- Context
- Organização de componentes

## 🚀 Projeto 05 — Aplicação com State Complexo

Aplicação usando lifting state up, `useReducer`, Context e estado compartilhado.

---

## Fase 6 — Refs, DOM e Effects

### 26. `useRef`
- Valores mutáveis
- Referências

### 27. Manipulação do DOM
- Referências de elementos
- Foco
- Integração com APIs do navegador

### 28. `useEffect`
- Effects
- Sincronização
- Sistemas externos

### 29. Lifecycle dos Effects
- Execução
- Atualização
- Cleanup

### 30. Dependências
- Dependency array
- Dependências corretas

## 🚀 Projeto 06 — Interface com Integração Externa

Construir uma aplicação utilizando refs, DOM e Effects.

---

## Fase 7 — Effects e APIs

### 31. Cleanup
- Cleanup
- Listeners
- Timers
- Cancelamento

### 32. Removendo Effects desnecessários
- Quando não usar `useEffect`
- Estado derivado
- Lógica durante render

### 33. Custom Hooks
- Criar hooks
- Reutilizar lógica
- Composição

### 34. Fetch / APIs REST
- Requisições
- Dados externos
- Integração

### 35. Loading
- Loading state
- Feedback visual
- Transições de estado

## 🚀 Projeto 07 — Aplicação Consumindo API

Construir uma aplicação com API real, loading, Effects, cleanup e custom hooks.

---

## Fase 8 — Erros, Formulários e Router

### 36. Error Handling
- Tratamento de erros
- Estados de erro
- Feedback ao usuário

### 37. Formulários
- Inputs
- Submit
- Leitura de valores
- Validação inicial

### 38. Componentes Controlados
- Inputs controlados
- State como fonte da verdade

### 39. React Router
- Rotas
- Navegação
- Parâmetros
- Páginas

### 40. Context / Zustand
- Estado global
- Context
- Zustand

## 🚀 Projeto 08 — Aplicação React Multipágina

Aplicação com Router, formulários, estado compartilhado e tratamento de erros.

---

## Fase 9 — Server State e Styling

### 41. TanStack Query
- Queries
- Mutations
- Cache
- Invalidação
- Server state

### 42. TypeScript + React
- Props
- State
- Eventos
- Componentes tipados

### 43. Tailwind CSS
- Classes utilitárias
- Estilização
- Componentes

### 44. CSS Modules
- Estilos isolados
- Organização

### 45. React Hook Form
- Formulários complexos
- Gerenciamento de inputs
- Performance

## 🚀 Projeto 09 — Aplicação Moderna com Dados

Aplicação usando TanStack Query, TypeScript, Tailwind, CSS Modules e React Hook Form.

---

## Fase 10 — Validação e Testes

### 46. Zod
- Schemas
- Validação
- Type-safety

### 47. Vitest
- Testes unitários
- Assertions
- Mocks

### 48. React Testing Library
- Testes de componentes
- Interações
- Comportamento da UI

### 49. Playwright
- Testes E2E
- Fluxos completos

### 50. Next.js — Introdução
- Framework React
- Estrutura inicial
- Conceitos básicos

## 🚀 Projeto 10 — Aplicação Testada

Aplicação com TypeScript, formulários, Zod, testes unitários, testes de componentes, E2E e introdução ao Next.js.

---

## Fase 11 — Next.js e App Router

### 51. App Router
- `app/`
- Páginas
- Layouts
- Rotas

### 52. Server Components
- Server Components
- Execução no servidor
- Composição

### 53. Client Components
- `"use client"`
- Interatividade
- Fronteira servidor/cliente

### 54. Layouts
- Layouts compartilhados
- Hierarquia

### 55. Routing
- Rotas dinâmicas
- Parâmetros
- Navegação

## 🚀 Projeto 11 — Aplicação Next.js

Aplicação utilizando App Router, Server Components, Client Components, layouts e rotas dinâmicas.

---

## Fase 12 — Next.js Avançado

### 56. Loading e Error UI
- Loading
- Error UI
- Boundaries

### 57. Data Fetching
- Busca de dados
- APIs
- Server-side fetching

### 58. Server Actions
- Ações no servidor
- Comunicação UI/servidor

### 59. SSR e SSG
- Renderização no servidor
- Geração estática

### 60. Streaming
- Streaming
- Carregamento progressivo

## 🚀 Projeto 12 — Next.js Full-Stack Frontend

Aplicação maior com loading, errors, data fetching, Server Actions, SSR, SSG e streaming.

---

## Fase 13 — React Avançado

### 61. Suspense
- Suspense
- Carregamento assíncrono

### 62. Error Boundaries
- Isolamento de erros
- Fallbacks

### 63. Portals
- Renderização fora da hierarquia visual
- Modais
- Overlays

### 64. Performance
- Renderizações desnecessárias
- Memoização
- Gargalos

### 65. React Compiler
- Conceito
- Otimizações

## 🚀 Projeto 13 — React Avançado

Aplicação usando Suspense, tratamento de erros, Portals e otimizações de performance.

---

## Fase 14 — Arquitetura

### 66. Arquitetura de React
- Organização de componentes
- Separação de responsabilidades
- Reutilização
- Composição
- Estrutura de projetos

### 67. Padrões Avançados
- Abstrações
- APIs internas
- Padrões de componentes
- Decisões arquiteturais

## 🏆 Projeto Final — React + Next.js

Projeto maior reunindo os principais conhecimentos da trilha:

- React
- TypeScript
- Next.js
- Routing
- State Management
- APIs
- TanStack Query
- Forms
- React Hook Form
- Zod
- Tailwind
- Testing
- Accessibility
- Performance
- Architecture

O projeto final será proposto como um problema real e você deverá decidir a arquitetura e a implementação.

---

# 📊 Projetos por bloco

```text
Conteúdos 01–05  → Projeto 01
Conteúdos 06–10  → Projeto 02
Conteúdos 11–15  → Projeto 03
Conteúdos 16–20  → Projeto 04
Conteúdos 21–25  → Projeto 05
Conteúdos 26–30  → Projeto 06
Conteúdos 31–35  → Projeto 07
Conteúdos 36–40  → Projeto 08
Conteúdos 41–45  → Projeto 09
Conteúdos 46–50  → Projeto 10
Conteúdos 51–55  → Projeto 11
Conteúdos 56–60  → Projeto 12
Conteúdos 61–65  → Projeto 13
Conteúdos 66–67  → Projeto Final
```

---

# 🚫 Fora do roteiro principal

Não vamos estudar agora todas as tecnologias existentes no ecossistema React.

Ficam fora do roteiro principal, salvo necessidade futura:

- Class Components
- Render Props
- Higher-Order Components
- MobX
- Jotai
- GraphQL
- Apollo
- Relay
- urql
- SWR
- Axios
- RTK Query
- Formik
- Chakra UI
- Material UI
- Panda CSS
- Radix UI
- React Aria
- Ark UI
- React Native
- bibliotecas de animação

O foco será dominar **React moderno** antes de ampliar o ecossistema.

---

# 📁 Organização sugerida

```text
react-study/
├── README.md
├── 01-fundamentos/
│   ├── aula-01.md
│   ├── aula-02.md
│   ├── aula-03.md
│   ├── aula-04.md
│   ├── aula-05.md
│   └── projeto-01/
├── 02-interatividade/
├── 03-state/
├── 04-state-e-objetos/
├── 05-state-avancado/
├── 06-refs-e-effects/
├── 07-hooks-e-apis/
├── 08-router-e-forms/
├── 09-tanstack-typescript/
├── 10-testes/
├── 11-next-app-router/
├── 12-next-avancado/
├── 13-react-avancado/
└── projeto-final/
```

---

# 📚 Fonte principal

A referência principal do estudo será a **documentação oficial do React**.

O roadmap enviado originalmente também foi utilizado como referência para identificar áreas importantes do ecossistema React, como Components, JSX, Hooks, Routers, State Management, APIs, Testing, Frameworks, Forms e Advanced Topics.

