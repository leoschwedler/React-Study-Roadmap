export function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
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
