/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { putOrder } from '../../controller/order';

const DeliverSection = ({ arr, check }) => {
  // Si check es false es delivering si es true es delivered
  const totalPrice = (order) => order.reduce((acc, element) => (
    acc + (element.qty * element.product.price)), 0);

  const handleStatus = (order) => {
    if (order.status === 'delivering') {
      const obj = {
        userId: order.userId,
        client: order.client,
        products: order.products,
        status: 'delivered',
      };
      putOrder(obj, order._id).then((resp) => console.log(resp));
    }
  };

  return (
    <div className="container-div">
      <div className="card-scroll">
        <div className="card-orders">
          <p className="title">{check ? 'Pedidos entregados' : 'Pedidos para entregar'}</p>
          { arr.length > 0
            ? arr.map((order) => (
              <div className="list-Order" key={order._id}>
                <div className="header-card-order">
                  <p>
                    Order N°
                    {order._id}
                    {' '}
                    |
                    {' '}
                    {order.client}
                  </p>
                  <i
                    className={check ? 'fas fa-check green' : 'fas fa-check'}
                    onClick={() => handleStatus(order)}
                    role="button"
                    tabIndex={0}
                  />
                </div>
                <table className="body-card-order">
                  <tbody>
                    { order.products.map((item) => (
                      <tr key={item.product._id}>
                        <td className="qty">{item.qty}</td>
                        <td>{item.product.name}</td>
                        <td className="price">
                          S/.
                          {' '}
                          {item.qty * item.product.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="foot-card-order">
                  <p>Tiempo: 15.05min</p>
                  <p className="total">
                    S/.
                    {totalPrice(order.products)}
                  </p>
                </div>
              </div>
            )) : (
              <p className="no-orders">{check ? 'No hay pedidos entregados' : 'No hay pedidos para entregar'}</p>
            )}
        </div>
      </div>
    </div>
  );
};

DeliverSection.propTypes = {
  arr: PropTypes.array.isRequired,
  check: PropTypes.bool.isRequired,
};

export default DeliverSection;
