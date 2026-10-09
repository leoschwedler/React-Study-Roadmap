export function Catalog({ produtos }) {
  return (
    <>
      <ProductList produtos={produtos} />
      <CatalogSummary produtos={produtos} />
    </>
  );
}

function ProductList({ produtos }) {
  return (
    <>
      {produtos.map((produto) => {
        return <ProductCard key={produto.id} produto={produto} />;
      })}
    </>
  );
}

function ProductCard({ produto }) {
  function handleClick(produto, available) {
    if (available) {
      console.log(`Produto selecionado: ${produto} `);
    } else {
      console.log("");
    }
  }

  return (
    <>
      <p>Name: {produto.name}</p>
      <p>Price: {produto.price}</p>
      <p>Quantity: {produto.quantity}</p>
      <p>Available: {produto.available ? "Disponivel" : "Indisponivel"}</p>
      {produto.featured ? <p>⭐ Destaque</p> : ""}
      {produto.available ? (
        <button onClick={() => handleClick(produto.name, produto.available)}>
          Comprar
        </button>
      ) : null}
    </>
  );
}

function calcularTotal(lista) {
  return lista.reduce((acumulador, item) => {
    return acumulador + item.quantity * item.price;
  }, 0);
}

function CatalogSummary({ produtos }) {
  const total = calcularTotal(produtos);

  return <h2>Total {total}</h2>;
}
