import "./App.css";
import { ProductCard } from "./components/ProductCard";

function App() {
  const object = {
    name: "Windows",
    price: 4000,
    category: "Eletronico",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKssAi9ukJUgWFDS85-reJ6UgUMv0ZsbyP_08nOhTOTUCuM_M4gJbUyOJs&s=10",
  };

  function retornaBomDia(name) {
    return `Bom dia ${name}`;
  }

  return (
    <>
      <ProductCard
        product={object}
        featured={true}
        formatPrice={retornaBomDia}
      />
    </>
  );
}

export default App;
