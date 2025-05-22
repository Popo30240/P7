import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Card from '../../components/Card';
import Banner from '../../components/Banner';

function Home() {
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
    <main>
      <Banner />
      <div className="container-home">
        {Data.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))} 
      </div>
    </main>
  );
}

export default Home;