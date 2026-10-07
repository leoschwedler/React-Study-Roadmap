export function ActionButtons() {
  function handleSave() {
    console.log("Salvou!");
  }

  function handleCancel() {
    console.log("Cancelou!");
  }

  return (
    <>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={handleCancel}>Cancelar</button>
    </>
  );
}
