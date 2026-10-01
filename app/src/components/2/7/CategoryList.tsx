export function CategoryList() {
  const categorias = [
    { id: 1, name: "Categoria 1" },
    { id: 2, name: "Categoria 2" },
    { id: 3, name: "Categoria 3" },
    { id: 4, name: "Categoria 4" },
    { id: 5, name: "Categoria 5" },
  ];

  return (
    <>
      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={categoria.id}>
              Posicao {index + 1} {categoria.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
