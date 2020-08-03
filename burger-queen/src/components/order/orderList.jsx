import React from 'react';

const OrderList = () => {

  return (
    <aside className="orders-placed">
      <p className="title">Consumo</p>
      <div className="cliente">
        <p className="letter">Cliente</p>
        <input className="name-user"placeholder="Nombres"/>
      </div>
      <section className="order-table">
        <ul className="head-order">
          <li className="qty">Cant.</li>
          <li className="product-name">Productos</li>
          <li className="product-price">Precio</li>
          <li className="delete-product"></li>
        </ul>
        <ul className="order-product">
          <li className="qty button-edit"><i className="option fas fa-plus-circle"></i>1<i className="option fas fa-minus-circle"></i></li>
          <li className="product-name">Sandwich de jamón y queso</li>
          <li className="product-price">s/15</li>
          <li className="delete-product"><i className="icon delete fas fa-trash-alt" /></li>
        </ul>
      </section>
      <div className="total">
        <p>Total a pagar</p>
        <div>$45</div>
      </div>
      <div className="options-button">
        <button className="cancel">Cancelar</button>
        <button className="send-cook">Enviar a cocina</button>
      </div>
    </aside>
  )
};

export default OrderList;
