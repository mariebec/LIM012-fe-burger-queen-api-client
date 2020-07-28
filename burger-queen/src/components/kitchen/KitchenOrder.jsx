import React from 'react'
import Header from '../Header'

const KitchenOrder = () => {
  return (
    <> 
    <Header title="COCINA"/>
    <section className="kitchen-container">
      <div className="kitchen-card">
        <div className="header-card">
          <p>Orden n° 519 | Pedro Campbell</p>
          <p>Tiempo: 10:25 min</p>
        </div>
        <div className="body-card">
          <table className="list">
            <tbody>
              <tr>
                <td>1</td>
                <td>Hamburguesa Doble</td>
              </tr>
              <tr> 
                <td>1</td>
                <td>Aros de Cebolla</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Papas fritas</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hamburguesa Simple</td>
              </tr>
            </tbody>
              
          </table>
          <button className="order-ready"> LISTO </button>
        </div>
      </div>

      <div className="kitchen-card">
        <div className="header-card">
          <p>Orden n° 519 | Pedro Campbell</p>
          <p>Tiempo: 10:25 min</p>
        </div>
        <div className="body-card">
          <table className="list">
            <tbody>
              <tr>
                <td>1</td>
                <td>Hamburguesa Doble</td>
              </tr>
              <tr> 
                <td>1</td>
                <td>Aros de Cebolla</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Papas fritas</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hamburguesa Simple</td>
              </tr>
            </tbody>
              
          </table>
          <button className="order-ready"> LISTO </button>
        </div>
      </div>
  
    </section>
    
    </>
    

  )
};


export default KitchenOrder;