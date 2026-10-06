import { Fragment } from "react";

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
            <Fragment key={pedido.id}>
              <li>{pedido.customer}</li>
              <ul>
                {pedido.products.map((produto) => {
                  return <li key={produto.id}>{produto.name}</li>;
                })}
              </ul>
            </Fragment>
          );
        })}
      </ol>
    </>
  );
}
