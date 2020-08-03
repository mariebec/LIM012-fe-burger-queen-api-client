import React, { useState, useEffect } from 'react';
import { getProducts } from '../../controller/admin-products';
import Header from '../Header';
import ProductsMenu from './ProductsMenu';
import OrderList from './orderList';

const MenuView = () => {

  const [ allProducts, setAllProducts ] = useState([]);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts().then((resp) => {
      setAllProducts(resp);
      setProducts(resp);
    });
  }, []);

  return (
    <>
    <Header title="TOMAR PEDIDOS"/>
    <main className="container-orders">
      <ProductsMenu allProducts={allProducts} products={products} setProducts={setProducts}/>
      <OrderList/>
    </main>
  </>
  )
};
    
export default MenuView;
