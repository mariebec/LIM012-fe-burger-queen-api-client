export default (order) => {
  console.log(order);
//   fetch('http://localhost:3000/orders', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     // Authorization: `Bearer ${localStorage.getItem('token')}`,
//   },
// }).then((resp) => resp.json());
};

export const getOrders = () => fetch('http://localhost:8000/orders', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((resp) => resp.json());
