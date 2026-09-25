import "./App.css";
import imagem from "./assets/image.jpg";

function App() {
  return (
    <>
      <ProductCard />
    </>
  );
}

export default App;

function Profile() {
  const nome = "Leozinho";
  const idade = 25;

  return (
    <>
      <h1>Nome: {nome}</h1>
      <h1>Idade: {idade}</h1>
    </>
  );
}

function Product() {
  const nome = "Processador";
  const preco = 500.0;
  const descricao = "Ta barato dmsss";
  return (
    <>
      <h1>Nome: {nome}</h1>
      <h1>R$: {preco},00</h1>
      <h1>Descricao: {descricao}</h1>
    </>
  );
}

function UserProfile() {
  const user = {
    nome: "Leozinho",
    profissao: "Programador",
    idade: 26,
  };

  return (
    <>
      <h1>Nome: {user.nome}</h1>
      <h1>profissao: {user.profissao}</h1>
      <h1>idade: {user.idade}</h1>
    </>
  );
}

function OrderSummary() {
  const order = {
    customer: "Leozinho",
    product: "Macbook",
    quantity: 2,
    price: 350,
  };

  function saudacao(nome) {
    return "Bom dia: " + nome;
  }

  return (
    <>
      <p>customer: {saudacao(order.customer)}</p>
      <p>product: {order.product}</p>
      <p>quantity: {order.quantity}</p>
      <p>price: {order.price}</p>
      <p>total: {order.quantity * order.price}</p>
    </>
  );
}

function ProductInfo() {
  const produto = {
    name: "Processador",
    price: 700,
    discount: 200,
  };

  function subtracao(valor1, valor2) {
    return valor1 - valor2;
  }

  return (
    <>
      <p>Name: {produto.name}</p>
      <p>price: {produto.price}</p>
      <p>discount: {produto.discount}</p>
      <p>price finally JSX: {produto.price - produto.discount}</p>
      <p>
        price finally function: {subtracao(produto.price, produto.discount)}
      </p>
    </>
  );
}

function ProductCard() {
  const objeto = {
    name: "Notebook",
    price: 1000,
    discount: 500,
    stock: 3,
    image: imagem,
  };

  function disponibilidade(mensagem) {
    return "Temos " + mensagem + " Em Estoque";
  }

  return (
    <>
      <img src={objeto.image} alt="imagem do diretorio" />
      <p>{objeto.name}</p>
      <p>{objeto.price}</p>
      <p>{objeto.discount}</p>
      <p>{objeto.price - objeto.discount}</p>
      <p>{objeto.stock}</p>
      <p>{disponibilidade(objeto.stock)}</p>
    </>
  );
}
