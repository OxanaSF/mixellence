import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { addDataModalActions } from '../../../../store/add-data-modal-slice';
import classes from './EditBartender.module.css';

const EditData = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const editModalHandler = () => {
  //   dispatch(addDataModalActions.open());
  // }

  return (
    <div
      className={classes.edit_bartender}
      onClick={() => navigate(props.navigate)}
      // onClick={editModalHandler }
    >
      <img src={`${process.env.PUBLIC_URL}/images/pen_white.png`} alt="draw" />
    </div>
  );
};

export default EditData;
