import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Accommodation.scss'; 
import DropDown from '../../components/DropDown';

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
      <img src={logement.cover} alt={logement.title} className="card__image" />
      <div className="card__contenair">
        <div className="card__contenair-title-town-tags">
          <h2 className="card__title">{logement.title}</h2>
          <p className="card__town">{logement.location}</p>
          <div className="card__tags">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="card__Contenair-rating-host">
          <div className="card__rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
              key={star}
              className={`star ${star <= logement.rating ? 'filled' : ''}`}
              width="25" height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"/>
              </svg>
            ))}
          </div>
          <div className="card__host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="card__host-picture" />
          </div>
        </div>
      </div>
      <div className="card-contenair__DropDown">
        <DropDown title="Description">
        <p className="card__description">{logement.description}</p>
        </DropDown>
        <DropDown title="Équipements">
          <ul className="card__equipments">
            {logement.equipments.map((eq, i) => (
              <li key={i}>{eq}</li>
            ))}
          </ul>
        </DropDown>
      </div>
    </article>
  );
}

export default AccommodationDetails;