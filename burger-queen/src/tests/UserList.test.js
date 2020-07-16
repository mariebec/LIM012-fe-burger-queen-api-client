import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from '../components/admin/UserList';

describe('FormUsers', () => {

  test('Debería encontrar "Lista de usuarios" en el componente', () => {
    render(<UserList />);
    // getByText busca el elemento (string) en el componente
    expect(screen.getByText('Lista de usuarios')).toBeInTheDocument();
  });

  test('Debería encontrar un "button" en el componente', () => {
    render(<UserList />);
    // getByRole busca un elemento según su tipo
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

});
