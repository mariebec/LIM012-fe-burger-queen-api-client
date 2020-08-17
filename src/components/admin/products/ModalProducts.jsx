import React from 'react';
import ReactDOM from 'react-dom';
import TempFormProducts from './TempFormProducts';

const ModalProducts = ({ product, setProduct }) => {
  if (product.display.modal) {
    return ReactDOM.createPortal(
      <section className="modal-container">
        <div className="background-modal" />
        <div className="modal-window">
          <p className="title-modal">Agregar producto</p>
          <TempFormProducts product={product} setProduct={setProduct} />
        </div>
      </section>, document.getElementById('modal'),
    );
  }
  return null;
};

export default ModalProducts;
