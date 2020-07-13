import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import FormUsers from './FormUsers';
import { postUser } from '../../controller/admin-users';

// Obtenemos el estado de display y la función closeModal
const ModalUsers = ({display, closeModal}) => {
  const initialState = {
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
  // Creamos la función handleCancel que se pasa al formulario
  const handleCancel = () => {
    // Llamamos la función que tiene el setDisplay(false)
    closeModal();
    setUser({...initialState});
    setErrorMail(false);
    setErrorPass(false);
  }

  const handleSave = () => {
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
      closeModal();
    }
  }

  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      handleAddUser: () => openModal(),
      closeModal: () => closeModal()
    }
  })

  const openModal = () => {
    setDisplay(true)
  }

  const closeModal = () => {
    setDisplay(false)
  }

  if(display) {
    return ReactDOM.createPortal(
      <section className="modal-container">
        <div className="background-modal"></div>
        <div className="modal-window">
          <p className="title-modal">Agregar usuario</p>
          <FormUsers 
            user={user} 
            errMail={errMail}
            errPass={errPass}
            handleInputChange={handleInputChange} 
            handleSelectChange={handleSelectChange} 
            handleSave={handleSave}
            /* Pasamos como prop el handleCancel */
            handleCancel={handleCancel}/>
        </div>
      </section>, document.getElementById("modal")
    )
  }
  return null;
}

export default ModalUsers;
