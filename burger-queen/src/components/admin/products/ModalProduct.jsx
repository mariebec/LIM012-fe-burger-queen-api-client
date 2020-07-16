import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import TempFormProducts from './TempFormProducts';
import { postUser, putUser } from '../../../controller/admin-products';


// Obtenemos el estado de display y la función closeModal
const ModalUsers = ({display, setDisplay, setAllProducts, allProducts, setProduct, product}) => {
  
  const [ error, setError ] = useState({
    name: false,
    price: false,
    api: '',
  });

   const handleInputChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  } 

  const handleCancel = () => { 
    const idGenerado = (Math.random() * 1000).toFixed(3).toString();
    setProduct({id: idGenerado, name:'', price: '', image: '', type: 'breakfast', date: ''});
    setDisplay(prevState => ({ ...prevState, modal: false }));
    setError({ name:false, password:false, api: '' });
  }

  const handleSave = () => {

    const notValidName = product.name.trim() === '';
    const notValidPrice = product.name.trim() === '';
  
    if (notValidName || notValidPrice) {
      (notValidName) ? setError(prevState => ({ ...prevState, name: true })) : setError(prevState => ({ ...prevState, name: false }));
      (notValidPrice) ? setError(prevState => ({ ...prevState, price: true })) : setError(prevState => ({ ...prevState, price: false }));
    } else { 
      postUser(product)
        .catch((error) => console.log(error))
        .then((resp) => {
          setAllProducts([...allProducts, resp]); 
        });
      const idGenerado = (Math.random() * 100).toFixed(2).toString();
      setProduct({id: idGenerado, name:'', price: '', image: '', type: 'breakfast', date: ''});
      setDisplay(prevState => ({ ...prevState, modal: false }));
      setError({ name:false, price:false, api: '' });
    }
  }

  const handleEdit = () => {
    putUser(product).then((resp) => {
      setAllProducts(allProducts.map((user) => user.id === resp.id? resp : user));
      const idGenerado = (Math.random() * 1000).toFixed(3).toString();
      setProduct({id: idGenerado, name:'', price: '', image: '', type: 'breakfast', date: ''});
      setDisplay(prevState => ({ ...prevState, modal: false }));
      setError({ name:false, price:false, api: '' });
    })
    .catch((error) => {
      setError(error)
    });
  }

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
            handleCancel={handleCancel}
            display={display}/>
        </div>
      </section>, document.getElementById("modal")
    )
  }
  return null;
}

export default ModalUsers;