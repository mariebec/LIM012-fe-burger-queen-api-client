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

        <div className="header-menu">
        <img src={img} alt="logo" className="logo-Header" />
            <p className="title">TOMAR PEDIDOS</p>
            <div className="userlogueado">Pedro Campbell</div>
        </div>

        <div className="container-orders">
            <div className="breakfast-options">
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
                    <div className="box-option-breakfast">
                        <div className="photo"> <img src={hsimple} alt="logo" className="option-breakfast" /> 
                        <p>Hamburguesas simple</p></div>
                        <div className="photo"> <img src={hdouble} alt="logo" className="option-breakfast" /> 
                        <p>Hamburguesas dobles</p></div>
                        <div className="photo"> <img src={chips} alt="logo" className="option-breakfast" /> 
                        <p>Papas fritas</p></div>
                        <div className="photo"> <img src={onion} alt="logo" className="option-breakfast" />
                        <p>Aros de cebolla</p> </div>
                        <div className="photo"> <img src={water} alt="logo" className="option-breakfast" /> 
                        <p>Agua 500ml</p></div>
                        <div className="photo"> <img src={waterBig} alt="logo" className="option-breakfast" /> 
                        <p>Agua 750ml</p></div>
                    </div>
                </div>
            </div>


            <div>
                <p>Consumo</p>
                <div>
                    <p>Cliente</p>
                    <input placeholder="Nombres"/>
                    <p>N° de mesa</p>
                    <input type="number" />
                </div>
                <div>Aqui va la lista de pedidos</div>
                <div>
                    <p>Total a pagar</p>
                    <div>$45</div>
                </div>
                <div>
                    <button>Cancelar</button>
                    <button>Enviar a cocina</button>
                </div>
            </div>

        </div>

    </section>

)
    

export default MenuView;