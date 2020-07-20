import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import FormUsers from './FormUsers';
import { postUser, putUser } from '../../../controller/admin-users';


// Obtenemos el estado de display y la función closeModal
const ModalUsers = ({display, setDisplay, setAllUsers, allUsers, setUser, user}) => {
  
  const [ error, setError ] = useState({
    email: false,
    password: false,
    api: '' 
  });

  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  } 

  const handleSelectChange = (e) =>{
    setUser({...user, roles: { admin: e.target.value === 'SI' ? true : false }});
  }
  // Creamos la función handleCancel que se pasa al formulario
  const handleCancel = () => { 
    const idGenerado = (Math.random() * 1000).toFixed(3).toString();
    setUser({id: idGenerado, email: '', password: '', roles: {admin: false}});
    setDisplay(prevState => ({ ...prevState, modal: false }));
    setError({ email:false, password:false, api: '' });
  }

  const handleSave = () => {
    const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    const validEmail = user.email.trim() === '' || !exRegEmail.test(user.email.trim());
    const validPassword = user.password.trim() === '' || user.password.trim().length < 6;
  
    if (validEmail || validPassword) {
      (validEmail) ? setError(prevState => ({ ...prevState, email: true })) : setError(prevState => ({ ...prevState, email: false }));
      (validPassword) ? setError(prevState => ({ ...prevState, password: true })) : setError(prevState => ({ ...prevState, password: false }));
    } else { 
      postUser(user)
        .catch((error) => console.log(error))
        .then((resp) => {
          console.log('Recibiendo', resp);
          setAllUsers([...allUsers, resp]); 
        });
      const idGenerado = (Math.random() * 1000).toFixed(3).toString();
      setUser({id: idGenerado, email: '', password: '', roles: {admin: false}});
      setDisplay(prevState => ({ ...prevState, modal: false }));
      setError({ email:false, password:false, api: '' });
    }
  }

  const handleEdit = () => {
    putUser(user).then((resp) => {
      console.log(resp)
      setAllUsers(allUsers.map((user) => user.id === resp.id? resp : user));
      const idGenerado = (Math.random() * 1000).toFixed(3).toString();
      setUser({id: idGenerado, email: '', password: '', roles: {admin: false}});
      setDisplay(prevState => ({ ...prevState, modal: false }));
      setError({ email:false, password:false, api: '' });
    })
    .catch((error) => {
      setError(error)
    });
  };

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  document.body.append(modalRoot);

  if(display.modal) {
    return ReactDOM.createPortal(
      <section className="modal-container">
        <div className="background-modal"></div>
        <div className="modal-window">
          <p className="title-modal">Agregar usuario</p>
          <FormUsers 
            user={user} 
            error={error}
            handleInputChange={handleInputChange} 
            handleSelectChange={handleSelectChange} 
            handleSave={handleSave}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
            display={display}/>
        </div>
      </section>, document.getElementById("modal")
    );
  }
  return null;
}

export default ModalUsers;