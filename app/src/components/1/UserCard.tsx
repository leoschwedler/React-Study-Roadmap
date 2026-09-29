// export function UserCard({ name, profession }) {
//   return (
//     <>
//       <h2>Bom dia {name}</h2>
//       <h2>Sua profissao é: {profession}</h2>
//     </>
//   );
// }

export function UserCard(props) {
  return (
    <>
      <h2>Bom dia {props.name}</h2>
      <h2>Sua profissao é: {props.profession}</h2>
    </>
  );
}
