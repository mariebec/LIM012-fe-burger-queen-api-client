import React, {useState, useEffect} from 'react';
import Header from '../Header';
import UsersTable from './UsersTable';
import { getUsers } from '../../controller/admin-users';


const UserList = () => {

  const [ users, setUser ] = useState([]);

  useEffect(() => {
    getUsers().then((resp) => setUser(resp));
  }, []);

  const handleAddUser = () => {
    // Modal
  }

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-users">
        <div className="btn-container">
          <button onClick={handleAddUser}>Agregar usuario</button>
        </div>
        <h2>Lista de usuarios</h2>
        <UsersTable users={users} />
      </main>
    </>
  )
}

export default UserList;