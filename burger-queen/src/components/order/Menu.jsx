import React, { useState, useEffect } from 'react';
import { getProducts } from '../../controller/admin-products';
import Header from '../Header';
import ProductsMenu from './ProductsMenu';
import OrderList from './orderList';

const MenuView = () => {

  const [ state, setState ] = useState({
    allProducts: [],
    products: [],
    clientProducts: []
  });

  useEffect(() => {
    getProducts().then((resp) => {
      setState(prevState => ({ ...prevState, allProducts: resp, products: resp}));
    });
  }, []);

  return (
    <>
    <Header title="TOMAR PEDIDOS"/>
    <main className="container-orders">
      <ProductsMenu state={state} setState={setState}/>
      <OrderList state={state}/>
    </main>
  </>
  )
};
    
export default MenuView;
