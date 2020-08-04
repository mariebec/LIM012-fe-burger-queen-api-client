import React, {useState} from 'react';

const OrderList = ({ state, setState }) => {

  const [ order, setOrder ] = useState({
    _id: 'provisorio',
    client: '',
    products: []
  });

  const handleInputChange = (e) => {
    const data = e.target.value;
    setOrder(prevState => ({
      ...prevState,
      client: data
    }));
  };
  // Obteniendo el total del costo de la orden
  const total = state.productsList.reduce((acc, element) => acc + (element.qty * element.product.price), 0);

  const increase = (id) => {
    const arr = state.productsList.map((item) => {
      if(item.product.id === id){
        item.qty = item.qty + 1;
      }
      return item;
    });
    setState(prev => ({ 
      ...prev, 
      productsList: arr.flat()
    }));
  };

  const decrease = (id) => {
    const arr = state.productsList.map((item) => {
      if(item.product.id === id){
        if(item.qty > 1) item.qty = item.qty - 1;
      }
      return item;
    });
    setState(prev => ({ 
      ...prev, 
      productsList: arr.flat()
    }));
  };

  const delProduct = (id) => {
    setState(prev => ({ ...prev, productsList: state.productsList.filter((item) => item.product.id !== id) }));
  };

  const cancelOrder = () => {
    setState(prev => ({ ...prev, productsList:[] }));
    setOrder(prev => ({ ...prev, client: '' }));
  };

  return (
    <aside className="orders-placed">
      <p className="title">Consumo</p>
      <div className="cliente">
        <p className="letter">Cliente</p>
        <input value={order.client} className="name-user"placeholder="Nombres" onChange={handleInputChange}/>
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
            state.productsList.map((element) => (
            <ul className="order-product" key={element.product.id}>
              <li className="qty button-edit">
                <i className="option fas fa-plus-circle" onClick={() => increase(element.product.id)}/>
                  {element.qty}
                <i className="option fas fa-minus-circle" onClick={() => decrease(element.product.id)}/>
              </li>
              <li className="product-name">{element.product.name}</li>
              <li className="product-price">S/. {element.product.price}</li>
              <li className="delete-product"><i className="icon delete fas fa-trash-alt" onClick={() => delProduct(element.product.id)}/></li>
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
        <button className="cancel" onClick={cancelOrder}>Cancelar</button>
        <button className="send-cook">Enviar a cocina</button>
      </div>
    </aside>
  )
};

export default OrderList;
