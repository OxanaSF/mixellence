import React from 'react';
import { useDispatch } from 'react-redux';


import { addDataModalActions } from '../../../../store/add-data-modal-slice';

import EditData from './EditData';
import classes from './EditDataContainer.module.css';

const EditDataContainer = (props) => {
  const dispatch = useDispatch();




  const addModalHandler = () => {
    dispatch(addDataModalActions.open());
  };

  return (
    <div className={classes.edit_data_container}>
      <div className={classes.edit_data_container_wrapper}>
        <EditData onClick={addModalHandler} />
      </div>
    </div>
  );
};

export default EditDataContainer;
