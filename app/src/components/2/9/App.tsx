import HeaderCustom from "./Header";
import FooterCustom from "./Footer";
import MainCustom from "./Main";

type AppCustomProps = {
  isLoggedIn: boolean;
};

export default function AppCustom({ isLoggedIn }: AppCustomProps) {
  return (
    <>
      <HeaderCustom />
      <MainCustom isLoggedIn={isLoggedIn} />
      <FooterCustom />
    </>
  );
}
