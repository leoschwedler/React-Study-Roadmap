# Aula 04 — JavaScript no JSX com `{}`

## Objetivo

Aprender a usar JavaScript dentro do JSX por meio das chaves `{}`.

Fonte principal:
https://react.dev/learn/javascript-in-jsx-with-curly-braces

## 1. Chaves: uma janela para o JavaScript

JSX permite escrever uma marcação parecida com HTML dentro de JavaScript. Quando você precisa usar um valor ou expressão JavaScript dentro do JSX, use `{}`.

```tsx
function App() {
  const name = "Leonardo";

  return <h1>Olá, {name}!</h1>;
}
```

`{name}` faz o JSX utilizar o valor da variável `name`.

## 2. String fixa x variável

Com valor fixo:

```tsx
<img alt="Foto do Leonardo" />
```

Com variável:

```tsx
const description = "Foto do Leonardo";

<img alt={description} />
```

A diferença é importante:

```tsx
alt="description"
```

passa literalmente `"description"`.

```tsx
alt={description}
```

usa o valor da variável `description`.

## 3. Expressões JavaScript no conteúdo

As chaves também aceitam expressões:

```tsx
const price = 500;

<p>Preço: {price}</p>
<p>Total: {price * 2}</p>
```

O resultado da expressão aparece no JSX.

## 4. Chamando funções

Também é possível chamar funções:

```tsx
function formatName(name) {
  return name.toUpperCase();
}

const name = "Leonardo";

<h1>{formatName(name)}</h1>
```

A função é executada e seu retorno aparece na interface.

## 5. Usando JavaScript em atributos

As chaves podem aparecer imediatamente depois de `=`:

```tsx
const avatar = "https://example.com/avatar.jpg";

<img src={avatar} />
```

Compare:

```tsx
src="avatar"
```

com:

```tsx
src={avatar}
```

O primeiro é uma string. O segundo usa a variável.

Também não funciona esperar JavaScript dentro de uma string:

```tsx
src="{avatar}"
```

Isso passa o texto `"{avatar}"`.

## 6. Objetos e `{{ }}`

Também podemos passar objetos para atributos:

```tsx
const person = {
  name: "Leonardo",
  age: 20
};

<Component person={person} />
```

Você pode encontrar duas chaves de cada lado quando o valor é um objeto literal:

```tsx
<div style={{ backgroundColor: "black", color: "white" }}>
```

Isso é apenas:

```text
{ expressão JavaScript }
```

contendo:

```text
{ objeto JavaScript }
```

Por isso aparecem `{{ ... }}`.

## 7. Objetos no `style`

Um exemplo comum:

```tsx
<ul style={{ backgroundColor: "black", color: "white" }}>
  <li>Item</li>
</ul>
```

As propriedades de estilo são escritas em `camelCase`:

```tsx
backgroundColor
```

e não:

```css
background-color
```

## 8. Reutilizando dados de um objeto

Podemos guardar informações em um objeto e usar suas propriedades no JSX:

```tsx
const person = {
  name: "Leonardo",
  theme: {
    backgroundColor: "black",
    color: "white"
  }
};

function App() {
  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
    </div>
  );
}
```

Aqui:

```tsx
style={person.theme}
```

usa a propriedade `theme` como valor de um atributo.

E:

```tsx
{person.name}
```

usa a propriedade `name` como conteúdo.

## 9. Onde as chaves podem ser usadas?

A documentação destaca duas formas principais:

### No conteúdo de uma tag

```tsx
<h1>{name}</h1>
```

### Em um atributo, imediatamente depois de `=`

```tsx
<img src={avatar} />
```

Não é possível usar uma expressão JavaScript para criar diretamente o nome da tag:

```tsx
<{tag}>Texto</{tag}>
```

Essa sintaxe não é válida.

## 10. O que muda a partir daqui?

Até agora você escreveu valores diretamente no JSX:

```tsx
<h1>Leonardo</h1>
<p>Programador</p>
```

Agora pode separar os dados da estrutura:

```tsx
const name = "Leonardo";
const profession = "Programador";

function Profile() {
  return (
    <section>
      <h1>{name}</h1>
      <p>{profession}</p>
    </section>
  );
}
```

Esse conceito prepara o caminho para a próxima aula, em que esses dados poderão ser recebidos por um componente através de **Props**.

## O que você precisa dominar

Ao terminar esta aula, você deve conseguir:

- explicar para que servem `{}`;
- usar variáveis dentro do JSX;
- usar expressões JavaScript dentro do JSX;
- chamar funções dentro do JSX;
- usar variáveis em atributos;
- diferenciar `"valor"` de `{valor}`;
- entender `{{ }}`;
- usar objetos como valores de atributos;
- entender objetos no `style`;
- reconhecer `camelCase` em propriedades de estilo.

## Resumo

A ideia central:

```text
JSX + {JavaScript}
```

Exemplo:

```tsx
const name = "Leonardo";
const age = 20;

function Profile() {
  return (
    <section>
      <h1>{name}</h1>
      <p>Idade: {age}</p>
    </section>
  );
}
```

A próxima aula será **Props — passando dados para um componente**.
