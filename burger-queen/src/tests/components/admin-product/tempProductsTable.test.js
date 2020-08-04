import React from 'react';
import { render, screen } from '@testing-library/react';
import TempProductsTable from '../../../components/admin/products/TempProductsTable';

const product = {
  allProducts: [
    {
      id: 'u_01',
      name:'Hamburguesa',
      price: '10',
      image: 'URL',
      type: 'burger',
      date: '20/09/2020',
    },
    {
    id: 'u_02',
    name:'Sandwich',
    price: '10',
    image: 'URL',
    type: 'breakfast',
    date: '20/09/2020',
    }
  ],
}



describe('TempProductsTable' , () => {
  test('Debería mostrar si el nombre del producto está en el documento', () => {

    render(<TempProductsTable  product = {product}/>);

    expect(screen.getByText('Hamburguesa')).toBeInTheDocument();
    expect(screen.getByText('Sandwich')).toBeInTheDocument();
    expect(screen.queryByText('No hay productos agregados')).not.toBeInTheDocument();
  });
})