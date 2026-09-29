export function StockStatus({ name, quantity }) {
  if (quantity === 0) {
    return (
      <>
        <h1>{name}</h1>
        <p>Produto esgotado</p>
      </>
    );
  } else if (quantity > 0 && quantity <= 10) {
    return (
      <>
        <h1>{name}</h1>
        <p>Poucas unidades</p>
      </>
    );
  } else {
    return (
      <>
        <h1>{name}</h1>
        <p>Em estoque</p>
      </>
    );
  }
}
