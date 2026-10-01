export function AvailableProducts() {
  const produtos = [
    { id: 1, name: "Produto 1", available: true },
    { id: 2, name: "Produto 2", available: false },
    { id: 3, name: "Produto 3", available: true },
  ];

  return (
    <>
      <p>Produtos disponiveis</p>
      {produtos
        .filter((produto) => produto.available)
        .map((produtoDisponivel) => {
          return (
            <p key={produtoDisponivel.id}>Nome: {produtoDisponivel.name}</p>
          );
        })}
    </>
  );
}
