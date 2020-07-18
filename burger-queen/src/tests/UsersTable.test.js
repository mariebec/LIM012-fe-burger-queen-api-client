import React from 'react';
import { render, screen } from '@testing-library/react';
import UsersTable from '../components/admin/products/TempProductsTable';

describe('App', () => {
  test('verificar que no existe un elemento', () => {
    render(<UsersTable />);
 
    screen.debug();
 
    // // fails
    // expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    // console.log(renderResult)

    jest.mock('../components/admin/products/TempProductsTable', () => () => <UsersTable />);


  });
});
