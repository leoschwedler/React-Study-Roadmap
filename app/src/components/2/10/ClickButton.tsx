export function ClickButton() {
  function handleClick() {
    console.log("Botão clicado!");
  }

  return <button onClick={handleClick}>Clique Aqui</button>;
}
