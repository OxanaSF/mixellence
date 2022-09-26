import React, { useState, useRef } from 'react';
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

import EditData from '../ui/AddEditDelete/EditData';
import DeleteData from '../ui/AddEditDelete/DeleteData';
import classes from './BartenderDashboardCard.module.css';

const BartenderDashboardCard = ({
  id,
  img,
  name,
  drink,
  city,
  quote,
  activateCard,
}) => {
  const [visible, setVisible] = useState(false);
  const [activeCard, setActveCard] = useState('');
  const [tempRef, setTempRef] = useState(null)
  

  // const activeCard = useSelector((state) => state.activeCard.activeCard);
  const enableDelete = useSelector((state) => state.enableDelete.enableDelete);
  const enableEdit = useSelector((state) => state.enableEdit.enableEdit);
  const enableAdd = useSelector((state) => state.enableAdd.enableAdd);
  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);

  const dispatch = useDispatch();

  const notify = () => toast(alertMessage);

  const updateDataHandler = () => {
    dispatch(addDataModalActions.open());
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

  // * End Dellete

  const ref = useRef();



  const handleStyleClick = () => {
    console.log('refOne', ref)
    console.log('id', id)
    if (ref !== id) {
      setVisible(false)
    }
    setActveCard(ref)
    setVisible(!visible);
  };

  let style = { visibility: 'visible' };
  if (!visible) style.visibility = 'hidden';

  return (
    <div
      ref={ref}
      className={classes.bartender_card_container}
      onClick={handleStyleClick}
    >
      {/* <ToastContainer closeButton /> */}

      <header
        style={style}
        className={classes.bartender_card_header}
      >
        <DeleteData onClick={bartenderDeleteHandler} />

        <EditData
          onClick={updateDataHandler}
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
    </div>
  );
};

export default BartenderDashboardCard;
