import { Fragment } from "react/jsx-runtime";

export function OrderList() {
  const pedidos = [
    {
      id: 1,
      customer: "João",
      products: [
        { id: 1, name: "Teclado" },
        { id: 2, name: "Mouse" },
      ],
    },
    {
      id: 2,
      customer: "Maria",
      products: [
        { id: 1, name: "Monitor" },
        { id: 2, name: "Webcam" },
      ],
    },
  ];

  return (
    <>
      <ol>
        {pedidos.map((pedido) => {
          return (
            <>
              <li key={pedido.customer}>{pedido.customer}</li>
              <ul>
                {pedido.products.map((produto) => {
                  return <li key={produto.id}>{produto.name}</li>;
                })}
              </ul>
            </>
          );
        })}
      </ol>
    </>
  );
}
