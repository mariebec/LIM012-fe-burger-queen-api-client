import React, { useState, useEffect } from 'react';
import { getProducts } from '../../controller/admin-products';
import Header from '../Header';

const MenuView = () => {

  const initialState = {
    id: 0,
    name:'',
    price: '',
    image: '',
    type: '',
    date: ''
  };
  
  const [ allProducts, setAllProducts ] = useState(initialState);
  const [ products, setProducts ] = useState(initialState);

  const [ display, setDisplay ] = useState({
    btnMenu: 'all',
    btnType: true
  })

  useEffect(() => {
    getProducts().then((resp) => {
      setProducts(resp);
      setAllProducts(resp);
    });
  }, []);

  const handleType = (type) => {
    switch (type) {
      case 'menu':
          setProducts(allProducts.filter((product) => product.type !== 'breakfast'));
          setDisplay({btnMenu: type, btnType: true});
        break;
      case 'all':
          setProducts(allProducts);
          setDisplay({btnMenu: type, btnType: true});
        break;
      case 'breakfast':
        setProducts(allProducts.filter((product) => product.type === type));
        setDisplay({btnMenu: type, btnType: false});
      break;
      default: 
        setProducts(allProducts.filter((product) => product.type === type));
      break;
    }
  };

  return (
    <>
    <Header title="TOMAR PEDIDOS"/>
    <main className="container-orders">
      <section className="products-options">
        <div className="options-type">
          <button onClick={() => handleType('all')} className={display.btnMenu === 'all' ? "btn-active options-food" : "options-food"}>
            Todos
          </button>
          <button onClick={() => handleType('breakfast')} className={display.btnMenu === 'breakfast' ? "btn-active options-food" : "options-food"}>
            Desayuno
          </button>
          <button onClick={() => handleType('menu')} className={display.btnMenu === 'menu' ? "btn-active options-food" : "options-food"}>
            Menú
          </button>
        </div>
        <div className="box-photos">
          { display.btnType &&
          <div className="box-btn-food">
            <button onClick={() => handleType('burger')} className="btn-food">Hamburguesas</button>
            <button onClick={() => handleType('extra')} className="btn-food">Adicionales</button>
            <button onClick={() => handleType('drink')} className="btn-food">Bebidas</button>
          </div>}
          <div className="box-option-food">
            { 
              products.length > 0 ?
              products.map((element) => (
                <div key={element.id} className="box-food">
                  <img src={element.image} alt="logo" className="img-food" /> 
                  <p>{element.name}</p>
              </div>
              )) : (
                <div className="box-food">
                  <p>No hay productos</p>
              </div>
              )
            }
          </div>
        </div>
      </section>
      <aside className="orders-placed">
        <p className="title">Consumo</p>
        <div className="cliente">
          <p className="letter">Cliente</p>
          <input className="name-user"placeholder="Nombres"/>
        </div>
        <table >
      <thead className="head-order">
        <tr>
          <th>Cant.</th>
          <th>Product</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="body-order">
      <tr>
          <td className="button-edit"><i className="option fas fa-plus-circle"></i>1<i className="option fas fa-minus-circle"></i></td>
          <td>Hamburguesa Doble</td>
          <td>s/15</td>
          <td><i className="icon delete fas fa-trash-alt" /></td>
        </tr>
        <tr>
          <td className="button-edit"><i className="option fas fa-plus-circle"></i>1<i className="option fas fa-minus-circle"></i></td>
          <td>Hamburguesa Simple</td>
          <td>s/10</td>
          <td><i className="icon delete fas fa-trash-alt" /></td>
        </tr>
        <tr>
          <td className="button-edit"><i className="option fas fa-plus-circle"></i>2<i className="option fas fa-minus-circle"></i></td>
          <td>Aros de cebolla</td>
          <td>s/2</td>
          <td><i className="icon delete fas fa-trash-alt" /></td>
        </tr>
        <tr>
          <td className="button-edit"><i className="option fas fa-plus-circle"></i>1<i className="option fas fa-minus-circle"></i></td>
          <td>Papas fritas </td>
          <td>s/5</td>
          <td><i className="icon delete fas fa-trash-alt" /></td>
        </tr>
      </tbody>
    </table>
        <div className="total">
          <p>Total a pagar</p>
          <div>$45</div>
        </div>
        <div className="options-button">
          <button className="cancel">Cancelar</button>
          <button className="send-cook">Enviar a cocina</button>
        </div>
      </aside>
    </main>
  </>
  )
};
    
export default MenuView;
