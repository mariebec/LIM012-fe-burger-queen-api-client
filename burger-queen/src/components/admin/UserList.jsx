import React, {useState, useEffect} from 'react';
import Header from '../Header';
import UsersTable from './UsersTable';
import { getUsers } from '../../controller/admin-users';
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

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-users">
        <div className="btn-container">
          <button onClick={handleAddUser}>Agregar usuario</button>
          {/* Acá pasamos el estado de display y la función para cambiar el estado a false */}
          <ModalUsers display={display} closeModal={closeModal} setUsers={setUsers} users={users}/>
        </div>
        <h2>Lista de usuarios</h2>
        <UsersTable users={users}/>

      </main>
    </>
  )
}

export default UserList;