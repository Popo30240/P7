import { Link } from 'react-router-dom'
import logo from '../../assets/logo-orange.png'
 
function Nav() {
    return (
            <nav>
                <img src={logo} alt='Logo du site Kasa' className='kasa-logo' />
                <Link to="/">Accueil</Link>
                <Link to="/survey">A propos</Link>
            </nav>
    )
}

export default Nav