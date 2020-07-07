import React from 'react';

const ModalUsers = () => {
  console.log('Componente modal')
  return (
    <section>
      <div>
        <p>Agregar usuario</p>
        <form>
          <label for="input-email">E-MAIL:</label>
          <input id ="input-email" placeholder="Ingrese un e-mail"></input>
          <label for="input-password">CLAVE:</label>
          <input id ="input-password" placeholder="Ingrese la contraseña"></input>
          <label for="input-admin">ADMIN:</label>
          <select id ="input-admin">
            <option>SI</option>
            <option>NO</option>
          </select>
          <label for="input-role">ROL:</label>
          <select id ="input-role">
            <option>Meserx</option>
            <option>Cocinerx</option>
            <option>Administradora</option>
          </select>
        </form>
      </div>
    </section>
  )
}

export default ModalUsers;
