/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable consistent-return */
export const getProducts = () => fetch('http://localhost:3000/products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((resp) => resp.json());

export const postProduct = (product) => fetch('http://localhost:3000/products', {
  // console.log('Enviando', user);
  method: 'POST',
  body: JSON.stringify(product),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((resp) => {
  if (resp.status === 201) {
    return resp.json();
  } if (resp.status === 400) {
    return Promise.reject('email and password is required');
  }
});
export const deleteProduct = (id) => fetch(`http://localhost:3000/products/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((resp) => {
  if (resp.status === 204) {
    return resp.json();
  } if (resp.status === 400) {
    return Promise.reject('Producto no encontrado');
  }
});

export const putProduct = (product) => fetch(`http://localhost:3000/products/${product.id}`, {
  method: 'PUT',
  body: JSON.stringify(product),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((resp) => {
  if (resp.status === 200) {
    return resp.json();
  } if (resp.status === 400) {
    return Promise.reject({ message: 'Debe ingresar email y contraseña' });
  } if (resp.status === 404) {
    return Promise.reject({ message: 'Usuario no encontrado' });
  }
});

// const baseUrl = 'http://localhost:3002';

// const fetchFunction = (url) => fetch(baseUrl + 'users', )

// export const getUser = () => fetchFunction('/users', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then((resp) => resp.json());
