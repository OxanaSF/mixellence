import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { enableDeleteActions } from '../../../../store/enable-delete-slice';
import { enableEditActions } from '../../../../store/enable-edit-slice';
import AddData from './AddData';
import classes from './AddEditDelete.module.css';

const AddEditDelete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteBtnHandler = (props) => {
    dispatch(enableEditActions.disable());
    dispatch(enableDeleteActions.enable());
  };
  const editBtnHandler = (props) => {
    dispatch(enableDeleteActions.disable());
    dispatch(enableEditActions.enable());
  };

  return (
    <div className={classes.add_edit_delete_container}>
      <div className={classes.add_edit_delete_wrapper}>


        <AddData navigate={'/add-bartender'} />\

        
        {/* <div className={classes.img}> */}
        {/* <button onClick={() => navigate('/add-bartender')}>
            <img src={`${process.env.PUBLIC_URL}/images/plus.png`} alt="plus" />
          </button> */}
        {/* </div> */}

        <button onClick={deleteBtnHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/scissors.png`}
            alt="scissors"
          />
        </button>

        <button onClick={editBtnHandler}>
          <img src={`${process.env.PUBLIC_URL}/images/draw.png`} alt="draw" />
        </button>
      </div>
    </div>
  );
};

export default AddEditDelete;
