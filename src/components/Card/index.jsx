import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ logement }) {
  return (
    <Link
      to={`/accommodation/${logement.id}`}
      className="container-home__card"
      style={{
        backgroundImage: `url(${logement.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    <p>{logement.title}</p>
    </Link>
  );
}

export default Card;
