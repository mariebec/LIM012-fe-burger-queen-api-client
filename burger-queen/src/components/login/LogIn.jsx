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

  const [ error, setError ] = useState('');

  const handleChangeUser = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleGetLogin = () => {
    const email = user.userEmail;
    const password = user.userContraseña
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
  return(
    <section className="container-login">
    <div className="box-login">
      <img src={img} alt="logo" className="logo" /> 
      <FormLogin
      error={error}
      handleChangeUser={handleChangeUser}
      handleGetLogin={handleGetLogin}/>  
    </div>
  </section>
  )

}

export default LoginView;
