import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ imagen1, userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={imagen1} alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <button className="navbar-button">🏠 Inicio</button>
        <button className="navbar-button">⚙️ Configuración</button>
      </div>
      <div className="navbar-user">
        <button onClick={toggleMenu} className="user-button">
          <span className="user-icon">👤</span> {userName}
        </button>
        {isMenuOpen && (
          <div className="user-menu">
            <button className="logout-button">Cerrar sesión</button>
          </div>
        )}
        <select className="language-selector">
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
