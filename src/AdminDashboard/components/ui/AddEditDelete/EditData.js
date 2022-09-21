import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './EditData.module.css';

const EditData = (props) => {
  const navigate = useNavigate();

  return (
    <button
      className={classes.edit_data}
      onClick={() => navigate(props.navigate)}
    >
      <img src={`${process.env.PUBLIC_URL}/images/draw.png`} alt="draw" />
    </button>
  );
};

export default EditData;
