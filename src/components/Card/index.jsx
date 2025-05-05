import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Card() {
  const [Data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Data/Data.json') // si ton fichier est dans public/Data/Data.json
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fichier JSON non trouvé');
        }
        return response.json();
      })
      .then((json) => setData(json))
      .catch((error) => {
        console.error('Erreur lors du chargement du JSON :', error);
        navigate('/404'); // redirection vers la page d’erreur
      });
  }, [navigate]);

    return (
        <main>
            <div className='card-container'>
                {Data.map((item) => (
                    <article key={item.id} className='card'>
                        <img src={item.cover} alt={item.title} className='card-image' />
                        {/* <img src={item.pictures} alt={item.title} className='card-pictures' /> */}
                        <h2 className='card-title'>{item.title}</h2>
                        <p className='card-town'>{item.location}</p>
                        <p className='card-tags'>{item.tags}</p>
                        <p className='card-description'>{item.description}</p>
                        <ul className='card-equipments'>
                            {item.equipments.map((equipment, index) => (
                                <li key={index} className='card-equipment'>{equipment}</li>
                            ))}
                        </ul>
                        <p className='card-rating'>{item.rating}</p>
                        <p className='card-host'>{item.host.name}</p>
                        <img src={item.host.picture} alt={item.host.name} className='card-host-picture' />
                    </article>
                ))}
            </div>
        </main>
    );
}

export default Card;