import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
// import { enableDeleteActions } from '../../../store/enable-delete-slice';

import EditData from '../ui/AddEditDelete/EditData';
import DeleteData from '../ui/AddEditDelete/DeleteData';
import classes from './BartenderDashboardCard.module.css';

const BartenderDashboardCard = ({ id, img, name, drink, city, quote }) => {
  const enableDelete = useSelector((state) => state.enableDelete.enableDelete);
  const dispatch = useDispatch();

  const deleteBartender = async (id) => {
    await deleteDoc(doc(db, 'bartenders', id));
  };

  const bartenderDeleteHandler = () => {
    deleteBartender(id);
  };

  return (
    <div className={classes.bartender_card_container}>
      {/* <header className={classes.bartender_card_header}>
        <EditData navigate={`/update-bartender/${id}`} />
        <DeleteData onClick={bartenderDeleteHandler} />
      </header> */}

      {enableDelete && (
        <header className={classes.bartender_card_header}>
          <DeleteData onClick={bartenderDeleteHandler} />
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
