/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */

export const postOrder = (order) =>
  // fetch('http://localhost:8000/orders', {
  fetch('https://burger-queen-apilab.herokuapp.com/orders', {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } if (resp.status === 400) {
      return new Error('userId o productos son requeridos');
    } if (resp.status === 401) {
      return new Error('No hay cabecera de autenticación');
    }
  });

export const getOrders = () => fetch('https://burger-queen-apilab.herokuapp.com/orders', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
}).then((resp) => {
  if (resp.status === 200) {
    return resp.json();
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  }
});

export const putOrder = (order, id) => fetch(`https://burger-queen-apilab.herokuapp.com/orders/${id}`, {
  method: 'PUT',
  body: JSON.stringify(order),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
}).then((resp) => resp.json());
