/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { getOrders } from '../../controller/order';
import Header from '../Header';

const OrderReady = () => {
  const [delivering, setDelivering] = useState([]);
  const [delivered, setDelivered] = useState([]);

  useEffect(() => {
    getOrders().then((resp) => {
      resp.forEach((order) => {
        if (order.status === 'delivering') setDelivering((prev) => ([...prev, order]));
        else if (order.status === 'delivered') setDelivered((prev) => ([...prev, order]));
      });
    });
  }, []);

  return (
    <>
      <Header />
      <section className="container-orderReady">
        <div className="container-div">
          <div className="card-scroll">
            <div className="card-orders">
              <p className="title">Pedidos para entregar</p>
              { delivering.length > 0
                ? delivering.map((order) => (
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
                      <i className="fas fa-check" />
                    </div>
                    <table className="body-card-order">
                      <tbody>
                        { order.products.map((item) => (
                          <tr>
                            <td className="qty">1</td>
                            <td>{item.product}</td>
                            <td className="price">S/. 15</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="foot-card-order">
                      <p>Tiempo: 15.05min</p>
                      <p className="total">S/. 30</p>
                    </div>
                  </div>
                )) : (
                  <p>No hay productos para entregar</p>
                )}
            </div>
          </div>
        </div>

        <div className="container-div">
          <div className="card-scroll">
            <div className="card-orders">
              <p className="title">Pedidos entregados</p>
              { delivered.length > 0
                ? delivered.map((order) => (
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
                      <i className="fas fa-check green" />
                    </div>
                    <table className="body-card-order">
                      <tbody>
                        { order.products.map((item) => (
                          <tr>
                            <td className="qty">1</td>
                            <td>{item.product}</td>
                            <td className="price">S/. 15</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="foot-card-order">
                      <p>Tiempo: 15.05min</p>
                      <p className="total">S/. 30</p>
                    </div>
                  </div>
                )) : (
                  <p>No hay productos para entregar</p>
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderReady;
