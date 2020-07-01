import React from 'react';
import img from '../../assets/logo-fondoblanco.png'

const LoginView = () => {
    return (
         <section className="container-login"> 
             <div className="container-border"> 
               <img src={img} alt="logo" className="logo"></img>
                    <form className="login-form">
                        <p>Inicia Sesión</p>
                        <div className="box-user">
                            <div>
                            </div>
                            <input placeholder="Ingresa usuario">
                            </input>
                        </div>
                        <div className="box-password">
                            <div>
                            </div>
                            <input placeholder="Ingresa contraseña">
                            </input>
                        </div>
                        <button className="btn-login">INGRESAR</button>
                    </form>
             </div>
         </section>
    )
}

export default LoginView;