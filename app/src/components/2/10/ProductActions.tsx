export function ProductActions() {
  function handleSelect(produto: string) {
    console.log(`Produto selecionado: ${produto}`);
  }

  return (
    <>
      <button onClick={() => handleSelect("Teclado")}></button>
      <button onClick={() => handleSelect("Mouse")}></button>
      <button onClick={() => handleSelect("Monitor")}></button>
    </>
  );
}
