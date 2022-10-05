import React from 'react';

import { useNavigate } from 'react-router-dom';



const EditHeroBtn = (props) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(props.navigate)}>
      <img src={props.img} alt="party" />
    </div>
  );
};

export default EditHeroBtn;
