import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-orange.png'
 
function NavBar() {
    return (
            <nav>
                <img src={logo} alt='Logo du site Kasa' className='kasa-logo' />
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>
            </nav>
    )
}

export default NavBar