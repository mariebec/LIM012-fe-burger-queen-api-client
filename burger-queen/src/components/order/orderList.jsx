import React, {useState} from 'react';

const OrderList = ({ state, setState }) => {
  // const [ quantity, setQuantity ] = useState(state.productsList.qty);
  const total = state.productsList.reduce((acc, element) => acc + (element.qty * element.product.price), 0);

  const increase = (index) => {
    // setState(prev => ({ 
    //   ...prev, 
    //   productsList: [...state.productsList, { ...state.productsList[index], qty: state.productsList[index].qty + 1 }]
    // }));
    // console.log(state.productsList)
  };

  const decrease = (index) => {
    // setState(prev => ({ 
    //   ...prev, 
    //   productsList: [...state.productsList[index], { qty: state.productsList[index].qty - 1 }]
    // }));
  };

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
            state.productsList.length > 0 ?
            state.productsList.map((element, index) => (
            <ul className="order-product" key={element.product.id}>
              <li className="qty button-edit">
                <i className="option fas fa-plus-circle" onClick={() => increase(index)}/>
                  {element.qty}
                <i className="option fas fa-minus-circle" onClick={() => decrease(index)}/>
              </li>
              <li className="product-name">{element.product.name}</li>
              <li className="product-price">S/. {element.product.price}</li>
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
        <div>S/. {total}</div>
      </div>
      <div className="options-button">
        <button className="cancel">Cancelar</button>
        <button className="send-cook">Enviar a cocina</button>
      </div>
    </aside>
  )
};

export default OrderList;
