import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import UsersTable from '../components/admin/users/UsersTable';


const allUsers = [];

describe('UserTable', () => {
  test('verificar que no existen usuarios', () => {
    const div = document.createElement("div");
    render(<UsersTable allUsers={allUsers}/>)
 
    expect(screen.getByText('No hay usuarios registrados')).toBeInTheDocument();
  });
});
