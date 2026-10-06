type ProductStatusProps = {
  name: string;
  inStock: boolean;
};

export function ProductStatus({ name, inStock }: ProductStatusProps) {
  return (
    <>
      <h1>Produto: {name}</h1>
      {inStock && <p>Disponivel</p>}
    </>
  );
}
