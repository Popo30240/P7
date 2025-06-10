import defaultImage from '../../assets/image/image-shore.png';
import './Banner.scss';

// Cette fonction qui utilise la destructuration
// cela signifie que si aucune de ces propriétés n'est passée,
// elle prendra les valeurs par défaut définies dans les paramètres de la fonction.
function Banner({ image = defaultImage, showTitle = true, title = "Chez vous, partout et ailleurs" }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner__image" />
      {showTitle && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;