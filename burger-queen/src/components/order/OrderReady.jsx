import React from 'react';
import Header from '../Header';

const OrderReady = () => {
  return (
    <>
    <Header/>
    <section className="container-orderReady">
      <div className="container-div">
        <div className="card-scroll">
          <div className="card-orders"> 
            <p className="title">Pedidos para Entregar</p> 
            <div className="list-Order">
              <div className="header-card-order">
                <p>Order N° 512-9</p>
                <p>Rita Holiday</p>
              </div>    
              <table >
                <tbody>
                  <tr>
                    <td className="number">1</td>
                    <td>Hamburguesa Doble</td>
                    <td>s/15</td>
                  </tr>
                  <tr> 
                    <td>1</td>
                    <td>Aros de Cebolla</td>
                    <td>s/10</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Papas fritas</td>
                    <td>s/5</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Hamburguesa Simple</td>
                    <td>s/15</td>
                  </tr>
                </tbody>
              </table>
              <div className="foot-card-order">
                <p>Tiempo: 15.05 min</p>
                <p>Tiempo: 15.05 min</p>
              </div>  
            </div> 
          </div>
        </div>

      </div>

      <div className="container-div">
      <div className="card-scroll">
          <div className="card-orders"> 
            <p className="title">Pedidos para Entregar</p> 
            <div className="list-Order">
              <div className="header-card-order">
                <p>Order N° 512-9</p>
                <p>Rita Holiday</p>
              </div>    
              <table >
                <tbody>
                  <tr>
                    <td className="number">1</td>
                    <td>Hamburguesa Doble</td>
                    <td>s/15</td>
                  </tr>
                  <tr> 
                    <td>1</td>
                    <td>Aros de Cebolla</td>
                    <td>s/10</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Papas fritas</td>
                    <td>s/5</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Hamburguesa Simple</td>
                    <td>s/15</td>
                  </tr>
                </tbody>
              </table>
              <div className="foot-card-order">
                <p>Tiempo: 15.05 min</p>
                <p>Tiempo: 15.05 min</p>
              </div>  
            </div> 
            <div className="list-Order">
              <div className="header-card-order">
                <p>Order N° 512-9</p>
                <p>Rita Holiday</p>
              </div>    
              <table >
                <tbody>
                  <tr>
                    <td className="number">1</td>
                    <td>Hamburguesa Doble</td>
                    <td>s/15</td>
                  </tr>
                  <tr> 
                    <td>1</td>
                    <td>Aros de Cebolla</td>
                    <td>s/10</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Papas fritas</td>
                    <td>s/5</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Hamburguesa Simple</td>
                    <td>s/15</td>
                  </tr>
                </tbody>
              </table>
              <div className="foot-card-order">
                <p>Tiempo: 15.05 min</p>
                <p>Tiempo: 15.05 min</p>
              </div>  
            </div>  
          </div>
        </div>
      </div>  
    </section>
    </>
  )
};

export default OrderReady;



