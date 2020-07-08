import React, {useState} from 'react';
import Header from '../Header';

const ModalUsers = () => {
  const [user, setUser] = useState ({
    email: "",
    password:"",
    roles: { admin: false }
  })

const handleInputChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value});
} 

const handleSelectChange = (e) =>{
  setUser({...user, roles: { admin: e.target.value === "SI" ? true : false }})
}

const handleCancel = () => {
  
}

const handleSave = (event) => {
  
  event.preventDefault();
  const userEmail = user.email.trim();
  const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  const userPassword = user.password.trim();

  if (userEmail === '' || !exRegEmail.test(userEmail)) {
    console.log('email invalido');
  } else if (userPassword === '' || userPassword.length < 6) {
    console.log('contraseña invalida');
  } else {
    fetch('http://localhost:3002/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error))
      .then((resp) => console.log(resp));
  }
};


  return (
    <>
      <Header/>
      <section className="bg-img-fries">
        <div className="modal-window">
          <p className="title-modal">Agregar usuario</p>
          <form className="form-modal" >
            <div className="form-container">
              <div>
                <label htmlFor="input-email" className="label-text">E-MAIL:</label>
                <input 
                  id ="input-email" 
                  placeholder="Ingrese un e-mail" 
                  name="email" type="email" 
                  className="input-modal"
                  onChange={handleInputChange} /> 
              </div>
              <div>
                <label htmlFor="input-password" className="label-text">CLAVE:</label>
                <input 
                  id ="input-password" 
                  placeholder="Ingrese la contraseña" 
                  name="password" type="password"
                  className="input-modal" 
                  onChange={handleInputChange} />
              </div>
              <div>
                <label htmlFor="input-admin" className="label-text">ADMIN:</label>
                <div className="box-select">
                  <select id ="input-admin" onChange={handleSelectChange} className="select-modal">
                    <option value="NO">NO</option>
                    <option value="SI">SI</option>
                  </select>
                </div>
              </div>
              <div>
                <button type="button" className="btn-modal cancel" onClick={handleCancel}>Cancelar</button>
                <button type="submit" className="btn-modal save" onClick={handleSave}>Guardar</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default ModalUsers;
