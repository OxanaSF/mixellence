import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

import AddEditBartendersPage from '../../../../pages/EditBartendersPage/AddEditBartendersPage';
import classes from './AddUpdateModal.module.css';

export const ModalOverlay = (props) => {
  const content = (
    <div className={classes.modal__overlay} onClick={props.onClick}>
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
      {/* <BackdropModal onClick={props.onClick} /> */}
      <ModalOverlay onClick={props.onClick} />
    </Fragment>
  );
};

export default AddUpdateModal;
