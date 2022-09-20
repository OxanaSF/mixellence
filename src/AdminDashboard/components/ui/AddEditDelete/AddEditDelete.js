import React from 'react';

import classes from './AddEditDelete.module.css';

const AddEditDelete = () => {
  return (
    <div className={classes.add_edit_delete_container}>
      <div className={classes.add_edit_delete_wrapper}>
        <div className={classes.img}>
          <img src={`${process.env.PUBLIC_URL}/images/plus.png`} alt="plus" />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/scissors.png`}
            alt="scissors"
          />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/draw.png`} alt="draw" />
        </div>
      </div>
    </div>
  );
};

export default AddEditDelete;
