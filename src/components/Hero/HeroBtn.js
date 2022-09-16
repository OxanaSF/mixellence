import React, { useContext } from 'react'

import classes from './HeroBtn.module.css'

import ModalContext from '../../context/modal-context'

const HeroBtn = (props) => {

  const modalCtx = useContext(ModalContext);
  const modalHandler = modalCtx.modalHandler;

  return (
    <button onClick={modalHandler} className={classes.heroButton}>{props.text}</button>
  )
}

export default HeroBtn