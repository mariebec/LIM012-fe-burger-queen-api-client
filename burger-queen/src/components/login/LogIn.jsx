import React, {useState} from 'react';
import img from '../../assets/logo-fondoblanco.png';
import FormLogin from '../login/FormLogin';

const LoginView = () => {

  const [ user, setUser ] = useState({
    userEmail: '',
    userContraseña: ''
  }); 

  const handleChangeUser = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleGetLogin = () => {
    let account = { user}
    if (account) {
      console.log ('account', account)
    }
  }

  return(
    <section className="container-login">
    <div className="box-login">
      <img src={img} alt="logo" className="logo" />
      <FormLogin
      handleChangeUser={handleChangeUser}
      handleGetLogin={handleGetLogin}/>  
    </div>
  </section>
  )

}


export default LoginView;
