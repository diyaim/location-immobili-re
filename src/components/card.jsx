import { Link } from "react-router-dom";

export default function Card({ id, titre, imageUrl }) {
  return (
    <Link className="card" to={`/logement/${id}`}>
      <img className="card_img" src={imageUrl} alt={titre} />
      <h2 className="card_title" data-testid="title">{titre}</h2>
    </Link>
  );
}
