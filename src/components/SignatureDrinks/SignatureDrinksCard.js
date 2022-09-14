import React, { useState } from 'react';
import './SignatureDrinks.css';

const Card = ({ id, description, drinkName, linkImg }) => {
  const [display, setDisplay] = useState(false)


  return (
    <div className="card" onInvalid={id}>
        <div className='title'>

        </div>
      <div className="card-top">
        <img src={linkImg} alt={drinkName} />
      </div>

      <div className="card-bottom">
        <p className="card-bottom-quote">{description}</p>
      </div>
    </div>
  );
};

export default Card;
