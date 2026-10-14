import { useState } from "react";

export function ProductDetailsToggle() {
  const [produto, setProduto] = useState("Teclado");

  const [detalhes, setDetalhes] = useState(false);

  function handleClick() {
    setDetalhes(!detalhes);
  }

  return (
    <>
      <h1>Produto: {produto}</h1>
      <button onClick={handleClick}>
        {detalhes ? "Ocultar Detalhes" : "Mostrar Detalhes"}
      </button>
      {detalhes && (
        <div>
          <p>Preco: 150</p>
          <p>Descricao: Teclado Mecanico</p>
        </div>
      )}
    </>
  );
}
