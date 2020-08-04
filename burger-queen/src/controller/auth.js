export const postAuth = (user) => {
  return fetch('https://burger-queen-apilab.herokuapp.com/auth', {
    method: 'POST',
    body: JSON.stringify(user),
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then((resp) => {
    console.log(resp);
    if (resp.status === 200) {
      return resp.json();
    } if (resp.status === 400){
      return Promise.reject('El email y password son requeridos');
    }
  });
};

export const getUserByEmail = (email) => {
  return fetch(`https://burger-queen-apilab.herokuapp.com/users/${email}`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then((resp) => {
    if (resp.status === 200) {
    return resp.json(); 
    } if (resp.status === 400){
      return Promise.reject( 'Usuario no encontrado' );
    }
  });
};
