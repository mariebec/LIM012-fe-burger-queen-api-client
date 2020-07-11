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
  const [ errMail, setErrorMail ] = useState(false);
  const [ errPass, setErrorPass ] = useState(false);

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
    const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    const validEmail = user.email.trim() === '' || !exRegEmail.test(user.email.trim());
    const validPassword = user.password.trim() === '' || user.password.trim().length < 6;
  
    if (validEmail || validPassword) {
      (validEmail) ? setErrorMail(true) : setErrorMail(false);
      (validPassword) ? setErrorPass(true) : setErrorPass(false);
    } else {
      postUser(user)
        .catch((error) => console.log(error))
        .then((resp) => console.log(resp));
      setUser({...initialState});
    }
  }

  return (
    <>
      <section className="bg-img-fries">
        <div className="modal-window">
          <p className="title-modal">Agregar usuario</p>
          <FormUsers 
            user={user} 
            errMail={errMail}
            errPass={errPass}
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
