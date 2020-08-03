import React, { useState } from 'react';

const ProductsMenu = ({ allProducts, products, setProducts }) => {

  const [ display, setDisplay ] = useState({
    btnMenu: 'all',
    btnType: false
  });

  const handleType = (type) => {
    switch (type) {
      case 'menu':
          setProducts(allProducts.filter((product) => product.type !== 'breakfast'));
          setDisplay({btnMenu: type, btnType: true});
        break;
      // case 'all':
      //     setProducts(allProducts);
      //     setDisplay({btnMenu: type, btnType: false});
      //   break;
      case 'breakfast':
        setProducts(allProducts.filter((product) => product.type === type));
        setDisplay({btnMenu: type, btnType: false});
      break;
      default: 
        setProducts(allProducts.filter((product) => product.type === type));
      break;
    }
  };

  return (
    <section className="products-options">
      <div className="options-type">
        {/* <button onClick={() => handleType('all')} className={display.btnMenu === 'all' ? "btn-active options-food" : "options-food"}>
          Todos
        </button> */}
        <button onClick={() => handleType('breakfast')} className={display.btnMenu === 'breakfast' ? "btn-active options-food" : "options-food"}>
          Desayuno
        </button>
        <button onClick={() => handleType('menu')} className={display.btnMenu === 'menu' ? "btn-active options-food" : "options-food"}>
          Menú
        </button>
      </div>
      <div className="box-photos">
        { display.btnType &&
        <div className="box-btn-food">
          <button onClick={() => handleType('burger')} className="btn-food">Hamburguesas</button>
          <button onClick={() => handleType('extra')} className="btn-food">Adicionales</button>
          <button onClick={() => handleType('drink')} className="btn-food">Bebidas</button>
        </div>}
        <div className="box-option-food">
          { 
            products.length > 0 ?
            products.map((element) => (
              <div key={element.id} className="box-food">
                <img src={element.image} alt="logo" className="img-food" /> 
                <p>{element.name}</p>
              </div>
            )) : (
              <div className="box-food">
                <p>No hay productos</p>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default ProductsMenu;
