import React from 'react';
import { render, screen } from '@testing-library/react';
import { server } from '../../../__mock__/server';
import userEvent from '@testing-library/user-event';
import { deleteUser } from '../../../controller/admin-users';
import UsersTable from '../../../components/admin/users/UsersTable';

// const server = setupServer(
//   rest.delete('http://localhost:3000/users/u_001', (req, res, ctx) => {
//     return res(
//       ctx.status(204),
//       ctx.json({ message: 'El usuario ha sido eliminado' }),
//     );
//   }),
// )

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const state = {
  allUsers : [{
      id: 'u_01',
      email: 'example@gmail.com',
      password: '13142dsg',
      roles: { admin: true }
    }, {
      id: 'u_02',
      email: 'kikiriki@gmail.com',
      password: '13142dsg',
      roles: { admin: true }
    }],
  display: {
    modal: false,
    btnEdit: true
  } 
};

describe.only('UserTable', () => {
  test('verificar que no existen usuarios', () => {
    render(<UsersTable state={state}/>);
    expect(screen.getByText('example@gmail.com')).toBeInTheDocument();

  });

  test('Debería mostrar si el nombre del usuario está en el documento', () => {
    render(<UsersTable state={state}/>);
    expect(screen.queryByText('No hay usuarios registrados')).not.toBeInTheDocument();
  });

  // test('Debería eliminar usuario', () => {
  //   const handleDeleteUser = (id) => {
  //     deleteUser(id).then((response) => {
  //       expect(response.message).toBe('Debería fallar');
  //     });
  //   };
  //   render(<UsersTable state={state} handleDeleteUser={handleDeleteUser}/>);
  //   userEvent.click(screen.getByTestId('delete'));
  //   expect(response.message).toBe('Debería fallar');
  // });

   
});


