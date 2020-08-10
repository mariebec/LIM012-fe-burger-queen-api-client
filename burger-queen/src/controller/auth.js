/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable prefer-promise-reject-errors */
export const postAuth = (user) =>
  fetch('https://burger-queen-apilab.herokuapp.com/auth', {
  // fetch('http://localhost:8000/auth', {
    method: 'POST',
    body: JSON.stringify(user),
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } if (resp.status === 400) {
      return Promise.reject('El email y password son requeridos');
    }
    // return (resp);
  }).catch((err) => {
    console.log(err);
  });

export const getUserByEmail = (email) =>
  // return fetch(`https://burger-queen-apilab.herokuapp.com/users/${email}`, {
  fetch(`http://localhost:8000/users/${email}`, {
    method: 'GET',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    } if (resp.status === 400) {
      return Promise.reject('Usuario no encontrado');
    }
  });
