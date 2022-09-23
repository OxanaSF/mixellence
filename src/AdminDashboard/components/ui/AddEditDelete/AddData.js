import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddData = (props) => {
     const navigate = useNavigate();


  return (
    <button onClick={props.onClick}>
      <img src={`${process.env.PUBLIC_URL}/images/plus.png`} alt="plus" />
    </button>
  );
};

export default AddData;
