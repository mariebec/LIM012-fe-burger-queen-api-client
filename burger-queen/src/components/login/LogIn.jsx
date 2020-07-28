import React, {useState} from 'react';
import img from '../../assets/logo-fondoblanco.png';
import FormLogin from '../login/FormLogin';
import {postAuth, getUserByEmail } from '../../controller/auth';
import { useHistory } from "react-router-dom";

const LoginView = () => {
  let history = useHistory();

  const [ user, setUser ] = useState({
    userEmail: '',
    userContraseña: '',
  }); 

  const [ error, setError ] = useState({
    userEmail: false,
    userContraseña: false
  });

  const handleChangeUser = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleGetLogin = (request) => {
    const email = user.userEmail;
    const password = user.userContraseña

    const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    const notValidEmail = email.trim() === '' || !exRegEmail.test(email.trim());
    const notValidPassword = password.trim() === '' || password.trim().length < 6;

    if (notValidEmail || notValidPassword) {
      (notValidEmail) ? setError(prevState => ({ ...prevState, userEmail: true })) : setError(prevState => ({ ...prevState, userEmail: false }));
      (notValidPassword) ? setError(prevState => ({ ...prevState, userContraseña: true })) : setError(prevState => ({ ...prevState, userContraseña: false }));
      
    } else{
      postAuth({email, password}).then((resp) => {
        history.push("/categories");
        sessionStorage.setItem('login', resp.token);
        getUserByEmail(email).then((user) => {
          sessionStorage.setItem('currentRol', user.roles.admin);
          sessionStorage.setItem('currentEmail', user.email);
        })
      }).catch((err) => {
        setError(err); 
      });
      
    }
  }
  return(
    <section className="container-login">
    <div className="box-login">
      <img src={img} alt="logo" className="logo" /> 
      <FormLogin
      user={user}
      error={error}
      handleChangeUser={handleChangeUser}
      handleGetLogin={handleGetLogin}/>  
    </div>
  </section>
  )

}

export default LoginView;
