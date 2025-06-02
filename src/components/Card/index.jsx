import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ logement }) {
  return (
    <Link
      to={`/accommodation/${logement.id}`}
      className="container-home__Card"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${logement.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    <p>{logement.title}</p>
    </Link>
  );
}

export default Card;
