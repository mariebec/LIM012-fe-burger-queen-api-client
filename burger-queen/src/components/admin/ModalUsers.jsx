import React, {useState} from 'react';
import FormUsers from './FormUsers';
import { postUser } from '../../controller/admin-users';

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
  
    if (userEmail === '' || !exRegEmail.test(userEmail)) {
      console.log('email inválido');
    } else if (userPassword === '' || userPassword.length < 6) {
      console.log('password inválido');
    } else {
      postUser(user)
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
          <FormUsers 
            user={user} 
            handleInputChange={handleInputChange} 
            handleSelectChange={handleSelectChange} 
            handleCancel={handleCancel} 
            handleSave={handleSave}/>
        </div>
      </section>
    </>
  )
}

export default ModalUsers;
