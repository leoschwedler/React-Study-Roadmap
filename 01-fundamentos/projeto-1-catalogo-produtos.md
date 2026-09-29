# 🚀 Projeto 1 — Catálogo de Produtos

## 🎯 Objetivo

Criar uma pequena página de catálogo de produtos utilizando apenas os conceitos estudados até agora:

- Componentes
- JSX
- Props
- Props booleanas
- Objetos como props
- Funções como props
- Desestruturação de props
- Operador ternário

Você deverá criar um componente `ProductCard` reutilizável e utilizá-lo para exibir 3 produtos diferentes.

---

## 📁 Estrutura sugerida

```text
src/
├── components/
│   └── ProductCard.jsx
├── App.jsx
└── App.css
```

---

# 🟢 Parte 1 — Componente

Crie o arquivo:

```text
ProductCard.jsx
```

O componente deverá receber através de props:

```text
product
featured
formatPrice
```

Utilize desestruturação de props.

---

# 🟢 Parte 2 — Objetos dos produtos

No `App.jsx`, crie **3 objetos diferentes**.

Cada produto deverá possuir:

```text
name
price
category
img
```

Você pode escolher os produtos que quiser.

Sugestões:

- Notebook
- Celular
- Teclado

Os valores são você quem decide.

---

# 🟡 Parte 3 — Passando o objeto como prop

Passe cada produto para o `ProductCard` através da prop `product`.

O componente deverá conseguir acessar:

```text
product.name
product.price
product.category
product.img
```

---

# 🟡 Parte 4 — Prop booleana

Cada produto deverá possuir um valor diferente para `featured`.

Exemplo:

```text
Produto 1 → true
Produto 2 → false
Produto 3 → true
```

No `ProductCard`, mostre:

```text
Destaque: Sim
```

quando for `true`, e:

```text
Destaque: Não
```

quando for `false`.

Utilize o operador ternário.

---

# 🟠 Parte 5 — Função como prop

Crie uma função no `App.jsx` responsável por formatar o preço.

Por exemplo:

```text
4000 → R$ 4.000
```

Depois passe essa função para o `ProductCard` através de uma prop:

```text
formatPrice
```

Dentro do `ProductCard`, utilize a função recebida através da prop para exibir o preço.

### Regra importante

A função de formatação deve estar no `App.jsx`.

O `ProductCard` deverá apenas receber e utilizar essa função.

---

# 🔴 Parte 6 — Resultado esperado

Cada produto deverá apresentar informações semelhantes a:

```text
--------------------------------
Notebook

[imagem]

Preço: R$ 4.000
Categoria: Eletrônico
Destaque: Sim
--------------------------------

Celular

[imagem]

Preço: R$ 2.500
Categoria: Eletrônico
Destaque: Não
--------------------------------
```

Você pode criar o estilo visual como quiser.

---

# 🔥 Desafio final — Componente reutilizável

Faça com que o `ProductCard` seja completamente reutilizável.

O componente não pode possuir informações específicas dos produtos fixadas dentro dele.

Por exemplo, evite colocar diretamente no componente:

```jsx
<h1>Notebook</h1>
```

ou:

```jsx
<p>Eletrônico</p>
```

Essas informações devem vir através das props.

O mesmo componente deverá conseguir renderizar os 3 produtos diferentes.

---

# 📌 Regras do projeto

## ✅ Pode utilizar

- Componentes
- JSX
- Props
- Props booleanas
- Objetos como props
- Funções como props
- Desestruturação
- Operador ternário

## ❌ Não utilizar ainda

- `useState`
- `useEffect`
- Eventos
- API
- `map()` para gerar os produtos automaticamente
- Outros conceitos que ainda não foram estudados

---

# 🎯 Objetivo principal

Ao finalizar o projeto, você deverá conseguir explicar:

1. Como passar um objeto através de props.
2. Como acessar propriedades de um objeto recebido por props.
3. Como passar um booleano para um componente.
4. Como utilizar um booleano recebido por props em uma condição.
5. Como passar uma função através de props.
6. Como executar uma função recebida através de props.
7. Como criar um componente realmente reutilizável.

---

## 🧪 Depois de terminar

Envie:

- `App.jsx`
- `ProductCard.jsx`

Vou revisar seu código e apontar os problemas e melhorias **sem simplesmente entregar a solução pronta**.
