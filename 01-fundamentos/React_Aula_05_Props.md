# Aula 05 — Props

## Objetivo

Aprender a passar informações de um componente pai para um componente filho usando **props**.

Fonte principal:
https://react.dev/learn/passing-props-to-a-component

---

## 1. O que são props?

Props são informações que um componente recebe do seu componente pai.

Podemos pensar nelas como os **argumentos de uma função**.

Em vez de criar um componente que sempre mostra o mesmo conteúdo:

```tsx
function User() {
  return <h2>Leonardo</h2>;
}
```

podemos permitir que o componente receba o nome:

```tsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

E então:

```tsx
<User name="Leonardo" />
```

O valor `"Leonardo"` é passado para o componente por meio de uma prop.

---

## 2. Passando props

Props são passadas no JSX como atributos:

```tsx
<User name="Leonardo" />
```

Podemos passar várias:

```tsx
<User
  name="Leonardo"
  profession="Programador"
/>
```

O componente filho recebe essas informações.

---

## 3. Lendo props

Uma forma comum é receber as props por **desestruturação**:

```tsx
function User({ name, profession }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{profession}</p>
    </section>
  );
}
```

Nesse caso, `name` e `profession` passam a estar disponíveis dentro do componente como variáveis.

---

## 4. Usando o objeto `props`

Também podemos receber o objeto inteiro:

```tsx
function User(props) {
  return (
    <section>
      <h2>{props.name}</h2>
      <p>{props.profession}</p>
    </section>
  );
}
```

Isso é equivalente a acessar as propriedades individualmente por desestruturação.

A desestruturação:

```tsx
function User({ name, profession }) {
```

é uma forma mais conveniente quando você vai utilizar essas propriedades diretamente.

---

## 5. Tipos de valores que podem ser passados

### String

```tsx
<User name="Leonardo" />
```

### Número

Para valores que não são strings, usamos `{}`:

```tsx
<User age={26} />
```

### Boolean

```tsx
<User online={true} />
```

Também existe a forma abreviada:

```tsx
<User online />
```

Nesse caso, a prop `online` recebe `true`.

---

## 6. Passando expressões JavaScript

Como estudamos na aula anterior, `{}` permite utilizar JavaScript no JSX.

Portanto, podemos fazer:

```tsx
const age = 26;

<User age={age} />
```

Ou:

```tsx
<User age={20 + 6} />
```

A expressão é avaliada e seu resultado é passado como prop.

---

## 7. Props podem receber objetos

Props não estão limitadas a strings e números.

Podemos passar um objeto:

```tsx
const person = {
  name: "Leonardo",
  profession: "Programador"
};

<User person={person} />
```

Dentro do componente:

```tsx
function User({ person }) {
  return (
    <section>
      <h2>{person.name}</h2>
      <p>{person.profession}</p>
    </section>
  );
}
```

As duas chaves em:

```tsx
person={person}
```

têm funções diferentes:

- a primeira `{}` indica JavaScript dentro do JSX;
- `person` dentro dela é a variável que contém o objeto.

---

## 8. Props podem receber arrays

Também podemos passar arrays:

```tsx
const skills = ["HTML", "CSS", "JavaScript"];

<Developer skills={skills} />
```

Dentro do componente:

```tsx
function Developer({ skills }) {
  // skills contém o array
}
```

O componente recebe o mesmo valor que foi passado pelo pai.

---

## 9. Props podem receber funções

Uma função também pode ser passada como prop:

```tsx
function message() {
  return "Olá!";
}

<Button onMessage={message} />
```

Dentro do componente:

```tsx
function Button({ onMessage }) {
  return <button>{onMessage()}</button>;
}
```

A função foi passada pelo componente pai e pode ser utilizada pelo componente filho.

Nesta aula, o objetivo é entender **como funções também podem ser dados transmitidos por props**. O uso disso para lidar com eventos será aprofundado quando estudarmos eventos.

---

## 10. Props são como argumentos de funções

Considere:

```tsx
function User({ name }) {
  return <h2>{name}</h2>;
}
```

Você pode pensar em:

```text
User(...)
```

como uma função recebendo informações.

Quando fazemos:

```tsx
<User name="Leonardo" />
```

o React cria o componente com aquele conjunto de props.

Essa forma de pensar ajuda a entender por que um mesmo componente pode ser utilizado várias vezes com dados diferentes.

---

## 11. Reutilização de verdade

Antes das props, para mostrar três pessoas diferentes sem usar props, você precisaria criar estruturas separadas.

Agora:

```tsx
<User name="Leonardo" />
<User name="João" />
<User name="Maria" />
```

O componente é o mesmo.

O que muda são os dados recebidos.

Essa é uma das principais funções das props: **permitir que o mesmo componente seja configurado de diferentes maneiras**.

---

## 12. Valores padrão

Podemos definir um valor padrão durante a desestruturação:

```tsx
function User({ name = "Visitante" }) {
  return <h2>{name}</h2>;
}
```

Se o componente for utilizado sem `name`:

```tsx
<User />
```

ele utilizará:

```text
Visitante
```

O valor padrão é utilizado quando a prop está ausente ou recebe `undefined`.

Se o valor for:

```tsx
null
```

o padrão não será utilizado.

---

## 13. Props são somente leitura

Props são **read-only**.

O componente filho recebe os valores, mas não deve tentar alterá-los.

Por exemplo, evite:

```tsx
function User({ name }) {
  name = "Outro nome";
}
```

Quando a informação precisa mudar em resposta a uma interação, utilizaremos outros mecanismos, especialmente **state**, que estudaremos mais adiante.

A documentação do React trata props como uma espécie de **snapshot de dados daquela renderização**.

---

## 14. Fluxo de dados

A direção normal é:

```text
Componente Pai
      ↓
     props
      ↓
Componente Filho
```

Exemplo:

```tsx
function App() {
  return <User name="Leonardo" />;
}
```

O `App` passa `name` para `User`.

E `User` lê essa informação.

Esse fluxo explícito de dados é uma parte central da forma como React organiza interfaces.

---

## 15. Props e atributos HTML

Você já utilizou atributos em elementos como:

```tsx
<img src="..." alt="..." />
```

Esses valores também são props do elemento React correspondente.

A diferença é que **seus próprios componentes também podem receber props personalizadas**:

```tsx
<User name="Leonardo" />
```

---

## O que você precisa dominar

Ao terminar esta aula, você deve conseguir:

- explicar o que são props;
- passar props para componentes;
- receber props com desestruturação;
- receber o objeto `props` inteiro;
- usar props dentro do JSX;
- passar strings;
- passar números;
- passar booleanos;
- passar expressões JavaScript;
- passar objetos;
- passar arrays;
- passar funções;
- definir valores padrão;
- explicar por que props são somente leitura;
- explicar o fluxo pai → filho.

---

## Resumo

A ideia central:

```text
Pai
  ↓
props
  ↓
Filho
```

Exemplo:

```tsx
function Profile({ name, age }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
    </section>
  );
}

function App() {
  return (
    <>
      <Profile name="Leonardo" age={26} />
      <Profile name="João" age={30} />
    </>
  );
}
```

O componente `Profile` é o mesmo.

Os dados mudam porque o componente recebe props diferentes.

Esse é o principal motivo pelo qual props tornam os componentes realmente reutilizáveis.

---

## Fonte

Documentação oficial do React:
https://react.dev/learn/passing-props-to-a-component
