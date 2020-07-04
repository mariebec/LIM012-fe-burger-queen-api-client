import React from 'react';
import Header from '../Header';

const UserList = () => {
  return (
    <>
      <Header />
      <main className="container-users">
        <div className="btn-container">
          <button>Agregar usuario</button>
        </div>
        <h2>Lista de usuarios</h2>
        <ul>
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
        </ul>
        {/* <table className="table-users">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>e-mail</th>
              <th>Rol</th>
              <th>Admin</th>
              <th>Clave</th>
            </tr>
          </thead>
        </table> */}
      </main>
    </>
  )
}

export default UserList;