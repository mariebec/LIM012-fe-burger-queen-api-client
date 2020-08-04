/* eslint-disable consistent-return */
/* eslint-disable prefer-promise-reject-errors */
export const getUsers = () => fetch('http://localhost:3000/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((resp) => resp.json());

export const postUser = (user) => fetch('http://localhost:3000/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((resp) => {
  if (resp.status === 201) {
    return resp.json();
  } if (resp.status === 400) {
    return Promise.reject({ message: 'Email o contraseña son requeridos' });
  }
});

export const deleteUser = (id) => fetch(`http://localhost:3000/users/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((resp) => {
  if (resp.status === 204) {
    return resp.json();
  } if (resp.status === 400) {
    return Promise.reject({ message: 'Usuario no encontrado' });
  }
});

export const putUser = (user) => fetch(`http://localhost:3000/users/${user.id}`, {
  method: 'PUT',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
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
