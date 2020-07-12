import React from 'react'

const FormUsers = ({ user, errMail, errPass, handleInputChange, handleSelectChange, handleCancel, handleSave, closeModal }) => {
  return (
    <form className="form-modal">
      <div className="form-container">
        <div>
          <label htmlFor="input-email" className="label-text">E-MAIL:</label>
          <div className="box-input">
            <input 
              value={user.email}
              id ="input-email" 
              placeholder="Ingrese un e-mail" 
              name="email" type="email" 
              className="input-modal"
              onChange={handleInputChange} />
              {errMail && <span>e-mail inválido</span>} 
          </div>
        </div>
        <div>
          <label htmlFor="input-password" className="label-text">CLAVE:</label>
          <div className="box-input">
            <input 
              value={user.password}
              id ="input-password" 
              placeholder="Ingrese la contraseña" 
              name="password" type="password"
              className="input-modal" 
              onChange={handleInputChange} />
              {errPass && <span>contraseña inválida</span>} 
          </div>
        </div>
        <div>
          <label htmlFor="input-admin" className="label-text">ADMIN:</label>
          <div className="box-select">
            <select id ="input-admin" onChange={handleSelectChange} className="select-modal" value={user.roles.admin ? "SI" : "NO"}>
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </div>
        </div>
        <div>
          <button type="button" className="btn-modal cancel" onClick={handleCancel, closeModal}>Cancelar</button>
          <button type="button" className="btn-modal save" onClick={handleSave, closeModal}>Guardar</button>
        </div>
      </div>
    </form>
  )
}

export default FormUsers;
