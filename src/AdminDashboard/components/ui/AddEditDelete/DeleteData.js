import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './DeleteData.module.css';

const DeleteData = (props) => {
  const navigate = useNavigate();

  return (
    <button 
    className={classes.delete_data} onClick={props.onClick}>
      <img
        src={`${process.env.PUBLIC_URL}/images/scissors.png`}
        alt="scissors"
      />
    </button>
  );
};

export default DeleteData;
