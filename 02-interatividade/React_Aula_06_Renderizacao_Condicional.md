# Aula 06 — Renderização Condicional

## Objetivo

Aprender a controlar o que aparece na interface de acordo com condições usando JavaScript.

Fonte principal:
https://react.dev/learn/conditional-rendering

---

## 1. React usa JavaScript para condições

React não possui uma sintaxe especial de `if`.

Você utiliza o próprio JavaScript para decidir qual JSX será renderizado.

```tsx
function User({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Área do usuário</h2>;
  }

  return <h2>Faça login</h2>;
}
```

A condição acontece no JavaScript e o resultado é JSX.

---

## 2. `if` com `return`

Quando as possibilidades são diferentes o suficiente, podemos retornar JSX diferente:

```tsx
function User({ isAdmin }) {
  if (isAdmin) {
    return <h2>Painel administrativo</h2>;
  }

  return <h2>Área comum</h2>;
}
```

O componente retorna uma das duas interfaces dependendo da condição.

---

## 3. Retornando `null`

Em alguns casos, você pode decidir que o componente não deve renderizar nada:

```tsx
function Warning({ show }) {
  if (!show) {
    return null;
  }

  return <p>Atenção!</p>;
}
```

Quando `show` for falso, o componente não renderiza conteúdo.

A documentação observa que isso existe, mas que muitas vezes é mais claro controlar a inclusão do componente no componente pai.

---

## 4. Operador ternário

Quando você precisa escolher entre dois valores ou dois trechos de JSX, pode utilizar o operador ternário:

```tsx
function User({ isLoggedIn }) {
  return (
    <p>
      {isLoggedIn ? "Logado" : "Deslogado"}
    </p>
  );
}
```

A estrutura é:

```tsx
condicao ? valorSeVerdadeiro : valorSeFalso
```

O ternário funciona dentro do JSX porque é uma expressão JavaScript.

---

## 5. Ternário com JSX

O resultado das duas possibilidades pode ser JSX:

```tsx
function Status({ isOnline }) {
  return (
    <div>
      {isOnline ? (
        <p>Usuário online</p>
      ) : (
        <p>Usuário offline</p>
      )}
    </div>
  );
}
```

Ele é útil para condições simples.

Evite criar ternários extremamente aninhados, porque podem deixar o componente difícil de ler.

---

## 6. Operador `&&`

Quando só existe algo para mostrar no caso verdadeiro, o operador `&&` é uma opção comum:

```tsx
function User({ isAdmin }) {
  return (
    <section>
      <h2>Usuário</h2>
      {isAdmin && <p>Administrador</p>}
    </section>
  );
}
```

A ideia é:

```text
condição verdadeira → renderiza
condição falsa      → não renderiza
```

---

## 7. Cuidado com números e `&&`

Existe uma armadilha importante.

Evite:

```tsx
{messageCount && <p>Novas mensagens</p>}
```

se `messageCount` puder ser `0`.

Quando o valor for `0`, JavaScript retorna `0` na expressão, e o React pode renderizar esse `0`.

Prefira uma condição que resulte claramente em boolean:

```tsx
{messageCount > 0 && <p>Novas mensagens</p>}
```

Assim:

```text
0 > 0 → false
3 > 0 → true
```

---

## 8. Guardando JSX em uma variável

Nem sempre o melhor caminho é colocar toda a lógica dentro do `return`.

Você pode calcular o conteúdo antes:

```tsx
function Item({ isPacked, name }) {
  let content = name;

  if (isPacked) {
    content = name + " ✅";
  }

  return <li>{content}</li>;
}
```

Isso é particularmente útil quando a lógica fica maior.

---

## 9. `if` x ternário x `&&`

Não existe uma única forma obrigatória.

### `if`

Bom quando você precisa de lógica mais extensa ou retornar diferentes estruturas:

```tsx
if (isLoggedIn) {
  return <AdminPanel />;
}

return <LoginForm />;
```

### Ternário

Bom para escolher entre duas possibilidades dentro do JSX:

```tsx
{isLoggedIn ? <AdminPanel /> : <LoginForm />}
```

### `&&`

Bom quando você quer renderizar alguma coisa apenas se uma condição for verdadeira:

```tsx
{isAdmin && <AdminBadge />}
```

---

## 10. Renderização condicional e props

Podemos usar as props que aprendemos na Aula 05 para controlar a interface.

```tsx
function Product({ name, featured }) {
  return (
    <article>
      <h2>{name}</h2>
      {featured && <span>⭐ Destaque</span>}
    </article>
  );
}
```

No pai:

```tsx
<Product name="Notebook" featured={true} />
<Product name="Mouse" featured={false} />
```

O mesmo componente pode apresentar interfaces diferentes dependendo dos dados recebidos.

---

## 11. A condição pode escolher componentes

A renderização condicional não precisa escolher apenas texto.

Também podemos escolher componentes:

```tsx
function App({ isLoggedIn }) {
  return (
    <main>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </main>
  );
}
```

A condição faz parte da lógica de renderização.

---

## 12. A árvore da interface pode mudar

Em cada renderização, diferentes condições podem fazer com que diferentes componentes sejam renderizados.

Por exemplo:

```tsx
{isAdmin ? <AdminPanel /> : <UserPanel />}
```

Em uma situação, a árvore contém `AdminPanel`.

Em outra, contém `UserPanel`.

Isso é uma consequência importante da renderização condicional no React.

---

# O que você precisa dominar

Ao terminar esta aula, você deve conseguir:

- usar `if` para decidir qual JSX retornar;
- retornar `null`;
- usar ternário no JSX;
- usar `&&` para renderizar condicionalmente;
- saber quando `if`, ternário ou `&&` fazem mais sentido;
- evitar o problema de renderizar `0` com `&&`;
- guardar JSX em uma variável;
- usar props para controlar a interface;
- entender que a árvore de componentes pode variar conforme a condição.

# Resumo

As principais formas que você verá em projetos React:

```tsx
// if
if (condition) {
  return <A />;
}

return <B />;
```

```tsx
// ternário
{condition ? <A /> : <B />}
```

```tsx
// &&
{condition && <A />}
```

```tsx
// variável
let content = <B />;

if (condition) {
  content = <A />;
}

return <section>{content}</section>;
```

A ideia central é:

```text
condição
   ↓
decisão
   ↓
qual JSX será renderizado
```

A próxima aula será **Aula 07 — Listas e Keys**.

## Fonte

Documentação oficial do React:
https://react.dev/learn/conditional-rendering
