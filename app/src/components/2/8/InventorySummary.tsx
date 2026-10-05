export function InventorySummary() {
  const listaProdutos = [
    { id: 1, name: "Teclado", price: 100, quantity: 2 },
    { id: 2, name: "Mouse", price: 50, quantity: 3 },
    { id: 3, name: "Monitor", price: 800, quantity: 1 },
  ];
  const totalTeclado = listaProdutos[0].quantity * listaProdutos[0].price;
  const totalMouse = listaProdutos[1].quantity * listaProdutos[1].price;
  const totalMonitor = listaProdutos[2].quantity * listaProdutos[2].price;
  const totalCarrinho = totalTeclado + totalMouse + totalMonitor;

  return (
    <>
      {listaProdutos.map((produto) => {
        return (
          <p key={produto.id}>
            {produto.name} - R${produto.quantity * produto.price}
          </p>
        );
      })}
      <p>Total do Estoque: {totalCarrinho}</p>
    </>
  );
}
