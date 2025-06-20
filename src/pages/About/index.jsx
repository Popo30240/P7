// Styles
import './About.scss';

// components
import DropDown from '../../components/DropDown';
import Banner from '../../components/Banner';

// images
import BannerAbout from '../../assets/image/image-montain.png';

function APropos() {
  return (

    <div>
      
      <Banner image={BannerAbout} showTitle={false} />
      
        <DropDown title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </DropDown>

        <DropDown title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </DropDown>

        <DropDown title="Service">
          <p>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
        </DropDown>

        <DropDown title="Sécurité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </DropDown>

    </div>

  );
}

export default APropos;