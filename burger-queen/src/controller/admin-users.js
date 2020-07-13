export const getUsers = () => {
  return fetch('http://localhost:3002/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => resp.json());
}

export const postUser = (user) => {
  return fetch('http://localhost:3002/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json()
    } if (resp.status === 400){
      return Promise.reject(console.log('email and password is required'));
    }
  });
}

export const deleteUser = (id) => {
  return fetch(`http://localhost:3002/users/${id}`, {
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

}
