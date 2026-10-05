export function CartSummary() {
  const produtos = [
    {
      name: "Sabao",
      price: 150,
      quantity: 2,
    },

    {
      name: "Detergente",
      price: 300,
      quantity: 1,
    },

    {
      name: "Maquina de Lavar",
      price: 150,
      quantity: 3,
    },
  ];

  const totalSabao = produtos[0].quantity * produtos[0].price;
  const totalDetergente = produtos[1].quantity * produtos[1].price;
  const totalMaquina = produtos[2].quantity * produtos[2].price;
  const totalCarrinho = totalSabao + totalDetergente + totalMaquina;

  return (
    <>
      {produtos.map((produto, index) => {
        return (
          <p key={index}>
            {produto.name} - {produto.quantity * produto.price}
          </p>
        );
      })}
      <p>Total do carrinho: R${totalCarrinho}</p>
    </>
  );
}
