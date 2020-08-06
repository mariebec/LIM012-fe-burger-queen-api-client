/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable consistent-return */
export const getProducts = () => fetch('http://localhost:3000/products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((resp) => {
  if (resp.status === 201) {
    return resp.json();
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  }
});
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
    return new Error('Faltan el nombre o precio');
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  } if (resp.status === 403) {
    return new Error('No tiene permiso para realizar esta acción');
  } if (resp.status === 404) {
    return new Error('No existe un producto con ese Id');
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
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  } if (resp.status === 403) {
    return new Error('No tiene permiso para realizar la acción');
  } if (resp.status === 404) {
    return new Error('Product no encontrado');
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
    return new Error('No hay ningún campo a modificar');
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  } if (resp.status === 403) {
    return new Error('No tiene permiso para realizar la acción');
  } if (resp.status === 404) {
    return new Error('Producto no encontrado');
  }
});
