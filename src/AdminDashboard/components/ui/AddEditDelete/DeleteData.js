import React from 'react';


import classes from './DeleteData.module.css';

const DeleteData = (props) => {


  return (
    <button className={classes.delete_data} onClick={props.onClick}>
      <img
        src={`${process.env.PUBLIC_URL}/images/delete.png`}
        alt="scissors"
      />
    </button>
  );
};

export default DeleteData;
