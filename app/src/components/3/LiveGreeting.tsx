import { useState } from "react";

export function LiveGreeting() {
  const [texto, setTexto] = useState("");

  function handleTexto(evento) {
    setTexto(evento.target.value);
  }

  return (
    <>
      <input type="text" value={texto} onChange={handleTexto} />
      <p>Ola {texto}</p>
    </>
  );
}
