import React from 'react'

const FormUsers = ({ handleInputChange, handleSelectChange, handleSave }) => {
  return (
    <form className="form-modal" >
      <div className="form-container">
        <div>
          <label htmlFor="input-email" className="label-text">E-MAIL:</label>
          <input 
            id ="input-email" 
            placeholder="Ingrese un e-mail" 
            name="email" type="email" 
            className="input-modal"
            onChange={handleInputChange} /> 
        </div>
        <div>
          <label htmlFor="input-password" className="label-text">CLAVE:</label>
          <input 
            id ="input-password" 
            placeholder="Ingrese la contraseña" 
            name="password" type="password"
            className="input-modal" 
            onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="input-admin" className="label-text">ADMIN:</label>
          <div className="box-select">
            <select id ="input-admin" onChange={handleSelectChange} className="select-modal">
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </div>
        </div>
        <div>
          <button type="button" className="btn-modal cancel">Cancelar</button>
          <button type="submit" className="btn-modal save" onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </form>
  )
}

export default FormUsers;
