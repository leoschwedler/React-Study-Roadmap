# React — Aula 01: Vite

## Objetivo

Entender o papel do Vite no desenvolvimento de aplicações React e aprender a trabalhar com um projeto React criado através dele.

---

## 1. O que é Vite?

Vite é uma ferramenta utilizada para criar e executar projetos modernos de frontend.

No nosso estudo de React, ele será o ambiente em que vamos desenvolver, testar e executar as aplicações.

Pense no fluxo assim:C

```text
Vite
  ↓
projeto React
  ↓
servidor de desenvolvimento
  ↓
navegador
  ↓
aplicação React
```

---

## 2. Criando um projeto React

Um projeto pode ser iniciado com:

```bash
npm create vite@latest
```

Durante a criação do projeto, selecione:

```text
Framework → React
Variant   → JavaScript
```

Depois, entre na pasta criada e instale as dependências:

```bash
cd nome-do-projeto
npm install
```

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

---

## 3. O que acontece quando usamos `npm run dev`?

O comando inicia o ambiente de desenvolvimento do projeto.

O Vite disponibiliza a aplicação para ser executada no navegador e acompanha as alterações feitas durante o desenvolvimento.

O fluxo básico é:

```text
editar código
   ↓
salvar arquivo
   ↓
Vite detecta alteração
   ↓
aplicação atualizada
   ↓
visualizar no navegador
```

---

## 4. Estrutura inicial

Um projeto React criado com Vite possui uma estrutura semelhante a:

```text
meu-projeto/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

No começo, os arquivos mais importantes para nós serão os que estão dentro de `src`.

### `main.jsx`

É o ponto de entrada da aplicação React.

### `App.jsx`

É o componente inicial que vamos modificar durante os primeiros estudos.

---

## 5. Por que usar Vite?

O objetivo aqui não é decorar a ferramenta inteira.

Você precisa entender que o Vite fornece o ambiente para:

- criar o projeto;
- executar o desenvolvimento local;
- trabalhar com o código React;
- preparar o projeto para desenvolvimento e build.

---

## 6. Comandos básicos

```bash
npm create vite@latest
```

Cria um novo projeto utilizando Vite.

```bash
npm install
```

Instala as dependências do projeto.

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

---

## 7. Modelo mental

```text
Node / npm
    ↓
Vite
    ↓
Projeto React
    ↓
src/
    ↓
Código React
    ↓
Browser
```

O Vite é o ambiente ao redor do projeto. Os componentes e a lógica da interface serão nosso foco nas próximas aulas.

---

# Checklist

- [ ] Entender o que é o Vite
- [ ] Criar um projeto React com Vite
- [ ] Instalar as dependências
- [ ] Executar o projeto
- [ ] Identificar a pasta `src`
- [ ] Saber para que servem `main.jsx` e `App.jsx`
- [ ] Entender o fluxo básico entre código, Vite e navegador
