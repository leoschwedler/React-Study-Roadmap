export function ProductCard({ product, featured, formatPrice }) {
  return (
    <>
      <h1>Nome: {product.name}</h1>
      <p>Preco: {product.price}</p>
      <p>Categoria: {product.category}</p>
      <img src={product.img} alt="imagem da net" />
      <p>Featured: {featured ? "Disponivel" : "Indisponivel"}</p>
      <p>Funcao retornando: {formatPrice("Leozinho")}</p>
    </>
  );
}
