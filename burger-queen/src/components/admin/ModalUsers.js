import React, {useState} from 'react';

const ModalUsers = () => {
  const [user, setUser] = useState ({
    email: "",
    password:"",
    roles: {option:false}
  })
// 

// const enviarDatos = (event) => {
//   event.preventDefault();
//   console.log(user.email)

// }


  return (
    <section>
      <div>
        <p>Agregar usuario</p>
        <form className="form-user" >
          <label htmlFor="input-email">E-MAIL:</label>
          <input id ="input-email" placeholder="Ingrese un e-mail" name="email" type="e-mail" /> 
          <label htmlFor="input-password">CLAVE:</label>
          <input id ="input-password" placeholder="Ingrese la contraseña" name="password" type="password" />
          <label htmlFor="input-admin">ADMIN:</label>
          <select id ="input-admin" value={setUser.roles}>
            <option value="false">NO</option>
            <option value="true">SI</option>
          </select>
          <button type="button" className="btn-cancelUser">Cancelar</button>
          <button type="submit" className="btn-newUser">Guardar</button>
        </form>
      </div>
    </section>
  )
}

export default ModalUsers;
