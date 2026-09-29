export function ProductCard({ product, formatPrice, featured = false }) {
  return (
    <>
      <h1>Name: {product.name}</h1>
      <p>Price: {formatPrice(product.price)}</p>
      <p>Category: {product.category}</p>
      <img src={product.img} alt="Imagem da internet" />
      <p>Destaque {featured ? "Sim" : "Nao"}</p>
    </>
  );
}
