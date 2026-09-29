export function ProductStatus({ name, inStock }) {
  return (
    <>
      <h1>Produto: {name}</h1>
      {inStock && <p>Disponivel</p>}
    </>
  );
}
