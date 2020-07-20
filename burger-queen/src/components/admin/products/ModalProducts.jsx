import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import TempFormProducts from './TempFormProducts';
import { postProduct, putProduct } from '../../../controller/admin-products';


const ModalProducts = ({display, setDisplay, setAllProducts, allProducts, setProduct, product}) => {
  
  const [ error, setError ] = useState({
    name: false,
    price: false,
    date: false,
    api: ''
  });

   const handleInputChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  };

  const handleFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = (e) => {
      setProduct({...product, image: e.target.result});
    };
  };

  const closeModal = () => { 
    const idGenerado = (Math.random() * 1000).toFixed(0).toString();
    setProduct({id: idGenerado, name:'', price: '', image: '', type: 'breakfast', date: ''});
    setDisplay(prevState => ({ ...prevState, modal: false }));
    setError({ name:false, price:false, api: '' });
  };

  const handleRequest = (request) => {
    const notValidName = product.name.trim() === '';
    const notValidPrice = product.price.trim() === '';
    const notValidDate = product.date === '';

    if (notValidName || notValidPrice || notValidDate) {
      (notValidName) ? setError(prevState => ({ ...prevState, name: true })) : setError(prevState => ({ ...prevState, name: false }));
      (notValidPrice) ? setError(prevState => ({ ...prevState, price: true })) : setError(prevState => ({ ...prevState, price: false }));
      (notValidDate) ? setError(prevState => ({ ...prevState, date: true })) : setError(prevState => ({ ...prevState, date: false }));
    } else { 
      if (request === 'POST') {
        postProduct(product)
        .then((resp) => {
          setAllProducts([...allProducts, resp]); 
          closeModal();
        }).catch((error) => {
          setError(error);
        });
      } else {
        putProduct(product).then((resp) => {
          setAllProducts(allProducts.map((product) => product.id === resp.id? resp : product));
          closeModal();
        }).catch((error) => {
          setError(error);
        });
      };
    };
  };

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  document.body.append(modalRoot);

  if(display.modal) {
    return ReactDOM.createPortal(
      <section className="modal-container">
        <div className="background-modal"></div>
        <div className="modal-window">
          <p className="title-modal">Agregar producto</p>
          <TempFormProducts 
            product={product} 
            error={error}
            handleInputChange={handleInputChange}
            handleRequest={handleRequest}
            handleFile={handleFile}
            closeModal={closeModal}
            display={display}/>
        </div>
      </section>, document.getElementById("modal")
    )
  }
  return null;
}

export default ModalProducts;
