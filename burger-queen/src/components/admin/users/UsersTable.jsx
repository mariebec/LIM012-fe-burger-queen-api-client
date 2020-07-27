import React from 'react';
import { deleteUser } from '../../../controller/admin-users';

const UsersTable = ({ state, setState, modalRoot }) => {

  const handleDeleteUser = (id) => {
    setState(prevState => ({
      ...prevState,
      allUsers: state.allUsers.filter((user) => user.id !== id),
    }));
    deleteUser(id);
  };
  
  const handleUpdateUser = (user) => {
    document.body.append(modalRoot);
    setState(prevState => ({
      ...prevState,
      userData: {
        id: user.id,
        email: user.email,
        password: user.password,
        roles: { admin: user.roles.admin }
      },
      display: {
        modal: true,
        btnEdit: true
      },
    }));
  };

  return (
    <table className="table">
      <thead className="head-table">
        <tr>
          <th>ID usuario</th>
          <th>e-mail</th>
          <th>Admin</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="body-table">
        { 
          state.allUsers.length > 0 ?
          state.allUsers.map((element) => (
            // console.log(element) ||
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.email}</td>
              <td>{element.roles.admin ? "SI" : "NO" }</td>
              <td>
                <i data-testid="edit" className="icon edit fas fa-edit" onClick = {()=> handleUpdateUser(element) }/>
                <i data-testid="delete" className="icon delete fas fa-trash-alt" onClick = {()=> handleDeleteUser(element.id) } />
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
