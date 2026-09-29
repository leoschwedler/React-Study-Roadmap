import { ProductStatusCard } from "./components/2/ProductStatusCard";

function App() {
  return (
    <>
      <ProductStatusCard
        name="Telefone"
        price={1500}
        quantity={0}
        featured={true}
      />

      <ProductStatusCard
        name="Xbox"
        price={1500}
        quantity={3}
        featured={false}
      />

      <ProductStatusCard name="Pc" price={1500} quantity={10} featured={true} />
    </>
  );
}

export default App;
