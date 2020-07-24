import React, {useState} from 'react';
import img from '../../assets/logo-fondoblanco.png';
import FormLogin from '../login/FormLogin';
import {postAuth, getUserByEmail } from '../../controller/auth';

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
    const email = user.userEmail;
    const password = user.userContraseña
    console.log (email, password)
    postAuth({email, password}).then((resp) => {
      sessionStorage.setItem('login', JSON.stringify ({
        login:true,
        token:resp.token
      })) 
      getUserByEmail(email).then((user) => {
        console.log(user)
        sessionStorage.setItem('currentUser', JSON.stringify ({
          currentUser: user
        })) 
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
