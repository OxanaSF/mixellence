import React from 'react';
// import { useNavigate } from 'react-router-dom';

import AddData from './AddData';
import classes from './AddEditDelete.module.css';

const AddEditDelete = () => {
  // const navigate = useNavigate();

  return (
    <div className={classes.add_edit_delete_container}>
      <div className={classes.add_edit_delete_wrapper}>
        <AddData navigate={'/add-bartender'} />
        {/* <div className={classes.img}> */}
        {/* <button onClick={() => navigate('/add-bartender')}>
            <img src={`${process.env.PUBLIC_URL}/images/plus.png`} alt="plus" />
          </button> */}
        {/* </div> */}

   
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
