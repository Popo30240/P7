import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Card() {
  const [Data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Data/Data.json') // Assure-toi que ce fichier est bien dans le dossier public
      .then((response) => {
        if (!response.ok) throw new Error('Fichier JSON non trouvé');
        return response.json();
      })
      .then((json) => {
        if (!json || json.length === 0) {
          navigate('/404');
        } else {
          setData(json);
        }
      })
      .catch((error) => {
        console.error('Erreur chargement :', error);
        navigate('/404');
      });
  }, [navigate]);

  return (
    <div className="card-container">
      {Data.map((logement) => (
        <Link to={`/accommodation/${logement.id}`} key={logement.id}>
          <div className="card">
            <p>Titre de la location</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;