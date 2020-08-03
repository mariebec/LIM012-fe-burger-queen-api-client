import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

const Categories = () => {
  const currentUSer = sessionStorage.getItem('currentRol');

  return (
    <>
    <Header title="CATEGORIAS"/>
    <section className="container-category">
      <div className="waiter-choise"> 
        <Link to="/menu"><div className="category" >Menú</div> </Link>
        <Link to="/orders"><div className="category" >Pedidos Listos</div> </Link>
        <Link to="/kitchen"><div className="category" >Cocina</div> </Link>
      </div>
      { currentUSer === 'true' &&
        <div className="admin-choise">
         <Link to="/userlist"><div className="category" >Admin Usuarios</div> </Link>
         <Link to="/productlist"><div className="category" >Admin Productos</div> </Link>  
       </div>
      }
    </section>
    </>
  )
}

export default Categories;