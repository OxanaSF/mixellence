import React from 'react'

import classes from './Modal.module.css'

const Modal = (props) => {

  const modal = props.modal;
  const setModal = props.setModal;

  return (
    <section onClick={() => setModal(!modal)} className={classes.modal}>
      Modal
    </section>
  )
}

export default Modal