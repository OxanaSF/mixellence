import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../../firebase';

import { addDataModalActions } from '../../../store/add-data-modal-slice';

import { alertMessageActions } from '../../../store/alert-message-slice';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import classes from './SignatureDrinks.module.css';

const SignatureDrinkCard = ({ id, title, img, description }) => {
  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);

  const dispatch = useDispatch();

  const notify = () => toast(alertMessage);

  const ref = useRef();

  const updateDataHandler = () => {
    console.log('onClick');
    dispatch(addDataModalActions.open());
  };

  return (
    <div className={classes.drink_card_container} id={id}>
 

      {/* <div className={classes.drink_card} > */}
        <div className={classes.drink_card_title}>
          {title}
        </div>
        {/* <div className={classes.card_img}> */}
          <img src={img} alt={title} />
        {/* </div> */}
        <div className={classes.drink_card_description}>
          {description}
        </div>
      {/* </div> */}
    </div>
  );
};

export default SignatureDrinkCard;
