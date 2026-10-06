export function ProductPage() {
  return (
    <>
      <Header />
      <ProductContent />
    </>
  );
}

function Header() {
  return <p>Header</p>;
}

function ProductContent() {
  return <ProductCard />;
}

function ProductCard() {
  return <p>ProductCard</p>;
}
