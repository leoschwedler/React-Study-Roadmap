import { Header } from "./components/Header";
import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";

const produtos = [
  {
    id: 1,
    name: "Notebook Gamer",
    price: 4500.0,
    quantity: 5,
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: "Mouse Sem Fio",
    price: 150.0,
    quantity: 0,
    available: false,
    featured: false,
  },
  {
    id: 3,
    name: "Teclado Mecânico",
    price: 320.0,
    quantity: 12,
    available: true,
    featured: false,
  },
  {
    id: 4,
    name: "Monitor 24 Polegadas",
    price: 899.9,
    quantity: 8,
    available: true,
    featured: true,
  },
];

export default function App() {
  return (
    <>
      <Header />
      <Catalog produtos={produtos} />
      <Footer />
    </>
  );
}
