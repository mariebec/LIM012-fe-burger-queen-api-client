import React from 'react'

const UsersTable = ({ allUsers, handleDeleteUser, handleUpdateUser }) => {
  return (
    <table className="table">
      <thead className="head-table">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Categoría</th>
          <th>Fecha</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="body-table">
        { 
          allUsers.length > 0 ?
          allUsers.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.id}</td>
              <td>{element.id}</td>
              <td><button>Imagen</button></td>
              <td>Chatarra</td>
              <td>15/07/2020</td>
              <td>
                <i className="icon edit fas fa-edit" onClick = {()=> handleUpdateUser(element) }/>
                <i className="icon delete fas fa-trash-alt" onClick = {()=> handleDeleteUser(element.id) } />
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
