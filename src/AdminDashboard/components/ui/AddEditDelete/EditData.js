import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { addDataModalActions } from '../../../../store/add-data-modal-slice';
import classes from './EditData.module.css';

const EditData = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editModalHandler = () => {
    dispatch(addDataModalActions.open());
  }

  return (
    <button
      className={classes.edit_data}
      onClick={() => navigate(props.navigate)}
      // onClick={editModalHandler }
    >
      <img src={`${process.env.PUBLIC_URL}/images/draw.png`} alt="draw" />
    </button>
  );
};

export default EditData;
