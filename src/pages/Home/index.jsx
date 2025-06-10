import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Components
import Card from '../../components/Card';
import Banner from '../../components/Banner';

function Home() {

  // Hook pour la navigation
  // Utilisé pour rediriger vers une autre page
  const navigate = useNavigate();

  // Initialisation un tableau vide pour stocker les données
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Data/Data.json');
        if (!response.ok) throw new Error('Fichier JSON non trouvé');
        const json = await response.json();
        if (!json || json.length === 0) {
          navigate('/404');
        } else {
          setData(json);
        }
      } catch (error) {
        console.error('Erreur chargement :', error);
        navigate('/404');
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div>
      <Banner />
      <div className="container-home">
        {data.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))} 
      </div>
    </div>
  );
}

export default Home;