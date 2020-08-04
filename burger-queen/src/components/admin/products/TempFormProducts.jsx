/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { postProduct, putProduct } from '../../../controller/admin-products';

const TempFormProducts = ({ product, setProduct }) => {
  const [error, setError] = useState({
    name: false,
    price: false,
    date: false,
    api: '',
  });

  const handleInputChange = (e) => {
    const input = e.target.name;
    const data = e.target.value;
    setProduct((prevState) => ({
      ...prevState,
      productData: {
        ...product.productData,
        [input]: data,
      },
    }));
  };

  const handleFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = (event) => {
      setProduct({ ...product, image: event.target.result });
    };
  };

  const closeModal = () => {
    const idGenerado = (Math.random() * 1000).toFixed(0).toString();
    setProduct((prevState) => ({
      ...prevState,
      productData: {
        id: idGenerado,
        name: '',
        price: '',
        image: '',
        type: '',
        date: '',
      },
      display: {
        ...product.productData,
        modal: false,
      },
    }));
    setError({ name: false, price: false, api: '' });
    document.body.removeChild(document.getElementById('modal'));
  };

  const handleRequestProduct = (request) => {
    const validName = product.productData.name.trim() === '';
    const validPrice = product.productData.price.trim() === '';

    if (validName || validPrice) {
      if (validName) setError((prevState) => ({ ...prevState, name: true }));
      else setError((prevState) => ({ ...prevState, name: false }));
      if (validPrice) setError((prevState) => ({ ...prevState, price: true }));
      else setError((prevState) => ({ ...prevState, price: false }));
    } else if (request === 'POST') {
      postProduct(product.productData).then((resp) => {
        setProduct((prevState) => ({
          ...prevState,
          allProducts: [...product.allProducts, resp],
        }));
        closeModal();
      }).catch((err) => {
        setError(err);
      });
    } else {
      putProduct(product.productData).then((resp) => {
        setProduct((prevState) => ({
          ...prevState,
          allProducts: product.allProducts.map((prod) => (prod.id === resp.id ? resp : prod)),
        }));
        closeModal();
      }).catch((err) => {
        setError(err);
      });
    }
  };

  return (
    <form className="form-modal">
      <div className="form-container fc-product">
        <div className="field-p">
          <label htmlFor="input-name" className="label-text">Nombre:</label>
          <div className="box-input">
            <input
              defaultValue={product.productData.name}
              id="input-name"
              name="name"
              type="text"
              onChange={handleInputChange}
              placeholder={error.name ? 'Campo requerido' : 'Ingrese el nombre'}
              className={error.name ? 'input-modal error' : 'input-modal'}
            />
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-price" className="label-text">Precio:</label>
          <p className="label-text">S/.</p>
          <div className="box-input">
            <input
              defaultValue={product.productData.price}
              id="input-price"
              name="price"
              onChange={handleInputChange}
              type="number"
              placeholder={error.price ? 'Campo requerido' : 'Ingrese el precio'}
              className={error.price ? 'input-modal error' : 'input-modal'}
            />
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-category" className="label-text">Categoría:</label>
          <div className="box-option">
            <select id="input-admin" onChange={handleInputChange} name="type" className="select-modal sm-product" defaultValue={product.productData.type}>
              <option value="breakfast">Desayuno</option>
              <option value="burger">Hamburguesa</option>
              <option value="extra">Adicional</option>
              <option value="drink">Bebida</option>
            </select>
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-date" className="label-text">Fecha:</label>
          <div className="box-option">
            <input
              defaultValue={product.productData.date}
              id="input-date"
              type="date"
              name="date"
              className={error.date ? 'date d-error' : 'date'}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-admin" className="label-text">Imagen:</label>
          <div className="box-option">
            <input type="file" onChange={handleFile} />
          </div>
        </div>
        {error.message !== '' && <span>{error.message}</span>}
        <div>
          <button type="button" className="btn-modal cancel" onClick={closeModal}>Cancelar</button>
          {product.display.button ? (
            <button type="button" className="btn-modal save" onClick={() => handleRequestProduct('PUT')}>Editar</button>
          ) : (
            <button type="button" className="btn-modal save" onClick={() => handleRequestProduct('POST')}>Guardar</button>
          )}
        </div>
      </div>
    </form>
  );
};

export default TempFormProducts;
