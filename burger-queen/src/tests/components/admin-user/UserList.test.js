import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserList from '../../../components/admin/users/UserList';

describe('Render', () => {
  test('Debería encontrar "Agregar usuarios" en el componente', () => {
    render(<UserList />);
    screen.getByText('Agregar usuario');
  });

  test('Debería encontrar "Lista de usuarios" en el componente', () => {
    render(<UserList />);
    // getByText busca el elemento (string) en el componente
    expect(screen.getByText('Lista de usuarios')).toBeInTheDocument();
  });

  test('Debería encontrar un "button" en el componente', () => {
    render(<UserList />);
    // getByRole busca un elemento según su tipo
    expect(screen.getAllByRole('button')).not.toBe([]);
  });
});

describe('click', () => {
  test('Debería cambiar el estado de Display modal', () => {
    render(<UserList />);
    const agregar = screen.getByTestId('agregar');

    expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
    userEvent.click(agregar, screen.getAllByRole('button'));
    expect(screen.queryByRole('combobox')).toBeInTheDocument();
  });
});
