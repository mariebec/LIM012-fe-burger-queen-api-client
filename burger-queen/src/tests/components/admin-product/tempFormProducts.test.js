import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TempFormProducts from '../../../components/admin/products/TempFormProducts';

const product = {
  productData: {
    id: '1',
    name: 'Hamburguesa doble',
    price: '15',
    image: 'some URL',
    type: 'burger',
    date: '2020-07-15'
  },
  display: {
    modal: false,
    button: true
  }
  
}
const error = {
  name: false,
  price: false,
  date: false,
  api: ''
};


describe('Render', () => {
  test('Debería retornar el valor de name', () => {
    render(<TempFormProducts product={product} error={error} />);
    expect(product.productData.name).toBe('Hamburguesa doble');
  });
  test('Debería mostrar el botón de Editar', () => {
    render(<TempFormProducts product={product} error={error}/>);
    expect(screen.getByText('Editar')).toBeInTheDocument();
  });

  test('No debería mostrar el botón de Guardar', () => {
    render(<TempFormProducts product={product} error={error} />);
    expect(screen.queryByText('Guardar')).not.toBeInTheDocument();
  });

  test('Debería mostrar "Hamburguesa" en categoria', () => {
    render(<TempFormProducts product={product} error={error} />);
    expect(screen.queryByDisplayValue('Hamburguesa')).toBeInTheDocument();
  });

  
});


describe('Eventos', () => {
  test('Debería cambiar el value del select', () => {

    render(<TempFormProducts product={product} error={error} />);

    userEvent.selectOptions(screen.getByRole('combobox'), 'drink');
    expect(screen.getByText('Bebida').selected).toBe(true);
  });

  test('Debería llamar al evento handleInputChange la cantidad de veces que se tipea', async () => {
    const handleInputChange = jest.fn();

    render(<TempFormProducts product={product} error={error}  handleInputChange={handleInputChange}/>);

    await userEvent.type(screen.getAllByRole('textbox'), 'hamburguesa'); 
    expect(handleInputChange).toHaveBeenCalledTimes(11);
  });
});