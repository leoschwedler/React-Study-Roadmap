import { useState } from "react";

export function InteractiveCart() {
  const [quantidade, setQuantidade] = useState(0);
  const [detalhes, setDetalhes] = useState(false);

  function handleDetalhes() {
    setDetalhes(!detalhes);
  }

  function handleMais() {
    setQuantidade(quantidade + 1);
  }

  function handleMenos() {
    setQuantidade(quantidade - 1);
  }

  return (
    <>
      <p>Nome: Teclado Mecanico</p>
      <p>Preco Unitario: 150</p>
      <p>Quantidade inicial: {quantidade}</p>
      <p>Subtotal: {quantidade * 150}</p>
      <button onClick={handleMais}>+</button>
      <button onClick={handleMenos}>-</button>
      <div>
        <button onClick={handleDetalhes}>
          {detalhes ? "Ocultar Detalhes" : "Mostrar Detalhes"}
        </button>
      </div>
    </>
  );
}
