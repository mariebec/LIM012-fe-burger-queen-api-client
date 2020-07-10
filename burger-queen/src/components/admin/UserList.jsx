import React, {useState} from 'react';
import Header from '../Header';


const UserList = () => {

  const [ user, setUser ] = useState([]);

  const handleAddUser = () => {
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
        <table className="table-users">
          <thead>
            <tr>
              <th>ID usuario</th>
              <th>e-mail</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { 
              user.length > 0 ?
              user.map((element) => (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.email}</td>
                  <td>{element.roles.admin ? 'SI' : 'NO' }</td>
                  <td>
                    <i className="icon edit fas fa-edit"/>
                    <i className="icon delete fas fa-trash-alt"/>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td>No hay usuarios registrados</td>
                </tr>
              )
            }
          </tbody>
        </table>    
      </main>
    </>
  )
}

export default UserList;