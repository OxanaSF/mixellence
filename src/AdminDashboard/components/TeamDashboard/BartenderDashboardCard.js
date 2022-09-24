import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

import { enableDeleteActions } from '../../../store/enable-delete-slice';
import { alertMessageActions } from '../../../store/alert-message-slice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EditData from '../ui/AddEditDelete/EditData';
import DeleteData from '../ui/AddEditDelete/DeleteData';
import classes from './BartenderDashboardCard.module.css';

const BartenderDashboardCard = ({ id, img, name, drink, city, quote }) => {
  const enableDelete = useSelector((state) => state.enableDelete.enableDelete);
  const enableEdit = useSelector((state) => state.enableEdit.enableEdit);
  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);

  const dispatch = useDispatch();

  const notify = () => toast(alertMessage);

  const deleteBartender = async (id) => {
    await deleteDoc(doc(db, 'bartenders', id));
  };

  const bartenderDeleteHandler = () => {
    deleteBartender(id);
    dispatch(enableDeleteActions.disable());
    dispatch(
      alertMessageActions.alertMessageUpdate(
        'You SUCCESSFULLY deleted the bartender!'
      )
    );
    notify();
  };

  return (
    <div className={classes.bartender_card_container}>
      <ToastContainer closeButton />

      {enableDelete && (
        <header className={classes.bartender_card_header}>
          <DeleteData onClick={bartenderDeleteHandler} />
        </header>
      )}

      {enableEdit && (
        <header className={classes.bartender_card_header}>
          {/* <EditData navigate={`/update-bartender/${id}`} /> */}
          <EditData navigate={`/team-dashboard/${id}/modal`} />
        </header>
      )}

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
    </div>
  );
};

export default BartenderDashboardCard;
