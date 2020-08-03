import React from 'react';
import img from '../../assets/logo-fondoblanco.png';
import FormLogin from '../login/FormLogin';

const LoginView = () => {
  return(
    <section className="container-login">
    <div className="box-login">
      <img src={img} alt="logo" className="logo" /> 
      <FormLogin/>  
    </div>
  </section>
  )
}

export default LoginView;
