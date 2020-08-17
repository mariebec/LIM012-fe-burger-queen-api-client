/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
// hagamos así lo de orders

const baseUrl = 'http://localhost:3002';

const fetchFunction = (url, opts) => fetch(`${baseUrl}users`, {
  ...opts,
  headers: {
    'Content-Type': 'application/json',
  },
}).then((resp) => {
  // mostrar errores
  const { status } = resp;
  if (status === 201 || status === 200) {
    return resp.json();
  } if (resp.status === 400) {
    return new Error('No esta');
  }
});
