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
      <aside className="che">
        <p>Consumo</p>
        <div>
          <p>Cliente</p>
          <input placeholder="Nombres"/>
          <p>N° de mesa</p>
          <input type="number" />
        </div>
        <ul>
          <li></li>
        </ul>
        <div>
          <p>Total a pagar</p>
          <div>$45</div>
        </div>
        <div>
          <button>Cancelar</button>
          <button>Enviar a cocina</button>
        </div>
      </aside>
    </main>
  </>

)
    

export default MenuView;