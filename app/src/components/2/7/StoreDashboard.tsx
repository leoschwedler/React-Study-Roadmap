export function StoreDashboard() {
  const pedidos = [
    {
      id: 1,
      name: "João",
      products: [
        { id: 1, name: "Teclado", available: true },
        { id: 2, name: "Mouse", available: false },
      ],
    },
    {
      id: 2,
      name: "Maria",
      products: [
        { id: 1, name: "Monitor", available: false },
        { id: 2, name: "Webcam", available: true },
      ],
    },
  ];

  return (
    <>
      <ul>
        {pedidos.map((pedido) => {
          return (
            <>
              <li key={pedido.id}>{pedido.name}</li>
              <ul>
                {pedido.products.map((produto) => {
                  return (
                    <li key={produto.id}>
                      {produto.available
                        ? produto.name
                        : "Produto Indisponivel"}
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
}
