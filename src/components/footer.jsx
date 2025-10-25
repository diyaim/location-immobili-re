import logo from "../assets/footer.svg"; // importer l'image

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_bloc">
        <img src={logo} alt="Kasa" />
      <p className="footer_text" data-testid="text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
