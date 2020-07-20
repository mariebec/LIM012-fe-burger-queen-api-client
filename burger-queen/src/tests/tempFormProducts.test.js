import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import TempFormProducts from '../components/admin/products/TempFormProducts';

const product = {
  id: '1',
  name: 'Hamburguesa doble',
  price: '15',
  image: 'some URL',
  type: 'burger',
  date: '2020-07-15'
}

const error = {
  name: false,
  price: false,
  date: false,
  api: ''
};

const display = {
  modal: false,
  button: true
};

describe('Render', () => {
  test('Debería retornar el valor de name', () => {
    render(<TempFormProducts product={product} error={error} display={display}/>);
    expect(product.name).toBe('Hamburguesa doble');
  });

  
});