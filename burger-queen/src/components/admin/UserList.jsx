import React, {useState, useEffect, useRef} from 'react';
import Header from '../Header';
import UsersTable from './UsersTable';
import { getUsers } from '../../controller/admin-users';
import ModalUsers from './ModalUsers';


const UserList = () => {

  const [ users, setUser ] = useState([]);

  useEffect(() => {
    getUsers().then((resp) => setUser(resp));
  }, []);

  const modalRef = useRef();

  const handleAddUser = () => {
     modalRef.current.handleAddUser();
    
  }

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-users">
        <div className="btn-container">
          <button onClick={handleAddUser}>Agregar usuario</button>
          <ModalUsers ref={modalRef}/>
        </div>
        <h2>Lista de usuarios</h2>
        <UsersTable users={users} />

      </main>
    </>
  )
}

export default UserList;