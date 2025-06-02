import { Link } from 'react-router-dom';
import "./NotFound.scss";

function NotFound() {
  return (
    
      <div className='NotFound'>
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retour sur la page d'accueil</Link>
      </div>

  );
}

export default NotFound;