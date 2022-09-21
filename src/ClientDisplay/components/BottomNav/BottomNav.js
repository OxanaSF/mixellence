import React, { useContext } from 'react';

import ModalContext from '../../../context/modal-context';
import classes from './BottomNav.module.css';

const BottomNav = () => {
  const modalCtx = useContext(ModalContext)
  
  return (
    <div className={classes.bottomNav_container}>
      <img
        className={classes.instagram_icon}
        src={`${process.env.PUBLIC_URL}/images/instagram.png`}
        alt=""
      />

      <button onClick={modalCtx.modalHandler} className={classes.bottomNav__bookConsultation}>
        Book a Consultation
      </button>
    </div>
  );
};

export default BottomNav;
