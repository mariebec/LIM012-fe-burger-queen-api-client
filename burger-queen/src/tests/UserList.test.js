import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from '../components/admin/users/UserList';
import userEvent from '@testing-library/user-event';

describe('Render', () => {
  test('Debería encontrar "Agregar usuarios" en el componente', () => {
    render (<UserList/>);
    screen.getByText('Agregar usuario');
  })

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

describe('click', () => {
  test('Debería cambiar el estado de Display modal', () => {
    render(<UserList/>);

    expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByRole('combobox')).toBeInTheDocument();
  });
});
