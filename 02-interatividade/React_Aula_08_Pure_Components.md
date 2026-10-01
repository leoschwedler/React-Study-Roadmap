# Aula 08 — Pure Components

## Objetivo

Entender o que significa um componente ser **puro** no React e por que manter a renderização pura torna os componentes mais previsíveis, fáceis de depurar e mais fáceis de otimizar.

Material baseado na documentação atual do React:
- https://react.dev/learn/keeping-components-pure
- https://react.dev/reference/react/rules
- https://react.dev/reference/react/PureComponent
- https://react.dev/reference/react/memo

## 1. O que é um componente puro?

Um componente puro se comporta como uma função pura:

**Mesmas entradas → mesma saída.**

As entradas de um componente incluem principalmente:
- `props`
- `state`
- `context`

Se essas entradas forem iguais, a renderização deve produzir o mesmo JSX.

```tsx
function Greeting({ name }) {
  return <h1>Olá, {name}</h1>;
}
```

Com:

```tsx
<Greeting name="Leo" />
```

a renderização deve produzir a mesma saída para essa entrada.

## 2. O que não fazer durante a renderização

A renderização não deve produzir efeitos colaterais.

Evite alterar um valor que já existia:

```tsx
function ProductList({ products }) {
  products.push({
    id: 10,
    name: "Novo produto",
  });

  return <div>...</div>;
}
```

Também evite gerar resultados diferentes com as mesmas entradas:

```tsx
function RandomNumber() {
  const number = Math.random();

  return <p>{number}</p>;
}
```

O React recomenda manter a renderização pura porque uma renderização pode ser executada mais de uma vez.

## 3. Não altere props diretamente

Props devem ser tratadas como imutáveis.

Evite:

```tsx
function Product({ product }) {
  product.name = "Outro nome";

  return <p>{product.name}</p>;
}
```

Prefira criar um novo valor:

```tsx
function Product({ product }) {
  const productName = product.name.toUpperCase();

  return <p>{productName}</p>;
}
```

## 4. Não altere valores externos durante o render

Evite modificar variáveis criadas fora do componente:

```tsx
let total = 0;

function Product() {
  total++;

  return <p>Total: {total}</p>;
}
```

Cada renderização altera o valor externo, deixando o resultado dependente das renderizações anteriores.

## 5. Onde colocar efeitos colaterais?

Quando uma ação depende de uma interação do usuário, normalmente ela deve acontecer em um event handler.

```tsx
function Button() {
  function handleClick() {
    console.log("Botão clicado");
  }

  return <button onClick={handleClick}>Clique</button>;
}
```

O `console.log` acontece quando o usuário interage, não durante a renderização.

Outros efeitos que realmente precisam ocorrer fora do render podem usar mecanismos apropriados do React, como Effects.

## 6. Pureza não significa que você não pode calcular

Cálculos durante a renderização são normais:

```tsx
function Price({ price, quantity }) {
  const total = price * quantity;

  return <p>Total: {total}</p>;
}
```

Para `price = 10` e `quantity = 3`, o resultado será sempre `30`.

O problema não é calcular. O problema é produzir efeitos colaterais ou modificar valores externos.

## 7. Renderização pura

Uma forma simples de pensar:

```text
props/state/context
        ↓
      cálculo
        ↓
       JSX
```

O componente recebe dados, calcula o que precisa e retorna a interface.

Evite:

```text
props/state/context
        ↓
modifica algo externo
        ↓
      cálculo
        ↓
       JSX
```

## 8. Componente puro x `PureComponent`

Existe uma diferença importante.

### Componente puro

É um **conceito** de React.

Um componente funcional pode ser puro:

```tsx
function UserCard({ name }) {
  return <h2>{name}</h2>;
}
```

### `PureComponent`

`PureComponent` é uma API de componentes de **classe**:

```tsx
import { PureComponent } from "react";

class Greeting extends PureComponent {
  render() {
    return <h1>Olá, {this.props.name}</h1>;
  }
}
```

Ele pode evitar algumas re-renderizações quando props e state permanecem iguais.

A documentação atual recomenda componentes funcionais para código novo, então `PureComponent` não é algo que você precisa usar em código novo.

## 9. E em componentes funcionais?

Para componentes funcionais existe `memo`:

```tsx
import { memo } from "react";

const Greeting = memo(function Greeting({ name }) {
  return <h1>Olá, {name}</h1>;
});
```

`memo` pode permitir que o React pule uma renderização quando as props não mudaram.

Mas `memo` é uma **otimização**. Ele não é o que torna um componente puro.

## 10. Pureza x `memo`

Pense assim:

```text
Pureza
↓
Regra de como o componente deve funcionar

memo
↓
Otimização para evitar algumas re-renderizações
```

Primeiro mantenha a renderização pura. Depois, quando existir uma necessidade real de otimização, considere `memo`.

## 11. Exemplo completo

### Puro

```tsx
function ProductCard({ name, price }) {
  const formattedPrice = `R$ ${price.toFixed(2)}`;

  return (
    <article>
      <h2>{name}</h2>
      <p>{formattedPrice}</p>
    </article>
  );
}
```

### Impuro

```tsx
let renderCount = 0;

function ProductCard({ name }) {
  renderCount++;

  return <h2>{name}</h2>;
}
```

No segundo caso, o componente altera um valor externo durante o render.

## 12. Regra mental

Quando escrever um componente, pense:

> **Se o React executar essa função novamente com as mesmas entradas, ela deve produzir a mesma saída sem causar efeitos colaterais.**

## 13. O que você precisa saber desta aula

Para o seu nível atual, foque nestes pontos:

1. Componente puro recebe entradas e produz uma saída previsível.
2. Mesmas props/state/context devem produzir o mesmo JSX.
3. Não mutar props.
4. Não alterar objetos ou variáveis externos durante o render.
5. Evitar efeitos colaterais dentro da renderização.
6. `PureComponent` é relacionado a componentes de classe e não é recomendado para código novo.
7. `memo` é a ferramenta de otimização relacionada a componentes funcionais.
8. `memo` não substitui uma renderização pura.

## Referências

- React — Keeping Components Pure
  https://react.dev/learn/keeping-components-pure

- React — Rules of React
  https://react.dev/reference/react/rules

- React — PureComponent
  https://react.dev/reference/react/PureComponent

- React — memo
  https://react.dev/reference/react/memo
