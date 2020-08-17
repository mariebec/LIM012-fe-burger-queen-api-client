/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
export const getUsers = () =>
  // fetch('http://localhost:3000/users',
  fetch('https://burger-queen-apilab.herokuapp.com/users', {
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
    } if (resp.status === 403) {
      return new Error('No tiene permiso');
    }
  });

export const postUser = (user) => fetch('https://burger-queen-apilab.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
}).then((resp) => {
  if (resp.status === 200) {
    return resp.json();
  } if (resp.status === 400) {
    return new Error('Email o contraseña son requeridos');
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  } if (resp.status === 403) {
    return new Error('El correo ya existe');
  }
});

export const deleteUser = (id) => fetch(`https://burger-queen-apilab.herokuapp.com/users/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
}).then((resp) => {
  if (resp.status === 200) {
    return resp.json();
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  } if (resp.status === 403) {
    return new Error('No tiene permiso para realizar la acción');
  } if (resp.status === 404) {
    return new Error('Usuario no encontrado');
  }
});

export const putUser = (user, id) => fetch(`https://burger-queen-apilab.herokuapp.com/users/${id}`, {
  method: 'PUT',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
}).then((resp) => {
  if (resp.status === 200) {
    return resp.json();
  } if (resp.status === 400) {
    return new Error('Debe ingresar email y contraseña');
  } if (resp.status === 401) {
    return new Error('No hay cabecera de autenticación');
  } if (resp.status === 403) {
    return new Error('No tiene permiso de administradora');
  } if (resp.status === 404) {
    return new Error('Usuario no encontrado');
  }
});
