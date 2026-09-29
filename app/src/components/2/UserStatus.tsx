export function UserStatus({ isLoggedIn }) {
  return <p>Usuario {isLoggedIn ? "conectado" : "desconectado"}</p>;
}
