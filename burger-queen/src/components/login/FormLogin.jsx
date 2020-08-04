import React, {useState} from 'react';
import {postAuth, getUserByEmail } from '../../controller/auth';
import { useHistory } from "react-router-dom";


const FormLogin = () => {
  let history = useHistory();

  const [ currentUser, setCurrentUser ] = useState({
    currentEmail: '',
    currentPassword: '',
  }); 

  const [ error, setError ] = useState({
    email: false,
    password: false,
    message: ''
  });

  const handleChangeUser = (e) => {
    setCurrentUser({...currentUser, [e.target.name]: e.target.value});
  }

  const handleGetLogin = () => {
    const email = currentUser.currentEmail;
    const password = currentUser.currentPassword;

    const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    const notValidEmail = email.trim() === '' || !exRegEmail.test(email.trim());
    const notValidPassword = password.trim() === '';

    if (notValidEmail || notValidPassword) {
      (notValidEmail) ? setError(prevState => ({ ...prevState, email: true })) : setError(prevState => ({ ...prevState, email: false }));
      (notValidPassword) ? setError(prevState => ({ ...prevState, password: true })) : setError(prevState => ({ ...prevState, password: false }));
      
    } else{
      console.log(email, password)
      postAuth({email, password}).then((resp) => {
        console.log('Lo que retorna la API', resp);
        // sessionStorage.setItem('login', resp.token);
        getUserByEmail(email).then((user) => {
          history.push("/categories");
          sessionStorage.setItem('currentRol', user.roles.admin);
          sessionStorage.setItem('currentEmail', user.email);
        })
      }).catch((err) => {
        setError(prevState => ({ ...prevState, message: err }))
      });
    }
  }

  return (
    <form className="login-form">
      <p>Inicia sesión</p>
      <div className={error.email ? "box-user box-error" : "box-user" }>
        <i className="user-icon fas fa-user"></i>
        <input 
          defaultValue={currentUser.currentEmail} 
          // id="email" 
          name="currentEmail" 
          type="email" onChange={handleChangeUser}
          placeholder= {error.email ?  "Campo requerido" : "Ingrese el email" }
          className={ error.email ? "user errors" : "user" }/>
      </div>
      <div className={ error.password ? "box-user box-error" : "box-user" }>
        <i className="user-icon fas fa-lock"></i>
        <input defaultValue={currentUser.currentPassword} 
          // id="password" 
          name="currentPassword" 
          type="password" onChange={handleChangeUser}
          placeholder= {error.password ?  "Campo requerido" : "Ingrese la contraseña" }
          className={error.password ? "user errors" : "user" }/>
      </div>
      { error.message && <span>{error.message}</span> }
      <button type="button" className="btn-login" onClick={handleGetLogin}>INGRESAR</button>
    </form>
  )
};

export default FormLogin;
