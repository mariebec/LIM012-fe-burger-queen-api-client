import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

const Categories = () => {
  return (
    <>
    <Header title="CATEGORIAS"/>
    <section className="container-category">
      <div className="waiter-choise"> 
      {/* <button className="menu" ><Link to="/menu">Menú</Link></button> */}
      <a className="category"  href="/menu">Menú</a>
      <a className="category"  href="/menu">Pedidos Listos</a>
      <a className="category"  href="/menu">Cocina</a>
      </div>
      <div className="admin-choise">
      <a className="category" href="/userlist">Admin Usuarios</a>
      <a className="category" href="/productlist">Admin Productos</a>
      </div>
    </section>
    </>
  )
}

export default Categories;