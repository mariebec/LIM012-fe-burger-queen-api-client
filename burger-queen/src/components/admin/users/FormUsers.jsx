import React from 'react'

const FormUsers = ({ user, error, handleInputChange, handleSelectChange, handleRequest, closeModal, display }) => {
  return (
    <form className="form-modal">
      <div className="form-container">
        <div>
          <label htmlFor="input-email" className="label-text">E-MAIL:</label>
          <div className="box-input">
            <input 
              defaultValue={user.email}
              id ="input-email" 
              name="email" type="email" 
              onChange={handleInputChange}
              placeholder= {error.email ?  "Campo requerido" : "Ingrese el email" }
              className={ error.email ? "input-modal error" : "input-modal" } /> 
          </div>
        </div>
        <div>
          <label htmlFor="input-password" className="label-text">CLAVE:</label>
          <div className="box-input">
            <input 
              defaultValue={user.password}
              id ="input-password" 
              name="password" type="password"
              onChange={handleInputChange}
              placeholder= {error.password ?  "Campo requerido" : "Ingrese el password" }
              className={ error.password ? "input-modal error" : "input-modal" } /> 
          </div>
        </div>
        <div>
          <label htmlFor="input-admin" className="label-text">ADMIN:</label>
          <div className="box-option">
            <select id="input-admin" onChange={handleSelectChange} className="select-modal" defaultValue={user.roles.admin ? "SI" : "NO"}>
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </div>
        </div>
        {error.message !== '' && <span>{error.message}</span>}
        <div>
          <button type="button" className="btn-modal cancel" onClick={closeModal}>Cancelar</button>
          {display.button ? (
            <button type="button" className="btn-modal save" onClick={() => handleRequest('PUT')}>Editar</button>
          ) : (
            <button type="button" className="btn-modal save" onClick={() => handleRequest('POST')}>Guardar</button>
          )}
        </div>
      </div>
    </form>
  )
}

export default FormUsers;
