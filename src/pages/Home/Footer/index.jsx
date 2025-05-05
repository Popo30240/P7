import logo from '../../../assets/logo-white.png';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <img src={logo} alt="Logo Kasa" className="mb-4" />
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;