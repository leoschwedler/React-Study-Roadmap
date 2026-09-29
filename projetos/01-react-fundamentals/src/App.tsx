import { ProductCard } from "./components/ProductCard";

function formata(valor) {
  const valorFormatado = valor.toLocaleString("pt-BR");
  return valorFormatado;
}

const objeto1 = {
  name: "Macbook",
  price: 5000,
  featured: true,
  category: "Infromatica",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS11BovrD3ZwGQgY-nz5E4FkYOR_5G4M5tXYPUCrkeioyRX8PTtH7nUoUa&s=10",
};

const objeto2 = {
  name: "Windows",
  price: 3000,
  featured: false,
  category: "Infromatica",
  img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Meet-Windows-11-panel-2-content-card-1?scl=1",
};

const objeto3 = {
  name: "Linux",
  price: 1500,
  featured: true,
  category: "Infromatica",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGprrdDRbQwrPRPD8fUcpvnIJtB6fnLg-VYhXJngDg1pydrSciPJtrmJjh&s=10",
};

export function App() {
  return (
    <>
      <ProductCard
        product={objeto1}
        formatPrice={formata}
        featured={true}
      ></ProductCard>

      <ProductCard product={objeto2} formatPrice={formata}></ProductCard>

      <ProductCard
        product={objeto3}
        formatPrice={formata}
        featured={true}
      ></ProductCard>
    </>
  );
}
