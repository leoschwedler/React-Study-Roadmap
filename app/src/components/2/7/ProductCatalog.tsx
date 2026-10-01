export function ProductCatalog() {
  const produtos = [
    { id: 1, name: "Produto 1", available: true },
    { id: 2, name: "Produto 2", available: false },
    { id: 3, name: "Produto 3", available: true },
  ];

  return (
    <>
      <ul>
        {produtos.map((produto) => {
          if (produto.available) {
            return <li key={produto.id}>{produto.name}</li>;
          }
          return <li key={produto.id}>{produto.name} Indisponivel</li>;
        })}
      </ul>
    </>
  );
}
