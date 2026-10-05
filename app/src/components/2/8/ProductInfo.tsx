export function ProductInfo() {
  const objeto = {
    name: "Teclado",
    price: 100,
  };

  return (
    <>
      <h1>Produto: {objeto.name}</h1>
      <p>Preco: RS{objeto.price}</p>
    </>
  );
}
