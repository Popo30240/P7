import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function AccommodationDetails() {
  const { id } = useParams(); // récupère l'ID de l'URL
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch('/Data/Data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fichier JSON non trouvé');
        }
        return response.json();
      })
      .then((json) => {
        const item = json.find((logement) => logement.id === id);
        if (!item) {
          navigate('/404');
        } else {
          setLogement(item);
        }
      })
      .catch((error) => {
        console.error('Erreur chargement du JSON :', error);
        navigate('/404');
      });
  }, [id, navigate]);

  if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <article className="card">
      <img src={logement.cover} alt={logement.title} className="card-image" />
      <h2 className="card-title">{logement.title}</h2>
      <p className="card-town">{logement.location}</p>
      <div className="card-tags">
        {logement.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <p className="card-description">{logement.description}</p>
      <ul className="card-equipments">
        {logement.equipments.map((eq, i) => (
          <li key={i}>{eq}</li>
        ))}
      </ul>
      <p className="card-rating">Note : {logement.rating}/5</p>
      <div className="card-host">
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} className="card-host-picture" />
      </div>
    </article>
  );
}

export default AccommodationDetails;