type ProductStatusCardProps = {
  name: string;
  price: number | string;
  quantity: number;
  featured: boolean;
};

export function ProductStatusCard({
  name,
  price,
  quantity,
  featured,
}: ProductStatusCardProps) {
  if (quantity === 0) {
    return (
      <>
        <h1>{name}</h1>
        <p>{price}</p>
        <p>Esgotado</p>
        {featured && <p>⭐ Produto em destaque</p>}
      </>
    );
  } else if (quantity > 0 && quantity <= 5) {
    return (
      <>
        <h1>{name}</h1>
        <p>{price}</p>
        <p>Últimas unidades</p>
        {featured && <p>⭐ Produto em destaque</p>}
      </>
    );
  } else {
    return (
      <>
        <h1>{name}</h1>
        <p>{price}</p>
        <p>Em estoque</p>
        {featured && <p>⭐ Produto em destaque</p>}
        <button type="button">Comprar</button>
      </>
    );
  }
}
