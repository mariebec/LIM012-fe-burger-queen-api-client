import React from 'react'

const FormUsers = ({ product, error, handleInputChange, handleSave, handleEdit, handleCancel, display }) => {
  return (
    <form className="form-modal">
      <div className="form-container">
        <div className="field-p">
          <label htmlFor="input-name" className="label-text">Nombre:</label>
          <div className="box-input">
            <input 
              value={product.name}
              id ="input-name" 
              placeholder="Ingrese el nombre" 
              name="name"
              type="text"
              onChange={handleInputChange} 
              className={ error.name ? "input-modal error" : "input-modal" } />
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-price" className="label-text">Precio:</label>
          <p className="label-text">S/.</p>
          <div className="box-input">
            <input 
              value={product.price}
              id ="input-price" 
              placeholder="Ingrese el precio" 
              name="price"
              onChange={handleInputChange}
              type="text"
              className="input-modal"/>
              {error.price && <span>contraseña inválida</span>} 
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-category" className="label-text">Categoría:</label>
          <div className="box-option">
            <select id ="input-admin" onChange={handleInputChange} name="type" className="select-modal" value={product.type}>
              <option value="breakfast">Desayuno</option>
              <option value="burger">Hamburguesa</option>
              <option value="extra">Adicional</option>
              <option value="drink">Bebida</option>
            </select>
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-date" className="label-text">Fecha:</label>
          <div className="box-option">
            <input 
              value={product.date}
              id ="input-date" 
              type="date"
              name="date"
              onChange={handleInputChange} />
              {error.password && <span>contraseña inválida</span>} 
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-admin" className="label-text">Imagen:</label>
          <div className="box-option">
            <button type="button">Adjuntar imagen</button>
          </div>
        </div>
        {error.message !== '' && <span>{error.message}</span>}
        <div>
          <button type="button" className="btn-modal cancel" onClick={handleCancel}>Cancelar</button>
          {display.button ? (
            <button type="button" className="btn-modal save" onClick={handleEdit}>Editar</button>
          ) : (
            <button type="button" className="btn-modal save" onClick={handleSave}>Guardar</button>
          )}
        </div>
      </div>
    </form>
  )
}

export default FormUsers;
