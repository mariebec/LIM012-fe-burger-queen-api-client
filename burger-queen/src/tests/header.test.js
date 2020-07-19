import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('<Header/>', () => {

  test('Debería retornar el Header con el título Administrador', () => {
    const title = 'Administrador';
    const { getByText } = render(<Header title={title}/>);
    expect(getByText(title)).toBeInTheDocument();
  })

  test('Debería encontrar "Pedro Campbell" en el componente', () => {
    render(<Header />);
    expect(screen.getByText('Pedro Campbell')).toBeInTheDocument();
  });
})
