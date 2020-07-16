import React, {useState, useEffect} from 'react';
import Header from '../../Header';
import UsersTable from './TempProductsTable';
import { getUsers, deleteUser } from '../../../controller/admin-products';
import ModalUsers from './ModalProduct';


const UserList = () => {

  const idGenerado = (Math.random() * 100).toFixed(2).toString();
  const initialState = {
    id: idGenerado,
    name:'',
    price: '',
    image: '',
    type: 'breakfast',
    date: '',
  };

  const [ product, setProduct ] = useState(initialState);
  const [ allProducts, setAllProducts ] = useState([]);
  const [ display, setDisplay ] = useState([{
    modal: false,
    button: false
  }]);

  useEffect(() => {
    getUsers().then((resp) => setAllProducts(resp));
  }, []);

  const handleAddUser = () => {
    setDisplay({ modal: true, button: false });
  }

  const handleDeleteUser = (id) => {
    // console.log('se va a borrar', id)
    setAllProducts(allProducts.filter((user) => user.id !== id))
    deleteUser(id);
  }

  const handleUpdateUser = (product) => {
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

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-users">
        <div className="btn-container">
          <button onClick={handleAddUser}>Agregar producto</button>
          <ModalUsers display={display} setDisplay={setDisplay} setAllProducts={setAllProducts} 
          allProducts={allProducts} setProduct={setProduct} product={product}/>
        </div>
        <h2>Lista de productos</h2>
        <UsersTable allProducts={allProducts} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser}/>

      </main>
    </>
  )
}

export default UserList;