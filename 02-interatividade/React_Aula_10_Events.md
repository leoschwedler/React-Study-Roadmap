# Aula 10 — Events

## Objetivo

Entender como responder a interações do usuário em React usando **event handlers**.

Nesta aula, você vai aprender:

- como eventos funcionam em componentes React;
- como passar uma função para um evento;
- a diferença entre passar uma função e executar uma função;
- como criar handlers com nomes claros;
- como acessar informações do evento;
- como passar informações extras para uma função;
- como usar eventos em componentes diferentes.

Referência principal da documentação oficial:
https://react.dev/learn/responding-to-events

> Esta aula fecha o bloco inicial de fundamentos antes do próximo projeto.

---

## 1. O que são eventos?

Eventos são ações que acontecem durante a interação do usuário com a interface.

Exemplos:

```text
clique
digitação
envio de formulário
movimento do mouse
foco em um campo
```

No React, você responde a essas ações passando uma função para uma prop de evento.

```tsx
function Button() {
  function handleClick() {
    console.log("Botão clicado");
  }

  return <button onClick={handleClick}>Clique</button>;
}
```

Quando o usuário clicar no botão, `handleClick` será executada.

---

## 2. `onClick`

Um dos eventos mais comuns é o `onClick`.

```tsx
function Button() {
  function handleClick() {
    alert("Olá!");
  }

  return <button onClick={handleClick}>Clique</button>;
}
```

A função é passada para `onClick`.

O React executará essa função quando o evento acontecer.

---

## 3. Não execute a função no JSX

Existe uma diferença muito importante entre:

```tsx
onClick={handleClick}
```

e:

```tsx
onClick={handleClick()}
```

### Correto

```tsx
<button onClick={handleClick}>Clique</button>
```

Aqui você está dizendo:

> Quando acontecer o clique, execute `handleClick`.

### Incorreto para esse caso

```tsx
<button onClick={handleClick()}>Clique</button>
```

Aqui `handleClick()` é executada durante a renderização para obter seu resultado.

A regra mental é:

```text
onClick={função}
```

e não:

```text
onClick={função()}
```

---

## 4. Handlers

É comum criar funções específicas para tratar eventos.

Por convenção, nomes como estes são comuns:

```tsx
handleClick
handleSubmit
handleChange
handleMouseEnter
```

Exemplo:

```tsx
function LoginButton() {
  function handleLogin() {
    console.log("Login");
  }

  return <button onClick={handleLogin}>Entrar</button>;
}
```

O nome `handleLogin` deixa claro que a função trata uma ação.

---

## 5. Event handlers são funções

Um event handler é uma função que será chamada quando o evento acontecer.

```tsx
function Button() {
  function handleClick() {
    console.log("Clicou");
  }

  return <button onClick={handleClick}>Clique</button>;
}
```

Fluxo:

```text
usuário clica
      ↓
   onClick
      ↓
handleClick()
```

---

## 6. Vários eventos

Um componente pode possuir vários handlers.

```tsx
function FormActions() {
  function handleSave() {
    console.log("Salvando");
  }

  function handleCancel() {
    console.log("Cancelando");
  }

  return (
    <>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={handleCancel}>Cancelar</button>
    </>
  );
}
```

Cada botão responde ao seu próprio evento.

---

## 7. Passando o evento para a função

O React pode fornecer informações sobre o evento para o handler.

```tsx
function Input() {
  function handleChange(event) {
    console.log(event);
  }

  return <input onChange={handleChange} />;
}
```

Nesse caso, `event` representa o evento recebido pelo handler.

---

## 8. Usando informações do evento

Por exemplo:

```tsx
function Input() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input onChange={handleChange} />;
}
```

Quando o usuário digita, podemos acessar o valor atual do campo através de:

```tsx
event.target.value
```

---

## 9. React e eventos do DOM

Os nomes dos eventos no JSX seguem a convenção do React.

```tsx
<button onClick={handleClick}>
```

Não:

```tsx
<button onclick={handleClick}>
```

No React, propriedades de eventos normalmente usam **camelCase**:

```text
onClick
onChange
onSubmit
onMouseEnter
```

---

## 10. Passar argumentos para um handler

Às vezes você precisa executar uma função passando uma informação específica.

Imagine:

```tsx
function showProduct(id) {
  console.log(id);
}
```

Você não deve fazer:

```tsx
onClick={showProduct(10)}
```

porque isso executaria a função durante a renderização.

Em vez disso:

```tsx
onClick={() => showProduct(10)}
```

Agora a sequência é:

```text
renderização
    ↓
cria a função
    ↓
usuário clica
    ↓
showProduct(10)
```

---

## 11. Argumento + evento

Também é possível passar argumentos e continuar recebendo o evento.

```tsx
function ProductButton() {
  function handleProductClick(id, event) {
    console.log(id);
    console.log(event);
  }

  return (
    <button onClick={(event) => handleProductClick(10, event)}>
      Produto
    </button>
  );
}
```

Aqui `10` é um argumento definido por você e `event` é o evento fornecido pelo React.

---

## 12. Função inline

Você também pode declarar o handler diretamente no JSX:

```tsx
<button onClick={() => console.log("Clicou")}>Clique</button>
```

Isso funciona.

Quando a lógica cresce, normalmente fica mais claro criar uma função separada:

```tsx
function handleClick() {
  console.log("Clicou");
}
```

e então:

```tsx
<button onClick={handleClick}>Clique</button>
```

---

## 13. Eventos e componentes

Um componente pode receber uma função de evento através de props.

```tsx
function Button({ onPress }) {
  return <button onClick={onPress}>Clique</button>;
}
```

O componente pai pode fornecer a função:

```tsx
function App() {
  function handlePress() {
    console.log("Clicou");
  }

  return <Button onPress={handlePress} />;
}
```

Fluxo:

```text
App
 ↓ passa função
Button
 ↓ usa a função
onClick
```

---

## 14. Evento do filho e função do pai

Um padrão muito importante:

```tsx
function Parent() {
  function handleClick() {
    console.log("Ação executada");
  }

  return <Child onAction={handleClick} />;
}
```

No filho:

```tsx
function Child({ onAction }) {
  return <button onClick={onAction}>Executar</button>;
}
```

Fluxo:

```text
usuário
   ↓
Child
   ↓
onAction
   ↓
função do Parent
```

Esse padrão será muito importante quando estudarmos estado.

---

## 15. `onClick` x props personalizadas

Você pode criar uma prop chamada:

```tsx
onAction
```

Ela não é um evento nativo do React por si só.

Ela é apenas uma prop que recebe uma função.

Por exemplo:

```tsx
<Child onAction={handleAction} />
```

O próprio `Child` decide o que fazer com essa prop:

```tsx
<button onClick={onAction}>
```

Assim:

```text
onClick
→ evento do React

onAction
→ prop criada pela aplicação
```

---

## 16. Exemplo completo

```tsx
function ProductButton({ productName, onSelect }) {
  function handleClick() {
    onSelect(productName);
  }

  return (
    <button onClick={handleClick}>
      Escolher {productName}
    </button>
  );
}
```

Pai:

```tsx
function App() {
  function handleSelect(productName) {
    console.log("Produto escolhido:", productName);
  }

  return (
    <ProductButton
      productName="Teclado"
      onSelect={handleSelect}
    />
  );
}
```

Fluxo:

```text
App
 ↓
passa handleSelect
 ↓
ProductButton
 ↓
usuário clica
 ↓
handleClick()
 ↓
onSelect(productName)
 ↓
handleSelect(productName)
```

---

## 17. Event handler x renderização

É importante separar:

### Renderização

Responsável por calcular a interface:

```tsx
function Product({ name }) {
  return <h2>{name}</h2>;
}
```

### Event handler

Responsável por reagir a uma interação:

```tsx
function Product({ name }) {
  function handleClick() {
    console.log(name);
  }

  return <button onClick={handleClick}>{name}</button>;
}
```

A interação acontece depois que a interface foi renderizada.

---

## 18. Eventos e pureza

Isso se conecta diretamente à aula anterior.

Um `console.log()` dentro de um event handler não é o mesmo que um `console.log()` durante o render.

```tsx
function Button() {
  function handleClick() {
    console.log("Clicou");
  }

  return <button onClick={handleClick}>Clique</button>;
}
```

O efeito acontece como resposta a uma interação.

---

## 19. O que você precisa saber

Para esta aula, domine:

1. Eventos representam interações do usuário.
2. `onClick`, `onChange` e `onSubmit` são exemplos de eventos usados no JSX.
3. Passamos uma função para o handler.
4. `onClick={handleClick}` não é igual a `onClick={handleClick()}`.
5. Um handler pode receber o objeto `event`.
6. `event.target.value` permite acessar o valor de um campo.
7. Para passar argumentos, podemos usar uma função como `() => algumaFuncao(valor)`.
8. Podemos passar funções para componentes através de props.
9. Uma prop como `onAction` é apenas uma prop comum que normalmente recebe uma função.
10. Event handlers são separados da renderização e serão fundamentais para trabalhar com interatividade e estado.

---

## Resumo visual

```text
INTERAÇÃO DO USUÁRIO
        ↓
      EVENTO
        ↓
     HANDLER
        ↓
      FUNÇÃO
        ↓
   alguma ação
```

Com componentes:

```text
Pai
 │
 │ passa função como prop
 ↓
Filho
 │
 │ evento
 ↓
onClick
 │
 ↓
função do Pai
```

## Referência oficial

React — Responding to Events

https://react.dev/learn/responding-to-events
