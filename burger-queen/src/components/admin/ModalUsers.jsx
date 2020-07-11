import React, {useState} from 'react';
import FormUsers from './FormUsers';

const ModalUsers = () => {
  // const idGenerado = (Math.random() * 100).toString();
  const initialState = {
    // id: idGenerado,
    email:'',
    password:'',
    roles: { admin: false }
  };

  const [user, setUser] = useState(initialState);

const handleInputChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value});
} 

const handleSelectChange = (e) =>{
  setUser({...user, roles: { admin: e.target.value === "SI" ? true : false }})
}

const handleCancel = () => {
  setUser({...initialState});
};

  const handleSave = () => {
    // e.preventDefault();
    const userEmail = user.email.trim();
    const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    const userPassword = user.password.trim();
    // const idGenerado = (Math.random() * 100).toString();
    // console.log(idGenerado);
    // setUser({...user, id: idGenerado})
  
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
    setUser({...initialState});
  }

  return (
    <>
      <section className="bg-img-fries">
        <div className="modal-window">
          <p className="title-modal">Agregar usuario</p>
          <FormUsers user={user} handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} handleCancel={handleCancel} handleSave={handleSave}/>
        </div>
      </section>
    </>
  )
}

export default ModalUsers;
