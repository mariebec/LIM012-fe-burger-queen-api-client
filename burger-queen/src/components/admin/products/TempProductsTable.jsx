import React from 'react'

const UsersTable = ({ allProducts, handleDeleteUser, handleUpdateUser }) => {
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
          allProducts.length > 0 ?
          allProducts.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>S/. {element.price}</td>
              <td><button>Ver</button></td>
              <td>{element.type}</td>
              <td>{element.date}</td>
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
