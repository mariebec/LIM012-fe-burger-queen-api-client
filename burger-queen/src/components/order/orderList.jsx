import React from 'react';

const OrderList = ({ state }) => {

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
        <div className="product-list-container">
          {
            state.clientProducts.length > 0 ?
            state.clientProducts.map((element) => (
            <ul className="order-product" key={element.id}>
              <li className="qty button-edit"><i className="option fas fa-plus-circle"></i>1<i className="option fas fa-minus-circle"></i></li>
              <li className="product-name">{element.name}</li>
              <li className="product-price">{element.price}</li>
              <li className="delete-product"><i className="icon delete fas fa-trash-alt" /></li>
            </ul>
            )) : (
              <p>No hay productos agregados</p>
            )
          }
        </div>
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
