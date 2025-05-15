import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Home.scss';

function Card() {
  const [Data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Data/Data.json')
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
    <div className="container__home">
      {Data.map((logement) => (
        <Link
          to={`/accommodation/${logement.id}`}
          key={logement.id}
          className="container__home--card">
            <p>{logement.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Card;