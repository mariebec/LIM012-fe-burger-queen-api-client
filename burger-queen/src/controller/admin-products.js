export const getUsers = () => {
  return fetch('http://localhost:3000/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => resp.json());
};

export const postUser = (user) => {
  // console.log('Enviando', user);
  return fetch('http://localhost:3000/products', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => {
    if (resp.status === 201) {
      return resp.json();
    } if (resp.status === 400){
      return Promise.reject(console.log('email and password is required'));
    }
  });
};

export const deleteUser = (id) => {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => {
    if (resp.status === 204) {
    // return resp.json() 
    console.log(resp)
    } if (resp.status === 400){
      return Promise.reject(console.log('no existe el usuario'));
    }
  });
};

export const putUser = (user) => {
  return fetch(`http://localhost:3000/products/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => {
    if (resp.status === 200) {
    return resp.json(); 
    } else if (resp.status === 400){
      return Promise.reject({ message: 'Debe ingresar email y contraseña' });
    } else if (resp.status === 404) {
      return Promise.reject({ message: 'Usuario no encontrado' });
    }
  });
};

// const baseUrl = 'http://localhost:3002';

// const fetchFunction = (url) => fetch(baseUrl + 'users', )

// export const getUser = () => fetchFunction('/users', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then((resp) => resp.json());

