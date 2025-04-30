import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
 
function Header() {
    return (
        <nav>
            <img src={logo} alt='Logo du site Kasa' className='kasa-logo' />
            <Link to="/">Accueil</Link>
            <Link to="/survey">A propos</Link>
        </nav>
    )
}

export default Header