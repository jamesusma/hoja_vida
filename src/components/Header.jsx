import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header text-center">
      <img 
        src="/images/mi-foto.jpg" 
        alt="Foto de perfil" 
        className="foto-perfil"
      />
      <h1 className="titulo">Mi Nombre</h1>
      <h3 className="subtitulo">Desarrollador Web</h3>
    </header>
  );
}

export default Header;
