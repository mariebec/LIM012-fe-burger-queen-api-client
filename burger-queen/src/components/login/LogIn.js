import React from 'react';
import img from '../../assets/logo-fondoblanco.png'

const LoginView = () => {
    return (
         <section className="container-login"> 
             <div className="container-border"> 
             <div className="box-login">
               <img src={img} alt="logo" className="logo"></img>
                    <form className="login-form">
                    
                        <p>Inicia Sesión</p>
                        <div className="box-user">
                            <div>
                            </div>
                            <input placeholder="Ingresa usuario" className="user">
                            </input>
                        </div>
                        <div className="box-password">
                            <div>
                            </div>
                            <input placeholder="Ingresa contraseña" className="password">
                            </input>
                        </div>
                        <button className="btn-login">INGRESAR</button>
               
                       
                    </form>

                    </div>    
             </div>
         </section>
    )
}

export default LoginView;