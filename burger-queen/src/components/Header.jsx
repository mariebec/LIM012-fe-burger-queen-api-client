import React, { useState } from 'react';
import img from '../assets/logo-fondomarron.png';

const Header = ({ title, userName, admin }) => {
  const [ display, setDisplay ] = useState(false);
  
  return (
    <header className="header-menu">
      <div className="principal-menu">
        <img src={img} alt="logo" className="logo-Header" />
        <p className="title">{title}</p>
        <div className="user-logged">
          <p className="user-name">{userName}</p>
          <i className="user-icon fas fa-user"></i>
          <div className={ display ? "active menu-icon-container" : "menu-icon-container"}>
            <i className="menu-icon fas fa-bars" onClick={() => display ? setDisplay(false) : setDisplay(true)}></i>
          </div>
        </div>
      </div>
      { display && 
      <nav className="nav">
        <ul>
          <li>Pedidos listos</li>
          <li>Cocina</li>
          {admin && 
          <>
            <li>Administrar usuarios</li>
            <li>Administrar productos</li>
          </>}
          
        </ul>
      </nav>
      }
      
    </header>
  )
}

export default Header;
