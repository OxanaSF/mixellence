import React from 'react';
import { useDispatch } from 'react-redux';

import { enableDeleteActions } from '../../../../store/enable-delete-slice';
import { enableEditActions } from '../../../../store/enable-edit-slice';
import { addDataModalActions } from '../../../../store/add-data-modal-slice';

import AddData from './AddData';
import classes from './AddEditDelete.module.css';

const AddEditDelete = (props) => {
  const dispatch = useDispatch();

  // const deleteBtnHandler = (props) => {
  //   dispatch(enableEditActions.disable());
  //   dispatch(enableDeleteActions.enable());
  // };
  // const editBtnHandler = (props) => {
  //   dispatch(enableDeleteActions.disable());
  //   dispatch(enableEditActions.enable());
  // };

  const addModalHandler = () => {
    dispatch(enableDeleteActions.disable());
    dispatch(enableEditActions.disable());
    dispatch(addDataModalActions.open());
  };

  return (
    <div className={classes.add_edit_delete_container}>
      <div className={classes.add_edit_delete_wrapper}>
        <AddData onClick={addModalHandler} />

        {/* <button onClick={deleteBtnHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/scissors.png`}
            alt="scissors"
          />
        </button> */}

        {/* <button onClick={editBtnHandler}>
          <img src={`${process.env.PUBLIC_URL}/images/draw.png`} alt="draw" />
        </button> */}
      </div>
    </div>
  );
};

export default AddEditDelete;
