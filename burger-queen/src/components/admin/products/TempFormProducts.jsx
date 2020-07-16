import React from 'react'

const FormUsers = ({ user, errMail, errPass, error, handleInputChange, handleSelectChange, handleSave, handleEdit, handleCancel, button }) => {
  return (
    <form className="form-modal">
      <div className="form-container">
        <div className="field-p">
          <label htmlFor="input-name" className="label-text">Nombre:</label>
          <div className="box-input">
            <input 
              value={user.email}
              id ="input-name" 
              placeholder="Ingrese el nombre" 
              name="email"
              className="input-modal"
              onChange={handleInputChange} />
              {errMail && <span>e-mail inválido</span>} 
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-price" className="label-text">Precio:</label>
          <div className="box-input">
            <input 
              value={user.password}
              id ="input-price" 
              placeholder="Ingrese el precio" 
              name="price"
              className="input-modal" 
              onChange={handleInputChange} />
              {errPass && <span>contraseña inválida</span>} 
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-category" className="label-text">Categoría:</label>
          <div className="box-input">
            <input 
              value={user.password}
              id ="input-category" 
              placeholder="Ingrese la categoría" 
              name="category"
              className="input-modal" 
              onChange={handleInputChange} />
              {errPass && <span>contraseña inválida</span>} 
          </div>
        </div>
        <div className="field-p">
          <label htmlFor="input-date" className="label-text">Fecha:</label>
          <div className="box-option">
            <input 
              value={user.password}
              id ="input-date" 
              type="date"
              name="date"
              onChange={handleInputChange} />
              {errPass && <span>contraseña inválida</span>} 
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
          {button ? (
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
