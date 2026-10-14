export function ProductActions() {
  function handleSelect(produto: string) {
    console.log(`Produto selecionado: ${produto}`);
  }

  return (
    <>
      <button onClick={() => handleSelect("Teclado")}>Teclado</button>
      <button onClick={() => handleSelect("Mouse")}>Mouse</button>
      <button onClick={() => handleSelect("Monitor")}>Monitor</button>
    </>
  );
}
