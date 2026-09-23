# Aula 01 — Primeiro Componente React

## Objetivo

Entender o conceito central de **componente React** e ser capaz de criar, exportar e utilizar componentes funcionais.

Fonte principal: documentação oficial do React — **Your First Component**.

---

## 1. O que é um componente?

Um componente é uma parte reutilizável da interface.

No React, um componente é uma **função JavaScript** que retorna a interface que deve ser renderizada.

Exemplo:

```jsx
function Welcome() {
  return <h1>Olá, mundo!</h1>;
}
```

Aqui:

- `Welcome` é o componente.
- `function Welcome()` define o componente.
- O `return` define o que ele renderiza.
- `<h1>Olá, mundo!</h1>` é JSX.

---

## 2. Regra importante: letra maiúscula

O nome de um componente React deve começar com letra maiúscula.

```jsx
function Welcome() {
  return <h1>Olá!</h1>;
}
```

Ao utilizar:

```jsx
<Welcome />
```

o React entende `Welcome` como um componente.

Já elementos HTML são escritos em minúsculo:

```jsx
<h1>Olá!</h1>
<section>Conteúdo</section>
<button>Clique</button>
```

Essa diferença permite ao React distinguir componentes próprios de elementos HTML.

---

## 3. Um componente pode utilizar outro componente

Componentes podem ser combinados e aninhados.

```jsx
function Header() {
  return <header>Meu site</header>;
}

function App() {
  return (
    <main>
      <Header />
      <h1>Página inicial</h1>
    </main>
  );
}
```

Nesse exemplo:

- `App` é o componente pai.
- `Header` é um componente utilizado dentro de `App`.

Esse processo de combinar componentes é uma das bases da construção de interfaces React.

---

## 4. Reutilização

O mesmo componente pode ser utilizado várias vezes.

```jsx
function Button() {
  return <button>Clique aqui</button>;
}

function App() {
  return (
    <main>
      <Button />
      <Button />
      <Button />
    </main>
  );
}
```

Em vez de repetir toda a estrutura do botão, criamos o componente uma vez e reutilizamos.

---

## 5. Exportando um componente

Para utilizar um componente em outro arquivo, ele precisa ser exportado.

Uma forma:

```jsx
export default function Header() {
  return <header>Meu site</header>;
}
```

O `export default` é JavaScript padrão; não é uma funcionalidade exclusiva do React.

---

## 6. Organização

Componentes pequenos e relacionados podem permanecer no mesmo arquivo.

Quando um arquivo começa a ficar grande, os componentes podem ser separados em arquivos próprios e importados onde forem necessários.

Esse assunto será aprofundado na próxima aula.

---

## 7. Um detalhe importante sobre `return`

Quando o JSX ocupa várias linhas, normalmente usamos parênteses:

```jsx
function App() {
  return (
    <main>
      <h1>Olá</h1>
      <p>Bem-vindo!</p>
    </main>
  );
}
```

Isso evita problemas relacionados à forma como o JavaScript interpreta a quebra de linha depois do `return`.

---

## 8. Componentes no React

A documentação oficial apresenta três ideias fundamentais:

1. Componentes são funções JavaScript.
2. Seus nomes começam com letra maiúscula.
3. Eles retornam JSX para descrever a interface.

Componentes podem representar desde pequenas partes da interface até páginas inteiras.

---

## O que você precisa saber ao terminar esta aula

Você deve conseguir:

- explicar o que é um componente;
- criar um componente funcional;
- nomear corretamente um componente;
- retornar JSX;
- utilizar um componente dentro de outro;
- reutilizar um componente;
- exportar um componente.

---

## Prática

Nesta primeira aula, o objetivo não é decorar sintaxe.

Você deve praticar até conseguir olhar para uma interface e começar a pensar em **quais partes dela poderiam virar componentes reutilizáveis**.

Fonte:
https://react.dev/learn/your-first-component
