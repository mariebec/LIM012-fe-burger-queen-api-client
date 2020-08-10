import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import TempProductsTable from './TempProductsTable';
import { getProducts } from '../../../controller/admin-products';
import ModalProducts from './ModalProducts';

const ProductList = () => {
  const idGenerado = (Math.random() * 1000).toFixed(0).toString();
  const [product, setProduct] = useState({
    allProducts: [],
    productData: {
      id: idGenerado,
      name: '',
      price: '',
      image: '',
      type: '',
      date: '',
    },
    display: {
      modal: false,
      button: false,
    },
  });

  useEffect(() => {
    getProducts().then((resp) => setProduct((prevState) => ({
      ...prevState,
      allProducts: resp,
    })));
  }, []);

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');

  const handleAdd = () => {
    document.body.append(modalRoot);
    setProduct((prevState) => ({
      ...prevState,
      display: {
        modal: true,
        button: false,
      },
    }));
  };

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-list">
        <div className="btn-container">
          <button onClick={handleAdd} data-testid="modal" type="button">Agregar producto</button>
          <ModalProducts product={product} setProduct={setProduct} />
        </div>
        <h2>Lista de productos</h2>
        <TempProductsTable product={product} setProduct={setProduct} modalRoot={modalRoot} />
      </main>
    </>
  );
};

export default ProductList;
