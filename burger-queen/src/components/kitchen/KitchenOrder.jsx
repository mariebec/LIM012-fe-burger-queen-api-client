/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from '../Header';
// import OrderList from '../order/orderList';
import { getOrders } from '../../controller/order';

const KitchenOrder = () => {
  const [kitOrder, setKitOrder] = useState([]);

  useEffect(() => {
    getOrders().then((resp) => setKitOrder(resp));
  }, []);

  const handleOrder = () => {
    setKitOrder((prev) => ({ ...prev, kitOrder: [] }));
  };
  console.log(kitOrder);

  return (
    <>
      <Header title="COCINA" />
      <section className="kitchen-container">
        {
        kitOrder.length > 0
          ? kitOrder.map((element) => (
            <div className="kitchen-card" key={element.id}>
              <div className="header-card">
                <p>
                  {element.id}
                  |
                  {element.client}
                </p>
                <p>{element.dateEntry}</p>
              </div>
              <div className="body-card">

                <table className="list">
                  <tbody>
                    {element.products.map((item) => (
                      <tr>
                        <td>{item.qty}</td>
                        <td>{item.product}</td>
                      </tr>
                    )) }
                  </tbody>
                </table>
                <button type="button" className="order-ready" onClick={handleOrder}> LISTO </button>
              </div>
            </div>
          )) : (
            <p>No hay productos agregados</p>

          )
  }

      </section>

    </>
  );
};

export default KitchenOrder;
