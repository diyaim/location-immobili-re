import { useEffect, useState } from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import bannerImg from "../assets/banner.svg";

export default function Accueil() {
  const [properties, setProperties] = useState([]); //déclaration du tableau vide des appartements

  const [isLoading, setIsLoading] = useState(true); // affiche "chargement…" au début
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch("http://localhost:8080/api/properties")
      .then((response) => {
           if (!response.ok) {
          setError(`Erreur (code ${response.status})`);
          return null; // on stoppe la chaîne pour ne pas faire response.json()
      }
      return response.json();
    })
      .then((list) => {
        if (list === null) return;
        setProperties(list);
      })
      .catch((err) => {
       console.log(err);
        setError("Impossible de charger les logements.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); //recharge qu'une seule fois

  if (isLoading) {
    return (
      <div className="container">
        <Banner imageUrl={bannerImg} title="Chez vous, partout et ailleurs" alt="Paysage" />
        <div className="chargement">chargement…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <Banner imageUrl={bannerImg} title="Chez vous, partout et ailleurs" alt="Paysage" />
        <div className="error" style={{ marginTop: 16 }}>{error}</div>
      </div>
    );
  }
  return (
    <div className="container">
      <Banner
        imageUrl={bannerImg}
        title="Chez vous, partout et ailleurs"
        alt="Paysage"
      />

      <section className="cards_grid">
        {properties.map(({ id, title, cover }) => (
          <Card key={id} id={id} titre={title} imageUrl={cover} />
        ))}
      </section>
    </div>
  );
}

