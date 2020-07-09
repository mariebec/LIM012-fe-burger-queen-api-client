import React from 'react'

const UsersTable = () => {
  return (
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
  )
}

export default UsersTable;
