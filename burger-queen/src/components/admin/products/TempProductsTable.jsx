/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { deleteProduct } from '../../../controller/admin-products';

const TempProductsTable = ({ product, setProduct, modalRoot }) => {
  const handleDeleteProduct = (id) => {
    setProduct((prevState) => ({
      ...prevState,
      allProducts: product.allProducts.filter((item) => item.id !== id),
    }));
    deleteProduct(id);
  };

  const handleUpdateProduct = (item) => {
    document.body.append(modalRoot);
    setProduct((prevState) => ({
      ...prevState,
      productData: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        type: item.type,
        date: item.date,
      },
      display: {
        modal: true,
        button: true,
      },
    }));
  };

  return (
    <table className="table t-product">
      <thead className="head-table">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Categoría</th>
          <th>Fecha</th>
          <th />
        </tr>
      </thead>
      <tbody className="body-table">
        {
          product.allProducts.length > 0
            ? product.allProducts.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>
                  S/.
                  {element.price}
                </td>
                <td>{element.image ? <img src={element.image} alt="product" className="t-img" /> : 'not' }</td>
                <td>{element.type}</td>
                <td className="t-date">{element.date}</td>
                <td>
                  <i className="icon edit fas fa-edit" onClick={() => handleUpdateProduct(element)} role="button" tabIndex={0} />
                  <i className="icon delete fas fa-trash-alt" onClick={() => handleDeleteProduct(element.id)} role="button" tabIndex={0} />
                </td>
              </tr>
            )) : (
              <tr>
                <td>No hay productos agregados</td>
              </tr>
            )
        }
      </tbody>
    </table>
  );
};

export default TempProductsTable;
