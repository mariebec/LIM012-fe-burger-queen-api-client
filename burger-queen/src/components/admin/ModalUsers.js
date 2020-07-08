import React, {useState, Fragment} from 'react';

const ModalUsers = () => {
  const [user, setUser] = useState ({
    email: "",
    password:"",
    roles: { option: false }
  })

const handleInputChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value});
  
  console.log(user)
} 

// const handleSelectChange = (e) =>{
//   setUser({...user, [e.target.roles]: e.target.value})
//   console.log(user)
// }
const handleSave = (event) => {
  event.preventDefault();
  console.log('aqui se deberia guardar todo')

}


  return (
    <Fragment>
        <section>
          <div>
            <p>Agregar usuario</p>
            <form className="form-user" >
              <label htmlFor="input-email">E-MAIL:</label>
              <input id ="input-email" placeholder="Ingrese un e-mail" name="email" type="e-mail" onChange={handleInputChange} /> 
              <label htmlFor="input-password">CLAVE:</label>
              <input id ="input-password" placeholder="Ingrese la contraseña" name="password" type="password" onChange={handleInputChange} />
              <label htmlFor="input-admin">ADMIN:</label>
              <select id ="input-admin"  name="roles">
                <option value="true">SI</option>
                <option value="false">NO</option>
                
              </select>
              <button type="button" className="btn-cancelUser">Cancelar</button>
            <button type="submit" className="btn-newUser" onClick={handleSave}>Guardar</button>
          </form>
        </div>
      </section>
    </Fragment>
    
  )
}

export default ModalUsers;
