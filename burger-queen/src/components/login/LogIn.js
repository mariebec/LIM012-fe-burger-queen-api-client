import React from 'react';
import img from '../assets/logo-fondoblanco.png';

const LoginView = () => {
    return (
        <>
         <section>
             <div><img src={img} alt="logo"></img></div>
             <form>
                 <p>Iniciar Sesión</p>
                 <div>
                     <div>
                     </div>
                     <input placeholder="Ingresa usuario">
                     </input>
                 </div>
                 <div>
                     <div>
                     </div>
                     <input placeholder="Ingresa contraseña">
                     </input>
                 </div>
                 <button>INGRESAR</button>
             </form>
         </section>
        </>
    )
}

export default LoginView;