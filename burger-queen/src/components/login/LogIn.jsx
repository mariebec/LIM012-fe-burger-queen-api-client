import React, {useState} from 'react';
import img from '../../assets/logo-fondoblanco.png';
import FormLogin from '../login/FormLogin';
import {postAuth } from '../../controller/auth';

const LoginView = () => {

  const [ user, setUser ] = useState({
    userEmail: '',
    userContraseña: '',
    login: false
  }); 

  const [ error, setError ] = useState('');

  const handleChangeUser = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleGetLogin = () => {
    postAuth(user).then((resp) => {
      console.warm('resp', resp)
      localStorage.setItem('login', JSON.stringify ({
        login:true,
        token:resp.token
      })) 
    }).catch((err) => {
      setError(err); 
    });
  }
  console.log(error);
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
