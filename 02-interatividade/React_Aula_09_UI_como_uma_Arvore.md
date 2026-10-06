# Aula 09 — UI como uma Árvore

## Objetivo

Entender como o React representa os relacionamentos entre componentes usando estruturas em árvore e por que esse modelo ajuda a compreender a hierarquia da aplicação, diferentes renders e as dependências entre módulos.

Referência principal:
https://react.dev/learn/understanding-your-ui-as-a-tree

---

## 1. O que é uma árvore?

Uma árvore representa relacionamentos entre elementos.

```text
App
├── Header
├── Main
│   ├── ProductList
│   └── Sidebar
└── Footer
```

Aqui, `App` é o nó principal e os demais são seus descendentes.

O React usa esse modelo para representar os relacionamentos da interface.

---

## 2. Render Tree

Quando componentes são aninhados, existe uma relação entre componentes pai e filho.

```tsx
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
```

Podemos representar isso como:

```text
App
├── Header
├── Main
└── Footer
```

Essa estrutura é chamada de **Render Tree**.

A Render Tree representa a relação entre os componentes que foram renderizados em uma determinada renderização.

---

## 3. Pai e filho

Quando um componente renderiza outro, temos uma relação de pai e filho.

```tsx
function App() {
  return <Profile />;
}

function Profile() {
  return <UserInfo />;
}
```

Árvore:

```text
App
└── Profile
    └── UserInfo
```

`App` é pai de `Profile`, e `Profile` é pai de `UserInfo`.

---

## 4. A Render Tree representa componentes

A Render Tree do React é composta pelos **componentes React**.

Por exemplo:

```tsx
function Profile() {
  return (
    <div>
      <h1>Leonardo</h1>
      <p>Programador</p>
    </div>
  );
}
```

O conceito de Render Tree está interessado no componente `Profile` e em sua relação com outros componentes, não em todas as tags HTML que ele retorna.

Isso ocorre porque o React é independente da plataforma de renderização.

---

## 5. A árvore pode mudar

Uma Render Tree representa uma renderização específica.

Com renderização condicional, diferentes renders podem gerar árvores diferentes.

```tsx
function App({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Dashboard />;
  }

  return <Login />;
}
```

Com `isLoggedIn = true`:

```text
App
└── Dashboard
```

Com `isLoggedIn = false`:

```text
App
└── Login
```

Portanto, a árvore pode mudar de acordo com os dados usados na renderização.

---

## 6. Top-level components

Os componentes mais próximos da raiz são chamados de **top-level components**.

Exemplo:

```text
App
├── Header
│   └── Logo
├── Main
│   ├── ProductList
│   └── ProductCard
└── Footer
```

`App`, `Header` e `Main` estão mais próximos da raiz.

Identificar esses componentes ajuda a entender o fluxo da aplicação e possíveis impactos de renderização.

---

## 7. Leaf components

Os componentes próximos da parte inferior da árvore são chamados de **leaf components**.

São componentes que não possuem componentes React filhos.

Exemplo:

```text
App
└── Main
    ├── ProductList
    ├── ProductCard
    └── Button
```

Componentes folha ficam na parte inferior da composição.

---

## 8. Por que pensar em uma Render Tree?

Esse modelo ajuda a entender:

- quais componentes são pais e filhos;
- como os componentes estão organizados;
- como diferentes renders podem produzir diferentes estruturas;
- quais componentes estão próximos da raiz;
- quais componentes estão nas folhas da árvore.

Esse entendimento será útil para conceitos futuros como fluxo de dados, gerenciamento de estado e performance.

---

## 9. Module Dependency Tree

Existe outra árvore importante: a **Module Dependency Tree**.

Quando dividimos uma aplicação em arquivos e usamos `import`, criamos relacionamentos entre módulos.

Exemplo:

```tsx
// App.tsx
import Header from "./Header";
import ProductList from "./ProductList";
```

Podemos representar:

```text
App.tsx
├── Header.tsx
└── ProductList.tsx
```

Cada nó representa um módulo e cada ligação representa uma dependência criada por um `import`.

---

## 10. Render Tree x Dependency Tree

São conceitos diferentes.

### Render Tree

Representa:

```text
componentes
```

e responde:

> Quem renderiza quem?

Exemplo:

```text
App
└── ProductPage
    └── ProductCard
```

### Dependency Tree

Representa:

```text
módulos
```

e responde:

> Qual módulo importa qual módulo?

Exemplo:

```text
App.tsx
└── ProductPage.tsx
    └── ProductCard.tsx
```

---

## 11. As duas árvores não precisam ser iguais

Imagine:

```tsx
import ProductList from "./ProductList";
import { products } from "./products";
```

`ProductList` é um componente e pode aparecer na Render Tree.

`products.ts` é um módulo que fornece dados. Ele pode aparecer na Dependency Tree, mas não é necessariamente um componente da Render Tree.

Portanto:

```text
Render Tree
↓
componentes renderizados
```

```text
Dependency Tree
↓
módulos necessários
```

---

## 12. Por que a Dependency Tree importa?

Ferramentas de build usam as dependências dos módulos para descobrir quais partes do código precisam entrar no bundle da aplicação.

Conforme a aplicação cresce, o número de módulos e dependências pode crescer também.

Entender a Dependency Tree ajuda a investigar problemas relacionados a:

- tamanho do bundle;
- código que precisa ser enviado ao cliente;
- tempo necessário para baixar e executar JavaScript.

---

## 13. Exemplo completo

```tsx
function App() {
  return <ProductPage />;
}

function ProductPage() {
  return <ProductList />;
}

function ProductList() {
  return <ProductCard />;
}
```

Render Tree:

```text
App
└── ProductPage
    └── ProductList
        └── ProductCard
```

Se esses componentes estiverem em arquivos separados e cada módulo importar o próximo:

```text
App.tsx
└── ProductPage.tsx
    └── ProductList.tsx
        └── ProductCard.tsx
```

as árvores podem parecer semelhantes.

Mas lembre-se: uma representa **componentes renderizados** e a outra representa **dependências entre módulos**.

---

## 14. O que você precisa saber

1. React usa estruturas em árvore para representar relacionamentos.
2. A **Render Tree** representa a relação entre componentes renderizados.
3. O componente raiz fica no topo da Render Tree.
4. Componentes pais podem renderizar componentes filhos.
5. Renderização condicional pode produzir árvores diferentes em diferentes renders.
6. **Top-level components** ficam próximos da raiz.
7. **Leaf components** ficam na parte inferior e não possuem componentes React filhos.
8. A **Dependency Tree** representa relações entre módulos por meio dos `import`s.
9. Render Tree e Dependency Tree representam relações diferentes.
10. Essas árvores são modelos mentais úteis para entender a estrutura da aplicação e, futuramente, performance e tamanho do bundle.

---

## Resumo visual

```text
                 REACT APP
                     │
          ┌──────────┴──────────┐
          │                     │
     Render Tree          Dependency Tree
          │                     │
      Componentes             Módulos
          │                     │
   quem renderiza quem     quem importa quem
```

## Referência oficial

React — Understanding Your UI as a Tree

https://react.dev/learn/understanding-your-ui-as-a-tree
