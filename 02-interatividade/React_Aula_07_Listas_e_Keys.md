# Aula 07 — Renderizando Listas e Keys

## Objetivo

Aprender a transformar arrays de dados em elementos ou componentes React usando JavaScript, principalmente `map()` e `filter()`, e entender por que cada item de uma lista precisa de uma `key` estável.

Fonte principal:
https://react.dev/learn/rendering-lists

## 1. Por que listas são importantes?

É comum uma interface precisar mostrar vários elementos semelhantes: produtos, usuários, tarefas, mensagens e notícias.

Em vez de escrever cada elemento manualmente, podemos manter os dados em um array e transformá-los em JSX.

```tsx
const products = [
  { title: "Notebook", id: 1 },
  { title: "Mouse", id: 2 },
  { title: "Teclado", id: 3 },
];
```

## 2. Usando `map()`

`map()` percorre um array e cria um novo array com o resultado da função.

```tsx
const listItems = products.map(product =>
  <li>{product.title}</li>
);
```

Depois:

```tsx
<ul>{listItems}</ul>
```

Fluxo:

```text
array de dados
      ↓
    map()
      ↓
array de JSX
      ↓
interface
```

## 3. `map()` diretamente no JSX

Também podemos fazer:

```tsx
function ProductList() {
  const products = [
    { title: "Notebook", id: 1 },
    { title: "Mouse", id: 2 },
    { title: "Teclado", id: 3 },
  ];

  return (
    <ul>
      {products.map(product =>
        <li>{product.title}</li>
      )}
    </ul>
  );
}
```

## 4. Renderizando componentes com `map()`

O resultado de `map()` também pode ser um componente React:

```tsx
function ProductCard({ name }) {
  return <article>{name}</article>;
}

function ProductList() {
  const products = [
    { id: 1, name: "Notebook" },
    { id: 2, name: "Mouse" },
  ];

  return (
    <section>
      {products.map(product =>
        <ProductCard name={product.name} />
      )}
    </section>
  );
}
```

Assim, um array de dados pode gerar várias instâncias do mesmo componente.

## 5. `filter()` antes de `map()`

Podemos filtrar os dados antes de renderizá-los:

```tsx
const products = [
  { id: 1, name: "Notebook", available: true },
  { id: 2, name: "Mouse", available: false },
  { id: 3, name: "Teclado", available: true },
];

const availableProducts = products.filter(
  product => product.available
);
```

Depois:

```tsx
const listItems = availableProducts.map(product =>
  <li>{product.name}</li>
);
```

Também podemos encadear:

```tsx
const listItems = products
  .filter(product => product.available)
  .map(product => <li>{product.name}</li>);
```

`filter()` seleciona dados e `map()` transforma os dados.

# 6. O problema das `keys`

Quando renderizamos uma lista, o React precisa conseguir identificar cada item.

Isto:

```tsx
const listItems = people.map(person =>
  <li>{person.name}</li>
);
```

gera um aviso porque cada item da lista precisa de uma `key`.

A forma correta é:

```tsx
const listItems = people.map(person =>
  <li key={person.id}>
    {person.name}
  </li>
);
```

## 7. Para que serve a `key`?

A `key` permite que o React saiba qual item corresponde a qual dado.

Isso se torna importante quando itens são:

- inseridos;
- removidos;
- reordenados.

Uma `key` bem escolhida ajuda o React a identificar o que mudou e atualizar a árvore da interface corretamente.

## 8. A `key` deve ser estável

O ideal é que a `key` venha dos próprios dados:

```tsx
const products = [
  { id: 101, name: "Notebook" },
  { id: 102, name: "Mouse" },
  { id: 103, name: "Teclado" },
];
```

Então:

```tsx
products.map(product =>
  <ProductCard key={product.id} name={product.name} />
);
```

A `key` não deve mudar entre renderizações.

## 9. Não use `Math.random()` como `key`

Evite:

```tsx
<ProductCard key={Math.random()} />
```

Como o valor muda a cada renderização, o React pode tratar os itens como novos, recriando componentes e DOM desnecessariamente.

Use um identificador estável baseado nos dados.

## 10. E o índice do array?

É possível usar o índice:

```tsx
items.map((item, index) =>
  <li key={index}>{item.name}</li>
);
```

Mas isso pode causar problemas quando a lista for reordenada, receber itens ou tiver itens removidos.

Quando existir um identificador estável nos dados, prefira esse identificador.

## 11. `key` não é uma prop

Neste exemplo:

```tsx
<ProductCard key={product.id} />
```

`key` é usada pelo próprio React. O componente não recebe automaticamente uma prop chamada `key`.

Se o componente precisar do ID, passe uma prop separada:

```tsx
<ProductCard
  key={product.id}
  productId={product.id}
/>
```

Aqui:

```text
key       → usada pelo React
productId → recebida pelo componente
```

## 12. Keys são únicas entre irmãos

As `keys` precisam ser únicas entre os itens irmãos daquela lista.

Elas não precisam ser globalmente únicas em toda a aplicação.

## 13. Vários elementos para cada item

Às vezes cada item precisa produzir mais de um elemento.

O Fragment abreviado não permite receber uma `key`:

```tsx
people.map(person =>
  <>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </>
);
```

Quando isso acontecer, use o Fragment explícito:

```tsx
import { Fragment } from "react";

people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

## 14. Keys vêm dos dados

Quando os dados vêm de um banco de dados, normalmente o ID é um bom candidato para a `key`.

Para dados criados localmente, o identificador deve ser estável e criado quando o item é criado, e não a cada renderização.

O ponto principal é:

```text
key estável
```

## 15. Listas + componentes + props

Agora podemos juntar conteúdos das aulas anteriores.

```tsx
function ProductCard({ name, price }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>R$ {price}</p>
    </article>
  );
}

const products = [
  { id: 1, name: "Notebook", price: 3000 },
  { id: 2, name: "Mouse", price: 100 },
  { id: 3, name: "Teclado", price: 200 },
];
```

E:

```tsx
products.map(product =>
  <ProductCard
    key={product.id}
    name={product.name}
    price={product.price}
  />
);
```

Aqui temos:

```text
array
  ↓
map()
  ↓
componente reutilizável
  ↓
props
  ↓
key
```

## 16. O que você precisa dominar

Ao terminar esta aula, você deve conseguir:

- usar `map()` para gerar JSX;
- usar `map()` para gerar componentes;
- usar `filter()` antes de renderizar;
- explicar por que `key` é necessária;
- escolher uma `key` estável;
- entender por que `Math.random()` é inadequado;
- entender o risco de usar índices como `key`;
- entender por que `key` não é uma prop comum;
- usar Fragment com `key` quando necessário;
- combinar arrays, `map()`, componentes e props.

# Resumo

O padrão principal:

```tsx
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

function List() {
  return (
    <ul>
      {items.map(item =>
        <li key={item.id}>
          {item.name}
        </li>
      )}
    </ul>
  );
}
```

A ideia central:

```text
dados → map() → JSX + key → interface
```

Com componentes:

```text
dados → map() → componente + props + key
```

Fonte principal:
https://react.dev/learn/rendering-lists
