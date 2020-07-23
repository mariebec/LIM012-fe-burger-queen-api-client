import React, {useState, useEffect} from 'react';
import Header from '../../Header';
import TempProductsTable from './TempProductsTable';
import { getProducts, deleteProduct } from '../../../controller/admin-products';
import ModalProducts from './ModalProducts';


const ProductList = () => {

  const idGenerado = (Math.random() * 1000).toFixed(0).toString();
  const initialState = {
    id: idGenerado,
    name:'',
    price: '',
    image: '',
    type: 'breakfast',
    date: ''
  };

  const [ product, setProduct ] = useState(initialState);
  const [ allProducts, setAllProducts ] = useState([]);
  const [ display, setDisplay ] = useState([{
    modal: false,
    button: false
  }]);

  useEffect(() => {
    getProducts().then((resp) => setAllProducts(resp));
  }, []);

  const handleDeleteProduct = (id) => {
    // console.log('se va a borrar', id)
    setAllProducts(allProducts.filter((product) => product.id !== id))
    deleteProduct(id);
  }

  const handleUpdateProduct = (product) => {
    setDisplay({ modal: true, button: true });
    setProduct({ 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      image: product.image, 
      type: product.type, 
      date: product.date
    });
  }

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');

  const handleAdd = () => {
    document.body.append(modalRoot);
    setDisplay({ modal: true, button: false })
  };

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-list">
        <div className="btn-container">
          <button onClick={handleAdd} >Agregar producto</button>
          {display.modal && 
          <ModalProducts display={display} setDisplay={setDisplay} setAllProducts={setAllProducts} 
          allProducts={allProducts} setProduct={setProduct} product={product}/>
          }
        </div>
        <h2>Lista de productos</h2>
        <TempProductsTable allProducts={allProducts} handleDeleteProduct={handleDeleteProduct} handleUpdateProduct={handleUpdateProduct}/>

      </main>
    </>
  )
}

export default ProductList;