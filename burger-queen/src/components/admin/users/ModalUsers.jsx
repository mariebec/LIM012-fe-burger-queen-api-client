import React from 'react';
import ReactDOM from 'react-dom'
import FormUsers from './FormUsers';

const ModalUsers = ({ state, setState }) => {

  if(state.display.modal) {
    return ReactDOM.createPortal(
      <section className="modal-container">
        <div className="background-modal"></div>
        <div className="modal-window">
          <p className="title-modal">Agregar usuario</p>
          <FormUsers state={state} setState={setState}/>
        </div>
      </section>, document.getElementById("modal")
    );
  };
  return null;
}

export default ModalUsers;
