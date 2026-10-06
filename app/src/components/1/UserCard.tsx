type UserCardProps = {
  name: string;
  profession: string;
};

export function UserCard({ name, profession }: UserCardProps) {
  return (
    <>
      <h2>Bom dia {name}</h2>
      <h2>Sua profissao é: {profession}</h2>
    </>
  );
}
