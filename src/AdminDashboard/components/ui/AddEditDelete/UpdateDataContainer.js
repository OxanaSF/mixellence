import React from 'react';
import { useDispatch } from 'react-redux';

import { updateBtnToggleActions } from '../../../../store/update-data-btn-toggle-slice';
import classes from './AddEditDelete.module.css';

const UpdateDataContainer = (props) => {
  const dispatch = useDispatch();

  const updateDataBtnHandler = () => {
    dispatch(updateBtnToggleActions.updateBtnToggle());
  };

  return (
    <div className={classes.add_edit_delete_container}>
      <div className={classes.add_edit_delete_wrapper}>
        <button onClick={updateDataBtnHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/pen_white.png`}
            alt="draw"
          />
        </button>
      </div>
    </div>
  );
};

export default UpdateDataContainer;
