export function UserProfile() {
  const objeto = {
    name: "Leonardo",
    age: 20,
    city: "Curitiba",
  };

  return (
    <>
      <p>Nome: {objeto.name}</p>
      <p>Idade: {objeto.age}</p>
      <p>Cidade: {objeto.city}</p>
    </>
  );
}
