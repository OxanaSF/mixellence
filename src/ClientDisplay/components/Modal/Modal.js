import React, { useContext } from 'react'

import ContactForm from '../Contact/ContactForm'

import ModalContext from '../../../context/modal-context'

import classes from './Modal.module.css'

const Modal = (props) => {
  const modalCtx = useContext(ModalContext)

  return (
    <section
      className={classes.modal}
      onClick={modalCtx.modalHandler}
    >
      <ContactForm />
    </section>
  )
}

export default Modal