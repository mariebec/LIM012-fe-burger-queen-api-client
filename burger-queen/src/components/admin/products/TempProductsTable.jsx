import React from 'react';
import { deleteProduct} from '../../../controller/admin-products';


const TempProductsTable = ({ product, setProduct, modalRoot }) => {

  const handleDeleteProduct = (id) => {
    setProduct(prevState => ({
      ...prevState,
      allProducts: product.allProducts.filter((product) => product.id !== id),
    }));
    deleteProduct(id);
  };


  const handleUpdateProduct = (product) => {
    document.body.append(modalRoot);
    setProduct(prevState => ({
      ...prevState,
      productData: {
        id: product.id,
        name:product.name,
        price: product.price,
        image:product.image,
        type: product.type,
        date: product.date
      },
      display: {
        modal: true,
        button: true
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
          <th></th>
        </tr>
      </thead>
      <tbody className="body-table">
        { 
          product.allProducts.length > 0 ?
          product.allProducts.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>S/. {element.price}</td>
              <td>{element.image ? <img src={element.image} alt="product" className="t-img"/> : 'not' }</td>
              <td>{element.type}</td>
              <td className="t-date">{element.date}</td>
              <td>
                <i className="icon edit fas fa-edit" onClick = {()=> handleUpdateProduct(element) }/>
                <i className="icon delete fas fa-trash-alt" onClick = {()=> handleDeleteProduct(element.id) } />
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
  )
}

export default TempProductsTable;
