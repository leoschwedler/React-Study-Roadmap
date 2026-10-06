type ProductStatusProps = {
  available: boolean;
  name: string;
};

export function ProductStatus({ available, name }: ProductStatusProps) {
  const mensagem = available ? "Disponivel" : "Indisponivel";

  return (
    <>
      <h1>Name: {name}</h1>
      <p>Disponivel: {mensagem}</p>
    </>
  );
}
