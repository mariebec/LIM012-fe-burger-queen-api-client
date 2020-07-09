import React from 'react';
import Header from '../Header';


const UserList = () => {

  const users = [
      {
        "id": "u_001",
        "email": "kirikiki@gmail.com",
        "roles": {admin: true}
      },
      {
        "id": "u_002",
        "email": "mbarakaja@gmail.com",
        "roles": {admin: false}
      },
      {
        "id": "u_003",
        "email": "jagua@gmail.com",
        "roles": {admin: false}
      }
  ]

  const handleAddUser = () => {
    fetch('http://localhost:3002/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  }

  return (
    <>
      <Header />
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
              users.length > 0 ?
              users.map((element) => (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.email}</td>
                  <td>{element.roles.admin === true ? 'SI' : 'NO' }</td>
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
        {/* <ul>
          <li className="table header">
            <p className="l-column">Nombre</p>
            <p className="m-column">Usuario</p>
            <p className="xl-column">e-mail</p>
            <p className="m-column">Rol</p>
            <p className="s-column">Admin</p>
            <p className="m-column">Clave</p>
            <p className="m-column"></p>
          </li>
          <li className="table data">
            <p className="l-column">Sandra Zapata</p>
            <p className="m-column">szapata</p>
            <p className="xl-column">szapata@bqueen.com</p>
            <p className="m-column">Manager</p>
            <p className="s-column">Si</p>
            <p className="m-column">09867t</p>
            <div className="m-column">
              <i className="icon edit fas fa-edit"></i>
              <i className="icon delete fas fa-trash-alt"></i>
            </div>
          </li>
        </ul> */}
        
      </main>
    </>
  )
}

export default UserList;