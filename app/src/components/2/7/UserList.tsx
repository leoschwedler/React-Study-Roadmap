import { Fragment } from "react/jsx-runtime";

export function UserList() {
  const usuarios = [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
    { id: 4, name: "Usuario 4" },
    { id: 5, name: "Usuario4" },
  ];

  return (
    <>
      <ul>
        {usuarios.map((usuario) => {
          return (
            <Fragment key={usuario.id}>
              <li>
                Id: {usuario.id} Nome: {usuario.name}
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
}
