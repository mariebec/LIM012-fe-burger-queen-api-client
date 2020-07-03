import React from 'react';
import img from '../../assets/logo-fondomarron.png';
import hsimple from '../../assets/hamburguesa-simple.png';
import hdouble from '../../assets/hamburguesa-doble.png';
import chips from '../../assets/papas-fritas.png';
import onion from '../../assets/aros-cebolla.png';
import water from '../../assets/agua.png';
import waterBig from '../../assets/agua-big.png';

const MenuView = () => (
  <section className="container-menu">

    <header className="header-menu">
      <img src={img} alt="logo" className="logo-Header" />
      <p className="title">TOMAR PEDIDOS</p>
      <div className="user-logged">
        <p className="user-name">Pedro Campbell</p>
        <i className="user-icon fas fa-user"></i>
        <i class="menu-icon fas fa-bars"></i>
      </div>
    </header>

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
              <img src={hsimple} alt="logo" className="img-food" /> 
              <p>Hamburguesas simple</p>
            </div>
            <div className="box-food"> 
              <img src={hdouble} alt="logo" className="img-food" /> 
              <p>Hamburguesas dobles</p>
            </div>
            <div className="box-food">
              <img src={chips} alt="logo" className="img-food" /> 
              <p>Papas fritas</p>
            </div>
            <div className="box-food"> 
              <img src={onion} alt="logo" className="img-food" />
              <p>Aros de cebolla</p> 
            </div>
            <div className="box-food">
              <img src={water} alt="logo" className="img-food" /> 
              <p>Agua 500ml</p>
            </div>
            <div className="box-food"> 
              <img src={waterBig} alt="logo" className="img-food" /> 
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

  </section>

)
    

export default MenuView;