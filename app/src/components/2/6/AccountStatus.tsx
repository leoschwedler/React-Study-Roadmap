export function AccountStatus({ name, isLoggedIn, isAdmin }) {
  if (isLoggedIn) {
    return (
      <>
        <p>Nome: {name}</p>
        {isAdmin ? <p>Administrador</p> : <p>Usuário comum</p>}
      </>
    );
  } else {
    return (
      <>
        <h1>Faça login</h1>
        <p>Nome: {name}</p>
      </>
    );
  }
}
