import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import UsersTable from './UsersTable';
import { getUsers } from '../../../controller/admin-users';
import ModalUsers from './ModalUsers';

const UserList = () => {
  const idGenerado = (Math.random() * 1000).toFixed(3).toString();
  const [state, setState] = useState({
    allUsers: [],
    userData: {
      id: idGenerado,
      email: '',
      password: '',
      roles: { admin: false },
    },
    display: {
      modal: false,
      btnEdit: false,
    },
  });

  useEffect(() => {
    // const abortController = new AbortController();
    // const { signal } = abortController;

    getUsers().then((resp) => setState((prevState) => ({
      ...prevState,
      allUsers: resp,
    })));
    // return () => {
    //   abortController.abort();
    // };
  }, []);

  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');

  const handleAdd = () => {
    document.body.append(modalRoot);
    setState((prevState) => ({
      ...prevState,
      display: {
        modal: true,
        btnEdit: false,
      },
    }));
  };

  return (
    <>
      <Header title="ADMINISTRADOR" />
      <main className="container-list">
        <div className="btn-container">
          <button type="button" onClick={handleAdd}>Agregar usuario</button>
          <ModalUsers state={state} setState={setState} />
        </div>
        <h2>Lista de usuarios</h2>
        <UsersTable state={state} setState={setState} modalRoot={modalRoot} />

      </main>
    </>
  );
};

export default UserList;
