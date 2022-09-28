import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

import { activeCardActions } from '../../../store/active-card-slice';
import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { enableDeleteActions } from '../../../store/enable-delete-slice';
import { enableEditActions } from '../../../store/enable-edit-slice';
import { enableAddActions } from '../../../store/enable-add-slice';
import { alertMessageActions } from '../../../store/alert-message-slice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EditBartender from '../ui/AddEditDelete/EditBartender';
import DeleteData from '../ui/AddEditDelete/DeleteData';
import classes from './BartenderCardDashboard.module.css';

const BartenderCardDashboard = ({
  id,
  img,
  name,
  drink,
  city,
  quote,
}) => {
  const [visible, setVisible] = useState(false);

  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);

  const dispatch = useDispatch();

  const notify = () => toast(alertMessage);

  const ref = useRef();

  let style = { visibility: 'visible' };
  if (!visible) style.visibility = 'hidden';

  const updateDataHandler = () => {
    console.log('onClick');
    dispatch(addDataModalActions.open());
  };

  const handleStyleClick = () => {
    console.log('handleStyleClick');
    setVisible(!visible);
  };

  const handleBlur = () => {
    console.log('oBlur');
    setVisible(false);
  };

  // * Start Delete

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

        <EditBartender
          // onClick={updateDataHandler}
          navigate={`/team-dashboard/${id}/modal`}
        />
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
    // </div>
  );
};

export default BartenderCardDashboard;
