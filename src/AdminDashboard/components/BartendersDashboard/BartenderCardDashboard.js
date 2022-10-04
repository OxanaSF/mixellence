import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

import { enableDeleteActions } from '../../../store/enable-delete-slice';
import { alertMessageActions } from '../../../store/alert-message-slice';
import { ToastContainer, toast } from 'react-toastify';

import EditData from '../ui/AddEditDelete/EditData';
import DeleteData from '../ui/AddEditDelete/DeleteData';

import 'react-toastify/dist/ReactToastify.css';
import classes from './BartenderCardDashboard.module.css';

const BartenderCardDashboard = ({ id, img, name, drink, city, quote }) => {
  const [visible, setVisible] = useState(false);

  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);

  const dispatch = useDispatch();

  // const notify = () => toast(alertMessage);
  const notify = () => {
    toast('You SUCCESSFULLY deleted the bartender!')
  }


  const ref = useRef();

  let style = { visibility: 'visible' };
  if (!visible) style.visibility = 'hidden';

  const handleStyleClick = () => {
    console.log('handleStyleClick');
    setVisible(!visible);
  };

  const handleBlur = () => {
    console.log('onBlur');
    setVisible(false);
  };

  // * Start Delete

  const deleteBartender = async (id) => {
    await deleteDoc(doc(db, 'bartenders', id));
  };

  const bartenderDeleteHandler = () => {
    deleteBartender(id);
    dispatch(enableDeleteActions.disable());
    // dispatch(
    //   alertMessageActions.alertMessageUpdate(
    //     'You SUCCESSFULLY deleted the bartender!'
    //   )
    // );
    notify()
    
  };
  // * End Delete

  return (
    <button
      className={classes.bartender_card_container}
      ref={ref}
      onClick={handleStyleClick}
      onBlur={handleBlur}
    >
      <header style={style} className={classes.bartender_card_header}>
        <DeleteData onClick={bartenderDeleteHandler} />

        <EditData navigate={`/team-dashboard/${id}/modal`} />
      </header>

      <div className={classes.bartender_card_main}>
        <div className={classes.bartender_card_img}>
          <img src={img} alt={name} />
        </div>

        <div className={classes.bartender_card_info}>
          <h3 className={classes.bartender_card_name}>{name}</h3>
          <h3 className={classes.bartender_card_drink}>{drink}</h3>
          <h3 className={classes.bartender_card_city}>{city}</h3>
          <p className={classes.bartender_card_quote}>{quote}</p>
        </div>
      </div>
    </button>
  );
};

export default BartenderCardDashboard;