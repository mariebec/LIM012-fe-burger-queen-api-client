import React, {useState, useEffect} from 'react';
import Header from '../Header';
import UsersTable from './UsersTable';
import { getUsers, deleteUser } from '../../controller/admin-users';
import ModalUsers from './ModalUsers';


const UserList = () => {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers().then((resp) => setUsers(resp));
  }, []);

  // Acá se crea el estado de display
  const [display, setDisplay] = useState(false);
  // El botón agregar usuario cambia el estado de display a true
  const handleAddUser = () => {
    setDisplay(true);
  }
  // Se crea una función para cambiar el estado a false, este estado se pasa al modal mediante props
  const closeModal = () => {
    setDisplay(false);
  }

  const handleDeleteUser = (id) => {
    console.log('se va a borrar', id)
    setUsers(users.filter((user) => user.id !== id))
    deleteUser(id).then((resp) => console.log(resp));
  }

  const idGenerado = (Math.random() * 100).toString();
  const initialState = {
    id: idGenerado,
    email:'',
    password:'',
    roles: { admin: false }
  };

  const [user, setUser] = useState(initialState);

  const handleUpdateUser = (user) => {
    setDisplay(true);
    setUser({...user, id: user.id, email: user.email, roles: {admin: user.roles.admin}});
  }

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-users">
        <div className="btn-container">
          <button onClick={handleAddUser}>Agregar usuario</button>
          {/* Acá pasamos el estado de display y la función para cambiar el estado a false */}
          <ModalUsers display={display} closeModal={closeModal} setUsers={setUsers} users={users} setUser={setUser} user={user}/>
        </div>
        <h2>Lista de usuarios</h2>
        <UsersTable users={users} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser}/>

      </main>
    </>
  )
}

export default UserList;