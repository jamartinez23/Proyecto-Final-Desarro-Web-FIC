import React from 'react';
import { Link } from 'react-scroll';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="inicio" smooth={true} duration={500}>Inicio</Link></li>
        <li><Link to="cocinas" smooth={true} duration={500}>Cocinas</Link></li>
        <li><Link to="salas" smooth={true} duration={500}>Salas</Link></li>
        <li><Link to="dormitorios" smooth={true} duration={500}>Dormitorios</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
