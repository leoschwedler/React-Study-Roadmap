import { useState } from "react";

export function ProfilePreview() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");

  function handleNome(event) {
    setNome(event.target.value);
  }

  function handleCidade(event) {
    setCidade(event.target.value);
  }

  return (
    <>
      <div>
        <label htmlFor="nome-usuario">Nome </label>
        <input
          type="text"
          id="nome-usuario"
          value={nome}
          onChange={handleNome}
        ></input>
      </div>

      <div>
        <label htmlFor="cidade">Cidade </label>
        <input
          type="text"
          id="cidade"
          value={cidade}
          onChange={handleCidade}
        ></input>
      </div>

      <div>
        <p>Perfil</p>
        <p>
          {nome} mora em {cidade}
        </p>
      </div>
    </>
  );
}
