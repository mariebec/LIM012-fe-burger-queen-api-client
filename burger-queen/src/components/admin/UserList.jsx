import React, {useState} from 'react';
import Header from '../Header';
import UsersTable from './UsersTable';


const UserList = () => {

  // const user = [
  //   {
  //     "id": "u_001",
  //     "email": "kirikiki@gmail.com",
  //     "roles": {admin: true}
  //   },
  //   {
  //     "id": "u_002",
  //     "email": "mbarakaja@gmail.com",
  //     "roles": {admin: false}
  //   },
  //   {
  //     "id": "u_003",
  //     "email": "jagua@gmail.com",
  //     "roles": {admin: false}
  //   }
  // ]

  const [ users, setUser ] = useState([]);

  const handleAddUser = () => {
    // fetchGET().then((resp) => setUser(resp));
    fetch('http://localhost:3002/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      // Se actualiza el estado del user al consumir la segunda promesa para que sea igual a la data
      // obtenida de mockoon. Para probar no olvidar hacer click en botón agregar usuario.
      // Tendríamos que ejecutar la petición al cargar la página, para eso es useEffect, me di cuenta que si
      // el useState se actualiza cada ciertos segundos
      .then((resp) => setUser(resp));
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