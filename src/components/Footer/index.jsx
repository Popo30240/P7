import logo from '../../assets/logo/logo-white.png';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="container__footer">
        <img src={logo} alt="Logo Kasa" className="container__footer--logo" />
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;