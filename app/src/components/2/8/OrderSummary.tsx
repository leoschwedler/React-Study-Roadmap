export function OrderSummary() {
  const objeto = {
    product: "Teclado",
    price: 100,
    quantity: 3,
  };

  const total = objeto.quantity * objeto.price;

  return (
    <>
      <p>Produto: {objeto.product}</p>
      <p>Preco: {objeto.price}</p>
      <p>Quantidade: {objeto.quantity}</p>
      <p>Total: {total}</p>
    </>
  );
}
