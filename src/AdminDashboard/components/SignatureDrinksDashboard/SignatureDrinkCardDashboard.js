import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../../firebase';

import { addDataModalActions } from '../../../store/add-data-modal-slice';

import { alertMessageActions } from '../../../store/alert-message-slice';
import { ToastContainer, toast } from 'react-toastify';
import EditData from '../ui/AddEditDelete/EditData';

import 'react-toastify/dist/ReactToastify.css';
import classes from './SignatureDrinkCardDashboard.module.css';

const SignatureDrinkCardDashboard = ({ id, title, img, description }) => {
  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);

  const dispatch = useDispatch();

  const notify = () => toast(alertMessage);

  const ref = useRef();

  const updateDataHandler = () => {
    console.log('onClick');
    dispatch(addDataModalActions.open());
  };

  return (
    <button className={classes.drink_card_container} id={id}>
      <EditData navigate={`/drinks-dashboard/${id}/modal`} />

      <div className={classes.drink_card} onInvalid={id}>
        <div className={classes.drink_card_title}>{title}</div>
        <div className={classes.card_img}>
          <img src={img} alt={title} />
        </div>
        <div className={classes.drink_card_description}>{description}</div>
      </div>
    </button>
  );
};

export default SignatureDrinkCardDashboard;
