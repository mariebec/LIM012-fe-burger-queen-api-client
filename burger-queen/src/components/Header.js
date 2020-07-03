import React from 'react';
import img from '../assets/logo-fondomarron.png';

const Header = () => {
  return (
    <header className="header-menu">
      <img src={img} alt="logo" className="logo-Header" />
      <p className="title">TOMAR PEDIDOS</p>
      <div className="user-logged">
        <p className="user-name">Pedro Campbell</p>
        <i className="user-icon fas fa-user"></i>
        <i className="menu-icon fas fa-bars"></i>
      </div>
    </header>
  )
}

export default Header;