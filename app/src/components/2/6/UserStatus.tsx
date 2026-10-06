type UserStatusProps = {
  isLoggedIn: boolean;
};

export function UserStatus({ isLoggedIn }: UserStatusProps) {
  return <p>Usuario {isLoggedIn ? "conectado" : "desconectado"}</p>;
}
