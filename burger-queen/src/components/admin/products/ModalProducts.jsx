import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import TempFormProducts from './TempFormProducts';
import { postProduct, putProduct } from '../../../controller/admin-products';


// Obtenemos el estado de display y la función closeModal
const ModalProducts = ({display, setDisplay, setAllProducts, allProducts, setProduct, product}) => {
  
  const [ error, setError ] = useState({
    name: false,
    price: false,
    date: false,
    api: ''
  });

   const handleInputChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  } 

  const handleFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = (e) => {
      setProduct({...product, image: e.target.result});
    }
  }

  const handleCancel = () => { 
    const idGenerado = (Math.random() * 1000).toFixed(0).toString();
    setProduct({id: idGenerado, name:'', price: '', image: '', type: 'breakfast', date: ''});
    setDisplay(prevState => ({ ...prevState, modal: false }));
    setError({ name:false, price:false, api: '' });
  }

  const handleSave = () => {

    const notValidName = product.name.trim() === '';
    const notValidPrice = product.price.trim() === '';
    const notValidDate = product.date === '';

    if (notValidName || notValidPrice || notValidDate) {
      (notValidName) ? setError(prevState => ({ ...prevState, name: true })) : setError(prevState => ({ ...prevState, name: false }));
      (notValidPrice) ? setError(prevState => ({ ...prevState, price: true })) : setError(prevState => ({ ...prevState, price: false }));
      (notValidDate) ? setError(prevState => ({ ...prevState, date: true })) : setError(prevState => ({ ...prevState, date: false }));
    } else { 
      postProduct(product)
        .catch((error) => console.log(error))
        .then((resp) => {
          setAllProducts([...allProducts, resp]); 
        });
      const idGenerado = (Math.random() * 10).toFixed(2).toString();
      setProduct({id: idGenerado, name:'', price: '', image: '', type: 'breakfast', date: ''});
      setDisplay(prevState => ({ ...prevState, modal: false }));
      setError({ name:false, price:false, api: '' });
    }
  }

  const handleEdit = () => {
    putProduct(product).then((resp) => {
      setAllProducts(allProducts.map((product) => product.id === resp.id? resp : product));
      const idGenerado = (Math.random() * 1000).toFixed(0).toString();
      setProduct({id: idGenerado, name:'', price: '', image: '', type: 'breakfast', date: ''});
      setDisplay(prevState => ({ ...prevState, modal: false }));
      setError({ name:false, price:false, api: '' });
    })
    .catch((error) => {
      setError(error)
    });
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
            handleSave={handleSave}
            handleEdit={handleEdit}
            handleFile={handleFile}
            handleCancel={handleCancel}
            display={display}/>
        </div>
      </section>, document.getElementById("modal")
    )
  }
  return null;
}

export default ModalProducts;