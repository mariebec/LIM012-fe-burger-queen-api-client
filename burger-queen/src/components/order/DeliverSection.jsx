/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

const DeliverSection = ({ title, arr, check }) => {
  const totalPrice = (order) => order.reduce((acc, element) => (
    acc + (element.qty * element.product.price)), 0);

  return (
    <div className="container-div">
      <div className="card-scroll">
        <div className="card-orders">
          <p className="title">{title}</p>
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
                  <i className={check ? 'fas fa-check green' : 'fas fa-check'} />
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
              <p>No hay productos para entregar</p>
            )}
        </div>
      </div>
    </div>
  );
};

DeliverSection.propTypes = {
  title: PropTypes.string.isRequired,
  arr: PropTypes.array.isRequired,
  check: PropTypes.bool.isRequired,
};

export default DeliverSection;
