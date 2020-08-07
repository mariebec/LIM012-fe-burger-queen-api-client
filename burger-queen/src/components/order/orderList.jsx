/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { postOrder } from '../../controller/order';

const OrderList = ({ state, setState }) => {
  const [clientName, setClientName] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setClientName(e.target.value);
  };
  // Obteniendo el total del costo de la orden
  const total = state.productsList.reduce((acc, element) => (
    acc + (element.qty * element.product.price)), 0);

  const increase = (id) => {
    const arr = state.productsList.map((item) => {
      if (item.product.id === id) {
        item.qty += 1;
      }
      return item;
    });
    setState((prev) => ({
      ...prev,
      productsList: arr.flat(),
    }));
  };

  const decrease = (id) => {
    const arr = state.productsList.map((item) => {
      if (item.product.id === id) {
        if (item.qty > 1) item.qty -= 1;
      }
      return item;
    });
    setState((prev) => ({
      ...prev,
      productsList: arr.flat(),
    }));
  };

  const delProduct = (id) => {
    setState((prev) => ({
      ...prev,
      productsList: state.productsList.filter((item) => item.product.id !== id),
    }));
  };

  const cancelOrder = () => {
    setState((prev) => ({ ...prev, productsList: [] }));
    setClientName('');
    setError(false);
  };

  const handlePost = () => {
    const name = clientName.trim() === '' || clientName.length < 2;
    if (!name && state.productsList.length > 0) {
      const arrProduct = state.productsList.map((item) => ({
        qty: item.qty,
        productId: item.product.id,
      }));
      const obj = {
        _id: 'id_003',
        client: clientName,
        products: arrProduct,
      };
      postOrder(obj).then((resp) => {
        console.log(resp);
      });
      cancelOrder();
    } else {
      setError(true);
    }
  };

  return (
    <aside className="orders-placed">
      <p className="title">Consumo</p>
      <div className="cliente">
        <p className="letter">Cliente</p>
        <input value={clientName} className="name-client" placeholder="Nombres" onChange={handleInputChange} />
      </div>
      <section className="order-table">
        <ul className="head-order">
          <li className="qty">Cant.</li>
          <li className="product-name">Productos</li>
          <li className="product-price">Precio</li>
          <li className="delete-product" />
        </ul>
        <div className="product-list-container">
          {
            state.productsList.length > 0
              ? state.productsList.map((element) => (
                <ul className="order-product" key={element.product.id}>
                  <li className="qty button-edit">
                    <label htmlFor="plus">
                      <i id="plus" className="option fas fa-plus-circle" onClick={() => increase(element.product.id)} role="button" tabIndex={0} />
                    </label>
                    {element.qty}
                    <i className="option fas fa-minus-circle" onClick={() => decrease(element.product.id)} role="button" tabIndex={0} />
                  </li>
                  <li className="product-name">{element.product.name}</li>
                  <li className="product-price">
                    S/.
                    {element.product.price}
                  </li>
                  <li className="delete-product"><i className="icon delete fas fa-trash-alt" onClick={() => delProduct(element.product.id)} role="button" tabIndex={0} /></li>
                </ul>
              )) : (
                <p>No hay productos agregados</p>
              )
          }
        </div>
      </section>
      <div className="total">
        <p>Total a pagar</p>
        <div>
          S/.
          {total}
        </div>
      </div>
      <div className="options-button">
        <button type="button" className="cancel" onClick={cancelOrder}>Cancelar</button>
        <button type="button" className="send-cook" onClick={handlePost}>Enviar a cocina</button>
      </div>
      { error && <p className="error-order">Debe haber agregar productos o el nombre del cliente</p> }
    </aside>
  );
};

export default OrderList;
