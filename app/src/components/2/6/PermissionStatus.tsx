import type { ReactNode } from "react";

type PermissionStatusProps = {
  name: string;
  isLoggedIn: boolean;
  role: "admin" | "user" | "visitor";
};

export function PermissionStatus({
  name,
  isLoggedIn,
  role,
}: PermissionStatusProps) {
  let content: ReactNode;
  if (role === "admin") {
    content = <p>Acesso administrativo</p>;
  } else if (role === "user") {
    content = <p>Acesso de usuário</p>;
  } else {
    content = <p>Acesso de visitante</p>;
  }

  if (!isLoggedIn) {
    return (
      <>
        <h1>Faca Login</h1>
        <p>{name}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>{name}</h1>
        {content}
      </>
    );
  }
}
