import React from 'react';


import classes from './DeleteData.module.css';

const DeleteData = (props) => {


  return (
    <div className={classes.delete_data} onClick={props.onClick}>
      <img
        src={`${process.env.PUBLIC_URL}/images/delete.png`}
        alt="scissors"
      />
    </div>
  );
};

export default DeleteData;
