import logo from '../../assets/logo/logo-white.png';
import './Footer.scss';

function Footer() {
  return (
    
    <div className="container__footer">
      <img src={logo} alt="Logo Kasa" className="container__footer--logo" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;