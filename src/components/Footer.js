import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="Footer">
    <footer>
      <p>&copy; 2024 Muebles de Madera a Mano. Todos los derechos reservados.</p>
      <p>Contacto: info@mueblesmaderamano.com | Tel: +52 1 666 555 4444</p>
      <p><Link to="inicio" smooth={true} duration={500}>Volver al inicio</Link></p>
    </footer>
    </div>
  );
};

export default Footer;