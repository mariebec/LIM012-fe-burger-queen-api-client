import React, {useState, useEffect} from 'react';
import Header from '../../Header';
import UsersTable from './UsersTable';
import { getUsers, deleteUser } from '../../../controller/admin-users';
import ModalUsers from './ModalUsers';


const UserList = () => {

  const idGenerado = (Math.random() * 1000).toFixed(3).toString();
  const initialState = {
    id: idGenerado,
    email:'',
    password:'',
    roles: { admin: false }
  };
 
  const [user, setUser] = useState(initialState);
  const [allUsers, setAllUsers ] = useState([]);
  const [display, setDisplay] = useState([{
    modal: false,
    button: false
  }]);

  useEffect(() => {
    getUsers().then((resp) => setAllUsers(resp));
  }, []);

  // El botón agregar usuario cambia el estado de display a true
  const handleAddUser = () => {
    setDisplay({modal: true, button: false})
  }

  const handleDeleteUser = (id) => {
    // console.log('se va a borrar', id)
    setAllUsers(allUsers.filter((user) => user.id !== id))
    deleteUser(id).then((resp) => console.log(resp));
  }

 

  const handleUpdateUser = (user) => {
    setDisplay({modal: true, button: true});
    setUser({id: user.id,
       email: user.email, 
       password: user.password,
       roles: {admin: user.roles.admin}
      });
  }

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-users">
        <div className="btn-container">
          <button onClick={handleAddUser}>Agregar usuario</button>
          {/* Acá pasamos el estado de display y la función para cambiar el estado a false */}
          <ModalUsers display={display} setDisplay={setDisplay} setAllUsers={setAllUsers} 
          allUsers={allUsers} setUser={setUser} user={user}/>
        </div>
        <h2>Lista de usuarios</h2>
        <UsersTable allUsers={allUsers} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser}/>

      </main>
    </>
  )
}

export default UserList;