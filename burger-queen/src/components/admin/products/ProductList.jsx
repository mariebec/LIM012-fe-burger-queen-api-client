import React, {useState, useEffect} from 'react';
import Header from '../../Header';
import UsersTable from './TempProductsTable';
import { getUsers, deleteUser } from '../../../controller/admin-users';
import ModalUsers from './ModalProduct';


const UserList = () => {

  const [ allUsers, setAllUsers ] = useState([]);

  useEffect(() => {
    getUsers().then((resp) => setAllUsers(resp));
  }, []);

  // Acá se crea el estado de display
  const [display, setDisplay] = useState(false);
  const [ button, setButton ] = useState(false);
  // El botón agregar usuario cambia el estado de display a true
  const handleAddUser = () => {
    setDisplay(true);
    setButton(false);
  }

  const handleDeleteUser = (id) => {
    console.log('se va a borrar', id)
    setAllUsers(allUsers.filter((user) => user.id !== id))
    deleteUser(id).then((resp) => console.log(resp));
  }

  const idGenerado = (Math.random() * 1000).toFixed(3).toString();
  const initialState = {
    id: idGenerado,
    email:'',
    password:'',
    roles: { admin: false }
  };

  const [user, setUser] = useState(initialState);

  const handleUpdateUser = (user) => {
    setDisplay(true);
    setButton(true);
    setUser({...user, id: user.id, email: user.email, roles: {admin: user.roles.admin}});
  }

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-users">
        <div className="btn-container">
          <button onClick={handleAddUser}>Agregar producto</button>
          {/* Acá pasamos el estado de display y la función para cambiar el estado a false */}
          <ModalUsers display={display} setDisplay={setDisplay} setAllUsers={setAllUsers} 
          allUsers={allUsers} setUser={setUser} user={user} button={button}/>
        </div>
        <h2>Lista de productos</h2>
        <UsersTable allUsers={allUsers} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser}/>

      </main>
    </>
  )
}

export default UserList;