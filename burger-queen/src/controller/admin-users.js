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
  }).then((resp) => resp.json())
}
