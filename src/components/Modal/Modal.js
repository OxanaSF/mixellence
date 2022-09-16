import React, { useContext } from 'react'

import ModalContext from '../../context/modal-context'

import classes from './Modal.module.css'

const Modal = (props) => {
  const modalCtx = useContext(ModalContext)

  return (
    <section
      className={classes.modal}
      onClick={modalCtx.modalHandler}
    >
      Modal
    </section>
  )
}

export default Modal