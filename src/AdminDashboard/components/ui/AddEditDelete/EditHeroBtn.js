import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { addDataModalActions } from '../../../../store/add-data-modal-slice';
// import classes from './EditBartender.module.css';

const EditHeroBtn = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const editModalHandler = () => {
  //   dispatch(addDataModalActions.open());
  // }

  return (
    <div

      onClick={() => navigate(props.navigate)}
      // onClick={editModalHandler }
    >
      <img src={props.img} alt="party" />
    </div>
  );
};

export default EditHeroBtn;
