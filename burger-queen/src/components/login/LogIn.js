import React from 'react';
import img from '../../assets/logo-fondoblanco.png';

const LoginView = () => (
  <section className="container-login">
    <div className="box-login">
      <img src={img} alt="logo" className="logo" />
        <form className="login-form">
          <p>Inicia sesión</p>
          <div className="box-user">
            <i className="user-icon fas fa-user"></i>
            <input placeholder="Usuario" className="user" />
          </div>
          <div className="box-user">
          <i className="user-icon fas fa-lock"></i>
            <input placeholder="Contraseña" className="user" type="password"/>
          </div>
          <button type="button" className="btn-login">INGRESAR</button>
        </form>
    </div>
  </section>
);

export default LoginView;
