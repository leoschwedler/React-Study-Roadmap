import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickMenos() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Contagem: {count}</h1>
      <button onClick={handleClick}>
        Clique aqui para aumentar o contador
      </button>

      <div>
        <button onClick={handleClickMenos}>
          Clique aqui para diminuir o contador
        </button>
      </div>
    </>
  );
}
