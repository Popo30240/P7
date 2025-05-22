import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-orange.png'
import './NavBar.scss';
 
function NavBar() {
    return (
            <nav className='navBar'>
                <img src={logo} alt='Logo du site Kasa' className='navBar__logo' />
                <div className='navBar__links'>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </div>
            </nav>
    )
}

export default NavBar