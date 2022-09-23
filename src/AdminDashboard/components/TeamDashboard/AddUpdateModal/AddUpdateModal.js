import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { addDataModalActions } from '../../../../store/add-data-modal-slice';
import AddEditBartendersPage from '../../../../pages/EditBartendersPage/AddEditBartendersPage';
import classes from './AddUpdateModal.module.css';

export const ModalOverlay = (props) => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(addDataModalActions.close());
  };

  const content = (
    <div className={classes.modal__overlay} onClick={props.onClick}>
      <button onClick={closeModalHandler}>
        <img src={`${process.env.PUBLIC_URL}/images/cancel.png`} alt="cancel" />
      </button>
      <AddEditBartendersPage />
    </div>
  );

  return createPortal(
    content,
    document.getElementById('add-update-modal-root')
  );
};

const AddUpdateModal = (props) => {
  return (
    <Fragment>
      <ModalOverlay onClick={props.onClick} />
    </Fragment>
  );
};

export default AddUpdateModal;
