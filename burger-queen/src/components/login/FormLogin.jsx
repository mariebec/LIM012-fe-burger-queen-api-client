import React from 'react';

const FormLogin = ({handleChangeUser, handleGetLogin}) => {
  return (
    <form className="login-form">
          <p>Inicia sesión</p>
          <div className="box-user">
            <i className="user-icon fas fa-user"></i>
            <input placeholder="Usuario" 
                  className="user" 
                  id="userEmail" 
                  name="userEmail" 
                  type="email" onChange={handleChangeUser}/>
          </div>
          <div className="box-user">
          <i className="user-icon fas fa-lock"></i>
            <input placeholder="Contraseña" 
                  className="user" 
                  id="userContraseña" 
                  name="userContraseña" 
                  type="password" onChange={handleChangeUser}/>
          </div>
          <button type="button" className="btn-login" onClick={handleGetLogin}>INGRESAR</button>
        </form>
  )
  
};

export default FormLogin;