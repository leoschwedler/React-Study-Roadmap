export function InputLogger() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <input type="text" placeholder="Digite Aqui" onChange={handleChange} />
  );
}
