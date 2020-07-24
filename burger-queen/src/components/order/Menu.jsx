import React from 'react';
import Header from '../Header';
import photos from './product-img';

const MenuView = () => (
  <>
    <Header title="TOMAR PEDIDOS"/>
    <main className="container-orders">
      <section className="products-options">
        <div className="options-header">
          <button className="options-food">Desayuno</button>
          <button className="options-food">Almuerzo o Cena</button>
        </div>
        <div className="box-photos">
          <div className="box-btn-food">
            <button className="btn-food">Hamburguesas</button>
            <button className="btn-food">Adicionales</button>
            <button className="btn-food">Bebidas</button>
          </div>
          <div className="box-option-food">
            <div className="box-food">
              <img src={photos.hsimple} alt="logo" className="img-food" /> 
              <p>Hamburguesas simple</p>
            </div>
            <div className="box-food"> 
              <img src={photos.hdouble} alt="logo" className="img-food" /> 
              <p>Hamburguesas dobles</p>
            </div>
            <div className="box-food">
              <img src={photos.fries} alt="logo" className="img-food" /> 
              <p>Papas fritas</p>
            </div>
            <div className="box-food"> 
              <img src={photos.onion} alt="logo" className="img-food" />
              <p>Aros de cebolla</p> 
            </div>
            <div className="box-food">
              <img src={photos.water500} alt="logo" className="img-food" /> 
              <p>Agua 500ml</p>
            </div>
            <div className="box-food"> 
              <img src={photos.water750} alt="logo" className="img-food" /> 
              <p>Agua 750ml</p>
            </div>
          </div>
        </div>
      </section>
      <aside className="orders-placed">
        <p className="title">Consumo</p>
        <div className="cliente">
          <p className="letter">Cliente</p>
          <input className="name-user"placeholder="Nombres"/>
        </div>
        <table >
      <thead className="head-order">
        <tr>
          <th>Cant.</th>
          <th>Product</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="body-order">
      <tr>
          <td className="button-edit"><i className="option fas fa-plus-circle"></i>1<i className="option fas fa-minus-circle"></i></td>
          <td>Hamburguesa Doble</td>
          <td>s/15</td>
          <td><i className="icon delete fas fa-trash-alt" /></td>
        </tr>
        <tr>
          <td className="button-edit"><i className="option fas fa-plus-circle"></i>1<i className="option fas fa-minus-circle"></i></td>
          <td>Hamburguesa Simple</td>
          <td>s/10</td>
          <td><i className="icon delete fas fa-trash-alt" /></td>
        </tr>
        <tr>
          <td className="button-edit"><i className="option fas fa-plus-circle"></i>2<i className="option fas fa-minus-circle"></i></td>
          <td>Aros de cebolla</td>
          <td>s/2</td>
          <td><i className="icon delete fas fa-trash-alt" /></td>
        </tr>
        <tr>
          <td className="button-edit"><i className="option fas fa-plus-circle"></i>1<i className="option fas fa-minus-circle"></i></td>
          <td>Papas fritas </td>
          <td>s/5</td>
          <td><i className="icon delete fas fa-trash-alt" /></td>
        </tr>
      </tbody>
    </table>
        <div className="total">
          <p>Total a pagar</p>
          <div>$45</div>
        </div>
        <div className="options-button">
          <button className="cancel">Cancelar</button>
          <button className="send-cook">Enviar a cocina</button>
        </div>
      </aside>
    </main>
  </>

)
    

export default MenuView;