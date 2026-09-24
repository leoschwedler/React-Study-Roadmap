# Aula 03 — JSX

## Objetivo

Entender o que é JSX, por que ele é usado em aplicações React e quais são as principais diferenças entre JSX e HTML.

Fonte principal:
https://react.dev/learn/writing-markup-with-jsx

## 1. O que é JSX?

JSX é uma **extensão de sintaxe do JavaScript** que permite escrever uma marcação parecida com HTML dentro de arquivos JavaScript/TypeScript.

```tsx
function App() {
  return (
    <div>
      <h1>Olá!</h1>
      <p>Estou aprendendo React.</p>
    </div>
  );
}
```

JSX e React são conceitos diferentes:

- **JSX** é uma extensão de sintaxe.
- **React** é uma biblioteca JavaScript.

Eles são frequentemente usados juntos.

## 2. Por que React usa JSX?

Em React, a lógica de renderização e a marcação da interface normalmente ficam próximas dentro dos componentes.

```tsx
function User() {
  const isOnline = true;

  return (
    <div>
      <h2>Leonardo</h2>
      <p>Usuário online</p>
    </div>
  );
}
```

Isso ajuda a manter relacionada a lógica que controla a interface e a própria interface.

# Regras do JSX

## 3. Um único elemento raiz

Um componente não pode retornar várias tags JSX independentes:

```tsx
function App() {
  return (
    <h1>Título</h1>
    <p>Texto</p>
  );
}
```

É necessário agrupá-las:

```tsx
function App() {
  return (
    <div>
      <h1>Título</h1>
      <p>Texto</p>
    </div>
  );
}
```

Ou usar um Fragment:

```tsx
function App() {
  return (
    <>
      <h1>Título</h1>
      <p>Texto</p>
    </>
  );
}
```

O Fragment agrupa os elementos sem adicionar uma tag correspondente na árvore HTML.

## 4. Todas as tags precisam ser fechadas

Em JSX, as tags precisam ser explicitamente fechadas.

```tsx
<img src="foto.jpg" />
```

```tsx
<br />
```

Elementos com conteúdo usam fechamento normal:

```tsx
<p>Olá</p>
```

## 5. Atributos no JSX

Alguns atributos de HTML mudam de nome ou de sintaxe em JSX.

HTML:

```html
<div class="container">
```

JSX:

```tsx
<div className="container">
```

Outro exemplo:

HTML:

```html
<svg stroke-width="2">
```

JSX:

```tsx
<svg strokeWidth="2">
```

Muitos atributos seguem `camelCase`.

### Exceção

Atributos `aria-*` e `data-*` continuam usando hífen:

```tsx
<div data-id="10"></div>
```

```tsx
<button aria-label="Fechar"></button>
```

## 6. JSX não é HTML

Apesar de parecer HTML, JSX possui regras próprias.

Por exemplo:

```tsx
<img />
```

é JSX válido, e:

```tsx
className="card"
```

é usado no lugar de `class`.

## 7. Fragment

Quando vários elementos precisam ser retornados sem uma `div` extra:

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

`<>...</>` é a forma curta de escrever um Fragment.

## 8. JSX dentro do JavaScript

JSX faz parte do código JavaScript do componente.

```tsx
const title = "Meu perfil";

function Profile() {
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
}
```

O uso de `{}` para inserir JavaScript dentro do JSX será aprofundado na próxima aula.

# O que você precisa dominar

Ao terminar esta aula, você deve conseguir:

- explicar o que é JSX;
- diferenciar JSX de React;
- escrever JSX dentro de componentes;
- entender a regra do elemento raiz;
- usar Fragment;
- fechar corretamente as tags;
- reconhecer diferenças entre atributos HTML e JSX;
- usar `className`;
- reconhecer `camelCase` em atributos.

# Resumo

As três regras principais desta aula:

```text
1. Um único elemento raiz
2. Fechar todas as tags
3. Usar a sintaxe de atributos do JSX
```

Exemplo:

```tsx
function App() {
  return (
    <>
      <h1>Olá</h1>
      <img src="/imagem.png" alt="Exemplo" />
      <button className="button">Clique</button>
    </>
  );
}
```

A próxima aula será **JavaScript no JSX com chaves `{}`**.
