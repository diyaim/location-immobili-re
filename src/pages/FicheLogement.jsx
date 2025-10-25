import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import Gallery from "../components/Gallery.jsx";
import Collapse from "../components/Collaps.jsx";
import Rating from "../components/Rating.jsx";
import Host from "../components/Host.jsx";

export default function FicheLogement() {
  const { id } = useParams(); //récupere l'id de l'url 

  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorCode, setErrorCode] = useState(null); // 404, 500

  useEffect(() => {
    setIsLoading(true);
    setErrorCode(null);
    setProperty(null);

    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) {
          
          setErrorCode(res.status);
          return null; // on stoppe la chaîne
        }
        return res.json();
      })
      .then((data) => {
        if (data === null) return;

        
        const notFound =
          !data ||
          data === "Not found" ||
          (data && !data.id); 

        if (notFound) {
          setErrorCode(404);
          return;
        }

        setProperty(data);
      })
      .catch((err) => {
        console.error(err);
       
        setErrorCode(500);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  
  if (isLoading) return <div className="chargement">chargement…</div>;
  if (errorCode === 404) return <Navigate to="/404" replace />;
  if (errorCode && errorCode !== 404)
    return <div className="error">Erreur (code {errorCode})</div>;
  

  return (
    <div className="container ">
      {/* affichage de la gallerie  */}
      <Gallery images={property.pictures} alt={property.title} />

      <div className="fiche">
        <div>
          {/* affichage des infos de property */}
          <h1 className="fiche_title">{property.title}</h1>
          <p className="fiche_location">{property.location}</p>

          <div className="fiche_tags">
            {property.tags.map((titre) => (
              <p className="tag" key={titre}>
                {titre}
              </p>
            ))}
          </div>
        </div>
        {/* affichage des infos de host */}
        <div className="fiche_host">
          <Host name={property.host.name} image={property.host.picture} />
          <Rating value={property.rating} />
        </div>
      </div>

      <div className="fiche_collaps">
        <Collapse title="Description">
          <p>{property.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {property.equipments.map((list) => (
              <li key={list}>{list}</li> //quand ya map il faut une key
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}
