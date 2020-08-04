import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormUsers from '../../../components/admin/users/FormUsers';

const state = {
  userData : {
    id: 'u_01',
    email: 'example@gmail.com',
    password: 'youshouldnotseethis',
    roles: { admin: true }
  },
  display: {
    modal: false,
    btnEdit: true
  } 
};

const error = {
  email: false,
  password: false,
  api: '' 
};


describe('Render', () => {
  test('Debería retornar el valor de email', () => {
    render(<FormUsers state={state} error={error}/>);
    expect(state.userData.email).toBe('example@gmail.com');
  });

  test('Debería mostrar el botón de Editar', () => {
    render(<FormUsers state={state} error={error} />);
    expect(screen.getByText('Editar')).toBeInTheDocument();
  });

  test('No debería mostrar el botón de Guardar', () => {
    render(<FormUsers state={state} error={error} />);
    expect(screen.queryByText('Guardar')).not.toBeInTheDocument();
  });

  test('Debería mostrar el valor "SI" en admin', () => {
    render(<FormUsers state={state} error={error} />);
    expect(screen.queryByDisplayValue('SI')).toBeInTheDocument();
  });

  test('Debería ser null para "NO"', () => {
    render(<FormUsers state={state} error={error} />);
    expect(screen.queryByDisplayValue('NO')).toBeNull();
  });
});

describe('Eventos', () => {
  test('Debería debería cambiar el value del select', () => {

    render(<FormUsers state={state} error={error} />);

    expect(screen.getByText('NO').selected).toBe(false);
    userEvent.selectOptions(screen.getByRole('combobox'), 'NO');
    expect(screen.getByText('NO').selected).toBe(true);
  });

  test('Debería llamar al evento handleInputChange la cantidad de veces que se tipea', async () => {
    const handleInputChange = jest.fn();

    render(<FormUsers state={state} error={error}  handleInputChange={handleInputChange}/>);

    await userEvent.type(screen.getByRole('textbox'), 'hola');
    expect(handleInputChange).toHaveBeenCalledTimes(4);
  });
});