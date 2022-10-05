import React from 'react';
import { useDispatch } from 'react-redux';

import { addDataModalActions } from '../../../store/add-data-modal-slice';
import EditData from '../ui/AddEditDelete/EditData';

import classes from './SignatureDrinkCardDashboard.module.css';

const SignatureDrinkCardDashboard = ({ id, title, img, description }) => {

  const dispatch = useDispatch();



  const updateDataHandler = () => {
    console.log('onClick');
    dispatch(addDataModalActions.open());
  };

  return (
    <button className={classes.drink_card_container} id={id}>
      <EditData navigate={`/drinks-dashboard/${id}/modal`} />

      <div className={classes.drink_card} >
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
