import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormUsers from '../components/admin/FormUsers';

describe('FormUsers', () => {
  test('email', () => {
    const onChange = jest.fn();

    render(
      <FormUsers value="" onChange={onchange}>
        mail@mail.com
      </FormUsers>
    );

    fireEvent.change(screen.getByRole('textBox'), {
      target: { value: 'mail@mail.com' },
    });

    expect(onchange).toHaveBeenCalledTimes(2);

  })
});
