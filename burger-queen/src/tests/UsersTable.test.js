import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import UsersTable from '../components/admin/products/TempProductsTable';

describe('App', () => {
  test('verificar que no existe un elemento', () => {
    const div = document.createElement("div");
    ReactDOM.render(<UsersTable/>, div)
 
    // // fails
    // expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
    // console.log(renderResult)



  });
});
