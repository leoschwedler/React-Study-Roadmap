import ListaProduto from "./ProductList";

type MainProps = {
  isLoggedIn: boolean;
};

export default function Main({ isLoggedIn }: MainProps) {
  return isLoggedIn ? <ListaProduto /> : <p>Tem nada fi</p>;
}
