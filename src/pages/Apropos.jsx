import Banner from "../components/Banner.jsx";
import Collaps from "../components/Collaps.jsx";
import Banner2 from "../assets/banner2.svg";

const aboutContent = [
  {
    id: 1,
    titre: "Fiabilité",
    texte:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes. ",
  },
  {
    id: 2,
    titre: "Respect",
    texte:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: 3,
    titre: "Service",
    texte:
      "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    id: 4,
    titre: "Sécurité",
    texte:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default function Apropos() {
  return (
    <div className="container">
      <Banner imageUrl={Banner2} alt="Montagnes" />

      <section className="apropos-collaps">
        {aboutContent.map(({ id, titre, texte }) => (
          <Collaps key={id} title={titre} text={texte} />
        ))}
      </section>
    </div>
  );
}
