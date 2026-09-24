import "../../ProductDetailApp.css";

export function Header() {
  return (
    <header>
      <h1 className="title">Produto</h1>
      <a href="https://www.youtube.com/" target="_blank">
        Youtube
      </a>
    </header>
  );
}

export function Main() {
  return (
    <main>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVvbBffyxlLF4-APspNYoS3C3jIVEMS_50Q_dse-gaLBuyV15HpGmS0VL&s=10"
        alt="Imagem da net"
      />
      <h2>Internet</h2>
      <p>Produto de Internet</p>
      <p>R$:500,00</p>
      <button type="button">Comprar</button>
    </main>
  );
}

export function Footer() {
  return (
    <footer>
      <p>Footer da pagina</p>
    </footer>
  );
}
