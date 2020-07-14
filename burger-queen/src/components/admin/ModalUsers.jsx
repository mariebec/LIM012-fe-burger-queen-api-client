import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import FormUsers from './FormUsers';
import { postUser, putUser } from '../../controller/admin-users';


// Obtenemos el estado de display y la función closeModal
const ModalUsers = ({display, setDisplay, setAllUsers, allUsers, setUser, user, button}) => {
  
  const [ errMail, setErrorMail ] = useState(false);
  const [ errPass, setErrorPass ] = useState(false);
  const [ error, setError ] = useState('');

  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  } 

  const handleSelectChange = (e) =>{
    setUser({...user, roles: { admin: e.target.value === 'SI' ? true : false }});
  }
  // Creamos la función handleCancel que se pasa al formulario
  const handleCancel = () => { 
    // Llamamos la función que tiene el setDisplay(false)
    setDisplay(false);
    const idGenerado = (Math.random() * 1000).toFixed(3).toString();
    setUser({id: idGenerado, email: '', password: '', roles: {admin: false}});
    setErrorMail(false);
    setErrorPass(false);
    setError('');
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
        .then((resp) => {
          console.log('Recibiendo', resp);
          setAllUsers([...allUsers, resp]); 
        });
      const idGenerado = (Math.random() * 1000).toFixed(3).toString();
      setUser({id: idGenerado, email: '', password: '', roles: {admin: false}});
      setDisplay(false);
    }
  }

  const handleEdit = () => {
    putUser(user).then((resp) => {
      console.log(resp)
      setDisplay(false);
      setError('');
      const idGenerado = (Math.random() * 1000).toFixed(3).toString();
      setUser({id: idGenerado, email: '', password: '', roles: {admin: false}});
      setAllUsers(allUsers.map((user) => user.id === resp.id? resp : user));
    })
    .catch((error) => {
      setError(error)
    });
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
            error={error}
            handleInputChange={handleInputChange} 
            handleSelectChange={handleSelectChange} 
            handleSave={handleSave}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
            button={button}/>
        </div>
      </section>, document.getElementById("modal")
    )
  }
  return null;
}

export default ModalUsers;