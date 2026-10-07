export function ContactForm() {
  function handleSubmit() {
    console.log("Formulário enviado!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inNome">Nome:</label>
      <input type="text" name="inNome" />
      <button type="submit">Enviar</button>
    </form>
  );
}
