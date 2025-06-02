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
          // Si les données sont valides, on les stocke dans l'état
          // setData est une fonction qui met à jour l'état data
          setData(json);
        }
      } catch (error) {
        console.error('Erreur chargement :', error);
        navigate('/404');
      }
    };
    // useEffect est un hook qui permet d'exécuter du code après le rendu du composant
    // Appel de la fonction fetchData pour récupérer les donnée
    fetchData();
  }, [navigate]); // Si on est redirigé vers une autre page,
  //  on re-exécute le code jusqu'à ce que les données valides soient chargées .

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