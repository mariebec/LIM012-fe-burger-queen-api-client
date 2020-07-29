import React from 'react';

const FormLogin = ({handleChangeUser, handleGetLogin, error, user}) => {
  return (
    <form className="login-form">
          <p>Inicia sesión</p>
          <div className={ error.userEmail ? "box-user box-error" : "box-user" }>
            <i className="user-icon fas fa-user"></i>
            <input 
                  defaultValue={user.userEmail} 
                  id="userEmail" 
                  name="userEmail" 
                  type="email" onChange={handleChangeUser}
                  placeholder= {error.userEmail ?  "Campo requerido" : "Ingrese el email" }
                  className={ error.userEmail ? "user errors" : "user" }/>
          </div>
          <div className={ error.userContraseña ? "box-user box-error" : "box-user" }>
          <i className="user-icon fas fa-lock"></i>
            <input defaultValue={user.userContraseña} 
                  id="userContraseña" 
                  name="userContraseña" 
                  type="password" onChange={handleChangeUser}
                  placeholder= {error.userContraseña ?  "Campo requerido" : "Ingrese la contraseña" }
                  className={ error.userContraseña ? "user errors" : "user" }/>
          </div>
          <button type="button" className="btn-login" onClick={handleGetLogin}>INGRESAR</button>
        </form>
  )
  
};

export default FormLogin;