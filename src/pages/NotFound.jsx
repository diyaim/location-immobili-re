import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound container">
      <p className="notfound_code">404</p>
      <p className="notfound_text">Oups! La page que vous demandez n’existe pas.</p>
      <Link to="/" className="notfound_link">Retourner sur la page d’accueil</Link>
    </section>
  );
}
