/* eslint-disable consistent-return */
export default (order) => fetch('http://localhost:8000/orders', {
  method: 'POST',
  body: JSON.stringify(order),
  // mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer ' + localStorage.getItem('token')
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
