import React from 'react';
import Header from '../../Header';

const ProductList = () => {
  return (
    <>
      <Header title="ADMINISTRADOR"/>
      <main className="container-products">
        <div className="btn-container">
          <button>Agregar nuevo</button>
        </div>
        <h2>Lista de Productos</h2>
        <ul>
          <li className="table header">
            <p className="l-column">Nombre</p>
            <p className="s-column">Id</p>
            <p className="s-column">Precio</p>
            <p className="s-column">Imagen</p>
            <p className="s-column">Tipo</p>
            <p className="m-column">Fecha</p>
            <p className="m-column"></p>
          </li>
          <li className="table data">
            <p className="l-column">Hamburguesa simple</p>
            <p className="s-column">bgs</p>
            <p className="s-column">s/ 10</p>
            <button className="s-column">Ver</button>
            <p className="s-column"> - </p>
            <p className="m-column">27/06/2020</p>
            <div className="m-column">
              <i className="icon edit fas fa-edit"></i>
              <i className="icon delete fas fa-trash-alt"></i>
            </div>
          </li>
        </ul>
      </main>
    </>
  )
}

export default ProductList;