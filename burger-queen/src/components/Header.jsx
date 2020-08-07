/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/logo-fondomarron.png';

const Header = ({ title }) => {
  const [display, setDisplay] = useState(false);
  const currentUSerRol = sessionStorage.getItem('currentRol');
  const currentUSerEmail = sessionStorage.getItem('currentEmail');
  return (
    <header className="header-menu">
      <div className="principal-menu">
        <img src={img} alt="logo" className="logo-Header" />
        <p className="title">{title}</p>
        <div className="user-logged">
          <p className="user-name">{currentUSerEmail}</p>
          <i className="user-icon fas fa-user" />
          <div className={display ? 'active menu-icon-container' : 'menu-icon-container'}>
            <i className="menu-icon fas fa-bars" onClick={() => (display ? setDisplay(false) : setDisplay(true))} role="button" tabIndex={0} />
          </div>
        </div>
      </div>
      { display
      && (
      <nav className="nav">
        <ul>
          <Link to="/menu">
            <li>Menú</li>
          </Link>
          <Link to="/orders">
            <li>Pedidos listos</li>
          </Link>
          <Link to="/kitchen">
            <li>Cocina</li>
          </Link>
          {currentUSerRol === 'true'
          && (
          <>
            <Link to="/userlist">
              <li>Administrar usuarios</li>
            </Link>
            <Link to="/productlist">
              <li>Administrar productos</li>
            </Link>
          </>
          )}
        </ul>
      </nav>
      )}

    </header>
  );
};

export default Header;
