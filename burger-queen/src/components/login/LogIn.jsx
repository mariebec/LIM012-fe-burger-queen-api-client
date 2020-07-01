import React from 'react';
import img from '../../assets/logo-fondoblanco.png';

const LoginView = () => (
  <section className="container-login">
    <div className="container-border">
      <div className="box-login">
        <img src={img} alt="logo" className="logo" />
        <form className="login-form">

          <p>Inicia Sesión</p>
          <div className="box-user">
            <div />
            <input placeholder="Ingresa usuario" className="user" />
          </div>
          <div className="box-password">
            <div />
            <input placeholder="Ingresa contraseña" className="password" />
          </div>
          <button type="button" className="btn-login">INGRESAR</button>

        </form>

      </div>
    </div>
  </section>
);

export default LoginView;
