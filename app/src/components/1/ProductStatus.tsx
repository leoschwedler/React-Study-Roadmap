export function ProductStatus(props) {
  let mensagem;

  if (props.available) {
    mensagem = "Disponivel";
  } else {
    mensagem = "Indisponivel";
  }

  return (
    <>
      <h1>Name: {props.name}</h1>
      <p>Disponivel: {mensagem}</p>
    </>
  );
}
