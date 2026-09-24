# Aula 02 — Importando e Exportando Componentes

## Objetivo

Aprender a organizar componentes em arquivos diferentes e entender como `export` e `import` funcionam no JavaScript utilizado pelo React.

Fonte principal: documentação oficial do React — Importing and Exporting Components.

## 1. Por que separar componentes?

No começo, vários componentes podem ficar no mesmo arquivo. Conforme a aplicação cresce, separar componentes em arquivos diferentes facilita a leitura, organização e reutilização.

## 2. Export default

Um arquivo pode ter no máximo uma exportação `default`:

```tsx
export default function Header() {
  return <header>Header</header>;
}
```

A importação correspondente não usa chaves:

```tsx
import Header from "./Header";
```

Em uma importação default, o nome local pode ser diferente:

```tsx
import MeuHeader from "./Header";
```

Mesmo sendo possível, use nomes significativos.

## 3. Export nomeado

Uma exportação nomeada pode ser feita assim:

```tsx
export function Header() {
  return <header>Header</header>;
}
```

A importação correspondente usa chaves:

```tsx
import { Header } from "./Header";
```

O nome precisa corresponder ao exportado.

## 4. Default e named no mesmo arquivo

Um arquivo pode ter uma exportação default e várias exportações nomeadas:

```tsx
export default function Gallery() {
  return <section>Galeria</section>;
}

export function Profile() {
  return <div>Perfil</div>;
}
```

Importação:

```tsx
import Gallery, { Profile } from "./Gallery";
```

## 5. Várias exportações nomeadas

```tsx
export function Header() {
  return <header>Header</header>;
}

export function Main() {
  return <main>Main</main>;
}

export function Footer() {
  return <footer>Footer</footer>;
}
```

Importação:

```tsx
import { Header, Main, Footer } from "./Layout";
```

## 6. Componente não exportado

Nem todo componente precisa ser exportado:

```tsx
function Profile() {
  return <div>Perfil</div>;
}

export default function Gallery() {
  return (
    <section>
      <Profile />
    </section>
  );
}
```

Nesse caso, `Profile` só pode ser utilizado dentro desse arquivo.

## 7. Separando componentes em arquivos

Imagine que `Profile` e `Gallery` estejam juntos. Podemos mover `Profile` para `Profile.tsx`:

```tsx
export default function Profile() {
  return <div>Perfil</div>;
}
```

E importar no `Gallery.tsx`:

```tsx
import Profile from "./Profile";

export default function Gallery() {
  return (
    <section>
      <Profile />
    </section>
  );
}
```

Separar arquivos não muda o conceito dos componentes; apenas organiza o código.

## 8. Regra principal

Pense sempre em:

```text
EXPORTAÇÃO <-> IMPORTAÇÃO
```

Default:

```tsx
export default ...
```

```tsx
import Algo from "...";
```

Nomeada:

```tsx
export function Algo() {}
```

```tsx
import { Algo } from "...";
```

Um arquivo pode ter **uma** exportação default e **quantas exportações nomeadas forem necessárias**.

## 9. O que você precisa dominar

Ao terminar esta aula, você deve conseguir:

- explicar por que separar componentes em arquivos;
- usar `export default`;
- usar exports nomeados;
- diferenciar imports default e named;
- importar vários componentes do mesmo arquivo;
- misturar default e named exports;
- identificar quando um componente não está disponível para outros arquivos;
- separar componentes em arquivos próprios.

Fonte:
https://react.dev/learn/importing-and-exporting-components
